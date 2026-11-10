import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services, categories, fallbackMap } from '../data/services';
import { useBooking } from '../context/BookingContext';
import { Link, useLocation } from 'react-router-dom';
import { 
    FaSearch, FaRegClock, FaTag, FaArrowRight, FaCalendarCheck, 
    FaCut, FaSpa, FaMagic, FaPaintBrush, FaThLarge, 
    FaRegHeart, FaHeart, FaChevronRight, FaPhoneAlt, FaWhatsapp, FaTimes 
} from 'react-icons/fa';
import { getDiscountDetails } from '../utils/pricing';
import { useSiteSettings } from '../context/SiteSettingsContext';
import Logo from '../components/Logo';

import heroBride from '../assets/images/hero-kerala-bride.jpg';
import bridalBannerBride from '../assets/images/bridal-banner-bride.jpg';
import bridalMuhurtham from '../assets/images/bridal-muhurtham.jpg';
import hairTreatment from '../assets/images/hair-treatment.jpg';
import skinFacial from '../assets/images/skin-facial.jpg';

const categoryMeta = [
    { name: 'All', label: 'All', icon: FaThLarge },
    { name: 'Favorites', label: 'Favorites', icon: FaHeart },
    { name: 'Haircuts & Styling', label: 'Haircuts', icon: FaCut },
    { name: 'Hair Spa & Hair Treatments', label: 'Hair Spa', icon: FaSpa },
    { name: 'Facial & Skincare', label: 'Facial', icon: FaSpa },
    { name: 'Bridal Makeup & Special Occasion Makeup', label: 'Makeup', icon: FaPaintBrush },
    { name: 'Hair Colour & Highlights', label: 'Colour', icon: FaMagic },
    { name: 'Smoothening & Chemical Hair Services', label: 'Chemical', icon: FaMagic },
    { name: 'Threading & Face Grooming', label: 'Threading', icon: FaCut },
    { name: 'Waxing', label: 'Waxing', icon: FaSpa },
    { name: 'Manicure, Pedicure & Nail Care', label: 'Nails', icon: FaSpa },
    { name: 'Body Care & Relaxation', label: 'Body Spa', icon: FaSpa },
    { name: 'Mehndi & Traditional Beauty', label: 'Mehndi', icon: FaPaintBrush },
    { name: 'Salon Packages & Combos', label: 'Packages', icon: FaTag }
];

const carouselSlides = [
    {
        titleLine1: 'Bridal Makeup',
        titleLine2: 'Packages',
        subtitle: 'Elegant • Traditional • HD Makeup',
        image: bridalBannerBride,
        route: '/bridal',
        buttonText: 'Book Now'
    },
    {
        titleLine1: 'Signature Hair',
        titleLine2: 'Treatments',
        subtitle: 'Keratin • Hair Botox • Deep Repair',
        image: hairTreatment,
        route: '/services',
        buttonText: 'Book Now'
    },
    {
        titleLine1: 'O3+ & Gold Radiance',
        titleLine2: 'Facials',
        subtitle: 'De-Tan • Skin Polish • Glass Glow',
        image: skinFacial,
        route: '/services',
        buttonText: 'Book Now'
    },
    {
        titleLine1: 'Muhurtham Bridal',
        titleLine2: 'Makeovers',
        subtitle: 'Saree Draping • Mehndi • Hair Styling',
        image: bridalMuhurtham,
        route: '/bridal',
        buttonText: 'Book Now'
    }
];

