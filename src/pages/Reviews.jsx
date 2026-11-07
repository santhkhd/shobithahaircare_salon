import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { reviews } from '../data/reviews';
import { 
    FaStar, FaCrown, FaCut, FaSpa, FaCommentDots, 
    FaCheckCircle, FaCalendarAlt, FaEllipsisV, FaArrowRight 
} from 'react-icons/fa';

// Google Official 4-Color 'G' Icon
const GoogleIcon = ({ className = "w-4 h-4 shrink-0" }) => (
    <svg className={className} viewBox="0 0 24 24">
        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.97 0 12s.45 3.83 1.25 5.42l4.03-3.15z"/>
        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
    </svg>
);

// Elegant Golden Laurel Branch for Header
const LaurelBranch = ({ flip = false, className = "w-8 sm:w-14 h-16 sm:h-24 text-amber-600/70 shrink-0" }) => (
    <svg
        viewBox="0 0 50 100"
        fill="currentColor"
        className={`${className} ${flip ? 'scale-x-[-1]' : ''}`}
        aria-hidden="true"
    >
        <path d="M25 95 C25 70, 30 35, 15 10 C18 18, 22 28, 24 40 C26 55, 25 75, 25 95 Z" opacity="0.6"/>
        <path d="M15 10 C22 15, 26 25, 23 35 C20 35, 14 25, 15 10 Z"/>
        <path d="M24 30 C34 32, 42 42, 38 52 C33 50, 26 42, 24 30 Z"/>
        <path d="M12 32 C5 36, 2 48, 8 56 C12 52, 16 42, 12 32 Z"/>
        <path d="M25 50 C36 53, 44 64, 40 74 C34 72, 27 63, 25 50 Z"/>
        <path d="M10 52 C2 58, 1 70, 7 78 C12 73, 15 63, 10 52 Z"/>
        <path d="M24 70 C33 74, 40 85, 36 93 C30 91, 25 82, 24 70 Z"/>
        <path d="M12 72 C5 78, 4 88, 10 95 C14 90, 16 81, 12 72 Z"/>
    </svg>
);

// Golden Trust Seal Medallion matching reference
const TrustMedallion = () => (
    <div className="flex flex-col items-center justify-center p-2 text-center select-none">
        {/* Crown */}
        <FaCrown className="text-amber-600 text-lg sm:text-xl mb-1 drop-shadow-xs" />
        
        {/* Wreath circle enclosure */}
        <div className="relative flex items-center justify-center px-2">
            <svg viewBox="0 0 160 100" className="w-36 sm:w-44 h-auto text-amber-600/75 fill-current">
                <path d="M75 92 C55 90, 25 75, 20 45 C18 35, 22 25, 28 15 C26 25, 28 35, 34 45 C42 60, 58 75, 75 80 Z" opacity="0.35"/>
                <path d="M28 15 C33 22, 30 30, 23 32 C18 28, 20 18, 28 15 Z"/>
                <path d="M20 38 C28 42, 28 52, 20 56 C14 50, 14 40, 20 38 Z"/>
                <path d="M26 60 C36 64, 38 74, 30 80 C22 76, 20 64, 26 60 Z"/>
                <path d="M42 78 C54 80, 56 90, 48 94 C38 92, 36 82, 42 78 Z"/>
                <path d="M85 92 C105 90, 135 75, 140 45 C142 35, 138 25, 132 15 C134 25, 132 35, 126 45 C118 60, 102 75, 85 80 Z" opacity="0.35"/>
                <path d="M132 15 C127 22, 130 30, 137 32 C142 28, 140 18, 132 15 Z"/>
                <path d="M140 38 C132 42, 132 52, 140 56 C146 50, 146 40, 140 38 Z"/>
                <path d="M134 60 C124 64, 122 74, 130 80 C138 76, 140 64, 134 60 Z"/>
                <path d="M118 78 C106 80, 104 90, 112 94 C122 92, 124 82, 118 78 Z"/>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center pt-1.5">
                <span className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                    Trusted by
                </span>
                <span className="text-xl sm:text-2xl font-black font-serif text-[#2A180E] leading-tight">
                    278+
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-gray-700 leading-tight">
                    Happy Clients
                </span>
            </div>
        </div>

        {/* Golden Bow */}
        <div className="mt-0.5 text-amber-600 text-sm">
            🎗️
        </div>
    </div>
);

