import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FaTimes, FaCrown, FaCut, FaSpa, FaExchangeAlt, 
    FaThLarge, FaHeart, FaRegHeart, FaWhatsapp, FaCalendarCheck 
} from 'react-icons/fa';
import { useBooking } from '../context/BookingContext';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import Logo from '../components/Logo';

// Gallery high-resolution image assets
import bridalBannerBride from '../assets/images/bridal-banner-bride.jpg';
import bridalHairstyle from '../assets/images/bridal-hairstyle.jpg';
import hairCut from '../assets/images/hair-cut.jpg';
import hairStylingVoluminous from '../assets/images/hair-styling-voluminous.jpg';
import hairBefore from '../assets/images/hair-before.jpg';
import hairSmootheningAfter from '../assets/images/hair-smoothening-after.jpg';
import luxuryGoldFacial from '../assets/images/luxury-gold-facial.jpg';
import bridalMuhurtham from '../assets/images/bridal-muhurtham.jpg';
import caramelBalayage from '../assets/images/caramel-balayage.jpg';
import bridalMehndiArt from '../assets/images/bridal-mehndi-art.jpg';
import bridalNailArtLuxury from '../assets/images/bridal-nail-art-luxury.jpg';
import bridalSaree from '../assets/images/bridal-saree.jpg';
import keratinHairSmoothening from '../assets/images/keratin-hair-smoothening.jpg';

// Elegant Laurel Branch SVG component matching reference design
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

