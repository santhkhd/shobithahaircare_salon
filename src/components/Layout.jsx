import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaPhoneAlt, FaArrowUp, FaWhatsapp, FaCalendarCheck } from 'react-icons/fa';
import WhatsAppWidget from './WhatsAppWidget';
import { useBooking } from '../context/BookingContext';

const Layout = ({ children }) => {
    const { pathname } = useLocation();
    const { openBooking } = useBooking();
    const [showScroll, setShowScroll] = useState(false);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const checkScrollTop = () => {
            if (window.pageYOffset > 400) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', checkScrollTop, { passive: true });
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const isAdminRoute = pathname.startsWith('/admin') || pathname.startsWith('/price-editor');

    return (
        <div className="flex flex-col min-h-screen relative bg-[#FAF9F6] text-gray-800">
            <Navbar />
            
            {/* Main Content with bottom padding on mobile to account for fixed bottom bar */}
            <main className={`flex-grow ${isAdminRoute ? 'pb-8' : 'pb-24 lg:pb-0'}`}>
                {children}
            </main>
            
            {!isAdminRoute && <Footer />}

            {/* Desktop Floating Actions */}
            <div className="hidden lg:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 pointer-events-none">
                {/* Scroll Top */}
                {showScroll && (
                    <button
                        onClick={scrollToTop}
                        className="bg-dark text-white p-3.5 rounded-full shadow-lg hover:bg-primary transition-all duration-300 opacity-90 hover:opacity-100 pointer-events-auto transform hover:-translate-y-1"
                        aria-label="Scroll to top"
                    >
                        <FaArrowUp size={16} />
                    </button>
                )}

                <div className="pointer-events-auto">
                    <WhatsAppWidget />
                </div>
            </div>

            {/* Mobile Fixed Bottom Action Bar - Neat, Premium & Comfortable (Hidden on Admin) */}
            {!isAdminRoute && (
                <aside aria-label="Quick contact and booking bar" className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/98 backdrop-blur-md border-t border-amber-200/80 pt-2 pb-3.5 px-3 sm:px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
                    <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
                        {/* Call Us */}
                        <a
                            href="tel:+918075340778"
                            className="flex-1 h-10 sm:h-11 px-2.5 rounded-full border border-amber-300 text-gray-800 text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 bg-white hover:bg-amber-50 active:scale-95 transition-all shadow-xs"
                        >
                            <FaPhoneAlt className="text-amber-700 text-xs sm:text-sm shrink-0" />
                            <span className="whitespace-nowrap">Call Us</span>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/918075340778?text=Hello%20Shobitha%20Haircare,%20I%20would%20like%20to%20book%20an%20appointment"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 h-10 sm:h-11 px-2.5 rounded-full border border-emerald-300 text-gray-800 text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 bg-white hover:bg-emerald-50 active:scale-95 transition-all shadow-xs"
                        >
                            <FaWhatsapp className="text-[#25D366] text-sm sm:text-base shrink-0" />
                            <span className="whitespace-nowrap">WhatsApp</span>
                        </a>

                        {/* Book Appointment */}
                        <button
                            type="button"
                            onClick={() => openBooking()}
                            className="flex-[1.3] h-10 sm:h-11 px-3 rounded-full bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white text-xs sm:text-sm font-extrabold flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
                        >
                            <FaCalendarCheck size={13} className="shrink-0" />
                            <span className="whitespace-nowrap">Book Appointment</span>
                        </button>
                    </div>
                </aside>
            )}
        </div>
    );
};

export default Layout;
