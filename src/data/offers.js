// Active Offers & Promotional Configuration
import luxuryGoldFacial from '../assets/images/luxury-gold-facial.jpg';

export const defaultOffers = {
    showTopBanner: true,
    banner: {
        badge: "FESTIVE OFFER",
        text: "Special Bridal Season Offer: Flat 20% OFF on Muhurtham Packages & Keratin Therapy!",
        linkText: "Book Now",
        linkRoute: "/services",
        whatsappMessage: "Hello Shobitha Haircare, I would like to inquire about the FESTIVE OFFER: Special Bridal Season Offer: Flat 20% OFF on Muhurtham Packages & Keratin Therapy!"
    },
    promoBanner: {
        title: "O3+ & Gold Radiance",
        highlight: "Facials",
        subtitle: "De-Tan • Skin Polish • Glass Glow",
        buttonText: "Book Now",
        linkRoute: "/services",
        image: luxuryGoldFacial
    },
    featuredDeals: [
        {
            title: "Bridal Complete Makeover",
            discount: "Flat 20% OFF",
            description: "Includes HD / Airbrush Bridal Makeup, Hair Styling & Saree Draping with complimentary Trial session.",
            code: "BRIDE2026",
            validTill: "Valid till Festive Season"
        },
        {
            title: "Keratin & Smoothening Therapy",
            discount: "Starting from ₹3,999",
            description: "Transform frizzy, unmanageable hair into ultra-sleek, glossy locks with post-care serum included.",
            code: "SILKHAIR",
            validTill: "Limited Slots Daily"
        },
        {
            title: "O3+ Bridal Radiance Facial",
            discount: "Save ₹500",
            description: "Deep cleansing, skin polishing & 24K gold brightening therapy for instant glass skin glow.",
            code: "GLOWSPA",
            validTill: "This Month Only"
        }
    ]
};

// Check for live overrides from Admin Price Manager
let activeOffers = { ...defaultOffers };

if (typeof window !== 'undefined' && window.localStorage) {
    try {
        const saved = window.localStorage.getItem('shobitha_custom_offers');
        if (saved) {
            const parsed = JSON.parse(saved);
            activeOffers = {
                ...defaultOffers,
                ...parsed,
                banner: { ...defaultOffers.banner, ...(parsed.banner || {}) },
                promoBanner: { ...defaultOffers.promoBanner, ...(parsed.promoBanner || {}) }
            };
        }
    } catch (e) {
        // Fallback to default offers
    }
}

export const specialOffers = activeOffers;
