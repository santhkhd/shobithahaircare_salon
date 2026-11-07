const fs = require('fs');
const path = require('path');

const categories = [
    "Haircuts & Styling",
    "Hair Spa & Hair Treatments",
    "Hair Colour & Highlights",
    "Smoothening & Chemical Hair Services",
    "Facial & Skincare",
    "Threading & Face Grooming",
    "Waxing",
    "Bridal Makeup & Special Occasion Makeup",
    "Manicure, Pedicure & Nail Care",
    "Body Care & Relaxation",
    "Mehndi & Traditional Beauty",
    "Salon Packages & Combos"
];

const folderMap = {
    "Haircuts & Styling": { folder: "01-haircuts-and-styling", fallbackVar: "hairCut", fallbackImg: "hair-cut.jpg" },
    "Hair Spa & Hair Treatments": { folder: "02-hair-spa-and-treatments", fallbackVar: "hairTreatment", fallbackImg: "hair-treatment.jpg" },
    "Hair Colour & Highlights": { folder: "03-hair-colour-and-highlights", fallbackVar: "hairColor", fallbackImg: "hair-color.jpg" },
    "Smoothening & Chemical Hair Services": { folder: "04-smoothening-and-chemical", fallbackVar: "hairSmootheningAfter", fallbackImg: "hair-smoothening-after.jpg" },
    "Facial & Skincare": { folder: "05-facial-and-skincare", fallbackVar: "skinFacial", fallbackImg: "skin-facial.jpg" },
    "Threading & Face Grooming": { folder: "06-threading-and-face-grooming", fallbackVar: "bridalMuhurtham", fallbackImg: "bridal-muhurtham.jpg" },
    "Waxing": { folder: "07-waxing", fallbackVar: "bodySpa", fallbackImg: "body-spa.jpg" },
    "Bridal Makeup & Special Occasion Makeup": { folder: "08-bridal-and-special-occasion-makeup", fallbackVar: "bridalMuhurtham", fallbackImg: "bridal-muhurtham.jpg" },
    "Manicure, Pedicure & Nail Care": { folder: "09-manicure-pedicure-and-nail-care", fallbackVar: "pedicureSpa", fallbackImg: "pedicure-spa.jpg" },
    "Body Care & Relaxation": { folder: "10-body-care-and-relaxation", fallbackVar: "bodySpa", fallbackImg: "body-spa.jpg" },
    "Mehndi & Traditional Beauty": { folder: "11-mehndi-and-traditional-beauty", fallbackVar: "bridalMehndi", fallbackImg: "bridal-mehndi.jpg" },
    "Salon Packages & Combos": { folder: "12-salon-packages-and-combos", fallbackVar: "bridalMuhurtham", fallbackImg: "bridal-muhurtham.jpg" }
};