const Services = () => {
    const { brandingSettings } = useSiteSettings();
    const showWatermarkLogo = Boolean(brandingSettings?.showWatermarkLogo);
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [favorites, setFavorites] = useState({});
    const [activeSlide, setActiveSlide] = useState(0);
    const { openBooking } = useBooking();
    const scrollContainerRef = useRef(null);

    // Auto-advance carousel every 4 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    // Listen to URL query params (e.g. /services?category=Favorites or /services?q=cut)
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const cat = params.get('category') || params.get('tab');
        if (cat === 'Favorites' || cat === 'favorites' || params.get('favorites') === 'true') {
            setActiveCategory('Favorites');
        } else if (cat) {
            setActiveCategory(cat);
        }
        if (params.get('q')) {
            setSearchTerm(params.get('q'));
        }
    }, [location.search]);

    // SEO Dynamic Document Title and favorites load
    useEffect(() => {
        document.title = "Salon Services & Bridal Catalogue | Shobitha Haircare Kanhangad";
        const updateFavs = () => {
            try {
                const savedFavs = JSON.parse(localStorage.getItem('shobitha_favorites') || '{}');
                setFavorites(savedFavs);
            } catch (e) {}
        };
        updateFavs();
        window.addEventListener('favorites_updated', updateFavs);
        return () => window.removeEventListener('favorites_updated', updateFavs);
    }, []);

    // Custom Service Images from Admin AI Studio
    const [customImages, setCustomImages] = useState(() => {
        try {
            const raw = JSON.parse(localStorage.getItem('shobitha_custom_service_images') || '{}');
            // Clean up any truncated strings from old sheet sync
            Object.keys(raw).forEach(k => {
                if (raw[k] && typeof raw[k] === 'string' && raw[k].startsWith('data:image/') && (raw[k].length === 45000 || raw[k].length === 50000)) {
                    delete raw[k];
                }
            });
            return raw;
        } catch (e) {
            return {};
        }
    });

    // Re-render when live prices arrive from Google Sheets
    const [, setPriceVersion] = useState(0);

    useEffect(() => {
        const handlePricesUpdate = () => {
            setPriceVersion((v) => v + 1);
        };
        window.addEventListener('prices_updated', handlePricesUpdate);
        return () => window.removeEventListener('prices_updated', handlePricesUpdate);
    }, []);

    useEffect(() => {
        const handleImageUpdate = () => {
            try {
                const raw = JSON.parse(localStorage.getItem('shobitha_custom_service_images') || '{}');
                Object.keys(raw).forEach(k => {
                    if (raw[k] && typeof raw[k] === 'string' && raw[k].startsWith('data:image/') && (raw[k].length === 45000 || raw[k].length === 50000)) {
                        delete raw[k];
                    }
                });
                setCustomImages(raw);
            } catch (e) {}
        };
        window.addEventListener('service_images_updated', handleImageUpdate);
        return () => window.removeEventListener('service_images_updated', handleImageUpdate);
    }, []);

    const toggleFavorite = (id) => {
        setFavorites((prev) => {
            const updated = { ...prev, [id]: !prev[id] };
            try {
                localStorage.setItem('shobitha_favorites', JSON.stringify(updated));
                window.dispatchEvent(new Event('favorites_updated'));
            } catch (e) {}
            return updated;
        });
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 160, behavior: 'smooth' });
        }
    };

    const favoriteCount = Object.values(favorites).filter(Boolean).length;

    const filteredServices = services.filter((service) => {
        if (service.hidden) return false;
        const matchesSearch =
            service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.category.toLowerCase().includes(searchTerm.toLowerCase());
        
        if (activeCategory === 'Favorites') {
            return matchesSearch && favorites[service.id];
        }
        const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const currentSlide = carouselSlides[activeSlide];

    return (
        <div className="pt-24 sm:pt-28 pb-20 md:pb-24 bg-[#FAF8F5] min-h-screen">
            <div className="container-custom px-4 sm:px-6">

                {/* 1. Full-Width Mobile Search Bar */}
                <div className="pt-1 pb-4">
                    <div className="relative w-full flex items-center">
                        <FaSearch className="absolute left-4 text-amber-700/60 text-sm pointer-events-none" />
                        <input
                            type="text"
                            placeholder="Search services (e.g. Haircut, Facial, Bridal...)"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full h-11 sm:h-12 pl-11 pr-10 bg-white rounded-full border border-amber-200/90 shadow-xs focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 font-medium"
                        />
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                className="absolute right-3.5 text-gray-400 hover:text-gray-600 p-1"
                                title="Clear search"
                            >
                                <FaTimes size={12} />
                            </button>
                        )}
                    </div>
                </div>

                {/* 2. Category Story / App-Style Horizontal Tabs - Beautiful Cards */}
                <div className="relative mb-5">
                    <div
                        ref={scrollContainerRef}
                        className="flex items-center gap-2.5 overflow-x-auto py-1 px-0.5 no-scrollbar touch-scroll pr-9"
                    >
                        {categoryMeta.map((catItem) => {
                            const count = catItem.name === 'All'
                                ? services.length
                                : catItem.name === 'Favorites'
                                ? favoriteCount
                                : services.filter((s) => s.category === catItem.name).length;
                            const isActive = activeCategory === catItem.name;
                            const IconComponent = catItem.icon;
                            const isFavTab = catItem.name === 'Favorites';

                            return (
                                <button
                                    key={catItem.name}
                                    onClick={() => setActiveCategory(catItem.name)}
                                    className={`shrink-0 flex flex-col items-center justify-between min-w-[80px] sm:min-w-[88px] h-[78px] sm:h-[84px] p-2 sm:p-2.5 rounded-2xl transition-all duration-200 active:scale-95 ${
                                        isActive
                                            ? isFavTab
                                                ? 'bg-gradient-to-b from-rose-500 via-rose-600 to-rose-700 text-white shadow-md shadow-rose-900/25 border border-rose-400 scale-[1.02]'
                                                : 'bg-gradient-to-b from-[#BD8816] via-[#A8740D] to-[#875B04] text-white shadow-md shadow-amber-950/20 border border-amber-600 scale-[1.02]'
                                            : isFavTab
                                            ? 'bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EC] to-[#F5ECE0] text-gray-900 border border-rose-200 hover:border-rose-300 shadow-xs hover:shadow-sm'
                                            : 'bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EC] to-[#F5ECE0] text-gray-900 border border-[#EADBCA] hover:border-amber-300 shadow-xs hover:shadow-sm'
                                    }`}
                                >
                                    <div className="text-xl sm:text-2xl mt-0.5 flex items-center justify-center">
                                        <IconComponent className={
                                            isActive
                                                ? 'text-white drop-shadow-xs'
                                                : isFavTab
                                                ? 'text-rose-500'
                                                : 'text-[#A07019]'
                                        } />
                                    </div>
                                    <span className={`text-[11px] sm:text-xs font-bold leading-tight whitespace-nowrap ${
                                        isActive ? 'text-white' : 'text-gray-900'
                                    }`}>
                                        {catItem.label}
                                    </span>
                                    <span className={`text-[9.5px] font-semibold leading-none px-2 py-0.5 rounded-full ${
                                        isActive
                                            ? 'bg-white/25 text-white font-bold'
                                            : isFavTab
                                            ? 'bg-rose-50 text-rose-600 font-bold border border-rose-200/60'
                                            : 'bg-[#EFE4D2]/70 text-[#7D5F34] font-bold'
                                    }`}>
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Scroll Right Indicator Button matching Image 2 */}
                    <button
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 border border-amber-200/90 text-amber-800 shadow-md flex items-center justify-center text-xs hover:bg-amber-50 active:scale-90 transition-all z-10"
                        title="Scroll more categories"
                        aria-label="Scroll more categories"
                    >
                        <FaChevronRight size={11} />
                    </button>
                </div>

                {/* 3. Hero Promo Banner Carousel Card - Matching Reference Image */}
                {activeCategory === 'All' && !searchTerm && (
                    <div className="mb-5 sm:mb-6 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-[#E8D9C5] bg-[#FAF3E8] relative min-h-[148px] sm:min-h-[175px] md:min-h-[195px] flex items-center select-none">
                        {/* Right-side portrait image extending to top, bottom, and right edge without inner framing */}
                        <div className="absolute right-0 top-0 bottom-0 w-[53%] sm:w-[50%] md:w-[46%] h-full overflow-hidden pointer-events-none">
                            <img
                                key={activeSlide}
                                src={currentSlide.image}
                                alt={`${currentSlide.titleLine1} ${currentSlide.titleLine2}`}
                                className="w-full h-full object-cover object-[center_15%] transition-opacity duration-700 ease-in-out"
                                loading="eager"
                            />
                            {/* Soft smooth gradient blend from the left cream background into the portrait */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF3E8] via-[#FAF3E8]/50 via-25% to-transparent pointer-events-none" />
                        </div>

                        {/* Left-side typography and button */}
                        <div className="relative z-10 w-[64%] sm:w-[58%] pl-4 sm:pl-7 pr-1 py-3.5 sm:py-5 flex flex-col justify-center">
                            <h2 className="text-[19px] sm:text-2xl md:text-3xl font-serif font-extrabold text-[#2A180E] leading-[1.12] tracking-tight">
                                {currentSlide.titleLine1} <br />
                                <span className="text-[#A47133] font-serif">{currentSlide.titleLine2}</span>
                            </h2>
                            <p className="text-[10px] sm:text-xs text-[#4C3B30] font-medium tracking-normal mt-1 sm:mt-1.5 whitespace-nowrap">
                                {currentSlide.subtitle}
                            </p>

                            <div className="mt-2.5 sm:mt-3">
                                <Link
                                    to={currentSlide.route}
                                    className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#B97A1E] to-[#925C10] hover:from-[#A86E18] hover:to-[#82500C] text-white text-[11px] sm:text-xs font-bold shadow-xs active:scale-95 transition-all w-fit"
                                >
                                    <span>{currentSlide.buttonText}</span>
                                    <FaArrowRight size={9} />
                                </Link>
                            </div>
                        </div>

                        {/* Dots Pagination - Positioned in the transition area matching reference image */}
                        <div className="absolute bottom-2.5 sm:bottom-3.5 left-[48%] sm:left-[46%] -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2">
                            {carouselSlides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveSlide(idx)}
                                    className={`transition-all duration-300 flex items-center justify-center rounded-full ${
                                        activeSlide === idx
                                            ? 'w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#A47134] ring-2 ring-white shadow-xs'
                                            : 'w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white/95 hover:bg-white shadow-xs'
                                    }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* 4. Section Header with Vertical Gold Bar */}
                <div className="flex items-center justify-between mb-3.5 pt-1">
                    <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-5 sm:h-6 rounded-full inline-block ${
                            activeCategory === 'Favorites' ? 'bg-red-500' : 'bg-amber-600'
                        }`}></span>
                        <h3 className="text-base sm:text-xl font-serif font-extrabold text-gray-950 leading-tight">
                            {activeCategory === 'All'
                                ? 'Haircuts & Styling'
                                : activeCategory === 'Favorites'
                                ? `Your Saved Favorites (${favoriteCount})`
                                : activeCategory}
                        </h3>
                    </div>
                    {activeCategory !== 'All' ? (
                        <button
                            onClick={() => setActiveCategory('All')}
                            className="text-amber-700 hover:text-amber-800 text-xs font-bold flex items-center gap-1"
                        >
                            View All <FaArrowRight size={10} />
                        </button>
                    ) : (
                        <span className="text-amber-700 text-xs font-bold flex items-center gap-1 cursor-pointer" onClick={() => setActiveCategory('Haircuts & Styling')}>
                            View All <FaArrowRight size={10} />
                        </span>
                    )}
                </div>

                {/* 5. TWO-COLUMN SERVICE CARDS GRID (Strictly 2 Columns on Mobile!) */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredServices.map((service) => {
                            const discount = getDiscountDetails(service.price, service.offerPrice);
                            const isFav = favorites[service.id];

                            return (
                                <motion.div
                                    key={service.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group relative"
                                >
                                    {/* Image with Heart Favorite Button on top-right */}
                                    <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-stone-100">
                                        <img
                                            src={customImages[service.id] || (service.slug && customImages[service.slug]) || service.image || fallbackMap[service.fallbackVar] || fallbackMap.hairCut}
                                            alt={service.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = fallbackMap[service.fallbackVar] || fallbackMap.hairCut;
                                            }}
                                            loading="lazy"
                                        />

                                        {/* Heart Icon Button matching reference image */}
                                        <button
                                            type="button"
                                            onClick={() => toggleFavorite(service.id)}
                                            className="absolute top-2 right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/30 backdrop-blur-md text-white flex items-center justify-center hover:scale-110 active:scale-90 transition-all z-10 shadow-xs"
                                            title="Save to favorites"
                                            aria-label="Save to favorites"
                                        >
                                            {isFav ? (
                                                <FaHeart className="text-red-500 text-xs sm:text-sm drop-shadow" />
                                            ) : (
                                                <FaRegHeart className="text-white text-xs sm:text-sm" />
                                            )}
                                        </button>

                                        {/* Discount Badge if available */}
                                        {discount.hasDiscount && (
                                            <span className="absolute top-2 left-2 bg-emerald-600 text-white text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded-full shadow-md uppercase tracking-wider z-10">
                                                {discount.badge}
                                            </span>
                                        )}

                                        {/* Official Logo Watermark - Micro Compact Size */}
                                        {showWatermarkLogo && (
                                            <div className="absolute bottom-1.5 left-1.5 z-10 bg-black/40 backdrop-blur-xs px-1.5 py-0.5 rounded-lg border border-amber-300/20 shadow-2xs pointer-events-none opacity-65 group-hover:opacity-85 transition-opacity">
                                                <Logo variant="gold" size="micro" showSwoop={true} align="left" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-between">
                                        <div>
                                            <h4 className="font-serif font-extrabold text-gray-950 text-sm sm:text-base leading-snug truncate mb-1" title={service.name}>
                                                {service.name}
                                            </h4>

                                            {/* Duration & Price Row - Clearly Visible & A Little Bigger */}
                                            <div className="flex items-center justify-between gap-1 py-1.5 border-t border-gray-100 mb-2">
                                                <div className="flex items-center gap-1 text-[11px] sm:text-xs text-gray-600 font-semibold truncate">
                                                    <FaRegClock className="text-amber-600 shrink-0 text-xs" />
                                                    <span className="truncate">{service.duration}</span>
                                                </div>

                                                <div className="flex flex-col items-end shrink-0">
                                                    {discount.hasDiscount ? (
                                                        <div className="flex items-baseline gap-1.5">
                                                            <span className="text-xs text-gray-400 line-through font-semibold leading-none">
                                                                {discount.originalPrice}
                                                            </span>
                                                            <span className="text-sm sm:text-base md:text-lg font-black text-amber-800 leading-none">
                                                                {discount.displayPrice}
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        <span className="text-sm sm:text-base md:text-lg font-black text-amber-800 leading-none">
                                                            {service.price}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Two Action Buttons: Details & Book Now */}
                                        <div className="grid grid-cols-2 gap-1.5 pt-1">
                                            <Link
                                                to={`/services/${service.id}`}
                                                className="py-1.5 sm:py-2 px-1 rounded-xl border border-gray-300 hover:border-amber-400 text-gray-800 text-[10px] sm:text-xs font-bold text-center transition-colors bg-gray-50/80 hover:bg-amber-50/40 flex items-center justify-center truncate"
                                            >
                                                Details
                                            </Link>
                                            <button
                                                type="button"
                                                onClick={() => openBooking({ ...service, price: discount.displayPrice })}
                                                className="py-1.5 sm:py-2 px-1 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 active:scale-95 text-white text-[10px] sm:text-xs font-bold text-center transition-all flex items-center justify-center gap-1 shadow-sm truncate"
                                            >
                                                <FaCalendarCheck className="text-[10px] shrink-0" />
                                                <span className="truncate">Book Now</span>
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Empty State */}
                {filteredServices.length === 0 && (
                    <div className="text-center py-14 bg-white rounded-3xl border-2 border-dashed border-amber-200 mt-6 p-6">
                        {activeCategory === 'Favorites' ? (
                            <>
                                <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 mx-auto flex items-center justify-center text-xl mb-3 shadow-xs">
                                    <FaHeart />
                                </div>
                                <h4 className="text-base sm:text-lg font-serif font-bold text-gray-950 mb-1">
                                    No Saved Favorites Yet
                                </h4>
                                <p className="text-gray-600 text-xs sm:text-sm font-medium max-w-sm mx-auto mb-4">
                                    Tap the ♡ heart icon on any treatment card to bookmark your preferred services here for quick access.
                                </p>
                                <button
                                    onClick={() => { setActiveCategory('All'); setSearchTerm(''); }}
                                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xs sm:text-sm font-bold shadow-sm active:scale-95"
                                >
                                    Browse All 170+ Treatments
                                </button>
                            </>
                        ) : (
                            <>
                                <p className="text-gray-700 text-base font-medium mb-4">No treatments found matching "{searchTerm}".</p>
                                <button
                                    onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                                    className="btn-primary py-2.5 px-7 text-xs sm:text-sm font-bold"
                                >
                                    Reset Filters
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Services;
