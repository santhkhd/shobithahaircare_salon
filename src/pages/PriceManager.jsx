import React, { useState, useEffect, useRef } from 'react';
import { services, categories } from '../data/services';
import { specialOffers, defaultOffers } from '../data/offers';
import { reviews } from '../data/reviews';
import { blogPosts, blogCategories } from '../data/blogs';
import { initialStoreProducts, storeCategories } from '../data/storeProducts';
import { serviceImagePrompts } from '../data/serviceImagePrompts';
import { useSiteSettings } from '../context/SiteSettingsContext';
import { syncWithGoogleSheets } from '../services/googleSheetsSync';
import { getCloudinaryConfig, saveCloudinaryConfig, smartUploadServiceImage } from '../services/imageUploadService';
import Logo from '../components/Logo';
import { 
    FaTag, FaCheck, FaCopy, FaDownload, FaSyncAlt, FaArrowRight, 
    FaWhatsapp, FaShieldAlt, FaMobileAlt, FaImage, FaSearch, 
    FaTimes, FaExternalLinkAlt, FaCloudUploadAlt, FaEdit, 
    FaPlus, FaMinus, FaEye, FaEyeSlash, FaRobot, FaTable, FaLock, FaKey,
    FaBook, FaCalendarCheck, FaClock, FaStore, FaPhoneAlt, FaStar,
    FaTrash, FaShareSquare, FaCalculator, FaShoppingBag, FaThLarge, FaGlobe,
    FaCamera, FaMagic, FaFolderOpen, FaPalette,
    FaBars, FaBell, FaCog, FaHome, FaLayerGroup, FaListAlt, FaChartBar,
    FaCrown, FaCut, FaWind, FaSpa, FaPaintBrush, FaLeaf, FaEllipsisH,
    FaCrosshairs, FaCrop, FaDesktop, FaFilter, FaSave,
    FaChevronDown, FaChevronUp
} from 'react-icons/fa';

// Bundled image presets for promo banner selection
import luxuryGoldFacial from '../assets/images/luxury-gold-facial.jpg';
import bridalBannerBride from '../assets/images/bridal-banner-bride.jpg';
import bridalSaree from '../assets/images/bridal-saree.jpg';
import keratinSmoothening from '../assets/images/keratin-hair-smoothening.jpg';
import caramelBalayage from '../assets/images/caramel-balayage.jpg';
import hairSpaWash from '../assets/images/hair-spa-wash.jpg';
import hairCut from '../assets/images/hair-cut.jpg';
import bridalMehndi from '../assets/images/bridal-mehndi-art.jpg';
import hairStylingVoluminous from '../assets/images/hair-styling-voluminous.jpg';
import hairSmootheningAfter from '../assets/images/hair-smoothening-after.jpg';
import bridalMuhurtham from '../assets/images/bridal-muhurtham.jpg';
import bridalReception from '../assets/images/bridal-reception-look.jpg';
import heroKeralaBride from '../assets/images/hero-kerala-bride.jpg';
import bridalHeroPurpleSaree from '../assets/images/bridal-hero-purple-saree.jpg';
import skinFacial from '../assets/images/skin-facial.jpg';
import nailArt from '../assets/images/nail-art.jpg';
import pedicureSpa from '../assets/images/pedicure-spa.jpg';
import bodySpa from '../assets/images/body-spa.jpg';
import hairColor from '../assets/images/hair-color.jpg';
import hairTreatment from '../assets/images/hair-treatment.jpg';

const imagePresets = [
    { name: "Gold Facial", image: luxuryGoldFacial, tag: "Facial" },
    { name: "Kerala Bride", image: bridalBannerBride, tag: "Bridal" },
    { name: "Bridal Saree", image: bridalSaree, tag: "Bridal" },
    { name: "Keratin Therapy", image: keratinSmoothening, tag: "Haircare" },
    { name: "Balayage Colour", image: caramelBalayage, tag: "Hair Colour" },
    { name: "Hair Spa Wash", image: hairSpaWash, tag: "Hair Spa" },
    { name: "Haircut & Styling", image: hairCut, tag: "Haircut" },
    { name: "Bridal Mehndi", image: bridalMehndi, tag: "Mehndi" },
];

const promptCategories = [
    { id: 'All', label: 'All Services (172)', icon: null, title: 'All 172 Services' },
    { id: 'Bridal', label: 'Bridal', icon: FaCrown, title: 'Bridal Makeup & Special Occasion' },
    { id: 'Haircuts', label: 'Haircuts', icon: FaCut, title: 'Haircuts & Styling' },
    { id: 'Hair Spa', label: 'Hair Spa', icon: FaWind, title: 'Hair Spa & Scalp Treatments' },
    { id: 'Facial', label: 'Facial', icon: FaSpa, title: 'Facial & Skincare' },
    { id: 'Threading', label: 'Threading', icon: FaEye, title: 'Threading & Eye Grooming' },
    { id: 'Nail', label: 'Nails', icon: FaPaintBrush, title: 'Manicure, Pedicure & Nail Care' },
    { id: 'Body', label: 'Body Spa', icon: FaLeaf, title: 'Body Care & Relaxation' },
    { id: 'More', label: 'More', icon: FaEllipsisH, title: 'Packages, Waxing & Hair Colour' }
];

