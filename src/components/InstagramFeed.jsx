import React from 'react';
import { FaInstagram, FaRegHeart, FaRegComment } from 'react-icons/fa';

const feeds = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop",
        likes: "248",
        comments: "19",
        caption: "Muhurtham Bride Glam"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&auto=format&fit=crop",
        likes: "315",
        comments: "28",
        caption: "Reception Radiance"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&auto=format&fit=crop",
        likes: "182",
        comments: "14",
        caption: "Salon Aesthetic"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&auto=format&fit=crop",
        likes: "420",
        comments: "35",
        caption: "Silky Hair Smoothening"
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop",
        likes: "196",
        comments: "12",
        caption: "Radiant Skin Facial"
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&auto=format&fit=crop",
        likes: "338",
        comments: "22",
        caption: "Deluxe Floral Spa Therapy"
    },
];

const InstagramFeed = () => {
    return (
        <div className="section-padding bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12 gap-4">
                    <div className="text-center md:text-left">
                        <span className="text-primary-dark font-extrabold tracking-wider uppercase text-xs sm:text-sm mb-1 block">
                            Live Portfolio
                        </span>
                        <h2 className="text-3xl sm:text-4xl heading-serif mb-2 text-gray-950">
                            Follow @shobitha_haircare
                        </h2>
                        <p className="text-gray-700 text-base">
                            Real bridal stories, before-after clips & beauty tips on our Instagram.
                        </p>
                    </div>

                    <a
                        href="https://instagram.com/shobitha_haircare"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 bg-dark hover:bg-primary text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        <FaInstagram size={19} className="text-primary-light" />
                        Follow on Instagram
                    </a>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                    {feeds.map((post) => (
                        <a
                            key={post.id}
                            href="https://instagram.com/shobitha_haircare"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200"
                        >
                            <img
                                src={post.image}
                                alt={post.caption}
                                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white text-xs font-bold p-2 text-center">
                                <span className="text-[11px] text-primary-light font-bold line-clamp-1">{post.caption}</span>
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center gap-1"><FaRegHeart /> {post.likes}</span>
                                    <span className="flex items-center gap-1"><FaRegComment /> {post.comments}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InstagramFeed;
