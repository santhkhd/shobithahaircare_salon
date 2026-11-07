import React, { useState, useEffect, useMemo } from 'react';
import { services, bridalPackages } from '../data/services';
import { 
    FaWhatsapp, FaInfoCircle, FaCalendarCheck, FaSearch, 
    FaTimes, FaClock, FaCheckCircle, FaStar, FaArrowRight 
} from 'react-icons/fa';
import { useBooking } from '../context/BookingContext';
import { getDiscountDetails } from '../utils/pricing';
import LaurelBranch from '../components/LaurelBranch';

const Pricing = () => {
    const { openBooking } = useBooking();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        document.title = "Salon Price List & Bridal Packages | Shobitha Haircare Kanhangad";
    }, []);

    // Filter out hidden services
    const activeCatalog = useMemo(() => services.filter(s => !s.hidden), []);

    const filteredServices = useMemo(() => {
        return activeCatalog.filter(service => {
            const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
            const matchesSearch = !searchQuery.trim() || 
                service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (service.description && service.description.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [activeCatalog, searchQuery, selectedCategory]);

    // Group filtered services by category
    const groupedServices = useMemo(() => {
        return filteredServices.reduce((acc, service) => {
            if (!acc[service.category]) acc[service.category] = [];
            acc[service.category].push(service);
            return acc;
        }, {});
    }, [filteredServices]);

    // Available categories with counts
    const categoryCounts = useMemo(() => {
        const counts = { All: activeCatalog.length };
        activeCatalog.forEach(s => {
            counts[s.category] = (counts[s.category] || 0) + 1;
        });
        return counts;
    }, [activeCatalog]);

    const categoriesList = useMemo(() => {
        const unique = [...new Set(services.map(s => s.category))];
        return ['All', ...unique];
    }, []);

    return (
        <div className="pt-24 sm:pt-28 pb-20 bg-[#FAF9F5] min-h-screen">
            {/* 1. HERO TITLE SECTION WITH GOLD LAUREL WREATH BRANCHES */}
            <section className="text-center pt-2 sm:pt-4 pb-6 sm:pb-8">
                {/* Top Eyebrow with Lines */}
                <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="w-7 sm:w-10 h-[1.5px] bg-[#B98327]/60"></span>
                    <span className="text-[#A46E19] font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs">
                        COMPLETE SALON MENU & PRICING
                    </span>
                    <span className="w-7 sm:w-10 h-[1.5px] bg-[#B98327]/60"></span>
                </div>

                {/* Flanked Title with Laurel Branches */}
                <div className="flex items-center justify-center gap-2 sm:gap-6 my-1">
                    <LaurelBranch flip={false} />
                    <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12]">
                        <span className="text-[#22160F] block sm:inline">Transparent </span>
                        <span className="text-[#B98327] block sm:inline">Price List</span>
                    </h1>
                    <LaurelBranch flip={true} />
                </div>

                {/* Subtitle */}
                <p className="text-gray-700 max-w-sm sm:max-w-md mx-auto text-xs sm:text-sm font-medium leading-relaxed mt-1 sm:mt-2">
                    Honest, upfront pricing for 172+ certified salon services and luxury bridal makeover packages. Zero hidden charges.
                </p>
            </section>

            <div className="container-custom px-4 sm:px-6 max-w-6xl">
                {/* 2. Bridal Packages (Top Highlight) */}
                <div className="mb-10 sm:mb-14">
                    <div className="text-center mb-5 sm:mb-8">
                        <span className="text-[#A46E19] font-extrabold tracking-wider uppercase text-[10px] sm:text-xs mb-1 block">
                            ALL-INCLUSIVE WEDDING PLANS
                        </span>
                        <h2 className="text-xl sm:text-3xl font-serif font-extrabold text-[#22160F]">
                            Signature Bridal Packages
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                        {bridalPackages.map((pkg, idx) => (
                            <div
                                key={pkg.id}
                                className={`bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xs border transition-all duration-300 flex flex-col justify-between ${
                                    idx === 1
                                        ? 'border-[#B98327] ring-2 ring-[#B98327]/30 shadow-md relative'
                                        : 'border-[#E8D9C5] hover:border-amber-400'
                                }`}
                            >
                                {idx === 1 && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#B97A1E] to-[#8E580B] text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                                        <FaStar size={9} /> Most Popular
                                    </span>
                                )}

                                <div>
                                    <div className="flex items-start justify-between gap-2 mb-1">
                                        <h3 className="text-lg sm:text-xl font-serif font-extrabold text-[#22160F]">
                                            {pkg.name}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 text-xs font-medium mb-3">{pkg.description}</p>
                                    <div className="text-2xl sm:text-3xl font-black text-[#8E580B] mb-4">
                                        {pkg.price}
                                    </div>

                                    <ul className="space-y-2 mb-6">
                                        {pkg.includes.map((item, i) => (
                                            <li key={i} className="text-gray-800 text-xs font-medium flex items-start gap-2">
                                                <FaCheckCircle className="text-[#A46E19] text-[11px] shrink-0 mt-0.5" />
                                                <span className="leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button
                                    onClick={() => openBooking(pkg)}
                                    className={`w-full py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 ${
                                        idx === 1
                                            ? 'bg-gradient-to-r from-[#B97A1E] via-[#A86B14] to-[#8E580B] text-white shadow-md'
                                            : 'bg-[#FAF3E8] text-[#8E580B] hover:bg-[#A46E19] hover:text-white border border-[#E8DAC8]'
                                    }`}
                                >
                                    <FaCalendarCheck size={12} /> Book Package
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Interactive Search & Category Filter Pills */}
                <div className="mb-6 bg-white p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl shadow-xs border border-[#E8D9C5] sticky top-16 md:top-20 z-20 backdrop-blur-md bg-white/95">
                    {/* Search Bar */}
                    <div className="relative mb-3 flex items-center">
                        <FaSearch className="absolute left-4 text-[#A46E19] text-sm pointer-events-none" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search prices (e.g. Haircut, Spa, Keratin, Facial, Waxing)..."
                            className="w-full h-11 sm:h-12 pl-11 pr-10 text-xs sm:text-sm rounded-full border border-[#E8DAC8] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-gray-50/70 transition-all font-medium text-gray-900 placeholder:text-gray-400 shadow-xs"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                                title="Clear search"
                            >
                                <FaTimes size={12} />
                            </button>
                        )}
                    </div>

                    {/* Standardized Category Scroll Pills */}
                    <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth pb-0.5">
                        {categoriesList.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-150 shrink-0 flex items-center gap-1.5 ${
                                    selectedCategory === cat
                                        ? 'bg-[#A46E19] text-white shadow-sm ring-1 ring-[#A46E19]'
                                        : 'bg-white text-gray-800 hover:border-amber-400 border border-[#E8DAC8]'
                                }`}
                            >
                                <span>{cat}</span>
                                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                                    selectedCategory === cat ? 'bg-white/20 text-white' : 'bg-[#FAF3E8] text-[#8E580B]'
                                }`}>
                                    {categoryCounts[cat] || 0}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* 4. Single-Column Grouped Price List Items */}
                {Object.keys(groupedServices).length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-3xl border border-dashed border-[#E8DAC8] p-6">
                        <p className="text-gray-600 text-sm font-medium mb-3">
                            No prices found matching "{searchQuery}".
                        </p>
                        <button
                            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                            className="px-4 py-2 bg-gradient-to-r from-[#B97A1E] to-[#8E580B] text-white text-xs font-bold rounded-full active:scale-95"
                        >
                            Reset Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 mb-12">
                        {Object.entries(groupedServices).map(([category, items]) => (
                            <div key={category} className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-[#E8D9C5]">
                                {/* Category Header */}
                                <div className="bg-gradient-to-r from-[#FAF3E8] via-[#FAF3E8]/70 to-white px-4 sm:px-5 py-3.5 border-b border-[#E8D9C5] flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-4 bg-[#B98327] rounded-full"></span>
                                        <h3 className="font-serif font-extrabold text-[#22160F] text-base sm:text-lg">
                                            {category}
                                        </h3>
                                    </div>
                                    <span className="text-xs font-bold text-[#8E580B] bg-[#FAF3E8] px-2.5 py-0.5 rounded-full border border-[#E8DAC8]">
                                        {items.length} {items.length === 1 ? 'service' : 'services'}
                                    </span>
                                </div>

                                {/* Compact Price Items List */}
                                <div className="divide-y divide-gray-100">
                                    {items.map((item) => {
                                        const discount = getDiscountDetails(item.price, item.offerPrice);
                                        return (
                                            <div
                                                key={item.id}
                                                className="py-3 px-3.5 sm:px-5 flex items-center justify-between gap-3 hover:bg-amber-50/40 transition-colors"
                                            >
                                                {/* Left: Service Name & Duration */}
                                                <div className="flex-1 min-w-0 pr-1">
                                                    <div className="font-bold text-gray-950 text-sm sm:text-base leading-snug truncate">
                                                        {item.name}
                                                    </div>
                                                    <div className="flex items-center gap-2 mt-1 text-xs text-gray-500 font-semibold">
                                                        <span className="flex items-center gap-1">
                                                            <FaClock className="text-[#A46E19] text-xs" />
                                                            {item.duration}
                                                        </span>
                                                        {discount.hasDiscount && (
                                                            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-1.5 py-0.2 rounded-md">
                                                                {discount.discountPercent ? `${discount.discountPercent}% OFF` : 'Special Offer'}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Right: Price & Quick Book Button */}
                                                <div className="flex items-center gap-2.5 shrink-0">
                                                    <div className="text-right">
                                                        {discount.hasDiscount ? (
                                                            <>
                                                                <div className="text-[11px] text-gray-400 line-through font-semibold leading-none">
                                                                    {discount.originalPrice}
                                                                </div>
                                                                <div className="text-base sm:text-lg font-black text-[#8E580B] leading-tight">
                                                                    {discount.displayPrice}
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <div className="text-base sm:text-lg font-black text-[#8E580B]">
                                                                {item.price}
                                                            </div>
                                                        )}
                                                    </div>

                                                    <button
                                                        onClick={() => openBooking(item)}
                                                        className="px-3 py-1.5 rounded-full bg-[#FAF3E8] hover:bg-[#A46E19] text-[#8E580B] hover:text-white border border-[#E8DAC8] text-xs font-bold transition-colors active:scale-95"
                                                    >
                                                        Book
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* 5. Custom Quote WhatsApp Banner */}
                <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#4A0A16] via-[#651020] to-[#4A0A16] text-white text-center shadow-xl border border-[#7D1B2D]">
                    <h3 className="font-serif text-xl sm:text-3xl font-extrabold mb-2 text-white">
                        Need a Customized Salon or Bridal Quote?
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-100/90 max-w-lg mx-auto mb-5 leading-relaxed">
                        Message our team directly on WhatsApp with your preferred services, and we will send you a tailored estimate.
                    </p>
                    <a
                        href="https://wa.me/918075340778?text=Hello%20Shobitha%20Haircare,%20I%20would%20like%20a%20price%20quote%20for%20salon%20services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm shadow-md active:scale-95 transition"
                    >
                        <FaWhatsapp size={16} />
                        <span>Chat with Us on WhatsApp</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
