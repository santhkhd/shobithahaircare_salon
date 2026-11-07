import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaWhatsapp, FaCalendarCheck } from 'react-icons/fa';
import { services, categories } from '../data/services';

const BookingModal = ({ isOpen, onClose, preSelectedService = null }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        category: '',
        service: '',
        date: '',
        time: '',
        location: 'In Salon (Kanhangad)',
        notes: ''
    });

    useEffect(() => {
        if (preSelectedService) {
            if (typeof preSelectedService === 'string') {
                setFormData(prev => ({
                    ...prev,
                    notes: preSelectedService
                }));
            } else {
                setFormData(prev => ({
                    ...prev,
                    category: preSelectedService.category || '',
                    service: preSelectedService.name || ''
                }));
            }
        }
    }, [preSelectedService]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, phone, category, service, date, time, location, notes } = formData;

        const message = `*Shobitha Haircare Appointment Booking* 💇✨
--------------------------------------
👤 *Name:* ${name}
📞 *Phone:* ${phone}
💎 *Category:* ${category || 'General'}
✨ *Service:* ${service || 'Salon Consultation'}
📅 *Preferred Date:* ${date || 'Flexible'}
⏰ *Preferred Time:* ${time || 'Standard Hours'}
📍 *Location:* ${location}
📝 *Special Notes:* ${notes || 'None'}
--------------------------------------
Please let me know if this slot is available. Thank you! 🙏💛`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/918075340778?text=${encodedMessage}`;

        // Save appointment lead into local storage for Admin Panel log
        try {
            const existing = JSON.parse(localStorage.getItem('shobitha_appointment_leads') || '[]');
            const newLead = {
                id: Date.now(),
                name: name || 'Anonymous Guest',
                phone: phone || 'Not provided',
                category: category || 'General',
                service: service || 'Salon Consultation',
                date: date || 'Flexible',
                time: time || 'Standard Hours',
                location: location || 'In Salon',
                notes: notes || '',
                createdAt: new Date().toISOString(),
                status: 'New'
            };
            localStorage.setItem('shobitha_appointment_leads', JSON.stringify([newLead, ...existing]));
        } catch (err) {}

        window.open(whatsappUrl, '_blank');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-dark/70 backdrop-blur-sm overflow-y-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 15 }}
                    className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden relative my-auto border border-gray-100"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="bg-primary text-white p-5 flex justify-between items-center">
                        <div>
                            <h3 className="text-xl font-serif font-bold">Book an Appointment</h3>
                            <p className="text-xs text-white/85">Shobitha Haircare & Bridal Makeup Studio</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                            aria-label="Close"
                        >
                            <FaTimes size={16} />
                        </button>
                    </div>

                    {/* Form Body */}
                    <div className="p-5 sm:p-7 max-h-[75vh] overflow-y-auto touch-scroll">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                                    Your Full Name *
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-[#FAF9F6] border border-gray-200 rounded-xl px-4 py-2.5 sm:py-3 text-base text-gray-800 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                                    placeholder="e.g. Anjali Nair"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                                    Phone / WhatsApp Number *
                                </label>
                                <input
                                    required
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-[#FAF9F6] border border-gray-200 rounded-xl px-4 py-2.5 sm:py-3 text-base text-gray-800 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                                    placeholder="+91 XXXXX XXXXX"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                                        Category
                                    </label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="w-full bg-[#FAF9F6] border border-gray-200 rounded-xl px-3 py-2.5 text-sm sm:text-base text-gray-800 focus:ring-2 focus:ring-primary outline-none"
                                    >
                                        <option value="">All Categories</option>
                                        {categories.map((c, i) => (
                                            <option key={i} value={c}>{c}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                                        Service
                                    </label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full bg-[#FAF9F6] border border-gray-200 rounded-xl px-3 py-2.5 text-sm sm:text-base text-gray-800 focus:ring-2 focus:ring-primary outline-none"
                                    >
                                        <option value="">Select Service</option>
                                        {services
                                            .filter(s => !formData.category || s.category === formData.category)
                                            .map((s) => (
                                                <option key={s.id} value={s.name}>{s.name} ({s.price})</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                                        Preferred Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="w-full bg-[#FAF9F6] border border-gray-200 rounded-xl px-3 py-2.5 text-sm sm:text-base text-gray-800 focus:ring-2 focus:ring-primary outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                                        Preferred Time
                                    </label>
                                    <input
                                        type="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        className="w-full bg-[#FAF9F6] border border-gray-200 rounded-xl px-3 py-2.5 text-sm sm:text-base text-gray-800 focus:ring-2 focus:ring-primary outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                                    Special Notes / Add-ons / Requests
                                </label>
                                <textarea
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    rows="2"
                                    className="w-full bg-[#FAF9F6] border border-gray-200 rounded-xl px-4 py-2 text-sm sm:text-base text-gray-800 focus:ring-2 focus:ring-primary outline-none"
                                    placeholder="Add-on preferences, skin/hair conditions, or time flexibility..."
                                ></textarea>
                            </div>

                            <p className="text-[11px] text-gray-500 bg-amber-50/70 p-2.5 rounded-xl border border-amber-200/80 leading-relaxed">
                                ℹ️ <strong>Confirmation Note:</strong> Submitting this request sends your details to our WhatsApp team. Appointments are confirmed once our team verifies stylist availability.
                            </p>

                            <button
                                type="submit"
                                className="w-full btn-primary py-3.5 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                            >
                                <FaWhatsapp size={18} /> Send Booking Request on WhatsApp
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default BookingModal;
