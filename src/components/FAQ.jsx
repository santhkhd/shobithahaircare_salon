import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
    {
        question: "How long does a Keratin treatment last?",
        answer: "Typically, a Keratin treatment lasts between 3 to 5 months depending on your hair type and how well you maintain it using sulfate-free shampoos."
    },
    {
        question: "Do I need to book an appointment for bridal makeup?",
        answer: "Yes, we recommend booking bridal services at least 2-3 months in advance to ensure availability on your special day."
    },
    {
        question: "Which hair color brands do you use?",
        answer: "We use premium international brands like L'Oréal Professional, Schwarzkopf, and Matrix to ensure the best color payoff and hair health."
    },
    {
        question: "Is hair smoothening safe for damaged hair?",
        answer: "Our experts perform a hair analysis first. If your hair is severely damaged, we might recommend a restorative treatment like Botox or intensive Spa before smoothening."
    },
    {
        question: "Do you offer home services for weddings?",
        answer: "Yes, for bridal bookings, our team can travel to your venue or home within and outside Kanhangad."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`rounded-2xl border transition-all duration-300 ${activeIndex === index ? 'border-primary bg-primary/5 shadow-md' : 'border-gray-100 bg-white hover:border-gray-200'}`}
                    >
                        <button
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                        >
                            <span className={`font-bold transition-colors ${activeIndex === index ? 'text-primary' : 'text-gray-900'}`}>
                                {faq.question}
                            </span>
                            <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${activeIndex === index ? 'bg-primary text-white border-primary' : 'text-gray-400 border-gray-200'}`}>
                                {activeIndex === index ? <FaMinus size={12} /> : <FaPlus size={12} />}
                            </div>
                        </button>
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
