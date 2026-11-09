import React from 'react';

/**
 * Shobitha Haircare & Bridal Makeup Logo
 * Accurately styled after the attached images:
 * - Flowing signature calligraphy script wordmark "Shobitha"
 * - Twin botanical leaves fluttering above the ending letter 'a'
 * - Clean high-fashion subtitle "Haircare & Bridal Makeup"
 * - Signature golden curved underline flourish (swoop)
 *
 * Variants:
 * - 'dark'   : Royal burgundy script (#4A0A16) with metallic gold leaves & gold swoop (best for white navbar)
 * - 'gold'   : Pure metallic champagne gold gradient (exact match to Image 2)
 * - 'white'  : Pure crisp white (exact match to Image 1 on dark backgrounds)
 */
const Logo = ({
    variant = 'dark',
    size = 'md',
    align = 'left',
    showSwoop = true,
    showSubtitle = true,
    subtitleText = 'Haircare & Bridal Makeup',
    className = ''
}) => {
    // Sizing presets
    const sizeConfig = {
        badge: {
            titleSize: 'text-sm sm:text-base',
            pr: 'pr-2.5',
            leafSize: 'w-2 h-2 -top-0.5 right-0',
            subtitleSize: 'text-[5px] sm:text-[6px] tracking-[0.14em]',
            swoopWidth: 'max-w-[70px] sm:max-w-[85px]',
            swoopHeight: 'h-0.5',
        },
        xs: {
            titleSize: 'text-lg sm:text-[21px]',
            pr: 'pr-3',
            leafSize: 'w-2.5 h-2.5 -top-0.5 right-0',
            subtitleSize: 'text-[6px] sm:text-[7.5px] tracking-[0.15em]',
            swoopWidth: 'max-w-[95px] sm:max-w-[115px]',
            swoopHeight: 'h-0.5 sm:h-1',
        },
        sm: {
            titleSize: 'text-2xl sm:text-[27px]',
            pr: 'pr-3.5',
            leafSize: 'w-3.5 h-3.5 -top-1 right-0',
            subtitleSize: 'text-[7.5px] sm:text-[8.5px] tracking-[0.16em]',
            swoopWidth: 'max-w-[125px] sm:max-w-[145px]',
            swoopHeight: 'h-1 sm:h-1.5',
        },
        md: {
            titleSize: 'text-[28px] sm:text-3xl md:text-[35px]',
            pr: 'pr-4 sm:pr-4.5',
            leafSize: 'w-4 h-4 sm:w-4.5 sm:h-4.5 -top-1.5 right-0',
            subtitleSize: 'text-[8.5px] sm:text-[10px] tracking-[0.18em]',
            swoopWidth: 'max-w-[145px] sm:max-w-[170px]',
            swoopHeight: 'h-1.5 sm:h-2',
        },
        lg: {
            titleSize: 'text-4xl sm:text-5xl md:text-6xl',
            pr: 'pr-5 sm:pr-6',
            leafSize: 'w-6 h-6 sm:w-7 sm:h-7 -top-2.5 right-0',
            subtitleSize: 'text-xs sm:text-sm tracking-[0.22em]',
            swoopWidth: 'max-w-[200px] sm:max-w-[250px]',
            swoopHeight: 'h-2 sm:h-2.5',
        },
        xl: {
            titleSize: 'text-5xl sm:text-6xl md:text-7xl',
            pr: 'pr-6 sm:pr-8',
            leafSize: 'w-8 h-8 sm:w-9 sm:h-9 -top-3.5 right-0',
            subtitleSize: 'text-sm sm:text-base tracking-[0.24em]',
            swoopWidth: 'max-w-[260px] sm:max-w-[320px]',
            swoopHeight: 'h-2.5 sm:h-3',
        }
    };

    const config = sizeConfig[size] || sizeConfig.md;

    const isGold = variant === 'gold';
    const isWhite = variant === 'white';
    const isDark = variant === 'dark';
    const isCenter = align === 'center';

    return (
        <div className={`inline-flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'} select-none ${className}`}>
            {/* Main Wordmark "Shobitha" with Leaf Sprout */}
            <div className={`relative inline-block leading-none ${config.pr}`}>
                <span
                    className={`font-script font-normal transition-colors tracking-wide ${config.titleSize} ${
                        isGold
                            ? 'bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent drop-shadow-xs'
                            : isWhite
                            ? 'text-white drop-shadow-md'
                            : 'text-[#4A0A16] group-hover:text-[#681022]'
                    }`}
                    style={{
                        fontFamily: "'Alex Brush', 'Great Vibes', cursive",
                        lineHeight: '1.05'
                    }}
                >
                    Shobitha
                </span>

                {/* Twin Botanical Leaves sprouting above 'a' */}
                <span
                    className={`absolute ${config.leafSize} pointer-events-none transform -rotate-6`}
                    aria-hidden="true"
                >
                    <svg
                        viewBox="0 0 40 40"
                        className={`w-full h-full ${
                            isWhite
                                ? 'text-white fill-current'
                                : 'text-[#D4AF37] fill-current drop-shadow-xs'
                        }`}
                    >
                        {/* Primary upper leaf */}
                        <path
                            d="M 10 32 C 10 18, 22 8, 38 4 C 38 18, 26 30, 10 32 Z"
                            fill="currentColor"
                        />
                        {/* Secondary angled leaf */}
                        <path
                            d="M 16 34 C 22 22, 30 18, 40 16 C 36 28, 26 35, 16 34 Z"
                            fill="currentColor"
                            opacity="0.9"
                        />
                    </svg>
                </span>
            </div>

            {/* Subtitle: "Haircare & Bridal Makeup" */}
            {showSubtitle && (
                <div
                    className={`font-sans uppercase font-bold mt-0.5 ${config.subtitleSize} ${
                        isGold
                            ? 'text-amber-200/95'
                            : isWhite
                            ? 'text-white/95 font-medium'
                            : 'text-gray-800'
                    }`}
                    style={{ letterSpacing: '0.18em' }}
                >
                    {subtitleText}
                </div>
            )}

            {/* Curved Golden Underline Flourish (Swoop from Image 2) */}
            {showSwoop && (
                <div className={`w-full ${config.swoopWidth} ${config.swoopHeight} mt-0.5 flex items-center ${isCenter ? 'justify-center' : 'justify-start'}`}>
                    <svg
                        viewBox="0 0 160 12"
                        className="w-full h-full overflow-visible"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient id="swoopGold" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
                                <stop offset="20%" stopColor="#D4AF37" stopOpacity="0.8" />
                                <stop offset="50%" stopColor="#F5DF88" stopOpacity="1" />
                                <stop offset="80%" stopColor="#D4AF37" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="swoopDark" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#C59A27" stopOpacity="0" />
                                <stop offset="20%" stopColor="#C59A27" stopOpacity="0.8" />
                                <stop offset="50%" stopColor="#B8860B" stopOpacity="1" />
                                <stop offset="80%" stopColor="#C59A27" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#C59A27" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M 0 3 Q 80 12 160 3 Q 80 8 0 3 Z"
                            fill={isWhite ? 'rgba(255,255,255,0.7)' : isGold ? 'url(#swoopGold)' : 'url(#swoopDark)'}
                        />
                    </svg>
                </div>
            )}
        </div>
    );
};

export default Logo;
