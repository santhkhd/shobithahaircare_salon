import React, { useState, useEffect } from 'react';
import { services, categories } from '../data/services';
import { specialOffers, defaultOffers } from '../data/offers';
import { reviews } from '../data/reviews';
import { blogPosts, blogCategories } from '../data/blogs';
import { 
    FaTag, FaCheck, FaCopy, FaDownload, FaSyncAlt, FaArrowRight, 
    FaWhatsapp, FaShieldAlt, FaMobileAlt, FaImage, FaSearch, 
    FaTimes, FaExternalLinkAlt, FaCloudUploadAlt, FaEdit, 
    FaPlus, FaMinus, FaEye, FaEyeSlash, FaRobot, FaTable, FaLock, FaKey,
    FaBook, FaCalendarCheck, FaClock, FaStore, FaPhoneAlt, FaStar,
    FaTrash, FaShareSquare, FaCalculator
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
                        { id: 'offers', label: 'Offers & Banners', icon: FaImage },
                        { id: 'blogs', label: 'Blog Publisher', icon: FaBook },
                        { id: 'leads', label: `Inquiries (${appointmentLeads.length})`, icon: FaCalendarCheck },
                        { id: 'status', label: 'Store Hours', icon: FaStore },
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
                {/* TAB 2: OFFERS & PROMO BANNER MANAGER (WITH IMAGE ADD)        */}
                {/* ============================================================ */}
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
                {/* TAB 5: FEATURE 3 - STORE HOURS & HOLIDAY TOGGLE              */}
                {/* ============================================================ */}
                {activeTab === 'status' && (
                    <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E8D9C5] shadow-xs space-y-5">
                        <div>
                            <h2 className="font-serif font-black text-lg sm:text-xl text-gray-950">
                                Salon Hours & Operating Status
                            </h2>
                            <p className="text-xs text-gray-500 font-medium">Toggle holiday closures or special Muhurtham hours</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <button
                                onClick={() => setStoreStatus({ ...storeStatus, state: 'open', text: 'Open Today: 10:00 AM – 6:00 PM' })}
                                className={`p-4 rounded-2xl border-2 text-center transition font-black text-sm ${
                                    storeStatus.state === 'open' ? 'border-emerald-500 bg-emerald-50 text-emerald-900' : 'border-gray-200 bg-white'
                                }`}
                            >
                                <span className="text-2xl block mb-1">🟢</span>
                                <span>Normal Hours</span>
                                <span className="block text-[11px] text-gray-500 font-normal mt-0.5">10:00 AM – 6:00 PM</span>
                            </button>

                            <button
                                onClick={() => setStoreStatus({ ...storeStatus, state: 'festival', text: 'Special Festival Hours: 8:00 AM – 8:00 PM' })}
                                className={`p-4 rounded-2xl border-2 text-center transition font-black text-sm ${
                                    storeStatus.state === 'festival' ? 'border-amber-500 bg-amber-50 text-amber-900' : 'border-gray-200 bg-white'
                                }`}
                            >
                                <span className="text-2xl block mb-1">🟡</span>
                                <span>Festival / Bridal Hours</span>
                                <span className="block text-[11px] text-gray-500 font-normal mt-0.5">Extended Slot Hours</span>
                            </button>

                            <button
                                onClick={() => setStoreStatus({ ...storeStatus, state: 'closed', text: 'Salon Closed Today' })}
                                className={`p-4 rounded-2xl border-2 text-center transition font-black text-sm ${
                                    storeStatus.state === 'closed' ? 'border-red-500 bg-red-50 text-red-900' : 'border-gray-200 bg-white'
                                }`}
                            >
                                <span className="text-2xl block mb-1">🔴</span>
                                <span>Weekly Holiday / Closed</span>
                                <span className="block text-[11px] text-gray-500 font-normal mt-0.5">Show Holiday Notice</span>
                            </button>
                        </div>

                        <div>
                            <label className="block text-xs font-black text-gray-700 uppercase mb-1">
                                Status Headline
                            </label>
                            <input
                                type="text"
                                value={storeStatus.text}
                                onChange={(e) => setStoreStatus({ ...storeStatus, text: e.target.value })}
                                className="w-full bg-[#FAF9F5] border-2 border-gray-200 rounded-2xl px-4 py-2.5 text-sm font-bold text-gray-900 outline-none"
                            />
                        </div>

                        <button
                            onClick={handleSaveToWebsite}
                            className="btn-primary py-3 px-6 rounded-2xl text-sm font-black flex items-center gap-2"
                        >
                            <FaCheck /> Save Operating Status
                        </button>
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
