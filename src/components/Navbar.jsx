import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { useBooking } from '../context/BookingContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { openBooking } = useBooking();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Bridal', path: '/bridal' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Reviews', path: '/reviews' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header
            className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="container-custom flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl md:text-3xl font-serif font-bold text-primary-dark">
                    Shobitha <span className="text-secondary">Haircare</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `font-medium text-sm tracking-wide transition-colors ${isActive ? 'text-secondary-dark' : scrolled ? 'text-gray-700 hover:text-primary' : 'text-gray-800 hover:text-primary' // simplified for visibility on hero
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Right Side Buttons */}
                <div className="hidden lg:flex items-center gap-3">
                    <a
                        href="https://wa.me/918075340778"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition"
                        title="WhatsApp"
                    >
                        <FaWhatsapp size={20} />
                    </a>
                    <a
                        href="tel:+918075340778"
                        className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                        title="Call"
                    >
                        <FaPhoneAlt size={18} />
                    </a>
                    <button
                        onClick={() => openBooking()}
                        className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full text-sm font-medium transition shadow-md"
                    >
                        Book Appointment
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gray-800 p-2">
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-4 flex flex-col gap-4 border-t">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `block text-lg font-medium ${isActive ? 'text-primary' : 'text-gray-700'}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <div className="flex flex-col gap-3 mt-4 border-t pt-4">
                        <button onClick={() => openBooking()} className="bg-primary text-white py-3 rounded-lg font-medium w-full">
                            Book Appointment
                        </button>
                        <div className="flex gap-4 justify-center">
                            <a href="https://wa.me/918075340778" className="flex items-center gap-2 text-green-600 font-medium bg-green-50 px-4 py-2 rounded-lg w-full justify-center">
                                <FaWhatsapp /> WhatsApp
                            </a>
                            <a href="tel:+918075340778" className="flex items-center gap-2 text-blue-600 font-medium bg-blue-50 px-4 py-2 rounded-lg w-full justify-center">
                                <FaPhoneAlt /> Call
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