// Raw items as given by user
const rawCategoryItems = {
    "Haircuts & Styling": [
        "Basic Haircut", "U-Cut", "V-Cut", "Layer Cut", "Step Cut",
        "Feather Cut", "Butterfly Cut", "Wolf Cut", "Bob Cut", "Pixie Cut",
        "Bangs / Fringe Cut", "Hair Trimming", "Split-End Trimming", "Hair Wash", "Blow Dry",
        "Hair Ironing / Straightening (Temporary)", "Hair Curling", "Beach Waves", "Hair Braiding", "Party Hairstyle",
        "Bridal Hairstyle", "Updo Hairstyle", "Saree Hairstyle", "Kids' Haircut", "Senior Ladies' Haircut"
    ],
    "Hair Spa & Hair Treatments": [
        "Basic Hair Spa", "Premium Hair Spa", "Deep Conditioning", "Hair Mask Treatment", "Hot Oil Treatment",
        "Scalp Cleansing", "Scalp Massage", "Anti-Dandruff Scalp Care", "Dry Hair Treatment", "Frizz Control Treatment",
        "Hair Damage Repair", "Protein Hair Treatment", "Bond Repair Treatment", "Hair Botox Treatment", "Keratin Treatment",
        "Cysteine Treatment", "Herbal Hair Pack", "Herbal Hair Oil Treatment"
    ],
    "Hair Colour & Highlights": [
        "Root Touch-Up", "Global Hair Colour", "Grey Hair Coverage", "Ammonia-Free Hair Colour", "Fashion Hair Colour",
        "Highlights", "Lowlights", "Balayage", "Ombre Colour", "Babylights",
        "Money Piece Highlights", "Colour Correction", "Hair Bleaching", "Henna Hair Colour"
    ],
    "Smoothening & Chemical Hair Services": [
        "Hair Smoothening", "Hair Rebonding", "Permanent Hair Straightening", "Hair Relaxing", "Permanent Hair Perming",
        "Root Lift Treatment"
    ],
    "Facial & Skincare": [
        "Basic Facial", "Fruit Facial", "Herbal Facial", "Hydrating Facial", "Gold Facial",
        "Diamond Facial", "Pearl Facial", "Brightening Facial", "Anti-Ageing Facial", "Acne-Prone Skin Facial",
        "Sensitive Skin Facial", "De-Tan Facial", "Deep Cleansing Facial", "Basic Cleanup", "Premium Cleanup",
        "Blackhead Removal", "Whitehead Removal", "Face Mask Treatment", "Face Bleaching", "Skin Polishing",
        "Under-Eye Care", "Bridal Skin Preparation"
    ],
    "Threading & Face Grooming": [
        "Eyebrow Threading", "Upper Lip Threading", "Forehead Threading", "Chin Threading", "Side Locks Threading",
        "Full Face Threading", "Eyebrow Shaping", "Eyebrow Tinting", "Eyebrow Lamination", "Eyelash Tinting",
        "Eyelash Extensions", "Lash Lift", "False Eyelash Application"
    ],
    "Waxing": [
        "Upper Lip Waxing", "Full Face Waxing", "Underarm Waxing", "Half Arms Waxing", "Full Arms Waxing",
        "Half Legs Waxing", "Full Legs Waxing", "Full Body Waxing", "Back Waxing", "Stomach Waxing",
        "Bikini Line Waxing", "Honey Wax", "Chocolate Wax", "Rica Wax"
    ],
    "Bridal Makeup & Special Occasion Makeup": [
        "Kerala Bridal Makeup", "Traditional Bridal Makeup", "HD Bridal Makeup", "Airbrush Bridal Makeup", "Engagement Makeup",
        "Reception Makeup", "Party Makeup", "Natural Makeup", "Soft Glam Makeup", "Evening Makeup",
        "Wedding Guest Makeup", "Bridesmaid Makeup", "Photoshoot Makeup", "Bridal Makeup Trial", "Bridal Hairstyling",
        "Bridal Saree Draping", "Traditional Saree Draping", "False Eyelash Application", "Complete Bridal Makeup Package", "Pre-Bridal Package"
    ],
    "Manicure, Pedicure & Nail Care": [
        "Basic Manicure", "Spa Manicure", "Premium Manicure", "Gel Manicure", "Basic Pedicure",
        "Spa Pedicure", "Premium Pedicure", "Heel Care", "Foot Scrub", "Foot Massage",
        "Nail Shaping", "Nail Polish Application", "Gel Nail Polish", "Nail Art", "Nail Extensions",
        "Nail Extension Removal"
    ],
    "Body Care & Relaxation": [
        "Head, Neck & Shoulder Massage", "Hand Spa", "Foot Spa", "Body Scrub", "Body Polishing",
        "Body De-Tan", "Back Care", "Relaxing Foot Massage"
    ],
    "Mehndi & Traditional Beauty": [
        "Bridal Mehndi", "Traditional Mehndi", "Party Mehndi", "Simple Hand Mehndi", "Arabic Mehndi",
        "Hair Henna Application"
    ],
    "Salon Packages & Combos": [
        "Haircut + Hair Spa Combo", "Hair Colour + Haircut Combo", "Facial + Cleanup Combo", "Manicure + Pedicure Combo", "Haircare Maintenance Package",
        "Monthly Beauty Maintenance", "Pre-Bridal Beauty Package", "Engagement Beauty Package", "Complete Bridal Package", "Party Makeup Package"
    ]
};

