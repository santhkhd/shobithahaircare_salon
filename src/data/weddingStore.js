// Comprehensive Marriage Items, Bridal Sarees, Solah Shringar & Vivah Puja Catalog
import bridalSaree from '../assets/images/bridal-saree.jpg';
import bridalMuhurtham from '../assets/images/bridal-muhurtham.jpg';
import bridalGiftBoxes from '../assets/images/bridal-gift-boxes.jpg';
import bridalMehndiArt from '../assets/images/bridal-mehndi-art.jpg';
import bridalNailArtLuxury from '../assets/images/bridal-nail-art-luxury.jpg';
import bridalHeroPurpleSaree from '../assets/images/bridal-hero-purple-saree.jpg';
import heroKeralaBride from '../assets/images/hero-kerala-bride.jpg';

export const weddingCategories = [
    { id: 'all', label: 'All Items', icon: '✨' },
    { id: 'sarees', label: 'Bridal Sarees & Trousseau', icon: '🥻' },
    { id: 'shringar', label: 'Solah Shringar (16 Adornments)', icon: '👑' },
    { id: 'groom', label: "Groom's Attire & Accessories", icon: '🤵' },
    { id: 'puja', label: 'Vivah Puja Samagri', icon: '🪔' },
    { id: 'functions', label: 'Function-Wise Kits', icon: '🎉' },
    { id: 'gifts', label: 'Shagun Trays & Gifts', icon: '🎁' },
    { id: 'destination', label: 'Destination Packing', icon: '✈️' },
    { id: 'timeline', label: 'Shopping Timeline', icon: '📅' }
];

// Featured Bridal Sarees & Trousseau Products Available to Inquire/Order
export const featuredBridalProducts = [
    {
        id: 'kanjivaram-muhurtham-silk',
        name: 'Pure Kanjivaram Muhurtham Silk Saree',
        category: 'sarees',
        priceRange: '₹14,500 – ₹38,000',
        badge: 'High Quality Pure Silk',
        image: bridalSaree,
        description: 'Authentic handwoven Kanjivaram pure silk saree with heavy zari border, intricate pallu, and contrast blouse piece.',
        includes: ['100% Pure Mulberry Silk', 'Certified Silk Mark', 'Heavy Gold Zari Border', 'Custom Blouse Matching Service'],
        inStock: true
    },
    {
        id: 'kerala-kasavu-bridal-silk',
        name: 'Traditional Kerala Kasavu Bridal Saree',
        category: 'sarees',
        priceRange: '₹8,500 – ₹24,000',
        badge: 'Kerala Traditional',
        image: heroKeralaBride,
        description: 'Regal off-white tissue Kasavu silk saree with rich temple gold border, designed for traditional Kerala Muhurtham weddings.',
        includes: ['Premium Tissue Silk', 'Traditional Temple Zari', 'Lightweight & Breathable', 'Includes Custom Draping Styling'],
        inStock: true
    },
    {
        id: 'reception-banarasi-designer-saree',
        name: 'Royal Banarasi Georgette Saree',
        category: 'sarees',
        priceRange: '₹12,000 – ₹29,000',
        badge: 'Reception Special',
        image: bridalHeroPurpleSaree,
        description: 'Intricately woven floral jaal Banarasi saree in deep jewel tones, ideal for Sangeet, Engagement and Reception celebrations.',
        includes: ['Fine Woven Kadhwa Work', 'Rich Contrast Pallu', 'Comfortable All-Night Wear', 'Designer Tassel Finishing'],
        inStock: true
    },
    {
        id: 'luxury-trousseau-gift-trays',
        name: 'Velvet & Acrylic Trousseau Shagun Trays (Set of 7)',
        category: 'gifts',
        priceRange: '₹3,500 – ₹8,500',
        badge: 'Bestseller',
        image: bridalGiftBoxes,
        description: 'Handcrafted premium velvet packaging trays with floral embellishments for saree presentation, dry fruits, cosmetics, and jewelry.',
        includes: ['7 Coordinated Presentation Trays', 'Gold Brocade Lining', 'Covered Dust Protection', 'Custom Family Monogram Option'],
        inStock: true
    }
];

