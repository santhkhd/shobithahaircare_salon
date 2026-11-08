import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FaTimes, FaWhatsapp, FaCalendarCheck, FaUser, FaPhoneAlt, 
    FaCut, FaClock, FaCalendarAlt, FaCheck, FaMagic
} from 'react-icons/fa';
import { services, categories } from '../data/services';

const BookingModal = ({ isOpen, onClose, preSelectedService = null }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        category: '',
        service: '',
        date: '',
        time: '',
        location: 'In Studio (Kanhangad)',
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

    // Quick 1-Tap Date Helpers (Today, Tomorrow, This Weekend)
    const setQuickDate = (type) => {
        const today = new Date();
        let target = new Date();
        if (type === 'today') {
            target = today;
        } else if (type === 'tomorrow') {
            target.setDate(today.getDate() + 1);
        } else if (type === 'weekend') {
            const day = today.getDay();
            const daysUntilSat = (6 - day + 7) % 7 || 7;
            target.setDate(today.getDate() + daysUntilSat);
        }
        const yyyy = target.getFullYear();
        const mm = String(target.getMonth() + 1).padStart(2, '0');
        const dd = String(target.getDate()).padStart(2, '0');
        setFormData(prev => ({ ...prev, date: `${yyyy}-${mm}-${dd}` }));
    };

    // Quick 1-Tap Time Slot Helpers
    const setQuickTimeSlot = (slotLabel) => {
        setFormData(prev => ({ ...prev, time: slotLabel }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, phone, category, service, date, time, location, notes } = formData;

        const clientName = name.trim() || 'Salon Guest';
        const clientPhone = phone.trim() || 'Direct via WhatsApp';
        const serviceName = service || 'Salon Consultation / Haircare';

        const message = `*Shobitha Haircare & Bridal Studio Booking Request* 💇✨
--------------------------------------
👤 *Client Name:* ${clientName}
📞 *Phone:* ${clientPhone}
💎 *Category:* ${category || 'General'}
✨ *Selected Service:* ${serviceName}
📅 *Preferred Date:* ${date || 'Earliest Available'}
⏰ *Preferred Time:* ${time || 'Flexible'}
📍 *Studio Location:* ${location}
📝 *Special Notes:* ${notes || 'None'}
--------------------------------------
Hello Shobitha Studio, please let me know if this slot is available. Thank you! 🙏💛`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/918075340778?text=${encodedMessage}`;

        // Save appointment lead into local storage for Admin Panel log
        try {
            const existing = JSON.parse(localStorage.getItem('shobitha_appointment_leads') || '[]');
            const newLead = {
                id: Date.now(),
                name: clientName,
                phone: clientPhone,
                category: category || 'General',
                service: serviceName,
                date: date || 'Flexible',
                time: time || 'Flexible',
                location: location || 'In Studio',
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
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 15 }}
                    className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden relative my-auto border border-[#E8D9C5]"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header - Royal Burgundy & Champagne Gold */}
                    <div className="bg-gradient-to-r from-[#4A0A16] via-[#5C0D1C] to-[#3B0711] text-white p-5 sm:p-6 flex justify-between items-center border-b-2 border-amber-400/80">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-amber-400 text-xs font-black uppercase tracking-widest">
                                    FAST 1-TAP BOOKING
                                </span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-serif font-black text-amber-100">
                                Book an Appointment
                            </h3>
                            <p className="text-xs text-amber-200/90 font-medium mt-0.5">
                                Shobitha Haircare & Bridal Makeup Studio, Kanhangad
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition active:scale-90"
                            aria-label="Close"
                        >
                            <FaTimes size={15} />
                        </button>
                    </div>

                    {/* Form Body - Extra User Friendly & Clean */}
                    <div className="p-5 sm:p-6 max-h-[78vh] overflow-y-auto touch-scroll">
                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* Service Selection (Prominent at top) */}
                            <div className="bg-amber-50/70 p-3.5 sm:p-4 rounded-2xl border border-amber-200/80 space-y-3">
                                <div className="flex items-center justify-between">
                                    <label className="text-xs font-black text-gray-900 uppercase tracking-wider flex items-center gap-1.5">
                                        <FaCut className="text-amber-700" />
                                        <span>Select Service</span>
                                    </label>
                                    <span className="text-[10px] font-extrabold text-amber-800 bg-amber-200/60 px-2 py-0.5 rounded-md">
                                        172+ Services
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                    <div>
                                        <select
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                            className="w-full bg-white border border-gray-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-bold text-gray-800 focus:ring-2 focus:ring-amber-500 outline-none"
                                        >
                                            <option value="">All Categories</option>
                                            {categories.map((c, i) => (
                                                <option key={i} value={c}>{c}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full bg-white border border-gray-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-bold text-gray-800 focus:ring-2 focus:ring-amber-500 outline-none"
                                        >
                                            <option value="">Select Service (or ask on WhatsApp)</option>
                                            {services
                                                .filter(s => !formData.category || s.category === formData.category)
                                                .map((s) => (
                                                    <option key={s.id} value={s.name}>{s.name} ({s.price})</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Date Picker with 1-Tap Chips */}
                            <div>
                                <div className="flex items-center justify-between mb-1.5">
                                    <label className="text-xs font-black text-gray-800 uppercase tracking-wider flex items-center gap-1.5">
                                        <FaCalendarAlt className="text-amber-700" />
                                        <span>Preferred Date</span>
                                    </label>
                                    <span className="text-[10px] text-gray-500 font-semibold">Tap to select:</span>
                                </div>

                                {/* Fast Date Chips */}
                                <div className="flex items-center gap-1.5 mb-2 overflow-x-auto no-scrollbar">
                                    <button
                                        type="button"
                                        onClick={() => setQuickDate('today')}
                                        className="px-3 py-1.5 rounded-xl bg-amber-100/70 hover:bg-amber-200 text-amber-950 text-xs font-bold transition active:scale-95"
                                    >
                                        Today
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setQuickDate('tomorrow')}
                                        className="px-3 py-1.5 rounded-xl bg-amber-100/70 hover:bg-amber-200 text-amber-950 text-xs font-bold transition active:scale-95"
                                    >
                                        Tomorrow
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setQuickDate('weekend')}
                                        className="px-3 py-1.5 rounded-xl bg-amber-100/70 hover:bg-amber-200 text-amber-950 text-xs font-bold transition active:scale-95"
                                    >
                                        This Weekend
                                    </button>
                                </div>

                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="w-full bg-[#FAF9F5] border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-bold text-gray-800 focus:ring-2 focus:ring-amber-500 outline-none"
                                />
                            </div>

                            {/* Preferred Time with 1-Tap Slot Chips */}
                            <div>
                                <div className="flex items-center justify-between mb-1.5">
                                    <label className="text-xs font-black text-gray-800 uppercase tracking-wider flex items-center gap-1.5">
                                        <FaClock className="text-amber-700" />
                                        <span>Preferred Time Slot</span>
                                    </label>
                                </div>

                                {/* Fast Time Chips */}
                                <div className="grid grid-cols-3 gap-1.5 mb-2">
                                    <button
                                        type="button"
                                        onClick={() => setQuickTimeSlot('Morning (10:00 AM – 1:00 PM)')}
                                        className={`px-2 py-2 rounded-xl text-[11px] font-bold border transition text-center ${
                                            formData.time.includes('Morning')
                                                ? 'bg-[#4A0A16] text-amber-300 border-[#4A0A16]'
                                                : 'bg-white border-gray-200 text-gray-700 hover:border-amber-400'
                                        }`}
                                    >
                                        🌅 Morning (10–1)
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setQuickTimeSlot('Afternoon (1:00 PM – 4:00 PM)')}
                                        className={`px-2 py-2 rounded-xl text-[11px] font-bold border transition text-center ${
                                            formData.time.includes('Afternoon')
                                                ? 'bg-[#4A0A16] text-amber-300 border-[#4A0A16]'
                                                : 'bg-white border-gray-200 text-gray-700 hover:border-amber-400'
                                        }`}
                                    >
                                        ☀️ Afternoon (1–4)
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setQuickTimeSlot('Evening (4:00 PM – 7:30 PM)')}
                                        className={`px-2 py-2 rounded-xl text-[11px] font-bold border transition text-center ${
                                            formData.time.includes('Evening')
                                                ? 'bg-[#4A0A16] text-amber-300 border-[#4A0A16]'
                                                : 'bg-white border-gray-200 text-gray-700 hover:border-amber-400'
                                        }`}
                                    >
                                        🌙 Evening (4–7:30)
                                    </button>
                                </div>

                                <input
                                    type="time"
                                    name="time"
                                    value={formData.time.includes(':') && !formData.time.includes('(') ? formData.time : ''}
                                    onChange={handleChange}
                                    placeholder="Or select exact time"
                                    className="w-full bg-[#FAF9F5] border border-gray-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-medium text-gray-800 focus:ring-2 focus:ring-amber-500 outline-none"
                                />
                            </div>

                            {/* Client Name (Optional - Not Mandatory) */}
                            <div>
                                <div className="flex items-center justify-between mb-1">
                                    <label className="text-xs font-black text-gray-800 uppercase tracking-wider flex items-center gap-1.5">
                                        <FaUser className="text-amber-700" />
                                        <span>Your Name</span>
                                        <span className="text-[11px] text-gray-400 font-normal lowercase">(optional)</span>
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-[#FAF9F5] border border-gray-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-gray-800 focus:ring-2 focus:ring-amber-500 outline-none transition"
                                    placeholder="Enter your name (or leave blank to book anonymously)"
                                />
                            </div>

                            {/* Phone Number (Optional - WhatsApp transmits their number automatically) */}
                            <div>
                                <div className="flex items-center justify-between mb-1">
                                    <label className="text-xs font-black text-gray-800 uppercase tracking-wider flex items-center gap-1.5">
                                        <FaPhoneAlt className="text-amber-700" />
                                        <span>Contact Number</span>
                                        <span className="text-[11px] text-gray-400 font-normal lowercase">(optional)</span>
                                    </label>
                                    <span className="text-[10px] text-emerald-700 font-semibold">
                                        WhatsApp sends number automatically
                                    </span>
                                </div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-[#FAF9F5] border border-gray-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-gray-800 focus:ring-2 focus:ring-amber-500 outline-none transition"
                                    placeholder="+91 XXXXX XXXXX (optional)"
                                />
                            </div>

                            {/* Special Notes (Optional) */}
                            <div>
                                <label className="block text-xs font-black text-gray-800 uppercase tracking-wider mb-1">
                                    Special Notes / Add-ons <span className="text-gray-400 font-normal lowercase">(optional)</span>
                                </label>
                                <textarea
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    rows="2"
                                    className="w-full bg-[#FAF9F5] border border-gray-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-gray-800 focus:ring-2 focus:ring-amber-500 outline-none"
                                    placeholder="Hair/skin condition, bridal Muhurtham timings, or any specific requests..."
                                />
                            </div>

                            {/* Instant WhatsApp Submit Button (Large & Comfortable) */}
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] hover:from-[#20BA5A] hover:to-[#0E7064] text-white py-3.5 sm:py-4 rounded-2xl font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-emerald-600/25 active:scale-95 transition"
                            >
                                <FaWhatsapp size={20} />
                                <span>Send Booking Request on WhatsApp</span>
                            </button>

                            <p className="text-[11px] text-center text-gray-500 font-medium">
                                ⚡ Instant Confirmation • Zero advance payment required for regular appointments
                            </p>
                        </form>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default BookingModal;
