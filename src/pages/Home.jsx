import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { reviews } from '../data/reviews';
import { services } from '../data/services';
import { specialOffers } from '../data/offers';
import { 
    FaSearch, FaTimes, FaHeart, FaRegHeart, FaArrowRight, 
    FaCalendarCheck, FaRegClock, FaChevronRight, FaChevronLeft, FaMedal, 
    FaUsers, FaShieldAlt, FaThLarge, FaCut, FaSpa, 
    FaPaintBrush, FaMapMarkerAlt, FaLeaf, FaStar, FaCheckCircle, 
    FaPhoneAlt, FaWhatsapp, FaQuoteLeft, FaCrown, FaMagic
} from 'react-icons/fa';

import BeforeAfterSlider from '../components/BeforeAfterSlider';
import FAQ from '../components/FAQ';
import InstagramFeed from '../components/InstagramFeed';
import PriceCalculator from '../components/PriceCalculator';
import LaurelBranch from '../components/LaurelBranch';
import Logo from '../components/Logo';
import { useSiteSettings } from '../context/SiteSettingsContext';

// Bundled high-resolution images
import bridalBannerBride from '../assets/images/bridal-banner-bride.jpg';
import bridalMuhurtham from '../assets/images/bridal-muhurtham.jpg';
import hairCut from '../assets/images/hair-cut.jpg';
import hairSpaWash from '../assets/images/hair-spa-wash.jpg';
import luxuryGoldFacial from '../assets/images/luxury-gold-facial.jpg';
import hairBefore from '../assets/images/hair-before.jpg';
import hairSmootheningAfter from '../assets/images/hair-smoothening-after.jpg';

