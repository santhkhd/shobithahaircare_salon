import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalculator, FaWhatsapp, FaCalendarCheck } from 'react-icons/fa';

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

    const serviceLabels = {
        smoothening: 'Smoothening',
        keratin: 'Keratin Protein',
        botox: 'Hair Botox',
        spa: 'Deep Hair Spa'
    };

    return (
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 max-w-4xl mx-auto flex flex-col md:flex-row">
            <div className="flex-1 p-6 sm:p-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-primary-50 text-primary-dark border border-primary-200 flex items-center justify-center">
                        <FaCalculator size={18} />
                    </div>
                    <div>
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">Price Estimator</h3>
                        <p className="text-xs text-gray-500">Calculate personalized chemical & spa treatment costs</p>
                    </div>
                </div>

                <div className="space-y-6 sm:space-y-8">
                    {/* Service Selection */}
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                            1. Select Treatment
                        </label>
                        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                            {Object.keys(prices).map((s) => (
                                <button
                                    key={s}
                                    type="button"
                                    onClick={() => setService(s)}
                                    className={`py-3 px-3.5 rounded-2xl border transition-all text-xs sm:text-sm font-semibold capitalize text-left flex items-center justify-between ${
                                        service === s
                                            ? 'border-primary bg-primary-50 text-primary-dark shadow-sm ring-1 ring-primary'
                                            : 'border-gray-200 hover:border-gray-300 text-gray-700 bg-white'
                                    }`}
                                >
                                    <span>{serviceLabels[s] || s}</span>
                                    {service === s && <span className="text-primary-dark text-xs">●</span>}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Length Selection */}
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                            2. Select Hair Length
                        </label>
                        <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                            {[
                                { key: 'short', label: 'Short (Neck)' },
                                { key: 'medium', label: 'Medium (Shoulder)' },
                                { key: 'long', label: 'Long (Waist)' }
                            ].map((l) => (
                                <button
                                    key={l.key}
                                    type="button"
                                    onClick={() => setLength(l.key)}
                                    className={`py-3 px-2 rounded-2xl border transition-all text-xs sm:text-sm font-semibold text-center ${
                                        length === l.key
                                            ? 'border-dark bg-dark text-white shadow-sm'
                                            : 'border-gray-200 hover:border-gray-300 text-gray-700 bg-white'
                                    }`}
                                >
                                    {l.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Price Result Column */}
            <div className="md:w-80 bg-[#FAF6EC] p-6 sm:p-10 flex flex-col items-center justify-center text-center border-t md:border-t-0 md:border-l border-primary-100">
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">
                    Estimated Cost
                </span>

                <motion.div
                    key={currentPrice}
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-4xl sm:text-5xl font-bold text-primary-dark mb-1"
                >
                    ₹{currentPrice.toLocaleString('en-IN')}*
                </motion.div>

                <p className="text-[11px] text-gray-500 mb-6 italic max-w-[200px] leading-tight">
                    *Final quote may vary based on exact hair volume and product usage.
                </p>

                <button
                    onClick={() => openBooking({
                        name: `${serviceLabels[service]} (${length} length)`,
                        category: 'Hair Services'
                    })}
                    className="w-full btn-primary py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md"
                >
                    <FaCalendarCheck size={14} />
                    Book This Service
                </button>
            </div>
        </div>
    );
};

export default PriceCalculator;