// Master Shaadi Checklist Items categorized
export const masterChecklist = [
    // 1. BRIDE'S OUTFITS
    {
        category: 'sarees',
        title: "Bride's Outfits by Function",
        items: [
            { id: 'b_roka', name: 'Roka / Sagai Outfit', desc: 'Saree, lehenga or anarkali in a soft pastel or champagne tone' },
            { id: 'b_haldi', name: 'Haldi Function Outfit', desc: 'Yellow or floral outfit comfortable for haldi paste' },
            { id: 'b_mehndi', name: 'Mehndi Function Outfit', desc: 'Light lehenga or sharara with short/sleeveless cut for easy mehndi' },
            { id: 'b_sangeet', name: 'Sangeet Night Outfit', desc: 'Dance-friendly lehenga, gown or Indo-western ensemble' },
            { id: 'b_wedding', name: 'Main Wedding / Muhurtham Saree or Lehenga', desc: 'Pure silk Kanjivaram, Kasavu or bridal lehenga with dupatta & backup blouse' },
            { id: 'b_reception', name: 'Reception Outfit', desc: 'Glamorous evening saree, designer lehenga or bridal gown' },
            { id: 'b_inlaws', name: 'Post-Wedding Trousseau Sarees (4–6 Sets)', desc: 'New premium suits or sarees for initial visits to in-laws and relatives' }
        ]
    },

    // 2. SOLAH SHRINGAR (16 TRADITIONAL ADORNMENTS)
    {
        category: 'shringar',
        title: "Solah Shringar: The 16 Sacred Bridal Adornments",
        items: [
            { id: 's_bindi', name: '1. Bindi', desc: 'Traditional red and gold stone bindis' },
            { id: 's_sindoor', name: '2. Sindoor', desc: 'Pure herbal vermilion for the parting line' },
            { id: 's_maang_tikka', name: '3. Maang Tikka / Matha Patti', desc: 'Forehead jewel accessory framing bridal hairline' },
            { id: 's_kajal', name: '4. Kajal / Kohl', desc: 'Smudge-proof natural black eye kajal' },
            { id: 's_nath', name: '5. Nath (Nose Ring)', desc: 'Traditional bridal nath with delicate pearl chain' },
            { id: 's_karnphool', name: '6. Karn Phool (Jhumkas / Earrings)', desc: 'Temple gold or uncut polki statement bridal earrings' },
            { id: 's_haar', name: '7. Haar & Mangalsutra', desc: 'Choker, long rani haar, and the sacred black bead mangalsutra' },
            { id: 's_mehndi', name: '8. Mehndi', desc: 'Intricate bridal henna design on hands and feet' },
            { id: 's_chooda', name: '9. Chooda & Gold Bangles', desc: 'Red/white bridal chooda or gold temple kadas' },
            { id: 's_baajuband', name: '10. Baajuband (Armlet)', desc: 'Ornate arm band worn on the upper arm' },
            { id: 's_aarsi', name: '11. Aarsi & Finger Rings', desc: 'Traditional mirror thumb ring and engagement rings' },
            { id: 's_kamarbandh', name: '12. Kamarbandh (Waist Belt / Oddiyanam)', desc: 'Gold waist chain anchoring saree pleats' },
            { id: 's_payal', name: '13. Payal (Silver Anklets)', desc: 'Tinkling anklets with delicate bells' },
            { id: 's_bichhiya', name: '14. Bichhiya (Toe Rings)', desc: 'Silver toe rings worn on both second toes' },
            { id: 's_gajra', name: '15. Gajra (Fresh Jasmine Flowers)', desc: 'Fragrant fresh jasmine or malligai for hair coiffure' },
            { id: 's_itra', name: '16. Itra (Traditional Natural Perfume)', desc: 'Pure sandalwood, rose or mogra fragrance' }
        ]
    },

    // 3. BRIDE'S ESSENTIAL KIT
    {
        category: 'shringar',
        title: "Bride's Footwear, Accessories & Emergency Beauty Kit",
        items: [
            { id: 'be_juttis', name: 'Bridal Juttis & Comfy Flats', desc: 'Embroidered footwear plus comfortable backup flats for pheras' },
            { id: 'be_potli', name: 'Clutches & Potli Bags', desc: 'Coordinated purse for each wedding function' },
            { id: 'be_pins', name: 'Dupatta Pins, Safety Pins & Blouse Hooks', desc: 'Golden pins, hair grips, safety pin pack in multiple sizes' },
            { id: 'be_innerwear', name: 'Shapewear & Matching Petticoats', desc: 'Custom silhouettes for heavy lehengas and sarees' },
            { id: 'be_touchup', name: 'Touch-up Makeup Kit', desc: 'Compact powder, lipstick, blotting sheets, kajal' },
            { id: 'be_emergency', name: 'Emergency Kit', desc: 'Painkillers, antacid, band-aids, mini sewing kit, double-sided dress tape' }
        ]
    },

    // 4. GROOM'S SHOPPING LIST
    {
        category: 'groom',
        title: "Groom's Wedding Attire & Accessories",
        items: [
            { id: 'g_sherwani', name: 'Wedding Sherwani / Bandhgala', desc: 'Tailored wedding sherwani with churidar (order 4–6 months ahead)' },
            { id: 'g_haldi_kurta', name: 'Haldi & Mehndi Kurta Sets', desc: 'Yellow cotton/silk kurta sets' },
            { id: 'g_sangeet', name: 'Sangeet Indo-Western / Tuxedo', desc: 'Modern silhouette for dance performances' },
            { id: 'g_reception', name: 'Reception 3-Piece Suit or Tuxedo', desc: 'Tailored black or midnight blue formal suit' },
            { id: 'g_safa', name: 'Safa / Pagdi (Turban)', desc: 'Royal silk turban matched to bride’s outfit with safa specialist' },
            { id: 'g_sehra', name: 'Sehra', desc: 'Pearl or fresh floral veil worn for the baraat' },
            { id: 'g_kalgi', name: 'Kalgi (Turban Brooch)', desc: 'Jeweled brooch with feather for the safa' },
            { id: 'g_mala', name: 'Groom’s Pearl Mala', desc: 'Multi-layer pearl and emerald bead necklace' },
            { id: 'g_dupatta', name: 'Groom’s Stole / Dupatta', desc: 'Used for the sacred gathbandhan knot' },
            { id: 'g_mojaris', name: 'Embroidered Mojaris / Juttis', desc: 'Traditional footwear plus spare comfortable pair' },
            { id: 'g_accessories', name: 'Cufflinks, Brooch & Watch', desc: 'Matching metallic accents for wedding attire' },
            { id: 'g_grooming', name: 'Grooming & Shaving Kit', desc: 'Trimmer, beard oil, face wash, deodorant, cologne' }
        ]
    },

    // 5. VIVAH PUJA SAMAGRI
    {
        category: 'puja',
        title: "Vivah Puja Samagri (Hindu Vedic Wedding Mandap)",
        items: [
            { id: 'p_kalash', name: 'Copper/Brass Kalash & Fresh Mango Leaves', desc: 'Sacred water pot for ritual commencement' },
            { id: 'p_coconuts', name: 'Coconuts (Husked & Dry Nariyal)', desc: 'Symbol of auspiciousness and fertility' },
            { id: 'p_havan', name: 'Havan Kund, Samagri & Samidha Wood', desc: 'Sacred fire altar items with pure cow ghee' },
            { id: 'p_camphor', name: 'Camphor (Kapur), Diyas & Cotton Wicks', desc: 'For aarti and lighting the holy fire' },
            { id: 'p_akshat', name: 'Akshat (Unbroken Rice), Roli, Kumkum & Haldi', desc: 'Sacred tilak and blessing grains' },
            { id: 'p_mauli', name: 'Mauli / Kalava (Red Sacred Thread)', desc: 'Tied on wrists of bride and groom' },
            { id: 'p_supari', name: 'Supari (Betel Nuts) & Fresh Paan Leaves', desc: 'Vedic offerings for planetary deities' },
            { id: 'p_panchamrit', name: 'Panchamrit Ingredients', desc: 'Milk, curd, honey, sugar, and ghee' },
            { id: 'p_varmalas', name: 'Two Fresh Flower Varmalas (Jaimalas)', desc: 'Garlands exchanged between bride and groom' },
            { id: 'p_mangalsutra', name: 'Mangalsutra & Sindoor', desc: 'Sacred wedding necklace and vermilion' },
            { id: 'p_gathbandhan', name: 'Gathbandhan Dupatta / Sacred Cloth', desc: 'Knotted between bride’s pallu and groom’s stole' },
            { id: 'p_laja', name: 'Laja / Khil (Puffed Rice)', desc: 'Offered into the fire during Laja Homa (pheras)' }
        ]
    },

    // 6. FUNCTION-WISE ITEMS
    {
        category: 'functions',
        title: "Function-Wise Marriage Items List",
        items: [
            { id: 'f_roka', name: 'Roka / Sagai Platter & Shagun Envelopes', desc: 'Ring platter, dry fruit hampers, cash envelopes' },
            { id: 'f_haldi', name: 'Haldi Bowls, Marigold Petals & Floral Jewelry', desc: 'Brass bowls, pure turmeric paste, yellow decorations' },
            { id: 'f_mehndi', name: 'Organic Mehndi Cones & Floor Cushions', desc: 'Natural henna cones, music playlist, hand wipes' },
            { id: 'f_sangeet', name: 'Sangeet Props & Dance Choreography Accessories', desc: 'Lighting, audio, coordinated dance props' },
            { id: 'f_baraat', name: 'Baraat Items (Dhol, Sehra, Ghodi / Car Decor)', desc: 'Arrival arrangements for groom’s procession' },
            { id: 'f_vidaai', name: 'Vidaai Coins, Rice & Packed Trousseau Bags', desc: 'Rice tossing ritual items and bride’s luggage' }
        ]
    },

    // 7. GIFTS & TROUSSEAU TRAYS
    {
        category: 'gifts',
        title: "Gifts, Milni & Trousseau Trays",
        items: [
            { id: 'g_trays', name: 'Designer Trousseau Presentation Trays', desc: 'Acrylic and velvet trays for sarees and suits' },
            { id: 'g_milni', name: 'Milni Gifts (Shawls, Gold/Silver Coins)', desc: 'Exchanged between fathers and uncles' },
            { id: 'g_return', name: 'Guest Return Gifts & Sweet Boxes', desc: 'Mithai boxes, dry fruits, silver souvenirs' },
            { id: 'g_welcome', name: 'Welcome Hampers for Guests', desc: 'Water, local snacks, itinerary card, emergency essentials' }
        ]
    },

    // 8. DESTINATION PACKING
    {
        category: 'destination',
        title: "Destination Wedding Packing Checklist",
        items: [
            { id: 'd_cabin', name: 'Cabin Bag: Jewelry, Mangalsutra & Outfits', desc: 'NEVER check-in gold or wedding outfits in cargo luggage' },
            { id: 'd_steamer', name: 'Portable Garment Steamer', desc: 'Essential for smoothing silk sarees and sherwanis in hotel rooms' },
            { id: 'd_id', name: 'Photo ID Copies for All Family Members', desc: 'Required by resort/hotel check-in desks' },
            { id: 'd_venue_puja', name: 'Pre-Confirm with Venue: Pandit, Mandap & Havan Kund', desc: 'Verify what the hotel provides vs what you must bring' },
            { id: 'd_varmala_local', name: 'Book Local Florist for Fresh Varmalas & Gajras', desc: 'Arrange day-of fresh flower delivery at the destination' }
        ]
    }
];