const Home = () => {
    const { openBooking } = useBooking();
    const { homeSections } = useSiteSettings();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [favorites, setFavorites] = useState({});
    const [activeCategory, setActiveCategory] = useState('All');
    const scrollContainerRef = useRef(null);

    const [customImages, setCustomImages] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('shobitha_custom_service_images') || '{}');
        } catch (e) {
            return {};
        }
    });

    useEffect(() => {
        const syncImages = () => {
            try {
                setCustomImages(JSON.parse(localStorage.getItem('shobitha_custom_service_images') || '{}'));
            } catch (e) {}
        };
        window.addEventListener('service_images_updated', syncImages);
        return () => window.removeEventListener('service_images_updated', syncImages);
    }, []);

    useEffect(() => {
        document.title = "Shobitha Haircare & Bridal Makeup Studio | Kanhangad Luxury Salon";
        const updateFavs = () => {
            try {
                const saved = JSON.parse(localStorage.getItem('shobitha_favorites') || '{}');
                setFavorites(saved);
            } catch (e) {}
        };
        updateFavs();
        window.addEventListener('favorites_updated', updateFavs);
        return () => window.removeEventListener('favorites_updated', updateFavs);
    }, []);

    const toggleFavorite = (id, e) => {
        if (e) e.stopPropagation();
        setFavorites((prev) => {
            const updated = { ...prev, [id]: !prev[id] };
            try {
                localStorage.setItem('shobitha_favorites', JSON.stringify(updated));
                window.dispatchEvent(new Event('favorites_updated'));
            } catch (err) {}
            return updated;
        });
    };

    const favoriteCount = Object.values(favorites).filter(Boolean).length;

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/services?q=${encodeURIComponent(searchTerm.trim())}`);
        } else {
            navigate('/services');
        }
    };

    // Auto-running Top Hero Carousel Slides
    const heroSlides = [
        {
            eyebrow: "KANHANGAD'S SIGNATURE",
            titleLine1: "Bridal",
            titleLine2: "Makeover",
            highlight: "Studio",
            subtitle: "Traditional Kerala Bridal Artistry with Modern Salon Expertise across 172+ certified services.",
            buttonText: "Book Appointment",
            buttonAction: () => openBooking({ name: 'Bridal Makeover', category: 'Bridal' }),
            secondaryLink: "/bridal",
            secondaryLabel: "Bridal Gallery",
            image: bridalBannerBride,
            alt: "Kanhangad's Signature Bridal Makeover Studio"
        },
        {
            eyebrow: "ORGANIC SKIN & GLOW",
            titleLine1: "O3+ & Gold",
            titleLine2: "Radiance",
            highlight: "Facials",
            subtitle: "De-Tan • Skin Polish • Glass Glow. Deep pore cleansing and organic Ayurvedic glow therapies.",
            buttonText: "Book Facial",
            buttonAction: () => openBooking({ name: 'O3+ Gold Facial', category: 'Facial & Skincare' }),
            secondaryLink: "/services",
            secondaryLabel: "View All Facials",
            image: luxuryGoldFacial,
            alt: "Luxury Gold Radiance Facials"
        },
        {
            eyebrow: "ADVANCED HAIR CARE",
            titleLine1: "Keratin & Hair",
            titleLine2: "Smoothening",
            highlight: "Treatments",
            subtitle: "Frizz-free mirror shine, deep keratin reconstruction, and intense damage moisture therapies.",
            buttonText: "Book Hair Care",
            buttonAction: () => openBooking({ name: 'Keratin Smoothening', category: 'Smoothening & Chemical Hair Services' }),
            secondaryLink: "/services",
            secondaryLabel: "Hair Treatments",
            image: hairSmootheningAfter,
            alt: "Signature Keratin Hair Smoothening"
        },
        {
            eyebrow: "WEDDING SPECIAL",
            titleLine1: "Muhurtham",
            titleLine2: "Bridal",
            highlight: "Packages",
            subtitle: "Complete head-to-toe wedding packages: Saree draping, bridal mehndi, hair styling & HD makeup.",
            buttonText: "Book Bridal Package",
            buttonAction: () => openBooking({ name: 'Muhurtham Package', category: 'Bridal' }),
            secondaryLink: "/pricing",
            secondaryLabel: "See All Prices",
            image: bridalMuhurtham,
            alt: "Muhurtham Bridal Packages"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-advance top carousel every 4.5 seconds
    useEffect(() => {
        if (isHovered) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 4500);
        return () => clearInterval(timer);
    }, [isHovered, heroSlides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    // Category pills matching Gallery / Reviews / Blog aesthetic
    const categoryTabs = [
        { name: 'All', label: 'All Services', count: 172, icon: FaThLarge },
        { name: 'Favorites', label: 'Wishlist', count: favoriteCount, icon: FaHeart, isFav: true },
        { name: 'Bridal Makeup & Special Occasion Makeup', label: 'Bridal & Makeup', count: 32, icon: FaCrown },
        { name: 'Haircuts & Styling', label: 'Haircuts', count: 25, icon: FaCut },
        { name: 'Hair Spa & Hair Treatments', label: 'Hair Spa', count: 18, icon: FaSpa },
        { name: 'Facial & Skincare', label: 'Facials', count: 20, icon: FaSpa },
        { name: 'Manicure, Pedicure & Nail Care', label: 'Nails & Pedicure', count: 16, icon: FaMagic }
    ];

    // 3 Signature Services featured on Home
    const signatureServices = [
        {
            id: 'basic-haircut',
            name: 'Basic Haircut',
            duration: '30-45 Mins',
            price: '₹175',
            originalPrice: '₹350',
            hasDiscount: true,
            image: hairCut,
            category: 'Haircuts & Styling'
        },
        {
            id: 'bridal-makeup-service',
            name: 'Bridal Makeup',
            duration: '120-180 Mins',
            price: '₹12,000',
            hasDiscount: false,
            image: bridalBannerBride,
            category: 'Bridal'
        },
        {
            id: 'hair-spa-luxury',
            name: 'Hair Spa Luxury',
            duration: '60 Mins',
            price: '₹1,200',
            hasDiscount: false,
            image: hairSpaWash,
            category: 'Hair Spa & Treatments'
        }
    ];

    const slide = heroSlides[currentSlide];

    return (
        <div className="bg-[#FAF9F5] min-h-screen pb-20">

            {/* ============================================================ */}
            {/* 1. HERO CAROUSEL - AUTO-RUNNING LUXURY CHAMPAGNE SHOWCASE   */}
            {/* ============================================================ */}
            <section
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="bg-gradient-to-r from-[#FAF3E8] via-[#FAF3E8] to-[#F5ECE0] rounded-b-3xl sm:rounded-b-[40px] relative overflow-hidden shadow-sm border-b border-[#E8D9C5] pt-24 sm:pt-28 pb-8 sm:pb-12 min-h-[370px] sm:min-h-[430px] flex items-center select-none"
            >
                {/* Right-side portrait image with smooth transition */}
                <div className="absolute right-0 top-0 bottom-0 w-[55%] sm:w-[50%] md:w-[46%] h-full overflow-hidden pointer-events-none">
                    <img
                        key={currentSlide}
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-full object-cover object-[center_15%] transition-opacity duration-700 ease-in-out"
                        loading="eager"
                    />
                    {/* Soft smooth gradient blend from the left cream background into the portrait */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FAF3E8] via-[#FAF3E8]/60 via-30% to-transparent pointer-events-none" />
                </div>

                {/* Left-side typography and CTA with smooth fade */}
                <div className="container-custom px-4 sm:px-6 relative z-10 w-full">
                    <div className="w-[66%] sm:w-[58%] md:w-[52%] pl-1 sm:pl-4 py-2 flex flex-col justify-center">
                        {/* Eyebrow with golden lines */}
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-5 sm:w-8 h-[1.5px] bg-[#B98327]/80"></span>
                            <span className="text-[#A46E19] font-black uppercase tracking-[0.2em] text-[9.5px] sm:text-xs">
                                {slide.eyebrow}
                            </span>
                            <span className="w-5 sm:w-8 h-[1.5px] bg-[#B98327]/80"></span>
                        </div>

                        {/* Grand Serif Headline */}
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.12] tracking-tight">
                            <span className="text-[#22160F] block">{slide.titleLine1}</span>
                            <span className="text-[#22160F] block">{slide.titleLine2}</span>
                            <span className="text-[#B98327] block font-serif">{slide.highlight}</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-gray-700 text-[11px] sm:text-xs md:text-sm font-medium leading-relaxed my-2 sm:my-3 max-w-xs min-h-[34px] sm:min-h-[42px]">
                            {slide.subtitle}
                        </p>

                        {/* Golden Pill CTA Button & Secondary Link */}
                        <div className="flex flex-wrap items-center gap-2 mt-1 sm:mt-2">
                            <button
                                type="button"
                                onClick={slide.buttonAction}
                                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B97A1E] via-[#A86B14] to-[#8E580B] hover:from-[#A86B14] hover:to-[#7E4C07] text-white font-bold text-xs sm:text-sm shadow-md active:scale-95 transition-all w-fit"
                            >
                                <FaCalendarCheck size={12} />
                                <span>{slide.buttonText}</span>
                                <FaArrowRight size={10} />
                            </button>

                            <Link
                                to={slide.secondaryLink}
                                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/80 hover:bg-white text-[#4A0A16] border border-[#E8D9C5] text-xs font-bold transition-all shadow-xs"
                            >
                                <FaCrown className="text-amber-600" size={11} />
                                <span>{slide.secondaryLabel}</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Left / Right Carousel Controls */}
                <button
                    onClick={prevSlide}
                    className="absolute left-1.5 sm:left-3 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/70 hover:bg-white text-gray-800 flex items-center justify-center shadow-xs transition z-20 active:scale-90"
                    aria-label="Previous slide"
                    title="Previous slide"
                >
                    <FaChevronLeft size={11} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-1.5 sm:right-3 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/70 hover:bg-white text-gray-800 flex items-center justify-center shadow-xs transition z-20 active:scale-90"
                    aria-label="Next slide"
                    title="Next slide"
                >
                    <FaChevronRight size={11} />
                </button>

                {/* Interactive Clickable Pagination Dots */}
                <div className="absolute bottom-2.5 sm:bottom-3.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                    {heroSlides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                            className={`transition-all duration-300 rounded-full shadow-xs cursor-pointer ${
                                currentSlide === idx
                                    ? 'w-6 h-2.5 bg-[#A47134] ring-2 ring-white'
                                    : 'w-2.5 h-2.5 bg-white/80 hover:bg-white'
                            }`}
                        />
                    ))}
                </div>
            </section>

            <div className="container-custom px-4 sm:px-6 pt-4">

                {/* ============================================================ */}
                {/* 2. SEARCH BAR                                                */}
                {/* ============================================================ */}
                <form onSubmit={handleSearchSubmit} className="pt-2 pb-4 max-w-2xl mx-auto">
                    <div className="relative w-full flex items-center">
                        <FaSearch className="absolute left-4 text-[#A46E19] text-sm pointer-events-none" />
                        <input
                            type="text"
                            placeholder="Search 172 services (e.g. Keratin, Layer Cut, Facial, Bridal...)"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full h-11 sm:h-12 pl-11 pr-10 bg-white rounded-full border border-[#E8DAC8] shadow-xs focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 font-medium"
                        />
                        {searchTerm && (
                            <button
                                type="button"
                                onClick={() => setSearchTerm('')}
                                className="absolute right-3.5 text-gray-400 hover:text-gray-600 p-1"
                                title="Clear search"
                            >
                                <FaTimes size={12} />
                            </button>
                        )}
                    </div>
                </form>

                {/* ============================================================ */}
                {/* 3. HORIZONTAL CATEGORY PILLS (MATCHING GALLERY & REVIEWS)   */}
                {/* ============================================================ */}
                <div className="relative mb-6">
                    <div
                        ref={scrollContainerRef}
                        className="flex items-center gap-2 overflow-x-auto py-1 px-0.5 no-scrollbar touch-scroll"
                    >
                        {categoryTabs.map((tab) => {
                            const IconComponent = tab.icon;
                            const isAll = tab.name === 'All';

                            return (
                                <Link
                                    key={tab.name}
                                    to={isAll ? "/services" : `/services`}
                                    className={`shrink-0 px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 shadow-xs active:scale-95 border ${
                                        isAll
                                            ? 'bg-[#A46E19] text-white border-[#A46E19] shadow-sm ring-1 ring-[#A46E19]'
                                            : tab.isFav
                                            ? 'bg-white text-gray-800 border-rose-200 hover:border-rose-300'
                                            : 'bg-white text-gray-800 border-[#E8DAC8] hover:border-amber-400'
                                    }`}
                                >
                                    <IconComponent className={
                                        isAll
                                            ? 'text-white'
                                            : tab.isFav
                                            ? 'text-rose-500'
                                            : 'text-[#A07019]'
                                    } size={12} />
                                    <span>{tab.label}</span>
                                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                                        isAll
                                            ? 'bg-white/20 text-white'
                                            : tab.isFav
                                            ? 'bg-rose-50 text-rose-600'
                                            : 'bg-[#FAF3E8] text-[#8E580B]'
                                    }`}>
                                        {tab.count}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* ============================================================ */}
                {/* 4. STATS / TRUST BADGES STRIP (UNIFIED CARD BORDER)          */}
                {/* ============================================================ */}
                {homeSections?.statsStrip !== false && (
                    <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#E8D9C5] shadow-xs p-3.5 sm:p-4 my-5 sm:my-6">
                        <div className="grid grid-cols-3 divide-x divide-gray-100 text-center">
                            {/* 10+ Years Experience */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 px-1">
                                <FaMedal className="text-[#A46E19] text-lg sm:text-xl shrink-0" />
                                <div className="text-center sm:text-left">
                                    <div className="font-extrabold text-gray-950 text-xs sm:text-sm leading-tight">10+ Years</div>
                                    <div className="text-[10px] sm:text-xs text-gray-500 font-semibold leading-tight">Experience</div>
                                </div>
                            </div>

                            {/* 500+ Happy Brides */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 px-1">
                                <FaUsers className="text-[#A46E19] text-lg sm:text-xl shrink-0" />
                                <div className="text-center sm:text-left">
                                    <div className="font-extrabold text-gray-950 text-xs sm:text-sm leading-tight">500+</div>
                                    <div className="text-[10px] sm:text-xs text-gray-500 font-semibold leading-tight">Happy Brides</div>
                                </div>
                            </div>

                            {/* Certified Bridal Experts */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 px-1">
                                <FaShieldAlt className="text-[#A46E19] text-lg sm:text-xl shrink-0" />
                                <div className="text-center sm:text-left">
                                    <div className="font-extrabold text-gray-950 text-xs sm:text-sm leading-tight">Certified</div>
                                    <div className="text-[10px] sm:text-xs text-gray-500 font-semibold leading-tight">Bridal Experts</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ============================================================ */}
                {/* 5. OUR SIGNATURE SERVICES (ELEVATED WITH LAUREL WREATH)      */}
                {/* ============================================================ */}
                <section className="mb-10 sm:mb-14">
                    {/* Centered Laurel Wreath Section Header */}
                    <div className="text-center mb-6 sm:mb-8">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <span className="w-6 sm:w-9 h-[1.5px] bg-[#B98327]/60"></span>
                            <span className="text-[#A46E19] font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs">
                                POPULAR SELECTIONS
                            </span>
                            <span className="w-6 sm:w-9 h-[1.5px] bg-[#B98327]/60"></span>
                        </div>

                        <div className="flex items-center justify-center gap-2 sm:gap-4 my-1">
                            <LaurelBranch flip={false} />
                            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.12]">
                                <span className="text-[#22160F]">Our Signature </span>
                                <span className="text-[#B98327]">Services</span>
                            </h2>
                            <LaurelBranch flip={true} />
                        </div>

                        <p className="text-gray-700 max-w-sm sm:max-w-md mx-auto text-xs sm:text-sm font-medium leading-relaxed mt-1">
                            Timeless beauty treatments and makeover artistry chosen by our salon clients.
                        </p>
                    </div>

                    {/* 3 Signature Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5">
                        {signatureServices.map((srv) => {
                            const isFav = !!favorites[srv.id];
                            return (
                                <div
                                    key={srv.id}
                                    onClick={() => openBooking(srv)}
                                    className="bg-white rounded-2xl sm:rounded-3xl border border-[#E8D9C5] shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden cursor-pointer group"
                                >
                                    {/* Image with Wishlist Button & Official Logo Watermark */}
                                    <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-stone-100">
                                        <img
                                            src={customImages[srv.id] || srv.image}
                                            alt={srv.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                        <button
                                            type="button"
                                            onClick={(e) => toggleFavorite(srv.id, e)}
                                            className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center text-white z-10 hover:scale-110 transition"
                                            title="Wishlist"
                                            aria-label="Wishlist"
                                        >
                                            {isFav ? (
                                                <FaHeart className="text-red-500 text-xs" />
                                            ) : (
                                                <FaRegHeart className="text-white text-xs" />
                                            )}
                                        </button>

                                        {/* Category Pill Top-Left */}
                                        <div className="absolute top-2.5 left-2.5 bg-[#4A0A16]/90 backdrop-blur-xs text-amber-300 px-2 py-0.5 rounded-full text-[10px] font-bold z-10 shadow-xs">
                                            {srv.category}
                                        </div>

                                        {/* Official Logo Watermark Overlay with Soft Opacity */}
                                        <div className="absolute bottom-2 left-2 z-10 bg-black/40 backdrop-blur-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-xl border border-amber-300/25 shadow-xs pointer-events-none opacity-70 group-hover:opacity-90 transition-opacity">
                                            <Logo variant="gold" size="xs" showSwoop={true} align="left" />
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1">
                                        <div>
                                            <h3 className="font-serif font-extrabold text-gray-950 text-sm sm:text-base leading-tight truncate mb-1" title={srv.name}>
                                                {srv.name}
                                            </h3>
                                            <div className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold mb-2">
                                                <FaRegClock className="text-[#A46E19] shrink-0" size={11} />
                                                <span>{srv.duration}</span>
                                            </div>
                                        </div>

                                        <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                                            {srv.hasDiscount ? (
                                                <div className="flex items-baseline gap-1.5">
                                                    <span className="text-xs text-gray-400 line-through font-semibold">
                                                        {srv.originalPrice}
                                                    </span>
                                                    <span className="text-base sm:text-lg font-black text-[#8E580B]">
                                                        {srv.price}
                                                    </span>
                                                </div>
                                            ) : (
                                                <span className="text-base sm:text-lg font-black text-[#8E580B]">
                                                    {srv.price}
                                                </span>
                                            )}

                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    openBooking(srv);
                                                }}
                                                className="px-3 py-1.5 rounded-full bg-[#FAF3E8] hover:bg-[#A46E19] text-[#8E580B] hover:text-white border border-[#E8DAC8] text-xs font-bold transition-colors"
                                            >
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* View All Button */}
                    <div className="text-center mt-6">
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-amber-50 text-[#A46E19] border border-[#E8D9C5] text-xs sm:text-sm font-bold shadow-xs transition"
                        >
                            <span>Explore All 172 Salon Services</span>
                            <FaArrowRight size={11} />
                        </Link>
                    </div>
                </section>

                {/* ============================================================ */}
                {/* 7. QUICK GUARANTEE STRIP                                     */}
                {/* ============================================================ */}
                <div className="bg-white rounded-2xl sm:rounded-full border border-[#E8D9C5] shadow-xs px-4 sm:px-6 py-3 mb-10 sm:mb-14">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-gray-800 font-bold text-[11px] sm:text-xs">
                        <div className="flex items-center justify-center gap-1.5 text-amber-900">
                            <FaCalendarCheck className="text-amber-600 text-xs shrink-0" />
                            <span>Instant Booking</span>
                        </div>
                        <div className="flex items-center justify-center gap-1.5 text-amber-900">
                            <FaLeaf className="text-emerald-600 text-xs shrink-0" />
                            <span>Organic Products</span>
                        </div>
                        <div className="flex items-center justify-center gap-1.5 text-amber-900">
                            <FaMapMarkerAlt className="text-amber-700 text-xs shrink-0" />
                            <span>Kanhangad Central</span>
                        </div>
                        <div className="flex items-center justify-center gap-1.5 text-amber-900">
                            <FaStar className="text-amber-500 text-xs shrink-0" />
                            <span>4.9 (278+ Reviews)</span>
                        </div>
                    </div>
                </div>

                {/* ============================================================ */}
                {/* 8. INSTANT PRICE ESTIMATOR                                   */}
                {/* ============================================================ */}
                {homeSections?.priceEstimator !== false && (
                    <section className="my-10 sm:my-14">
                        <div className="text-center mb-6 sm:mb-8">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <span className="w-6 sm:w-9 h-[1.5px] bg-[#B98327]/60"></span>
                                <span className="text-[#A46E19] font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs">
                                    TRANSPARENT PRICING
                                </span>
                                <span className="w-6 sm:w-9 h-[1.5px] bg-[#B98327]/60"></span>
                            </div>

                            <div className="flex items-center justify-center gap-2 sm:gap-4 my-1">
                                <LaurelBranch flip={false} />
                                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.12]">
                                    <span className="text-[#22160F]">Instant Price </span>
                                    <span className="text-[#B98327]">Estimator</span>
                                </h2>
                                <LaurelBranch flip={true} />
                            </div>

                            <p className="text-gray-700 max-w-sm sm:max-w-md mx-auto text-xs sm:text-sm font-medium leading-relaxed mt-1">
                                Select multiple services and calculate your customized salon package total instantly.
                            </p>
                        </div>

                        <PriceCalculator openBooking={openBooking} />
                    </section>
                )}

                {/* ============================================================ */}
                {/* 9. BEFORE & AFTER TRANSFORMATION HIGHLIGHT                  */}
                {/* ============================================================ */}
                {homeSections?.beforeAfterSlider !== false && (
                    <section className="my-10 sm:my-14 bg-white p-5 sm:p-8 rounded-3xl border border-[#E8D9C5] shadow-xs">
                        <div className="text-center mb-6">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <span className="w-6 sm:w-9 h-[1.5px] bg-[#B98327]/60"></span>
                                <span className="text-[#A46E19] font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs">
                                    REAL CLIENT RESULTS
                                </span>
                                <span className="w-6 sm:w-9 h-[1.5px] bg-[#B98327]/60"></span>
                            </div>

                            <div className="flex items-center justify-center gap-2 sm:gap-4 my-1">
                                <LaurelBranch flip={false} />
                                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.12]">
                                    <span className="text-[#22160F]">Signature Hair </span>
                                    <span className="text-[#B98327]">Smoothening</span>
                                </h2>
                                <LaurelBranch flip={true} />
                            </div>

                            <p className="text-gray-600 text-xs sm:text-sm max-w-md mx-auto mt-1">
                                Drag the slider to compare frizz-free smoothness before and after our signature treatment.
                            </p>
                        </div>

                        <div className="max-w-2xl mx-auto">
                            <BeforeAfterSlider
                                beforeImage={hairBefore}
                                afterImage={hairSmootheningAfter}
                                title="Keratin Gloss Transformation"
                            />
                        </div>
                    </section>
                )}

                {/* ============================================================ */}
                {/* 10. INSTAGRAM COMMUNITY FEED                                 */}
                {/* ============================================================ */}
                {homeSections?.instaFeed !== false && (
                    <section className="my-10 sm:my-14">
                        <InstagramFeed />
                    </section>
                )}

                {/* ============================================================ */}
                {/* 11. FAQ ACCORDION SECTION                                    */}
                {/* ============================================================ */}
                {homeSections?.faqSection !== false && (
                    <section className="my-10 sm:my-14">
                        <FAQ />
                    </section>
                )}

                {/* ============================================================ */}
                {/* 12. TESTIMONIALS: Loved by Kanhangad Brides                 */}
                {/* ============================================================ */}
                <section className="my-10 sm:my-16">
                    <div className="text-center mb-6 sm:mb-8">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <span className="w-6 sm:w-9 h-[1.5px] bg-[#B98327]/60"></span>
                            <span className="text-[#A46E19] font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs">
                                TESTIMONIALS
                            </span>
                            <span className="w-6 sm:w-9 h-[1.5px] bg-[#B98327]/60"></span>
                        </div>

                        <div className="flex items-center justify-center gap-2 sm:gap-4 my-1">
                            <LaurelBranch flip={false} />
                            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.12]">
                                <span className="text-[#22160F]">Loved by </span>
                                <span className="text-[#B98327]">Kanhangad Brides</span>
                            </h2>
                            <LaurelBranch flip={true} />
                        </div>

                        <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed mb-3 mt-1">
                            Real words from happy clients across Kasaragod district.
                        </p>
                        <Link
                            to="/reviews"
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#A46E19] hover:text-[#7D1B2D] underline underline-offset-4 transition"
                        >
                            <span>Read all 278+ verified reviews</span>
                            <FaArrowRight size={10} />
                        </Link>
                    </div>

                    {/* 3 Testimonial Cards */}
                    {(() => {
                        let homeReviews = reviews.slice(0, 3);
                        try {
                            const saved = JSON.parse(localStorage.getItem('shobitha_featured_reviews') || '[]');
                            const featured = saved.filter(r => r.featured);
                            if (featured.length > 0) homeReviews = featured.slice(0, 3);
                        } catch (e) {}

                        return (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                                {homeReviews.map((r) => (
                                    <div
                                        key={r.id}
                                        className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#E8D9C5] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                                    >
                                        <div>
                                            {/* 5 Stars & Google Review badge */}
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center gap-1 text-amber-500 text-xs">
                                                    {[...Array(r.rating || 5)].map((_, i) => (
                                                        <FaStar key={i} />
                                                    ))}
                                                </div>
                                                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100">
                                                    <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24">
                                                        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                                                        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
                                                        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.97 0 12s.45 3.83 1.25 5.42l4.03-3.15z"/>
                                                        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                                                    </svg>
                                                    <span>Google Review</span>
                                                </span>
                                            </div>

                                            {/* Review Text */}
                                            <p className="text-xs sm:text-sm text-gray-700 italic font-medium leading-relaxed mb-4">
                                                "{r.text}"
                                            </p>
                                        </div>

                                        {/* Author & Verified badge */}
                                        <div className="pt-3 border-t border-gray-100 flex items-center gap-3">
                                            <img
                                                src={r.image}
                                                alt={r.name}
                                                className="w-9 h-9 rounded-full object-cover border border-amber-300 shrink-0"
                                            />
                                            <div className="min-w-0">
                                                <h4 className="font-bold text-xs sm:text-sm text-gray-900 truncate">
                                                    {r.name}
                                                </h4>
                                                <p className="text-[10px] text-gray-500 font-medium flex items-center gap-1.5">
                                                    <span>{r.date}</span>
                                                    <span>•</span>
                                                    <span className="text-emerald-700 font-bold flex items-center gap-0.5">
                                                        <FaCheckCircle size={9} /> Verified Client
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    })()}
                </section>

                {/* ============================================================ */}
                {/* 13. READY FOR YOUR DREAM MAKEOVER CTA SECTION               */}
                {/* ============================================================ */}
                <section className="my-10 sm:my-16 rounded-3xl bg-gradient-to-r from-[#4A0A16] via-[#651020] to-[#4A0A16] text-white p-7 sm:p-10 shadow-xl border border-[#7D1B2D] text-center relative overflow-hidden select-none">
                    {/* Background Soft Glow */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <span className="text-amber-400 font-extrabold uppercase tracking-widest text-[10px] sm:text-xs mb-2 block">
                            GET IN TOUCH
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-serif font-extrabold mb-3 leading-tight text-white">
                            Ready for Your Dream Makeover?
                        </h2>
                        <p className="text-xs sm:text-sm text-amber-100/90 mb-6 max-w-lg mx-auto leading-relaxed">
                            Book your bridal consultation or salon slot today. We look forward to welcoming you to Shobitha Haircare.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <button
                                onClick={() => openBooking({})}
                                className="w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-[#B97A1E] via-[#A86B14] to-[#8E580B] hover:from-[#A86B14] hover:to-[#7E4C07] text-white text-xs sm:text-sm font-black shadow-md active:scale-95 transition"
                            >
                                Book Appointment
                            </button>
                            <a
                                href="tel:+918075340778"
                                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 py-3 px-6 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition active:scale-95"
                            >
                                <FaPhoneAlt size={12} />
                                <span>Call: +91 80753 40778</span>
                            </a>
                            <a
                                href="https://wa.me/918075340778?text=Hello%20Shobitha%20Haircare,%20I%20would%20like%20to%20book%20an%20appointment"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3 px-6 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition active:scale-95 shadow-md"
                            >
                                <FaWhatsapp size={14} />
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
