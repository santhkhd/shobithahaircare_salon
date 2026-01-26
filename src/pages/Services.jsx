import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services, categories } from '../data/services';
import { useBooking } from '../context/BookingContext';
import { Link } from 'react-router-dom';
import { FaSearch, FaWhatsapp, FaArrowRight, FaClock, FaTag } from 'react-icons/fa';

const Services = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const { openBooking } = useBooking();

    const filteredServices = services.filter(service => {
        const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="pt-24 pb-20">
            {/* Header */}
            <section className="bg-primary/5 py-16 mb-12">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl heading-serif mb-4">Our Services</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">Explore our wide range of professional beauty and hair treatments. From everyday grooming to luxury bridal makeovers.</p>
                </div>
            </section>

            <div className="container-custom">
                {/* Search and Filter */}
                <div className="flex flex-col md:flex-row justify-between gap-6 mb-12 sticky top-20 z-30 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-gray-100">
                    <div className="relative flex-1">
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search services..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                        />
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                        <button
                            onClick={() => setActiveCategory('All')}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === 'All'
                                    ? 'bg-primary text-white shadow-md'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            All
                        </button>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === cat
                                        ? 'bg-primary text-white shadow-md'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredServices.map((service) => (
                            <motion.div
                                key={service.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1 shadow-sm">
                                        <FaTag className="text-[10px]" /> {service.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{service.name}</h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>

                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                                            <FaClock className="text-primary" />
                                            <span>{service.duration}</span>
                                        </div>
                                        <div className="text-lg font-bold text-primary">
                                            {service.price}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <Link
                                            to={`/services/${service.id}`}
                                            className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-white transition duration-300"
                                        >
                                            View Details
                                        </Link>
                                        <button
                                            onClick={() => openBooking(service)}
                                            className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition shadow-sm"
                                        >
                                            <FaWhatsapp /> Book Now
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredServices.length === 0 && (
                    <div className="text-center py-20">
                        <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                            <FaSearch size={32} />
                        </div>
                        <h3 className="text-xl font-medium text-gray-900">No services found</h3>
                        <p className="text-gray-600">Try adjusting your search or filters.</p>
                        <button
                            onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                            className="mt-4 text-primary font-medium hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Services;
