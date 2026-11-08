import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
    FaWhatsapp, FaCheckSquare, FaRegSquare, FaPrint, FaShareAlt, 
    FaArrowRight, FaCalendarCheck, FaPhoneAlt, FaStar, FaCrown, 
    FaShoppingBag, FaClock, FaCheckCircle, FaUndo, FaSearch, 
    FaPlus, FaCheck, FaTruck, FaStore, FaShieldAlt, FaMagic
} from 'react-icons/fa';
import LaurelBranch from '../components/LaurelBranch';
import { useBooking } from '../context/BookingContext';
import { useCart } from '../context/CartContext';
import { initialStoreProducts, storeCategories } from '../data/storeProducts';
import { masterChecklist, shoppingTimeline } from '../data/weddingStore';

const WeddingStore = () => {
    const { openBooking } = useBooking();
    const { addToCart, openCart, cartCount } = useCart();

    const [activeTab, setActiveTab] = useState('store'); // 'store' | 'checklist' | 'timeline'
    const [selectedStoreCategory, setSelectedStoreCategory] = useState('all');
    const [checkedItems, setCheckedItems] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const [addedAlert, setAddedAlert] = useState(null);

    // Products list with localStorage customization fallback
    const products = useMemo(() => {
        try {
            const saved = JSON.parse(localStorage.getItem('shobitha_custom_store_products') || '[]');
            if (saved.length > 0) return saved;
        } catch (e) {}
        return initialStoreProducts;
    }, []);

    useEffect(() => {
        document.title = "Salon & Bridal Store | Shobitha Haircare & Bridal Studio Kanhangad";
        window.scrollTo(0, 0);
        try {
            const savedChecklist = JSON.parse(localStorage.getItem('shobitha_wedding_checklist') || '{}');
            setCheckedItems(savedChecklist);
        } catch (e) {}
    }, []);

    // Filter store products
    const filteredProducts = useMemo(() => {
        return products.filter(prod => {
            const matchesCat = selectedStoreCategory === 'all' || prod.category === selectedStoreCategory;
            const matchesSearch = !searchQuery.trim() || 
                prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                prod.shortDesc?.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCat && matchesSearch;
        });
    }, [products, selectedStoreCategory, searchQuery]);

    const handleAddToCart = (product, e) => {
        if (e) e.stopPropagation();
        addToCart(product, 1);
        setAddedAlert(product.name);
        setTimeout(() => setAddedAlert(null), 2500);
    };

    const handleDirectWhatsAppBuy = (product, e) => {
        if (e) e.stopPropagation();
        const msg = `Hello Shobitha Bridal Studio, I would like to order *${product.name}* (${product.price}) from your Store. Please confirm stock availability and delivery timeline.`;
        window.open(`https://wa.me/918075340778?text=${encodeURIComponent(msg)}`, '_blank');
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
            `Shared for: *${familyType}*\n` +
            `Current Progress: *${checkedCount}/${totalChecklistCount} items completed (${progressPercent}%)*\n\n` +
            `📋 Includes: High Quality Bridal Sarees, Solah Shringar (16 Adornments), Groom's Attire, Vivah Puja Samagri, Function Kits & Trousseau Trays.\n\n` +
            `👉 View & manage live checklist: ${window.location.origin}/#/wedding-store`;
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div className="pt-24 sm:pt-28 pb-24 bg-[#FAF9F5] min-h-screen">
            {/* Added to cart notification popup */}
            {addedAlert && (
                <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#4A0A16] text-white px-5 py-2.5 rounded-full shadow-2xl border-2 border-amber-300 flex items-center gap-2 text-xs sm:text-sm font-black animate-bounce">
                    <FaCheck className="text-amber-300" />
                    <span>Added "{addedAlert}" to your cart!</span>
                </div>
            )}

            <div className="container-custom px-4 sm:px-6 max-w-6xl">

                {/* 1. HERO HEADER WITH GOLD LAUREL WREATH BRANCHES */}
                <header className="text-center pt-2 sm:pt-4 pb-6 sm:pb-8">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="w-7 sm:w-10 h-[1.5px] bg-[#B98327]/60"></span>
                        <span className="text-[#A46E19] font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs">
                            OFFICIAL SALON & BRIDAL BOUTIQUE
                        </span>
                        <span className="w-7 sm:w-10 h-[1.5px] bg-[#B98327]/60"></span>
                    </div>

                    <div className="flex items-center justify-center gap-2 sm:gap-6 my-1">
                        <LaurelBranch flip={false} />
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12]">
                            <span className="text-[#22160F] block sm:inline">Bridal Store & </span>
                            <span className="text-[#B98327] block sm:inline">Wedding Checklist</span>
                        </h1>
                        <LaurelBranch flip={true} />
                    </div>

                    <p className="text-gray-700 max-w-2xl mx-auto text-xs sm:text-sm font-medium leading-relaxed mt-1 sm:mt-2">
                        Shop high-quality bridal silks, temple jewellery, post-keratin haircare, and Ayurvedic glow kits. Complete with an interactive master marriage checklist for both families.
                    </p>

                    {/* Quick Trust Highlights */}
                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-4 text-[11px] sm:text-xs text-[#8E580B] font-bold">
                        <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-[#E8DAC8] shadow-2xs">
                            <FaStore className="text-amber-700" /> Studio Pickup in Kanhangad
                        </span>
                        <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-[#E8DAC8] shadow-2xs">
                            <FaTruck className="text-emerald-700" /> Courier Delivery across Kerala
                        </span>
                        <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-[#E8DAC8] shadow-2xs">
                            <FaWhatsapp className="text-[#25D366]" /> 1-Tap WhatsApp Ordering
                        </span>
                    </div>
                </header>

                {/* 2. THREE CORE SECTION TABS */}
                <div className="flex items-center justify-center gap-2 mb-8 select-none">
                    <button
                        onClick={() => setActiveTab('store')}
                        className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all flex items-center gap-2 shadow-xs active:scale-95 ${
                            activeTab === 'store'
                                ? 'bg-[#A46E19] text-white shadow-md ring-2 ring-amber-300'
                                : 'bg-white text-gray-800 border border-[#E8DAC8] hover:border-amber-400'
                        }`}
                    >
                        <FaShoppingBag size={13} />
                        <span>Salon Boutique Store ({products.length})</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('checklist')}
                        className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all flex items-center gap-2 shadow-xs active:scale-95 ${
                            activeTab === 'checklist'
                                ? 'bg-[#A46E19] text-white shadow-md ring-2 ring-amber-300'
                                : 'bg-white text-gray-800 border border-[#E8DAC8] hover:border-amber-400'
                        }`}
                    >
                        <FaCheckSquare size={13} />
                        <span>Master Shaadi Checklist</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('timeline')}
                        className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all flex items-center gap-2 shadow-xs active:scale-95 ${
                            activeTab === 'timeline'
                                ? 'bg-[#A46E19] text-white shadow-md ring-2 ring-amber-300'
                                : 'bg-white text-gray-800 border border-[#E8DAC8] hover:border-amber-400'
                        }`}
                    >
                        <FaClock size={13} />
                        <span>Shopping Timeline</span>
                    </button>
                </div>

                {/* ============================================================ */}
                {/* TAB 1: SALON & BRIDAL BOUTIQUE STORE (PRODUCTS CATALOG)      */}
                {/* ============================================================ */}
                {activeTab === 'store' && (
                    <div>
                        {/* Search & Category Pills Bar */}
                        <div className="bg-white p-3.5 sm:p-4 rounded-3xl shadow-xs border border-[#E8D9C5] mb-8 sticky top-16 md:top-20 z-20 backdrop-blur-md bg-white/95">
                            {/* Search Input */}
                            <div className="relative mb-3 flex items-center">
                                <FaSearch className="absolute left-4 text-[#A46E19] text-sm pointer-events-none" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search products (e.g. Kanjivaram, Kasavu Saree, Shampoo, Hair Mask, Serum, Facial Kit)..."
                                    className="w-full h-11 sm:h-12 pl-11 pr-10 text-xs sm:text-sm rounded-full border border-[#E8DAC8] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-gray-50/70 transition-all font-medium text-gray-900 placeholder:text-gray-400 shadow-xs"
                                />
                            </div>

                            {/* Store Category Pills */}
                            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth pb-0.5">
                                {storeCategories.map(cat => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setSelectedStoreCategory(cat.id)}
                                        className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-150 shrink-0 flex items-center gap-1.5 ${
                                            selectedStoreCategory === cat.id
                                                ? 'bg-[#A46E19] text-white shadow-sm ring-1 ring-[#A46E19]'
                                                : 'bg-white text-gray-800 hover:border-amber-400 border border-[#E8DAC8]'
                                        }`}
                                    >
                                        <span>{cat.icon}</span>
                                        <span>{cat.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Product Grid */}
                        {filteredProducts.length === 0 ? (
                            <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-[#E8DAC8] p-6">
                                <p className="text-gray-600 text-sm font-medium mb-3">
                                    No products found matching "{searchQuery}".
                                </p>
                                <button
                                    onClick={() => { setSearchQuery(''); setSelectedStoreCategory('all'); }}
                                    className="px-4 py-2 bg-gradient-to-r from-[#B97A1E] to-[#8E580B] text-white text-xs font-bold rounded-full active:scale-95"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-14">
                                {filteredProducts.map((prod) => (
                                    <div
                                        key={prod.id}
                                        className="bg-white rounded-3xl border border-[#E8D9C5] shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group select-none"
                                    >
                                        {/* Product Photo with Badge */}
                                        <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                                            <img
                                                src={prod.image}
                                                alt={prod.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                loading="lazy"
                                            />
                                            {prod.badge && (
                                                <span className="absolute top-2.5 left-2.5 bg-[#4A0A16]/90 backdrop-blur-xs text-amber-300 font-black text-[10px] px-2.5 py-0.5 rounded-full shadow-xs">
                                                    {prod.badge}
                                                </span>
                                            )}
                                            {prod.rating && (
                                                <span className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-xs text-gray-800 font-black text-[10px] px-2 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                                                    <FaStar className="text-amber-500" size={10} />
                                                    <span>{prod.rating}</span>
                                                    <span className="text-gray-400 font-normal">({prod.reviewsCount})</span>
                                                </span>
                                            )}
                                        </div>

                                        {/* Card Body */}
                                        <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                                            <div>
                                                <h3 className="font-serif font-black text-gray-950 text-base leading-snug mb-1">
                                                    {prod.name}
                                                </h3>
                                                <p className="text-gray-600 text-xs line-clamp-2 leading-relaxed mb-3">
                                                    {prod.shortDesc}
                                                </p>

                                                {/* Bullet Highlights */}
                                                {prod.details && prod.details.length > 0 && (
                                                    <div className="space-y-1 mb-3 pt-2 border-t border-gray-100">
                                                        {prod.details.slice(0, 2).map((det, i) => (
                                                            <div key={i} className="flex items-center gap-1.5 text-[11px] text-gray-700 font-medium truncate">
                                                                <FaCheckCircle className="text-[#A46E19] shrink-0 text-[10px]" />
                                                                <span className="truncate">{det}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Price & Action Buttons */}
                                            <div className="pt-3 border-t border-gray-100">
                                                <div className="flex items-baseline gap-2 mb-3">
                                                    <span className="text-lg sm:text-xl font-black text-[#8E580B]">
                                                        {prod.price}
                                                    </span>
                                                    {prod.originalPrice && (
                                                        <span className="text-xs text-gray-400 line-through font-semibold">
                                                            {prod.originalPrice}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="grid grid-cols-2 gap-2">
                                                    {/* Add to Cart Button */}
                                                    <button
                                                        type="button"
                                                        onClick={(e) => handleAddToCart(prod, e)}
                                                        className="py-2.5 px-3 rounded-full bg-[#FAF3E8] hover:bg-[#A46E19] text-[#8E580B] hover:text-white border border-[#E8DAC8] text-xs font-bold flex items-center justify-center gap-1.5 transition active:scale-95 shadow-2xs"
                                                    >
                                                        <FaPlus size={10} />
                                                        <span>Add to Cart</span>
                                                    </button>

                                                    {/* Instant WhatsApp Order Button */}
                                                    <button
                                                        type="button"
                                                        onClick={(e) => handleDirectWhatsAppBuy(prod, e)}
                                                        className="py-2.5 px-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition active:scale-95 shadow-2xs"
                                                    >
                                                        <FaWhatsapp size={13} />
                                                        <span>Buy on WA</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* ============================================================ */}
                {/* TAB 2: MASTER SHAADI CHECKLIST (INTERACTIVE PACKING LIST)    */}
                {/* ============================================================ */}
                {activeTab === 'checklist' && (
                    <div>
                        {/* Progress Bar & WhatsApp Share */}
                        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#E8D9C5] shadow-xs mb-8">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-gray-100">
                                <div>
                                    <span className="text-xs font-black uppercase tracking-wider text-[#A46E19] block">
                                        WEDDING SHOPPING & PACKING PROGRESS
                                    </span>
                                    <div className="flex items-center gap-2.5 mt-1">
                                        <h3 className="font-serif font-black text-xl sm:text-2xl text-[#22160F]">
                                            {checkedCount} of {totalChecklistCount} Items Ready
                                        </h3>
                                        <span className="bg-[#FAF3E8] text-[#8E580B] border border-[#E8DAC8] text-xs font-black px-2.5 py-0.5 rounded-full">
                                            {progressPercent}% Complete
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-end">
                                    <button
                                        onClick={() => handleShareChecklist("Bride's Family")}
                                        className="px-3.5 py-2 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold flex items-center gap-1.5 transition active:scale-95 shadow-xs"
                                    >
                                        <FaWhatsapp className="text-emerald-600" size={13} />
                                        <span>Share with Bride's Family</span>
                                    </button>

                                    <button
                                        onClick={() => handleShareChecklist("Groom's Family")}
                                        className="px-3.5 py-2 rounded-full bg-[#FAF3E8] hover:bg-[#F5ECE0] text-[#8E580B] border border-[#E8DAC8] text-xs font-bold flex items-center gap-1.5 transition active:scale-95 shadow-xs"
                                    >
                                        <FaWhatsapp className="text-[#8E580B]" size={13} />
                                        <span>Share with Groom's Family</span>
                                    </button>

                                    <button
                                        onClick={() => window.print()}
                                        className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition active:scale-95"
                                        title="Print Checklist"
                                    >
                                        <FaPrint size={13} />
                                    </button>

                                    {checkedCount > 0 && (
                                        <button
                                            onClick={resetChecklist}
                                            className="w-9 h-9 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-600 flex items-center justify-center transition active:scale-95"
                                            title="Reset Checklist"
                                        >
                                            <FaUndo size={12} />
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Progress bar */}
                            <div className="w-full bg-gray-100 rounded-full h-2.5 mt-4 overflow-hidden">
                                <div 
                                    className="bg-gradient-to-r from-[#B97A1E] via-[#A86B14] to-emerald-600 h-2.5 rounded-full transition-all duration-500"
                                    style={{ width: `${progressPercent}%` }}
                                />
                            </div>
                        </div>

                        {/* Checklist Sections */}
                        <div className="space-y-6 mb-12">
                            {masterChecklist.map((section, idx) => (
                                <div key={idx} className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E8D9C5] shadow-xs">
                                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
                                        <h3 className="font-serif font-black text-lg sm:text-xl text-[#22160F] flex items-center gap-2">
                                            <span className="w-2 h-4 bg-[#B98327] rounded-full inline-block"></span>
                                            {section.title}
                                        </h3>
                                        <span className="text-xs text-gray-500 font-bold">
                                            {section.items.filter(it => checkedItems[it.id]).length} / {section.items.length} done
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {section.items.map(item => {
                                            const isChecked = !!checkedItems[item.id];
                                            return (
                                                <div
                                                    key={item.id}
                                                    onClick={() => toggleChecklistItem(item.id)}
                                                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                                                        isChecked
                                                            ? 'bg-emerald-50/60 border-emerald-300 text-gray-900 shadow-2xs'
                                                            : 'bg-white hover:bg-amber-50/40 border-gray-200'
                                                    }`}
                                                >
                                                    <div className="mt-0.5 text-lg shrink-0">
                                                        {isChecked ? (
                                                            <FaCheckSquare className="text-emerald-700" />
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

                        <div className="space-y-4 max-w-3xl mx-auto">
                            {shoppingTimeline.map((step, idx) => (
                                <div 
                                    key={idx}
                                    className="p-4 sm:p-5 rounded-2xl bg-[#FAF9F5] border border-[#E8DAC8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:border-amber-400 transition"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-[#4A0A16] text-amber-300 flex items-center justify-center font-serif font-black text-base shrink-0 shadow-xs">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-black text-[#A46E19] uppercase tracking-wider">
                                                    {step.phase}
                                                </span>
                                                <span className="text-[10px] bg-amber-100 text-[#8E580B] font-extrabold px-2 py-0.2 rounded-full">
                                                    {step.badge}
                                                </span>
                                            </div>
                                            <h4 className="font-serif font-black text-sm sm:text-base text-gray-950 mt-0.5">
                                                {step.title}
                                            </h4>
                                        </div>
                                    </div>

                                    <ul className="space-y-1 sm:text-right pl-12 sm:pl-0 text-xs text-gray-600 font-medium">
                                        {step.items.map((it, i) => (
                                            <li key={i} className="flex items-center gap-1.5 sm:justify-end">
                                                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0"></span>
                                                <span>{it}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 4. BRIDAL STYLING & CONSULTATION CALLOUT BANNER */}
                <div className="rounded-3xl p-7 sm:p-10 bg-gradient-to-r from-[#4A0A16] via-[#651020] to-[#4A0A16] text-white text-center shadow-xl border border-[#7D1B2D]">
                    <span className="text-amber-400 font-extrabold uppercase tracking-widest text-[10px] sm:text-xs mb-2 block">
                        EXPERT BRIDAL STYLING & DRAPING
                    </span>
                    <h3 className="font-serif text-2xl sm:text-4xl font-extrabold mb-3 text-white">
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
                            href="https://wa.me/918075340778?text=Hello%20Shobitha%20Haircare,%20I%20would%20like%20guidance%20on%20wedding%20shopping%20and%20bridal%20styling"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3 px-6 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition active:scale-95 shadow-md"
                        >
                            <FaWhatsapp size={14} />
                            <span>WhatsApp Bridal Specialist</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WeddingStore;