// Shaadi Shopping Timeline
export const shoppingTimeline = [
    {
        phase: '8–10 Months Before',
        badge: 'Priority 1',
        title: 'Bridal Outfit & Fine Jewellery',
        items: [
            'Finalize Bridal Muhurtham Saree or Lehenga (custom weaving takes months)',
            'Purchase BIS Hallmarked Gold Jewellery with 6-digit HUID',
            'Order Mangalsutra and sacred wedding rings'
        ]
    },
    {
        phase: '6–8 Months Before',
        badge: 'Priority 2',
        title: 'Secondary Functions & Footwear',
        items: [
            'Select Haldi, Mehndi, and Sangeet outfits',
            'Bride footwear (juttis and heels + break them in)',
            'Book bridal makeup artist and hairstylist'
        ]
    },
    {
        phase: '4–6 Months Before',
        badge: 'Priority 3',
        title: "Groom's Sherwani, Family Sarees & Cards",
        items: [
            "Order Groom's Sherwani, safa, and sehra with fittings",
            'Purchase sarees/suits for mothers, sisters, and close relatives',
            'Finalize wedding invitations and digital e-invites'
        ]
    },
    {
        phase: '2–3 Months Before',
        badge: 'Priority 4',
        title: 'Accessories, Trays & Return Gifts',
        items: [
            'Order designer trousseau packaging trays and shagun envelopes',
            'Select return gifts for guests and milni shawls',
            'Finalize Solah Shringar accessories (nath, kamarbandh, payal)'
        ]
    },
    {
        phase: '1 Month Before',
        badge: 'Priority 5',
        title: 'Personal Kits & Final Alterations',
        items: [
            'Assemble emergency beauty and medication kit',
            'Final blouse fitting with exact bridal innerwear',
            'Pack trousseau luggage and organize shagun cash'
        ]
    },
    {
        phase: '1–2 Weeks Before',
        badge: 'Final Prep',
        title: 'Puja Samagri & Sweets',
        items: [
            "Cross-verify Vivah Puja Samagri list with family pandit",
            'Order traditional sweets (mithai) and dry fruit boxes',
            'Confirm mehndi artist timing and guest arrival schedules'
        ]
    },
    {
        phase: 'Day Before Wedding',
        badge: 'Day-Of',
        title: 'Fresh Flowers & Final Steaming',
        items: [
            'Receive fresh flower Varmalas and fragrant jasmine gajras',
            'Steam and hang bridal saree, veil, and groom sherwani',
            'Pack mandap essentials into one dedicated handover basket'
        ]
    }
];
