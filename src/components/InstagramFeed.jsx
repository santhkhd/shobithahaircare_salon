import React from 'react';
import { FaInstagram, FaRegHeart, FaRegComment } from 'react-icons/fa';

const feeds = [
    { id: 1, image: "https://images.unsplash.com/photo-1594463750939-ebb68c14e825?w=600&auto=format&fit=crop", likes: "142", comments: "12" },
    { id: 2, image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&auto=format&fit=crop", likes: "235", comments: "18" },
    { id: 3, image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&auto=format&fit=crop", likes: "98", comments: "5" },
    { id: 4, image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&auto=format&fit=crop", likes: "312", comments: "24" },
    { id: 5, image: "https://images.unsplash.com/photo-1519415510236-8dad1090a424?w=600&auto=format&fit=crop", likes: "156", comments: "10" },
    { id: 6, image: "https://images.unsplash.com/photo-1620331311520-246422ff83f9?w=600&auto=format&fit=crop", likes: "289", comments: "31" },
];

const InstagramFeed = () => {
    return (
        <div className="section-padding bg-white">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl heading-serif mb-2 text-center md:text-left">Follow Our Journey</h2>
                        <p className="text-gray-600 text-center md:text-left">Get daily beauty inspiration and see our latest transformations.</p>
                    </div>
                    <a
                        href="https://instagram.com/shobitha_haircare"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition shadow-lg"
                    >
                        <FaInstagram size={20} />
                        @shobitha_haircare
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {feeds.map((post) => (
                        <a
                            key={post.id}
                            href="https://instagram.com/shobitha_haircare"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-square rounded-xl overflow-hidden shadow-lg border-2 border-transparent hover:border-pink-500 transition-all duration-300"
                        >
                            <img
                                src={post.image}
                                alt="Insta post"
                                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white text-sm font-bold">
                                <div className="flex items-center gap-1"><FaRegHeart /> {post.likes}</div>
                                <div className="flex items-center gap-1"><FaRegComment /> {post.comments}</div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InstagramFeed;
