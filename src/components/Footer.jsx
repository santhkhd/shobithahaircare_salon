import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaClock, FaHeart } from 'react-icons/fa';
import { useSiteSettings } from '../context/SiteSettingsContext';

const Footer = () => {
    const { pageVisibility } = useSiteSettings();
    return (
        <footer className="bg-dark text-white pt-16 pb-10 border-t border-white/10">
            <div className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 px-4 sm:px-6">
                {/* Brand Column */}
                <div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-primary mb-3">
                        Shobitha <span className="text-white font-sans font-light">Haircare</span>
                    </h2>
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed font-normal">
                        Premier Kerala bridal makeover studio and professional haircare salon located at Municipal Bus Stand Road, Kanhangad.
                    </p>
                    <div className="flex gap-3">
                        <a
                            href="https://instagram.com/shobitha_haircare"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center hover:bg-primary transition text-white"
                            aria-label="Instagram"
                        >
                            <FaInstagram size={19} />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center hover:bg-primary transition text-white"
                            aria-label="Facebook"
                        >
                            <FaFacebook size={19} />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center hover:bg-primary transition text-white"
                            aria-label="YouTube"
                        >
                            <FaYoutube size={19} />
                        </a>
                    </div>
                </div>

                {/* Quick Navigation */}
                <div>
                    <h3 className="text-base font-bold uppercase tracking-wider text-primary-light mb-4">
                        Quick Links
                    </h3>
                    <ul className="space-y-3 text-sm">
                        {[
                            { name: 'Home', path: '/', visible: true },
                            { name: 'Services', path: '/services', visible: true },
                            { name: 'Bridal', path: '/bridal', visible: pageVisibility.bridal },
                            { name: 'Wedding Store', path: '/wedding-store', visible: pageVisibility.store },
                            { name: 'Gallery', path: '/gallery', visible: pageVisibility.gallery },
                            { name: 'Pricing', path: '/pricing', visible: pageVisibility.pricing },
                            { name: 'Reviews', path: '/reviews', visible: pageVisibility.reviews },
                            { name: 'Blog', path: '/blog', visible: pageVisibility.blog },
                            { name: 'Contact', path: '/contact', visible: pageVisibility.contact },
                        ].filter(item => item.visible).map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.path}
                                    className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 font-medium"
                                >
                                    <span className="text-primary text-xs">&rsaquo;</span> {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Popular Services */}
                <div>
                    <h3 className="text-base font-bold uppercase tracking-wider text-primary-light mb-4">
                        Popular Treatments
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li>
                            <Link to="/bridal" className="hover:text-primary transition-colors font-medium">Kerala Muhurtham Bridal Makeup</Link>
                        </li>
                        <li>
                            <Link to="/services/keratin-treatment" className="hover:text-primary transition-colors font-medium">Keratin Protein Therapy</Link>
                        </li>
                        <li>
                            <Link to="/services/hair-smoothening" className="hover:text-primary transition-colors font-medium">Permanent Hair Smoothening</Link>
                        </li>
                        <li>
                            <Link to="/services/facial-glow" className="hover:text-primary transition-colors font-medium">Instant Glow Herbal Facial</Link>
                        </li>
                        <li>
                            <Link to="/services/hair-color" className="hover:text-primary transition-colors font-medium">Global Hair Color & Balayage</Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="text-base font-bold uppercase tracking-wider text-primary-light mb-4">
                        Visit & Contact
                    </h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex gap-3 text-gray-300 font-medium">
                            <FaMapMarkerAlt className="mt-1 text-primary shrink-0" size={16} />
                            <span>Vanila Square Building, Municipal Bus Stand Road, Kanhangad, Kerala 671315</span>
                        </li>
                        <li className="flex gap-3 text-gray-300 font-medium">
                            <FaPhoneAlt className="mt-1 text-primary shrink-0" size={14} />
                            <a href="tel:+918075340778" className="hover:text-primary transition-colors font-bold">+91 80753 40778</a>
                        </li>
                        <li className="flex gap-3 text-gray-300 font-medium">
                            <FaClock className="mt-1 text-primary shrink-0" size={15} />
                            <span>Mon - Sun: 10:00 AM – 6:00 PM</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/15 pt-8 text-center text-gray-300 text-sm px-4">
                <p>&copy; {new Date().getFullYear()} Shobitha Haircare & Bridal Makeup Studio. All rights reserved.</p>
                <div className="mt-2 flex items-center justify-center gap-2 text-xs text-gray-400 font-medium">
                    <span>Crafted with <FaHeart className="text-secondary inline" size={11} /> for our brides in Kanhangad, Kerala.</span>
                    <span>•</span>
                    <Link to="/admin" className="text-gray-400 hover:text-amber-400 font-bold flex items-center gap-1 transition">
                        <span>Staff Admin 🔒</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
