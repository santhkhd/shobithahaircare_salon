import React, { useState, useRef } from 'react';

const BeforeAfterSlider = ({
    beforeImage = "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1200&auto=format&fit=crop",
    afterImage = "https://images.unsplash.com/photo-1620331311520-246422ff83f9?q=80&w=1200&auto=format&fit=crop",
    title = "Signature Hair Transformation"
}) => {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef(null);

    const updatePosition = (clientX) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const relativeX = clientX - rect.left;
        const position = Math.max(0, Math.min(100, (relativeX / rect.width) * 100));
        setSliderPos(position);
    };

    const handleMouseMove = (e) => {
        updatePosition(e.clientX);
    };

    const handleTouchMove = (e) => {
        if (e.touches && e.touches[0]) {
            updatePosition(e.touches[0].clientX);
        }
    };

    return (
        <div className="flex flex-col gap-3 w-full">
            <div className="flex items-center justify-between px-1">
                <h4 className="text-base sm:text-lg font-serif font-bold text-gray-800">
                    {title}
                </h4>
                <span className="text-[11px] font-medium text-gray-500 hidden sm:inline">
                    Drag slider to compare
                </span>
            </div>

            <div
                ref={containerRef}
                className="relative aspect-[4/3] sm:aspect-video rounded-3xl overflow-hidden shadow-2xl cursor-col-resize select-none border-4 border-white bg-gray-100 touch-none"
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
            >
                {/* After Image (Full width background) */}
                <img
                    src={afterImage}
                    alt="After Keratin Smoothening"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    loading="lazy"
                />

                {/* Before Image (Clipped overlay) */}
                <div
                    className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                    style={{ width: `${sliderPos}%` }}
                >
                    <img
                        src={beforeImage}
                        alt="Before Hair Treatment"
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
                        style={{
                            width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                            height: '100%'
                        }}
                        loading="lazy"
                    />
                </div>

                {/* Divider Line & Circular Handle */}
                <div
                    className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
                    style={{ left: `${sliderPos}%` }}
                >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-primary">
                        <div className="flex items-center gap-1">
                            <span className="text-[10px] text-primary-dark font-bold">◀</span>
                            <span className="text-[10px] text-primary-dark font-bold">▶</span>
                        </div>
                    </div>
                </div>

                {/* Clean Badges */}
                <div className="absolute top-3 left-3 bg-dark/70 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-bold uppercase tracking-wider pointer-events-none shadow-sm">
                    Before
                </div>
                <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-bold uppercase tracking-wider pointer-events-none shadow-sm">
                    After
                </div>
            </div>

            <p className="text-center text-xs text-gray-500 sm:hidden">
                👆 Slide finger across the photo to view before & after
            </p>
        </div>
    );
};

export default BeforeAfterSlider;
