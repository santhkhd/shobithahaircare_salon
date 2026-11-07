import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
    FaWhatsapp, FaCheckSquare, FaRegSquare, FaPrint, FaShareAlt, 
    FaArrowRight, FaCalendarCheck, FaPhoneAlt, FaStar, FaCrown, 
    FaShoppingBag, FaClock, FaCheckCircle, FaUndo, FaSearch, FaInfoCircle
} from 'react-icons/fa';
import LaurelBranch from '../components/LaurelBranch';
import { useBooking } from '../context/BookingContext';
import { 
    weddingCategories, 
    featuredBridalProducts, 
    masterChecklist, 
    shoppingTimeline 
} from '../data/weddingStore';

const WeddingStore = () => {
    const { openBooking } = useBooking();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [checkedItems, setCheckedItems] = useState({});
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        document.title = "Complete Marriage Items List & Bridal Sarees Store | Shobitha Studio Kanhangad";
        window.scrollTo(0, 0);
        try {
            const saved = JSON.parse(localStorage.getItem('shobitha_wedding_checklist') || '{}');
            setCheckedItems(saved);
        } catch (e) {}
    }, []);

    const toggleItem = (id) => {
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

    // Calculate total checklist count and progress
    const allItemsList = useMemo(() => {
        const list = [];
        masterChecklist.forEach(section => {
            section.items.forEach(item => list.push({ ...item, category: section.category }));
        });
        return list;
    }, []);

    const totalCount = allItemsList.length;
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    const progressPercent = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0;

    // Filter sections and items
    const filteredSections = useMemo(() => {
        return masterChecklist
            .filter(section => selectedCategory === 'all' || section.category === selectedCategory)
            .map(section => {
                const matchingItems = section.items.filter(item => 
                    !searchQuery.trim() || 
                    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.desc.toLowerCase().includes(searchQuery.toLowerCase())
                );
                return { ...section, items: matchingItems };
            })
            .filter(section => section.items.length > 0);
    }, [selectedCategory, searchQuery]);

    // Share checklist on WhatsApp
    const handleShare = (familyType = 'Both Families') => {
        const text = `🌸 *Wedding Master Shopping & Marriage Items Checklist*\n` +
            `Shobitha Haircare & Bridal Studio, Kanhangad\n\n` +
            `Shared for: *${familyType}*\n` +
            `Current Progress: *${checkedCount}/${totalCount} items completed (${progressPercent}%)*\n\n` +
            `📋 Includes: High Quality Bridal Sarees, Solah Shringar (16 Adornments), Groom's Attire, Vivah Puja Samagri, Function Kits & Trousseau Trays.\n\n` +
            `👉 View & manage live checklist: ${window.location.href}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    };

    const handleProductInquire = (product) => {
        const text = `Hello Shobitha Haircare & Bridal Studio, I am interested in inquiring about *${product.name}* (${product.priceRange}) from your Marriage Store. Please share available silk designs and customization options.`;
        window.open(`https://wa.me/918075340778?text=${encodeURIComponent(text)}`, '_blank');
    };

    const handleItemInquire = (itemName) => {
        const text = `Hello Shobitha Bridal Studio, I need assistance sourcing/booking *${itemName}* for our upcoming wedding.`;
        window.open(`https://wa.me/918075340778?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div className="pt-24 sm:pt-28 pb-20 bg-[#FAF9F5] min-h-screen">
            <div className="container-custom px-4 sm:px-6 max-w-6xl">

                {/* 1. HERO HEADER WITH GOLD LAUREL WREATH BRANCHES */}
                <header className="text-center pt-2 sm:pt-4 pb-6 sm:pb-8">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="w-7 sm:w-10 h-[1.5px] bg-[#B98327]/60"></span>
                        <span className="text-[#A46E19] font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs">
                            MASTER SHAADI CHECKLIST & BRIDAL BOUTIQUE
                        </span>
                        <span className="w-7 sm:w-10 h-[1.5px] bg-[#B98327]/60"></span>
                    </div>

                    <div className="flex items-center justify-center gap-2 sm:gap-6 my-1">
                        <LaurelBranch flip={false} />
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12]">
                            <span className="text-[#22160F] block sm:inline">Complete Marriage </span>
                            <span className="text-[#B98327] block sm:inline">Items Store</span>
                        </h1>
                        <LaurelBranch flip={true} />
                    </div>

                    <p className="text-gray-700 max-w-2xl mx-auto text-xs sm:text-sm font-medium leading-relaxed mt-1 sm:mt-2">
                        Shaadi shopping is where most families lose track. From high-quality silk sarees and the bride's Solah Shringar to groom accessories, Vivah puja samagri, and trousseau trays — here is your master checklist.
                    </p>
                </header>

                {/* 2. INTERACTIVE PROGRESS & SHARING BAR */}
                <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#E8D9C5] shadow-xs mb-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-gray-100">
                        <div>
                            <span className="text-xs font-black uppercase tracking-wider text-[#A46E19] block">
                                YOUR WEDDING PACKING & SHOPPING PROGRESS
                            </span>
                            <div className="flex items-center gap-2.5 mt-1">
                                <h3 className="font-serif font-black text-xl sm:text-2xl text-[#22160F]">
                                    {checkedCount} of {totalCount} Items Packed & Ready
                                </h3>
                                <span className="bg-[#FAF3E8] text-[#8E580B] border border-[#E8DAC8] text-xs font-black px-2.5 py-0.5 rounded-full">
                                    {progressPercent}% Complete
                                </span>
                            </div>
                        </div>

                        {/* Action Buttons: WhatsApp Share & Print */}
                        <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-end">
                            <button
                                onClick={() => handleShare("Bride's Family")}
                                className="px-3.5 py-2 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold flex items-center gap-1.5 transition active:scale-95 shadow-xs"
                                title="Share with Bride's Family"
                            >
                                <FaWhatsapp className="text-emerald-600" size={13} />
                                <span>Share with Bride's Family</span>
                            </button>

                            <button
                                onClick={() => handleShare("Groom's Family")}
                                className="px-3.5 py-2 rounded-full bg-[#FAF3E8] hover:bg-[#F5ECE0] text-[#8E580B] border border-[#E8DAC8] text-xs font-bold flex items-center gap-1.5 transition active:scale-95 shadow-xs"
                                title="Share with Groom's Family"
                            >
                                <FaWhatsapp className="text-[#8E580B]" size={13} />
                                <span>Groom's List</span>
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

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-100 rounded-full h-2.5 mt-4 overflow-hidden">
                        <div 
                            className="bg-gradient-to-r from-[#B97A1E] via-[#A86B14] to-emerald-600 h-2.5 rounded-full transition-all duration-500"
                            style={{ width: `${progressPercent}%` }}
                        />
                    </div>
                </div>

                {/* 3. FEATURED BRIDAL SAREES & BOUTIQUE PRODUCTS */}
                <section className="mb-12">
                    <div className="text-center mb-6">
                        <span className="text-[#A46E19] font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs block mb-1">
                            HANDCRAFTED BRIDAL COLLECTION
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#22160F]">
                            High Quality Bridal Sarees & Trousseau Trays
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto mt-1">
                            Curated certified silks and bespoke presentation hampers ready for your wedding ceremonies.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                        {featuredBridalProducts.map((prod) => (
                            <div 
                                key={prod.id}
                                className="bg-white rounded-3xl border border-[#E8D9C5] shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
                            >
                                <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-stone-100">
                                    <img 
                                        src={prod.image}
                                        alt={prod.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <span className="absolute top-2.5 left-2.5 bg-[#4A0A16]/90 backdrop-blur-xs text-amber-300 font-black text-[10px] px-2.5 py-0.5 rounded-full shadow-xs">
                                        {prod.badge}
                                    </span>
                                </div>

                                <div className="p-4 flex flex-col justify-between flex-1">
                                    <div>
                                        <h3 className="font-serif font-extrabold text-gray-950 text-sm sm:text-base leading-snug mb-1">
                                            {prod.name}
                                        </h3>
                                        <p className="text-gray-600 text-xs line-clamp-2 mb-2.5">
                                            {prod.description}
                                        </p>
                                        <div className="space-y-1 mb-3">
                                            {prod.includes.slice(0, 2).map((feat, idx) => (
                                                <div key={idx} className="flex items-center gap-1.5 text-[11px] text-gray-700 font-medium">
                                                    <FaCheckCircle className="text-[#A46E19] shrink-0 text-[10px]" />
                                                    <span className="truncate">{feat}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                                        <div>
                                            <span className="text-[10px] text-gray-500 font-bold block uppercase leading-none">Est. Range</span>
                                            <span className="text-xs sm:text-sm font-black text-[#8E580B]">{prod.priceRange}</span>
                                        </div>
                                        <button
                                            onClick={() => handleProductInquire(prod)}
                                            className="px-3 py-1.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold flex items-center gap-1 shadow-xs active:scale-95 transition"
                                        >
                                            <FaWhatsapp size={12} />
                                            <span>Inquire</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. SEARCH & CATEGORY FILTER PILLS */}
                <div className="mb-6 bg-white p-3.5 sm:p-4 rounded-3xl shadow-xs border border-[#E8D9C5] sticky top-16 md:top-20 z-20 backdrop-blur-md bg-white/95">
                    {/* Search Input */}
                    <div className="relative mb-3 flex items-center">
                        <FaSearch className="absolute left-4 text-[#A46E19] text-sm pointer-events-none" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search wedding items (e.g. Saree, Sindoor, Sherwani, Kalash, Mauli, Juttis)..."
                            className="w-full h-11 sm:h-12 pl-11 pr-10 text-xs sm:text-sm rounded-full border border-[#E8DAC8] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-gray-50/70 transition-all font-medium text-gray-900 placeholder:text-gray-400 shadow-xs"
                        />
                    </div>

                    {/* Category Scroll Pills */}
                    <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth pb-0.5">
                        {weddingCategories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-150 shrink-0 flex items-center gap-1.5 ${
                                    selectedCategory === cat.id
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

                {/* 5. MASTER CHECKLIST SECTIONS */}
                {selectedCategory !== 'timeline' && (
                    <div className="space-y-6 mb-12">
                        {filteredSections.map((section, idx) => (
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
                                                onClick={() => toggleItem(item.id)}
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
                                                <button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleItemInquire(item.name);
                                                    }}
                                                    className="shrink-0 p-1.5 text-emerald-700 hover:text-emerald-800 hover:bg-emerald-100 rounded-lg transition"
                                                    title={`Ask Shobitha team about ${item.name}`}
                                                >
                                                    <FaWhatsapp size={14} />
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* 6. WHEN TO BUY WHAT: SHAADI SHOPPING TIMELINE */}
                {(selectedCategory === 'all' || selectedCategory === 'timeline') && (
                    <section className="mb-14 bg-white p-6 sm:p-9 rounded-3xl border border-[#E8D9C5] shadow-xs">
                        <div className="text-center mb-8">
                            <span className="text-[#A46E19] font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs block mb-1">
                                STRATEGIC PLANNING ROADMAP
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#22160F]">
                                When to Buy What: Shaadi Shopping Timeline
                            </h2>
                            <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto mt-1">
                                Avoid last-minute panic. Follow this timeline to order outfits, gold jewelry, and samagri at the right time.
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
                    </section>
                )}

                {/* 7. WEDDING STYLING & BRIDAL CONSULTATION CALLOUT */}
                <div className="rounded-3xl p-7 sm:p-10 bg-gradient-to-r from-[#4A0A16] via-[#651020] to-[#4A0A16] text-white text-center shadow-xl border border-[#7D1B2D]">
                    <span className="text-amber-400 font-extrabold uppercase tracking-widest text-[10px] sm:text-xs mb-2 block">
                        EXPERT BRIDAL STYLING & DRAPING
                    </span>
                    <h3 className="font-serif text-2xl sm:text-4xl font-extrabold mb-3 text-white">
                        Need Help Sourcing or Styling Your Wedding Look?
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-100/90 max-w-xl mx-auto mb-6 leading-relaxed">
                        Our Kanhangad bridal artists provide complete wedding assistance: Muhurtham saree draping, Solah Shringar styling, floral jewellery setting, and HD bridal makeovers.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button
                            onClick={() => openBooking({ name: 'Bridal Makeover & Styling', category: 'Bridal' })}
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