const ratingBreakdown = [
    { stars: 5, percentage: 94, width: '94%' },
    { stars: 4, percentage: 4, width: '4%' },
    { stars: 3, percentage: 1, width: '1%' },
    { stars: 2, percentage: '<1%', width: '1%' },
    { stars: 1, percentage: '<1%', width: '1%' }
];

const Reviews = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    useEffect(() => {
        document.title = "Verified Client Stories & Reviews | Shobitha Haircare Kanhangad";
    }, []);

    const filterTabs = [
        { name: 'All', label: 'All Reviews (278)', icon: FaCommentDots },
        { name: 'Bridal', label: 'Bridal (128)', icon: FaCrown },
        { name: 'Haircare', label: 'Haircare (72)', icon: FaCut },
        { name: 'Facial', label: 'Facial (46)', icon: FaSpa }
    ];

    const filteredReviews = activeCategory === 'All'
        ? reviews
        : reviews.filter(r => r.category === activeCategory);

    return (
        <div className="pt-24 sm:pt-28 pb-20 bg-[#FAF9F5] min-h-screen">
            <div className="container-custom px-4 sm:px-6 max-w-4xl">

                {/* 1. HERO TITLE SECTION WITH LAUREL WREATHS */}
                <section className="text-center pt-2 sm:pt-4 pb-6 sm:pb-7">
                    {/* Eyebrow with Lines */}
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="w-7 sm:w-10 h-[1.5px] bg-[#B98327]/60"></span>
                        <span className="text-[#A46E19] font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs">
                            VERIFIED CLIENT STORIES
                        </span>
                        <span className="w-7 sm:w-10 h-[1.5px] bg-[#B98327]/60"></span>
                    </div>

                    {/* Flanked Title with Laurel Branches */}
                    <div className="flex items-center justify-center gap-2 sm:gap-6 my-1">
                        <LaurelBranch flip={false} />
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12]">
                            <span className="text-[#22160F] block sm:inline">Client Love & </span>
                            <span className="text-[#B98327] block sm:inline">Reviews</span>
                        </h1>
                        <LaurelBranch flip={true} />
                    </div>

                    {/* Subtitle */}
                    <p className="text-gray-700 max-w-sm sm:max-w-md mx-auto text-xs sm:text-sm font-medium leading-relaxed mt-1 sm:mt-2">
                        With hundreds of smiling brides and regular clients in Kanhangad, here is what they have to say about our salon experience.
                    </p>
                </section>

                {/* 2. HERO RATING BANNER (DEEP MAROON / BURGUNDY LUXURY CARD) */}
                <div className="rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-lg border border-[#7D1B2D]/80 bg-gradient-to-r from-[#4A0A16] via-[#5C101F] to-[#4A0A16] text-white flex items-center justify-around text-center mb-4">
                    {/* Left: 4.9 Rating */}
                    <div className="flex-1 flex flex-col items-center">
                        <div className="text-4xl sm:text-5xl font-black font-sans tracking-tight leading-none text-white">
                            4.9
                        </div>
                        <div className="flex items-center justify-center gap-1 text-amber-400 my-1.5 text-base sm:text-lg">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} />
                            ))}
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-amber-100/90 leading-tight">
                            Average Client Rating
                        </span>
                    </div>

                    {/* Vertical Divider Line */}
                    <div className="w-[1px] h-14 sm:h-16 bg-white/20 mx-2" />

                    {/* Right: 278+ Google Reviews */}
                    <div className="flex-1 flex flex-col items-center">
                        <div className="text-4xl sm:text-5xl font-black font-sans tracking-tight leading-none text-white">
                            278+
                        </div>
                        <div className="flex items-center justify-center gap-1.5 my-1.5 text-sm sm:text-base font-bold text-white">
                            <GoogleIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>Google Reviews</span>
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-amber-100/90 leading-tight">
                            Verified on Google Maps
                        </span>
                    </div>
                </div>

                {/* 3. GOLDEN PILL BUTTON: "+ Leave a Google Review →" */}
                <div className="text-center mb-6">
                    <a
                        href="https://g.page/r/CQ00DAVEaP9-EAE/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full max-w-sm mx-auto py-2.5 sm:py-3 px-6 rounded-full bg-gradient-to-r from-[#B97A1E] via-[#A66C15] to-[#8E580B] hover:from-[#A66C15] hover:to-[#7E4C07] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all"
                    >
                        <span className="w-5 h-5 rounded-full bg-white text-amber-800 font-black text-xs flex items-center justify-center leading-none">
                            G
                        </span>
                        <span>+ Leave a Google Review</span>
                        <FaArrowRight size={10} />
                    </a>
                </div>

                {/* 4. CLIENT RATINGS OVERVIEW CARD WITH TRUST SEAL */}
                <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-amber-200/80 shadow-xs mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center">
                        {/* Left Side: 5-Star Breakdown */}
                        <div className="sm:col-span-7">
                            <h3 className="font-bold text-gray-950 text-sm sm:text-base mb-3 flex items-center gap-2">
                                Client Ratings Overview
                            </h3>

                            <div className="space-y-2">
                                {ratingBreakdown.map((row) => (
                                    <div key={row.stars} className="flex items-center gap-2.5 text-xs text-gray-700 font-semibold">
                                        <div className="flex items-center gap-1 w-7 shrink-0">
                                            <span>{row.stars}</span>
                                            <FaStar className="text-amber-500 text-[10px]" />
                                        </div>
                                        <div className="flex-1 h-2 sm:h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-[#C28C1A] to-[#A36E19] rounded-full"
                                                style={{ width: row.width }}
                                            />
                                        </div>
                                        <span className="w-8 text-right text-[11px] text-gray-500 font-bold shrink-0">
                                            {row.percentage}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Golden Trust Medallion */}
                        <div className="sm:col-span-5 border-t sm:border-t-0 sm:border-l border-amber-100 pt-4 sm:pt-0 flex items-center justify-center">
                            <TrustMedallion />
                        </div>
                    </div>
                </div>

                {/* 5. HORIZONTAL CATEGORY FILTER PILLS */}
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-5 touch-scroll">
                    {filterTabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeCategory === tab.name;

                        return (
                            <button
                                key={tab.name}
                                onClick={() => setActiveCategory(tab.name)}
                                className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition-all duration-200 shrink-0 active:scale-95 ${
                                    isActive
                                        ? 'bg-[#A46E19] text-white shadow-sm ring-1 ring-[#A46E19]'
                                        : 'bg-white border border-[#E8DAC8] text-gray-800 hover:bg-[#FAF3E8]'
                                }`}
                            >
                                <Icon className={`text-xs ${isActive ? 'text-white' : 'text-[#A46E19]'}`} />
                                <span>{tab.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* 6. INDIVIDUAL REVIEW CARDS */}
                <div className="space-y-3.5 sm:space-y-4">
                    <AnimatePresence mode="popLayout">
                        {filteredReviews.map((rev) => (
                            <motion.div
                                key={rev.id}
                                layout
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="bg-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-gray-200/90 shadow-xs hover:shadow-md transition-all relative overflow-hidden"
                            >
                                {/* Giant Faint Quotation Mark Watermark on Right */}
                                <div className="absolute top-2 right-4 text-[#F0E6D5]/70 font-serif text-5xl sm:text-6xl select-none pointer-events-none leading-none">
                                    “
                                </div>

                                {/* Reviewer Header */}
                                <div className="flex items-center gap-3 relative z-10">
                                    <img
                                        src={rev.image}
                                        alt={rev.name}
                                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-amber-300 shrink-0"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-bold text-gray-950 text-sm sm:text-base leading-tight truncate">
                                            {rev.name}
                                        </h4>
                                        <div className="flex items-center gap-2 mt-1">
                                            <div className="flex items-center gap-0.5 text-amber-500 text-xs">
                                                {[...Array(rev.rating || 5)].map((_, i) => (
                                                    <FaStar key={i} />
                                                ))}
                                            </div>
                                            <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                                                <FaCheckCircle size={9} className="text-amber-700" />
                                                <span>Verified Client</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Review Quote Body */}
                                <p className="text-gray-800 text-xs sm:text-sm italic font-medium leading-relaxed my-3 relative z-10 pl-1">
                                    "{rev.text}"
                                </p>

                                {/* Review Footer */}
                                <div className="flex items-center justify-between pt-2.5 border-t border-gray-100 text-xs text-gray-600 relative z-10">
                                    <div className="flex items-center gap-1.5 text-gray-500 font-semibold text-[11px] sm:text-xs">
                                        <FaCalendarAlt size={10} className="text-gray-400" />
                                        <span>{rev.date}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1 text-gray-700 font-bold text-[11px] sm:text-xs">
                                            <GoogleIcon className="w-3.5 h-3.5" />
                                            <span>Google Review</span>
                                        </div>
                                        <button
                                            type="button"
                                            className="text-gray-400 hover:text-gray-600 p-1"
                                            title="Review options"
                                            aria-label="Options"
                                        >
                                            <FaEllipsisV size={11} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