// Slug generator
function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\+/g, '-plus-')
        .replace(/&/g, '-and-')
        .replace(/[\/\(\)\']/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

// Special alias IDs to preserve backward compatibility for important routes:
const specialIds = {
    "HD Bridal Makeup": "bridal-makeup",
    "Airbrush Bridal Makeup": "airbrush-bridal",
    "Kerala Bridal Makeup": "kerala-bridal-makeup",
    "Layer Cut": "layer-cut",
    "Butterfly Cut": "butterfly-cut",
    "Basic Hair Spa": "hair-spa",
    "Keratin Treatment": "keratin-treatment",
    "Hair Smoothening": "hair-smoothening",
    "Global Hair Colour": "hair-color",
    "Gold Facial": "o3-gold-facial",
    "Eyebrow Threading": "eyebrow-threading",
    "Full Face Threading": "full-face-threading",
    "Spa Pedicure": "pedicure",
    "Spa Manicure": "manicure",
    "Nail Art": "nail-art",
    "Body Polishing": "body-polishing",
    "Bridal Mehndi": "bridal-mehndi"
};

// Realistic pricing estimator
function getEstimatedPrice(category, name) {
    if (name.includes("Airbrush")) return "₹22,000";
    if (name.includes("Complete Bridal")) return "₹25,000";
    if (name.includes("Pre-Bridal")) return "₹6,500";
    if (name.includes("Kerala Bridal") || name.includes("HD Bridal") || name.includes("Traditional Bridal")) return "₹15,000";
    if (name.includes("Engagement") || name.includes("Reception")) return "₹8,000";
    if (name.includes("Party Makeup") || name.includes("Evening Makeup")) return "₹3,500";
    if (name.includes("Trial")) return "₹3,500";
    if (name.includes("Natural") || name.includes("Soft Glam") || name.includes("Wedding Guest")) return "₹2,500";
    
    // Hair chemical & spa
    if (name.includes("Smoothening") || name.includes("Rebonding") || name.includes("Straightening")) return "₹4,500";
    if (name.includes("Botox")) return "₹6,000";
    if (name.includes("Keratin") || name.includes("Cysteine")) return "₹5,000";
    if (name.includes("Perming") || name.includes("Root Lift")) return "₹3,500";
    if (name.includes("Balayage") || name.includes("Ombre")) return "₹4,500";
    if (name.includes("Global Hair Colour")) return "₹2,500";
    if (name.includes("Highlights")) return "₹3,000";
    if (name.includes("Root Touch-Up")) return "₹1,000";
    if (name.includes("Hair Spa") || name.includes("Deep Conditioning")) return "₹1,200";
    if (name.includes("Bond Repair")) return "₹2,500";

    // Haircuts
    if (name.includes("Layer Cut") || name.includes("Step Cut") || name.includes("Feather Cut")) return "₹700";
    if (name.includes("Butterfly") || name.includes("Wolf")) return "₹850";
    if (name.includes("Bob") || name.includes("Pixie")) return "₹600";
    if (name.includes("Basic Haircut") || name.includes("U-Cut") || name.includes("V-Cut")) return "₹350";
    if (name.includes("Trimming")) return "₹300";
    if (name.includes("Wash") || name.includes("Blow Dry") || name.includes("Ironing") || name.includes("Curling")) return "₹600";
    if (name.includes("Hairstyle")) return "₹1,500";
    if (name.includes("Kids") || name.includes("Senior")) return "₹250";

    // Skincare
    if (name.includes("Gold Facial") || name.includes("Diamond") || name.includes("Pearl")) return "₹2,500";
    if (name.includes("Deep Cleansing") || name.includes("Hydrating")) return "₹2,000";
    if (name.includes("Fruit") || name.includes("Herbal") || name.includes("De-Tan")) return "₹1,000";
    if (name.includes("Basic Facial")) return "₹1,200";
    if (name.includes("Cleanup")) return "₹600";
    if (name.includes("Removal") || name.includes("Mask") || name.includes("Under-Eye")) return "₹500";

    // Threading & Waxing
    if (category === "Threading & Face Grooming") {
        if (name.includes("Full Face")) return "₹250";
        if (name.includes("Extensions") || name.includes("Lamination") || name.includes("Lift")) return "₹1,500";
        if (name.includes("Tinting")) return "₹300";
        return "₹50";
    }
    if (category === "Waxing") {
        if (name.includes("Full Body")) return "₹1,800";
        if (name.includes("Full Legs")) return "₹650";
        if (name.includes("Full Arms")) return "₹450";
        if (name.includes("Rica") || name.includes("Chocolate")) return "₹900";
        if (name.includes("Face")) return "₹350";
        return "₹150";
    }

    // Nails
    if (name.includes("Extensions")) return "₹2,000";
    if (name.includes("Nail Art")) return "₹800";
    if (name.includes("Pedicure")) return "₹750";
    if (name.includes("Manicure")) return "₹600";
    if (name.includes("Gel")) return "₹500";

    // Body & Mehndi
    if (name.includes("Body Polishing") || name.includes("Body Scrub")) return "₹2,500";
    if (name.includes("Massage") || name.includes("Spa")) return "₹1,200";
    if (name.includes("Bridal Mehndi")) return "₹3,500";
    if (name.includes("Mehndi")) return "₹1,000";

    // Packages
    if (category === "Salon Packages & Combos") {
        if (name.includes("Bridal")) return "₹12,000";
        if (name.includes("Pre-Bridal")) return "₹6,500";
        if (name.includes("Maintenance") || name.includes("Package")) return "₹3,500";
        return "₹1,800";
    }

    return "₹800";
}

// Realistic durations
function getDuration(category, name) {
    if (name.includes("Bridal Makeup") || name.includes("Mehndi")) return "3-4 Hours";
    if (name.includes("Smoothening") || name.includes("Rebonding") || name.includes("Balayage")) return "3-4 Hours";
    if (name.includes("Keratin") || name.includes("Botox") || name.includes("Package")) return "2-3 Hours";
    if (name.includes("Extensions") || name.includes("Facial") || name.includes("Body Polishing")) return "60-90 Mins";
    if (name.includes("Hair Spa") || name.includes("Pedicure") || name.includes("Manicure") || name.includes("Massage")) return "45-60 Mins";
    if (name.includes("Haircut") || name.includes("Blow Dry") || name.includes("Cleanup") || name.includes("Waxing")) return "30-45 Mins";
    if (name.includes("Threading") || name.includes("Trimming") || name.includes("Polish")) return "15-20 Mins";
    return "45 Mins";
}

// Build the 172 services
const allServices = [];

// Prepare public folders and READMEs
const basePublic = path.join('public', 'images', 'services');
if (!fs.existsSync(basePublic)) fs.mkdirSync(basePublic, { recursive: true });

for (const [catName, items] of Object.entries(rawCategoryItems)) {
    const meta = folderMap[catName];
    const folderPath = path.join(basePublic, meta.folder);
    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });

    // Copy the default fallback image into the folder as default.jpg so it's always available
    const srcDefault = path.join('public', 'images', meta.fallbackImg);
    const destDefault = path.join(folderPath, 'default.jpg');
    if (fs.existsSync(srcDefault) && !fs.existsSync(destDefault)) {
        fs.copyFileSync(srcDefault, destDefault);
    }

    let readmeLines = [
        `# Image Folder: ${catName}`,
        `Location: public/images/services/${meta.folder}/`,
        ``,
        `Drop your service images here! When you add an image matching any of the filenames below, the website will display it automatically.`,
        `If no custom image is added yet, the website gracefully displays default.jpg.`,
        ``,
        `Service File Names:`
    ];

    items.forEach((itemName, idx) => {
        const itemNumber = (idx + 1).toString().padStart(2, '0');
        const slug = slugify(itemName);
        const serviceId = specialIds[itemName] || slug;
        const filename = `${slug}.webp`;
        const numFilename = `${itemNumber}-${slug}.webp`;

        readmeLines.push(`${itemNumber}. ${itemName} -> ${filename} (or ${numFilename})`);

        const price = getEstimatedPrice(catName, itemName);
        const duration = getDuration(catName, itemName);

        allServices.push({
            id: serviceId,
            slug: slug,
            name: itemName,
            category: catName,
            folder: meta.folder,
            imageFile: filename,
            image: `/images/services/${meta.folder}/${filename}`,
            fallbackVar: meta.fallbackVar,
            imageAlt: `${itemName} - Shobitha Haircare & Bridal Makeup Studio, Kanhangad`,
            shortDescription: `Professional ${itemName.toLowerCase()} delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.`,
            fullDescription: `Experience our dedicated ${itemName.toLowerCase()} service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.`,
            price: price,
            duration: duration,
            benefits: [
                `Personalized consultation tailored specifically to your hair/skin profile`,
                `Performed using premium, skin-safe and authentic salon-grade international brands`,
                `Long-lasting, camera-ready and confidence-boosting results`,
                `100% hygienic, sterilized salon environment adhering to high safety standards`
            ],
            procedureSteps: [
                `In-depth consultation and assessment of hair/skin condition`,
                `Preparation and gentle surface sanitization with specialized salon primers`,
                `Precision professional application of ${itemName.toLowerCase()}`,
                `Relaxing finishing step, nourishment infusion, and client comfort check`,
                `Personalized aftercare review and home maintenance guidance`
            ],
            faq: [
                { q: `How should I prepare before my ${itemName} appointment?`, a: `Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session.` },
                { q: `How long do the results of ${itemName} typically last?`, a: `Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration.` },
                { q: `Do I need to book in advance for ${itemName}?`, a: `Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists.` }
            ],
            aftercare: `Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.`,
            relatedServices: [],
            addons: [
                { name: "Deep Conditioning Infusion", price: "₹350" },
                { name: "Serum Gloss Finish", price: "₹200" }
            ],
            active: true,
            featured: (idx === 0 || idx === 1)
        });
    });

    fs.writeFileSync(path.join(folderPath, 'README.txt'), readmeLines.join('\n'), 'utf8');
}

