import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { services } from '../data/services';
import { useBooking } from '../context/BookingContext';
import { motion } from 'framer-motion';
import { FaClock, FaTag, FaChevronLeft, FaWhatsapp, FaCheckCircle, FaQuestionCircle } from 'react-icons/fa';

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { openBooking } = useBooking();
    const service = services.find(s => s.id === id);

    useEffect(() => {
        if (!service) {
            navigate('/services');
        }
    }, [service, navigate]);

    if (!service) return null;

    const faqs = [
        { q: "How long does it last?", a: `The ${service.name} typically takes ${service.duration} and results can vary.` },
        { q: "Do I need an appointment?", a: "Yes, we recommend booking at least 24 hours in advance." },
        { q: "What products do you use?", a: "We only use premium, certified salon-grade products for all our treatments." }
    ];

    return (
        <div className="pt-24 pb-20">
            <div className="container-custom">
                {/* Breadcrumb */}
                <Link to="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition mb-8 group">
                    <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Services
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image & Main Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="rounded-3xl overflow-hidden shadow-2xl mb-8">
                            <img src={service.image} alt={service.name} className="w-full h-[500px] object-cover" />
                        </div>

                        <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">?</span>
                                Frequently Asked Questions
                            </h3>
                            <div className="space-y-6">
                                {faqs.map((faq, idx) => (
                                    <div key={idx}>
                                        <h4 className="font-semibold text-gray-900 mb-1">{faq.q}</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Details Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col"
                    >
                        <div className="mb-4 flex items-center gap-4">
                            <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                                {service.category}
                            </span>
                            <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                                <FaClock className="text-primary" /> {service.duration}
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl heading-serif mb-6">{service.name}</h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed italic border-l-4 border-primary/30 pl-6">
                            {service.description}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6 mb-10 pb-10 border-b border-gray-100">
                            <div className="text-3xl font-bold text-primary">
                                Starting at {service.price}
                            </div>
                            <button
                                onClick={() => openBooking(service)}
                                className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3 px-10"
                            >
                                <FaWhatsapp size={22} /> Book Appointment
                            </button>
                        </div>

                        <div className="space-y-10">
                            {/* Benefits */}
                            <div>
                                <h3 className="text-2xl font-serif font-bold mb-6">Key Benefits</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {service.details.benefits.map((benefit, idx) => (
                                        <div key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                                            <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                            <span className="text-gray-700 font-medium">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Process */}
                            <div>
                                <h3 className="text-2xl font-serif font-bold mb-6">How It's Done</h3>
                                <div className="space-y-4">
                                    {service.details.steps.map((step, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center">
                                                {idx + 1}
                                            </span>
                                            <p className="text-gray-700 pt-1 leading-relaxed">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Aftercare */}
                            <div className="bg-secondary/5 p-6 rounded-2xl border border-secondary/10">
                                <h3 className="text-lg font-bold text-secondary mb-3 underline decoration-primary/30 underline-offset-4">Aftercare Advice</h3>
                                <p className="text-gray-700 leading-relaxed italic">
                                    "{service.details.aftercare}"
                                </p>
                            </div>

                            {/* For Who */}
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Ideal for:</h4>
                                <p className="text-gray-600">{service.details.whoFor}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
