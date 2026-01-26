import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="text-center">
                <h1 className="text-9xl font-serif font-bold text-primary/20 mb-4 tracking-tighter">404</h1>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Page Not Found</h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link to="/" className="btn-primary inline-flex items-center gap-2">
                    <FaHome /> Go to Homepage
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
