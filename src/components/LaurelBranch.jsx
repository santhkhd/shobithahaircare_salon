import React from 'react';

/**
 * Elegant Golden Laurel Branch SVG component matching Shobitha luxury branding.
 */
export const LaurelBranch = ({ flip = false, className = "w-8 sm:w-12 h-16 sm:h-22 text-amber-600/70 shrink-0" }) => (
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
        <path d="M10 52 C2 58, 1 70, 7 78 C12 73, 15 63, 10 52 Z"/>
        <path d="M24 70 C33 74, 40 85, 36 93 C30 91, 25 82, 24 70 Z"/>
        <path d="M12 72 C5 78, 4 88, 10 95 C14 90, 16 81, 12 72 Z"/>
    </svg>
);

export default LaurelBranch;

