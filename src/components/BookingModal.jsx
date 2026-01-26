import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaWhatsapp } from 'react-icons/fa';
import { services, categories } from '../data/services';

const BookingModal = ({ isOpen, onClose, preSelectedService = null }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        category: '',
        service: '',
        date: '',
        time: '',
        location: 'In Salon',
        notes: ''
    });

    useEffect(() => {
        if (preSelectedService) {
            setFormData(prev => ({
                ...prev,
                category: preSelectedService.category,
                service: preSelectedService.name
            }));
        }
    }, [preSelectedService]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, phone, service, date, time, location, notes } = formData;

        const message = `Hello Shobitha Haircare 👋✨
I would like to book an appointment 💇
    
👤 Name: ${name}
📞 Phone: ${phone}
💎 Service: ${service}
📅 Date: ${date}
⏰ Time: ${time}
📍 Location: ${location}
📝 Notes: ${notes || 'None'}
    
Please confirm availability 🙏💛`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/918075340778?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden relative"
                >
                    {/* Header */}
                    <div className="bg-primary p-4 flex justify-between items-center text-white">
                        <h3 className="text-xl font-serif font-semibold">Book Appointment</h3>
                        <button onClick={onClose} className="hover:bg-white/20 p-2 rounded-full transition"><FaTimes /></button>
                    </div>

                    {/* Body */}
                    <div className="p-6 max-h-[80vh] overflow-y-auto">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="Your Name" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="10-digit number" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                    <select name="category" value={formData.category} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-primary outline-none">
                                        <option value="">Select Category</option>
                                        {categories.map((cat, idx) => <option key={idx} value={cat}>{cat}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                                    <select name="service" value={formData.service} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-primary outline-none">
                                        <option value="">Select Service</option>
                                        {services.filter(s => !formData.category || s.category === formData.category).map(s => (
                                            <option key={s.id} value={s.name}>{s.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                    <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-primary outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                                    <input required type="time" name="time" value={formData.time} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-primary outline-none" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Location preference</label>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="location" value="In Salon" checked={formData.location === 'In Salon'} onChange={handleChange} className="text-primary focus:ring-primary" />
                                        <span>In Salon</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="location" value="Home Service" checked={formData.location === 'Home Service'} onChange={handleChange} className="text-primary focus:ring-primary" />
                                        <span>Home Service</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Notes (Optional)</label>
                                <textarea rows="2" name="notes" value={formData.notes} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-primary outline-none"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg">
                                <FaWhatsapp size={20} />
                                Book via WhatsApp
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default BookingModal;
