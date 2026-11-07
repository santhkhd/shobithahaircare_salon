import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { specialOffers } from '../data/offers';
import { FaTag, FaArrowRight, FaTimes, FaWhatsapp } from 'react-icons/fa';

const OfferBanner = () => {
    const [dismissed, setDismissed] = useState(false);

    if (!specialOffers.showTopBanner || dismissed) {
        return null;
    }

    const { badge, text, linkText, linkRoute, whatsappMessage } = specialOffers.banner;

    return (
        <div className="relative z-50 bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#8C6D1F] text-white py-2 px-3 sm:px-4 shadow-sm text-xs sm:text-sm font-medium">
            <div className="container-custom flex items-center justify-between gap-2 sm:gap-4">
                
                {/* Left/Center Content */}
                <div className="flex items-center gap-2 flex-1 justify-center sm:justify-start overflow-hidden">
                    {badge && (
                        <span className="bg-white/20 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider uppercase shrink-0 border border-white/30 animate-pulse">
                            {badge}
                        </span>
                    )}
                    <p className="truncate text-center sm:text-left text-white drop-shadow-sm font-semibold">
                        {text}
                    </p>
                </div>

                {/* Right Action & Close Button */}
                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    {linkRoute && (
                        <Link
                            to={linkRoute}
                            className="hidden sm:inline-flex items-center gap-1.5 bg-white text-gray-900 px-3 py-1 rounded-full text-xs font-extrabold hover:bg-amber-50 transition shadow-sm"
                        >
                            {linkText || 'View Offer'} <FaArrowRight size={10} />
                        </Link>
                    )}
                    
                    <a
                        href={`https://wa.me/918075340778?text=${encodeURIComponent(whatsappMessage || 'Hello, I want to inquire about the current offer!')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 bg-[#25D366] text-white px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold hover:bg-[#1EBE5D] transition shadow-sm"
                    >
                        <FaWhatsapp size={13} />
                        <span className="hidden xs:inline">Claim</span>
                    </a>

                    <button
                        onClick={() => setDismissed(true)}
                        className="w-6 h-6 rounded-full bg-black/15 hover:bg-black/30 flex items-center justify-center text-white/90 hover:text-white transition"
                        aria-label="Dismiss banner"
                    >
                        <FaTimes size={10} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OfferBanner;

