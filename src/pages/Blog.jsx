import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { blogPosts, blogCategories } from '../data/blogs';
import { FaClock, FaCalendarAlt, FaArrowRight, FaSearch, FaTag, FaBookmark, FaCrown } from 'react-icons/fa';

// Laurel branches matching luxury styling
const LaurelBranch = ({ flip = false, className = "w-8 sm:w-12 h-16 sm:h-20 text-amber-600/70 shrink-0" }) => (
    <svg
        viewBox="0 0 50 100"
        fill="currentColor"
        className={`${className} ${flip ? 'scale-x-[-1]' : ''}`}
        aria-hidden="true"
    >
        <path d="M25 95 C25 70, 30 35, 15 10 C18 18, 22 28, 24 40 C26 55, 25 75, 25 95 Z" opacity="0.6"/>
        <path d="M15 10 C22 15, 26 25, 23 35 C20 35, 14 25, 15 10 Z"/>
        <path d="M24 30 C34 32, 42 42, 38 52 C33 50, 26 42, 24 30 Z"/>
        <path d="M12 32 C5 36, 2 48, 8 56 C12 52, 16 42, 12 32 Z"/>
        <path d="M25 50 C36 53, 44 64, 40 74 C34 72, 27 63, 25 50 Z"/>
    </svg>
);

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const allPosts = React.useMemo(() => {
        try {
            const custom = JSON.parse(localStorage.getItem('shobitha_custom_blogs') || '[]');
            return [...custom, ...blogPosts];
        } catch (e) {
            return blogPosts;
        }
    }, []);

    useEffect(() => {
        document.title = "Bridal & Haircare Beauty Journal | Shobitha Studio Kanhangad";
        window.scrollTo(0, 0);
    }, []);

    const filteredPosts = allPosts.filter(post => {
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              (post.tags && post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
        return matchesCategory && matchesSearch;
    });

    const featuredPost = allPosts.find(p => p.featured) || allPosts[0];

    return (
        <div className="pt-24 sm:pt-28 pb-20 bg-[#FAF9F5] min-h-screen">
            <div className="container-custom px-4 sm:px-6 max-w-5xl">

                {/* 1. Header with Golden Laurels */}
                <header className="text-center pt-2 pb-6 sm:pb-8 relative">
                    {/* Discreet Author / Studio Admin Link */}
                    <div className="absolute right-0 top-0">
                        <Link
                            to="/admin"
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-gray-400 hover:text-[#A46E19] bg-white px-2.5 py-1 rounded-full border border-gray-200 shadow-2xs transition"
                            title="Open Studio Admin Panel"
                        >
                            <span>Staff Admin 🔒</span>
                        </Link>
                    </div>

                    <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="w-7 sm:w-10 h-[1.5px] bg-[#B98327]/60"></span>
                        <span className="text-[#A46E19] font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs">
                            BEAUTY & BRIDAL JOURNAL
                        </span>
                        <span className="w-7 sm:w-10 h-[1.5px] bg-[#B98327]/60"></span>
                    </div>

                    <div className="flex items-center justify-center gap-2 sm:gap-6 my-1">
                        <LaurelBranch flip={false} />
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#22160F]">
                            Haircare & <span className="text-[#B98327]">Bridal Secrets</span>
                        </h1>
                        <LaurelBranch flip={true} />
                    </div>

                    <p className="text-gray-700 max-w-md sm:max-w-xl mx-auto text-xs sm:text-sm font-medium leading-relaxed mt-2">
                        Expert advice, pre-bridal prep timelines, and hair restoration guides curated by our master stylists in Kanhangad.
                    </p>
                </header>

                {/* 2. Search & Category Bar */}
                <div className="mb-8 flex flex-col sm:flex-row gap-3.5 items-center justify-between">
                    {/* Search */}
                    <div className="relative w-full sm:w-72">
                        <input
                            type="text"
                            placeholder="Search beauty tips..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white border border-[#E8D9C5] rounded-full pl-9 pr-4 py-2 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B98327]"
                        />
                        <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 no-scrollbar">
                        {blogCategories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-xs ${
                                    selectedCategory === cat
                                        ? 'bg-[#A46E19] text-white shadow-sm'
                                        : 'bg-white text-gray-700 border border-[#E8D9C5] hover:bg-amber-50/50'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 3. Featured Hero Article (Shows when All is selected and no search) */}
                {selectedCategory === 'All' && !searchQuery && featuredPost && (
                    <div className="mb-10 bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E8D9C5] shadow-sm hover:shadow-md transition-shadow">
                        <div className="grid grid-cols-1 md:grid-cols-12 items-center">
                            {/* Image */}
                            <div className="md:col-span-7 h-56 sm:h-72 md:h-84 overflow-hidden relative">
                                <img
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                />
                                <span className="absolute top-3 left-3 bg-[#8E1B31] text-white px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                                    <FaCrown size={10} className="text-amber-300" /> Featured Article
                                </span>
                            </div>

                            {/* Text Details */}
                            <div className="md:col-span-5 p-5 sm:p-7 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 text-[11px] font-bold text-gray-500 mb-2">
                                        <span className="text-[#A46E19]">{featuredPost.category}</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1"><FaClock size={10} /> {featuredPost.readTime}</span>
                                    </div>
                                    <h2 className="text-lg sm:text-2xl font-serif font-extrabold text-[#22160F] leading-snug mb-2 hover:text-[#A46E19] transition-colors">
                                        <Link to={`/blog/${featuredPost.id}`}>
                                            {featuredPost.title}
                                        </Link>
                                    </h2>
                                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                                        {featuredPost.excerpt}
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={featuredPost.author.avatar}
                                            alt={featuredPost.author.name}
                                            className="w-7 h-7 rounded-full object-cover border border-amber-300"
                                        />
                                        <div className="text-[11px]">
                                            <p className="font-bold text-gray-800 leading-tight">{featuredPost.author.name}</p>
                                            <p className="text-gray-400 text-[9px]">{featuredPost.publishDate}</p>
                                        </div>
                                    </div>

                                    <Link
                                        to={`/blog/${featuredPost.id}`}
                                        className="inline-flex items-center gap-1.5 text-xs font-black text-[#A46E19] hover:text-[#7A500F] transition"
                                    >
                                        Read More <FaArrowRight size={10} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* 4. Grid of Articles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {filteredPosts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white rounded-2xl overflow-hidden border border-[#E8D9C5] shadow-xs hover:shadow-md transition-all flex flex-col"
                        >
                            {/* Card Image */}
                            <Link to={`/blog/${post.id}`} className="block relative h-44 sm:h-48 overflow-hidden group">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <span className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-sm text-[#7D1B2D] border border-[#7D1B2D]/20 px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                                    {post.category}
                                </span>
                            </Link>

                            {/* Card Body */}
                            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 text-[10px] text-gray-500 font-semibold mb-2">
                                        <span>{post.publishDate}</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1"><FaClock size={9} /> {post.readTime}</span>
                                    </div>

                                    <h3 className="font-serif font-extrabold text-base sm:text-lg text-[#22160F] leading-snug mb-2 hover:text-[#A46E19] transition-colors">
                                        <Link to={`/blog/${post.id}`}>
                                            {post.title}
                                        </Link>
                                    </h3>

                                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-4">
                                        {post.excerpt}
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                                        {post.author.name}
                                    </span>
                                    <Link
                                        to={`/blog/${post.id}`}
                                        className="inline-flex items-center gap-1 text-xs font-black text-[#A46E19] hover:text-[#7A500F] transition"
                                    >
                                        Read Guide <FaArrowRight size={9} />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Empty State */}
                {filteredPosts.length === 0 && (
                    <div className="text-center py-12 bg-white rounded-3xl border border-gray-200 p-8">
                        <p className="text-gray-500 text-sm mb-3">No articles match your search "{searchQuery}".</p>
                        <button
                            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                            className="btn-primary py-2 px-5 text-xs font-bold"
                        >
                            Reset Filters
                        </button>
                    </div>
                )}

                {/* 5. Bottom Consultation Banner */}
                <div className="mt-14 bg-gradient-to-r from-[#4A0A16] via-[#651020] to-[#4A0A16] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
                    <div>
                        <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-amber-300 block mb-1">
                            FREE BEAUTY CONSULTATION
                        </span>
                        <h3 className="text-xl sm:text-2xl font-serif font-extrabold leading-snug">
                            Need Personalized Advice for Your Hair or Bridal Look?
                        </h3>
                        <p className="text-xs sm:text-sm text-amber-100/80 mt-1 max-w-lg">
                            Visit Shobitha Studio in Kanhangad for a complimentary scalp & skin consultation with our experts.
                        </p>
                    </div>
                    <a
                        href="https://wa.me/918075340778?text=Hello%20Shobitha%20Studio,%20I%20read%20your%20blog%20and%20would%20like%20a%20personal%20beauty%20consultation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary py-3 px-6 text-xs sm:text-sm font-black whitespace-nowrap shadow-md hover:scale-105 active:scale-95 transition-all"
                    >
                        Chat on WhatsApp →
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Blog;

