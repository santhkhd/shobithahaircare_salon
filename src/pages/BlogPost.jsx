import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogs';
import { useBooking } from '../context/BookingContext';
import { 
    FaArrowLeft, FaClock, FaCalendarAlt, FaShareAlt, 
    FaWhatsapp, FaCheckCircle, FaQuoteLeft, FaCrown, FaArrowRight 
} from 'react-icons/fa';

const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { openBooking } = useBooking();

    const allPosts = React.useMemo(() => {
        try {
            const custom = JSON.parse(localStorage.getItem('shobitha_custom_blogs') || '[]');
            return [...custom, ...blogPosts];
        } catch (e) {
            return blogPosts;
        }
    }, []);

    const post = allPosts.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (post) {
            document.title = `${post.title} | Shobitha Studio`;
        }
    }, [id, post]);

    if (!post) {
        return (
            <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
                <h1 className="text-2xl font-serif font-bold text-gray-900 mb-2">Article Not Found</h1>
                <p className="text-gray-500 text-sm mb-4">The blog post you are looking for does not exist.</p>
                <Link to="/blog" className="btn-primary py-2 px-6 text-xs font-bold">
                    ← Back to Blog
                </Link>
            </div>
        );
    }

    const relatedPosts = blogPosts.filter(p => p.id !== post.id && (p.category === post.category || p.featured)).slice(0, 2);

    const shareUrl = window.location.href;
    const shareText = encodeURIComponent(`${post.title} - Expert tips from Shobitha Haircare & Bridal Makeup Studio: ${shareUrl}`);

    return (
        <article className="pt-24 sm:pt-28 pb-20 bg-[#FAF9F5] min-h-screen">
            <div className="container-custom px-4 sm:px-6 max-w-3xl">

                {/* Back to Blog */}
                <div className="mb-5 flex items-center justify-between">
                    <button
                        onClick={() => navigate('/blog')}
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#A46E19] hover:text-[#7A500F] transition"
                    >
                        <FaArrowLeft size={10} /> Back to all articles
                    </button>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                            {post.category}
                        </span>
                        <span>•</span>
                        <Link
                            to="/admin"
                            className="text-[10px] font-bold text-gray-400 hover:text-[#A46E19] transition"
                            title="Studio Admin"
                        >
                            Admin 🔒
                        </Link>
                    </div>
                </div>

                {/* Article Header */}
                <header className="mb-6">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-[#22160F] leading-tight tracking-tight mb-3">
                        {post.title}
                    </h1>

                    {/* Metadata & Author Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 py-3 border-y border-[#E8D9C5] text-xs text-gray-600">
                        <div className="flex items-center gap-2.5">
                            <img
                                src={post.author.avatar}
                                alt={post.author.name}
                                className="w-8 h-8 rounded-full object-cover border border-amber-300"
                            />
                            <div>
                                <p className="font-bold text-gray-900 leading-tight">{post.author.name}</p>
                                <p className="text-[10px] text-gray-500">{post.author.role}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-[11px] font-semibold text-gray-500">
                            <span>{post.publishDate}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1"><FaClock size={10} /> {post.readTime}</span>
                        </div>
                    </div>
                </header>

                {/* Hero Image */}
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-[#E8D9C5] mb-8 h-64 sm:h-80 md:h-96">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                {/* Article Body Content */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-9 border border-[#E8D9C5] shadow-xs space-y-6 text-gray-800 leading-relaxed text-sm sm:text-base">
                    {post.content.map((block, idx) => {
                        if (block.type === 'intro') {
                            return (
                                <p key={idx} className="text-base sm:text-lg text-[#2A180E] font-medium leading-relaxed italic border-l-4 border-[#B98327] pl-4 py-1">
                                    {block.text}
                                </p>
                            );
                        }
                        if (block.type === 'heading') {
                            return (
                                <h2 key={idx} className="text-lg sm:text-2xl font-serif font-bold text-[#22160F] pt-3 pb-1 border-b border-amber-100">
                                    {block.text}
                                </h2>
                            );
                        }
                        if (block.type === 'paragraph') {
                            return (
                                <p key={idx} className="text-gray-700 leading-relaxed">
                                    {block.text}
                                </p>
                            );
                        }
                        if (block.type === 'quote') {
                            return (
                                <blockquote key={idx} className="my-4 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3">
                                    <FaQuoteLeft className="text-[#A46E19] text-xl shrink-0 mt-0.5 opacity-60" />
                                    <p className="font-serif italic text-sm sm:text-base text-[#4A2D12] font-semibold">
                                        "{block.text}"
                                    </p>
                                </blockquote>
                            );
                        }
                        if (block.type === 'list') {
                            return (
                                <ul key={idx} className="space-y-2.5 my-3 pl-1">
                                    {block.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                                            <FaCheckCircle className="text-emerald-600 shrink-0 mt-0.5 text-xs" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            );
                        }
                        return null;
                    })}

                    {/* Tags */}
                    <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center gap-1.5">
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mr-2">Tags:</span>
                        {post.tags.map((t, idx) => (
                            <span key={idx} className="bg-amber-50 text-[#8E580B] border border-amber-200 px-2.5 py-1 rounded-full text-[11px] font-bold">
                                #{t}
                            </span>
                        ))}
                    </div>

                    {/* Share Bar */}
                    <div className="pt-4 flex items-center justify-between">
                        <span className="text-xs font-bold text-gray-600">Share this guide:</span>
                        <a
                            href={`https://wa.me/?text=${shareText}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 bg-[#25D366] text-white px-3.5 py-1.5 rounded-full text-xs font-bold hover:bg-[#1EBE5D] transition shadow-xs"
                        >
                            <FaWhatsapp size={13} /> Share on WhatsApp
                        </a>
                    </div>
                </div>

                {/* Direct Action Card (Book Service) */}
                <div className="mt-8 bg-gradient-to-r from-[#FAF3E8] via-white to-[#FAF3E8] rounded-2xl sm:rounded-3xl p-6 border-2 border-[#E8D9C5] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#A46E19] block mb-1">
                            READY FOR YOUR MAKEOVER?
                        </span>
                        <h3 className="font-serif font-extrabold text-lg text-gray-950">
                            Book {post.serviceName || 'a Consultation'} at Shobitha Haircare
                        </h3>
                        <p className="text-xs text-gray-600 mt-0.5">
                            Located at Municipal Bus Stand Road, Kanhangad. Flexible booking slots available daily.
                        </p>
                    </div>

                    <div className="flex items-center gap-2.5 shrink-0">
                        <button
                            onClick={() => openBooking({ service: post.serviceName || 'Beauty Consultation' })}
                            className="btn-primary py-2.5 px-5 text-xs font-black shadow-sm"
                        >
                            Book Appointment
                        </button>
                        <a
                            href={`https://wa.me/918075340778?text=${encodeURIComponent(`Hello Shobitha Haircare, I read your article "${post.title}" and would like to book an appointment.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25D366] hover:bg-[#1EBE5D] text-white py-2.5 px-4 rounded-full text-xs font-black flex items-center gap-1.5 shadow-sm transition"
                        >
                            <FaWhatsapp size={14} /> WhatsApp
                        </a>
                    </div>
                </div>

                {/* Related Articles */}
                {relatedPosts.length > 0 && (
                    <div className="mt-12">
                        <h3 className="font-serif font-bold text-lg text-gray-900 mb-4 flex items-center justify-between">
                            <span>More Beauty Articles</span>
                            <Link to="/blog" className="text-xs text-[#A46E19] hover:underline">View All &rarr;</Link>
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {relatedPosts.map((rel) => (
                                <Link
                                    key={rel.id}
                                    to={`/blog/${rel.id}`}
                                    className="bg-white rounded-xl p-3 border border-[#E8D9C5] flex items-center gap-3 hover:shadow-sm transition"
                                >
                                    <img
                                        src={rel.image}
                                        alt={rel.title}
                                        className="w-16 h-16 rounded-lg object-cover shrink-0"
                                    />
                                    <div className="min-w-0">
                                        <span className="text-[10px] font-bold text-[#A46E19] uppercase">{rel.category}</span>
                                        <h4 className="font-serif font-bold text-xs sm:text-sm text-gray-900 truncate mt-0.5">
                                            {rel.title}
                                        </h4>
                                        <span className="text-[10px] text-gray-400 mt-1 block">{rel.readTime}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </article>
    );
};

export default BlogPost;
