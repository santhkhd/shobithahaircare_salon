/**
 * Image Upload Service for Shobitha Haircare & Bridal Makeup Studio
 * Dual-Tier Architecture:
 *   Tier 1 (Preferred): Cloudinary Ultra-Fast Global CDN (25GB Free, Unsigned Upload)
 *   Tier 2 (Fallback): Google Drive via Google Apps Script (15GB Free)
 *   Tier 3 (Local Offline): High-compression WebP stored in LocalStorage
 */

const STORAGE_KEY_CLOUD_NAME = 'shobitha_cloudinary_cloud_name';
const STORAGE_KEY_PRESET = 'shobitha_cloudinary_preset';
const DEFAULT_CLOUD_NAME = 'nfdnu9ay';
const DEFAULT_PRESET = 'shobitha_preset';

export const getCloudinaryConfig = () => {
    try {
        let savedName = localStorage.getItem(STORAGE_KEY_CLOUD_NAME);
        // Auto-correct any legacy typo from nfdnu0ay (with a zero) to nfdnu9ay (with number 9)
        if (savedName === 'nfdnu0ay') {
            savedName = 'nfdnu9ay';
            localStorage.setItem(STORAGE_KEY_CLOUD_NAME, savedName);
        }
        return {
            cloudName: savedName || DEFAULT_CLOUD_NAME,
            uploadPreset: localStorage.getItem(STORAGE_KEY_PRESET) || DEFAULT_PRESET
        };
    } catch (e) {
        return { cloudName: DEFAULT_CLOUD_NAME, uploadPreset: DEFAULT_PRESET };
    }
};

export const saveCloudinaryConfig = (cloudName, uploadPreset) => {
    try {
        localStorage.setItem(STORAGE_KEY_CLOUD_NAME, String(cloudName || '').trim());
        localStorage.setItem(STORAGE_KEY_PRESET, String(uploadPreset || '').trim());
        return true;
    } catch (e) {
        console.error('Failed to save Cloudinary configuration:', e);
        return false;
    }
};

/**
 * Fast client-side pre-compression helper.
 * Shrinks multi-megabyte phone camera photos (10-20MB) down to an ultra-crisp ~40-60KB WebP
 * in < 50ms before transmitting over the network.
 * This makes uploads instant (< 0.5s) and prevents Google Apps Script timeouts or bandwidth waste.
 */
export const preCompressImage = async (file, maxWidth = 900, maxHeight = 1125, quality = 0.82) => {
    if (!file || !file.type || !file.type.startsWith('image/')) return file;
    // If it's already a tiny file (< 70KB), upload directly
    if (file.size && file.size < 70 * 1024) return file;

    try {
        const dataUrl = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });

        const img = await new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = () => resolve(image);
            image.onerror = reject;
            image.src = dataUrl;
        });

        const { width, height } = img;
        if (!width || !height) return file;

        // Downscale maintaining aspect ratio
        const scale = Math.min(maxWidth / width, maxHeight / height, 1);
        const finalW = Math.max(1, Math.round(width * scale));
        const finalH = Math.max(1, Math.round(height * scale));

        const canvas = document.createElement('canvas');
        canvas.width = finalW;
        canvas.height = finalH;
        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, finalW, finalH);

        // Export as WebP (fallback to JPEG if browser doesn't support WebP canvas export)
        let blob = await new Promise(res => canvas.toBlob(res, 'image/webp', quality));
        let ext = 'webp';
        let mime = 'image/webp';
        if (!blob) {
            blob = await new Promise(res => canvas.toBlob(res, 'image/jpeg', quality));
            ext = 'jpg';
            mime = 'image/jpeg';
        }

        if (blob) {
            const rawName = file.name || 'image';
            const baseName = rawName.substring(0, rawName.lastIndexOf('.')) || rawName;
            return new File([blob], `${baseName}.${ext}`, { type: mime, lastModified: Date.now() });
        }
    } catch (err) {
        console.warn('Pre-compression failed, using original file:', err);
    }
    return file;
};

/**
 * Upload directly to Cloudinary using Unsigned Upload Preset.
 * Fast, free, global CDN delivery with auto WebP optimization.
 */
