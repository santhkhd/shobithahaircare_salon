import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from 'react-icons/fa';

const Layout = ({ children }) => {
    const { pathname } = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="flex flex-col min-h-screen relative">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />

            {/* Floating Buttons */}
            <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
                {/* Scroll Top */}
                <button
                    onClick={scrollToTop}
                    className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition opacity-80 hover:opacity-100"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp />
                </button>

                {/* WhatsApp */}
                <a
                    href="https://wa.me/918075340778"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition hover:scale-110 animate-bounce-slow"
                    aria-label="WhatsApp"
                >
                    <FaWhatsapp size={24} />
                </a>
            </div>

            <div className="fixed bottom-6 left-6 z-40">
                <a
                    href="tel:+918075340778"
                    className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition hover:scale-110 flex items-center justify-center"
                    aria-label="Call Now"
                >
                    <FaPhoneAlt size={20} />
                </a>
            </div>
        </div>
    );
};

export default Layout;
