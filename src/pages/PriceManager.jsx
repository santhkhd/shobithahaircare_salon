import React, { useState, useEffect } from 'react';
import { services, categories } from '../data/services';
import { specialOffers, defaultOffers } from '../data/offers';
import { reviews } from '../data/reviews';
import { blogPosts, blogCategories } from '../data/blogs';
import { initialStoreProducts, storeCategories } from '../data/storeProducts';
import { serviceImagePrompts } from '../data/serviceImagePrompts';
import { useSiteSettings } from '../context/SiteSettingsContext';
import Logo from '../components/Logo';
import { 
    FaTag, FaCheck, FaCopy, FaDownload, FaSyncAlt, FaArrowRight, 
    FaWhatsapp, FaShieldAlt, FaMobileAlt, FaImage, FaSearch, 
    FaTimes, FaExternalLinkAlt, FaCloudUploadAlt, FaEdit, 
    FaPlus, FaMinus, FaEye, FaEyeSlash, FaRobot, FaTable, FaLock, FaKey,
    FaBook, FaCalendarCheck, FaClock, FaStore, FaPhoneAlt, FaStar,
    FaTrash, FaShareSquare, FaCalculator, FaShoppingBag, FaThLarge, FaGlobe,
    FaCamera, FaMagic, FaFolderOpen, FaPalette
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

const PriceManager = () => {
    // Active Admin Tab: 'prices' | 'offers' | 'blogs' | 'leads' | 'status' | 'quote' | 'reviews' | 'sheet' | 'bot'
    const [activeTab, setActiveTab] = useState('prices');

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

    // Site Settings Context Integration (Navigation, Status, Home Sections, Affiliates)
    const { 
        pageVisibility, togglePage, 
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
    const [customServiceImages, setCustomServiceImages] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('shobitha_custom_service_images') || '{}');
        } catch (e) {
            return {};
        }
    });

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
                    let dataUrl;
                    try {
                        dataUrl = canvas.toDataURL('image/webp', quality);
                        if (!dataUrl || !dataUrl.startsWith('data:image/webp')) {
                            dataUrl = canvas.toDataURL('image/jpeg', quality);
                        }
                    } catch (e) {
                        dataUrl = canvas.toDataURL('image/jpeg', quality);
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

        const updated = { ...customServiceImages, [serviceId]: finalUrl };
        setCustomServiceImages(updated);
        try {
            localStorage.setItem('shobitha_custom_service_images', JSON.stringify(updated));
            window.dispatchEvent(new Event('service_images_updated'));
            if (showAlert) {
                alert(`✓ Saved image for ${serviceId}! Live preview updated across website.`);
            }
        } catch (e) {
            console.error(e);
            alert('Could not save to browser storage. If uploading large files, please use the Upload & Auto-Resize button.');
        }
    };

    const handleFileUpload = async (serviceId, file, targetFileName) => {
        if (!file) return;
        if (!file.type.startsWith('image/')) {
            alert('Please select a valid image file (JPG, PNG, WebP, AVIF).');
            return;
        }

        setIsProcessingUpload(prev => ({ ...prev, [serviceId]: true }));

        try {
            // Pick target dimensions according to selected mode
            let targetW = 800;
            let targetH = 1000;
            if (resizeQualityMode === '1000x1250') {
                targetW = 1000;
                targetH = 1250;
            } else if (resizeQualityMode === '600x750') {
                targetW = 600;
                targetH = 750;
            }

            // Automatically resize and optimize (even 20MB files shrink to ~60KB)
            const result = await resizeAndOptimizeImage(file, targetW, targetH, 0.82);

            // Save optimized image without interruptive alert
            handleSaveServiceImage(serviceId, result.dataUrl, false);

            setUploadStats(prev => ({
                ...prev,
                [serviceId]: {
                    originalDisplay: result.originalDisplay,
                    newDisplay: result.newDisplay,
                    reduction: result.reduction,
                    dimensions: `${result.width}×${result.height}`,
                    fileName: targetFileName || file.name,
                    timestamp: Date.now()
                }
            }));
        } catch (err) {
            console.error('Resize failed:', err);
            alert('Failed to process and resize image. Please try another image.');
        } finally {
            setIsProcessingUpload(prev => ({ ...prev, [serviceId]: false }));
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
        const updated = { ...customServiceImages };
        delete updated[serviceId];
        setCustomServiceImages(updated);
        try {
            localStorage.setItem('shobitha_custom_service_images', JSON.stringify(updated));
            window.dispatchEvent(new Event('service_images_updated'));
            alert(`Reset ${serviceId} to default image.`);
        } catch (e) {}
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

        // Load custom saved services from localStorage if present
        try {
            const saved = localStorage.getItem('shobitha_custom_services');
            if (saved) {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    const map = new Map(parsed.map(item => [item.id, item]));
                    const merged = services.map(s => {
                        const custom = map.get(s.id);
                        return custom ? { ...s, ...custom } : s;
                    });
                    setServiceList(merged);
                    return;
                }
            }
        } catch (e) {}

        setServiceList(services);
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
        const updated = serviceList.map(s => s.id === id ? { ...s, offerPrice: offerVal } : s);
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

    // Save all changes to local storage (immediately reflects across live website on this device)
    const handleSaveToWebsite = () => {
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
        } catch (err) {
            alert('Failed to save to local storage: ' + err.message);
        }
    };

    // Push Live to Google Sheet Webhook
    const handlePushToGoogleSheet = async () => {
        if (!sheetWebhookUrl) {
            alert("Please paste your Google Sheet Webhook URL in the 'Google Sheets' tab first!");
            setActiveTab('sheet');
            return;
        }

        setSyncStatus('syncing');
        try {
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
                services: serviceList.map(s => ({
                    id: s.id,
                    name: s.name,
                    category: s.category,
                    price: s.price,
                    offerPrice: s.offerPrice || '',
                    hidden: !!s.hidden
                }))
            };

            await fetch(sheetWebhookUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            handleSaveToWebsite();
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
                        return {
                            ...s,
                            price: fromSheet.price || s.price,
                            offerPrice: fromSheet.offerPrice || s.offerPrice
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

    // Google Apps Script template code
    const googleAppsScriptCode = `// PASTE THIS IN GOOGLE SHEETS -> Extensions -> Apps Script
var TELEGRAM_BOT_TOKEN = "PASTE_YOUR_TELEGRAM_BOT_TOKEN_HERE";

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    // CASE 1: TELEGRAM BOT
    if (data.message && data.message.text) {
      var chatId = data.message.chat.id;
      var text = data.message.text.trim();
      var reply = "";

      if (text.toLowerCase().startsWith("price ")) {
        var cmd = text.substring(6).trim();
        var priceSheet = ss.getSheetByName("Prices");
        if (priceSheet) {
          var rows = priceSheet.getDataRange().getValues();
          for (var i = 1; i < rows.length; i++) {
            if (cmd.toLowerCase().includes(String(rows[i][1]).toLowerCase())) {
              var m = cmd.match(/₹?\\s*(\\d[\\d,]*)/);
              if (m) {
                priceSheet.getRange(i + 1, 4).setValue("₹" + m[1]);
                reply = "✅ " + rows[i][1] + " updated to ₹" + m[1] + " in Google Sheet!";
                break;
              }
            }
          }
        }
      } else if (text.toLowerCase().startsWith("banner ")) {
        var offerSheet = ss.getSheetByName("Offers");
        if (offerSheet) {
          offerSheet.getRange(4, 2).setValue(text.substring(7).trim());
          reply = "🎉 Banner updated!";
        }
      }

      if (TELEGRAM_BOT_TOKEN && TELEGRAM_BOT_TOKEN !== "PASTE_YOUR_TELEGRAM_BOT_TOKEN_HERE") {
        UrlFetchApp.fetch("https://api.telegram.org/bot" + TELEGRAM_BOT_TOKEN + "/sendMessage", {
          method: "post",
          contentType: "application/json",
          payload: JSON.stringify({ chat_id: chatId, text: reply || "Done!" })
        });
      }
      return ContentService.createTextOutput("OK").setMimeType(ContentService.MimeType.TEXT);
    }

    // CASE 2: WEBSITE PUSH
    var offerSheet = ss.getSheetByName("Offers") || ss.insertSheet("Offers");
    offerSheet.clear();
    offerSheet.appendRow(["Key", "Value"]);
    offerSheet.appendRow(["Banner Active", data.banner.active]);
    offerSheet.appendRow(["Banner Badge", data.banner.badge]);
    offerSheet.appendRow(["Banner Text", data.banner.text]);
    offerSheet.appendRow(["Last Updated", data.timestamp]);

    var priceSheet = ss.getSheetByName("Prices") || ss.insertSheet("Prices");
    priceSheet.clear();
    priceSheet.appendRow(["ID", "Service Name", "Category", "Price", "Offer", "Hidden"]);
    data.services.forEach(function(s) {
      priceSheet.appendRow([s.id, s.name, s.category, s.price, s.offerPrice, s.hidden ? "YES" : "NO"]);
    });

    return ContentService.createTextOutput(JSON.stringify({status: "ok", count: data.services.length}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({error: err.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var priceSheet = ss.getSheetByName("Prices");
    var services = [];
    if (priceSheet) {
      var rows = priceSheet.getDataRange().getValues();
      for (var i = 1; i < rows.length; i++) {
        services.push({
          id: String(rows[i][0]),
          name: String(rows[i][1]),
          category: String(rows[i][2]),
          price: String(rows[i][3]),
          offerPrice: String(rows[i][4]),
          hidden: String(rows[i][5]).toUpperCase() === "YES"
        });
      }
    }
    return ContentService.createTextOutput(JSON.stringify({ status: "ok", services: services }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({error: err.toString()}))
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
        <div className="pt-28 sm:pt-36 pb-48 bg-[#FAF9F5] min-h-screen select-none">
            
            {/* FLOATING SAVE CONFIRMATION */}
            {savedNotification && (
                <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#155724] text-white px-6 py-3 rounded-full shadow-2xl text-sm font-black flex items-center gap-2 border-2 border-emerald-300 animate-bounce">
                    <FaCheck size={14} className="text-emerald-300" />
                    <span>Saved live to website! Changes visible immediately.</span>
                </div>
            )}

            <div className="container-custom px-3 sm:px-6 max-w-4xl">

                {/* 1. TOP MOBILE ADMIN BAR (BIG CLEAR TEXT) */}
                <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-amber-300 shadow-sm mb-5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#B8860B] to-[#7D1B2D] text-white flex items-center justify-center font-serif font-black text-2xl shadow-md shrink-0">
                            S
                        </div>
                        <div>
                            <span className="text-xs font-black uppercase tracking-wider text-[#A46E19] block">
                                SALON MANAGEMENT CONSOLE
                            </span>
                            <h1 className="font-serif font-black text-lg sm:text-2xl text-gray-950 leading-tight">
                                Shobitha Studio Control
                            </h1>
                        </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                        <button
                            onClick={handleSaveToWebsite}
                            className="btn-primary py-2.5 px-4 sm:px-6 text-xs sm:text-sm font-black shadow-md flex items-center gap-2 active:scale-95 transition"
                            title="Save all changes to website"
                        >
                            <FaCheck size={13} />
                            <span>Save Live</span>
                        </button>

                        <button
                            onClick={handleLock}
                            className="w-10 h-10 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center text-sm transition"
                            title="Lock Admin"
                        >
                            <FaLock size={13} />
                        </button>
                    </div>
                </div>

                {/* 2. NAVIGATION TABS (LARGE, COMFORTABLE SCROLLBAR) */}
                <div className="flex items-center gap-2 bg-white p-2 rounded-2xl border border-[#E8D9C5] shadow-xs mb-5 overflow-x-auto no-scrollbar">
                    {[
                        { id: 'prices', label: `Prices (${serviceList.length})`, icon: FaTag },
                        { id: 'prompts', label: '172 AI Image Studio', icon: FaCamera },
                        { id: 'pages', label: 'Menu & Pages', icon: FaGlobe },
                        { id: 'status', label: 'Salon Live Status', icon: FaStore },
                        { id: 'sections', label: 'Home Sections', icon: FaThLarge },
                        { id: 'store_mgr', label: `Store & Affiliate (${storeProductsList.length})`, icon: FaShoppingBag },
                        { id: 'offers', label: 'Offers & Banners', icon: FaImage },
                        { id: 'blogs', label: 'Blog Publisher', icon: FaBook },
                        { id: 'leads', label: `Inquiries (${appointmentLeads.length})`, icon: FaCalendarCheck },
                        { id: 'quote', label: 'WhatsApp Quote', icon: FaWhatsapp },
                        { id: 'reviews', label: 'Featured Reviews', icon: FaStar },
                        { id: 'sheet', label: 'Google Sheets', icon: FaTable },
                        { id: 'bot', label: 'Bot Agent', icon: FaRobot }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`py-2.5 px-3.5 sm:px-4 rounded-xl text-xs sm:text-sm font-black whitespace-nowrap flex items-center gap-1.5 transition-all ${
                                activeTab === tab.id
                                    ? 'bg-[#A46E19] text-white shadow-sm'
                                    : 'text-gray-700 hover:bg-amber-50/70'
                            }`}
                        >
                            <tab.icon size={13} />
                            <span>{tab.label}</span>
                        </button>
                    ))}
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
                {activeTab === 'prompts' && (
                    <div className="space-y-6">
                        {/* Header Banner & Batch Actions */}
                        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E8D9C5] shadow-xs">
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-gray-100">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center text-sm shadow-xs">
                                            <FaCamera />
                                        </span>
                                        <h2 className="font-serif font-black text-xl sm:text-2xl text-gray-950">
                                            172 AI Image Studio & Prompt Generator
                                        </h2>
                                    </div>
                                    <p className="text-xs sm:text-sm text-gray-600 font-medium max-w-2xl">
                                        Generate photorealistic model imagery for all 172 services. Features authentic <strong>Kerala natural bridal looks with gold flower ornaments</strong>, exact file naming, and automated <strong>"Shobitha Haircare"</strong> studio watermarking.
                                    </p>
                                </div>

                                <div className="flex flex-wrap items-center gap-2">
                                    <button
                                        onClick={handleDownloadAllPromptsJSON}
                                        className="py-2.5 px-4 rounded-xl bg-[#4A0A16] hover:bg-[#600C1D] text-amber-300 font-black text-xs flex items-center gap-1.5 shadow-sm active:scale-95 transition"
                                        title="Download complete JSON catalog of all 172 prompts"
                                    >
                                        <FaDownload size={11} />
                                        <span>Download Prompts JSON</span>
                                    </button>

                                    <button
                                        onClick={handleCopyAllPromptsText}
                                        className="py-2.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-black text-xs flex items-center gap-1.5 shadow-sm active:scale-95 transition"
                                        title="Copy all 172 prompts formatted for Midjourney or Imagen"
                                    >
                                        <FaCopy size={11} />
                                        <span>Copy All 172 Prompts</span>
                                    </button>
                                </div>
                            </div>

                            {/* Prompt Highlights & Watermark Rules Strip */}
                            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-4">
                                <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-950">
                                    <div className="font-black flex items-center gap-1.5 text-amber-900 mb-0.5">
                                        <span>🌸</span> Kerala Bridal Specification
                                    </div>
                                    <div className="text-[11px] text-amber-800 leading-relaxed font-medium">
                                        Natural dewy glow, fresh jasmine (mulla poo) garland in hair, traditional gold flower ornaments & Kasavu silk saree.
                                    </div>
                                </div>

                                <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-950">
                                    <div className="font-black flex items-center gap-1.5 text-amber-900 mb-0.5">
                                        <span>📐</span> 4:5 Portrait Aspect Ratio
                                    </div>
                                    <div className="text-[11px] text-amber-800 leading-relaxed font-medium">
                                        Pre-configured for 800×1000px portrait format to fit salon service cards and mobile modal views.
                                    </div>
                                </div>

                                <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-950">
                                    <div className="font-black flex items-center gap-1.5 text-amber-900 mb-0.5">
                                        <span>⚡</span> Auto-Resize & Compression
                                    </div>
                                    <div className="text-[11px] text-amber-800 leading-relaxed font-medium">
                                        Automatically resizes large 5MB–20MB Gemini/phone images to ~60KB WebP with zero storage errors!
                                    </div>
                                </div>

                                <div className="p-3 rounded-2xl bg-emerald-50/90 border border-emerald-300 text-xs text-emerald-950">
                                    <div className="font-black flex items-center justify-between text-emerald-900 mb-1">
                                        <span className="flex items-center gap-1"><span>⚙️</span> Resize Target:</span>
                                    </div>
                                    <select
                                        value={resizeQualityMode}
                                        onChange={(e) => setResizeQualityMode(e.target.value)}
                                        className="w-full bg-white border border-emerald-300 rounded-xl px-2 py-1.5 text-[11px] font-bold text-emerald-950 focus:ring-1 focus:ring-emerald-500 outline-none"
                                    >
                                        <option value="800x1000">800×1000 (Recommended • ~60KB)</option>
                                        <option value="1000x1250">1000×1250 (HD • ~110KB)</option>
                                        <option value="600x750">600×750 (Super Fast • ~35KB)</option>
                                    </select>
                                    <div className="text-[10px] text-emerald-700 mt-1 font-medium">
                                        Applies automatically on image upload.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Search & Category Filter */}
                        <div className="bg-white rounded-3xl p-4 sm:p-5 border border-[#E8D9C5] shadow-xs space-y-3">
                            <div className="relative">
                                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                                <input
                                    type="text"
                                    placeholder="Search 172 prompts by service name (e.g. Keratin, U-Cut, Kasavu Bridal, Facial, Nail)..."
                                    value={promptSearch}
                                    onChange={(e) => setPromptSearch(e.target.value)}
                                    className="w-full pl-11 pr-4 py-2.5 bg-[#FAF9F5] rounded-2xl border border-gray-200 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>

                            {/* Filter Chips */}
                            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                                {[
                                    { id: 'All', label: 'All Services (172)' },
                                    { id: 'Bridal', label: 'Bridal Makeup Only (20) ⭐' },
                                    { id: 'Haircuts', label: 'Haircuts (25)' },
                                    { id: 'Hair Spa', label: 'Hair Spa (18)' },
                                    { id: 'Hair Colour', label: 'Hair Colour (14)' },
                                    { id: 'Smoothening', label: 'Smoothening (6)' },
                                    { id: 'Facial', label: 'Facials (22)' },
                                    { id: 'Threading', label: 'Threading (13)' },
                                    { id: 'Nail', label: 'Nails & Pedicure (16)' },
                                    { id: 'Packages', label: 'Packages (10)' }
                                ].map(cat => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setPromptCategoryFilter(cat.id)}
                                        className={`px-3.5 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all ${
                                            promptCategoryFilter === cat.id
                                                ? 'bg-[#4A0A16] text-amber-300 shadow-xs'
                                                : 'bg-gray-100 text-gray-700 hover:bg-amber-100/60'
                                        }`}
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* List of 172 Service Prompt Cards */}
                        <div className="space-y-4">
                            {serviceImagePrompts
                                .filter(p => {
                                    const matchesCat = promptCategoryFilter === 'All' ||
                                        (promptCategoryFilter === 'Bridal' ? p.category === 'Bridal Makeup & Special Occasion Makeup' : p.category.includes(promptCategoryFilter));
                                    const matchesSearch = !promptSearch.trim() ||
                                        p.name.toLowerCase().includes(promptSearch.toLowerCase()) ||
                                        p.fileName.toLowerCase().includes(promptSearch.toLowerCase()) ||
                                        p.category.toLowerCase().includes(promptSearch.toLowerCase());
                                    return matchesCat && matchesSearch;
                                })
                                .map((item) => {
                                    const isBridal = item.category === 'Bridal Makeup & Special Occasion Makeup';
                                    const activeImg = customServiceImages[item.id] || imagePresets[0].image;

                                    return (
                                        <div
                                            key={item.id}
                                            className={`bg-white rounded-3xl p-4 sm:p-6 border-2 transition-all ${
                                                isBridal 
                                                    ? 'border-amber-400 bg-amber-50/20 shadow-xs' 
                                                    : 'border-[#E8D9C5] shadow-xs'
                                            }`}
                                        >
                                            {/* Top Line: Service Number, Category Tag, Badges */}
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-gray-100">
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <span className="font-mono font-bold text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-md">
                                                        #{item.index}
                                                    </span>
                                                    <h3 className="font-serif font-black text-base sm:text-xl text-gray-950">
                                                        {item.name}
                                                    </h3>
                                                    <span className="bg-amber-100 text-amber-900 text-xs font-black px-2.5 py-0.5 rounded-lg">
                                                        {item.category}
                                                    </span>
                                                    {isBridal && (
                                                        <span className="bg-gradient-to-r from-[#4A0A16] to-[#681022] text-amber-300 text-[11px] font-black px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-2xs">
                                                            <span>🌸</span> Kerala Natural Look + Gold Flower
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => setPreviewServiceModal(item)}
                                                        className="px-3 py-1.5 rounded-xl border border-gray-300 hover:border-amber-400 text-xs font-bold text-gray-700 bg-white hover:bg-amber-50 transition active:scale-95 flex items-center gap-1"
                                                    >
                                                        <FaEye size={12} className="text-amber-700" />
                                                        <span>Preview Modal</span>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* File Name Row with Copy Button & Rename / Download */}
                                            <div className="mb-3 p-3 rounded-2xl bg-gray-50 border border-gray-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                                <div className="flex items-center gap-2 min-w-0 flex-1">
                                                    <FaFolderOpen className="text-amber-700 text-sm shrink-0" />
                                                    <span className="text-xs font-black text-gray-600 uppercase tracking-wider shrink-0">
                                                        Target File Name:
                                                    </span>
                                                    <input
                                                        type="text"
                                                        value={customTargetFileNames[item.id] !== undefined ? customTargetFileNames[item.id] : item.fileName}
                                                        onChange={(e) => setCustomTargetFileNames({ ...customTargetFileNames, [item.id]: e.target.value })}
                                                        className="text-xs sm:text-sm font-mono font-bold text-[#4A0A16] bg-white px-2.5 py-1 rounded-lg border border-gray-300 focus:border-amber-500 outline-none flex-1 max-w-xs"
                                                        title="Click to edit or rename target file name"
                                                    />
                                                </div>

                                                <div className="flex items-center gap-1.5 shrink-0">
                                                    <button
                                                        type="button"
                                                        onClick={() => handleCopyFileName(item.id, customTargetFileNames[item.id] || item.fileName)}
                                                        className={`px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition active:scale-95 ${
                                                            copiedFileId === item.id
                                                                ? 'bg-emerald-600 text-white'
                                                                : 'bg-white hover:bg-gray-100 text-gray-800 border border-gray-300'
                                                        }`}
                                                    >
                                                        {copiedFileId === item.id ? <FaCheck size={11} /> : <FaCopy size={11} />}
                                                        <span>{copiedFileId === item.id ? 'Copied!' : 'Copy Name'}</span>
                                                    </button>

                                                    {customServiceImages[item.id] && (
                                                        <button
                                                            type="button"
                                                            onClick={() => handleDownloadResizedFile(item.id, customTargetFileNames[item.id] || item.fileName)}
                                                            className="px-3 py-1.5 rounded-xl text-xs font-black bg-[#4A0A16] hover:bg-[#681022] text-amber-300 hover:text-white flex items-center gap-1.5 transition active:scale-95 shadow-xs"
                                                            title="Download this resized image with the exact target file name"
                                                        >
                                                            <FaDownload size={11} className="text-amber-400" />
                                                            <span>Download File</span>
                                                        </button>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Prompt Box with 1-Tap Copy Prompt */}
                                            <div className="mb-4">
                                                <div className="flex items-center justify-between mb-1.5">
                                                    <label className="text-xs font-black uppercase tracking-wider text-gray-700 flex items-center gap-1.5">
                                                        <FaMagic className="text-amber-700" />
                                                        <span>AI Model Image Generation Prompt</span>
                                                    </label>

                                                    <button
                                                        onClick={() => handleCopyPrompt(item.id, item.prompt)}
                                                        className={`px-3.5 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition active:scale-95 shadow-xs ${
                                                            copiedPromptId === item.id
                                                                ? 'bg-emerald-600 text-white'
                                                                : 'bg-[#B98327] hover:bg-[#A3701E] text-white'
                                                        }`}
                                                    >
                                                        {copiedPromptId === item.id ? <FaCheck size={11} /> : <FaCopy size={11} />}
                                                        <span>{copiedPromptId === item.id ? '✓ Prompt Copied!' : 'Copy Prompt'}</span>
                                                    </button>
                                                </div>

                                                <div className="p-3.5 rounded-2xl bg-[#FAF9F5] border-2 border-gray-200/90 text-xs sm:text-sm text-gray-800 leading-relaxed font-medium select-all">
                                                    {item.prompt}
                                                </div>

                                                <div className="flex items-center justify-between text-[11px] text-gray-500 font-bold px-1 mt-1.5">
                                                    <span>Aspect: {item.aspectRatio}</span>
                                                    <span>Watermark: {item.watermark}</span>
                                                </div>
                                            </div>

                                            {/* Image Update & Modal Replacement Section */}
                                            <div className="p-3.5 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-2.5">
                                                <div className="flex items-center justify-between flex-wrap gap-2">
                                                    <span className="text-xs font-black uppercase tracking-wider text-gray-800 flex items-center gap-1.5">
                                                        <FaPalette className="text-amber-700" /> Replace Image for Service & Modal
                                                    </span>
                                                    <div className="flex items-center gap-2">
                                                        {customServiceImages[item.id] && (
                                                            <>
                                                                <span className="text-[10px] font-black text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                                                                    ✓ Custom Active
                                                                </span>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => handleRemoveServiceImage(item.id)}
                                                                    className="text-[11px] font-bold text-red-600 hover:text-red-700 underline"
                                                                >
                                                                    Reset
                                                                </button>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* File Upload Button + Direct URL Input */}
                                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                                                    {/* Native File Upload (Supports Any Image Size - Auto-Resizes to ~60KB) */}
                                                    <label
                                                        htmlFor={`file-upload-${item.id}`}
                                                        className={`px-3.5 py-2 rounded-xl text-xs font-black transition active:scale-95 shrink-0 shadow-xs flex items-center justify-center gap-1.5 cursor-pointer ${
                                                            isProcessingUpload[item.id]
                                                                ? 'bg-gray-400 text-white cursor-wait'
                                                                : 'bg-[#4A0A16] hover:bg-[#681022] text-amber-300 hover:text-white'
                                                        }`}
                                                        title="Upload downloaded image from phone gallery or PC (Auto-resizes & compresses)"
                                                    >
                                                        <FaCloudUploadAlt size={14} className="text-amber-400" />
                                                        <span>{isProcessingUpload[item.id] ? '⚡ Auto-Resizing...' : '📁 Upload & Auto-Resize'}</span>
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

                                                    {/* Direct Image URL input */}
                                                    <input
                                                        type="url"
                                                        placeholder="Or paste direct image URL (.jpg, .webp, .png)..."
                                                        value={serviceInputImages[item.id] !== undefined ? serviceInputImages[item.id] : (customServiceImages[item.id] || '')}
                                                        onChange={(e) => setServiceInputImages({ ...serviceInputImages, [item.id]: e.target.value })}
                                                        className="flex-1 bg-white border border-gray-300 rounded-xl px-3.5 py-2 text-xs font-mono text-gray-900 outline-none focus:ring-2 focus:ring-amber-500"
                                                    />

                                                    <button
                                                        onClick={() => handleSaveServiceImage(item.id, serviceInputImages[item.id])}
                                                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black transition active:scale-95 shrink-0 shadow-xs"
                                                    >
                                                        Save URL
                                                    </button>
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

                                                {/* Helpful advice for Gemini links */}
                                                <p className="text-[11px] text-gray-500 leading-snug">
                                                    💡 <strong className="text-gray-700">Auto-Resize Active:</strong> Any image you pick (even 10MB–20MB from phone or Gemini) is instantly resized and compressed client-side to lightweight salon WebP format.
                                                </p>

                                                {/* Quick Preset Selector Buttons */}
                                                <div className="flex items-center gap-1.5 overflow-x-auto pt-1 no-scrollbar">
                                                    <span className="text-[10px] font-black uppercase text-gray-400 shrink-0">
                                                        Presets:
                                                    </span>
                                                    {imagePresets.map((preset, pIdx) => (
                                                        <button
                                                            key={pIdx}
                                                            type="button"
                                                            onClick={() => {
                                                                setServiceInputImages({ ...serviceInputImages, [item.id]: preset.image });
                                                                handleSaveServiceImage(item.id, preset.image);
                                                            }}
                                                            className="px-2.5 py-1 rounded-lg bg-white hover:bg-amber-100 text-gray-700 text-[11px] font-bold border border-gray-200 transition shrink-0"
                                                        >
                                                            {preset.name}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>

                        {/* Service Modal Preview Popup */}
                        {previewServiceModal && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
                                <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl border-2 border-amber-400 relative animate-in fade-in zoom-in-95 duration-200">
                                    <div className="relative aspect-[4/3] bg-gray-100">
                                        <img
                                            src={customServiceImages[previewServiceModal.id] || imagePresets[0].image}
                                            alt={previewServiceModal.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <button
                                            onClick={() => setPreviewServiceModal(null)}
                                            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition"
                                        >
                                            <FaTimes size={13} />
                                        </button>

                                        {/* Watermark Overlay Preview matching Image 2 */}
                                        <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-amber-400/50 shadow-md">
                                            <Logo variant="gold" size="sm" showSwoop={true} align="left" />
                                        </div>
                                    </div>

                                    <div className="p-5 space-y-3">
                                        <div>
                                            <span className="text-[10px] font-black uppercase text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
                                                {previewServiceModal.category}
                                            </span>
                                            <h3 className="font-serif font-black text-xl text-gray-950 mt-1">
                                                {previewServiceModal.name}
                                            </h3>
                                        </div>

                                        <div className="p-3 rounded-2xl bg-[#FAF9F5] border border-gray-200 text-xs text-gray-700 leading-relaxed font-medium">
                                            {previewServiceModal.prompt}
                                        </div>

                                        <button
                                            onClick={() => setPreviewServiceModal(null)}
                                            className="w-full btn-primary py-2.5 rounded-xl text-xs font-black"
                                        >
                                            Close Preview
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
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
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-2xl shadow-md shrink-0">
                                <FaTable />
                            </div>
                            <div>
                                <h2 className="font-serif font-black text-lg sm:text-xl text-gray-950">
                                    Google Sheets Live Sync
                                </h2>
                                <p className="text-xs text-gray-500 font-medium">
                                    Direct 2-way sync with your Google Sheet
                                </p>
                            </div>
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
                            <p className="text-emerald-700 font-black text-xs sm:text-sm flex items-center gap-1.5">
                                <FaCheck size={14} /> Synced all 172 services & visibility flags to Google Sheet!
                            </p>
                        )}
                        {syncStatus === 'pull_success' && (
                            <p className="text-emerald-700 font-black text-xs sm:text-sm flex items-center gap-1.5">
                                <FaCheck size={14} /> Pulled fresh prices & offers from Google Sheet!
                            </p>
                        )}
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
