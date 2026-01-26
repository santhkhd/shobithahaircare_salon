import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-16 pb-8">
            <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-serif font-bold text-primary mb-6">Shobitha Haircare</h2>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        Premium bridal makeup and haircare studio in Kanhangad. Dedicated to making you look and feel your absolute best.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition text-white">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition text-white">
                            <FaFacebook size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition text-white">
                            <FaYoutube size={20} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                    <ul className="space-y-3">
                        {['Home', 'Services', 'Bridal', 'Gallery', 'Pricing', 'Contact'].map(item => (
                            <li key={item}>
                                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-400 hover:text-primary transition">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-lg font-bold mb-6">Popular Services</h3>
                    <ul className="space-y-3">
                        <li className="text-gray-400">Bridal Makeup</li>
                        <li className="text-gray-400">Keratin Treatment</li>
                        <li className="text-gray-400">Hair Smoothening</li>
                        <li className="text-gray-400">Facial & Spa</li>
                        <li className="text-gray-400">Hair Coloring</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-bold mb-6">Contact Us</h3>
                    <ul className="space-y-4">
                        <li className="flex gap-3 text-gray-400">
                            <FaMapMarkerAlt className="mt-1 text-primary flex-shrink-0" />
                            <span>Vanila Square, Building, Municipal Bus Stand Road, Kanhangad, Kerala 671315</span>
                        </li>
                        <li className="flex gap-3 text-gray-400">
                            <FaPhoneAlt className="mt-1 text-primary flex-shrink-0" />
                            <span>+91 80753 40778</span>
                        </li>
                        <li className="flex gap-3 text-gray-400">
                            <span className="text-primary font-bold">Hrs:</span>
                            <span>10:00 AM – 6:00 PM</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Shobitha Haircare & Bridal Makeup. All rights reserved.</p>
                <p className="mt-2">Designed for Shobitha Haircare & Bridal Makeup</p>
            </div>
        </footer>
    );
};

export default Footer;
