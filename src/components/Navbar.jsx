import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { FaPhoneAlt, FaWhatsapp, FaCalendarCheck, FaHeart } from 'react-icons/fa';
import { useBooking } from '../context/BookingContext';
import OfferBanner from './OfferBanner';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [favoriteCount, setFavoriteCount] = useState(0);
    const { openBooking } = useBooking();
    const location = useLocation();
    const navigate = useNavigate();

    // Listen to favorite count changes across all tabs and components
    useEffect(() => {
        const updateFavCount = () => {
            try {
                const saved = JSON.parse(localStorage.getItem('shobitha_favorites') || '{}');
                const count = Object.values(saved).filter(Boolean).length;
                setFavoriteCount(count);
            } catch (e) {}
        };
        updateFavCount();
        window.addEventListener('favorites_updated', updateFavCount);
        window.addEventListener('storage', updateFavCount);
        return () => {
            window.removeEventListener('favorites_updated', updateFavCount);
            window.removeEventListener('storage', updateFavCount);
        };
    }, []);

    // Secret Admin Shortcut: Triple-tap the logo to open Admin panel
    const tapTimeoutRef = useRef(null);
    const [tapCount, setTapCount] = useState(0);

    const handleLogoClick = (e) => {
        setTapCount(prev => {
            const next = prev + 1;
            if (next >= 3) {
                e.preventDefault();
                navigate('/admin');
                return 0;
            }
            return next;
        });
        clearTimeout(tapTimeoutRef.current);
        tapTimeoutRef.current = setTimeout(() => setTapCount(0), 1200);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 15);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Bridal', path: '/bridal' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Reviews', path: '/reviews' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-gray-200/80 ${
                scrolled ? 'shadow-md' : 'shadow-xs'
            }`}
        >
            <OfferBanner />
            <div className={`container-custom flex justify-between items-center transition-all duration-300 px-3.5 sm:px-6 ${
                scrolled ? 'py-2' : 'py-2.5 sm:py-3'
            }`}>
                {/* Logo matching Image 2 (Triple-tap secretly opens Admin) */}
                <Link to="/" onClick={handleLogoClick} className="flex items-center gap-2 group select-none">
                    {/* Golden Lotus Silhouette Icon */}
                    <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-amber-600 fill-current drop-shadow-xs">
                            <path d="M50 15 C52 28, 65 35, 68 50 C70 60, 62 70, 50 78 C38 70, 30 60, 32 50 C35 35, 48 28, 50 15 Z" fill="#C59B27"/>
                            <path d="M50 30 C58 40, 72 45, 78 58 C82 66, 75 75, 62 80 C55 76, 51 72, 50 70 C49 72, 45 76, 38 80 C25 75, 18 66, 22 58 C28 45, 42 40, 50 30 Z" fill="#D4AF37" opacity="0.95"/>
                            <path d="M50 45 C55 52, 65 58, 68 68 C70 74, 62 82, 50 85 C38 82, 30 74, 32 68 C35 58, 45 52, 50 45 Z" fill="#B8860B"/>
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-base sm:text-xl md:text-2xl font-serif font-black tracking-tight text-gray-950 leading-tight">
                            Shobitha <span className="font-serif text-gray-900 font-bold">Haircare</span>
                        </span>
                        <span className="text-[7.5px] sm:text-[9px] tracking-[0.22em] uppercase text-gray-800 font-extrabold leading-none mt-0.5">
                            & BRIDAL MAKEUP STUDIO
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `relative text-sm font-bold tracking-wide transition-colors py-1 ${
                                    isActive
                                        ? 'text-primary-dark font-extrabold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-dark after:rounded-full'
                                        : 'text-gray-800 hover:text-primary-dark'
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    {/* Favorite Heart Link on Top after Contact Menu */}
                    <NavLink
                        to="/services?category=Favorites"
                        className={({ isActive }) =>
                            `relative text-sm font-bold tracking-wide transition-all py-1 flex items-center gap-1.5 ${
                                isActive
                                    ? 'text-rose-600 font-extrabold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-rose-600 after:rounded-full'
                                    : 'text-gray-800 hover:text-rose-600'
                            }`
                        }
                        title="Your Saved Favorites"
                    >
                        <FaHeart className="text-rose-500" size={14} />
                        <span>Favorites</span>
                        {favoriteCount > 0 && (
                            <span className="bg-rose-500 text-white font-black text-[10px] px-1.5 py-0.5 rounded-full leading-none shadow-xs">
                                {favoriteCount}
                            </span>
                        )}
                    </NavLink>
                </nav>

                {/* Desktop Action Buttons */}
                <div className="hidden lg:flex items-center gap-3">
                    <a
                        href="tel:+918075340778"
                        className="p-2 text-gray-700 hover:text-primary-dark transition-colors"
                        title="Call Salon"
                    >
                        <FaPhoneAlt size={16} />
                    </a>
                    <button
                        onClick={() => openBooking()}
                        className="btn-primary py-2.5 px-5 text-sm font-bold flex items-center gap-2 shadow-sm"
                    >
                        <FaCalendarCheck /> Book Now
                    </button>
                </div>

                {/* Mobile Right Icons: Favorite Heart + Circular Gold Phone + Hamburger */}
                <div className="flex items-center gap-2 lg:hidden">
                    {/* Mobile Favorite Heart Button */}
                    <Link
                        to="/services?category=Favorites"
                        className="relative w-9 h-9 rounded-full border border-rose-200 text-rose-500 flex items-center justify-center hover:bg-rose-50 active:scale-95 transition-all shadow-xs"
                        aria-label="Saved Favorites"
                        title="Saved Favorites"
                    >
                        <FaHeart size={14} className="text-rose-500" />
                        {favoriteCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-rose-600 text-white font-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                                {favoriteCount}
                            </span>
                        )}
                    </Link>

                    {/* Circular Gold Phone Button */}
                    <a
                        href="tel:+918075340778"
                        className="w-9 h-9 rounded-full border border-amber-500/70 text-amber-700 flex items-center justify-center hover:bg-amber-50 active:scale-95 transition-all shadow-xs"
                        aria-label="Call Studio"
                        title="Call Salon"
                    >
                        <FaPhoneAlt size={13} />
                    </a>

                    {/* Hamburger Button with 3 horizontal lines */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-9 h-9 flex flex-col justify-center items-center gap-1.5 p-1 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none"
                        aria-label="Toggle Navigation Menu"
                    >
                        <span className={`w-5 h-0.5 bg-gray-900 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`w-5 h-0.5 bg-gray-900 rounded-full transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                        <span className={`w-5 h-0.5 bg-gray-900 rounded-full transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Drawer Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-x-0 top-full bg-black/60 backdrop-blur-sm z-50 lg:hidden shadow-2xl"
                    style={{ height: 'calc(100vh - 100%)' }}
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="bg-white border-b border-amber-200/80 shadow-2xl p-5 flex flex-col gap-3 max-h-[80vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <nav className="flex flex-col divide-y divide-gray-100">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `py-3 text-sm font-bold flex items-center justify-between transition-colors ${
                                            isActive
                                                ? 'text-primary-dark font-extrabold bg-primary-50/60 px-3 rounded-xl'
                                                : 'text-gray-900 hover:text-primary-dark px-1'
                                        }`
                                    }
                                >
                                    <span>{link.name}</span>
                                    <span className="text-xs text-gray-400">&rarr;</span>
                                </NavLink>
                            ))}

                            {/* Mobile Drawer Favorites Link after Contact */}
                            <NavLink
                                to="/services?category=Favorites"
                                className={({ isActive }) =>
                                    `py-3 text-sm font-bold flex items-center justify-between transition-colors ${
                                        isActive
                                            ? 'text-rose-600 font-extrabold bg-rose-50 px-3 rounded-xl'
                                            : 'text-gray-900 hover:text-rose-600 px-1'
                                    }`
                                }
                            >
                                <div className="flex items-center gap-2">
                                    <FaHeart className="text-rose-500 text-sm" />
                                    <span>Favorites / Wishlist</span>
                                </div>
                                <span className="bg-rose-100 text-rose-700 text-xs font-black px-2 py-0.5 rounded-full">
                                    {favoriteCount}
                                </span>
                            </NavLink>
                        </nav>

                        <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    openBooking();
                                }}
                                className="w-full btn-primary py-3 flex items-center justify-center gap-2 shadow-md text-xs font-bold"
                            >
                                <FaCalendarCheck /> Book Appointment
                            </button>

                            <div className="grid grid-cols-2 gap-2">
                                <a
                                    href="https://wa.me/918075340778"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 text-emerald-800 font-bold bg-emerald-50 border border-emerald-300 py-2.5 rounded-xl text-xs"
                                >
                                    <FaWhatsapp size={15} /> WhatsApp
                                </a>
                                <a
                                    href="tel:+918075340778"
                                    className="flex items-center justify-center gap-2 text-primary-dark font-bold bg-primary-50 border border-primary-300 py-2.5 rounded-xl text-xs"
                                >
                                    <FaPhoneAlt size={12} /> Call Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
