import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        // Show a little "How can I help?" bubble after 3 seconds
        const timer = setTimeout(() => {
            if (!isOpen) setShowMessage(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, [isOpen]);

    const phoneNumber = "918075340778";
    const messageTemplate = "Hi Shobitha Haircare! I'm interested in booking a service. Could you tell me more?";

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            <AnimatePresence>
                {showMessage && !isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: 20 }}
                        className="bg-white px-4 py-2 rounded-2xl shadow-xl border border-green-100 text-sm font-medium text-gray-700 relative mb-2"
                    >
                        How can I help you today? ✨
                        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 border-r border-b border-green-100"></div>
                        <button
                            onClick={(e) => { e.stopPropagation(); setShowMessage(false); }}
                            className="absolute -top-2 -left-2 bg-gray-100 rounded-full p-1 text-gray-400 hover:text-gray-600"
                        >
                            <FaTimes size={10} />
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
                        className="bg-white w-72 md:w-80 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden mb-4"
                    >
                        {/* Header */}
                        <div className="bg-green-600 p-4 text-white flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center relative">
                                    <FaWhatsapp size={24} />
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Shobitha Haircare</h4>
                                    <p className="text-[10px] text-white/80">Typically replies in 15 mins</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition duration-300">
                                <FaTimes size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-4 bg-gray-50 h-32 flex flex-col justify-center">
                            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700">
                                Hi there! 👋 <br />
                                Welcome to Shobitha Haircare. How can we help you look beautiful today?
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-4 bg-white">
                            <a
                                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageTemplate)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition"
                            >
                                <FaPaperPlane size={14} />
                                Start Chat
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
                className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 ${isOpen ? 'bg-gray-800 rotate-90' : 'bg-green-500 animate-bounce-slow'}`}
            >
                {isOpen ? <FaTimes size={24} /> : <FaWhatsapp size={32} />}
            </button>
        </div>
    );
};

export default WhatsAppWidget;