// Add related services interlinking
allServices.forEach(s => {
    const peers = allServices.filter(o => o.category === s.category && o.id !== s.id);
    if (peers.length >= 2) {
        s.relatedServices = [
            { id: peers[0].id, name: peers[0].name, price: peers[0].price },
            { id: peers[1].id, name: peers[1].name, price: peers[1].price }
        ];
    }
});

console.log(`Generated ${allServices.length} total services across ${categories.length} categories.`);

// Build services.js code
const header = `import bridalMuhurtham from '../assets/images/bridal-muhurtham.jpg';
import bridalSaree from '../assets/images/bridal-saree.jpg';
import bridalMehndi from '../assets/images/bridal-mehndi.jpg';
import nailArt from '../assets/images/nail-art.jpg';
import bodySpa from '../assets/images/body-spa.jpg';
import hairCut from '../assets/images/hair-cut.jpg';
import hairTreatment from '../assets/images/hair-treatment.jpg';
import hairSmootheningAfter from '../assets/images/hair-smoothening-after.jpg';
import hairColor from '../assets/images/hair-color.jpg';
import skinFacial from '../assets/images/skin-facial.jpg';
import pedicureSpa from '../assets/images/pedicure-spa.jpg';

export const categories = ${JSON.stringify(categories, null, 4)};

export const fallbackMap = {
    hairCut,
    hairTreatment,
    hairColor,
    hairSmootheningAfter,
    skinFacial,
    bridalMuhurtham,
    bodySpa,
    pedicureSpa,
    nailArt,
    bridalMehndi,
    bridalSaree
};

export const services = `;

