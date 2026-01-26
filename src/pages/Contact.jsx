import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaClock, FaEnvelope, FaDirections, FaInstagram, FaFacebook } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="pt-24 pb-20">
            <section className="bg-primary/5 py-16 mb-12">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl heading-serif mb-4">Get in Touch</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">We'd love to hear from you. Visit us or reach out via phone or WhatsApp for any queries.</p>
                </div>
            </section>

            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                <FaMapMarkerAlt size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">Our Location</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Vanila Square, Building, Municipal Bus Stand Road, Kanhangad, Kerala 671315
                                </p>
                                <a
                                    href="https://www.google.com/maps/dir//Shobitha+Haircare+%26+Bridal+Makeup+Municipal+Bus+Stand+Rd+Kanhangad,+Kerala+671315"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary font-bold flex items-center gap-2 hover:underline"
                                >
                                    <FaDirections /> Get Directions
                                </a>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-green-500/10 text-green-600 flex items-center justify-center shrink-0">
                                <FaWhatsapp size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">WhatsApp Us</h3>
                                <p className="text-gray-600 mb-3">For quick booking and queries.</p>
                                <a href="https://wa.me/918075340778" className="text-xl font-bold text-gray-900 hover:text-green-600 transition">+91 80753 40778</a>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                                <FaClock size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">Working Hours</h3>
                                <p className="text-gray-600">Mon - Sun: 10:00 AM – 6:00 PM</p>
                                <p className="text-xs text-gray-400 mt-2 italic font-medium">Available on all days by appointment</p>
                            </div>
                        </div>

                        <div className="flex gap-4 px-4">
                            <a href="#" className="flex-1 bg-gray-100 h-14 rounded-2xl flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition">
                                <FaInstagram size={24} />
                            </a>
                            <a href="#" className="flex-1 bg-gray-100 h-14 rounded-2xl flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition">
                                <FaFacebook size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Map and Form */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Map Embed */}
                        <div className="bg-gray-200 rounded-[32px] overflow-hidden h-[400px] shadow-lg border-8 border-white">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.340066223594!2d75.0945!3d12.3164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba47f3b39255555%3A0x7946979603f90b8f!2sShobitha%20Haircare%20%26%20Bridal%20Makeup!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Shobitha Haircare Location"
                            ></iframe>
                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-[32px] shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-serif font-bold mb-6">Send us a Message</h3>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Phone Number</label>
                                    <input type="tel" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition" placeholder="+91 XXXX XXX XXX" />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Message</label>
                                    <textarea rows="4" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition" placeholder="How can we help you?"></textarea>
                                </div>
                                <div className="md:col-span-2">
                                    <button type="submit" className="btn-primary w-full md:w-auto">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
