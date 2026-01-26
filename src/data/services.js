export const categories = [
    "Bridal & Makeup",
    "Hair Services",
    "Skin & Care",
    "Grooming"
];

export const services = [
    // Bridal & Makeup
    {
        id: "bridal-makeup",
        name: "Bridal Makeup",
        category: "Bridal & Makeup",
        description: "Premium HD or Airbrush makeup for your special day.",
        duration: "3-4 Hours",
        price: "₹15,000",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop",
        details: {
            benefits: ["Flawless long-lasting finish", "Waterproof and sweatproof", "High-definition photography ready"],
            steps: ["Consultation & Color Matching", "Skin Prep & Priming", "Base Application", "Eye Makeup & Contouring", "Finishing Setting Spray", "Hair Styling & Draping"],
            whoFor: "Brides for Wedding day",
            aftercare: "Use gentle cleanser to remove. Keep skin hydrated."
        }
    },
    {
        id: "engagement-makeup",
        name: "Engagement Makeup",
        category: "Bridal & Makeup",
        description: "Subtle yet glamorous look perfect for engagement ceremonies.",
        duration: "2-3 Hours",
        price: "₹8,000",
        image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop",
        details: {
            benefits: ["Natural glow", "Perfect for day/evening events"],
            steps: ["Skin Prep", "Light Base", "Soft Glam Eye Makeup", "Hair Styling"],
            whoFor: "Brides for interaction/engagement",
            aftercare: "Remove before sleeping."
        }
    },
    {
        id: "reception-makeup",
        name: "Reception Makeup",
        category: "Bridal & Makeup",
        description: "Bold and stunning makeup look for the grand reception.",
        duration: "3 Hours",
        price: "₹10,000",
        image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=2070&auto=format&fit=crop",
        details: {
            benefits: ["Glamorous evening look", "Highlight focused"],
            steps: ["Full coverage base", "Smokey/Glitter Eyes", "Bold Lips", "Hair Styling"],
            whoFor: "Brides for reception",
            aftercare: "Double cleanse required."
        }
    },
    {
        id: "party-makeup",
        name: "Party Makeup",
        category: "Bridal & Makeup",
        description: "Chic makeup for guests, bridesmaids, or parties.",
        duration: "1.5 Hours",
        price: "₹3,500",
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1935&auto=format&fit=crop",
        details: {
            benefits: ["Quick turnaround", "Photo-ready"],
            steps: ["Quick Prep", "Standard Base", "Eye Makeup", "Basic Hairstyling"],
            whoFor: "Any festive occasion",
            aftercare: "Standard removal."
        }
    },
    {
        id: "natural-makeup",
        name: "Natural Makeup Look",
        category: "Bridal & Makeup",
        description: "Minimalist makeup for a fresh, everyday glow.",
        duration: "1 Hour",
        price: "₹2,500",
        image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop",
        details: {
            benefits: ["No-makeup makeup look", "Lightweight"],
            steps: ["Moisturizing", "Concealer/BB Cream", "Blush & Mascara", "Tinted Balm"],
            whoFor: "Casual events, photoshoots",
            aftercare: "Easy removal."
        }
    },

    // Hair Services
    {
        id: "hair-cut",
        name: "Hair Stylist Cut (Layer/U/Step)",
        category: "Hair Services",
        description: "Professional haircut tailored to your face shape and style.",
        duration: "45 Mins",
        price: "₹500",
        image: "https://images.unsplash.com/photo-1560869713-7d0a87599b6b?q=80&w=2048&auto=format&fit=crop",
        details: {
            benefits: ["Fresh look", "Removes split ends", "Adds volume/shape"],
            steps: ["Consultation", "Wash", "Cut", "Blow Dry"],
            whoFor: "Anyone needing a fresh style",
            aftercare: "Regular trimming recommended every 2-3 months."
        }
    },
    {
        id: "hair-spa",
        name: "Hair Spa",
        category: "Hair Services",
        description: "Rejuvenating spa treatment for nourished, shiny hair.",
        duration: "1 Hour",
        price: "₹1,200",
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2073&auto=format&fit=crop",
        details: {
            benefits: ["Deep conditioning", "Relaxation", "Scalp health"],
            steps: ["Oil Massage", "Steam", "Mask Application", "Wash", "Serum"],
            whoFor: "Dry or damaged hair",
            aftercare: "Avoid washing for 24 hours."
        }
    },
    {
        id: "keratin-treatment",
        name: "Keratin Treatment",
        category: "Hair Services",
        description: "Smooth, frizz-free hair with long-lasting shine.",
        duration: "3-4 Hours",
        price: "₹4,000",
        image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop",
        details: {
            benefits: ["Frizz reduction", "Straightening effect", "Shine"],
            steps: ["Wash", "Product Application", "Heat Processing", "Rinse/Iron"],
            whoFor: "Frizzy, unmanageable hair",
            aftercare: "Use sulfate-free shampoo."
        }
    },
    {
        id: "hair-smoothening",
        name: "Hair Smoothening",
        category: "Hair Services",
        description: "Makes hair soft, straight and manageable.",
        duration: "3-4 Hours",
        price: "₹5,000",
        image: "https://images.unsplash.com/photo-1620331313174-87a8f9d0c65a?q=80&w=1887&auto=format&fit=crop",
        details: {
            benefits: ["Permanent straightening effect", "Silky texture"],
            steps: ["Wash", "Relaxer", "Neutralizer", "Ironing"],
            whoFor: "Curly or wavy hair owners wanting straight hair",
            aftercare: "No washing/tying for 3 days."
        }
    },
    {
        id: "hair-color",
        name: "Global Hair Color",
        category: "Hair Services",
        description: "Full head coloring with premium ammonia-free products.",
        duration: "2 Hours",
        price: "₹3,000",
        image: "https://images.unsplash.com/photo-1634449571010-0238941f9eff?q=80&w=2070&auto=format&fit=crop",
        details: {
            benefits: ["Cover grays", "New look", "Shine"],
            steps: ["Consultation", "Application", "Development Time", "Wash"],
            whoFor: "Anyone wanting a color change",
            aftercare: "Color-protect shampoo."
        }
    },

    // Skin & Care
    {
        id: "facial-glow",
        name: "Glow Facial",
        category: "Skin & Care",
        description: "Instant radiance and deep cleansing for all skin types.",
        duration: "1 Hour",
        price: "₹1,500",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
        details: {
            benefits: ["Brightening", "Cleansing", "Relaxing"],
            steps: ["Cleanse", "Scrub", "Massage", "Pack", "Moisturize"],
            whoFor: "Dull skin",
            aftercare: "Sunscreen is must."
        }
    },
    {
        id: "detan",
        name: "De-tan Treatment",
        category: "Skin & Care",
        description: "Removes sun tan and restores natural skin tone.",
        duration: "45 Mins",
        price: "₹800",
        image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
        details: {
            benefits: ["Even skin tone", "Tan removal"],
            steps: ["Cleanse", "De-tan pack application", "Massage", "Wipe off"],
            whoFor: "Sun-exposed skin",
            aftercare: "Avoid sun exposure immediately."
        }
    },

    // Grooming
    {
        id: "threading",
        name: "Threading & Eyebrow Shaping",
        category: "Grooming",
        description: "Precision shaping for perfect brows.",
        duration: "15 Mins",
        price: "₹100",
        image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=1888&auto=format&fit=crop",
        details: {
            benefits: ["Clean look", "Defined brows"],
            steps: ["Consultation", "Threading", "Soothing Gel"],
            whoFor: "Everyone",
            aftercare: "Apply aloe vera gel."
        }
    },
    {
        id: "waxing",
        name: "Waxing (Full Arms/Legs)",
        category: "Grooming",
        description: "Smooth, hair-free skin with premium wax.",
        duration: "45 Mins",
        price: "₹500",
        image: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2073&auto=format&fit=crop",
        details: {
            benefits: ["Long lasting smoothness", "Exfoliation"],
            steps: ["Powdring", "Wax Application", "Strip Pull", "Oil Cleanse"],
            whoFor: "To remove body hair",
            aftercare: "Avoid hot water and tight clothes."
        }
    },
    {
        id: "pedicure",
        name: "Pedicure",
        category: "Grooming",
        description: "Relaxing foot care.",
        duration: "45 Mins",
        price: "₹700",
        image: "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=1934&auto=format&fit=crop",
        details: {
            benefits: ["Soft feet", "Clean nails"],
            steps: ["Soak", "Scrub", "Massage", "Nail Polish"],
            whoFor: "Tired feet",
            aftercare: "Moisturize feet daily."
        }
    }
];

export const bridalPackages = [
    {
        id: "basic-bridal",
        name: "Basic Bridal Package",
        price: "₹25,000",
        description: "Essential bridal services for a beautiful look.",
        includes: ["HD Makeup", "Bridal Hairstyle", "Saree Draping", "Regular Facial", "Basic Manicure/Pedicure"]
    },
    {
        id: "premium-bridal",
        name: "Premium Bridal Package",
        price: "₹40,000",
        description: "Enhanced services for the glowing bride.",
        includes: ["Airbrush Makeup", "Advanced Hairstyle", "Saree Draping", "Premium Facial (O3+)", "Spa Manicure/Pedicure", "Full Body Waxing"]
    },
    {
        id: "luxury-bridal",
        name: "Luxury Bridal Package",
        price: "₹60,000",
        description: "The ultimate indulgence for your big day.",
        includes: ["International Airbrush Makeup", "Intricate Hairstyle", "Saree Draping & Styling", "Luxury Facial", "Luxury Spa Manicure/Pedicure", "Full Body Polishing", "Hair Spa", "Pre-bridal Sitting"]
    }
];