export const uploadToCloudinary = async (file, options = {}) => {
    const { cloudName, uploadPreset } = getCloudinaryConfig();
    if (!cloudName || !uploadPreset) {
        return { success: false, reason: 'Cloudinary not configured' };
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);
    if (options.folder) {
        formData.append('folder', options.folder);
    }
    if (options.publicId) {
        formData.append('public_id', options.publicId.replace(/\.[^/.]+$/, ''));
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000); // 12-second safety timeout

    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: 'POST',
            body: formData,
            signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            const errMsg = errData.error?.message || `HTTP ${response.status}`;
            throw new Error(errMsg);
        }

        const data = await response.json();
        // Use direct secure HTTPS URL directly for instant CDN caching (avoids Cloudinary on-the-fly transformation lag)
        const directUrl = data.secure_url || data.url;

        return {
            success: true,
            url: directUrl,
            publicId: data.public_id,
            bytes: data.bytes,
            format: data.format,
            provider: 'cloudinary'
        };
    } catch (error) {
        clearTimeout(timeoutId);
        console.warn('Cloudinary upload failed, falling back:', error.message);
        return { success: false, reason: error.message };
    }
};

/**
 * Upload to Google Drive via Google Apps Script Webhook.
 * Google Apps Script saves the image into Google Drive folder "Shobitha_Salon_Uploads",
 * makes it public, and returns a high-speed direct link (https://lh3.googleusercontent.com/d/FILE_ID).
 */
export const uploadToGoogleDrive = async (file, serviceId, webhookUrl) => {
    if (!webhookUrl) {
        return { success: false, reason: 'No Google Apps Script webhook URL provided' };
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15-second safety timeout

    try {
        // Read pre-compressed file as base64 string
        const base64Data = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });

        const payload = {
            action: 'upload_image_to_drive',
            serviceId,
            fileName: file.name || `${serviceId}.webp`,
            mimeType: file.type || 'image/webp',
            base64Data
        };

        const response = await fetch(webhookUrl, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (response.ok) {
            const result = await response.json().catch(() => null);
            if (result && result.status === 'success' && result.url) {
                return {
                    success: true,
                    url: result.url,
                    fileId: result.fileId,
                    provider: 'google_drive'
                };
            }
        }

        return { success: false, reason: 'Google Drive response did not return a valid direct URL' };
    } catch (error) {
        clearTimeout(timeoutId);
        console.warn('Google Drive upload failed:', error.message);
        return { success: false, reason: error.message };
    }
};

/**
 * Master Smart Upload Handler:
 * 1. Fast pre-compresses image on device to ~40-60KB WebP (<50ms).
 * 2. Tries Cloudinary (Tier 1 - Ultra Fast CDN, <0.5s upload).
 * 3. If not configured or fails, tries Google Drive via Apps Script (Tier 2 - 15GB Cloud).
 * 4. Falls back to offline client-side auto-resized WebP (Tier 3).
 */
export const smartUploadServiceImage = async (file, serviceId, targetFileName, options = {}) => {
    const { webhookUrl, clientResizeFn } = options;

    // Pre-compress to ~40-60KB WebP before sending over network
    const optimizedFile = await preCompressImage(file, 900, 1125, 0.82);

    // 1. Try Cloudinary (Primary Fast CDN)
    // Generate a unique public ID (base name + timestamp e.g. "basic-haircut-1731221000")
    // This ensures:
    // 1. Upload NEVER gets rejected if the Cloudinary preset has "Overwrite: false"
    // 2. Each new upload gets a brand-new CDN URL, guaranteeing instant cache-busting
    const cleanBase = (targetFileName || `service-${serviceId}`)
        .replace(/\.[^/.]+$/, '')
        .replace(/[^a-zA-Z0-9_-]/g, '-');
    const uniquePublicId = `${cleanBase}-${Date.now()}`;

    const cloudinaryRes = await uploadToCloudinary(optimizedFile, {
        folder: 'shobitha_services',
        publicId: uniquePublicId
    });

    if (cloudinaryRes.success && cloudinaryRes.url) {
        return {
            success: true,
            url: cloudinaryRes.url,
            provider: 'Cloudinary CDN (Ultra Fast)',
            details: `Served worldwide via Cloudinary Global Edge CDN`
        };
    }

    // 2. Try Google Drive via Webhook (Secondary Cloud) with optimized light file
    if (webhookUrl) {
        const driveRes = await uploadToGoogleDrive(optimizedFile, serviceId, webhookUrl);
        if (driveRes.success && driveRes.url) {
            return {
                success: true,
                url: driveRes.url,
                provider: 'Google Drive (15 GB Cloud)',
                details: `Saved in your Google Drive 'Shobitha_Salon_Uploads' folder`
            };
        }
    }

    // 3. Client-side LocalStorage Auto-Resized WebP Fallback (Offline Safe)
    if (typeof clientResizeFn === 'function') {
        const localRes = await clientResizeFn(optimizedFile, 800, 1000, 0.75);
        return {
            success: true,
            url: localRes.dataUrl,
            provider: 'Local Storage (Compressed WebP)',
            details: `Optimized to ${localRes.newDisplay} (${localRes.reduction}% smaller)`
        };
    }

    return {
        success: false,
        reason: cloudinaryRes.reason || 'All upload providers failed'
    };
};