const PriceManager = () => {
    // Active Admin Tab: 'prompts' | 'prices' | 'offers' | 'blogs' | 'leads' | 'status' | 'quote' | 'reviews' | 'sheet' | 'bot'
    const [activeTab, setActiveTab] = useState('prompts');

    // Security PIN Lock (Optional for mobile quick protection)
    const [isUnlocked, setIsUnlocked] = useState(() => {
        return localStorage.getItem('shobitha_admin_unlocked') === 'true';
    });
    const [pinInput, setPinInput] = useState('');
    const [pinError, setPinError] = useState('');

    // Service list with edits & hide state
    const [serviceList, setServiceList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [visibilityFilter, setVisibilityFilter] = useState('all'); // 'all' | 'active' | 'hidden'
    const [searchQuery, setSearchQuery] = useState('');

    // Offer Banner state
    const [bannerActive, setBannerActive] = useState(specialOffers.showTopBanner);
    const [bannerBadge, setBannerBadge] = useState(specialOffers.banner.badge);
    const [bannerText, setBannerText] = useState(specialOffers.banner.text);
    const [bannerWhatsapp, setBannerWhatsapp] = useState(specialOffers.banner.whatsappMessage || '');

    // Featured Promo Card (e.g. O3+ Facial / Bridal Packages)
    const [promoTitle, setPromoTitle] = useState(specialOffers.promoBanner?.title || "O3+ & Gold Radiance");
    const [promoHighlight, setPromoHighlight] = useState(specialOffers.promoBanner?.highlight || "Facials");
    const [promoSubtitle, setPromoSubtitle] = useState(specialOffers.promoBanner?.subtitle || "De-Tan • Skin Polish • Glass Glow");
    const [promoButtonText, setPromoButtonText] = useState(specialOffers.promoBanner?.buttonText || "Book Now");
    const [promoLinkRoute, setPromoLinkRoute] = useState(specialOffers.promoBanner?.linkRoute || "/services");
    const [promoImage, setPromoImage] = useState(specialOffers.promoBanner?.image || luxuryGoldFacial);
    const [customImageUrl, setCustomImageUrl] = useState('');

    // 1. Feature: Blog Publisher state
    const [customBlogs, setCustomBlogs] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('shobitha_custom_blogs') || '[]');
        } catch (e) {
            return [];
        }
    });
    const [newBlog, setNewBlog] = useState({
        title: '',
        category: 'Bridal Beauty',
        readTime: '4 min read',
        excerpt: '',
        content: '',
        image: luxuryGoldFacial
    });
    const [blogPublishSuccess, setBlogPublishSuccess] = useState(false);

    // 2. Feature: Appointment Inquiries Log
    const [appointmentLeads, setAppointmentLeads] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('shobitha_appointment_leads') || '[]');
        } catch (e) {
            return [];
        }
    });

    // 3. Feature: Store Holiday & Timing Status
    const [storeStatus, setStoreStatus] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('shobitha_store_status') || '{"state":"open","text":"Open Today: 10:00 AM – 6:00 PM","customNote":"Walk-ins & Appointments welcome"}');
        } catch (e) {
            return { state: 'open', text: 'Open Today: 10:00 AM – 6:00 PM', customNote: 'Walk-ins & Appointments welcome' };
        }
    });

    // 4. Feature: One-Tap WhatsApp Service Quote Maker
    const [quoteServices, setQuoteServices] = useState({});
    const [clientName, setClientName] = useState('');
    const [quoteCopied, setQuoteCopied] = useState(false);

    // 5. Feature: Featured Client Review Picker for Home page
    const [reviewList, setReviewList] = useState(() => {
        try {
            const saved = localStorage.getItem('shobitha_featured_reviews');
            if (saved) return JSON.parse(saved);
        } catch (e) {}
        return reviews.map((r, i) => ({ ...r, featured: i < 3 }));
    });

    // Google Sheets live sync settings
    const DEFAULT_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbyxmhYmk3iV0Q9YjvJ7Wlyrl69J-hp8CNikUWZRfB-LJJdt870P6JvAm-HBEkbc8JVdMQ/exec';
    const [sheetWebhookUrl, setSheetWebhookUrl] = useState(() => {
        return localStorage.getItem('shobitha_sheet_webhook') || DEFAULT_WEBHOOK_URL;
    });
    const [telegramToken, setTelegramToken] = useState(() => {
        return localStorage.getItem('shobitha_telegram_token') || '';
    });
    const [syncStatus, setSyncStatus] = useState('');
    const [copied, setCopied] = useState(false);
    const [savedNotification, setSavedNotification] = useState(false);

    // Site Settings Context Integration (Navigation, Status, Home Sections, Affiliates, Branding)
    const { 
        pageVisibility, togglePage, 
        brandingSettings, toggleBranding,
        salonStatus, setSalonState, 
        homeSections, toggleHomeSection, 
        contactSettings, affiliateSettings,
        updateSettings 
    } = useSiteSettings();

    // Store & Affiliate Items State
    const [storeProductsList, setStoreProductsList] = useState(() => {
        try {
            const saved = localStorage.getItem('shobitha_custom_store_products');
            if (saved) return JSON.parse(saved);
        } catch (e) {}
        return initialStoreProducts;
    });

    const [newProduct, setNewProduct] = useState({
        name: '',
        brand: '',
        category: 'clothing',
        platform: 'amazon',
        price: '',
        originalPrice: '',
        affiliateUrl: '',
        image: '',
        shortDesc: '',
        badge: 'Recommended'
    });
    const [productAddedSuccess, setProductAddedSuccess] = useState(false);

    const handleSaveStoreProducts = (updated) => {
        setStoreProductsList(updated);
        try {
            localStorage.setItem('shobitha_custom_store_products', JSON.stringify(updated));
            window.dispatchEvent(new Event('store_products_updated'));
        } catch (e) {}
    };

    const handleToggleProductStock = (id) => {
        const updated = storeProductsList.map(p => p.id === id ? { ...p, inStock: !p.inStock } : p);
        handleSaveStoreProducts(updated);
    };

    const handleToggleProductHide = (id) => {
        const updated = storeProductsList.map(p => p.id === id ? { ...p, hidden: !p.hidden } : p);
        handleSaveStoreProducts(updated);
    };

    const handleDeleteProduct = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            const updated = storeProductsList.filter(p => p.id !== id);
            handleSaveStoreProducts(updated);
        }
    };

    const handleAddNewProduct = (e) => {
        e.preventDefault();
        if (!newProduct.name || !newProduct.price) {
            alert("Please enter at least product name and price");
            return;
        }

        const priceNum = parseInt(newProduct.price.replace(/[^\d]/g, ''), 10) || 0;
        const origNum = parseInt(newProduct.originalPrice.replace(/[^\d]/g, ''), 10) || priceNum;
        const discountPercent = origNum > priceNum ? Math.round(((origNum - priceNum) / origNum) * 100) : 0;

        const item = {
            id: `prod-${Date.now()}`,
            name: newProduct.name,
            brand: newProduct.brand || (newProduct.platform === 'salon' ? 'Shobitha Studio' : newProduct.platform.toUpperCase()),
            category: newProduct.category,
            platform: newProduct.platform,
            price: newProduct.price.startsWith('₹') ? newProduct.price : `₹${newProduct.price}`,
            priceNum,
            originalPrice: newProduct.originalPrice ? (newProduct.originalPrice.startsWith('₹') ? newProduct.originalPrice : `₹${newProduct.originalPrice}`) : '',
            originalPriceNum: origNum,
            discountPercent,
            badge: newProduct.badge || 'Recommended',
            rating: 4.8,
            reviewsCount: 1,
            image: newProduct.image || luxuryGoldFacial,
            inStock: true,
            affiliateUrl: newProduct.affiliateUrl,
            deliveryTag: newProduct.platform === 'salon' ? 'Studio Pickup & Courier' : `${newProduct.platform.toUpperCase()} Assured Delivery`,
            shortDesc: newProduct.shortDesc || newProduct.name,
            details: [newProduct.shortDesc || newProduct.name]
        };

        const updated = [item, ...storeProductsList];
        handleSaveStoreProducts(updated);
        setNewProduct({
            name: '',
            brand: '',
            category: 'clothing',
            platform: 'amazon',
            price: '',
            originalPrice: '',
            affiliateUrl: '',
            image: '',
            shortDesc: '',
            badge: 'Recommended'
        });
        setProductAddedSuccess(true);
        setTimeout(() => setProductAddedSuccess(false), 3000);
    };

    // 172 AI Image Studio State & Handlers
    const [promptSearch, setPromptSearch] = useState('');
    const [promptCategoryFilter, setPromptCategoryFilter] = useState('All');
    const [copiedPromptId, setCopiedPromptId] = useState(null);
    const [copiedFileId, setCopiedFileId] = useState(null);
    const [previewServiceModal, setPreviewServiceModal] = useState(null);
    const [serviceInputImages, setServiceInputImages] = useState({});
    const [uploadStats, setUploadStats] = useState({});
    const [isProcessingUpload, setIsProcessingUpload] = useState({});
    const [customTargetFileNames, setCustomTargetFileNames] = useState({});
    const [resizeQualityMode, setResizeQualityMode] = useState('800x1000'); // '800x1000' | '1000x1250' | '600x750'
    const [galleryViewMode, setGalleryViewMode] = useState('grid'); // 'grid' | 'detailed'
    const [cloudinaryConfig, setCloudinaryConfig] = useState(() => getCloudinaryConfig());
    const [cloudinarySavedMsg, setCloudinarySavedMsg] = useState(false);
    const [showPromptDetails, setShowPromptDetails] = useState({}); // { [id]: boolean } (prompts hidden by default)
    const [showAllPromptsGlobal, setShowAllPromptsGlobal] = useState(false);
    const [showModalPrompt, setShowModalPrompt] = useState(false);

    const openServicePreviewModal = (item) => {
        setShowModalPrompt(false);
        setPreviewServiceModal(item);
    };

    const togglePromptVisibility = (id) => {
        setShowPromptDetails(prev => {
            const currentlyOpen = prev[id] !== undefined ? prev[id] : showAllPromptsGlobal;
            return {
                ...prev,
                [id]: !currentlyOpen
            };
        });
    };

    const toggleAllPromptsGlobal = () => {
        const next = !showAllPromptsGlobal;
        setShowAllPromptsGlobal(next);
        // Clear individual overrides so all cards follow the global state
        setShowPromptDetails({});
    };

    const [customServiceImages, setCustomServiceImages] = useState(() => {
        try {
            const raw = JSON.parse(localStorage.getItem('shobitha_custom_service_images') || '{}');
            // Clean up any previously stored corrupted 45,000-character truncated strings
            let changed = false;
            Object.keys(raw).forEach(k => {
                if (raw[k] && typeof raw[k] === 'string' && raw[k].startsWith('data:image/') && (raw[k].length === 45000 || raw[k].length === 50000)) {
                    delete raw[k];
                    changed = true;
                }
            });
            if (changed) {
                try { localStorage.setItem('shobitha_custom_service_images', JSON.stringify(raw)); } catch (e) {}
            }
            return raw;
        } catch (e) {
            return {};
        }
    });

    // Cloud Sync Debounce Ref to ensure smooth 60fps UI with zero lag during rapid image changes
    // This is a SILENT background sync — it never touches syncStatus so the header pill stays "Synced"
    const cloudSyncTimeoutRef = useRef(null);
    const queueCloudSync = (updatedImages) => {
        if (!sheetWebhookUrl) return; // skip silently — no webhook configured
        if (cloudSyncTimeoutRef.current) {
            clearTimeout(cloudSyncTimeoutRef.current);
        }
        cloudSyncTimeoutRef.current = setTimeout(async () => {
            try {
                // Fire-and-forget silent POST — ONLY syncs serviceImages
                // Does NOT touch prices, offers, or trigger full sheet rewrite
                const activeImages = updatedImages || customServiceImages;
                const payload = {
                    timestamp: new Date().toISOString(),
                    serviceImages: activeImages
                };
                await fetch(sheetWebhookUrl, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                console.log('[BG Sync] Silent cloud sync completed.');
            } catch (e) {
                console.warn('[BG Sync] Silent background sync failed (ignored):', e);
            }
        }, 2000);
    };

    // Helper: Select best high-res photo for each of the 172 service cards
    const getServiceDisplayImage = (item) => {
        if (!item) return hairCut;
        if (customServiceImages[item.id]) {
            return customServiceImages[item.id];
        }
        const svc = services.find(s => s.id === item.id);
        if (svc && svc.image && typeof svc.image === 'string' && !svc.image.includes('placeholder')) {
            return svc.image;
        }

        const lowerName = (item.name || '').toLowerCase();
        const lowerCat = (item.category || '').toLowerCase();

        // 1. Bridal Looks
        if (lowerCat.includes('bridal') || lowerName.includes('bride') || lowerName.includes('muhurtham')) {
            if (lowerName.includes('reception') || lowerName.includes('party')) return bridalReception;
            if (lowerName.includes('purple') || lowerName.includes('christian')) return bridalHeroPurpleSaree;
            if (lowerName.includes('saree') || lowerName.includes('draping')) return bridalSaree;
            if (lowerName.includes('traditional') || lowerName.includes('kerala')) return heroKeralaBride;
            return bridalMuhurtham;
        }

        // 2. Haircut & Styling
        if (lowerCat.includes('haircut') || lowerName.includes('cut') || lowerName.includes('trim') || lowerName.includes('curling') || lowerName.includes('styling') || lowerName.includes('blowdry')) {
            if (lowerName.includes('curling') || lowerName.includes('iron') || lowerName.includes('styling') || lowerName.includes('volume') || lowerName.includes('wave')) {
                return hairStylingVoluminous;
            }
            return hairCut;
        }

        // 3. Hair Smoothening / Straightening / Keratin
        if (lowerCat.includes('smoothening') || lowerName.includes('straight') || lowerName.includes('keratin') || lowerName.includes('botox') || lowerName.includes('nanoplastia')) {
            if (lowerName.includes('straight')) return hairSmootheningAfter;
            return keratinSmoothening;
        }

        // 4. Hair Spa & Scalp Treatments
        if (lowerCat.includes('hair spa') || lowerCat.includes('treatment') || lowerName.includes('spa') || lowerName.includes('dandruff') || lowerName.includes('scalp')) {
            if (lowerName.includes('treatment') || lowerName.includes('repair')) return hairTreatment;
            return hairSpaWash;
        }

        // 5. Hair Colour & Highlights
        if (lowerCat.includes('colour') || lowerCat.includes('color') || lowerName.includes('balayage') || lowerName.includes('highlight') || lowerName.includes('streaks')) {
            if (lowerName.includes('balayage') || lowerName.includes('caramel')) return caramelBalayage;
            return hairColor;
        }

        // 6. Facial & Skincare
        if (lowerCat.includes('facial') || lowerCat.includes('skin') || lowerName.includes('facial') || lowerName.includes('cleanup') || lowerName.includes('bleach')) {
            if (lowerName.includes('gold') || lowerName.includes('diamond')) return luxuryGoldFacial;
            return skinFacial;
        }

        // 7. Mehndi Design
        if (lowerCat.includes('mehndi') || lowerName.includes('mehndi') || lowerName.includes('henna')) {
            return bridalMehndi;
        }

        // 8. Nails, Manicure & Pedicure
        if (lowerCat.includes('nail') || lowerCat.includes('pedicure') || lowerCat.includes('manicure') || lowerName.includes('nail') || lowerName.includes('pedicure') || lowerName.includes('manicure')) {
            if (lowerName.includes('pedicure') || lowerName.includes('feet') || lowerName.includes('foot')) return pedicureSpa;
            return nailArt;
        }

        // 9. Body Spa & Care
        if (lowerCat.includes('body') || lowerName.includes('body') || lowerName.includes('massage')) {
            return bodySpa;
        }

        return hairCut;
    };

    // Client-side auto-resize & compression helper (reduces 15MB+ phone/Gemini images to ~60KB WebP)
    const resizeAndOptimizeImage = (file, targetWidth = 800, targetHeight = 1000, quality = 0.82) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.onload = () => {
                    let { width, height } = img;
                    
                    // Downscale maintaining aspect ratio, bounded by targetWidth & targetHeight
                    const scale = Math.min(targetWidth / width, targetHeight / height, 1);
                    const finalW = Math.max(1, Math.round(width * scale));
                    const finalH = Math.max(1, Math.round(height * scale));

                    const canvas = document.createElement('canvas');
                    canvas.width = finalW;
                    canvas.height = finalH;
                    const ctx = canvas.getContext('2d');
                    ctx.imageSmoothingEnabled = true;
                    ctx.imageSmoothingQuality = 'high';
                    ctx.drawImage(img, 0, 0, finalW, finalH);

                    // Try exporting to WebP first, fallback to JPEG
                    // Ensure the base64 string stays under 40,000 characters so Google Sheets cells NEVER truncate it!
                    let currentQuality = Math.min(quality, 0.72);
                    let dataUrl;
                    try {
                        dataUrl = canvas.toDataURL('image/webp', currentQuality);
                        if (!dataUrl || !dataUrl.startsWith('data:image/webp')) {
                            dataUrl = canvas.toDataURL('image/jpeg', currentQuality);
                        }
                    } catch (e) {
                        dataUrl = canvas.toDataURL('image/jpeg', currentQuality);
                    }

                    // Dynamically reduce quality and dimensions so base64 string NEVER exceeds 38,000 characters
                    let attempts = 0;
                    let activeCanvas = canvas;
                    while (dataUrl && dataUrl.length > 38000 && attempts < 5) {
                        attempts++;
                        currentQuality = Math.max(0.40, currentQuality - 0.08);
                        const shrinkScale = 0.85;
                        const newW = Math.max(300, Math.round(activeCanvas.width * shrinkScale));
                        const newH = Math.max(375, Math.round(activeCanvas.height * shrinkScale));
                        const smallCanvas = document.createElement('canvas');
                        smallCanvas.width = newW;
                        smallCanvas.height = newH;
                        const sCtx = smallCanvas.getContext('2d');
                        sCtx.imageSmoothingEnabled = true;
                        sCtx.imageSmoothingQuality = 'high';
                        sCtx.drawImage(activeCanvas, 0, 0, newW, newH);
                        activeCanvas = smallCanvas;
                        try {
                            dataUrl = activeCanvas.toDataURL('image/webp', currentQuality);
                            if (!dataUrl || !dataUrl.startsWith('data:image/webp')) {
                                dataUrl = activeCanvas.toDataURL('image/jpeg', currentQuality);
                            }
                        } catch (e) {
                            dataUrl = activeCanvas.toDataURL('image/jpeg', currentQuality);
                        }
                    }

                    // Calculate file size savings
                    const approxBytes = Math.round((dataUrl.length - 22) * 3 / 4);
                    const originalKB = (file.size / 1024).toFixed(0);
                    const newKB = (approxBytes / 1024).toFixed(0);
                    const originalMB = (file.size / (1024 * 1024)).toFixed(1);
                    const reduction = Math.max(0, Math.round((1 - approxBytes / file.size) * 100));

                    resolve({
                        dataUrl,
                        width: finalW,
                        height: finalH,
                        originalDisplay: file.size > 1024 * 1024 ? `${originalMB} MB` : `${originalKB} KB`,
                        newDisplay: `${newKB} KB`,
                        reduction
                    });
                };
                img.onerror = () => reject(new Error('Image failed to decode'));
                img.src = event.target.result;
            };
            reader.onerror = () => reject(new Error('FileReader failed'));
            reader.readAsDataURL(file);
        });
    };

    const handleCopyPrompt = (id, text) => {
        navigator.clipboard.writeText(text);
        setCopiedPromptId(id);
        setTimeout(() => setCopiedPromptId(null), 2500);
    };

    const handleCopyFileName = (id, fileName) => {
        navigator.clipboard.writeText(fileName);
        setCopiedFileId(id);
        setTimeout(() => setCopiedFileId(null), 2500);
    };

    const handleSaveServiceImage = (serviceId, imageUrl, showAlert = true) => {
        if (!imageUrl || !imageUrl.trim()) return;
        let finalUrl = imageUrl.trim();

        // Detect Gemini / ChatGPT webpage share links which are HTML SPAs, not images
        if (finalUrl.includes('share.gemini.google') || finalUrl.includes('gemini.google.com/share') || finalUrl.includes('chatgpt.com/share')) {
            alert(
                "⚠️ Gemini Share Link Detected!\n\n" +
                "The URL you pasted is a Gemini conversation webpage, not a direct image file.\n\n" +
                "How to use your Gemini image:\n" +
                "1. Open the Gemini link in your browser.\n" +
                "2. Tap/right-click the generated image and choose 'Save Image' (or download it).\n" +
                "3. Click the '📁 Upload & Auto-Resize' button on this card. It will automatically resize and optimize the file!\n\n" +
                "Alternatively, right-click the image in Gemini and choose 'Copy Image Address' to paste the direct image link."
            );
            return;
        }

        // Auto-convert Google Drive share link to direct view URL if applicable
        if (finalUrl.includes('drive.google.com/file/d/')) {
            const match = finalUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
            if (match && match[1]) {
                finalUrl = `https://drive.google.com/uc?export=view&id=${match[1]}`;
            }
        }

        // Instant local update (0ms)
        const updated = { ...customServiceImages, [serviceId]: finalUrl };
        setCustomServiceImages(updated);
        // Clear any stale typed input so input box displays the newly saved URL
        setServiceInputImages(prev => {
            const next = { ...prev };
            delete next[serviceId];
            return next;
        });
        try {
            localStorage.setItem('shobitha_custom_service_images', JSON.stringify(updated));
            window.dispatchEvent(new Event('service_images_updated'));
            if (showAlert) {
                setSavedNotification(`✓ Image updated for ${serviceId}! Live preview active.`);
                setTimeout(() => setSavedNotification(false), 2500);
            }
            // Debounced Google Sheet cloud sync in background (doesn't block UI)
            queueCloudSync(updated);
        } catch (e) {
            console.error(e);
        }
    };

    const handleFileUpload = async (serviceId, file, targetFileName) => {
        if (!file) return;
        if (!file.type.startsWith('image/')) {
            alert('Please select a valid image file (JPG, PNG, WebP, AVIF).');
            return;
        }

        // 1. Instant Optimistic Preview (0ms): image swaps on screen immediately!
        const tempBlobUrl = URL.createObjectURL(file);
        setCustomServiceImages(prev => ({ ...prev, [serviceId]: tempBlobUrl }));
        setIsProcessingUpload(prev => ({ ...prev, [serviceId]: true }));

        try {
            // 2. Ultra-fast Cloudinary CDN upload (<0.4s) with client-side WebP compression
            const uploadRes = await smartUploadServiceImage(file, serviceId, targetFileName, {
                webhookUrl: sheetWebhookUrl,
                clientResizeFn: resizeAndOptimizeImage
            });

            if (!uploadRes.success) {
                throw new Error(uploadRes.reason || 'Upload failed');
            }

            // 3. Save permanent CDN / WebP URL
            handleSaveServiceImage(serviceId, uploadRes.url, false);

            setUploadStats(prev => ({
                ...prev,
                [serviceId]: {
                    provider: uploadRes.provider,
                    details: uploadRes.details,
                    url: uploadRes.url,
                    fileName: targetFileName || file.name,
                    timestamp: Date.now()
                }
            }));
            setSavedNotification(`✓ Image uploaded successfully for ${serviceId}!`);
            setTimeout(() => setSavedNotification(false), 2500);
        } catch (err) {
            console.error('Upload failed:', err);
            // Revert optimistic preview on failure
            setCustomServiceImages(prev => {
                const next = { ...prev };
                delete next[serviceId];
                return next;
            });
            alert('Failed to upload image: ' + err.message);
        } finally {
            setIsProcessingUpload(prev => ({ ...prev, [serviceId]: false }));
            // Delay revoke so React has time to commit the CDN URL to the DOM
            // before the blob URL is invalidated (prevents blank image flash)
            setTimeout(() => URL.revokeObjectURL(tempBlobUrl), 500);
        }
    };

    const handleDownloadResizedFile = (serviceId, fallbackFileName) => {
        const dataUrl = customServiceImages[serviceId];
        if (!dataUrl) {
            alert('Please upload an image first to download it.');
            return;
        }

        const fileName = customTargetFileNames[serviceId] || fallbackFileName || `service-${serviceId}.webp`;

        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        link.remove();
    };

    const handleRemoveServiceImage = (serviceId) => {
        // Instant local removal (0ms)
        const updated = { ...customServiceImages };
        delete updated[serviceId];
        setCustomServiceImages(updated);

        // Clear input text and upload status for this card immediately
        setServiceInputImages(prev => {
            const next = { ...prev };
            delete next[serviceId];
            return next;
        });
        setUploadStats(prev => {
            const next = { ...prev };
            delete next[serviceId];
            return next;
        });

        try {
            if (Object.keys(updated).length === 0) {
                localStorage.removeItem('shobitha_custom_service_images');
            } else {
                localStorage.setItem('shobitha_custom_service_images', JSON.stringify(updated));
            }
            window.dispatchEvent(new Event('service_images_updated'));

            // Background debounced cloud sync (zero freeze/lag)
            queueCloudSync(updated);

            // Instant non-blocking notification toast
            setSavedNotification(`✓ Image reset to default for ${serviceId}`);
            setTimeout(() => setSavedNotification(false), 2500);
        } catch (e) {
            console.error('Failed to reset image:', e);
        }
    };

    const handleResetAllCustomImages = () => {
        const count = Object.keys(customServiceImages).length;
        if (!window.confirm(`Restore original catalogue photos for all services? This will clear all custom uploaded images.`)) {
            return;
        }

        setCustomServiceImages({});
        setServiceInputImages({});
        setUploadStats({});

        try {
            localStorage.removeItem('shobitha_custom_service_images');
            window.dispatchEvent(new Event('service_images_updated'));

            if (sheetWebhookUrl) {
                handlePushToGoogleSheet(false, {});
            }
            alert(`✓ All custom service images cleared! Original website catalogue photos restored.`);
        } catch (e) {
            console.error('Failed to clear custom images:', e);
        }
    };

    const handleExportImagesBackup = () => {
        const customCount = Object.keys(customServiceImages).length;
        if (customCount === 0) {
            alert("No custom images have been uploaded on this device yet. Upload an image first!");
            return;
        }

        const backupData = {
            version: "1.0",
            exportDate: new Date().toISOString(),
            totalImages: customCount,
            customServiceImages,
            customTargetFileNames
        };

        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `shobitha-custom-images-backup-${new Date().toISOString().slice(0, 10)}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
    };

    const handleImportImagesBackup = (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const parsed = JSON.parse(event.target.result);
                const importedImages = parsed.customServiceImages || parsed;
                if (importedImages && typeof importedImages === 'object') {
                    const count = Object.keys(importedImages).length;
                    if (count === 0) {
                        alert("The selected backup file contains 0 images.");
                        return;
                    }

                    const merged = { ...customServiceImages, ...importedImages };
                    setCustomServiceImages(merged);
                    localStorage.setItem('shobitha_custom_service_images', JSON.stringify(merged));

                    if (parsed.customTargetFileNames) {
                        const mergedNames = { ...customTargetFileNames, ...parsed.customTargetFileNames };
                        setCustomTargetFileNames(mergedNames);
                    }

                    window.dispatchEvent(new Event('service_images_updated'));
                    alert(`✓ Successfully imported ${count} images! Your PC now displays all images uploaded from your mobile phone.`);
                } else {
                    alert("Invalid backup file format. Please choose a valid JSON backup file.");
                }
            } catch (err) {
                console.error('Import error:', err);
                alert("Failed to read backup file: " + err.message);
            }
        };
        reader.readAsText(file);
        e.target.value = '';
    };

    const handleDownloadAllPromptsJSON = () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(serviceImagePrompts, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", "shobitha_172_service_image_prompts.json");
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
    };

    const handleCopyAllPromptsText = () => {
        const bulkText = serviceImagePrompts.map(p => 
            `#${p.index} [${p.category}] ${p.name}\nFile: ${p.fileName}\nPrompt: ${p.prompt}\nWatermark: ${p.watermark}\n---\n`
        ).join('\n');
        navigator.clipboard.writeText(bulkText);
        alert("All 172 service prompts copied to clipboard for batch AI generation!");
    };

    useEffect(() => {
        document.title = "Mobile Salon Studio Admin | Shobitha Haircare";

        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setPreviewServiceModal(null);
            }
        };
        window.addEventListener('keydown', handleEscape);

        // Load custom saved services from localStorage if present
        try {
            const saved = localStorage.getItem('shobitha_custom_services');
            if (saved) {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    const map = new Map(parsed.map(item => [item.id, item]));
                    const merged = services.map(s => {
                        const custom = map.get(s.id);
                        if (custom) {
                            let op = custom.offerPrice;
                            if (op) {
                                const str = String(op).trim();
                                const num = parseFloat(str);
                                if (!str.includes('%') && !isNaN(num) && num > 0 && num < 1) {
                                    op = `${Math.round(num * 100)}%`;
                                }
                            }
                            return { ...s, ...custom, offerPrice: op };
                        }
                        return s;
                    });
                    setServiceList(merged);
                    return () => window.removeEventListener('keydown', handleEscape);
                }
            }
        } catch (e) {}

        setServiceList(services);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    const handleUnlock = (e) => {
        e.preventDefault();
        if (pinInput === '1234' || pinInput === 'salon' || pinInput === 'shobitha') {
            setIsUnlocked(true);
            localStorage.setItem('shobitha_admin_unlocked', 'true');
            setPinError('');
        } else {
            setPinError('Incorrect PIN. (Default is 1234)');
        }
    };

    const handleLock = () => {
        setIsUnlocked(false);
        localStorage.removeItem('shobitha_admin_unlocked');
        setPinInput('');
    };

    // Filter services with category, search, and hidden filter
    const filteredServices = serviceList.filter(s => {
        const matchesCategory = selectedCategory === 'All' || s.category === selectedCategory;
        const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              s.category.toLowerCase().includes(searchQuery.toLowerCase());
        
        let matchesVisibility = true;
        if (visibilityFilter === 'active') matchesVisibility = !s.hidden;
        if (visibilityFilter === 'hidden') matchesVisibility = !!s.hidden;

        return matchesCategory && matchesSearch && matchesVisibility;
    });

    const activeCount = serviceList.filter(s => !s.hidden).length;
    const hiddenCount = serviceList.filter(s => !!s.hidden).length;

    // Toggle hide/show for service
    const handleToggleHide = (id) => {
        const updated = serviceList.map(s => {
            if (s.id === id) {
                return { ...s, hidden: !s.hidden };
            }
            return s;
        });
        setServiceList(updated);
        // Immediate local save
        saveServicesToStorage(updated);
    };

    // Update single price
    const handlePriceChange = (id, newPrice) => {
        const cleaned = newPrice.startsWith('₹') ? newPrice : `₹${newPrice}`;
        const updated = serviceList.map(s => s.id === id ? { ...s, price: cleaned } : s);
        setServiceList(updated);
    };

    // Quick +/- adjustment buttons
    const handleQuickPriceAdjust = (id, delta) => {
        const updated = serviceList.map(s => {
            if (s.id === id) {
                const num = parseInt(s.price.replace(/[^\d]/g, ''), 10) || 0;
                const newNum = Math.max(0, num + delta);
                return { ...s, price: `₹${newNum.toLocaleString('en-IN')}` };
            }
            return s;
        });
        setServiceList(updated);
    };

    // Update offer discount
    const handleOfferChange = (id, offerVal) => {
        let val = offerVal;
        if (val) {
            const str = String(val).trim();
            const num = parseFloat(str);
            if (!str.includes('%') && !isNaN(num) && num > 0 && num < 1) {
                val = `${Math.round(num * 100)}%`;
            }
        }
        const updated = serviceList.map(s => s.id === id ? { ...s, offerPrice: val } : s);
        setServiceList(updated);
    };

    // Helper: Save services to localStorage
    const saveServicesToStorage = (list) => {
        const customServices = list.map(s => ({
            id: s.id,
            price: s.price,
            offerPrice: s.offerPrice || null,
            duration: s.duration,
            hidden: !!s.hidden
        }));
        localStorage.setItem('shobitha_custom_services', JSON.stringify(customServices));
    };

    // Save all changes to local storage & immediately push to Google Sheets for worldwide sync
    const handleSaveToWebsite = (triggerCloudSync = true) => {
        try {
            saveServicesToStorage(serviceList);

            // Save offers configuration
            const customOffers = {
                showTopBanner: bannerActive,
                banner: {
                    badge: bannerBadge,
                    text: bannerText,
                    linkText: "Book Now",
                    linkRoute: "/services",
                    whatsappMessage: bannerWhatsapp || `Inquiry for ${bannerBadge}: ${bannerText}`
                },
                promoBanner: {
                    title: promoTitle,
                    highlight: promoHighlight,
                    subtitle: promoSubtitle,
                    buttonText: promoButtonText,
                    linkRoute: promoLinkRoute,
                    image: promoImage
                }
            };
            localStorage.setItem('shobitha_custom_offers', JSON.stringify(customOffers));

            // Save store status
            localStorage.setItem('shobitha_store_status', JSON.stringify(storeStatus));

            // Save featured reviews
            localStorage.setItem('shobitha_featured_reviews', JSON.stringify(reviewList));

            setSavedNotification(true);
            setTimeout(() => setSavedNotification(false), 3000);

            // Auto-sync everything worldwide via Google Sheets
            if (triggerCloudSync && sheetWebhookUrl) {
                handlePushToGoogleSheet(false);
            }
        } catch (err) {
            alert('Failed to save to local storage: ' + err.message);
        }
    };

    // Push Live to Google Sheet Webhook (Master Cloud Sync - Worldwide)
    const handlePushToGoogleSheet = async (shouldSaveLocal = true, customImagesOverride = null) => {
        if (!sheetWebhookUrl) {
            alert("Please paste your Google Sheet Webhook URL in the 'Google Sheets' tab first!");
            setActiveTab('sheet');
            return;
        }

        setSyncStatus('syncing');
        try {
            const activeImages = customImagesOverride || customServiceImages;
            const payload = {
                timestamp: new Date().toISOString(),
                banner: {
                    active: bannerActive,
                    badge: bannerBadge,
                    text: bannerText,
                    whatsapp: bannerWhatsapp
                },
                promoBanner: {
                    title: promoTitle,
                    highlight: promoHighlight,
                    subtitle: promoSubtitle,
                    buttonText: promoButtonText,
                    linkRoute: promoLinkRoute,
                    image: typeof promoImage === 'string' && promoImage.startsWith('data:') ? '[Base64 Image]' : promoImage
                },
                storeStatus,
                serviceImages: activeImages,
                siteSettings: {
                    pageVisibility,
                    brandingSettings,
                    salonStatus,
                    homeSections,
                    contactSettings,
                    affiliateSettings
                },
                storeProducts: storeProductsList,
                featuredReviews: reviewList.filter(r => r.featured).map(r => r.id),
                services: serviceList.map(s => ({
                    id: s.id,
                    name: s.name,
                    category: s.category,
                    price: s.price,
                    offerPrice: s.offerPrice || '',
                    duration: s.duration || '',
                    hidden: !!s.hidden,
                    imageUrl: activeImages[s.id] || ''
                }))
            };

            await fetch(sheetWebhookUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (shouldSaveLocal) {
                handleSaveToWebsite(false);
            }

            // Broadcast live sync
            syncWithGoogleSheets();
            setSyncStatus('success');
            setTimeout(() => setSyncStatus(''), 4000);
        } catch (error) {
            console.error(error);
            setSyncStatus('error');
            setTimeout(() => setSyncStatus(''), 4000);
        }
    };

    // Pull from Google Sheet
    const handlePullFromGoogleSheet = async () => {
        if (!sheetWebhookUrl) {
            alert("Please paste your Google Sheet Webhook URL first!");
            return;
        }

        setSyncStatus('pulling');
        try {
            const res = await fetch(sheetWebhookUrl);
            const data = await res.json();

            if (data && data.services && Array.isArray(data.services) && data.services.length > 0) {
                const map = new Map(data.services.map(item => [item.id, item]));
                const merged = serviceList.map(s => {
                    const fromSheet = map.get(s.id);
                    if (fromSheet) {
                        let op = fromSheet.offerPrice !== undefined ? fromSheet.offerPrice : s.offerPrice;
                        if (op) {
                            const str = String(op).trim();
                            const num = parseFloat(str);
                            if (!str.includes('%') && !isNaN(num) && num > 0 && num < 1) {
                                op = `${Math.round(num * 100)}%`;
                            }
                        }
                        return {
                            ...s,
                            price: fromSheet.price || s.price,
                            offerPrice: op
                        };
                    }
                    return s;
                });

                setServiceList(merged);
                saveServicesToStorage(merged);

                if (data.offers) {
                    if (data.offers['Banner Active'] !== undefined) {
                        setBannerActive(String(data.offers['Banner Active']).toLowerCase() === 'true');
                    }
                    if (data.offers['Banner Badge']) setBannerBadge(data.offers['Banner Badge']);
                    if (data.offers['Banner Text']) setBannerText(data.offers['Banner Text']);
                }

                setSyncStatus('pull_success');
                syncWithGoogleSheets();
                setTimeout(() => setSyncStatus(''), 4000);
            } else {
                alert("Google Sheet returned empty services. Try 'Push to Sheet' first to populate rows.");
                setSyncStatus('');
            }
        } catch (err) {
            console.error(err);
            setSyncStatus('error');
            setTimeout(() => setSyncStatus(''), 4000);
        }
    };

    // Feature 1: Publish New Blog Post
    const handlePublishBlog = (e) => {
        e.preventDefault();
        if (!newBlog.title || !newBlog.excerpt) {
            alert("Please provide at least a Blog Title and Excerpt summary.");
            return;
        }

        const blogEntry = {
            id: `blog-${Date.now()}`,
            title: newBlog.title,
            category: newBlog.category,
            readTime: newBlog.readTime || '3 min read',
            publishDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
            excerpt: newBlog.excerpt,
            image: newBlog.image,
            author: {
                name: "Shobitha Studio Experts",
                role: "Master Bridal Stylist",
                avatar: bridalBannerBride
            },
            tags: ["Bridal Tips", "Salon Care", newBlog.category],
            serviceName: "Bridal Consultation",
            content: [
                { type: 'intro', text: newBlog.excerpt },
                { type: 'paragraph', text: newBlog.content || "Expert advice from Shobitha Haircare Studio team in Kanhangad." }
            ]
        };

        const updated = [blogEntry, ...customBlogs];
        setCustomBlogs(updated);
        localStorage.setItem('shobitha_custom_blogs', JSON.stringify(updated));
        
        setNewBlog({
            title: '',
            category: 'Bridal Beauty',
            readTime: '4 min read',
            excerpt: '',
            content: '',
            image: luxuryGoldFacial
        });

        setBlogPublishSuccess(true);
        setTimeout(() => setBlogPublishSuccess(false), 3500);
    };

    // Feature 4: Toggle Service in Quote Generator
    const handleToggleQuoteService = (id) => {
        setQuoteServices(prev => {
            const next = { ...prev };
            if (next[id]) delete next[id];
            else next[id] = true;
            return next;
        });
    };

    const selectedQuoteItems = serviceList.filter(s => quoteServices[s.id]);
    const quoteTotal = selectedQuoteItems.reduce((acc, s) => {
        const val = parseInt(s.price.replace(/[^\d]/g, ''), 10) || 0;
        return acc + val;
    }, 0);

    const getQuoteText = () => {
        let msg = `*Shobitha Haircare & Bridal Makeup Studio* ✨\n`;
        msg += `Municipal Bus Stand Road, Kanhangad | 📞 +91 80753 40778\n`;
        msg += `--------------------------------------\n`;
        if (clientName) msg += `Hello *${clientName}*! Here is your requested price estimate:\n\n`;
        selectedQuoteItems.forEach((item, idx) => {
            msg += `${idx + 1}. *${item.name}*: ${item.price} (${item.duration})\n`;
            if (item.offerPrice) msg += `   ↳ _Special Offer: ${item.offerPrice}_\n`;
        });
        msg += `--------------------------------------\n`;
        msg += `💰 *Total Estimated Package:* ₹${quoteTotal.toLocaleString('en-IN')}\n\n`;
        msg += `Would you like us to reserve a convenient slot for you? 🙏💛`;
        return msg;
    };

    // Feature 5: Toggle Featured Review for Home page
    const handleToggleFeaturedReview = (id) => {
        const updated = reviewList.map(r => r.id === id ? { ...r, featured: !r.featured } : r);
        setReviewList(updated);
        localStorage.setItem('shobitha_featured_reviews', JSON.stringify(updated));
    };

    // Google Apps Script template code (Full Admin Worldwide Live Sync)
    const googleAppsScriptCode = `// PASTE THIS IN GOOGLE SHEETS -> Extensions -> Apps Script
var TELEGRAM_BOT_TOKEN = "PASTE_YOUR_TELEGRAM_BOT_TOKEN_HERE";

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    // 0. GOOGLE DRIVE IMAGE UPLOAD (TIER 2 FALLBACK - 15GB FREE CLOUD)
    if (data.action === "upload_image_to_drive" && data.base64Data) {
      try {
        var folderName = "Shobitha_Salon_Uploads";
        var folders = DriveApp.getFoldersByName(folderName);
        var folder = folders.hasNext() ? folders.next() : DriveApp.createFolder(folderName);
        folder.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

        var base64Str = data.base64Data.split(",")[1] || data.base64Data;
        var decoded = Utilities.base64Decode(base64Str);
        var blob = Utilities.newBlob(decoded, data.mimeType || "image/webp", data.fileName || (data.serviceId + ".webp"));
        var file = folder.createFile(blob);
        file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

        var directUrl = "https://lh3.googleusercontent.com/d/" + file.getId();

        return ContentService.createTextOutput(JSON.stringify({
          status: "success",
          url: directUrl,
          fileId: file.getId()
        })).setMimeType(ContentService.MimeType.JSON);
      } catch (err) {
        return ContentService.createTextOutput(JSON.stringify({
          status: "error",
          message: err.toString()
        })).setMimeType(ContentService.MimeType.JSON);
      }
    }

    // 1. SERVICES & PRICES (Fast Batch Insert - Writes 172 rows in 50ms)
    if (data.services && Array.isArray(data.services) && data.services.length > 0) {
      var priceSheet = ss.getSheetByName("Prices") || ss.insertSheet("Prices");
      var priceRows = [["ID", "Service Name", "Category", "Price", "Offer", "Duration", "Hidden", "ImageURL"]];
      data.services.forEach(function(s) {
        var img = s.imageUrl || "";
        if (img && img.length > 45000) { img = img.substring(0, 45000); }
        priceRows.push([s.id, s.name, s.category, s.price, s.offerPrice || "", s.duration || "", s.hidden ? "YES" : "NO", img]);
      });
      priceSheet.clear();
      priceSheet.getRange(1, 1, priceRows.length, priceRows[0].length).setValues(priceRows);
    }

    // 2. OFFERS & FESTIVE BANNERS
    if (data.banner) {
      var offerSheet = ss.getSheetByName("Offers") || ss.insertSheet("Offers");
      offerSheet.clear();
      offerSheet.appendRow(["Key", "Value"]);
      offerSheet.appendRow(["Banner Active", data.banner.active]);
      offerSheet.appendRow(["Banner Badge", data.banner.badge]);
      offerSheet.appendRow(["Banner Text", data.banner.text]);
      if (data.promoBanner) {
        offerSheet.appendRow(["Promo Title", data.promoBanner.title || ""]);
        offerSheet.appendRow(["Promo Subtitle", data.promoBanner.subtitle || ""]);
        offerSheet.appendRow(["Promo Highlight", data.promoBanner.highlight || ""]);
      }
      offerSheet.appendRow(["Last Updated", data.timestamp || new Date().toISOString()]);
    }

    // 3. SALON STORE STATUS & TIMINGS
    if (data.storeStatus) {
      var statusSheet = ss.getSheetByName("StoreStatus") || ss.insertSheet("StoreStatus");
      statusSheet.clear();
      statusSheet.appendRow(["Key", "Value"]);
      statusSheet.appendRow(["State", data.storeStatus.state || "open"]);
      statusSheet.appendRow(["Text", data.storeStatus.text || ""]);
      statusSheet.appendRow(["CustomNote", data.storeStatus.customNote || ""]);
      statusSheet.appendRow(["Last Updated", new Date().toISOString()]);
    }

    // 4. CUSTOM SERVICE IMAGES (Fast Batch Insert - Never Duplicates)
    if (data.serviceImages && typeof data.serviceImages === "object") {
      var imgSheet = ss.getSheetByName("ServiceImages") || ss.insertSheet("ServiceImages");
      var imgRows = [["ServiceID", "ImageURL", "LastUpdated"]];
      for (var sId in data.serviceImages) {
        if (data.serviceImages.hasOwnProperty(sId)) {
          var val = String(data.serviceImages[sId]);
          if (val.length > 45000) val = val.substring(0, 45000);
          imgRows.push([sId, val, new Date().toISOString()]);
        }
      }
      imgSheet.clear();
      if (imgRows.length > 1) {
        imgSheet.getRange(1, 1, imgRows.length, imgRows[0].length).setValues(imgRows);
      } else {
        imgSheet.appendRow(imgRows[0]);
      }
    }

    // 5. SITE SETTINGS (Navigation, Home Sections, Contact Numbers)
    if (data.siteSettings) {
      var setSheet = ss.getSheetByName("Settings") || ss.insertSheet("Settings");
      setSheet.clear();
      setSheet.appendRow(["Key", "JSONValue"]);
      setSheet.appendRow(["siteSettings", JSON.stringify(data.siteSettings)]);
    }

    // 6. STORE PRODUCTS & REVIEWS
    if (data.storeProducts) {
      var prodSheet = ss.getSheetByName("StoreProducts") || ss.insertSheet("StoreProducts");
      prodSheet.clear();
      prodSheet.appendRow(["Key", "JSONValue"]);
      prodSheet.appendRow(["products", JSON.stringify(data.storeProducts)]);
    }

    return ContentService.createTextOutput(JSON.stringify({ status: "success", timestamp: new Date().toISOString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var result = {
      status: "success",
      timestamp: new Date().toISOString(),
      services: [],
      offers: {},
      storeStatus: {},
      serviceImages: {},
      siteSettings: null,
      storeProducts: null
    };

    // 1. READ SERVICES
    var priceSheet = ss.getSheetByName("Prices");
    if (priceSheet) {
      var rows = priceSheet.getDataRange().getValues();
      for (var i = 1; i < rows.length; i++) {
        var sId = String(rows[i][0]).trim();
        if (!sId) continue;
        var imgUrl = rows[i][7] ? String(rows[i][7]) : "";
        if (imgUrl) {
          result.serviceImages[sId] = imgUrl;
        }
        var offerVal = rows[i][4] !== undefined && rows[i][4] !== null ? String(rows[i][4]).trim() : "";
        var numOffer = parseFloat(offerVal);
        if (!offerVal.includes("%") && !isNaN(numOffer) && numOffer > 0 && numOffer < 1) {
          offerVal = Math.round(numOffer * 100) + "%";
        }
        result.services.push({
          id: sId,
          name: String(rows[i][1]),
          category: String(rows[i][2]),
          price: String(rows[i][3]),
          offerPrice: offerVal,
          duration: rows[i][5] ? String(rows[i][5]) : "",
          hidden: String(rows[i][6]).toUpperCase() === "YES",
          imageUrl: imgUrl
        });
      }
    }

    // 2. READ OFFERS
    var offerSheet = ss.getSheetByName("Offers");
    if (offerSheet) {
      var oRows = offerSheet.getDataRange().getValues();
      for (var j = 1; j < oRows.length; j++) {
        var k = String(oRows[j][0]).trim();
        if (k) {
          result.offers[k] = oRows[j][1];
        }
      }
    }

    // 3. READ STORE STATUS
    var statusSheet = ss.getSheetByName("StoreStatus");
    if (statusSheet) {
      var sRows = statusSheet.getDataRange().getValues();
      for (var m = 1; m < sRows.length; m++) {
        var sk = String(sRows[m][0]).trim();
        if (sk) {
          result.storeStatus[sk] = sRows[m][1];
        }
      }
    }

    // 4. READ SERVICE IMAGES
    var imgSheet = ss.getSheetByName("ServiceImages");
    if (imgSheet) {
      var imgRows = imgSheet.getDataRange().getValues();
      for (var n = 1; n < imgRows.length; n++) {
        var imgId = String(imgRows[n][0]).trim();
        var imgVal = String(imgRows[n][1]).trim();
        if (imgId && imgVal) {
          result.serviceImages[imgId] = imgVal;
        }
      }
    }

    // 5. READ SETTINGS
    var setSheet = ss.getSheetByName("Settings");
    if (setSheet) {
      var setRows = setSheet.getDataRange().getValues();
      for (var p = 1; p < setRows.length; p++) {
        if (String(setRows[p][0]) === "siteSettings" && setRows[p][1]) {
          try { result.siteSettings = JSON.parse(setRows[p][1]); } catch(e){}
        }
      }
    }

    // 6. READ STORE PRODUCTS
    var prodSheet = ss.getSheetByName("StoreProducts");
    if (prodSheet) {
      var prodRows = prodSheet.getDataRange().getValues();
      for (var q = 1; q < prodRows.length; q++) {
        if (String(prodRows[q][0]) === "products" && prodRows[q][1]) {
          try { result.storeProducts = JSON.parse(prodRows[q][1]); } catch(e){}
        }
      }
    }

    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}`;

    // PIN LOCK SCREEN
    if (!isUnlocked) {
        return (
            <div className="pt-32 pb-24 bg-[#FAF9F5] min-h-screen flex items-center justify-center px-4">
                <div className="bg-white rounded-3xl p-7 sm:p-9 max-w-md w-full border-2 border-amber-300 shadow-xl text-center">
                    <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-4 text-3xl shadow-inner">
                        <FaLock />
                    </div>
                    <h1 className="font-serif font-black text-2xl sm:text-3xl text-[#22160F] mb-1">
                        Salon Studio Admin
                    </h1>
                    <p className="text-sm text-gray-600 mb-6 font-medium">
                        Enter your 4-digit salon PIN to manage prices, hide services, and publish offers.
                    </p>

                    <form onSubmit={handleUnlock} className="space-y-5">
                        <div>
                            <input
                                type="password"
                                maxLength={8}
                                placeholder="Enter PIN (Default: 1234)"
                                value={pinInput}
                                onChange={(e) => setPinInput(e.target.value)}
                                className="w-full text-center text-3xl font-black tracking-widest bg-amber-50/70 border-2 border-amber-300 rounded-2xl py-3.5 text-gray-900 focus:outline-none focus:ring-4 focus:ring-amber-500/30"
                                autoFocus
                            />
                            {pinError && (
                                <p className="text-red-600 text-xs sm:text-sm mt-2 font-bold">{pinError}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full btn-primary py-3.5 rounded-2xl text-base font-black shadow-lg flex items-center justify-center gap-2 active:scale-95 transition"
                        >
                            <FaKey size={14} /> Unlock Admin Panel
                        </button>
                    </form>

                    <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500 font-medium">
                        Default demo passcode: <span className="font-mono font-bold text-gray-800 text-sm">1234</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-2 sm:pt-4 pb-48 bg-[#FAF7F2] min-h-screen select-none font-sans">
            
            {/* FLOATING SAVE CONFIRMATION */}
            {savedNotification && (
                <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#155724] text-white px-6 py-3 rounded-full shadow-2xl text-sm font-black flex items-center gap-2 border-2 border-emerald-300 animate-bounce">
                    <FaCheck size={14} className="text-emerald-300" />
                    <span>{typeof savedNotification === 'string' ? savedNotification : 'Saved live to website! Changes visible immediately.'}</span>
                </div>
            )}

            {/* SINGLE MASTER ADMIN HEADER NAVBAR */}
            <header className="bg-white/95 backdrop-blur-md border-b border-[#EADBCE] sticky top-0 z-40 px-3 sm:px-6 py-2.5 sm:py-3 shadow-xs">
                <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
                    {/* Left: Gold S Emblem + Brand Title (Clicking takes user back to Home Page) */}
                    <a 
                        href="#/" 
                        className="flex items-center gap-2.5 sm:gap-3.5 group cursor-pointer hover:opacity-90 transition"
                        title="Click to Exit Admin and Go to Website Home"
                    >
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-[#801328] via-[#520B19] to-[#30050E] text-amber-300 flex items-center justify-center font-serif font-black text-lg sm:text-xl shadow-xs shrink-0 border border-amber-400/40 group-hover:scale-105 transition">
                            S
                        </div>
                        <div>
                            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.16em] text-[#9A6216] block leading-tight">
                                SALON MANAGEMENT CONSOLE
                            </span>
                            <h1 className="font-serif font-black text-base sm:text-xl text-gray-950 leading-tight">
                                Shobitha Studio Control
                            </h1>
                        </div>
                    </a>

                    {/* Right: Quick Actions & Status */}
                    <div className="flex items-center gap-1.5 sm:gap-2">
                        {/* Go to Home Page Button */}
                        <a
                            href="#/"
                            className="bg-amber-100 hover:bg-amber-200 text-[#4A0A16] border border-amber-300 px-3 py-1.5 rounded-xl text-xs font-black shadow-2xs flex items-center gap-1.5 transition active:scale-95 shrink-0"
                            title="Exit Admin and Go to Public Website Home"
                        >
                            <FaHome size={13} className="text-[#8E580B]" />
                            <span className="hidden sm:inline">Home Page</span>
                        </a>

                        {/* Live Sync Pill */}
                        <button
                            onClick={() => handlePushToGoogleSheet(true)}
                            disabled={syncStatus === 'syncing' || syncStatus === 'pulling'}
                            className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 py-1.5 px-3 rounded-full text-xs font-black shadow-2xs flex items-center gap-1.5 active:scale-95 transition"
                            title="Push all prices, image uploads, offers, and settings to Google Sheets"
                        >
                            <FaCloudUploadAlt size={13} className={syncStatus === 'syncing' ? 'animate-bounce text-emerald-600' : 'text-emerald-700'} />
                            <span className="hidden sm:inline">{syncStatus === 'syncing' ? 'Syncing...' : 'Synced'}</span>
                        </button>

                        {/* Push All Data */}
                        <button
                            onClick={() => handlePushToGoogleSheet(true)}
                            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white hover:bg-amber-50 text-gray-800 border border-gray-200 hover:border-amber-400 flex items-center justify-center transition shadow-2xs active:scale-95"
                            title="Push All Data to Google Cloud"
                        >
                            <FaCloudUploadAlt size={14} />
                        </button>

                        {/* Save Live */}
                        <button
                            onClick={() => handleSaveToWebsite(true)}
                            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white hover:bg-amber-50 text-gray-800 border border-gray-200 hover:border-amber-400 flex items-center justify-center transition shadow-2xs active:scale-95"
                            title="Save Live to Website"
                        >
                            <FaSave size={14} />
                        </button>

                        {/* Quick Logo Visibility Toggle */}
                        <button
                            type="button"
                            onClick={() => toggleBranding('showNavbarLogo')}
                            className={`h-9 sm:h-10 px-2.5 sm:px-3 rounded-xl text-xs font-extrabold transition border flex items-center gap-1.5 shadow-2xs ${
                                brandingSettings?.showNavbarLogo !== false
                                    ? 'bg-amber-50 hover:bg-amber-100 text-[#8E580B] border-amber-300'
                                    : 'bg-red-50 hover:bg-red-100 text-red-700 border-red-300'
                            }`}
                            title={brandingSettings?.showNavbarLogo !== false ? "Navbar Logo is VISIBLE (Click to Hide)" : "Navbar Logo is HIDDEN (Click to Show)"}
                        >
                            <span className="text-xs">✨</span>
                            <span className="hidden sm:inline">
                                {brandingSettings?.showNavbarLogo !== false ? 'Logo: Show' : 'Logo: Hide'}
                            </span>
                        </button>

                        {/* Search Button */}
                        <button
                            type="button"
                            onClick={() => {
                                setActiveTab('prompts');
                                const el = document.getElementById('studio-search-input');
                                if (el) el.focus();
                            }}
                            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gray-50 hover:bg-amber-50 text-gray-700 flex items-center justify-center transition border border-gray-200 shadow-2xs"
                            title="Search 172 Prompts & Services"
                        >
                            <FaSearch size={13} />
                        </button>

                        {/* Notifications Bell */}
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setActiveTab('leads')}
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gray-50 hover:bg-amber-50 text-gray-700 flex items-center justify-center transition border border-gray-200 shadow-2xs"
                                title={`Inquiries & Notifications (${appointmentLeads.length})`}
                            >
                                <FaBell size={13} />
                            </button>
                            {appointmentLeads.length > 0 && (
                                <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white"></span>
                            )}
                        </div>

                        {/* Lock Console */}
                        <button
                            onClick={handleLock}
                            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white hover:bg-red-50 text-gray-800 hover:text-red-700 border border-gray-200 hover:border-red-300 flex items-center justify-center transition shadow-2xs active:scale-95"
                            title="Lock Admin Console"
                        >
                            <FaLock size={13} />
                        </button>
                    </div>
                </div>
            </header>

            <div className="container-custom px-3 sm:px-6 max-w-6xl mx-auto space-y-4 pt-3">

                {/* 2. HORIZONTAL SQUIRCLE TAB NAVIGATION BAR (MATCHING MOCKUP) */}
                <div className="bg-[#F6EFE8] p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl border border-[#EADBCE] shadow-2xs flex items-center justify-between gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar">
                    {[
                        { id: 'prompts', title: '172 AI Image Studio', icon: FaMagic },
                        { id: 'prices', title: `Prices Management (${serviceList.length})`, icon: FaTag },
                        { id: 'offers', title: 'Offers & Promos', icon: FaImage },
                        { id: 'pages', title: 'Menu & Pages', icon: FaLayerGroup },
                        { id: 'sections', title: 'Home Sections', icon: FaThLarge },
                        { id: 'store_mgr', title: 'Salon Store & Affiliate', icon: FaStore },
                        { id: 'leads', title: `Inquiries (${appointmentLeads.length})`, icon: FaListAlt },
                        { id: 'status', title: 'Salon Status & Timing', icon: FaChartBar },
                        { id: 'reviews', title: 'Featured Reviews', icon: FaStar },
                        { id: 'sheet', title: 'Settings & Google Sheets Sync', icon: FaCog }
                    ].map(tab => {
                        const IconComponent = tab.icon;
                        const isActive = activeTab === tab.id;

                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all shrink-0 ${
                                    isActive
                                        ? 'bg-gradient-to-br from-[#B37822] to-[#8E580B] text-white shadow-sm ring-2 ring-amber-400/40'
                                        : 'bg-transparent hover:bg-white/70 text-[#543828]'
                                }`}
                                title={tab.title}
                            >
                                <IconComponent size={17} />
                            </button>
                        );
                    })}
                </div>

                {/* ============================================================ */}
                {/* TAB 1: EDIT ALL SERVICES & PRICES (WITH HIDE OPTION)         */}
                {/* ============================================================ */}
                {activeTab === 'prices' && (
                    <div className="space-y-4">
                        
                        {/* Search & Filters Card */}
                        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-[#E8D9C5] shadow-xs space-y-3">
                            {/* Big Search Input */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search 172 services (e.g. Keratin, Layer Cut, Bridal)..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-[#FAF9F5] border-2 border-gray-200 rounded-2xl pl-11 pr-10 py-3 text-sm sm:text-base font-bold text-gray-950 focus:outline-none focus:border-[#B98327]"
                                />
                                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                                {searchQuery && (
                                    <button 
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        <FaTimes size={14} />
                                    </button>
                                )}
                            </div>

                            {/* Visibility Filter: All | Live (Active) | Hidden */}
                            <div className="flex items-center gap-2 pt-1 border-t border-gray-100">
                                <span className="text-xs font-black text-gray-500 uppercase tracking-wider mr-1">
                                    Show:
                                </span>
                                <button
                                    onClick={() => setVisibilityFilter('all')}
                                    className={`px-3 py-1.5 rounded-xl text-xs font-black transition ${
                                        visibilityFilter === 'all'
                                            ? 'bg-gray-900 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    All ({serviceList.length})
                                </button>
                                <button
                                    onClick={() => setVisibilityFilter('active')}
                                    className={`px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1 transition ${
                                        visibilityFilter === 'active'
                                            ? 'bg-emerald-700 text-white'
                                            : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                                    }`}
                                >
                                    <FaEye size={11} /> Live ({activeCount})
                                </button>
                                <button
                                    onClick={() => setVisibilityFilter('hidden')}
                                    className={`px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1 transition ${
                                        visibilityFilter === 'hidden'
                                            ? 'bg-red-700 text-white'
                                            : 'bg-red-50 text-red-800 border border-red-200'
                                    }`}
                                >
                                    <FaEyeSlash size={11} /> Hidden ({hiddenCount})
                                </button>
                            </div>

                            {/* Category Filter Pills */}
                            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                                <button
                                    onClick={() => setSelectedCategory('All')}
                                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap ${
                                        selectedCategory === 'All'
                                            ? 'bg-[#2A180E] text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    All Categories
                                </button>
                                {categories.map((c, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSelectedCategory(c)}
                                        className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap ${
                                            selectedCategory === c
                                                ? 'bg-[#A46E19] text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        {c}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Results Count */}
                        <div className="flex items-center justify-between text-xs sm:text-sm px-1 text-gray-600 font-bold">
                            <span>Showing {filteredServices.length} items</span>
                            <span className="text-[#A46E19] font-black">Changes reflect live on website</span>
                        </div>

                        {/* List of Mobile Price Cards (EXTRA CLEAR & BIG TEXT) */}
                        <div className="space-y-4">
                            {filteredServices.map((s, idx) => (
                                <div
                                    key={s.id}
                                    className={`bg-white rounded-3xl p-4 sm:p-6 border-2 transition-all ${
                                        s.hidden 
                                            ? 'border-red-300 bg-red-50/30 opacity-80' 
                                            : 'border-[#E8D9C5] shadow-xs hover:shadow-md'
                                    }`}
                                >
                                    {/* Top Bar: Title, Category Badge, Hide Toggle Button */}
                                    <div className="flex items-start justify-between gap-3 mb-3.5">
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs sm:text-sm font-mono font-bold text-gray-400">#{idx + 1}</span>
                                                <h3 className="font-serif font-black text-lg sm:text-2xl text-gray-950 truncate leading-snug">
                                                    {s.name}
                                                </h3>
                                            </div>
                                            <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                                                <span className="bg-amber-100 text-[#8E580B] px-3 py-0.5 rounded-lg text-xs font-black">
                                                    {s.category}
                                                </span>
                                                <span className="text-xs sm:text-sm text-gray-600 font-bold">
                                                    ⏱️ {s.duration}
                                                </span>
                                            </div>
                                        </div>

                                        {/* HIDE / SHOW TOGGLE BUTTON */}
                                        <button
                                            onClick={() => handleToggleHide(s.id)}
                                            className={`px-3.5 py-2 rounded-2xl text-xs sm:text-sm font-black flex items-center gap-2 transition shrink-0 active:scale-95 shadow-xs border-2 ${
                                                s.hidden
                                                    ? 'bg-red-100 text-red-700 hover:bg-red-200 border-red-300'
                                                    : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-emerald-300'
                                            }`}
                                            title={s.hidden ? 'Click to Show on Website' : 'Click to Hide from Website'}
                                        >
                                            {s.hidden ? (
                                                <>
                                                    <FaEyeSlash size={14} className="text-red-600" />
                                                    <span>Hidden</span>
                                                </>
                                            ) : (
                                                <>
                                                    <FaEye size={14} className="text-emerald-700" />
                                                    <span>Live</span>
                                                </>
                                            )}
                                        </button>
                                    </div>

                                    {/* Editable Inputs (EXTRA LARGE TOUCH TARGETS & HIGH CONTRAST) */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3.5 border-t border-gray-100">
                                        {/* Regular Price with Large Thumb Buttons */}
                                        <div>
                                            <label className="block text-xs font-black uppercase tracking-wider text-gray-700 mb-1.5">
                                                Regular Price
                                            </label>
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => handleQuickPriceAdjust(s.id, -50)}
                                                    className="w-12 h-12 rounded-2xl bg-gray-100 hover:bg-gray-200 active:bg-amber-200 text-gray-900 font-black flex items-center justify-center text-base shadow-xs transition shrink-0"
                                                    title="-₹50"
                                                >
                                                    <FaMinus size={12} />
                                                </button>

                                                <input
                                                    type="text"
                                                    value={s.price}
                                                    onChange={(e) => handlePriceChange(s.id, e.target.value)}
                                                    className="w-full text-center font-black text-xl sm:text-2xl text-[#8E580B] bg-amber-50/60 border-2 border-amber-300 rounded-2xl py-2.5 focus:ring-2 focus:ring-amber-500 outline-none"
                                                />

                                                <button
                                                    onClick={() => handleQuickPriceAdjust(s.id, 50)}
                                                    className="w-12 h-12 rounded-2xl bg-gray-100 hover:bg-gray-200 active:bg-amber-200 text-gray-900 font-black flex items-center justify-center text-base shadow-xs transition shrink-0"
                                                    title="+₹50"
                                                >
                                                    <FaPlus size={12} />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Special Offer / Discount */}
                                        <div>
                                            <div className="flex items-center justify-between mb-1.5">
                                                <label className="block text-xs font-black uppercase tracking-wider text-emerald-800">
                                                    Special Offer (Optional)
                                                </label>
                                                {s.offerPrice && (
                                                    <button
                                                        onClick={() => handleOfferChange(s.id, '')}
                                                        className="text-xs text-red-600 hover:underline font-extrabold"
                                                    >
                                                        Clear
                                                    </button>
                                                )}
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="e.g. 50% or ₹175"
                                                value={s.offerPrice || ''}
                                                onChange={(e) => handleOfferChange(s.id, e.target.value)}
                                                className="w-full font-black text-base sm:text-lg text-emerald-800 placeholder-gray-400 bg-emerald-50/70 border-2 border-emerald-300 rounded-2xl py-2.5 px-3 text-center focus:ring-2 focus:ring-emerald-500 outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Floating Save Bar */}
                        <div className="fixed bottom-4 left-4 right-4 z-40 max-w-4xl mx-auto bg-gray-950/95 backdrop-blur-md p-3.5 rounded-2xl border-2 border-amber-400 shadow-2xl flex items-center justify-between gap-3 text-white">
                            <div>
                                <span className="text-xs sm:text-sm font-black text-amber-300 block">
                                    Ready to update your salon?
                                </span>
                                <span className="text-[11px] text-gray-300 hidden xs:inline">
                                    Changes take effect immediately
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={handleSaveToWebsite}
                                    className="btn-primary py-2.5 px-4 sm:px-6 text-xs sm:text-sm font-black shadow-md flex items-center gap-1.5 active:scale-95 transition"
                                >
                                    <FaCheck size={12} /> Save Live
                                </button>
                                <button
                                    onClick={handlePushToGoogleSheet}
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-3.5 sm:px-5 rounded-full text-xs sm:text-sm font-black shadow-md transition"
                                >
                                    Sync Sheet
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* ============================================================ */}
                {/* TAB: 172 AI IMAGE STUDIO & PROMPT GENERATOR                  */}
                {/* ============================================================ */}
                {activeTab === 'prompts' && (() => {
                    const filteredPrompts = serviceImagePrompts.filter(p => {
                        let matchesCat = true;
                        if (promptCategoryFilter === 'All') {
                            matchesCat = true;
                        } else if (promptCategoryFilter === 'Bridal') {
                            matchesCat = p.category === 'Bridal Makeup & Special Occasion Makeup';
                        } else if (promptCategoryFilter === 'More') {
                            matchesCat = p.category.includes('Package') || p.category.includes('Waxing') || p.category.includes('Mehndi') || p.category.includes('Colour') || p.category.includes('Smoothening');
                        } else {
                            matchesCat = p.category.includes(promptCategoryFilter);
                        }

                        const matchesSearch = !promptSearch.trim() ||
                            p.name.toLowerCase().includes(promptSearch.toLowerCase()) ||
                            p.fileName.toLowerCase().includes(promptSearch.toLowerCase()) ||
                            p.category.toLowerCase().includes(promptSearch.toLowerCase());

                        return matchesCat && matchesSearch;
                    });

                    return (
                        <div className="space-y-4 sm:space-y-5">
                            
                            {/* 1. AI IMAGE STUDIO & PROMPT GENERATOR CARD (MATCHING MOCKUP) */}
                            <div className="bg-gradient-to-br from-[#FFF5F3] via-white to-[#FDF4EA] rounded-3xl p-5 sm:p-6 border border-[#EADBCE] shadow-sm relative overflow-hidden">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#F0E4D8]">
                                    <div className="flex items-start sm:items-center gap-3.5">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FDE8D7] to-[#FCE0D0] text-[#9A6216] flex items-center justify-center text-xl shadow-xs shrink-0 border border-amber-300/60">
                                            <FaMagic />
                                        </div>
                                        <div>
                                            <h2 className="font-serif font-black text-xl sm:text-2xl text-gray-950 leading-tight">
                                                AI Image Studio & Prompt Generator
                                            </h2>
                                            <p className="text-xs sm:text-sm text-gray-600 font-medium max-w-2xl mt-1 leading-relaxed">
                                                Generate photorealistic model imagery for all salon services with Kerala natural bridal looks, exact file naming, and "Shobitha Haircare" watermark.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Top Right Action Squircles matching mockup */}
                                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                                        <button
                                            type="button"
                                            onClick={handleDownloadAllPromptsJSON}
                                            className="w-10 h-10 rounded-2xl bg-white hover:bg-amber-50 text-gray-800 border border-gray-200 hover:border-amber-400 flex items-center justify-center transition shadow-xs active:scale-95"
                                            title="Download 172 Prompts JSON"
                                        >
                                            <FaDownload size={14} className="text-[#8E580B]" />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleCopyAllPromptsText}
                                            className="w-10 h-10 rounded-2xl bg-white hover:bg-amber-50 text-gray-800 border border-gray-200 hover:border-amber-400 flex items-center justify-center transition shadow-xs active:scale-95"
                                            title="Copy All 172 Prompts to Clipboard"
                                        >
                                            <FaCopy size={14} className="text-[#8E580B]" />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handlePushToGoogleSheet(false)}
                                            className="w-10 h-10 rounded-2xl bg-white hover:bg-amber-50 text-gray-800 border border-gray-200 hover:border-amber-400 flex items-center justify-center transition shadow-xs active:scale-95"
                                            title="Refresh / Re-sync"
                                        >
                                            <FaSyncAlt size={13} className={`text-[#8E580B] ${syncStatus === 'pulling' ? 'animate-spin' : ''}`} />
                                        </button>
                                    </div>
                                </div>

                                {/* 5 Feature Pills Row matching mockup */}
                                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-4">
                                    <div className="bg-[#FFF8F6] border border-[#F5DDD7] rounded-2xl p-2.5 flex items-center gap-2 text-xs font-bold text-gray-800 shadow-2xs">
                                        <span className="w-7 h-7 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center text-xs shrink-0">
                                            <FaPalette />
                                        </span>
                                        <span className="text-[11px] font-black">Kerala Bridal Looks</span>
                                    </div>

                                    <div className="bg-[#FFFBF5] border border-[#F3E5D4] rounded-2xl p-2.5 flex items-center gap-2 text-xs font-bold text-gray-800 shadow-2xs">
                                        <span className="w-7 h-7 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">
                                            <FaCrop />
                                        </span>
                                        <span className="text-[11px] font-black">4:5 Portrait</span>
                                    </div>

                                    <div className="bg-[#FFFDF7] border border-[#F3E7D3] rounded-2xl p-2.5 flex items-center gap-2 text-xs font-bold text-gray-800 shadow-2xs">
                                        <span className="w-7 h-7 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center text-xs shrink-0">
                                            <FaMagic />
                                        </span>
                                        <span className="text-[11px] font-black">Auto Retouch</span>
                                    </div>

                                    <div className="bg-[#FBF8F4] border border-[#EADBCE] rounded-2xl p-2.5 flex items-center gap-2 text-xs font-bold text-gray-800 shadow-2xs">
                                        <span className="w-7 h-7 rounded-xl bg-orange-100 text-orange-800 flex items-center justify-center text-xs shrink-0">
                                            <FaLayerGroup />
                                        </span>
                                        <span className="text-[11px] font-black">Studio Watermark</span>
                                    </div>

                                    <div className="col-span-2 sm:col-span-1 bg-[#F0FAF5] border border-[#CDEBDC] rounded-2xl p-2.5 flex items-center gap-2 shadow-2xs">
                                        <span className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs shrink-0">
                                            <FaCrosshairs />
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <span className="block text-[9px] font-bold text-emerald-900 uppercase tracking-wider">Resize Target</span>
                                            <select
                                                value={resizeQualityMode}
                                                onChange={(e) => setResizeQualityMode(e.target.value)}
                                                className="w-full bg-transparent text-[11px] font-black text-emerald-950 focus:outline-none cursor-pointer"
                                            >
                                                <option value="800x1000">800 × 1000 px</option>
                                                <option value="1000x1250">1000 × 1250 px</option>
                                                <option value="600x750">600 × 750 px</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 2. PHONE ⇄ PC SYNC & TRANSFER CARD (MATCHING MOCKUP) */}
                            <div className="bg-white rounded-3xl p-4 sm:p-5 border border-[#EADBCE] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-900 flex items-center justify-center text-lg border border-amber-200/80 shrink-0">
                                        <FaDesktop />
                                    </div>
                                    <div>
                                        <h3 className="font-serif font-black text-base sm:text-lg text-gray-950 leading-tight">
                                            Phone ⇄ PC Sync & Transfer
                                        </h3>
                                        <p className="text-[11px] text-gray-500 font-medium">
                                            {Object.keys(customServiceImages).length} custom image uploads saved on this device
                                        </p>
                                    </div>
                                </div>

                                {/* Colorful action squircles matching mockup */}
                                <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 flex-wrap">
                                    {/* Pink: Cloud Upload / Sync */}
                                    <button
                                        type="button"
                                        onClick={() => handlePushToGoogleSheet(true)}
                                        className="w-10 h-10 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 flex items-center justify-center transition shadow-2xs active:scale-95"
                                        title="Push to Google Sheets (Worldwide Live Sync)"
                                    >
                                        <FaCloudUploadAlt size={16} />
                                    </button>

                                    {/* Green: Download / Export Backup */}
                                    <button
                                        type="button"
                                        onClick={handleExportImagesBackup}
                                        className="w-10 h-10 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 flex items-center justify-center transition shadow-2xs active:scale-95"
                                        title="Export Images Backup File (Download to Phone)"
                                    >
                                        <FaDownload size={14} />
                                    </button>

                                    {/* Amber / Yellow: Folder Open / Import */}
                                    <label
                                        htmlFor="import-images-backup"
                                        className="w-10 h-10 rounded-2xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 flex items-center justify-center transition shadow-2xs active:scale-95 cursor-pointer"
                                        title="Import Images Backup File (Open on PC)"
                                    >
                                        <FaFolderOpen size={15} />
                                    </label>
                                    <input
                                        id="import-images-backup"
                                        type="file"
                                        accept=".json,application/json"
                                        className="hidden"
                                        onChange={handleImportImagesBackup}
                                    />

                                    {/* Blue: Add Custom Image / Gallery */}
                                    <button
                                        type="button"
                                        onClick={() => {
                                            if (filteredPrompts[0]) openServicePreviewModal(filteredPrompts[0]);
                                        }}
                                        className="w-10 h-10 rounded-2xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 flex items-center justify-center transition shadow-2xs active:scale-95"
                                        title="Upload / Manage Photos"
                                    >
                                        <FaImage size={15} />
                                    </button>

                                    {/* Red: Reset / Clear */}
                                    <button
                                        type="button"
                                        onClick={handleResetAllCustomImages}
                                        className="w-10 h-10 rounded-2xl bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 flex items-center justify-center transition shadow-2xs active:scale-95"
                                        title="Reset All to Default Images"
                                    >
                                        <FaTrash size={13} />
                                    </button>

                                    {/* Gray: External Link / Open Website */}
                                    <a
                                        href="/#/services"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-2xl bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 flex items-center justify-center transition shadow-2xs active:scale-95"
                                        title="Open Live Public Services Page in New Tab"
                                    >
                                        <FaExternalLinkAlt size={13} />
                                    </a>
                                </div>
                            </div>

                            {/* 3. SEARCH BAR WITH FILTER FUNNEL ICON (MATCHING MOCKUP) */}
                            <div className="relative flex items-center gap-2">
                                <div className="relative flex-1">
                                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                                    <input
                                        id="studio-search-input"
                                        type="text"
                                        placeholder="Search 172 prompts by service name (e.g., Hair Cut, Bridal Makeup, Facial...)"
                                        value={promptSearch}
                                        onChange={(e) => setPromptSearch(e.target.value)}
                                        className="w-full pl-11 pr-4 py-3 bg-white rounded-full border border-[#EADBCE] text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-2xs"
                                    />
                                    {promptSearch && (
                                        <button
                                            type="button"
                                            onClick={() => setPromptSearch('')}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold"
                                        >
                                            ✕
                                        </button>
                                    )}
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setPromptCategoryFilter('All')}
                                    className="w-11 h-11 rounded-full bg-white hover:bg-amber-50 text-gray-700 border border-[#EADBCE] flex items-center justify-center transition shadow-2xs shrink-0"
                                    title="Reset / Toggle Filter"
                                >
                                    <FaFilter size={14} className={promptCategoryFilter !== 'All' ? 'text-[#8E580B]' : 'text-gray-600'} />
                                </button>
                            </div>

                            {/* 4. CATEGORY ICON PILLS ROW (MATCHING MOCKUP) */}
                            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                                {promptCategories.map(cat => {
                                    const IconComp = cat.icon;
                                    const isActive = promptCategoryFilter === cat.id;

                                    return (
                                        <button
                                            key={cat.id}
                                            type="button"
                                            onClick={() => setPromptCategoryFilter(cat.id)}
                                            className={`py-2 px-3.5 rounded-full text-xs font-black whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                                                isActive
                                                    ? 'bg-[#4A0A16] text-amber-200 shadow-sm border border-[#4A0A16]'
                                                    : 'bg-white hover:bg-[#FAF4ED] text-[#4A3222] border border-[#EADBCE] shadow-2xs'
                                            }`}
                                            title={cat.title}
                                        >
                                            {IconComp && <IconComp size={12} className={isActive ? 'text-amber-300' : 'text-[#8E580B]'} />}
                                            <span>{cat.label}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* 5. GENERATED IMAGES SECTION HEADER */}
                            <div className="bg-white rounded-3xl p-4 sm:p-5 border border-[#EADBCE] shadow-sm space-y-4">
                                <div className="flex items-center justify-between pb-3 border-b border-[#F0E4D8]">
                                    <div className="flex items-center gap-2">
                                        <FaImage className="text-[#8E580B] text-lg" />
                                        <h3 className="font-serif font-black text-lg sm:text-xl text-gray-950">
                                            Generated Images
                                        </h3>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="bg-[#FAF4ED] text-[#8E580B] border border-[#EADBCE] text-xs font-black px-3 py-1 rounded-full">
                                            {filteredPrompts.length} Images
                                        </span>

                                        {/* Grid vs Detailed Switcher */}
                                        <div className="flex items-center bg-gray-100 p-0.5 rounded-xl border border-gray-200">
                                            <button
                                                type="button"
                                                onClick={() => setGalleryViewMode('grid')}
                                                className={`p-1.5 rounded-lg text-xs transition ${
                                                    galleryViewMode === 'grid'
                                                        ? 'bg-white text-gray-900 shadow-2xs font-bold'
                                                        : 'text-gray-500 hover:text-gray-800'
                                                }`}
                                                title="Visual Photo Grid View"
                                            >
                                                <FaThLarge size={12} />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setGalleryViewMode('detailed')}
                                                className={`p-1.5 rounded-lg text-xs transition ${
                                                    galleryViewMode === 'detailed'
                                                        ? 'bg-white text-gray-900 shadow-2xs font-bold'
                                                        : 'text-gray-500 hover:text-gray-800'
                                                }`}
                                                title="Detailed Prompt List View"
                                            >
                                                <FaListAlt size={12} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* ======================================================== */}
                                {/* MODE 1: VISUAL PHOTO GRID (MATCHING USER SCREENSHOT MOCKUP) */}
                                {/* ======================================================== */}
                                {galleryViewMode === 'grid' && (
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                                        {filteredPrompts.map(item => {
                                            const cardImg = getServiceDisplayImage(item);
                                            const hasCustom = !!customServiceImages[item.id];

                                            return (
                                                <div
                                                    key={item.id}
                                                    onClick={() => openServicePreviewModal(item)}
                                                    className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#241510] border border-[#EADBCE] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer select-none"
                                                >
                                                    {/* Background Image */}
                                                    <img
                                                        src={cardImg}
                                                        alt={item.name}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                        loading="lazy"
                                                    />

                                                    {/* Top-Right Quick Action Frosted Pill */}
                                                    <div
                                                        className="absolute top-2.5 right-2.5 z-10 bg-black/60 hover:bg-black/80 backdrop-blur-md px-2 py-1 rounded-full text-white/90 flex items-center gap-1.5 border border-white/20 text-[11px] shadow-sm transition"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            openServicePreviewModal(item);
                                                        }}
                                                        title="Preview Service Details"
                                                    >
                                                        <FaEye size={12} className="hover:text-amber-300" />
                                                        <FaEllipsisH size={11} className="hover:text-amber-300" />
                                                    </div>

                                                    {/* Custom Upload Indicator Badge if applicable */}
                                                    {hasCustom && (
                                                        <div className="absolute top-2.5 left-2.5 z-10 bg-emerald-600/90 backdrop-blur-xs text-white text-[9px] font-black px-2 py-0.5 rounded-full border border-emerald-300 shadow-sm">
                                                            Custom
                                                        </div>
                                                    )}

                                                    {/* Bottom Frosted Dark Glass Service Title Overlay */}
                                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/65 to-transparent pt-10 pb-3.5 px-3 text-center">
                                                        <h4 className="font-serif font-black text-sm sm:text-base text-white tracking-wide leading-snug drop-shadow-sm group-hover:text-amber-200 transition-colors">
                                                            {item.name}
                                                        </h4>
                                                        <span className="text-[10px] font-semibold text-gray-300 tracking-wider block mt-0.5 opacity-80 group-hover:opacity-100">
                                                            {item.fileName}
                                                        </span>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}

                                {/* ======================================================== */}
                                {/* MODE 2: DETAILED PROMPT LIST VIEW                        */}
                                {/* ======================================================== */}
                                {galleryViewMode === 'detailed' && (
                                    <div className="space-y-4 pt-2">
                                        {/* Global Toggle Strip for Prompts */}
                                        <div className="flex items-center justify-between bg-amber-50/70 p-3 rounded-2xl border border-amber-200/80 text-xs text-amber-950">
                                            <div className="flex items-center gap-2">
                                                <span className="font-black">Prompt Display:</span>
                                                <span className="text-gray-600 font-medium hidden sm:inline">
                                                    Prompts are hidden by default to keep the page clean. Click any service prompt to view.
                                                </span>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={toggleAllPromptsGlobal}
                                                className="px-3 py-1.5 rounded-xl bg-white hover:bg-amber-100 text-[#4A0A16] font-black text-xs border border-amber-300 shadow-2xs flex items-center gap-1.5 transition active:scale-95"
                                            >
                                                {showAllPromptsGlobal ? <FaChevronUp size={11} className="text-amber-700" /> : <FaChevronDown size={11} className="text-amber-700" />}
                                                <span>{showAllPromptsGlobal ? 'Hide All Prompts' : 'Show All Prompts'}</span>
                                            </button>
                                        </div>

                                        {filteredPrompts.map(item => {
                                            const isBridal = item.category === 'Bridal Makeup & Special Occasion Makeup';
                                            const isPromptVisible = showPromptDetails[item.id] !== undefined
                                                ? showPromptDetails[item.id]
                                                : showAllPromptsGlobal;
                                            const svc = services.find(s => s.id === item.id);
                                            const targetPath = svc?.image || `/images/services/${svc?.folder || '01-haircuts-and-styling'}/${customTargetFileNames[item.id] || item.fileName}`;
                                            const displayInputVal = serviceInputImages[item.id] !== undefined
                                                ? serviceInputImages[item.id]
                                                : (customServiceImages[item.id] && !customServiceImages[item.id].startsWith('data:')
                                                    ? customServiceImages[item.id]
                                                    : targetPath);

                                            return (
                                                <div
                                                    key={item.id}
                                                    className={`bg-white rounded-3xl p-5 sm:p-6 border transition-all space-y-4 ${
                                                        isBridal 
                                                            ? 'border-amber-400/80 shadow-md ring-1 ring-amber-300/40' 
                                                            : 'border-[#EADBCE] shadow-sm'
                                                    }`}
                                                >
                                                    {/* Header matching Image 3: #2 U-Cut [Haircuts & Styling] ... Preview Modal */}
                                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-[#F0E4D8]">
                                                        <div className="flex items-center gap-2.5 flex-wrap">
                                                            <span className="font-mono font-bold text-xs text-gray-500 bg-[#F5EDE4] px-2.5 py-0.5 rounded-md border border-[#EADBCE]">
                                                                #{item.index}
                                                            </span>
                                                            <h3 className="font-serif font-black text-lg sm:text-xl text-gray-950">
                                                                {item.name}
                                                            </h3>
                                                            <span className="bg-[#FFF4D9] text-[#9A6216] border border-amber-300/60 text-xs font-black px-3 py-0.5 rounded-full">
                                                                {item.category}
                                                            </span>
                                                            {isBridal && (
                                                                <span className="bg-gradient-to-r from-[#4A0A16] to-[#681022] text-amber-300 text-[11px] font-black px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-2xs">
                                                                    <span>🌸</span> Kerala Bridal
                                                                </span>
                                                            )}
                                                        </div>

                                                        <button
                                                            type="button"
                                                            onClick={() => openServicePreviewModal(item)}
                                                            className="px-3.5 py-1.5 rounded-xl border border-gray-300 hover:border-amber-400 text-xs font-bold text-gray-700 bg-white hover:bg-amber-50 transition active:scale-95 flex items-center gap-1.5 shadow-2xs self-start sm:self-center"
                                                        >
                                                            <FaEye size={12} className="text-amber-700" />
                                                            <span>Preview Modal</span>
                                                        </button>
                                                    </div>

                                                    {/* Row 1 matching Image 3: TARGET FILE NAME: [ u-cut.webp ] [ Copy Name ] [ Download File ] */}
                                                    <div className="p-3 sm:p-3.5 rounded-2xl bg-[#FFFBF7] border border-[#EADBCE] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 shadow-2xs">
                                                        <div className="flex items-center gap-2 min-w-0 flex-1">
                                                            <FaFolderOpen className="text-[#8E580B] text-sm shrink-0" />
                                                            <span className="text-xs font-black text-gray-800 uppercase tracking-wider shrink-0">
                                                                TARGET FILE NAME:
                                                            </span>
                                                            <input
                                                                type="text"
                                                                value={customTargetFileNames[item.id] !== undefined ? customTargetFileNames[item.id] : item.fileName}
                                                                onChange={(e) => setCustomTargetFileNames({ ...customTargetFileNames, [item.id]: e.target.value })}
                                                                className="text-xs sm:text-sm font-mono font-bold text-[#4A0A16] bg-white px-3 py-1.5 rounded-lg border border-gray-300 focus:border-amber-500 outline-none flex-1 max-w-sm"
                                                                title="Target File Name for Image Generation"
                                                            />
                                                        </div>

                                                        <div className="flex items-center gap-2 shrink-0">
                                                            <button
                                                                type="button"
                                                                onClick={() => handleCopyFileName(item.id, customTargetFileNames[item.id] || item.fileName)}
                                                                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition active:scale-95 ${
                                                                    copiedFileId === item.id
                                                                        ? 'bg-emerald-600 text-white'
                                                                        : 'bg-white hover:bg-gray-100 text-gray-800 border border-gray-300'
                                                                }`}
                                                            >
                                                                {copiedFileId === item.id ? <FaCheck size={11} /> : <FaCopy size={11} />}
                                                                <span>{copiedFileId === item.id ? 'Copied!' : 'Copy Name'}</span>
                                                            </button>

                                                            <button
                                                                type="button"
                                                                onClick={() => handleDownloadResizedFile(item.id, customTargetFileNames[item.id] || item.fileName)}
                                                                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#4A0A16] hover:bg-[#681022] text-amber-200 hover:text-white flex items-center gap-1.5 transition active:scale-95 shadow-xs"
                                                                title="Download Image File"
                                                            >
                                                                <FaDownload size={11} className="text-amber-300" />
                                                                <span>Download File</span>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    {/* Section 2 matching Image 3: AI MODEL IMAGE GENERATION PROMPT + [ Copy Prompt ] */}
                                                    <div className="rounded-2xl border border-[#EADBCE] bg-[#FAF8F5] overflow-hidden shadow-2xs">
                                                        <div 
                                                            onClick={() => togglePromptVisibility(item.id)}
                                                            className="p-3 bg-gradient-to-r from-amber-50/80 via-white to-amber-50/40 flex items-center justify-between gap-2 border-b border-[#F0E4D8] cursor-pointer hover:bg-amber-100/50 transition select-none"
                                                            title={isPromptVisible ? 'Click to hide prompt' : 'Click to view prompt'}
                                                        >
                                                            <div className="flex items-center gap-2">
                                                                <FaMagic className="text-[#8E580B] text-sm shrink-0" />
                                                                <span className="text-xs font-black uppercase tracking-wider text-gray-900">
                                                                    AI MODEL IMAGE GENERATION PROMPT
                                                                </span>
                                                            </div>

                                                            <div className="flex items-center gap-2">
                                                                <button
                                                                    type="button"
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        togglePromptVisibility(item.id);
                                                                    }}
                                                                    className="text-[11px] font-bold text-gray-700 hover:text-gray-950 bg-white hover:bg-amber-50 border border-[#EADBCE] px-2.5 py-1 rounded-lg flex items-center gap-1 transition shadow-2xs active:scale-95"
                                                                >
                                                                    {isPromptVisible ? <FaEyeSlash size={11} className="text-gray-500" /> : <FaEye size={11} className="text-amber-700" />}
                                                                    <span>{isPromptVisible ? 'Hide Prompt' : 'Show Prompt'}</span>
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        handleCopyPrompt(item.id, item.prompt);
                                                                    }}
                                                                    className={`px-3.5 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition active:scale-95 shadow-2xs ${
                                                                        copiedPromptId === item.id
                                                                            ? 'bg-emerald-600 text-white'
                                                                            : 'bg-[#B98327] hover:bg-[#A3701E] text-white'
                                                                    }`}
                                                                    title="Copy prompt text to clipboard"
                                                                >
                                                                    {copiedPromptId === item.id ? <FaCheck size={11} /> : <FaCopy size={11} />}
                                                                    <span>{copiedPromptId === item.id ? 'Copied!' : 'Copy Prompt'}</span>
                                                                </button>
                                                            </div>
                                                        </div>

                                                        {isPromptVisible && (
                                                            <div className="p-4 space-y-3">
                                                                <div className="p-4 rounded-2xl bg-white border border-[#EADBCE] text-xs sm:text-sm text-gray-800 leading-relaxed font-normal select-all shadow-2xs">
                                                                    {item.prompt}
                                                                </div>

                                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-gray-500 font-semibold px-1 gap-1">
                                                                    <span>Aspect: {item.aspectRatio}</span>
                                                                    <span>Watermark: {item.watermark}</span>
                                                                </div>

                                                                {item.modelVariation && (
                                                                    <div className="p-3 rounded-xl bg-[#FFF8EA] border border-[#F5E6CC] text-xs text-amber-950 font-medium">
                                                                        <span className="font-bold text-[#8E580B]">Model Variation:</span> {item.modelVariation.modelProfile}
                                                                        {item.modelVariation.pose && (
                                                                            <span className="text-gray-600 ml-2 font-normal">({item.modelVariation.pose})</span>
                                                                        )}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Section 3 matching Image 3: REPLACE IMAGE FOR SERVICE & MODAL */}
                                                    <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FFFBF7] border border-[#EADBCE] space-y-2.5 shadow-2xs">
                                                        <div className="flex items-center justify-between flex-wrap gap-2">
                                                            <span className="text-xs font-black uppercase tracking-wider text-gray-900 flex items-center gap-1.5">
                                                                <FaPalette className="text-[#8E580B]" /> REPLACE IMAGE FOR SERVICE & MODAL
                                                            </span>
                                                            <div className="flex items-center gap-2">
                                                                {customServiceImages[item.id] ? (
                                                                    <>
                                                                        <span className="text-[10px] font-black text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-300">
                                                                            ✓ Custom Active
                                                                        </span>
                                                                        <button
                                                                            type="button"
                                                                            onClick={() => handleRemoveServiceImage(item.id)}
                                                                            className="px-2.5 py-1 rounded-lg text-xs font-bold text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 transition active:scale-95 flex items-center gap-1 shadow-2xs"
                                                                            title="Reset to original default catalog photo"
                                                                        >
                                                                            <FaTrash size={10} />
                                                                            <span>Reset to Default</span>
                                                                        </button>
                                                                    </>
                                                                ) : (
                                                                    <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">
                                                                        • Default Catalog Photo
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>

                                                        {/* Live Image Thumbnail + Upload & Path Controls */}
                                                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                                                            {/* Live Active Image Thumbnail (Clickable to preview) */}
                                                            <div 
                                                                onClick={() => openServicePreviewModal(item)}
                                                                className="w-12 h-14 sm:w-14 sm:h-16 rounded-xl overflow-hidden bg-stone-900 border-2 border-amber-300/70 shrink-0 shadow-xs cursor-pointer group/thumb relative self-start sm:self-center"
                                                                title="Click to preview service photo"
                                                            >
                                                                <img
                                                                    src={getServiceDisplayImage(item)}
                                                                    alt={item.name}
                                                                    className="w-full h-full object-cover group-hover/thumb:scale-110 transition duration-300"
                                                                />
                                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 flex items-center justify-center transition">
                                                                    <FaEye size={13} className="text-white drop-shadow" />
                                                                </div>
                                                            </div>

                                                            {/* Upload Button + Clean Path URL Input */}
                                                            <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 min-w-0">
                                                                <label
                                                                    htmlFor={`file-upload-${item.id}`}
                                                                    className={`px-4 py-2.5 rounded-xl text-xs font-black transition active:scale-95 shrink-0 shadow-xs flex items-center justify-center gap-1.5 cursor-pointer ${
                                                                        isProcessingUpload[item.id]
                                                                            ? 'bg-gray-400 text-white cursor-wait'
                                                                            : 'bg-[#4A0A16] hover:bg-[#681022] text-amber-300 hover:text-white'
                                                                    }`}
                                                                    title="Upload image from phone or PC (Instant Auto-Resize & Compression)"
                                                                >
                                                                    <FaCloudUploadAlt size={14} className="text-amber-400" />
                                                                    <span>{isProcessingUpload[item.id] ? '⚡ Processing...' : '📁 Upload & Auto-Resize'}</span>
                                                                </label>
                                                                <input
                                                                    id={`file-upload-${item.id}`}
                                                                    type="file"
                                                                    accept="image/*"
                                                                    disabled={isProcessingUpload[item.id]}
                                                                    className="hidden"
                                                                    onChange={(e) => {
                                                                        if (e.target.files && e.target.files[0]) {
                                                                            handleFileUpload(item.id, e.target.files[0], customTargetFileNames[item.id] || item.fileName);
                                                                            e.target.value = '';
                                                                        }
                                                                    }}
                                                                />

                                                                <input
                                                                    type="text"
                                                                    placeholder="/images/services/..."
                                                                    value={displayInputVal}
                                                                    onChange={(e) => setServiceInputImages({ ...serviceInputImages, [item.id]: e.target.value })}
                                                                    className="flex-1 bg-white border border-[#EADBCE] rounded-xl px-3.5 py-2.5 text-xs font-mono text-gray-900 outline-none focus:ring-2 focus:ring-amber-500 shadow-2xs"
                                                                />

                                                                <button
                                                                    type="button"
                                                                    onClick={() => handleSaveServiceImage(item.id, displayInputVal)}
                                                                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black transition active:scale-95 shrink-0 shadow-xs"
                                                                >
                                                                    Save URL
                                                                </button>
                                                            </div>
                                                        </div>

                                                        {/* Upload Stats / Auto-Resize Result Banner */}
                                                        {uploadStats[item.id] && (
                                                            <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 animate-in fade-in">
                                                                <div className="flex items-center gap-1.5 flex-wrap">
                                                                    <span className="font-black text-emerald-800">✓ Auto-Resized:</span>
                                                                    <span className="line-through text-gray-500">{uploadStats[item.id].originalDisplay}</span>
                                                                    <span className="font-black text-emerald-900">➔ {uploadStats[item.id].newDisplay}</span>
                                                                    <span className="bg-emerald-200 text-emerald-950 px-1.5 py-0.5 rounded text-[10px] font-black">
                                                                        -{uploadStats[item.id].reduction}% smaller
                                                                    </span>
                                                                    <span className="text-gray-600 text-[11px]">({uploadStats[item.id].dimensions})</span>
                                                                </div>

                                                                <button
                                                                    type="button"
                                                                    onClick={() => handleDownloadResizedFile(item.id, customTargetFileNames[item.id] || item.fileName)}
                                                                    className="px-2.5 py-1 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-[11px] font-bold flex items-center gap-1 shrink-0 transition"
                                                                >
                                                                    <FaDownload size={10} />
                                                                    <span>Save as {customTargetFileNames[item.id] || item.fileName}</span>
                                                                </button>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })()}

                        {/* Service Modal Preview Popup (Compact, 100% Scrollable, Easy to Close on Mobile) */}
                        {previewServiceModal && (() => {
                            const serviceObj = services.find(s => s.id === previewServiceModal.id);
                            const modalImg = getServiceDisplayImage(previewServiceModal);

                            return (
                                <div 
                                    className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs overflow-y-auto"
                                    onClick={() => setPreviewServiceModal(null)}
                                >
                                    <div 
                                        className="bg-white rounded-3xl w-full max-w-md max-h-[85vh] flex flex-col overflow-hidden shadow-2xl border-2 border-amber-400 relative animate-in fade-in zoom-in-95 duration-200 my-auto"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {/* Sticky Top Header with High-Contrast Close Button */}
                                        <div className="p-3.5 bg-gradient-to-r from-[#4A0A16] to-[#2D060D] text-white flex items-center justify-between shrink-0 border-b border-amber-400/30">
                                            <div className="flex items-center gap-2 min-w-0">
                                                <span className="text-[10px] font-black uppercase text-amber-300 bg-black/40 px-2 py-0.5 rounded-md shrink-0">
                                                    {previewServiceModal.category}
                                                </span>
                                                <h3 className="font-serif font-black text-sm sm:text-base text-white truncate">
                                                    {previewServiceModal.name}
                                                </h3>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => setPreviewServiceModal(null)}
                                                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition active:scale-90 shrink-0"
                                                title="Close Preview (or tap outside)"
                                                aria-label="Close Preview"
                                            >
                                                <FaTimes size={14} />
                                            </button>
                                        </div>

                                        {/* Compact Image Preview with Watermark Overlay */}
                                        <div className="relative h-36 sm:h-44 bg-stone-900 shrink-0 overflow-hidden">
                                            <img
                                                src={modalImg}
                                                alt={previewServiceModal.name}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-lg border border-amber-300/30 shadow-xs opacity-90 pointer-events-none">
                                                <Logo variant="gold" size="micro" showSwoop={true} align="left" />
                                            </div>
                                        </div>

                                        {/* Scrollable Content Body */}
                                        <div className="p-4 overflow-y-auto space-y-3 flex-1 overscroll-contain">
                                            <div className="flex items-center justify-between gap-2">
                                                <div className="text-[11px] font-mono font-bold text-gray-500 truncate">
                                                    File: <span className="text-[#4A0A16]">{customTargetFileNames[previewServiceModal.id] || previewServiceModal.fileName}</span>
                                                </div>
                                                {customServiceImages[previewServiceModal.id] && (
                                                    <span className="text-[10px] font-black text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                                                        ✓ Custom Active
                                                    </span>
                                                )}
                                            </div>

                                            {/* Service Description */}
                                            {serviceObj?.description && (
                                                <div className="p-3 rounded-2xl bg-[#FAF9F5] border border-gray-200 text-xs text-gray-700 leading-relaxed font-medium">
                                                    {serviceObj.description}
                                                </div>
                                            )}

                                            {/* Collapsible Prompt Toggle inside Modal (HIDDEN BY DEFAULT - Tap to Show) */}
                                            <div className="rounded-2xl border border-amber-200/80 bg-white overflow-hidden shadow-2xs">
                                                <button 
                                                    type="button"
                                                    onClick={() => setShowModalPrompt(prev => !prev)}
                                                    className="w-full p-2.5 bg-amber-50/80 hover:bg-amber-100/60 cursor-pointer flex items-center justify-between gap-2 select-none text-left transition"
                                                >
                                                    <span className="text-[11px] font-black uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                                                        <FaMagic className="text-amber-700" />
                                                        <span>AI Generation Prompt</span>
                                                    </span>
                                                    <div className="flex items-center gap-1 text-[11px] text-amber-900 font-bold bg-amber-200/60 px-2 py-0.5 rounded-full">
                                                        {showModalPrompt ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
                                                        <span>{showModalPrompt ? 'Hide Prompt' : 'Tap to View Prompt'}</span>
                                                    </div>
                                                </button>

                                                {showModalPrompt && (
                                                    <div className="p-3 border-t border-amber-100 bg-[#FAF9F5] space-y-2 text-xs text-gray-700 max-h-36 overflow-y-auto animate-in fade-in duration-200">
                                                        <div className="leading-relaxed select-all">
                                                            {previewServiceModal.prompt}
                                                        </div>
                                                        <div className="flex items-center justify-between pt-1 border-t border-amber-200/50">
                                                            <span className="text-[10px] text-gray-500 font-bold">Aspect: {previewServiceModal.aspectRatio}</span>
                                                            <button
                                                                type="button"
                                                                onClick={() => handleCopyPrompt(previewServiceModal.id, previewServiceModal.prompt)}
                                                                className="text-[11px] font-black text-amber-800 hover:text-amber-900 flex items-center gap-1 bg-amber-100 px-2 py-0.5 rounded-md active:scale-95 transition"
                                                            >
                                                                <FaCopy size={10} /> Copy
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {previewServiceModal.modelVariation && (
                                                <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-[11px] text-amber-950 flex flex-col gap-1">
                                                    <div><span className="font-bold text-[#4A0A16]">Model:</span> {previewServiceModal.modelVariation.modelProfile}</div>
                                                    {previewServiceModal.modelVariation.pose && (
                                                        <div><span className="font-bold text-gray-700">Pose:</span> {previewServiceModal.modelVariation.pose}</div>
                                                    )}
                                                </div>
                                            )}
                                        </div>

                                        {/* Sticky Bottom Actions Bar */}
                                        <div className="p-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between shrink-0">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[11px] text-gray-500 font-bold truncate">
                                                    {customServiceImages[previewServiceModal.id] ? '✓ Custom Image Active' : '• Default Service Image'}
                                                </span>
                                                {customServiceImages[previewServiceModal.id] && (
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            handleRemoveServiceImage(previewServiceModal.id);
                                                        }}
                                                        className="px-2.5 py-1 rounded-lg bg-red-100 hover:bg-red-200 text-red-800 text-xs font-bold border border-red-300 flex items-center gap-1 active:scale-95 transition shadow-2xs"
                                                        title="Reset this service image to default catalog photo"
                                                    >
                                                        <FaTrash size={10} />
                                                        <span>Reset</span>
                                                    </button>
                                                )}
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => setPreviewServiceModal(null)}
                                                className="btn-primary py-2 px-5 rounded-xl text-xs font-black shadow-md active:scale-95 transition"
                                            >
                                                Close Preview
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })()}

                {activeTab === 'offers' && (
                    <div className="space-y-5">
                        {/* Top Announcement Banner Card */}
                        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E8D9C5] shadow-xs">
                            <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
                                <div>
                                    <h2 className="font-serif font-black text-lg text-gray-950">
                                        Top Festive Announcement Banner
                                    </h2>
                                    <p className="text-xs text-gray-500 font-medium">Gold bar shown at the very top of all pages</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={bannerActive}
                                        onChange={(e) => setBannerActive(e.target.checked)}
                                        className="sr-only peer"
                                    />
                                    <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#B98327]"></div>
                                    <span className="ml-2 text-xs font-bold text-gray-700">
                                        {bannerActive ? 'Active' : 'Hidden'}
                                    </span>
                                </label>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-black text-gray-700 uppercase tracking-wider mb-1.5">
                                        Banner Tag / Badge
                                    </label>
                                    <input
                                        type="text"
                                        value={bannerBadge}
                                        onChange={(e) => setBannerBadge(e.target.value)}
                                        placeholder="e.g. FESTIVE OFFER, ONAM SPECIAL"
                                        className="w-full bg-[#FAF9F5] border-2 border-gray-200 rounded-2xl px-4 py-2.5 text-sm font-black text-gray-900 focus:border-[#B98327] outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-black text-gray-700 uppercase tracking-wider mb-1.5">
                                        Offer Announcement Text
                                    </label>
                                    <textarea
                                        rows={2}
                                        value={bannerText}
                                        onChange={(e) => setBannerText(e.target.value)}
                                        placeholder="Type your special discount announcement..."
                                        className="w-full bg-[#FAF9F5] border-2 border-gray-200 rounded-2xl px-4 py-2.5 text-sm font-bold text-gray-900 focus:border-[#B98327] outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Featured Promo Banner Card (with Image Add) */}
                        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E8D9C5] shadow-xs">
                            <div className="pb-3 mb-4 border-b border-gray-100 flex items-center justify-between">
                                <div>
                                    <h2 className="font-serif font-black text-lg text-gray-950">
                                        Home Featured Promo Banner
                                    </h2>
                                    <p className="text-xs text-gray-500 font-medium">Configurable card on Home page with photo</p>
                                </div>
                                <span className="bg-amber-100 text-[#8E580B] text-xs font-black px-3 py-1 rounded-full">
                                    With Photo
                                </span>
                            </div>

                            {/* Live Mobile Visual Preview Card */}
                            <div className="mb-5">
                                <span className="text-xs font-black text-gray-500 uppercase tracking-wider block mb-2">
                                    📱 Live Visual Preview on Phone:
                                </span>
                                <div className="rounded-3xl overflow-hidden shadow-xs border border-[#E8D9C5] bg-[#FAF3E8] relative min-h-[155px] flex items-center select-none">
                                    <div className="absolute right-0 top-0 bottom-0 w-[52%] h-full overflow-hidden pointer-events-none">
                                        <img
                                            src={promoImage}
                                            alt={promoTitle}
                                            className="w-full h-full object-cover object-[center_15%]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF3E8] via-[#FAF3E8]/50 via-25% to-transparent pointer-events-none" />
                                    </div>
                                    <div className="relative z-10 w-[60%] pl-5 pr-1 py-4 flex flex-col justify-center">
                                        <h3 className="text-lg sm:text-2xl font-serif font-black text-[#2A180E] leading-tight">
                                            {promoTitle} <br />
                                            <span className="text-[#A47133] font-serif">{promoHighlight}</span>
                                        </h3>
                                        <p className="text-xs text-[#4C3B30] font-semibold mt-1 truncate">
                                            {promoSubtitle}
                                        </p>
                                        <div className="mt-2.5">
                                            <span className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#B97A1E] to-[#925C10] text-white text-xs font-black shadow-xs">
                                                <span>{promoButtonText}</span>
                                                <FaArrowRight size={8} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Form fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
                                <div>
                                    <label className="block text-xs font-black text-gray-700 uppercase mb-1">
                                        Banner Title
                                    </label>
                                    <input
                                        type="text"
                                        value={promoTitle}
                                        onChange={(e) => setPromoTitle(e.target.value)}
                                        className="w-full bg-[#FAF9F5] border-2 border-gray-200 rounded-xl px-3 py-2 text-sm font-bold text-gray-900 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-black text-gray-700 uppercase mb-1">
                                        Gold Highlight Word
                                    </label>
                                    <input
                                        type="text"
                                        value={promoHighlight}
                                        onChange={(e) => setPromoHighlight(e.target.value)}
                                        className="w-full bg-[#FAF9F5] border-2 border-gray-200 rounded-xl px-3 py-2 text-sm font-bold text-[#A46E19] outline-none"
                                    />
                                </div>
                            </div>

                            {/* Photo Picker */}
                            <div className="pt-3 border-t border-gray-100">
                                <label className="block text-xs font-black text-gray-700 uppercase mb-2">
                                    Select Promo Photo:
                                </label>
                                <div className="grid grid-cols-4 gap-2">
                                    {imagePresets.map((preset, idx) => (
                                        <button
                                            key={idx}
                                            type="button"
                                            onClick={() => setPromoImage(preset.image)}
                                            className={`relative rounded-xl overflow-hidden border-2 text-left group ${
                                                promoImage === preset.image
                                                    ? 'border-[#B98327] ring-2 ring-amber-300'
                                                    : 'border-transparent opacity-80 hover:opacity-100'
                                            }`}
                                        >
                                            <img
                                                src={preset.image}
                                                alt={preset.name}
                                                className="w-full h-14 sm:h-16 object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/40 flex items-end p-1">
                                                <span className="text-[9px] text-white font-bold truncate">
                                                    {preset.name}
                                                </span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ============================================================ */}
                {/* TAB 3: FEATURE 1 - BLOG & ARTICLE PUBLISHER                  */}
                {/* ============================================================ */}
                {activeTab === 'blogs' && (
                    <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E8D9C5] shadow-xs space-y-5">
                        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                            <div>
                                <h2 className="font-serif font-black text-lg sm:text-xl text-gray-950">
                                    Publish New Salon Blog Post
                                </h2>
                                <p className="text-xs text-gray-500 font-medium">Post beauty advice directly from your phone</p>
                            </div>
                            <span className="bg-amber-100 text-[#8E580B] text-xs font-black px-3 py-1 rounded-full">
                                Instant Publish
                            </span>
                        </div>

                        {blogPublishSuccess && (
                            <div className="bg-emerald-100 text-emerald-800 p-3 rounded-2xl text-xs sm:text-sm font-black flex items-center gap-2">
                                <FaCheck /> Blog post published live! It now appears on the Blog page.
                            </div>
                        )}

                        <form onSubmit={handlePublishBlog} className="space-y-4">
                            <div>
                                <label className="block text-xs font-black text-gray-700 uppercase mb-1">
                                    Article Title
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. 5 Haircare Secrets for Kanhangad Monsoon"
                                    value={newBlog.title}
                                    onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                                    className="w-full bg-[#FAF9F5] border-2 border-gray-200 rounded-2xl px-4 py-2.5 text-sm font-bold text-gray-900 focus:border-[#B98327] outline-none"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-black text-gray-700 uppercase mb-1">
                                        Category
                                    </label>
                                    <select
                                        value={newBlog.category}
                                        onChange={(e) => setNewBlog({ ...newBlog, category: e.target.value })}
                                        className="w-full bg-[#FAF9F5] border-2 border-gray-200 rounded-2xl px-3 py-2.5 text-xs sm:text-sm font-bold text-gray-900 outline-none"
                                    >
                                        <option value="Bridal Beauty">Bridal Beauty</option>
                                        <option value="Hair Care">Hair Care</option>
                                        <option value="Skin Radiance">Skin Radiance</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-black text-gray-700 uppercase mb-1">
                                        Reading Time
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g. 3 min read"
                                        value={newBlog.readTime}
                                        onChange={(e) => setNewBlog({ ...newBlog, readTime: e.target.value })}
                                        className="w-full bg-[#FAF9F5] border-2 border-gray-200 rounded-2xl px-3 py-2.5 text-xs sm:text-sm font-bold text-gray-900 outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-black text-gray-700 uppercase mb-1">
                                    Short Summary / Excerpt
                                </label>
                                <textarea
                                    rows={2}
                                    placeholder="Brief 1-2 sentence overview shown on the card..."
                                    value={newBlog.excerpt}
                                    onChange={(e) => setNewBlog({ ...newBlog, excerpt: e.target.value })}
                                    className="w-full bg-[#FAF9F5] border-2 border-gray-200 rounded-2xl px-4 py-2 text-xs sm:text-sm font-medium text-gray-900 focus:border-[#B98327] outline-none"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-black text-gray-700 uppercase mb-1">
                                    Full Article Content & Tips
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="Type your salon advice, steps, or aftercare tips..."
                                    value={newBlog.content}
                                    onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
                                    className="w-full bg-[#FAF9F5] border-2 border-gray-200 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-medium text-gray-900 focus:border-[#B98327] outline-none"
                                />
                            </div>

                            {/* Select Blog Photo */}
                            <div>
                                <label className="block text-xs font-black text-gray-700 uppercase mb-2">
                                    Choose Cover Photo:
                                </label>
                                <div className="grid grid-cols-4 gap-2">
                                    {imagePresets.map((preset, idx) => (
                                        <button
                                            key={idx}
                                            type="button"
                                            onClick={() => setNewBlog({ ...newBlog, image: preset.image })}
                                            className={`rounded-xl overflow-hidden border-2 h-14 ${
                                                newBlog.image === preset.image ? 'border-[#B98327] ring-2 ring-amber-300' : 'border-transparent'
                                            }`}
                                        >
                                            <img src={preset.image} alt={preset.name} className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full btn-primary py-3 rounded-2xl text-sm font-black shadow-md flex items-center justify-center gap-2 active:scale-95 transition"
                            >
                                <FaBook size={13} /> Publish Blog to Website
                            </button>
                        </form>

                        {/* List of Published Custom Blogs with Delete Option */}
                        {customBlogs.length > 0 && (
                            <div className="pt-5 border-t border-gray-100">
                                <h3 className="font-serif font-black text-sm sm:text-base text-gray-900 mb-3 flex items-center justify-between">
                                    <span>Your Published Articles ({customBlogs.length})</span>
                                    <span className="text-xs text-gray-400 font-normal">Stored live in browser</span>
                                </h3>
                                <div className="space-y-2.5">
                                    {customBlogs.map((b) => (
                                        <div key={b.id} className="bg-[#FAF9F5] p-3.5 rounded-2xl border border-amber-200 flex items-center justify-between gap-3">
                                            <div className="flex items-center gap-3 min-w-0">
                                                <img src={b.image} alt={b.title} className="w-12 h-12 rounded-xl object-cover shrink-0" />
                                                <div className="min-w-0">
                                                    <span className="text-[10px] font-black text-[#A46E19] uppercase">{b.category}</span>
                                                    <h4 className="font-bold text-xs sm:text-sm text-gray-900 truncate">{b.title}</h4>
                                                    <span className="text-[10px] text-gray-400">{b.publishDate}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 shrink-0">
                                                <a
                                                    href={`/#/blog/${b.id}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-amber-100 hover:bg-amber-200 text-[#8E580B] text-xs font-black px-2.5 py-1.5 rounded-xl transition"
                                                >
                                                    View
                                                </a>
                                                <button
                                                    onClick={() => {
                                                        if (window.confirm(`Delete "${b.title}"?`)) {
                                                            const filtered = customBlogs.filter(item => item.id !== b.id);
                                                            setCustomBlogs(filtered);
                                                            localStorage.setItem('shobitha_custom_blogs', JSON.stringify(filtered));
                                                        }
                                                    }}
                                                    className="text-red-500 hover:text-red-700 p-1.5 rounded-lg transition"
                                                    title="Delete Blog"
                                                >
                                                    <FaTrash size={12} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* ============================================================ */}
                {/* TAB 4: FEATURE 2 - APPOINTMENT INQUIRIES LOG                 */}
                {/* ============================================================ */}
                {activeTab === 'leads' && (
                    <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E8D9C5] shadow-xs space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                            <div>
                                <h2 className="font-serif font-black text-lg sm:text-xl text-gray-950">
                                    Client Booking Inquiries ({appointmentLeads.length})
                                </h2>
                                <p className="text-xs text-gray-500 font-medium">Submissions made from the website's booking modal</p>
                            </div>
                            {appointmentLeads.length > 0 && (
                                <button
                                    onClick={() => {
                                        if (window.confirm("Clear inquiry history?")) {
                                            setAppointmentLeads([]);
                                            localStorage.removeItem('shobitha_appointment_leads');
                                        }
                                    }}
                                    className="text-xs text-red-600 font-bold hover:underline"
                                >
                                    Clear All
                                </button>
                            )}
                        </div>

                        {appointmentLeads.length === 0 ? (
                            <div className="text-center py-10 bg-amber-50/40 rounded-2xl border border-dashed border-amber-200 p-6">
                                <FaCalendarCheck className="mx-auto text-3xl text-amber-600 mb-2 opacity-50" />
                                <p className="text-sm font-bold text-gray-700">No new client inquiries yet</p>
                                <p className="text-xs text-gray-500 mt-1">When brides book an appointment on your website, their details appear here.</p>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {appointmentLeads.map((lead) => (
                                    <div key={lead.id} className="bg-[#FAF9F5] p-4 rounded-2xl border border-amber-200 space-y-2">
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-serif font-black text-base text-gray-950">
                                                {lead.name}
                                            </h3>
                                            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full">
                                                {lead.status}
                                            </span>
                                        </div>
                                        <div className="text-xs text-gray-700 space-y-0.5 font-medium">
                                            <p>📞 Phone: <strong className="text-gray-900">{lead.phone}</strong></p>
                                            <p>✨ Service: <strong>{lead.service}</strong> ({lead.category})</p>
                                            <p>📅 Date & Time: <strong>{lead.date}</strong> at <strong>{lead.time}</strong></p>
                                            {lead.notes && <p className="italic text-gray-500 text-[11px]">"{lead.notes}"</p>}
                                        </div>
                                        <div className="flex items-center gap-2 pt-2 border-t border-gray-200">
                                            <a
                                                href={`tel:${lead.phone}`}
                                                className="btn-primary py-1.5 px-3 rounded-lg text-xs font-black flex items-center gap-1"
                                            >
                                                <FaPhoneAlt size={10} /> Call Client
                                            </a>
                                            <a
                                                href={`https://wa.me/${lead.phone.replace(/[^\d]/g, '')}?text=Hello%20${encodeURIComponent(lead.name)},%20thank%20you%20for%20contacting%20Shobitha%20Haircare%20regarding%20your%20appointment!`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-[#25D366] text-white py-1.5 px-3 rounded-lg text-xs font-black flex items-center gap-1 shadow-xs"
                                            >
                                                <FaWhatsapp size={12} /> WhatsApp
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* ============================================================ */}
                {/* TAB: MENU & PAGE VISIBILITY (SHOW / HIDE PAGES)              */}
                {/* ============================================================ */}
                {activeTab === 'pages' && (
                    <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E8D9C5] shadow-xs space-y-6">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-4 border-b border-gray-100">
                            <div>
                                <h2 className="font-serif font-black text-lg sm:text-2xl text-gray-950">
                                    Navigation Menu & Page Visibility
                                </h2>
                                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                                    Instantly show or hide pages from the desktop Navbar, mobile menu drawer, and footer.
                                </p>
                            </div>
                            <span className="text-xs font-black bg-amber-100 text-[#8E580B] px-3 py-1 rounded-full">
                                Instant Real-Time Sync
                            </span>
                        </div>

                        {/* SALON LOGO & BRANDING VISIBILITY SWITCHES */}
                        <div className="p-5 rounded-3xl bg-gradient-to-br from-[#FFF9F2] via-white to-[#FDF4EA] border-2 border-amber-300 shadow-sm space-y-4">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-amber-200/70">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#8E580B] to-[#4A0A16] text-amber-300 flex items-center justify-center text-lg shadow-xs shrink-0">
                                        ✨
                                    </div>
                                    <div>
                                        <h3 className="font-serif font-black text-base sm:text-lg text-gray-950 flex items-center gap-2">
                                            Salon Logo & Branding Controls
                                            <span className="text-[10px] font-black bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-300">
                                                Live Switches
                                            </span>
                                        </h3>
                                        <p className="text-xs text-gray-600 font-medium">
                                            Easily show or hide the calligraphy logo and photo watermarks across your website.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {/* 1. Navbar Header Logo */}
                                <div className={`p-4 rounded-2xl border-2 transition-all flex flex-col justify-between gap-3 ${
                                    brandingSettings?.showNavbarLogo !== false ? 'border-amber-300 bg-white' : 'border-gray-200 bg-gray-50 opacity-75'
                                }`}>
                                    <div>
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-[11px] font-black uppercase text-amber-900 tracking-wider">Top Header</span>
                                            <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                                                brandingSettings?.showNavbarLogo !== false ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-700'
                                            }`}>
                                                {brandingSettings?.showNavbarLogo !== false ? 'Showing' : 'Hidden'}
                                            </span>
                                        </div>
                                        <h4 className="font-serif font-bold text-sm text-gray-950">Navbar Header Logo</h4>
                                        <p className="text-[11px] text-gray-500 mt-0.5">Signature calligraphy logo in the fixed top website header</p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => toggleBranding('showNavbarLogo')}
                                        className={`w-full py-2 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition active:scale-95 shadow-xs border ${
                                            brandingSettings?.showNavbarLogo !== false
                                                ? 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-700'
                                                : 'bg-gray-700 hover:bg-gray-800 text-white border-gray-900'
                                        }`}
                                    >
                                        {brandingSettings?.showNavbarLogo !== false ? <FaCheck size={11} /> : <FaTimes size={11} />}
                                        <span>{brandingSettings?.showNavbarLogo !== false ? 'Hide Logo' : 'Show Logo'}</span>
                                    </button>
                                </div>

                                {/* 2. Photo Watermarks Logo */}
                                <div className={`p-4 rounded-2xl border-2 transition-all flex flex-col justify-between gap-3 ${
                                    Boolean(brandingSettings?.showWatermarkLogo) ? 'border-amber-300 bg-white' : 'border-gray-200 bg-gray-50 opacity-75'
                                }`}>
                                    <div>
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-[11px] font-black uppercase text-amber-900 tracking-wider">Photos & Cards</span>
                                            <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                                                Boolean(brandingSettings?.showWatermarkLogo) ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-700'
                                            }`}>
                                                {Boolean(brandingSettings?.showWatermarkLogo) ? 'Showing' : 'Hidden'}
                                            </span>
                                        </div>
                                        <h4 className="font-serif font-bold text-sm text-gray-950">Photo Watermarks</h4>
                                        <p className="text-[11px] text-gray-500 mt-0.5">Micro gold logo watermark stamped on service & gallery cards</p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => toggleBranding('showWatermarkLogo')}
                                        className={`w-full py-2 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition active:scale-95 shadow-xs border ${
                                            Boolean(brandingSettings?.showWatermarkLogo)
                                                ? 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-700'
                                                : 'bg-gray-700 hover:bg-gray-800 text-white border-gray-900'
                                        }`}
                                    >
                                        {Boolean(brandingSettings?.showWatermarkLogo) ? <FaCheck size={11} /> : <FaTimes size={11} />}
                                        <span>{Boolean(brandingSettings?.showWatermarkLogo) ? 'Hide Watermarks' : 'Show Watermarks'}</span>
                                    </button>
                                </div>

                                {/* 3. Footer Logo */}
                                <div className={`p-4 rounded-2xl border-2 transition-all flex flex-col justify-between gap-3 ${
                                    brandingSettings?.showFooterLogo !== false ? 'border-amber-300 bg-white' : 'border-gray-200 bg-gray-50 opacity-75'
                                }`}>
                                    <div>
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-[11px] font-black uppercase text-amber-900 tracking-wider">Bottom Footer</span>
                                            <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                                                brandingSettings?.showFooterLogo !== false ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-700'
                                            }`}>
                                                {brandingSettings?.showFooterLogo !== false ? 'Showing' : 'Hidden'}
                                            </span>
                                        </div>
                                        <h4 className="font-serif font-bold text-sm text-gray-950">Footer Brand Logo</h4>
                                        <p className="text-[11px] text-gray-500 mt-0.5">Large metallic gold logo placed in the bottom footer</p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => toggleBranding('showFooterLogo')}
                                        className={`w-full py-2 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition active:scale-95 shadow-xs border ${
                                            brandingSettings?.showFooterLogo !== false
                                                ? 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-700'
                                                : 'bg-gray-700 hover:bg-gray-800 text-white border-gray-900'
                                        }`}
                                    >
                                        {brandingSettings?.showFooterLogo !== false ? <FaCheck size={11} /> : <FaTimes size={11} />}
                                        <span>{brandingSettings?.showFooterLogo !== false ? 'Hide Footer Logo' : 'Show Footer Logo'}</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { key: 'store', name: 'Wedding Store & Essentials', path: '/wedding-store', desc: 'Bridal sarees, jewellery, haircare oils, and shaadi shopping hub', icon: '🛍️' },
                                { key: 'bridal', name: 'Bridal Studio & Makeovers', path: '/bridal', desc: 'Kerala bridal packages, saree draping & mehndi gallery', icon: '👰' },
                                { key: 'gallery', name: 'Real Transformations Gallery', path: '/gallery', desc: 'Haircut, keratin smoothening & facial photo portfolio', icon: '📸' },
                                { key: 'pricing', name: 'Full Price Table', path: '/pricing', desc: 'Complete 172 service rate chart & package pricing', icon: '💰' },
                                { key: 'reviews', name: 'Client Reviews & Testimonials', path: '/reviews', desc: '5-star Google & wedding customer feedback', icon: '🌟' },
                                { key: 'blog', name: 'Bridal Beauty Blog', path: '/blog', desc: 'Salon tips, post-keratin haircare guides & bridal advice', icon: '📖' },
                                { key: 'contact', name: 'Contact & Location Page', path: '/contact', desc: 'Salon address, Google Map & direct phone dialer', icon: '📞' }
                            ].map(item => {
                                const isVisible = pageVisibility[item.key] !== false;
                                return (
                                    <div 
                                        key={item.key}
                                        className={`p-4 rounded-2xl border-2 transition-all flex items-center justify-between gap-3 ${
                                            isVisible ? 'border-emerald-200 bg-emerald-50/30' : 'border-red-200 bg-red-50/30 opacity-75'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3 min-w-0">
                                            <span className="text-2xl">{item.icon}</span>
                                            <div className="min-w-0">
                                                <h3 className="font-serif font-black text-sm sm:text-base text-gray-950 truncate">
                                                    {item.name}
                                                </h3>
                                                <div className="text-[11px] font-mono text-gray-500 font-bold">{item.path}</div>
                                                <p className="text-[11px] text-gray-600 line-clamp-1 mt-0.5">{item.desc}</p>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => togglePage(item.key)}
                                            className={`px-3.5 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 shrink-0 transition active:scale-95 shadow-xs border ${
                                                isVisible 
                                                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-700' 
                                                    : 'bg-red-600 hover:bg-red-700 text-white border-red-700'
                                            }`}
                                        >
                                            {isVisible ? (
                                                <>
                                                    <FaEye size={12} />
                                                    <span>Visible</span>
                                                </>
                                            ) : (
                                                <>
                                                    <FaEyeSlash size={12} />
                                                    <span>Hidden</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* ============================================================ */}
                {/* TAB: SALON LIVE OPERATING STATUS                             */}
                {/* ============================================================ */}
                {activeTab === 'status' && (
                    <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E8D9C5] shadow-xs space-y-6">
                        <div>
                            <h2 className="font-serif font-black text-lg sm:text-2xl text-gray-950">
                                Salon Hours & Live Operating Status
                            </h2>
                            <p className="text-xs sm:text-sm text-gray-500 font-medium">
                                Controls the live availability badge displayed in the top navbar across all devices.
                            </p>
                        </div>

                        {/* 4 Status Selector Buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                            <button
                                onClick={() => setSalonState('open', 'Open Today', salonStatus.hours || '9:00 AM – 8:00 PM')}
                                className={`p-4 rounded-2xl border-2 text-center transition font-black text-sm ${
                                    salonStatus.state === 'open' ? 'border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm' : 'border-gray-200 bg-white'
                                }`}
                            >
                                <span className="text-2xl block mb-1">🟢</span>
                                <span>Open Today</span>
                                <span className="block text-[11px] text-gray-500 font-normal mt-0.5">Regular Service Hours</span>
                            </button>

                            <button
                                onClick={() => setSalonState('festival', 'Festival Hours', '8:00 AM – 10:00 PM')}
                                className={`p-4 rounded-2xl border-2 text-center transition font-black text-sm ${
                                    salonStatus.state === 'festival' ? 'border-amber-500 bg-amber-50 text-amber-900 shadow-sm' : 'border-gray-200 bg-white'
                                }`}
                            >
                                <span className="text-2xl block mb-1">🟡</span>
                                <span>Festival / Extended</span>
                                <span className="block text-[11px] text-gray-500 font-normal mt-0.5">8:00 AM – 10:00 PM</span>
                            </button>

                            <button
                                onClick={() => setSalonState('booked', 'Fully Booked', salonStatus.hours, 'Walk-ins on waitlist')}
                                className={`p-4 rounded-2xl border-2 text-center transition font-black text-sm ${
                                    salonStatus.state === 'booked' ? 'border-purple-500 bg-purple-50 text-purple-900 shadow-sm' : 'border-gray-200 bg-white'
                                }`}
                            >
                                <span className="text-2xl block mb-1">🟣</span>
                                <span>Fully Booked</span>
                                <span className="block text-[11px] text-gray-500 font-normal mt-0.5">Appointments Full Today</span>
                            </button>

                            <button
                                onClick={() => setSalonState('closed', 'Closed Today', '', 'Weekly off or holiday')}
                                className={`p-4 rounded-2xl border-2 text-center transition font-black text-sm ${
                                    salonStatus.state === 'closed' ? 'border-red-500 bg-red-50 text-red-900 shadow-sm' : 'border-gray-200 bg-white'
                                }`}
                            >
                                <span className="text-2xl block mb-1">🔴</span>
                                <span>Closed Today</span>
                                <span className="block text-[11px] text-gray-500 font-normal mt-0.5">Weekly Holiday</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-black text-gray-700 uppercase mb-1">
                                    Status Badge Label
                                </label>
                                <input
                                    type="text"
                                    value={salonStatus.stateLabel || ''}
                                    onChange={(e) => updateSettings(prev => ({
                                        ...prev,
                                        salonStatus: { ...prev.salonStatus, stateLabel: e.target.value }
                                    }))}
                                    className="w-full bg-[#FAF9F5] border border-gray-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold text-gray-900 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-black text-gray-700 uppercase mb-1">
                                    Working Hours
                                </label>
                                <input
                                    type="text"
                                    value={salonStatus.hours || ''}
                                    onChange={(e) => updateSettings(prev => ({
                                        ...prev,
                                        salonStatus: { ...prev.salonStatus, hours: e.target.value }
                                    }))}
                                    placeholder="e.g. 9:00 AM – 8:00 PM"
                                    className="w-full bg-[#FAF9F5] border border-gray-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold text-gray-900 outline-none"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-3 pt-2">
                            <button
                                onClick={() => updateSettings(prev => ({
                                    ...prev,
                                    salonStatus: { ...prev.salonStatus, showStatusPill: !prev.salonStatus.showStatusPill }
                                }))}
                                className={`px-4 py-2 rounded-xl text-xs font-black border transition ${
                                    salonStatus.showStatusPill !== false ? 'bg-emerald-100 text-emerald-900 border-emerald-300' : 'bg-gray-100 text-gray-600'
                                }`}
                            >
                                {salonStatus.showStatusPill !== false ? '✓ Status Pill Visible in Navbar' : '✕ Status Pill Hidden'}
                            </button>
                        </div>
                    </div>
                )}

                {/* ============================================================ */}
                {/* TAB: HOME PAGE SECTIONS TOGGLES                              */}
                {/* ============================================================ */}
                {activeTab === 'sections' && (
                    <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E8D9C5] shadow-xs space-y-6">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-4 border-b border-gray-100">
                            <div>
                                <h2 className="font-serif font-black text-lg sm:text-2xl text-gray-950">
                                    Home Page Interactive Section Switches
                                </h2>
                                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                                    Turn specific interactive features On or Off on the Home Page.
                                </p>
                            </div>
                        </div>

                        {/* SALON LOGO & BRANDING VISIBILITY SWITCHES */}
                        <div className="p-5 rounded-3xl bg-gradient-to-br from-[#FFF9F2] via-white to-[#FDF4EA] border-2 border-amber-300 shadow-sm space-y-4">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-amber-200/70">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#8E580B] to-[#4A0A16] text-amber-300 flex items-center justify-center text-lg shadow-xs shrink-0">
                                        ✨
                                    </div>
                                    <div>
                                        <h3 className="font-serif font-black text-base sm:text-lg text-gray-950 flex items-center gap-2">
                                            Salon Logo & Branding Controls
                                            <span className="text-[10px] font-black bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-300">
                                                Live Switches
                                            </span>
                                        </h3>
                                        <p className="text-xs text-gray-600 font-medium">
                                            Easily show or hide the calligraphy logo and photo watermarks across your website.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {/* 1. Navbar Header Logo */}
                                <div className={`p-4 rounded-2xl border-2 transition-all flex flex-col justify-between gap-3 ${
                                    brandingSettings?.showNavbarLogo !== false ? 'border-amber-300 bg-white' : 'border-gray-200 bg-gray-50 opacity-75'
                                }`}>
                                    <div>
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-[11px] font-black uppercase text-amber-900 tracking-wider">Top Header</span>
                                            <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                                                brandingSettings?.showNavbarLogo !== false ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-700'
                                            }`}>
                                                {brandingSettings?.showNavbarLogo !== false ? 'Showing' : 'Hidden'}
                                            </span>
                                        </div>
                                        <h4 className="font-serif font-bold text-sm text-gray-950">Navbar Header Logo</h4>
                                        <p className="text-[11px] text-gray-500 mt-0.5">Signature calligraphy logo in the fixed top website header</p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => toggleBranding('showNavbarLogo')}
                                        className={`w-full py-2 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition active:scale-95 shadow-xs border ${
                                            brandingSettings?.showNavbarLogo !== false
                                                ? 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-700'
                                                : 'bg-gray-700 hover:bg-gray-800 text-white border-gray-900'
                                        }`}
                                    >
                                        {brandingSettings?.showNavbarLogo !== false ? <FaCheck size={11} /> : <FaTimes size={11} />}
                                        <span>{brandingSettings?.showNavbarLogo !== false ? 'Hide Logo' : 'Show Logo'}</span>
                                    </button>
                                </div>

                                {/* 2. Photo Watermarks Logo */}
                                <div className={`p-4 rounded-2xl border-2 transition-all flex flex-col justify-between gap-3 ${
                                    Boolean(brandingSettings?.showWatermarkLogo) ? 'border-amber-300 bg-white' : 'border-gray-200 bg-gray-50 opacity-75'
                                }`}>
                                    <div>
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-[11px] font-black uppercase text-amber-900 tracking-wider">Photos & Cards</span>
                                            <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                                                Boolean(brandingSettings?.showWatermarkLogo) ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-700'
                                            }`}>
                                                {Boolean(brandingSettings?.showWatermarkLogo) ? 'Showing' : 'Hidden'}
                                            </span>
                                        </div>
                                        <h4 className="font-serif font-bold text-sm text-gray-950">Photo Watermarks</h4>
                                        <p className="text-[11px] text-gray-500 mt-0.5">Micro gold logo watermark stamped on service & gallery cards</p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => toggleBranding('showWatermarkLogo')}
                                        className={`w-full py-2 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition active:scale-95 shadow-xs border ${
                                            Boolean(brandingSettings?.showWatermarkLogo)
                                                ? 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-700'
                                                : 'bg-gray-700 hover:bg-gray-800 text-white border-gray-900'
                                        }`}
                                    >
                                        {Boolean(brandingSettings?.showWatermarkLogo) ? <FaCheck size={11} /> : <FaTimes size={11} />}
                                        <span>{Boolean(brandingSettings?.showWatermarkLogo) ? 'Hide Watermarks' : 'Show Watermarks'}</span>
                                    </button>
                                </div>

                                {/* 3. Footer Logo */}
                                <div className={`p-4 rounded-2xl border-2 transition-all flex flex-col justify-between gap-3 ${
                                    brandingSettings?.showFooterLogo !== false ? 'border-amber-300 bg-white' : 'border-gray-200 bg-gray-50 opacity-75'
                                }`}>
                                    <div>
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-[11px] font-black uppercase text-amber-900 tracking-wider">Bottom Footer</span>
                                            <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                                                brandingSettings?.showFooterLogo !== false ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-700'
                                            }`}>
                                                {brandingSettings?.showFooterLogo !== false ? 'Showing' : 'Hidden'}
                                            </span>
                                        </div>
                                        <h4 className="font-serif font-bold text-sm text-gray-950">Footer Brand Logo</h4>
                                        <p className="text-[11px] text-gray-500 mt-0.5">Large metallic gold logo placed in the bottom footer</p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => toggleBranding('showFooterLogo')}
                                        className={`w-full py-2 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition active:scale-95 shadow-xs border ${
                                            brandingSettings?.showFooterLogo !== false
                                                ? 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-700'
                                                : 'bg-gray-700 hover:bg-gray-800 text-white border-gray-900'
                                        }`}
                                    >
                                        {brandingSettings?.showFooterLogo !== false ? <FaCheck size={11} /> : <FaTimes size={11} />}
                                        <span>{brandingSettings?.showFooterLogo !== false ? 'Hide Footer Logo' : 'Show Footer Logo'}</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { key: 'beforeAfterSlider', name: 'Before & After Transformation Slider', desc: 'Interactive split image comparison slider for Keratin Smoothening', icon: '↔️' },
                                { key: 'priceEstimator', name: 'Instant Multi-Service Price Estimator', desc: 'Package calculator allowing clients to total up multiple services', icon: '🧮' },
                                { key: 'faqSection', name: 'Frequently Asked Questions (FAQ)', desc: 'Accordion answering hair smoothening, bridal booking, and advance slots', icon: '❓' },
                                { key: 'instaFeed', name: 'Instagram Social Media Feed Strip', desc: 'Salon social proof gallery showcasing real client transformations', icon: '📸' },
                                { key: 'statsStrip', name: 'Trust Stats Strip (10+ Years / 500+ Brides)', desc: 'Highlighting salon experience, satisfied brides, and certified experts', icon: '🏅' }
                            ].map(sec => {
                                const isEnabled = homeSections[sec.key] !== false;
                                return (
                                    <div 
                                        key={sec.key}
                                        className={`p-4 rounded-2xl border-2 transition-all flex items-center justify-between gap-3 ${
                                            isEnabled ? 'border-emerald-200 bg-emerald-50/30' : 'border-gray-200 bg-gray-50 opacity-70'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3 min-w-0">
                                            <span className="text-2xl">{sec.icon}</span>
                                            <div className="min-w-0">
                                                <h3 className="font-serif font-black text-sm sm:text-base text-gray-950 truncate">
                                                    {sec.name}
                                                </h3>
                                                <p className="text-xs text-gray-600 line-clamp-2 mt-0.5">{sec.desc}</p>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => toggleHomeSection(sec.key)}
                                            className={`px-3.5 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 shrink-0 transition active:scale-95 shadow-xs border ${
                                                isEnabled 
                                                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-700' 
                                                    : 'bg-gray-400 hover:bg-gray-500 text-white border-gray-500'
                                            }`}
                                        >
                                            {isEnabled ? <FaCheck size={11} /> : <FaTimes size={11} />}
                                            <span>{isEnabled ? 'Enabled' : 'Disabled'}</span>
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* ============================================================ */}
                {/* TAB: STORE & AFFILIATE PRODUCTS MANAGER                      */}
                {/* ============================================================ */}
                {activeTab === 'store_mgr' && (
                    <div className="space-y-6">
                        {/* Add New Product Card */}
                        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E8D9C5] shadow-xs">
                            <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
                                <div>
                                    <h2 className="font-serif font-black text-lg sm:text-xl text-gray-950">
                                        Add New Item (Salon Exclusive or Affiliate Link)
                                    </h2>
                                    <p className="text-xs text-gray-500 font-medium">
                                        Add clothing, sarees, jewellery or styling tools from Amazon, Flipkart, Myntra, or your own studio.
                                    </p>
                                </div>
                            </div>

                            {productAddedSuccess && (
                                <div className="mb-4 p-3 bg-emerald-100 text-emerald-800 rounded-xl text-xs font-black flex items-center gap-2">
                                    <FaCheck /> Item added to store successfully!
                                </div>
                            )}

                            <form onSubmit={handleAddNewProduct} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                    <div>
                                        <label className="block text-xs font-black text-gray-700 uppercase mb-1">
                                            Product Name *
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Kalki Velvet Bridal Lehenga / Philips Salon Hair Dryer"
                                            value={newProduct.name}
                                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                            className="w-full bg-[#FAF9F5] border border-gray-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-medium outline-none focus:ring-2 focus:ring-amber-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-black text-gray-700 uppercase mb-1">
                                            Brand / Designer Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g. FabIndia / BIBA / Philips / Shobitha Signature"
                                            value={newProduct.brand}
                                            onChange={(e) => setNewProduct({ ...newProduct, brand: e.target.value })}
                                            className="w-full bg-[#FAF9F5] border border-gray-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-medium outline-none focus:ring-2 focus:ring-amber-500"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                                    <div>
                                        <label className="block text-xs font-black text-gray-700 uppercase mb-1">
                                            Platform Source
                                        </label>
                                        <select
                                            value={newProduct.platform}
                                            onChange={(e) => setNewProduct({ ...newProduct, platform: e.target.value })}
                                            className="w-full bg-[#FAF9F5] border border-gray-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-bold text-gray-900 outline-none"
                                        >
                                            <option value="salon">🛍️ Salon Exclusive (WhatsApp Cart)</option>
                                            <option value="amazon">📦 Amazon Affiliate</option>
                                            <option value="flipkart">⚡ Flipkart Affiliate</option>
                                            <option value="myntra">👗 Myntra Affiliate</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-black text-gray-700 uppercase mb-1">
                                            Category
                                        </label>
                                        <select
                                            value={newProduct.category}
                                            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                                            className="w-full bg-[#FAF9F5] border border-gray-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-bold text-gray-900 outline-none"
                                        >
                                            <option value="sarees">Bridal Sarees & Silks</option>
                                            <option value="clothing">Lehengas & Ethnic Wear</option>
                                            <option value="jewellery">Jewellery & Solah Shringar</option>
                                            <option value="haircare">Salon Haircare & Growth Oils</option>
                                            <option value="styling_tools">Hair Dryers & Styling Tools</option>
                                            <option value="skincare">Skincare & Glow Kits</option>
                                            <option value="puja_gifts">Puja Samagri & Shagun Hampers</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-black text-gray-700 uppercase mb-1">
                                            Badge / Tag
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g. 50% OFF / Amazon Choice / Bestseller"
                                            value={newProduct.badge}
                                            onChange={(e) => setNewProduct({ ...newProduct, badge: e.target.value })}
                                            className="w-full bg-[#FAF9F5] border border-gray-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-medium outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                    <div>
                                        <label className="block text-xs font-black text-gray-700 uppercase mb-1">
                                            Selling Price *
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g. ₹2,499"
                                            value={newProduct.price}
                                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                                            className="w-full bg-[#FAF9F5] border border-gray-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-bold text-gray-900 outline-none"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-black text-gray-700 uppercase mb-1">
                                            Original Price (MRP for strikethrough)
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g. ₹4,999"
                                            value={newProduct.originalPrice}
                                            onChange={(e) => setNewProduct({ ...newProduct, originalPrice: e.target.value })}
                                            className="w-full bg-[#FAF9F5] border border-gray-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-medium outline-none"
                                        />
                                    </div>
                                </div>

                                {newProduct.platform !== 'salon' && (
                                    <div>
                                        <label className="block text-xs font-black text-gray-700 uppercase mb-1">
                                            Affiliate Link URL * (Amazon / Flipkart / Myntra Link)
                                        </label>
                                        <input
                                            type="url"
                                            placeholder="e.g. https://amzn.to/3xyz or https://dl.flipkart.com/..."
                                            value={newProduct.affiliateUrl}
                                            onChange={(e) => setNewProduct({ ...newProduct, affiliateUrl: e.target.value })}
                                            className="w-full bg-[#FAF9F5] border border-gray-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-mono outline-none"
                                        />
                                    </div>
                                )}

                                <div>
                                    <label className="block text-xs font-black text-gray-700 uppercase mb-1">
                                        Product Image URL (Paste link from Flipkart/Amazon or leave empty for default)
                                    </label>
                                    <input
                                        type="url"
                                        placeholder="https://images-na.ssl-images-amazon.com/..."
                                        value={newProduct.image}
                                        onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                                        className="w-full bg-[#FAF9F5] border border-gray-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-mono outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-black text-gray-700 uppercase mb-1">
                                        Short Description / Fabric Details
                                    </label>
                                    <textarea
                                        rows={2}
                                        placeholder="Fabric, styling recommendations, wash care, etc."
                                        value={newProduct.shortDesc}
                                        onChange={(e) => setNewProduct({ ...newProduct, shortDesc: e.target.value })}
                                        className="w-full bg-[#FAF9F5] border border-gray-200 rounded-xl p-3 text-xs sm:text-sm font-medium outline-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn-primary py-3 px-6 rounded-2xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 active:scale-95 transition"
                                >
                                    <FaPlus size={12} /> Add Product to Store
                                </button>
                            </form>
                        </div>

                        {/* Existing Store Products List */}
                        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E8D9C5] shadow-xs">
                            <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
                                <div>
                                    <h2 className="font-serif font-black text-lg sm:text-xl text-gray-950">
                                        Store Catalog ({storeProductsList.length} items)
                                    </h2>
                                    <p className="text-xs text-gray-500 font-medium">Toggle stock availability or hide items from customers</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {storeProductsList.map((item, idx) => (
                                    <div
                                        key={item.id}
                                        className={`p-3.5 sm:p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                                            item.hidden ? 'bg-red-50/40 border-red-200 opacity-70' : 'bg-[#FAF9F5] border-gray-200'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3 min-w-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-12 h-12 rounded-xl object-cover bg-gray-200 shrink-0 border"
                                            />
                                            <div className="min-w-0">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-white border text-gray-700">
                                                        {item.platform || 'salon'}
                                                    </span>
                                                    <h4 className="font-serif font-black text-xs sm:text-sm text-gray-950 truncate">
                                                        {item.name}
                                                    </h4>
                                                </div>
                                                <div className="flex items-center gap-2 mt-1 text-xs">
                                                    <span className="font-black text-[#4A0A16]">{item.price}</span>
                                                    {item.originalPrice && (
                                                        <span className="text-gray-400 line-through text-[11px]">{item.originalPrice}</span>
                                                    )}
                                                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                                                        item.inStock ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                                                    }`}>
                                                        {item.inStock ? 'In Stock' : 'Out of Stock'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                                            <button
                                                onClick={() => handleToggleProductStock(item.id)}
                                                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition ${
                                                    item.inStock ? 'bg-white text-gray-700 border-gray-300' : 'bg-emerald-50 text-emerald-800 border-emerald-300'
                                                }`}
                                            >
                                                {item.inStock ? 'Mark Out of Stock' : 'Mark In Stock'}
                                            </button>

                                            <button
                                                onClick={() => handleToggleProductHide(item.id)}
                                                className={`p-2 rounded-xl text-xs font-bold border transition ${
                                                    item.hidden ? 'bg-red-100 text-red-700 border-red-300' : 'bg-white text-gray-600 border-gray-300'
                                                }`}
                                                title={item.hidden ? "Show on Store" : "Hide from Store"}
                                            >
                                                {item.hidden ? <FaEyeSlash size={13} /> : <FaEye size={13} />}
                                            </button>

                                            <button
                                                onClick={() => handleDeleteProduct(item.id)}
                                                className="p-2 rounded-xl text-xs text-red-600 hover:bg-red-50 border border-transparent hover:border-red-200 transition"
                                                title="Delete item"
                                            >
                                                <FaTrash size={12} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* ============================================================ */}
                {/* TAB 6: FEATURE 4 - WHATSAPP SERVICE QUOTE MAKER              */}
                {/* ============================================================ */}
                {activeTab === 'quote' && (
                    <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E8D9C5] shadow-xs space-y-4">
                        <div>
                            <h2 className="font-serif font-black text-lg sm:text-xl text-gray-950">
                                WhatsApp Price Quote Maker
                            </h2>
                            <p className="text-xs text-gray-500 font-medium">Select services to send a customized package quote to a customer</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                placeholder="Client's Name (e.g. Anjali Nair)..."
                                value={clientName}
                                onChange={(e) => setClientName(e.target.value)}
                                className="flex-1 bg-[#FAF9F5] border-2 border-gray-200 rounded-2xl px-4 py-2.5 text-sm font-bold text-gray-900 outline-none"
                            />
                            {selectedQuoteItems.length > 0 && (
                                <button
                                    onClick={() => setQuoteServices({})}
                                    className="text-xs text-red-600 font-bold px-2 hover:underline"
                                >
                                    Reset
                                </button>
                            )}
                        </div>

                        {/* Selected summary */}
                        <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200 flex items-center justify-between">
                            <div>
                                <span className="text-xs text-gray-600 font-bold block">
                                    {selectedQuoteItems.length} Services Selected:
                                </span>
                                <span className="text-xl sm:text-2xl font-black text-[#A46E19]">
                                    Total: ₹{quoteTotal.toLocaleString('en-IN')}
                                </span>
                            </div>
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(getQuoteText());
                                    setQuoteCopied(true);
                                    setTimeout(() => setQuoteCopied(false), 2500);
                                }}
                                disabled={selectedQuoteItems.length === 0}
                                className="btn-primary py-2.5 px-4 rounded-xl text-xs font-black shadow-sm flex items-center gap-1.5 disabled:opacity-40"
                            >
                                <FaCopy size={11} />
                                <span>{quoteCopied ? 'Copied!' : 'Copy Quote Text'}</span>
                            </button>
                        </div>

                        {/* Service Picker Checklist */}
                        <div className="max-h-72 overflow-y-auto space-y-1.5 pr-1 border-t border-gray-100 pt-2">
                            {serviceList.slice(0, 35).map((s) => (
                                <label
                                    key={s.id}
                                    className={`flex items-center justify-between p-2.5 rounded-xl border text-xs font-bold cursor-pointer transition ${
                                        quoteServices[s.id]
                                            ? 'bg-amber-100/70 border-amber-400 text-gray-950'
                                            : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                                    }`}
                                >
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={!!quoteServices[s.id]}
                                            onChange={() => handleToggleQuoteService(s.id)}
                                            className="w-4 h-4 text-amber-600 rounded"
                                        />
                                        <span>{s.name}</span>
                                    </div>
                                    <span className="font-black text-[#A46E19]">{s.price}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                )}

                {/* ============================================================ */}
                {/* TAB 7: FEATURE 5 - FEATURED CLIENT REVIEWS PICKER            */}
                {/* ============================================================ */}
                {activeTab === 'reviews' && (
                    <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E8D9C5] shadow-xs space-y-4">
                        <div>
                            <h2 className="font-serif font-black text-lg sm:text-xl text-gray-950">
                                Featured Reviews on Home Page
                            </h2>
                            <p className="text-xs text-gray-500 font-medium">Select which client testimonials appear on the Home page</p>
                        </div>

                        <div className="space-y-3">
                            {reviewList.map((r) => (
                                <div
                                    key={r.id}
                                    className={`p-4 rounded-2xl border-2 flex items-start justify-between gap-3 transition ${
                                        r.featured ? 'border-amber-400 bg-amber-50/40' : 'border-gray-200 bg-white'
                                    }`}
                                >
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <h4 className="font-serif font-black text-sm text-gray-950">{r.name}</h4>
                                            <span className="text-[10px] text-gray-400 font-medium">({r.date})</span>
                                        </div>
                                        <p className="text-xs text-gray-600 italic mt-1 font-medium leading-relaxed">
                                            "{r.text}"
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => handleToggleFeaturedReview(r.id)}
                                        className={`px-3 py-1.5 rounded-xl text-xs font-black shrink-0 transition ${
                                            r.featured ? 'bg-amber-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                    >
                                        {r.featured ? '★ Featured' : '☆ Feature'}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ============================================================ */}
                {/* TAB 8: GOOGLE SHEETS LIVE SYNC & CLOUD DATABASE              */}
                {/* ============================================================ */}
                {activeTab === 'sheet' && (
                    <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E8D9C5] shadow-xs space-y-5">
                        
                        {/* 1. CLOUDINARY ULTRA-FAST CDN (OPTION 2 PREFERRED) */}
                        <div className="p-5 rounded-3xl bg-gradient-to-br from-[#F0F7FF] via-white to-[#F6F4FF] border border-[#CCDFF8] space-y-4 shadow-xs">
                            <div className="flex items-center justify-between flex-wrap gap-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center text-xl shadow-xs shrink-0">
                                        ⚡
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-serif font-black text-base sm:text-lg text-gray-950">
                                                Cloudinary Image CDN (Ultra Fast & 25GB Free)
                                            </h3>
                                            <span className="bg-blue-100 text-blue-800 text-[10px] font-black px-2 py-0.5 rounded-full">
                                                Preferred Option 2
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-500 font-medium">
                                            Direct high-speed image uploads from mobile or PC. Instant worldwide CDN delivery.
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href="https://cloudinary.com/users/register_free"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-black text-blue-600 hover:text-blue-800 underline flex items-center gap-1"
                                >
                                    Get Free Cloudinary Account <FaExternalLinkAlt size={10} />
                                </a>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                                <div>
                                    <label className="block text-[11px] font-black text-gray-700 uppercase tracking-wider mb-1">
                                        Cloud Name:
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g. shobitha-salon"
                                        value={cloudinaryConfig.cloudName}
                                        onChange={(e) => setCloudinaryConfig({ ...cloudinaryConfig, cloudName: e.target.value })}
                                        className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2 text-xs font-mono text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-black text-gray-700 uppercase tracking-wider mb-1">
                                        Upload Preset (Unsigned):
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g. shobitha_preset"
                                        value={cloudinaryConfig.uploadPreset}
                                        onChange={(e) => setCloudinaryConfig({ ...cloudinaryConfig, uploadPreset: e.target.value })}
                                        className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2 text-xs font-mono text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between flex-wrap gap-2 pt-2 border-t border-blue-100">
                                <div className="text-[11px] text-gray-600 font-medium max-w-md">
                                    💡 <strong>1-Minute Setup</strong>: In Cloudinary Dashboard → Settings → Upload → Add Upload Preset → set Signing mode to <strong>Unsigned</strong>, copy its name here, and click Save!
                                </div>
                                <button
                                    type="button"
                                    onClick={() => {
                                        saveCloudinaryConfig(cloudinaryConfig.cloudName, cloudinaryConfig.uploadPreset);
                                        setCloudinarySavedMsg(true);
                                        setTimeout(() => setCloudinarySavedMsg(false), 3000);
                                    }}
                                    className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black transition active:scale-95 shadow-xs flex items-center gap-1.5"
                                >
                                    <FaCheck size={11} />
                                    <span>{cloudinarySavedMsg ? '✓ Saved CDN Config!' : 'Save CDN Settings'}</span>
                                </button>
                            </div>
                        </div>

                        {/* 2. GOOGLE SHEETS LIVE SYNC & GOOGLE DRIVE FALLBACK */}
                        <div className="flex items-center gap-3 pt-2">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-2xl shadow-md shrink-0">
                                <FaTable />
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h2 className="font-serif font-black text-lg sm:text-xl text-gray-950">
                                        Google Sheets Live Sync & Drive Cloud (Fallback Option 1)
                                    </h2>
                                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                        Worldwide Live Active
                                    </span>
                                </div>
                                <p className="text-xs text-gray-500 font-medium">
                                    Cloud database connected • Live automatic sync for all visitors worldwide
                                </p>
                            </div>
                        </div>

                        {/* Live Sync Status Info Banner */}
                        <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950 leading-relaxed">
                            <strong className="text-emerald-900 block mb-1 flex items-center gap-1.5">
                                <span>🌐</span> How Live Sync Works on All Mobiles Worldwide:
                            </strong>
                            When any customer anywhere in the world opens the website on their mobile or PC, the website automatically connects to your Google Sheet in the background. Whenever you click <strong>"Push to Google Sheet"</strong> below (or edit cells directly in Google Drive), the new prices and festive banners immediately reflect across all devices globally!
                        </div>

                        <div>
                            <label className="block text-xs font-black text-gray-700 uppercase mb-1.5">
                                Your Connected Webhook URL:
                            </label>
                            <input
                                type="url"
                                value={sheetWebhookUrl}
                                onChange={(e) => {
                                    setSheetWebhookUrl(e.target.value);
                                    localStorage.setItem('shobitha_sheet_webhook', e.target.value);
                                }}
                                className="w-full bg-[#FAF9F5] border-2 border-gray-200 rounded-2xl px-4 py-3 text-xs font-mono text-gray-900 outline-none"
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2.5">
                            <button
                                onClick={handlePushToGoogleSheet}
                                disabled={syncStatus === 'syncing' || syncStatus === 'pulling'}
                                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-black py-3 px-5 rounded-2xl text-sm shadow-md flex items-center justify-center gap-2 active:scale-95 transition"
                            >
                                {syncStatus === 'syncing' ? 'Pushing...' : '🚀 Push to Google Sheet'}
                            </button>
                            <button
                                onClick={handlePullFromGoogleSheet}
                                disabled={syncStatus === 'syncing' || syncStatus === 'pulling'}
                                className="flex-1 bg-[#2A180E] hover:bg-black text-white font-black py-3 px-5 rounded-2xl text-sm shadow-md flex items-center justify-center gap-2 active:scale-95 transition"
                            >
                                {syncStatus === 'pulling' ? 'Pulling...' : '📥 Pull from Google Sheet'}
                            </button>
                        </div>

                        {syncStatus === 'success' && (
                            <p className="text-emerald-700 font-black text-xs sm:text-sm flex items-center gap-1.5 bg-emerald-50 p-3 rounded-xl border border-emerald-300">
                                <FaCheck size={14} className="text-emerald-600" />
                                <span>Successfully synced everything (prices, uploaded images, offers & timings) to Google Sheet! Live across all mobile phones and PCs worldwide.</span>
                            </p>
                        )}
                        {syncStatus === 'pull_success' && (
                            <p className="text-emerald-700 font-black text-xs sm:text-sm flex items-center gap-1.5 bg-emerald-50 p-3 rounded-xl border border-emerald-300">
                                <FaCheck size={14} className="text-emerald-600" />
                                <span>Pulled fresh prices, image URLs & offers from Google Sheet!</span>
                            </p>
                        )}

                        {/* Apps Script Code Modal / Copy Section */}
                        <div className="pt-4 border-t border-gray-100">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-black uppercase text-gray-700">
                                    Google Apps Script Backend Code (Copy & Paste):
                                </span>
                                <button
                                    type="button"
                                    onClick={() => {
                                        navigator.clipboard.writeText(googleAppsScriptCode);
                                        alert("✓ Copied updated Google Apps Script code to clipboard! In Google Sheets, open Extensions -> Apps Script, replace the code, and click Deploy -> Manage Deployments -> New Version.");
                                    }}
                                    className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-black flex items-center gap-1 shadow-xs transition active:scale-95"
                                >
                                    <FaCopy size={11} />
                                    <span>Copy Apps Script Code</span>
                                </button>
                            </div>
                            <pre className="p-3.5 rounded-2xl bg-[#1E1E1E] text-amber-200 text-[11px] font-mono overflow-x-auto max-h-48 border border-gray-800 leading-relaxed">
                                {googleAppsScriptCode}
                            </pre>
                            <p className="text-[11px] text-gray-500 mt-2 font-medium">
                                💡 <strong>How to paste:</strong> In your Google Spreadsheet, click <strong>Extensions ➔ Apps Script</strong>, paste this code, then click <strong>Deploy ➔ Manage Deployments ➔ Edit ➔ New version ➔ Deploy</strong>.
                            </p>
                        </div>
                    </div>
                )}

                {/* ============================================================ */}
                {/* TAB 9: TELEGRAM OR WHATSAPP BOT AGENT                       */}
                {/* ============================================================ */}
                {activeTab === 'bot' && (
                    <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E8D9C5] shadow-xs space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center text-2xl shadow-md shrink-0">
                                <FaRobot />
                            </div>
                            <div>
                                <h2 className="font-serif font-black text-lg sm:text-xl text-gray-950">
                                    Telegram Bot Controller
                                </h2>
                                <p className="text-xs text-gray-500 font-medium">Control prices by sending a message on Telegram</p>
                            </div>
                        </div>

                        <div className="bg-sky-50 p-4 rounded-2xl border border-sky-200 text-xs text-gray-800 space-y-1.5 font-medium">
                            <p><strong>Example Messages:</strong></p>
                            <p className="font-mono text-emerald-800 font-bold">&gt; price Basic Haircut 200 with 10% off</p>
                            <p className="font-mono text-emerald-800 font-bold">&gt; banner Special Muhurtham Offer: 20% off</p>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default PriceManager;
