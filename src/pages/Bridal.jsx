import React from 'react';
import { motion } from 'framer-motion';
import { bridalPackages } from '../data/services';
import { useBooking } from '../context/BookingContext';
import { FaCheck, FaGem, FaStar, FaCrown, FaWhatsapp, FaCameraRetro } from 'react-icons/fa';

const Bridal = () => {
    const { openBooking } = useBooking();

    const bridalCategories = [
        {
            title: "Hindu Bridal",
            desc: "Traditional Kerala saree look with intricate jasmine garlands and antique gold jewellery styling.",
            img: "https://images.unsplash.com/photo-1595152230535-0432bd0a09e1?q=80&w=1000&auto=format&fit=crop"
        },
        {
            title: "Muslim Bridal",
            desc: "Elegant Hijab styling or head-covering with glamorous eye makeup and sophisticated bridal jewellery.",
            img: "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=1000&auto=format&fit=crop"
        },
        {
            title: "Christian Bridal",
            desc: "Graceful white gown looks with delicate veils and sophisticated, natural HD makeup finish.",
            img: "https://images.unsplash.com/photo-1546032996-6caec3bc26cb?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    return (
        <div className="pt-24 pb-20">
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div
                    className="absolute inset-0 z-0 bg-cover bg-fixed bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549416878-b9ca35c2d47b?q=80&w=2000&auto=format&fit=crop')" }}
                />
                <div className="container-custom relative z-20">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-7xl font-serif font-bold mb-6"
                    >
                        The Bridal Studio
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto italic">
                        "Your journey to a breathtaking bridal look starts here."
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <h2 className="text-3xl md:text-4xl heading-serif mb-6">Expertise in Every Tradition</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We specialize in creating unique bridal looks that respect and highlight traditional values while incorporating modern makeup techniques for that perfect camera-ready finish.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {bridalCategories.map((cat, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm"
                            >
                                <img src={cat.img} alt={cat.title} className="w-full h-80 object-cover" />
                                <div className="p-8">
                                    <h3 className="text-2xl font-serif font-bold mb-3">{cat.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{cat.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages */}
            <section className="py-24 bg-primary/5">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl heading-serif mb-4">Our Exclusive Bridal Packages</h2>
                        <p className="text-gray-600">Choose the perfect package for your dream wedding.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {bridalPackages.map((pkg, idx) => (
                            <div
                                key={idx}
                                className={`flex flex-col rounded-3xl p-8 transition-all duration-300 ${idx === 1
                                        ? 'bg-white shadow-2xl scale-105 border-2 border-primary ring-4 ring-primary/10 z-10'
                                        : 'bg-white shadow-lg border border-gray-100 hover:shadow-xl'
                                    }`}
                            >
                                {idx === 1 && (
                                    <span className="self-center bg-primary text-white text-xs font-bold px-4 py-1 rounded-full mb-6 uppercase tracking-widest">Most Popular</span>
                                )}
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl font-serif font-bold text-gray-900">{pkg.name}</h3>
                                        <p className="text-gray-500 text-sm">{pkg.description}</p>
                                    </div>
                                    {idx === 0 ? <FaStar className="text-primary text-2xl" /> : idx === 1 ? <FaCrown className="text-primary text-3xl" /> : <FaGem className="text-primary text-3xl" />}
                                </div>

                                <div className="text-3xl font-bold text-primary mb-8">
                                    {pkg.price}
                                </div>

                                <ul className="space-y-4 mb-10 flex-grow">
                                    {pkg.includes.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => openBooking({ name: pkg.name, category: 'Bridal' })}
                                    className={`w-full py-4 rounded-xl font-bold transition duration-300 flex items-center justify-center gap-2 ${idx === 1 ? 'bg-primary text-white hover:bg-primary-dark shadow-lg' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                        }`}
                                >
                                    <FaWhatsapp size={20} /> Check Date Availability
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trial Session */}
            <section className="section-padding bg-white overflow-hidden">
                <div className="container-custom">
                    <div className="bg-dark text-white rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-10">
                            <FaCameraRetro size={200} />
                        </div>
                        <div className="flex-1 z-10">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Experience the Transformation</h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Not sure what look suits you best? Book a bridal trial session where we'll explore different styles and finishes to find your perfect match before the big day.
                            </p>
                            <button onClick={() => openBooking({ name: 'Bridal Trial', category: 'Bridal' })} className="btn-primary">Book Trial Session</button>
                        </div>
                        <div className="flex-1 z-10 w-full">
                            <div className="grid grid-cols-2 gap-4">
                                <img src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=800&auto=format&fit=crop" className="rounded-2xl h-48 w-full object-cover" alt="makeup" />
                                <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop" className="rounded-2xl h-48 w-full object-cover translate-y-8" alt="makeup" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Bridal;
