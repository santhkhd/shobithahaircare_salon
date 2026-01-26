import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { services } from '../data/services';
import { reviews } from '../data/reviews';
import { FaStar, FaCheckCircle, FaCut, FaGem, FaSpa } from 'react-icons/fa';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import FAQ from '../components/FAQ';
import InstagramFeed from '../components/InstagramFeed';
import PriceCalculator from '../components/PriceCalculator';

const Home = () => {
    const { openBooking } = useBooking();

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105 animate-zoom"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2727&auto=format&fit=crop')" }}
                />

                <div className="container-custom relative z-20 flex flex-col items-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-secondary-light font-medium tracking-widest uppercase mb-4"
                    >
                        Welcome to Shobitha Haircare
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight"
                    >
                        Kerala Bridal Makeup & <br /> Haircare Studio
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8"
                    >
                        Bridal makeup • Hair smoothening • Keratin • Hair spa • Color • Party looks
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <button onClick={() => openBooking()} className="btn-primary">
                            Book Appointment
                        </button>
                        <Link to="/services" className="px-8 py-3 rounded-full border-2 border-white text-white font-medium hover:bg-white hover:text-dark transition duration-300">
                            Explore Services
                        </Link>
                    </motion.div>
                </div>

                {/* Floating Trust Badges */}
                <div className="absolute bottom-10 left-0 w-full z-20 hidden md:block">
                    <div className="container-custom flex justify-center gap-8">
                        <div className="bg-black/50 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-3 border border-white/10">
                            <FaStar className="text-yellow-400" />
                            <span>4.9 Rating (278+ Reviews)</span>
                        </div>
                        <div className="bg-black/50 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-3 border border-white/10">
                            <FaCheckCircle className="text-green-400" />
                            <span>Clean & Hygienic</span>
                        </div>
                        <div className="bg-black/50 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-3 border border-white/10">
                            <FaGem className="text-pink-400" />
                            <span>Premium Products</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Highlight */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl heading-serif mb-4">Our Premium Services</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Experience world-class beauty services tailored just for you.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1481980235850-66e47651e431?q=80&w=1000&auto=format&fit=crop" alt="Bridal" className="w-full h-80 object-cover transition duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-2xl text-white font-serif mb-2">Bridal & Makeup</h3>
                                <p className="text-white/80 mb-4">Make your special day unforgettable.</p>
                                <Link to="/bridal" className="text-primary-light font-medium flex items-center gap-2">View Packages &rarr;</Link>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop" alt="Hair" className="w-full h-80 object-cover transition duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-2xl text-white font-serif mb-2">Hair Treatments</h3>
                                <p className="text-white/80 mb-4">Keratin, Smoothening, Botox & more.</p>
                                <Link to="/services" className="text-primary-light font-medium flex items-center gap-2">View Treatments &rarr;</Link>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop" alt="Skin" className="w-full h-80 object-cover transition duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-2xl text-white font-serif mb-2">Skin Care & Spa</h3>
                                <p className="text-white/80 mb-4">Rejuvenate with our premium facials.</p>
                                <Link to="/services" className="text-primary-light font-medium flex items-center gap-2">View Services &rarr;</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-gray-50">
                <div className="container-custom flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <img src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2000&auto=format&fit=crop" alt="Interior" className="rounded-2xl shadow-xl" />
                    </div>
                    <div className="flex-1">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Why Choose Us</span>
                        <h2 className="text-3xl md:text-4xl heading-serif mb-6">Expert Care in a Luxury Setting</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            At Shobitha Haircare, we combine artistry with premium products to deliver exceptional results. Whether it's your wedding day or a routine hair spa, our expert team ensures you leave feeling beautiful and confident.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary"><FaCheckCircle /></div>
                                <span className="font-medium text-gray-700">Certified Professional Staff</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary"><FaGem /></div>
                                <span className="font-medium text-gray-700">Top-tier International Products</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary"><FaSpa /></div>
                                <span className="font-medium text-gray-700">Hygienic & Relaxing Ambience</span>
                            </li>
                        </ul>
                        <Link to="/contact" className="btn-secondary">Visit Our Salon</Link>
                    </div>
                </div>
            </section>

            {/* Reviews Preview */}
            <section className="section-padding bg-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 pattern-dots" />
                <div className="container-custom relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl heading-serif text-white mb-2">Client Love</h2>
                            <p className="text-gray-400">What our beautiful clients say about us.</p>
                        </div>
                        <Link to="/reviews" className="text-primary hover:text-white transition mt-4 md:mt-0">Read all reviews &rarr;</Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {reviews.slice(0, 3).map(review => (
                            <div key={review.id} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-primary/50 transition duration-300">
                                <div className="flex gap-1 text-yellow-500 mb-4">
                                    {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
                                </div>
                                <p className="text-gray-300 italic mb-6">"{review.text}"</p>
                                <div className="flex items-center gap-3">
                                    <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                                    <div>
                                        <h4 className="font-medium text-white">{review.name}</h4>
                                        <span className="text-xs text-gray-500">{review.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Transformation Section */}
            <section className="section-padding bg-white overflow-hidden">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1">
                            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Transformations</span>
                            <h2 className="text-4xl md:text-5xl heading-serif mb-6">Real Results, Real People</h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Our signature treatments don't just change your look—they change how you feel. Use the slider to see some of our recent hair transformations.
                            </p>
                            <div className="flex gap-6 items-center">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gray-900">100%</div>
                                    <div className="text-xs text-gray-400 uppercase font-bold tracking-widest mt-1">Chemical Free Options</div>
                                </div>
                                <div className="w-px h-10 bg-gray-200"></div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gray-900">2hr+</div>
                                    <div className="text-xs text-gray-400 uppercase font-bold tracking-widest mt-1">Intensive Care</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 w-full max-w-xl">
                            <BeforeAfterSlider
                                title="Keratin Transformation"
                                beforeImage="https://images.unsplash.com/photo-1595152230535-0432bd0a09e1?q=80&w=1200"
                                afterImage="https://images.unsplash.com/photo-1620331311520-246422ff83f9?q=80&w=1200"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <InstagramFeed />

            {/* Price Estimator Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl heading-serif mb-4">Quick Estimate</h2>
                        <p className="text-gray-600">Get a rough idea of your treatment cost in seconds.</p>
                    </div>
                    <PriceCalculator openBooking={openBooking} />
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl heading-serif mb-4">Common Questions</h2>
                        <p className="text-gray-600">Everything you need to know about our services.</p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary/10">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-5xl heading-serif mb-6">Ready to Transform Your Look?</h2>
                    <p className="text-gray-600 max-w-xl mx-auto mb-8">Book your appointment today and let our experts take care of the rest.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button onClick={() => openBooking()} className="btn-primary flex items-center justify-center gap-2">
                            Book on WhatsApp
                        </button>
                        <a href="tel:+918075340778" className="btn-secondary flex items-center justify-center gap-2">
                            Call Now
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
