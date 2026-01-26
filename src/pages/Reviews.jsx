import React from 'react';
import { motion } from 'framer-motion';
import { reviews } from '../data/reviews';
import { FaStar, FaGoogle, FaQuoteLeft, FaPlus } from 'react-icons/fa';

const Reviews = () => {
    return (
        <div className="pt-24 pb-20">
            <section className="bg-primary/5 py-16 mb-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl heading-serif mb-4">Client Feedback</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">We are proud to have served hundreds of happy clients. Here's what they say about their experience at Shobitha Haircare.</p>
                </div>
            </section>

            <div className="container-custom">
                {/* Stats Section */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-24 pb-12 border-b border-gray-100">
                    <div className="text-center">
                        <div className="text-5xl md:text-7xl font-bold text-gray-900 mb-2">4.9</div>
                        <div className="flex justify-center gap-1 text-yellow-500 mb-2">
                            {[...Array(5)].map((_, i) => <FaStar key={i} size={24} />)}
                        </div>
                        <div className="text-gray-500 font-medium">Average Rating</div>
                    </div>

                    <div className="h-24 w-px bg-gray-200 hidden md:block"></div>

                    <div className="text-center">
                        <div className="text-5xl md:text-7xl font-bold text-gray-900 mb-2">278+</div>
                        <div className="flex items-center justify-center gap-2 text-primary text-xl font-bold mb-2">
                            <FaGoogle /> Reviews
                        </div>
                        <div className="text-gray-500 font-medium">Verified by Google</div>
                    </div>

                    <div className="md:ml-12">
                        <a
                            href="https://www.google.com/search?q=Shobitha+Haircare+Kanhangad#lrd=0x3ba47f3b39255555:0x7946979603f90b8f,3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary flex items-center gap-2"
                        >
                            <FaPlus /> Leave a Google Review
                        </a>
                    </div>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-[32px] shadow-lg border border-gray-100 relative group"
                        >
                            <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                                <FaQuoteLeft size={40} />
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <img src={review.image} alt={review.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary/20" />
                                <div>
                                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                                    <div className="flex gap-0.5 text-yellow-500 text-xs">
                                        {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-600 italic leading-relaxed mb-6">"{review.text}"</p>

                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">{review.date}</span>
                                <div className="flex items-center gap-1 text-gray-400 group-hover:text-primary transition-colors">
                                    <FaGoogle size={14} />
                                    <span className="text-[10px] font-bold">Local Guide</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Featured Video Feedback (Mockup) */}
                <div className="bg-dark rounded-[40px] p-12 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 transform translate-x-20"></div>
                    <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                        <div className="flex-1">
                            <h3 className="text-3xl md:text-4xl heading-serif text-white mb-6">Video Testimonials</h3>
                            <p className="text-gray-400 text-lg mb-8">
                                Check out real stories from our amazing clients and see their transformations in motion.
                            </p>
                        </div>
                        <div className="flex-1 w-full grid grid-cols-2 gap-4">
                            <div className="aspect-[9/16] bg-gray-800 rounded-2xl border-4 border-white/5 flex items-center justify-center cursor-pointer hover:border-primary transition group relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1595152230535-0432bd0a09e1?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition duration-500" alt="Video cover" />
                                <div className="relative z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white scale-90 group-hover:scale-110 transition">
                                    <FaPlus />
                                </div>
                            </div>
                            <div className="aspect-[9/16] bg-gray-800 rounded-2xl border-4 border-white/5 flex items-center justify-center cursor-pointer hover:border-primary transition group relative overflow-hidden translate-y-8">
                                <img src="https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition duration-500" alt="Video cover" />
                                <div className="relative z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white scale-90 group-hover:scale-110 transition">
                                    <FaPlus />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
