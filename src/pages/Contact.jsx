import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaClock, FaDirections, FaInstagram, FaCalendarCheck, FaCheck } from 'react-icons/fa';
import LaurelBranch from '../components/LaurelBranch';
import { useBooking } from '../context/BookingContext';

const Contact = () => {
    const { openBooking } = useBooking();
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

    useEffect(() => {
        document.title = "Contact & Studio Location | Shobitha Haircare Kanhangad";
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({ name: '', phone: '', message: '' });
    };

    return (
        <div className="pt-24 sm:pt-28 pb-20 bg-[#FAF9F5] min-h-screen">
            {/* 1. HERO TITLE SECTION WITH GOLD LAUREL WREATH BRANCHES */}
            <section className="text-center pt-2 sm:pt-4 pb-6 sm:pb-8">
                {/* Top Eyebrow with Lines */}
                <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="w-7 sm:w-10 h-[1.5px] bg-[#B98327]/60"></span>
                    <span className="text-[#A46E19] font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs">
                        VISIT OUR SALON STUDIO
                    </span>
                    <span className="w-7 sm:w-10 h-[1.5px] bg-[#B98327]/60"></span>
                </div>

                {/* Flanked Title with Laurel Branches */}
                <div className="flex items-center justify-center gap-2 sm:gap-6 my-1">
                    <LaurelBranch flip={false} />
                    <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12]">
                        <span className="text-[#22160F] block sm:inline">Get in </span>
                        <span className="text-[#B98327] block sm:inline">Touch</span>
                    </h1>
                    <LaurelBranch flip={true} />
                </div>

                {/* Subtitle */}
                <p className="text-gray-700 max-w-sm sm:max-w-md mx-auto text-xs sm:text-sm font-medium leading-relaxed mt-1 sm:mt-2">
                    Conveniently situated at Municipal Bus Stand Road, Kanhangad. Reach out via phone or WhatsApp for instant bookings.
                </p>
            </section>

            <div className="container-custom px-4 sm:px-6 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-4">
                        {/* Location */}
                        <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-xs border border-[#E8D9C5] flex items-start gap-4">
                            <div className="w-11 h-11 rounded-2xl bg-[#FAF3E8] text-[#8E580B] border border-[#E8DAC8] flex items-center justify-center shrink-0">
                                <FaMapMarkerAlt size={20} />
                            </div>
                            <div>
                                <h3 className="text-base font-serif font-extrabold text-[#22160F] mb-1">Our Location</h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-2.5">
                                    Vanila Square Building, Municipal Bus Stand Road, Kanhangad, Kerala 671315
                                </p>
                                <a
                                    href="https://www.google.com/maps/dir//Shobitha+Haircare+%26+Bridal+Makeup+Municipal+Bus+Stand+Rd+Kanhangad,+Kerala+671315"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#A46E19] hover:text-[#7D1B2D] font-extrabold text-xs inline-flex items-center gap-1.5 transition-colors underline underline-offset-2"
                                >
                                    <FaDirections /> Open in Google Maps &rarr;
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-xs border border-[#E8D9C5] flex items-start gap-4">
                            <div className="w-11 h-11 rounded-2xl bg-[#FAF3E8] text-[#8E580B] border border-[#E8DAC8] flex items-center justify-center shrink-0">
                                <FaPhoneAlt size={18} />
                            </div>
                            <div>
                                <h3 className="text-base font-serif font-extrabold text-[#22160F] mb-1">Call for Booking</h3>
                                <p className="text-gray-600 text-xs mb-2">Speak directly with our front desk receptionist.</p>
                                <a
                                    href="tel:+918075340778"
                                    className="text-base font-black text-[#8E580B] hover:text-[#4A0A16] transition"
                                >
                                    +91 80753 40778
                                </a>
                            </div>
                        </div>

                        {/* WhatsApp */}
                        <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-xs border border-[#E8D9C5] flex items-start gap-4">
                            <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-[#25D366] border border-emerald-200 flex items-center justify-center shrink-0">
                                <FaWhatsapp size={22} />
                            </div>
                            <div>
                                <h3 className="text-base font-serif font-extrabold text-[#22160F] mb-1">WhatsApp Chat</h3>
                                <p className="text-gray-600 text-xs mb-2.5">Send photos, ask for bridal quotes, or confirm timing.</p>
                                <a
                                    href="https://wa.me/918075340778?text=Hello%20Shobitha%20Haircare,%20I%20have%20an%20inquiry"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold shadow-xs active:scale-95 transition"
                                >
                                    <span>Chat on WhatsApp</span>
                                </a>
                            </div>
                        </div>

                        {/* Studio Hours */}
                        <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-xs border border-[#E8D9C5] flex items-start gap-4">
                            <div className="w-11 h-11 rounded-2xl bg-[#FAF3E8] text-[#8E580B] border border-[#E8DAC8] flex items-center justify-center shrink-0">
                                <FaClock size={18} />
                            </div>
                            <div>
                                <h3 className="text-base font-serif font-extrabold text-[#22160F] mb-1">Working Hours</h3>
                                <p className="text-gray-700 text-xs font-bold">Monday – Saturday: 9:30 AM – 7:30 PM</p>
                                <p className="text-gray-600 text-xs">Sunday: 10:00 AM – 6:00 PM</p>
                                <p className="text-[#A46E19] text-[11px] font-extrabold mt-1">Early Morning Bridal Slots Available</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Message Form & Quick Booking Trigger */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8D9C5] shadow-xs">
                            <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
                                <div>
                                    <span className="text-[#A46E19] font-black uppercase tracking-wider text-[10px] sm:text-xs block">
                                        SEND DIRECT INQUIRY
                                    </span>
                                    <h2 className="font-serif font-extrabold text-xl sm:text-2xl text-[#22160F]">
                                        Book an Appointment or Ask a Question
                                    </h2>
                                </div>
                                <button
                                    onClick={() => openBooking({})}
                                    className="px-4 py-2 rounded-full bg-gradient-to-r from-[#B97A1E] via-[#A86B14] to-[#8E580B] text-white text-xs font-bold shadow-xs active:scale-95 transition hidden sm:inline-flex items-center gap-1.5"
                                >
                                    <FaCalendarCheck size={11} />
                                    <span>Fast Booking Modal</span>
                                </button>
                            </div>

                            {submitted ? (
                                <div className="p-6 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-900 text-center">
                                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-2 text-xl">
                                        <FaCheck />
                                    </div>
                                    <h4 className="font-serif font-black text-lg mb-1">Thank You! Message Received</h4>
                                    <p className="text-xs sm:text-sm text-emerald-800">
                                        Our receptionist will get back to you within 30 minutes. You can also message us directly on WhatsApp!
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 mb-1">Your Full Name *</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. Anjali Nair"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-2.5 rounded-xl border border-[#E8DAC8] text-xs sm:text-sm text-gray-900 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number / WhatsApp *</label>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="+91 98765 43210"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-4 py-2.5 rounded-xl border border-[#E8DAC8] text-xs sm:text-sm text-gray-900 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 mb-1">Your Message or Desired Services</label>
                                        <textarea
                                            rows={4}
                                            required
                                            placeholder="Tell us what service you are looking for (e.g. Bridal HD makeup for wedding reception on 15th December, or Keratin smoothening)..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-2.5 rounded-xl border border-[#E8DAC8] text-xs sm:text-sm text-gray-900 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                                        />
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                                        <button
                                            type="submit"
                                            className="w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-[#B97A1E] via-[#A86B14] to-[#8E580B] hover:from-[#A86B14] hover:to-[#7E4C07] text-white text-xs sm:text-sm font-black shadow-md active:scale-95 transition"
                                        >
                                            Send Studio Inquiry
                                        </button>
                                        <span className="text-[11px] text-gray-500 font-semibold text-center sm:text-right">
                                            🔒 Your details are never shared with third parties.
                                        </span>
                                    </div>
                                </form>
                            )}

                            {/* Google Maps Embed */}
                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <h4 className="font-serif font-extrabold text-sm text-[#22160F] mb-3">
                                    Studio Location Map
                                </h4>
                                <div className="w-full h-64 rounded-2xl overflow-hidden border border-[#E8DAC8] shadow-xs">
                                    <iframe
                                        title="Shobitha Haircare Location Map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.3802951717833!2d75.0931254!3d12.3114061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba47b856a282f65%3A0x6b8c9ad50f2425d9!2sShobitha%20Haircare%20%26%20Bridal%20Makeup!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
