import React, { useState, useRef, useEffect } from 'react';

const BeforeAfterSlider = ({
    beforeImage = "https://images.unsplash.com/photo-1595476108010-b4d1f8bc2b1f?q=80&w=1200&auto=format&fit=crop",
    afterImage = "https://images.unsplash.com/photo-1620331311520-246422ff83f9?q=80&w=1200&auto=format&fit=crop",
    title = "Hair Transformation"
}) => {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef(null);

    const handleMove = (e) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.touches ? e.touches[0].clientX : e.clientX;
        const relativeX = x - rect.left;
        const position = Math.max(0, Math.min(100, (relativeX / rect.width) * 100));

        setSliderPos(position);
    };

    return (
        <div className="flex flex-col gap-4">
            <h4 className="text-xl font-serif font-bold text-center text-gray-800">{title}</h4>
            <div
                ref={containerRef}
                className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl cursor-col-resize select-none border-4 border-white"
                onMouseMove={handleMove}
                onTouchMove={handleMove}
            >
                {/* After Image (Background) */}
                <img
                    src={afterImage}
                    alt="After"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Before Image (Overlay) */}
                <div
                    className="absolute inset-0 w-full h-full overflow-hidden"
                    style={{ width: `${sliderPos}%` }}
                >
                    <img
                        src={beforeImage}
                        alt="Before"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ width: `${100 / (sliderPos / 100)}%` }}
                    />
                </div>

                {/* Slider Handle */}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-xl cursor-col-resize flex items-center justify-center"
                    style={{ left: `${sliderPos}%` }}
                >
                    <div className="w-10 h-10 rounded-full bg-white shadow-2xl flex items-center justify-center gap-1 group">
                        <div className="w-1 h-3 bg-primary/40 rounded-full group-hover:bg-primary transition-colors"></div>
                        <div className="w-1 h-3 bg-primary/40 rounded-full group-hover:bg-primary transition-colors"></div>
                    </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-widest pointer-events-none">
                    Before
                </div>
                <div className="absolute top-4 right-4 bg-primary/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-widest pointer-events-none">
                    After
                </div>
            </div>
        </div>
    );
};

export default BeforeAfterSlider;
