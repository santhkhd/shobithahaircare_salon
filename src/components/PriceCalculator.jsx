import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalculator, FaWhatsapp } from 'react-icons/fa';

const PriceCalculator = ({ openBooking }) => {
    const [service, setService] = useState('smoothening');
    const [length, setLength] = useState('medium');

    const prices = {
        smoothening: { short: 3500, medium: 4500, long: 6000 },
        keratin: { short: 4000, medium: 5500, long: 7500 },
        botox: { short: 5000, medium: 7000, long: 9000 },
        spa: { short: 800, medium: 1200, long: 1800 }
    };

    const currentPrice = prices[service][length];

    return (
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100 max-w-4xl mx-auto flex flex-col md:flex-row">
            <div className="flex-1 p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <FaCalculator />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900">Price Estimator</h3>
                </div>

                <div className="space-y-8">
                    {/* Service Selection */}
                    <div>
                        <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Select Treatment</label>
                        <div className="grid grid-cols-2 gap-3">
                            {Object.keys(prices).map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setService(s)}
                                    className={`py-3 px-4 rounded-xl border-2 transition-all font-medium capitalize ${service === s ? 'border-primary bg-primary/5 text-primary' : 'border-gray-100 hover:border-gray-200 text-gray-600'}`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Length Selection */}
                    <div>
                        <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Hair Length</label>
                        <div className="flex gap-3">
                            {['short', 'medium', 'long'].map((l) => (
                                <button
                                    key={l}
                                    onClick={() => setLength(l)}
                                    className={`flex-1 py-3 rounded-xl border-2 transition-all font-medium capitalize ${length === l ? 'border-dark bg-dark text-white' : 'border-gray-100 hover:border-gray-200 text-gray-600'}`}
                                >
                                    {l}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:w-72 bg-gray-50 p-8 md:p-12 flex flex-col items-center justify-center text-center border-l border-gray-100">
                <span className="text-gray-500 text-sm font-medium mb-2 uppercase tracking-widest">Estimated Price</span>
                <motion.div
                    key={currentPrice}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-5xl font-bold text-gray-900 mb-2"
                >
                    ₹{currentPrice}*
                </motion.div>
                <p className="text-gray-400 text-[10px] mb-8 italic">
                    *Prices are subject to hair density and specific requirements.
                </p>
                <button
                    onClick={() => openBooking(`Hi! I used the price calculator and got an estimate of ₹${currentPrice} for ${service} (${length} hair). I'd like to book an appointment!`)}
                    className="w-full bg-green-500 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition shadow-lg shadow-green-200 hover:scale-105 active:scale-95"
                >
                    <FaWhatsapp size={20} />
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default PriceCalculator;
