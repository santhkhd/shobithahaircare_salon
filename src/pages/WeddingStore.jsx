import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
    FaWhatsapp, FaCheckSquare, FaRegSquare, FaPrint, FaShareAlt, 
    FaArrowRight, FaCalendarCheck, FaPhoneAlt, FaStar, FaCrown, 
    FaShoppingBag, FaClock, FaCheckCircle, FaUndo, FaSearch, 
    FaPlus, FaCheck, FaTruck, FaStore, FaShieldAlt, FaMagic,
    FaHeart, FaRegHeart, FaExternalLinkAlt, FaTag, FaFilter, FaSortAmountDown
} from 'react-icons/fa';
import LaurelBranch from '../components/LaurelBranch';
import { useBooking } from '../context/BookingContext';
import { useCart } from '../context/CartContext';
import { useSiteSettings } from '../context/SiteSettingsContext';
import { initialStoreProducts, storeCategories, platformFilters } from '../data/storeProducts';
import { masterChecklist, shoppingTimeline } from '../data/weddingStore';

const WeddingStore = () => {
    const { openBooking } = useBooking();
    const { addToCart, openCart, cartCount } = useCart();
    const { affiliateSettings } = useSiteSettings();

    const [activeTab, setActiveTab] = useState('store'); // 'store' | 'checklist' | 'timeline'
    const [selectedStoreCategory, setSelectedStoreCategory] = useState('all');
    const [selectedPlatform, setSelectedPlatform] = useState('all');
    const [sortBy, setSortBy] = useState('recommended'); // 'recommended' | 'price_low' | 'price_high' | 'discount' | 'rating'
    const [checkedItems, setCheckedItems] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const [addedAlert, setAddedAlert] = useState(null);
    const [wishlist, setWishlist] = useState({});

    // Products list with localStorage customization fallback
    const products = useMemo(() => {
        try {
            const saved = JSON.parse(localStorage.getItem('shobitha_custom_store_products') || '[]');
            if (saved.length > 0) return saved;
        } catch (e) {}
        return initialStoreProducts;
    }, []);

    useEffect(() => {
        document.title = "Wedding & Bridal Boutique Store | Shobitha Studio Kanhangad";
        window.scrollTo(0, 0);
        try {
            const savedChecklist = JSON.parse(localStorage.getItem('shobitha_wedding_checklist') || '{}');
            setCheckedItems(savedChecklist);
            const savedWishlist = JSON.parse(localStorage.getItem('shobitha_store_wishlist') || '{}');
            setWishlist(savedWishlist);
        } catch (e) {}
    }, []);

    const toggleWishlist = (productId, e) => {
        if (e) e.stopPropagation();
        setWishlist(prev => {
            const next = { ...prev, [productId]: !prev[productId] };
            try {
                localStorage.setItem('shobitha_store_wishlist', JSON.stringify(next));
            } catch (err) {}
            return next;
        });
    };

    // Filter & Sort store products (Flipkart / Myntra Style)
    const filteredProducts = useMemo(() => {
        let list = products.filter(prod => {
            const matchesCat = selectedStoreCategory === 'all' || prod.category === selectedStoreCategory;
            const matchesPlatform = selectedPlatform === 'all' || prod.platform === selectedPlatform;
            const matchesSearch = !searchQuery.trim() || 
                prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                prod.brand?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                prod.shortDesc?.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCat && matchesPlatform && matchesSearch;
        });

        // Sorting
        return list.sort((a, b) => {
            if (sortBy === 'price_low') return (a.priceNum || 0) - (b.priceNum || 0);
            if (sortBy === 'price_high') return (b.priceNum || 0) - (a.priceNum || 0);
            if (sortBy === 'discount') return (b.discountPercent || 0) - (a.discountPercent || 0);
            if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
            return 0; // recommended
        });
    }, [products, selectedStoreCategory, selectedPlatform, searchQuery, sortBy]);

    const handleAddToCart = (product, e) => {
        if (e) e.stopPropagation();
        addToCart(product, 1);
        setAddedAlert(product.name);
        setTimeout(() => setAddedAlert(null), 2500);
    };

    const handleDirectWhatsAppBuy = (product, e) => {
        if (e) e.stopPropagation();
        const msg = `Hello Shobitha Bridal Studio, I would like to order *${product.name}* (${product.price}) from your Store. Please confirm availability and delivery timeline.`;
        window.open(`https://wa.me/918075340778?text=${encodeURIComponent(msg)}`, '_blank');
    };

    const handleAffiliateBuy = (product, e) => {
        if (e) e.stopPropagation();
        const targetUrl = product.affiliateUrl || 'https://www.amazon.in';
        window.open(targetUrl, '_blank', 'noopener,noreferrer');
    };

    // Checklist toggles
    const toggleChecklistItem = (id) => {
        setCheckedItems(prev => {
            const updated = { ...prev, [id]: !prev[id] };
            try {
                localStorage.setItem('shobitha_wedding_checklist', JSON.stringify(updated));
            } catch (e) {}
            return updated;
        });
    };

    const resetChecklist = () => {
        if (window.confirm("Are you sure you want to reset your checked items?")) {
            setCheckedItems({});
            localStorage.removeItem('shobitha_wedding_checklist');
        }
    };

    // Checklist stats
    const allChecklistItems = useMemo(() => {
        const list = [];
        masterChecklist.forEach(section => {
            section.items.forEach(item => list.push({ ...item, category: section.category }));
        });
        return list;
    }, []);

    const totalChecklistCount = allChecklistItems.length;
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    const progressPercent = totalChecklistCount > 0 ? Math.round((checkedCount / totalChecklistCount) * 100) : 0;

    const handleShareChecklist = (familyType = 'Both Families') => {
        const text = `🌸 *Wedding Master Shopping & Marriage Items Checklist*\n` +
            `Shobitha Haircare & Bridal Studio, Kanhangad\n\n` +
            `📊 Progress: ${checkedCount}/${totalChecklistCount} items procured (${progressPercent}% completed)\n\n` +
            `Check full master list & bridal boutique: https://shobithasalon.pages.dev/#/store`;
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div className="bg-[#FAF9F5] min-h-screen pt-24 pb-20">

            {/* Added to Cart Notification Toast */}
            {addedAlert && (
                <div className="fixed top-24 right-4 z-50 bg-[#4A0A16] text-white px-5 py-3 rounded-2xl shadow-2xl border-2 border-amber-300 flex items-center gap-3 animate-bounce">
                    <FaCheckCircle className="text-amber-300 text-lg shrink-0" />
                    <div>
                        <div className="text-xs font-bold text-amber-200">Added to your Cart!</div>
                        <div className="text-sm font-black truncate max-w-xs">{addedAlert}</div>
                    </div>
                    <button 
                        onClick={openCart}
                        className="bg-amber-300 hover:bg-amber-400 text-[#4A0A16] px-3 py-1 rounded-xl text-xs font-black ml-2 shadow-xs"
                    >
                        View Cart
                    </button>
                </div>
            )}

            {/* HERO BANNER - ROYAL BURGUNDY & CHAMPAGNE GOLD */}
            <div className="bg-gradient-to-r from-[#4A0A16] via-[#5C0D1C] to-[#3B0711] text-white py-10 sm:py-14 relative overflow-hidden border-b-2 border-amber-400/80 shadow-md">
                <div className="container-custom px-4 sm:px-6 relative z-10 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="w-6 sm:w-10 h-[1.5px] bg-amber-400"></span>
                        <span className="text-amber-300 font-black uppercase tracking-[0.25em] text-[10px] sm:text-xs">
                            SHOBITHA BRIDAL BOUTIQUE & MASTER HUB
                        </span>
                        <span className="w-6 sm:w-10 h-[1.5px] bg-amber-400"></span>
                    </div>

                    <div className="flex items-center justify-center gap-2 sm:gap-4 my-2">
                        <LaurelBranch flip={false} />
                        <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                            <span className="text-amber-100">Wedding Store & </span>
                            <span className="text-amber-400 font-serif">Shaadi Essentials</span>
                        </h1>
                        <LaurelBranch flip={true} />
                    </div>

                    <p className="text-xs sm:text-sm md:text-base text-amber-100/90 max-w-2xl mx-auto font-medium mt-1 leading-relaxed">
                        Curated by Kanhangad's master bridal stylists. Shop pure Muhurtham silks, temple jewellery, verified Amazon & Flipkart wedding finds, and salon-grade haircare.
                    </p>

                    {/* Quick Stats Badges */}
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-5 text-[11px] sm:text-xs font-bold">
                        <div className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-300/40 flex items-center gap-1.5 text-amber-200">
                            <FaStore /> Studio Pickup in Kanhangad
                        </div>
                        <div className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-300/40 flex items-center gap-1.5 text-amber-200">
                            <FaTruck /> Express Courier Across Kerala
                        </div>
                        <div className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-300/40 flex items-center gap-1.5 text-amber-200">
                            <FaShieldAlt /> 100% Verified Quality
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom px-4 sm:px-6 pt-6">

                {/* 3 CORE TABS SELECTOR */}
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                    <button
                        onClick={() => setActiveTab('store')}
                        className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-black flex items-center gap-2 transition-all shadow-xs active:scale-95 ${
                            activeTab === 'store'
                                ? 'bg-[#4A0A16] text-white ring-2 ring-amber-400 shadow-md'
                                : 'bg-white text-gray-800 border border-[#E8D9C5] hover:border-amber-400'
                        }`}
                    >
                        <FaShoppingBag className={activeTab === 'store' ? 'text-amber-300' : 'text-amber-700'} />
                        <span>Boutique Store ({products.length})</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('checklist')}
                        className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-black flex items-center gap-2 transition-all shadow-xs active:scale-95 ${
                            activeTab === 'checklist'
                                ? 'bg-[#4A0A16] text-white ring-2 ring-amber-400 shadow-md'
                                : 'bg-white text-gray-800 border border-[#E8D9C5] hover:border-amber-400'
                        }`}
                    >
                        <FaCheckSquare className={activeTab === 'checklist' ? 'text-amber-300' : 'text-emerald-600'} />
                        <span>Shaadi Checklist ({progressPercent}%)</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('timeline')}
                        className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-black flex items-center gap-2 transition-all shadow-xs active:scale-95 ${
                            activeTab === 'timeline'
                                ? 'bg-[#4A0A16] text-white ring-2 ring-amber-400 shadow-md'
                                : 'bg-white text-gray-800 border border-[#E8D9C5] hover:border-amber-400'
                        }`}
                    >
                        <FaClock className={activeTab === 'timeline' ? 'text-amber-300' : 'text-amber-700'} />
                        <span>Shopping Timeline</span>
                    </button>
                </div>

                {/* ============================================================ */}
                {/* TAB 1: FLIPKART & MYNTRA STYLE E-COMMERCE BOUTIQUE STORE     */}
                {/* ============================================================ */}
                {activeTab === 'store' && (
                    <div>
                        {/* Search & Sort Controls Bar */}
                        <div className="bg-white rounded-3xl p-4 sm:p-5 border border-[#E8D9C5] shadow-xs mb-5">
                            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                                {/* Search Bar */}
                                <div className="relative flex-1">
                                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                                    <input
                                        type="text"
                                        placeholder="Search sarees, lehengas, jewellery, post-keratin shampoo, hair dryers..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-11 pr-4 py-2.5 bg-[#FAF9F5] rounded-2xl border border-gray-200 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    />
                                </div>

                                {/* Sort Dropdown (Myntra/Flipkart Style) */}
                                <div className="flex items-center gap-2 shrink-0">
                                    <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
                                        <FaSortAmountDown className="text-amber-700" /> Sort By:
                                    </span>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="bg-[#FAF9F5] border border-gray-200 rounded-xl px-3 py-2 text-xs sm:text-sm font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
                                    >
                                        <option value="recommended">Featured / Recommended</option>
                                        <option value="price_low">Price: Low to High</option>
                                        <option value="price_high">Price: High to Low</option>
                                        <option value="discount">Biggest Discount (% OFF)</option>
                                        <option value="rating">Customer Rating</option>
                                    </select>
                                </div>
                            </div>

                            {/* Platform Source Filter Chips (Flipkart, Amazon, Myntra, Salon) */}
                            <div className="flex items-center gap-2 overflow-x-auto pt-3.5 mt-3 border-t border-gray-100 no-scrollbar">
                                <span className="text-[11px] font-black uppercase tracking-wider text-gray-400 shrink-0">
                                    Platform:
                                </span>
                                {platformFilters.map(p => (
                                    <button
                                        key={p.id}
                                        onClick={() => setSelectedPlatform(p.id)}
                                        className={`px-3 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all flex items-center gap-1.5 ${
                                            selectedPlatform === p.id
                                                ? 'bg-[#4A0A16] text-amber-300 shadow-sm'
                                                : 'bg-gray-100 text-gray-700 hover:bg-amber-100/60'
                                        }`}
                                    >
                                        <span>{p.badge}</span>
                                        <span>{p.label}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Category Filter Chips */}
                            <div className="flex items-center gap-2 overflow-x-auto pt-2.5 no-scrollbar">
                                <span className="text-[11px] font-black uppercase tracking-wider text-gray-400 shrink-0">
                                    Category:
                                </span>
                                {storeCategories.map(cat => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setSelectedStoreCategory(cat.id)}
                                        className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1 ${
                                            selectedStoreCategory === cat.id
                                                ? 'bg-[#B98327] text-white shadow-xs'
                                                : 'bg-[#FAF3E8] text-[#8E580B] hover:bg-amber-200/60'
                                        }`}
                                    >
                                        <span>{cat.icon}</span>
                                        <span>{cat.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Affiliate Transparency & Trust Note */}
                        <div className="mb-6 p-3.5 sm:p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-xs text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                                <span className="text-base">🤝</span>
                                <span className="font-medium">
                                    {affiliateSettings.affiliateDisclosure}
                                </span>
                            </div>
                            <span className="font-extrabold text-[11px] text-[#4A0A16] bg-amber-200/70 px-2.5 py-1 rounded-lg shrink-0">
                                100% Stylist Curated
                            </span>
                        </div>

                        {/* Product Grid - Flipkart & Myntra Responsive Card Aesthetic */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 mb-14">
                            {filteredProducts.map(product => {
                                const isWishlisted = !!wishlist[product.id];
                                const isAffiliate = product.platform && product.platform !== 'salon';

                                return (
                                    <div
                                        key={product.id}
                                        className="bg-white rounded-2xl sm:rounded-3xl border border-[#E8D9C5] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group relative"
                                    >
                                        {/* Product Image Box with Aspect Ratio */}
                                        <div className="relative aspect-[4/5] sm:aspect-square bg-gray-100 overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                loading="lazy"
                                            />

                                            {/* Discount Ribbon Badge (Top-Left) */}
                                            {product.discountPercent > 0 && (
                                                <div className="absolute top-2.5 left-2.5 bg-gradient-to-r from-red-600 to-rose-600 text-white font-black text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 rounded-full shadow-md">
                                                    {product.discountPercent}% OFF
                                                </div>
                                            )}

                                            {/* Platform Badge (Top-Right) */}
                                            <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1">
                                                {product.platform === 'amazon' && (
                                                    <span className="bg-[#232F3E] text-[#FF9900] text-[9.5px] sm:text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">
                                                        Amazon
                                                    </span>
                                                )}
                                                {product.platform === 'flipkart' && (
                                                    <span className="bg-[#2874F0] text-yellow-300 text-[9.5px] sm:text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">
                                                        Flipkart
                                                    </span>
                                                )}
                                                {product.platform === 'myntra' && (
                                                    <span className="bg-[#FF3F6C] text-white text-[9.5px] sm:text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">
                                                        Myntra
                                                    </span>
                                                )}
                                                {product.platform === 'salon' && (
                                                    <span className="bg-[#4A0A16] text-amber-300 text-[9.5px] sm:text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm border border-amber-300/40">
                                                        Salon Pick
                                                    </span>
                                                )}

                                                {/* Wishlist Heart Icon */}
                                                <button
                                                    onClick={(e) => toggleWishlist(product.id, e)}
                                                    className="w-7 h-7 rounded-full bg-white/90 hover:bg-white text-rose-500 flex items-center justify-center shadow-md transition active:scale-90"
                                                    title={isWishlisted ? "Remove from Wishlist" : "Save to Wishlist"}
                                                >
                                                    {isWishlisted ? <FaHeart size={13} /> : <FaRegHeart size={13} className="text-gray-600 hover:text-rose-500" />}
                                                </button>
                                            </div>

                                            {/* Rating Pill (Bottom-Left) */}
                                            <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded-md text-[10px] font-extrabold text-gray-900 shadow-sm flex items-center gap-1">
                                                <span className="text-amber-500">★</span>
                                                <span>{product.rating}</span>
                                                {product.reviewsCount && (
                                                    <span className="text-gray-400 font-medium">({product.reviewsCount})</span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Product Details Section */}
                                        <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
                                            <div>
                                                {/* Brand */}
                                                <div className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-gray-500 truncate mb-0.5">
                                                    {product.brand || 'Shobitha Studio'}
                                                </div>

                                                {/* Title */}
                                                <h3 className="font-serif font-black text-xs sm:text-sm text-gray-950 leading-snug line-clamp-2 mb-1.5 group-hover:text-[#4A0A16] transition-colors">
                                                    {product.name}
                                                </h3>

                                                {/* Delivery Tag */}
                                                {product.deliveryTag && (
                                                    <div className="text-[10px] text-emerald-700 font-bold flex items-center gap-1 mb-2">
                                                        <FaTruck size={10} />
                                                        <span>{product.deliveryTag}</span>
                                                    </div>
                                                )}

                                                {/* Price Section (Flipkart / Myntra Style) */}
                                                <div className="flex items-baseline gap-1.5 flex-wrap mb-3">
                                                    <span className="text-sm sm:text-base font-black text-gray-950">
                                                        {product.price}
                                                    </span>
                                                    {product.originalPrice && (
                                                        <span className="text-[11px] sm:text-xs text-gray-400 line-through font-semibold">
                                                            {product.originalPrice}
                                                        </span>
                                                    )}
                                                    {product.discountPercent > 0 && (
                                                        <span className="text-[10px] sm:text-xs font-black text-emerald-600">
                                                            ({product.discountPercent}% OFF)
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="pt-2 border-t border-gray-100 flex flex-col gap-1.5">
                                                {isAffiliate ? (
                                                    <>
                                                        {/* Affiliate Direct Link Button */}
                                                        <button
                                                            onClick={(e) => handleAffiliateBuy(product, e)}
                                                            className={`w-full py-2 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition ${
                                                                product.platform === 'amazon'
                                                                    ? 'bg-[#FF9900] hover:bg-[#E88B00] text-gray-950'
                                                                    : product.platform === 'flipkart'
                                                                    ? 'bg-[#2874F0] hover:bg-[#1C60CE] text-white'
                                                                    : 'bg-[#FF3F6C] hover:bg-[#E5325E] text-white'
                                                            }`}
                                                        >
                                                            <span>Buy on {product.platform === 'amazon' ? 'Amazon' : product.platform === 'flipkart' ? 'Flipkart' : 'Myntra'}</span>
                                                            <FaExternalLinkAlt size={10} />
                                                        </button>

                                                        {/* Inquire on WhatsApp */}
                                                        <button
                                                            onClick={(e) => handleDirectWhatsAppBuy(product, e)}
                                                            className="w-full py-1.5 px-2 rounded-xl text-[11px] font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 flex items-center justify-center gap-1 transition"
                                                        >
                                                            <FaWhatsapp size={12} className="text-[#25D366]" />
                                                            <span>Styling Inquiry</span>
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        {/* Salon Direct Item: Add to Cart */}
                                                        <button
                                                            onClick={(e) => handleAddToCart(product, e)}
                                                            className="w-full py-2 px-3 rounded-xl text-xs font-black bg-[#4A0A16] hover:bg-[#5E0D1D] text-amber-300 flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition"
                                                        >
                                                            <FaPlus size={10} />
                                                            <span>Add to Cart</span>
                                                        </button>

                                                        {/* Instant WhatsApp Invoice */}
                                                        <button
                                                            onClick={(e) => handleDirectWhatsAppBuy(product, e)}
                                                            className="w-full py-1.5 px-2 rounded-xl text-[11px] font-bold text-gray-800 bg-amber-50 hover:bg-amber-100 flex items-center justify-center gap-1 transition"
                                                        >
                                                            <FaWhatsapp size={12} className="text-[#25D366]" />
                                                            <span>1-Tap Order</span>
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* ============================================================ */}
                {/* TAB 2: MASTER SHAADI CHECKLIST (INDIAN BRIDE & GROOM)        */}
                {/* ============================================================ */}
                {activeTab === 'checklist' && (
                    <div>
                        {/* Progress Tracker Card */}
                        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E8D9C5] shadow-xs mb-8">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <FaCheckSquare className="text-emerald-600 text-lg" />
                                        <h3 className="font-serif font-black text-lg sm:text-2xl text-[#22160F]">
                                            Wedding Procurement Progress
                                        </h3>
                                    </div>
                                    <p className="text-xs sm:text-sm text-gray-600">
                                        {checkedCount} of {totalChecklistCount} items organized ({progressPercent}% completed)
                                    </p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => handleShareChecklist('Both Families')}
                                        className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black flex items-center gap-1.5 shadow-xs transition"
                                    >
                                        <FaShareAlt size={11} /> Share on WhatsApp
                                    </button>
                                    <button
                                        onClick={resetChecklist}
                                        className="px-3 py-2 rounded-full border border-gray-300 text-gray-600 hover:text-red-600 text-xs font-bold transition"
                                        title="Reset checked items"
                                    >
                                        <FaUndo size={11} />
                                    </button>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                                <div
                                    className="bg-gradient-to-r from-amber-500 to-emerald-500 h-3 rounded-full transition-all duration-500"
                                    style={{ width: `${progressPercent}%` }}
                                />
                            </div>
                        </div>

                        {/* Master Checklist Accordions */}
                        <div className="space-y-6 mb-14">
                            {masterChecklist.map((section, sIdx) => (
                                <div
                                    key={sIdx}
                                    className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E8D9C5] shadow-xs"
                                >
                                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
                                        <div>
                                            <h3 className="font-serif font-black text-lg sm:text-xl text-[#22160F]">
                                                {section.category}
                                            </h3>
                                            <p className="text-xs text-gray-500 font-medium">{section.desc}</p>
                                        </div>
                                        <span className="text-xs font-black text-[#A46E19] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                                            {section.items.length} items
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {section.items.map((item, iIdx) => {
                                            const itemId = `${section.category}-${iIdx}`;
                                            const isChecked = !!checkedItems[itemId];

                                            return (
                                                <div
                                                    key={iIdx}
                                                    onClick={() => toggleChecklistItem(itemId)}
                                                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                                                        isChecked
                                                            ? 'bg-emerald-50/70 border-emerald-300 shadow-2xs'
                                                            : 'bg-[#FAF9F5] border-gray-200/90 hover:border-amber-400'
                                                    }`}
                                                >
                                                    <div className="mt-0.5 shrink-0 text-base">
                                                        {isChecked ? (
                                                            <FaCheckSquare className="text-emerald-600" />
                                                        ) : (
                                                            <FaRegSquare className="text-gray-400" />
                                                        )}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className={`text-xs sm:text-sm font-extrabold leading-snug ${
                                                            isChecked ? 'line-through text-emerald-950 font-bold' : 'text-[#22160F]'
                                                        }`}>
                                                            {item.name}
                                                        </h4>
                                                        <p className="text-[11px] sm:text-xs text-gray-500 font-medium leading-relaxed mt-0.5">
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ============================================================ */}
                {/* TAB 3: SHAADI SHOPPING TIMELINE ROADMAP                      */}
                {/* ============================================================ */}
                {activeTab === 'timeline' && (
                    <div className="mb-14 bg-white p-6 sm:p-9 rounded-3xl border border-[#E8D9C5] shadow-xs">
                        <div className="text-center mb-8">
                            <span className="text-[#A46E19] font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs block mb-1">
                                STRATEGIC PLANNING ROADMAP
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#22160F]">
                                When to Buy What: Shaadi Shopping Timeline
                            </h2>
                            <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto mt-1">
                                Follow this month-by-month guide so neither the bride nor the groom's family scrambles at the last minute.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {shoppingTimeline.map((slot, idx) => (
                                <div
                                    key={idx}
                                    className="p-5 rounded-2xl bg-[#FAF9F5] border border-[#E8D9C5] shadow-2xs hover:border-amber-400 transition"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="bg-[#4A0A16] text-amber-300 font-mono font-black text-xs px-2.5 py-1 rounded-lg">
                                            {slot.period}
                                        </span>
                                        <h3 className="font-serif font-black text-sm sm:text-base text-gray-950">
                                            {slot.focus}
                                        </h3>
                                    </div>
                                    <ul className="space-y-1.5 text-xs text-gray-700 pl-1 font-medium">
                                        {slot.tasks.map((task, tIdx) => (
                                            <li key={tIdx} className="flex items-start gap-1.5">
                                                <span className="text-amber-600 font-black">•</span>
                                                <span>{task}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* BRIDAL STYLING & CONSULTATION CALLOUT BANNER */}
                <div className="rounded-3xl p-7 sm:p-10 bg-gradient-to-r from-[#4A0A16] via-[#651020] to-[#4A0A16] text-white text-center shadow-xl border border-[#7D1B2D]">
                    <span className="text-amber-400 font-extrabold uppercase tracking-widest text-[10px] sm:text-xs mb-2 block">
                        EXPERT BRIDAL STYLING & DRAPING
                    </span>
                    <h3 className="font-serif text-xl sm:text-3xl font-extrabold mb-3">
                        Need Help Sourcing or Styling Your Wedding Look?
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-100/90 max-w-xl mx-auto mb-6 leading-relaxed">
                        Our Kanhangad bridal specialists provide complete wedding assistance: Muhurtham saree draping, temple jewellery matching, Solah Shringar styling, and HD bridal makeovers.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button
                            onClick={() => openBooking({ name: 'Bridal Makeover & Saree Styling', category: 'Bridal' })}
                            className="w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-[#B97A1E] via-[#A86B14] to-[#8E580B] hover:from-[#A86B14] hover:to-[#7E4C07] text-white text-xs sm:text-sm font-black shadow-md active:scale-95 transition"
                        >
                            Book Bridal Consultation
                        </button>

                        <a
                            href="https://wa.me/918075340778?text=Hello%20Shobitha%20Haircare,%20I%20need%20assistance%20with%20wedding%20shopping%20and%20saree%20styling"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-[#4A0A16] hover:bg-amber-100 text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-md active:scale-95 transition"
                        >
                            <FaWhatsapp className="text-[#25D366] text-base" /> WhatsApp Bridal Stylist
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WeddingStore;
