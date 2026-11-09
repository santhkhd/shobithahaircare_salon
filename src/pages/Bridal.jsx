import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { bridalPackages } from '../data/services';
import { useBooking } from '../context/BookingContext';
import { Link } from 'react-router-dom';
import { 
    FaMedal, FaUsers, FaShieldAlt, FaGem, FaPaintBrush, 
    FaSpa, FaMagic, FaCrown, FaCheck, FaStar, 
    FaCalendarCheck, FaArrowRight 
} from 'react-icons/fa';
import Logo from '../components/Logo';

// High-resolution image assets
import bridalHeroBride from '../assets/images/bridal-hero-purple-saree.jpg';
import bridalBannerBride from '../assets/images/bridal-banner-bride.jpg';
import bridalHairstyle from '../assets/images/bridal-hairstyle.jpg';
import bridalEngagementLook from '../assets/images/bridal-engagement-look.jpg';
import bridalReceptionLook from '../assets/images/bridal-reception-look.jpg';
import bridalGiftBoxes from '../assets/images/bridal-gift-boxes.jpg';

const Bridal = () => {
    const { openBooking } = useBooking();

    useEffect(() => {
        document.title = "The Bridal Studio | Signature Bridal Makeovers | Shobitha Haircare Kanhangad";
    }, []);

    // 4 Featured Bridal Services matching the horizontal cards row
    const featuredBridalServices = [
        {
            id: 'bridal-makeup',
            title: 'Bridal Makeup',
            badge: 'Bridal Makeup',
            image: bridalBannerBride
        },
        {
            id: 'bridal-hairstyle',
            title: 'Bridal Hairstyle',
            badge: 'Bridal Hairstyle',
            image: bridalHairstyle
        },
        {
            id: 'bridal-engagement',
            title: 'Engagement Makeover',
            badge: 'Engagement',
            image: bridalEngagementLook
        },
        {
            id: 'bridal-reception',
            title: 'Reception Glam',
            badge: 'Reception',
            image: bridalReceptionLook
        }
    ];

    // Why Choose Features matching reference
    const whyChooseFeatures = [
        {
            icon: FaGem,
            title: 'Premium Makeup Products'
        },
        {
            icon: FaPaintBrush,
            title: 'HD & Long-Lasting'
        },
        {
            icon: FaSpa,
            title: 'Traditional & Modern Looks'
        },
        {
            icon: FaMagic,
            title: 'Personalized Bridal Styling'
        }
    ];

    return (
        <div className="bg-[#FAF9F5] min-h-screen pb-20">

            {/* 1. HERO BANNER - REGAL BURGUNDY / CRIMSON BRIDAL STUDIO HERO */}
            <section className="bg-gradient-to-r from-[#4A0A16] via-[#5C101F] to-[#3B0710] rounded-b-3xl sm:rounded-b-[40px] relative overflow-hidden shadow-xl text-white pt-24 sm:pt-28 pb-8 sm:pb-12 min-h-[350px] sm:min-h-[420px] flex items-center select-none">
                {/* Right-side portrait image extending to top, bottom, and right edges */}
                <div className="absolute right-0 top-0 bottom-0 w-[55%] sm:w-[50%] md:w-[45%] h-full overflow-hidden pointer-events-none">
                    <img
                        src={bridalHeroBride}
                        alt="Signature Bridal Studio Model"
                        className="w-full h-full object-cover object-top"
                        loading="eager"
                    />
                    {/* Soft smooth gradient blend from burgundy into the photo */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4A0A16] via-[#4A0A16]/50 via-25% to-transparent pointer-events-none" />
                </div>

                {/* Left-side typography and CTA */}
                <div className="container-custom px-4 sm:px-6 relative z-10 w-full">
                    <div className="w-[64%] sm:w-[58%] md:w-[52%] pl-1 sm:pl-4 py-2 flex flex-col justify-center">
                        {/* Eyebrow */}
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-[#E6B860] font-black uppercase tracking-[0.18em] text-[9.5px] sm:text-xs">
                                SIGNATURE BRIDAL MAKEOVERS
                            </span>
                            <span className="w-6 sm:w-10 h-[1.5px] bg-[#E6B860]/80"></span>
                        </div>

                        {/* Dual-Tone Headline */}
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.12] tracking-tight">
                            The Bridal <br />
                            <span className="text-[#E6B860] font-serif">Studio</span>
                        </h1>

                        {/* Tagline / Quote */}
                        <p className="italic text-amber-100/90 text-[11px] sm:text-xs md:text-sm font-light leading-relaxed my-2.5 sm:my-3 max-w-sm">
                            "Every bride has a dream. We make sure you step into your forever looking <strong className="font-bold text-white not-italic">breathtakingly divine.</strong>"
                        </p>

                        {/* Golden Pill CTA Button */}
                        <div className="mt-1 sm:mt-2">
                            <button
                                type="button"
                                onClick={() => openBooking({ name: 'Bridal Makeover Package', category: 'Bridal' })}
                                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#B97A1E] via-[#A86B14] to-[#8E580B] hover:from-[#A86B14] hover:to-[#7E4C07] text-white font-bold text-xs sm:text-sm shadow-md active:scale-95 transition-all w-fit"
                            >
                                <FaCalendarCheck size={11} />
                                <span>Book Bridal Makeover</span>
                                <FaArrowRight size={10} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="absolute bottom-2.5 sm:bottom-3.5 left-[48%] sm:left-[45%] -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#E6B860] ring-2 ring-white shadow-xs" />
                    <span className="w-2 h-2 rounded-full bg-white/95 shadow-xs" />
                    <span className="w-2 h-2 rounded-full bg-white/95 shadow-xs" />
                </div>
            </section>

            <div className="container-custom px-4 sm:px-6">

                {/* 2. STATS / TRUST BADGES STRIP */}
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-amber-200/80 shadow-xs p-3 sm:p-4 my-5 sm:my-6">
                    <div className="grid grid-cols-3 divide-x divide-gray-100 text-center">
                        {/* 10+ Years Experience */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 px-1">
                            <FaMedal className="text-amber-600 text-lg sm:text-xl shrink-0" />
                            <div className="text-center sm:text-left">
                                <div className="font-extrabold text-gray-950 text-xs sm:text-sm leading-tight">10+ Years</div>
                                <div className="text-[10px] sm:text-xs text-gray-500 font-semibold leading-tight">Experience</div>
                            </div>
                        </div>

                        {/* 500+ Happy Brides */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 px-1">
                            <FaUsers className="text-amber-600 text-lg sm:text-xl shrink-0" />
                            <div className="text-center sm:text-left">
                                <div className="font-extrabold text-gray-950 text-xs sm:text-sm leading-tight">500+</div>
                                <div className="text-[10px] sm:text-xs text-gray-500 font-semibold leading-tight">Happy Brides</div>
                            </div>
                        </div>

                        {/* Certified Bridal Experts */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 px-1">
                            <FaShieldAlt className="text-amber-600 text-lg sm:text-xl shrink-0" />
                            <div className="text-center sm:text-left">
                                <div className="font-extrabold text-gray-950 text-xs sm:text-sm leading-tight">Certified</div>
                                <div className="text-[10px] sm:text-xs text-gray-500 font-semibold leading-tight">Bridal Experts</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. OUR BRIDAL SERVICES - HORIZONTAL CARDS */}
                <div className="mb-6 sm:mb-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3.5 pt-1">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-5 bg-amber-600 rounded-full inline-block"></span>
                            <h2 className="font-serif font-extrabold text-gray-950 text-base sm:text-xl leading-tight">
                                Our Bridal Services
                            </h2>
                        </div>
                        <Link
                            to="/services"
                            className="text-amber-700 hover:text-amber-800 text-xs font-bold flex items-center gap-1"
                        >
                            <span>View All</span>
                            <FaArrowRight size={10} />
                        </Link>
                    </div>

                    {/* 4 Cards Grid / Horizontal Scroll on mobile */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5">
                        {featuredBridalServices.map((srv) => (
                            <div
                                key={srv.id}
                                onClick={() => openBooking({ name: srv.title, category: 'Bridal' })}
                                className="rounded-2xl sm:rounded-3xl overflow-hidden relative aspect-[3/4] border border-amber-200/70 shadow-xs group cursor-pointer bg-stone-100 transition-all duration-300 hover:shadow-md"
                            >
                                <img
                                    src={srv.image}
                                    alt={srv.title}
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                                {/* Official Logo Watermark Overlay - Micro Compact Size */}
                                <div className="absolute top-1.5 left-1.5 z-10 bg-black/40 backdrop-blur-xs px-1.5 py-0.5 rounded-lg border border-amber-300/20 shadow-2xs pointer-events-none opacity-65">
                                    <Logo variant="gold" size="micro" showSwoop={true} align="left" />
                                </div>

                                {/* Deep Burgundy Bottom Badge */}
                                <div className="absolute bottom-2 left-2 right-2 z-10">
                                    <div className="w-full py-1.5 px-2 rounded-xl bg-[#6B1824]/95 backdrop-blur-xs text-white text-[10.5px] sm:text-xs font-bold flex items-center justify-center gap-1 shadow-md border border-white/10 text-center truncate">
                                        <FaCrown size={10} className="text-amber-300 shrink-0" />
                                        <span className="truncate">{srv.badge}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. BRIDAL PACKAGES PROMO BANNER CARD */}
                <div className="bg-gradient-to-r from-[#FFFDF9] via-[#FAF3E8] to-[#F5ECE0] rounded-2xl sm:rounded-3xl border border-amber-200/80 shadow-xs p-3.5 sm:p-5 flex items-center gap-3 sm:gap-6 my-6 relative overflow-hidden">
                    {/* Gift Boxes Graphic on Left */}
                    <img
                        src={bridalGiftBoxes}
                        alt="Bridal Packages Gift"
                        className="w-20 sm:w-28 h-auto object-contain shrink-0 drop-shadow-xs"
                    />

                    {/* Promo Info */}
                    <div className="flex-1 min-w-0 z-10">
                        <h3 className="text-[#7D1B2D] font-serif font-extrabold text-base sm:text-xl leading-tight">
                            Bridal Packages
                        </h3>
                        <p className="text-[11px] sm:text-xs text-gray-700 font-medium my-1 leading-snug">
                            Customizable bridal packages for Wedding, Engagement & Reception.
                        </p>
                        <a
                            href="#packages-section"
                            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-xs shadow-xs active:scale-95 transition-all w-fit mt-1"
                        >
                            <span>View Packages</span>
                            <FaArrowRight size={9} />
                        </a>
                    </div>

                    {/* Subtle Golden Floral Line Art in Background */}
                    <div className="absolute right-2 bottom-1 opacity-15 pointer-events-none">
                        <svg width="120" height="90" viewBox="0 0 120 90" fill="none" stroke="#A46E19" strokeWidth="1.2">
                            <path d="M120 90 C100 60, 80 40, 50 40 C30 40, 20 60, 10 90"/>
                            <path d="M50 40 C60 20, 80 10, 100 15 C85 30, 70 35, 50 40"/>
                            <circle cx="100" cy="15" r="4" fill="#A46E19"/>
                        </svg>
                    </div>
                </div>

                {/* 4B. WEDDING STORE & MARRIAGE ITEMS MASTER CHECKLIST BANNER */}
                <div className="bg-gradient-to-r from-[#4A0A16] via-[#5C101F] to-[#4A0A16] text-white rounded-2xl sm:rounded-3xl border border-[#7D1B2D] shadow-md p-4 sm:p-6 my-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex-1 text-center sm:text-left">
                        <span className="text-amber-400 font-extrabold uppercase tracking-wider text-[10px] sm:text-xs block mb-1">
                            FREE MASTER CHECKLIST & BRIDAL STORE
                        </span>
                        <h3 className="font-serif font-extrabold text-lg sm:text-2xl text-white leading-tight">
                            Complete Marriage Items & Saree Store
                        </h3>
                        <p className="text-xs sm:text-sm text-amber-100/90 mt-1 max-w-xl">
                            Pure Kanjivaram silk sarees, Solah Shringar (16 adornments), groom accessories, Vivah puja samagri, and trousseau trays all in one place.
                        </p>
                    </div>
                    <Link
                        to="/wedding-store"
                        className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B97A1E] via-[#A86B14] to-[#8E580B] hover:from-[#A86B14] hover:to-[#7E4C07] text-white font-bold text-xs sm:text-sm shadow-md active:scale-95 transition-all whitespace-nowrap flex items-center gap-1.5"
                    >
                        <span>Open Wedding Checklist</span>
                        <FaArrowRight size={11} />
                    </Link>
                </div>

                {/* 5. WHY CHOOSE SHOBITHA BRIDAL STUDIO? */}
                <div className="my-7 sm:my-10">
                    <h2 className="text-center font-serif font-extrabold text-gray-950 text-base sm:text-xl mb-4 sm:mb-6">
                        Why Choose Shobitha Bridal Studio?
                    </h2>

                    <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
                        {whyChooseFeatures.map((feat, idx) => {
                            const IconComponent = feat.icon;
                            return (
                                <div key={idx} className="flex flex-col items-center">
                                    <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-amber-50/90 border border-amber-200 text-amber-700 flex items-center justify-center shadow-xs">
                                        <IconComponent className="text-base sm:text-lg text-amber-700" />
                                    </div>
                                    <h4 className="text-[10px] sm:text-xs font-bold text-gray-800 leading-tight mt-1.5 sm:mt-2 max-w-[90px] sm:max-w-none">
                                        {feat.title}
                                    </h4>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 6. COMPLETE BRIDAL PACKAGES SECTION */}
                <section id="packages-section" className="pt-6 sm:pt-10">
                    <div className="text-center mb-6 sm:mb-8">
                        <span className="text-amber-800 font-extrabold tracking-wider uppercase text-[10px] sm:text-xs mb-1 block">
                            All-Inclusive Wedding Plans
                        </span>
                        <h2 className="text-xl sm:text-3xl font-serif font-bold text-gray-950">
                            Signature Wedding Packages
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                        {bridalPackages.map((pkg, idx) => (
                            <div
                                key={pkg.id || idx}
                                className={`bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-sm border transition-all duration-300 flex flex-col justify-between ${
                                    idx === 1
                                        ? 'border-amber-500 ring-2 ring-amber-400/30 shadow-md relative'
                                        : 'border-gray-200 hover:border-amber-200'
                                }`}
                            >
                                {idx === 1 && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                                        <FaStar size={9} /> Most Popular
                                    </span>
                                )}

                                <div>
                                    <h3 className="text-lg sm:text-xl font-serif font-extrabold text-gray-950 mb-1">
                                        {pkg.name}
                                    </h3>
                                    <p className="text-gray-600 text-xs font-medium mb-3">{pkg.description}</p>
                                    <div className="text-2xl sm:text-3xl font-extrabold text-amber-800 mb-4">
                                        {pkg.price}
                                    </div>

                                    <ul className="space-y-2 mb-6">
                                        {pkg.includes.map((item, i) => (
                                            <li key={i} className="text-gray-800 text-xs font-medium flex items-start gap-2">
                                                <FaCheck className="text-amber-700 text-[10px] mt-0.5 shrink-0" />
                                                <span className="leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button
                                    onClick={() => openBooking({ name: pkg.name, category: 'Bridal' })}
                                    className={`w-full py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 ${
                                        idx === 1
                                            ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-sm'
                                            : 'bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-300 font-extrabold'
                                    }`}
                                >
                                    <FaCalendarCheck size={12} /> Book Package
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Bridal;