const Gallery = () => {
    const [filter, setFilter] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);
    const [favorites, setFavorites] = useState({});
    const { openBooking } = useBooking();

    useEffect(() => {
        document.title = "Artistry & Transformations Gallery | Shobitha Haircare Kanhangad";
        try {
            const saved = JSON.parse(localStorage.getItem('shobitha_gallery_favs') || '{}');
            setFavorites(saved);
        } catch (e) {}
    }, []);

    const toggleFav = (id) => {
        setFavorites((prev) => {
            const updated = { ...prev, [id]: !prev[id] };
            try {
                localStorage.setItem('shobitha_gallery_favs', JSON.stringify(updated));
            } catch (e) {}
            return updated;
        });
    };

    // Category filter pills matching the uploaded mock exactly
    const categories = [
        { name: 'All', label: 'All', icon: FaThLarge },
        { name: 'Bridal', label: 'Bridal', icon: FaCrown },
        { name: 'Hair', label: 'Hair', icon: FaCut },
        { name: 'Makeup', label: 'Makeup', icon: FaSpa },
        { name: 'Before/After', label: 'Before/After', icon: FaExchangeAlt }
    ];

    // Gallery items matching the 6 featured cards in the screenshot + additional authentic work
    const galleryItems = [
        {
            id: 'bridal-makeup',
            category: 'Bridal',
            badge: 'Bridal Makeup',
            badgeIcon: FaCrown,
            title: 'Muhurtham Kerala Bridal Makeover',
            subtitle: 'Traditional HD glow with jasmine garland & heirloom gold jewelry',
            url: bridalBannerBride
        },
        {
            id: 'bridal-hairstyle',
            category: 'Bridal',
            badge: 'Bridal Hairstyle',
            badgeIcon: FaCrown,
            title: 'Classic Floral Bridal Bun',
            subtitle: 'Sculpted low-bun adorned with natural baby\'s breath & fresh jasmine',
            url: bridalHairstyle
        },
        {
            id: 'hair-transformation',
            category: 'Hair',
            badge: 'Hair Transformation',
            badgeIcon: FaCut,
            title: 'Chic Parisian Bob Cut',
            subtitle: 'Modern textured blunt bob tailored to face geometry',
            url: hairCut
        },
        {
            id: 'hair-styling',
            category: 'Hair',
            badge: 'Hair Styling',
            badgeIcon: FaCut,
            title: 'Voluminous Butterfly Layers',
            subtitle: 'Weightless blowout with cascading face-framing curtain layers',
            url: hairStylingVoluminous
        },
        {
            id: 'hair-smoothening',
            category: 'Before/After',
            badge: 'Hair Smoothening',
            badgeIcon: FaExchangeAlt,
            title: 'Keratin Protein Smoothening',
            subtitle: 'Frizz-free glass finish with deep amino acid sealing',
            isBeforeAfter: true,
            beforeUrl: hairBefore,
            afterUrl: hairSmootheningAfter,
            url: hairSmootheningAfter
        },
        {
            id: 'facial-skincare',
            category: 'Makeup',
            badge: 'Facial & Skin Care',
            badgeIcon: FaSpa,
            title: '24K Radiance Gold Facial',
            subtitle: 'Herbal clay application and deep collagen oxygenation',
            url: luxuryGoldFacial
        },
        {
            id: 'muhurtham-saree',
            category: 'Bridal',
            badge: 'Muhurtham Saree',
            badgeIcon: FaCrown,
            title: 'South Indian Kanchipuram Bride',
            subtitle: 'Full bridal styling with traditional temple jewelry & veil drape',
            url: bridalMuhurtham
        },
        {
            id: 'balayage-highlights',
            category: 'Hair',
            badge: 'Balayage Tone',
            badgeIcon: FaCut,
            title: 'Caramel Honey Balayage',
            subtitle: 'Seamless sun-kissed hand-painted ribbons without root demarcation',
            url: caramelBalayage
        },
        {
            id: 'bridal-mehndi',
            category: 'Bridal',
            badge: 'Bridal Mehndi',
            badgeIcon: FaCrown,
            title: 'Intricate Bridal Henna',
            subtitle: 'Custom bridal figurines and traditional Kasaragod motifs',
            url: bridalMehndiArt
        },
        {
            id: 'bridal-nails',
            category: 'Makeup',
            badge: 'Bridal Nail Art',
            badgeIcon: FaSpa,
            title: 'French Ombre & Gold Leaf Nails',
            subtitle: 'Gel extensions adorned with swarovski crystals and gold foil',
            url: bridalNailArtLuxury
        },
        {
            id: 'bridal-saree-draping',
            category: 'Bridal',
            badge: 'Bridal Draping',
            badgeIcon: FaCrown,
            title: 'Silk Saree Pleating & Draping',
            subtitle: 'Wrinkle-resistant box pleating pinned for seamless bridal mobility',
            url: bridalSaree
        },
        {
            id: 'keratin-gloss-split',
            category: 'Before/After',
            badge: 'Keratin Gloss',
            badgeIcon: FaExchangeAlt,
            title: 'Intense Damage Repair',
            subtitle: 'Restoring bleached, porous hair to mirror-like brilliance',
            isBeforeAfter: true,
            beforeUrl: hairBefore,
            afterUrl: keratinHairSmoothening,
            url: keratinHairSmoothening
        }
    ];

    const filteredItems = filter === 'All' 
        ? galleryItems 
        : galleryItems.filter(item => item.category === filter);

    return (
        <div className="pt-24 sm:pt-28 pb-20 bg-[#FAF9F5] min-h-screen">
            <div className="container-custom px-4 sm:px-6">

                {/* 1. HERO TITLE SECTION WITH GOLD LAUREL WREATH BRANCHES */}
                <section className="text-center pt-2 sm:pt-4 pb-6 sm:pb-8">
                    {/* Top Eyebrow with Lines */}
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="w-7 sm:w-10 h-[1.5px] bg-[#B98327]/60"></span>
                        <span className="text-[#A46E19] font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs">
                            OUR PORTFOLIO
                        </span>
                        <span className="w-7 sm:w-10 h-[1.5px] bg-[#B98327]/60"></span>
                    </div>

                    {/* Flanked Title with Laurel Branches */}
                    <div className="flex items-center justify-center gap-2 sm:gap-6 my-1">
                        <LaurelBranch flip={false} />
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12]">
                            <span className="text-[#22160F] block sm:inline">Artistry & </span>
                            <span className="text-[#B98327] block sm:inline">Transformations</span>
                        </h1>
                        <LaurelBranch flip={true} />
                    </div>

                    {/* Subtitle */}
                    <p className="text-gray-700 max-w-sm sm:max-w-md mx-auto text-xs sm:text-sm font-medium leading-relaxed mt-1 sm:mt-2">
                        A curated showcase of our happy brides, hair smoothening results, and salon makeovers.
                    </p>
                </section>

                {/* 2. HORIZONTAL CATEGORY FILTER PILLS */}
                <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-6 sm:mb-8 touch-scroll">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        const isActive = filter === cat.name;

                        return (
                            <button
                                key={cat.name}
                                onClick={() => setFilter(cat.name)}
                                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1.5 whitespace-nowrap transition-all duration-200 shrink-0 active:scale-95 ${
                                    isActive
                                        ? 'bg-[#A46E19] text-white shadow-sm ring-1 ring-[#A46E19]'
                                        : 'bg-white border border-[#E8DAC8] text-gray-800 hover:bg-[#FAF3E8]'
                                }`}
                            >
                                <Icon className={`text-xs ${isActive ? 'text-white' : 'text-[#A46E19]'}`} />
                                <span>{cat.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* 3. TWO-COLUMN GALLERY GRID (Strictly 2 Columns on Mobile!) */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => {
                            const isFav = !!favorites[item.id];
                            const BadgeIcon = item.badgeIcon || FaCrown;

                            return (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    onClick={() => setSelectedImage(item)}
                                    className="group relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs hover:shadow-lg border border-[#EADBCA] bg-stone-100 cursor-pointer select-none transition-all duration-300"
                                >
                                    {/* Favorite Heart Button */}
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleFav(item.id);
                                        }}
                                        className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/35 backdrop-blur-xs flex items-center justify-center text-white hover:bg-black/55 transition-transform active:scale-75 z-20"
                                        title={isFav ? "Remove from wishlist" : "Save look to wishlist"}
                                        aria-label="Wishlist"
                                    >
                                        {isFav ? (
                                            <FaHeart className="text-red-500 text-xs" />
                                        ) : (
                                            <FaRegHeart className="text-white text-xs" />
                                        )}
                                    </button>

                                    {/* Card Content - Regular Image OR Before/After Split */}
                                    {item.isBeforeAfter ? (
                                        <div className="w-full h-full relative grid grid-cols-2 overflow-hidden">
                                            {/* Left: Before */}
                                            <div className="relative h-full overflow-hidden">
                                                <img
                                                    src={item.beforeUrl}
                                                    alt="Before treatment"
                                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                                    loading="lazy"
                                                />
                                                <span className="absolute bottom-9 left-2 bg-[#FAF5EC]/95 backdrop-blur-xs text-[#2A180E] text-[8.5px] sm:text-[9.5px] font-black px-2 py-0.5 rounded-full shadow-xs border border-amber-200/80">
                                                    Before
                                                </span>
                                            </div>

                                            {/* Divider Line */}
                                            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1.5px] bg-white/80 shadow-md z-10" />

                                            {/* Right: After */}
                                            <div className="relative h-full overflow-hidden">
                                                <img
                                                    src={item.afterUrl}
                                                    alt="After treatment"
                                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                                    loading="lazy"
                                                />
                                                <span className="absolute bottom-9 right-2 bg-[#FAF5EC]/95 backdrop-blur-xs text-[#2A180E] text-[8.5px] sm:text-[9.5px] font-black px-2 py-0.5 rounded-full shadow-xs border border-amber-200/80">
                                                    After
                                                </span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="w-full h-full relative overflow-hidden">
                                            <img
                                                src={item.url}
                                                alt={item.title}
                                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                                loading="lazy"
                                            />
                                        </div>
                                    )}

                                    {/* Top-Left Logo Watermark Overlay */}
                                    <div className="absolute top-2.5 left-2.5 z-10 bg-black/75 backdrop-blur-xs px-2 py-0.5 rounded-xl border border-amber-400/50 shadow-md pointer-events-none">
                                        <Logo variant="gold" size="xs" showSwoop={true} align="left" />
                                    </div>

                                    {/* Bottom Overlay Gradient & Deep Crimson/Burgundy Badge */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

                                    <div className="absolute bottom-2.5 left-2.5 z-10">
                                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#6B1824]/90 backdrop-blur-xs text-white text-[10px] sm:text-[11px] font-bold shadow-md border border-white/10">
                                            <BadgeIcon size={10} className="text-amber-300 shrink-0" />
                                            <span className="whitespace-nowrap leading-none">{item.badge}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* 4. LIGHTBOX DETAIL MODAL */}
                <AnimatePresence>
                    {selectedImage && (
                        <div
                            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5"
                            onClick={() => setSelectedImage(null)}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-amber-200/80"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Modal Close Button */}
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                                    aria-label="Close"
                                >
                                    <FaTimes size={13} />
                                </button>

                                {/* Modal Media Body */}
                                <div className="bg-stone-900 flex items-center justify-center max-h-[62vh] overflow-hidden relative">
                                    {/* Watermark in Lightbox */}
                                    <div className="absolute top-3 left-3 z-20 bg-black/75 backdrop-blur-sm px-3 py-1.5 rounded-2xl border border-amber-400/50 shadow-md pointer-events-none">
                                        <Logo variant="gold" size="sm" showSwoop={true} align="left" />
                                    </div>
                                    {selectedImage.isBeforeAfter ? (
                                        <div className="p-3 w-full">
                                            <BeforeAfterSlider
                                                beforeImage={selectedImage.beforeUrl}
                                                afterImage={selectedImage.afterUrl}
                                                title={selectedImage.title}
                                            />
                                        </div>
                                    ) : (
                                        <img
                                            src={selectedImage.url}
                                            alt={selectedImage.title}
                                            className="w-full max-h-[60vh] object-contain"
                                        />
                                    )}
                                </div>

                                {/* Modal Info & CTAs */}
                                <div className="p-4 sm:p-6 bg-white border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full inline-block mb-1">
                                            {selectedImage.badge}
                                        </span>
                                        <h3 className="text-base sm:text-lg font-serif font-extrabold text-gray-950">
                                            {selectedImage.title}
                                        </h3>
                                        <p className="text-xs text-gray-600 font-medium">
                                            {selectedImage.subtitle}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 pt-1 sm:pt-0">
                                        <a
                                            href={`https://wa.me/918075340778?text=Hello%20Shobitha%20Haircare,%20I%20loved%20this%20look%20from%20your%20gallery:%20*${encodeURIComponent(selectedImage.title)}*%20(${encodeURIComponent(selectedImage.badge)})!%20Could%20you%20share%20more%20details%20and%20availability?`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 sm:flex-none h-9 px-3.5 rounded-xl border border-emerald-300 text-emerald-800 bg-emerald-50 hover:bg-emerald-100 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs"
                                        >
                                            <FaWhatsapp className="text-[#25D366] text-sm" />
                                            <span>Enquire</span>
                                        </a>

                                        <button
                                            type="button"
                                            onClick={() => {
                                                setSelectedImage(null);
                                                openBooking({ name: selectedImage.title, category: selectedImage.category });
                                            }}
                                            className="flex-1 sm:flex-none h-9 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
                                        >
                                            <FaCalendarCheck size={11} />
                                            <span>Book Look</span>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Gallery;
