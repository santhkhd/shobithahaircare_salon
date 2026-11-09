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
        micro: {
            titleSize: 'text-xs sm:text-[13px]',
            pr: 'pr-2',
            leafSize: 'w-1.5 h-1.5 -top-0.5 right-0',
            subtitleSize: 'text-[4.5px] sm:text-[5.5px] tracking-[0.12em]',
            swoopWidth: 'max-w-[50px] sm:max-w-[62px]',
            swoopHeight: 'h-0.5',
        },
        badge: {
            titleSize: 'text-[13px] sm:text-sm',
            pr: 'pr-2',
            leafSize: 'w-2 h-2 -top-0.5 right-0',
            subtitleSize: 'text-[5.5px] sm:text-[6.5px] tracking-[0.12em]',
            swoopWidth: 'max-w-[62px] sm:max-w-[75px]',
            swoopHeight: 'h-0.5',
        },
        xs: {
            titleSize: 'text-sm sm:text-base',
            pr: 'pr-2.5',
            leafSize: 'w-2.5 h-2.5 -top-0.5 right-0',
            subtitleSize: 'text-[6px] sm:text-[7px] tracking-[0.14em]',
            swoopWidth: 'max-w-[75px] sm:max-w-[90px]',
            swoopHeight: 'h-0.5',
        },
        sm: {
            titleSize: 'text-lg sm:text-xl md:text-[22px]',
            pr: 'pr-3',
            leafSize: 'w-3 h-3 -top-1 right-0',
            subtitleSize: 'text-[7px] sm:text-[8px] tracking-[0.16em]',
            swoopWidth: 'max-w-[105px] sm:max-w-[125px]',
            swoopHeight: 'h-1',
        },
        md: {
            titleSize: 'text-2xl sm:text-[26px] md:text-3xl',
            pr: 'pr-3.5 sm:pr-4',
            leafSize: 'w-3.5 h-3.5 sm:w-4 sm:h-4 -top-1 right-0',
            subtitleSize: 'text-[8px] sm:text-[9px] tracking-[0.18em]',
            swoopWidth: 'max-w-[130px] sm:max-w-[150px]',
            swoopHeight: 'h-1 sm:h-1.5',
        },
        lg: {
            titleSize: 'text-3xl sm:text-4xl md:text-5xl',
            pr: 'pr-4 sm:pr-5',
            leafSize: 'w-5 h-5 sm:w-6 sm:h-6 -top-2 right-0',
            subtitleSize: 'text-[10px] sm:text-xs tracking-[0.2em]',
            swoopWidth: 'max-w-[170px] sm:max-w-[210px]',
            swoopHeight: 'h-1.5 sm:h-2',
        },
        xl: {
            titleSize: 'text-4xl sm:text-5xl md:text-6xl',
            pr: 'pr-5 sm:pr-6',
            leafSize: 'w-6 h-6 sm:w-7 sm:h-7 -top-2.5 right-0',
            subtitleSize: 'text-xs sm:text-sm tracking-[0.22em]',
            swoopWidth: 'max-w-[220px] sm:max-w-[270px]',
            swoopHeight: 'h-2 sm:h-2.5',
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