// Serialize services
let serialized = JSON.stringify(allServices, null, 4);

// Replace fallbackVar with actual image variable reference for image fallback
for (const [cat, meta] of Object.entries(folderMap)) {
    // Map image property so it provides both primary path and fallback
}

// Export bridalPackages
const bridalPackages = [
    {
        id: "basic-bridal",
        name: "Classic Bridal Package",
        price: "₹25,000",
        description: "Essential South Indian bridal makeup and styling for an elegant ceremony.",
        includes: [
            "Traditional HD Muhurtham Makeup",
            "Bridal Hairstyle with Fresh Jasmine Flowers",
            "Kasavu / Kanjeevaram Saree Draping & Pinning",
            "Radiance Facial Sitting (3 days prior)",
            "Classic Spa Manicure & Pedicure",
            "Full Face Threading & Brow Shaping"
        ]
    },
    {
        id: "premium-bridal",
        name: "Royal Heritage Package",
        price: "₹40,000",
        description: "Our signature luxury package with Airbrush finish, pre-bridal care and jewelry styling.",
        includes: [
            "HD Airbrush Waterproof Makeup (All-day wear)",
            "Advanced Bridal Hairstyle & Hair Extensions",
            "Intricate Double Saree / Veil Draping",
            "O3+ Gold Radiance Pre-Bridal Facial",
            "Deluxe Aromatherapy Manicure & Pedicure",
            "Full Body Honey Waxing & De-tan Glow Pack",
            "Bridal Gel Nail Art & Stone Setting",
            "Bridal Trial Consultation Session"
        ]
    },
    {
        id: "luxury-bridal",
        name: "Empress Couture Bridal",
        price: "₹60,000",
        description: "The ultimate 2-event bridal indulgence covering Muhurtham and Grand Reception.",
        includes: [
            "2 Complete Makeover Looks (Muhurtham + Reception)",
            "International Luxury Airbrush Base with HD Eye Art",
            "Two Distinct Hairstyles with Accessories & Flowers",
            "Complete Pre-Bridal Spa Journey (Skin Polishing + Facial)",
            "Hair Spa with Deep Conditioning & Glossing",
            "Luxury Spa Manicure & Pedicure with Gel Finish",
            "Full Body Glow Polishing Treatment",
            "Full Traditional Bridal Mehndi (Hands & Feet)",
            "On-Venue Styling Assistance within Kanhangad"
        ]
    }
];

const finalCode = header + serialized + ';\n\nexport const bridalPackages = ' + JSON.stringify(bridalPackages, null, 4) + ';\n';
fs.writeFileSync('src/data/services.js', finalCode, 'utf8');
console.log('src/data/services.js successfully updated with all 172 services!');
