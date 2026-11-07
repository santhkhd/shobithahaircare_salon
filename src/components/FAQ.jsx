import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
    {
        question: "How long does a Keratin or Smoothening treatment last?",
        answer: "Typically, our signature Keratin treatment lasts 3 to 5 months, while permanent smoothening stays straight until new root growth. We recommend sulfate-free shampoos and regular spa conditioning for maximum longevity."
    },
    {
        question: "How far in advance should I reserve bridal makeup?",
        answer: "For auspicious wedding dates in Kerala (especially Muhurtham dates in peak seasons), we strongly recommend reserving your slot 2 to 4 months in advance to guarantee availability for you and your family."
    },
    {
        question: "Which professional brands and cosmetics are used?",
        answer: "We use globally recognized salon brands including L'Oréal Professionnel, Schwarzkopf, Kryolan, MAC, and O3+ to ensure zero irritation, high color payoff, and safe long-lasting performance."
    },
    {
        question: "Do you provide on-venue bridal services outside the salon?",
        answer: "Yes, our bridal team travels to wedding venues, auditoriums, resorts, and private residences across Kanhangad, Kasaragod, and neighboring areas."
    },
    {
        question: "Is hair smoothening suitable for chemically damaged or bleached hair?",
        answer: "Our specialists always conduct an initial hair elasticity and strand assessment. If your hair is sensitized or brittle, we recommend a restorative hair botox or protein reconstructor spa before chemical processing."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="max-w-3xl mx-auto">
            <div className="space-y-3 sm:space-y-4">
                {faqs.map((faq, index) => {
                    const isOpen = activeIndex === index;
                    return (
                        <div
                            key={index}
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                                isOpen
                                    ? 'border-primary/60 bg-[#FAF6EC] shadow-sm'
                                    : 'border-gray-200 bg-white hover:border-gray-300'
                            }`}
                        >
                            <button
                                onClick={() => setActiveIndex(isOpen ? null : index)}
                                className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4"
                                aria-expanded={isOpen}
                            >
                                <span className={`font-semibold text-sm sm:text-base transition-colors ${isOpen ? 'text-primary-dark font-bold' : 'text-gray-900'}`}>
                                    {faq.question}
                                </span>
                                <div
                                    className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${
                                        isOpen
                                            ? 'bg-primary text-white'
                                            : 'text-gray-400 bg-gray-100'
                                    }`}
                                >
                                    {isOpen ? <FaMinus size={10} /> : <FaPlus size={10} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <div className="px-5 sm:px-6 pb-5 pt-1 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-primary-100/50">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FAQ;
