import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isOpen) setShowMessage(true);
        }, 3500);
        return () => clearTimeout(timer);
    }, [isOpen]);

    const phoneNumber = "918075340778";
    const messageTemplate = "Hi Shobitha Haircare! I'd like to inquire about booking a salon or bridal service. Could you share more details?";

    return (
        <div className="flex flex-col items-end gap-3 relative">
            <AnimatePresence>
                {showMessage && !isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: 10 }}
                        className="bg-white px-4 py-2.5 rounded-2xl shadow-xl border border-primary/20 text-xs font-medium text-gray-800 relative mb-1 cursor-pointer max-w-xs"
                        onClick={() => {
                            setIsOpen(true);
                            setShowMessage(false);
                        }}
                    >
                        <span>Chat with us on WhatsApp ✨</span>
                        <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white rotate-45 border-r border-b border-primary/20"></div>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowMessage(false);
                            }}
                            className="absolute -top-2 -left-2 bg-gray-100 rounded-full p-1 text-gray-400 hover:text-gray-700 shadow-sm"
                            aria-label="Dismiss message"
                        >
                            <FaTimes size={9} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="bg-white w-72 md:w-80 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden mb-2"
                    >
                        {/* Header */}
                        <div className="bg-emerald-600 p-4 text-white flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center relative">
                                    <FaWhatsapp size={22} />
                                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-300 border-2 border-emerald-600 rounded-full"></div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm leading-tight">Shobitha Haircare</h4>
                                    <p className="text-[11px] text-white/80">Kanhangad • Quick replies</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:rotate-90 transition duration-200 text-white/90 hover:text-white p-1"
                                aria-label="Close chat"
                            >
                                <FaTimes size={16} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-4 bg-gray-50 flex flex-col justify-center">
                            <div className="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-sm text-xs text-gray-700 leading-relaxed border border-gray-100">
                                Namaskaram! 👋 <br />
                                Welcome to <strong className="text-primary-dark">Shobitha Haircare & Bridal Studio</strong>. How can we assist you with your hair or bridal makeover today?
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-3 bg-white">
                            <a
                                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageTemplate)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition shadow-md shadow-emerald-200"
                            >
                                <FaPaperPlane size={12} />
                                Start WhatsApp Chat
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                    setShowMessage(false);
                }}
                className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                    isOpen
                        ? 'bg-dark rotate-90'
                        : 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/30'
                }`}
                aria-label="WhatsApp"
            >
                {isOpen ? <FaTimes size={20} /> : <FaWhatsapp size={28} />}
            </button>
        </div>
    );
};

export default WhatsAppWidget;
