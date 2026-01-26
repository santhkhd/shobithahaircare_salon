import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExpandAlt, FaPlay } from 'react-icons/fa';

const Gallery = () => {
    const [filter, setFilter] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);

    const categories = ['All', 'Bridal', 'Hair', 'Makeup', 'Before/After'];

    const images = [
        { id: 1, category: 'Bridal', url: 'https://images.unsplash.com/photo-1549416878-b9ca35c2d47b?q=80&w=1000&auto=format&fit=crop', title: 'Luxury Bridal Makeup' },
        { id: 2, category: 'Hair', url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop', title: 'Keratin Treatment' },
        { id: 3, category: 'Makeup', url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop', title: 'Engagement Look' },
        { id: 4, category: 'Bridal', url: 'https://images.unsplash.com/photo-1595152230535-0432bd0a09e1?q=80&w=1000&auto=format&fit=crop', title: 'Traditional Hindu Bridal' },
        { id: 5, category: 'Hair', url: 'https://images.unsplash.com/photo-1560869713-7d0a87599b6b?q=80&w=1000&auto=format&fit=crop', title: 'Layered Haircut' },
        { id: 6, category: 'Makeup', url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop', title: 'Party Glam' },
        { id: 7, category: 'Before/After', url: 'https://images.unsplash.com/photo-1620331313174-87a8f9d0c65a?q=80&w=1000&auto=format&fit=crop', title: 'Hair Smoothening Result' },
        { id: 8, category: 'Bridal', url: 'https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=1000&auto=format&fit=crop', title: 'Sophisticated Muslim Bridal' },
        { id: 9, category: 'Makeup', url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop', title: 'Natural Glow' },
    ];

    const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

    return (
        <div className="pt-24 pb-20">
            <section className="bg-primary/5 py-16 mb-12">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl heading-serif mb-4">Our Gallery</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">Witness our artistry and some of the beautiful transformations we've achieved for our clients.</p>
                </div>
            </section>

            <div className="container-custom">
                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-8 py-2 rounded-full font-medium transition-all ${filter === cat
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'bg-white border border-gray-200 text-gray-600 hover:border-primary hover:text-primary shadow-sm'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    <AnimatePresence>
                        {filteredImages.map((img) => (
                            <motion.div
                                key={img.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                onClick={() => setSelectedImage(img)}
                                className="relative group cursor-zoom-in break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500"
                            >
                                <img src={img.url} alt={img.title} className="w-full object-cover" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="flex justify-between items-center text-white">
                                        <div>
                                            <span className="text-xs font-bold uppercase tracking-widest text-primary-light mb-1 block">{img.category}</span>
                                            <h3 className="text-lg font-serif font-bold">{img.title}</h3>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                                            <FaExpandAlt size={14} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Video Section Preview */}
                <div className="mt-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold mb-4">Featured Reels</h2>
                        <p className="text-gray-600">Check out our latest work on Instagram.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="aspect-video bg-gray-900 rounded-3xl relative overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-50" alt="Video cover" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-primary/80 flex items-center justify-center text-white group-hover:scale-110 transition duration-300 cursor-pointer">
                                    <FaPlay size={30} className="ml-2" />
                                </div>
                            </div>
                            <div className="absolute bottom-6 left-6 text-white font-medium">
                                Bridal Transformation 2024
                            </div>
                        </div>
                        <div className="aspect-video bg-gray-900 rounded-3xl relative overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-50" alt="Video cover" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-primary/80 flex items-center justify-center text-white group-hover:scale-110 transition duration-300 cursor-pointer">
                                    <FaPlay size={30} className="ml-2" />
                                </div>
                            </div>
                            <div className="absolute bottom-6 left-6 text-white font-medium">
                                Keratin Smoothing Masterclass
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 lg:p-12"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-8 right-8 text-white p-2 hover:bg-white/10 rounded-full transition"
                            onClick={() => setSelectedImage(null)}
                        >
                            <FaTimes size={30} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="max-w-5xl w-full h-full flex flex-col justify-center gap-6"
                            onClick={e => e.stopPropagation()}
                        >
                            <img src={selectedImage.url} alt={selectedImage.title} className="max-h-[80vh] w-auto mx-auto rounded-xl object-contain shadow-2xl" />
                            <div className="text-center text-white">
                                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">{selectedImage.category}</span>
                                <h2 className="text-3xl font-serif font-bold">{selectedImage.title}</h2>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
