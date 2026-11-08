// Complete E-Commerce Store Catalog for Shobitha Haircare & Bridal Makeup Studio
import bridalSaree from '../assets/images/bridal-saree.jpg';
import heroKeralaBride from '../assets/images/hero-kerala-bride.jpg';
import bridalHeroPurpleSaree from '../assets/images/bridal-hero-purple-saree.jpg';
import bridalGiftBoxes from '../assets/images/bridal-gift-boxes.jpg';
import luxuryGoldFacial from '../assets/images/luxury-gold-facial.jpg';
import hairTreatment from '../assets/images/hair-treatment.jpg';
import hairSpaWash from '../assets/images/hair-spa-wash.jpg';
import keratinHairSmoothening from '../assets/images/keratin-hair-smoothening.jpg';
import bridalNailArtLuxury from '../assets/images/bridal-nail-art-luxury.jpg';
import bridalMehndiArt from '../assets/images/bridal-mehndi-art.jpg';
import skinFacial from '../assets/images/skin-facial.jpg';
import bridalMuhurtham from '../assets/images/bridal-muhurtham.jpg';

export const storeCategories = [
    { id: 'all', label: 'All Products', icon: '✨' },
    { id: 'sarees', label: 'Bridal Sarees & Silks', icon: '🥻' },
    { id: 'jewellery', label: 'Jewellery & Shringar', icon: '👑' },
    { id: 'haircare', label: 'Salon Haircare & Oils', icon: '💆‍♀️' },
    { id: 'skincare', label: 'Skincare & Glow Kits', icon: '✨' },
    { id: 'puja_gifts', label: 'Puja Samagri & Trays', icon: '🎁' }
];

export const initialStoreProducts = [
    // --- 1. BRIDAL SAREES & SILKS ---
    {
        id: 'kanjivaram-silk-saree',
        name: 'Pure Kanjivaram Muhurtham Silk Saree',
        category: 'sarees',
        price: '₹18,500',
        priceNum: 18500,
        originalPrice: '₹24,000',
        badge: '100% Pure Silk',
        rating: 4.9,
        reviewsCount: 38,
        image: bridalSaree,
        inStock: true,
        shortDesc: 'Certified pure mulberry silk handwoven with authentic gold zari temple border and heavy contrast pallu.',
        details: [
            '100% Pure Mulberry Silk with Silk Mark Certification',
            'Heavy Pure Gold Zari Temple Border & Contrast Pallu',
            'Includes unstitched matching pure silk blouse piece',
            'Custom blouse embroidery and saree draping consultation included'
        ]
    },
    {
        id: 'kerala-kasavu-tissue-saree',
        name: 'Kerala Kasavu Tissue Silk Wedding Saree',
        category: 'sarees',
        price: '₹9,800',
        priceNum: 9800,
        originalPrice: '₹12,500',
        badge: 'Muhurtham Classic',
        rating: 5.0,
        reviewsCount: 42,
        image: heroKeralaBride,
        inStock: true,
        shortDesc: 'Traditional off-white tissue silk Kasavu saree with ornate temple golden borders for Kerala brides.',
        details: [
            'Finest lightweight tissue silk weave with authentic golden border',
            'Breathable, crease-resistant all-day wedding wear',
            'Ideal for Muhurtham, engagement, and traditional temple ceremonies'
        ]
    },
    {
        id: 'banarasi-reception-georgette-saree',
        name: 'Royal Banarasi Georgette Saree',
        category: 'sarees',
        price: '₹14,500',
        priceNum: 14500,
        originalPrice: '₹19,000',
        badge: 'Reception Special',
        rating: 4.8,
        reviewsCount: 29,
        image: bridalHeroPurpleSaree,
        inStock: true,
        shortDesc: 'Rich jewel-toned Banarasi georgette saree featuring fine Kadhwa floral jaal work and scalloped borders.',
        details: [
            'Supple flowy pure georgette silk with dense gold zari work',
            'Perfect night-wear drape for Sangeet & Reception stages',
            'Handcrafted tassels pre-attached on the pallu'
        ]
    },
    {
        id: 'ready-to-wear-party-saree',
        name: 'Ready-to-Wear Pre-Pleated Party Saree',
        category: 'sarees',
        price: '₹4,200',
        priceNum: 4200,
        originalPrice: '₹5,500',
        badge: 'Fast 1-Min Drape',
        rating: 4.7,
        reviewsCount: 51,
        image: bridalMuhurtham,
        inStock: true,
        shortDesc: 'Stitched pre-pleated shimmer lycra saree that slips on in 60 seconds with zero pins required.',
        details: [
            'Pre-stitched pleats with adjustable waist hook fit (size 26 to 40)',
            'Stitched designer sequin padded blouse included',
            'Ultra comfortable for wedding guests and sangeet dance parties'
        ]
    },

    // --- 2. BRIDAL JEWELLERY & SOLAH SHRINGAR ---
    {
        id: 'temple-jewellery-choker-set',
        name: 'Temple Gold-Plated Choker & Haram Bridal Set',
        category: 'jewellery',
        price: '₹8,900',
        priceNum: 8900,
        originalPrice: '₹12,000',
        badge: 'Rental Available (₹2,500/day)',
        rating: 4.9,
        reviewsCount: 64,
        image: bridalNailArtLuxury,
        inStock: true,
        shortDesc: 'Antique matte gold finish South Indian temple jewellery set with choker, long haram, jhumkas, and maang tikka.',
        details: [
            'High-grade brass copper with 24K micron antique gold plating',
            'Kemp red stones, emerald green accents, and pearl cluster drops',
            'Hypoallergenic skin-friendly coating; available for purchase or rental'
        ]
    },
    {
        id: 'antique-kamarbandh-oddiyanam',
        name: 'Antique Gold Kamarbandh / Oddiyanam (Waist Belt)',
        category: 'jewellery',
        price: '₹3,400',
        priceNum: 3400,
        originalPrice: '₹4,500',
        badge: 'Bridal Must-Have',
        rating: 4.9,
        reviewsCount: 31,
        image: bridalMehndiArt,
        inStock: true,
        shortDesc: 'Sculpted Lakshmi motif waist belt to cinch and hold saree pleats flawlessly during wedding rituals.',
        details: [
            'Adjustable chain extension to fit waist sizes 26 to 42 inches',
            'Fine carving with genuine South Indian temple craftsmanship',
            'Keeps the bridal saree pleats intact throughout the day'
        ]
    },
    {
        id: 'bridal-matha-patti-pearls',
        name: 'Deluxe Kundan Matha Patti & Maang Tikka',
        category: 'jewellery',
        price: '₹1,850',
        priceNum: 1850,
        originalPrice: '₹2,600',
        badge: 'Bestseller',
        rating: 4.8,
        reviewsCount: 47,
        image: bridalSaree,
        inStock: true,
        shortDesc: 'Intricate multi-strand forehead matha patti with uncut polki Kundan and rice pearl drops.',
        details: [
            'Lightweight ergonomic hair hooks for secure grip all day',
            'Framed for high-definition photography under stage lights'
        ]
    },
    {
        id: 'traditional-bridal-chooda-set',
        name: 'Velvet Bridal Chooda & Gold Kadas (Set of 48)',
        category: 'jewellery',
        price: '₹2,200',
        priceNum: 2200,
        originalPrice: '₹2,900',
        badge: 'Handcrafted',
        rating: 5.0,
        reviewsCount: 22,
        image: bridalNailArtLuxury,
        inStock: true,
        shortDesc: 'Deep maroon and ivory acrylic bridal bangles embellished with micro-zircon stones and gold kadas.',
        details: [
            'Available in standard bangle sizes: 2.4, 2.6, 2.8',
            'High-gloss lacquer finish resistant to water and perfume'
        ]
    },

    // --- 3. SALON-GRADE PROFESSIONAL HAIRCARE ---
    {
        id: 'sulfate-free-keratin-shampoo',
        name: 'Post-Keratin Sulfate-Free Shampoo (300ml)',
        category: 'haircare',
        price: '₹1,200',
        priceNum: 1200,
        originalPrice: '₹1,450',
        badge: 'Salon Exclusive',
        rating: 5.0,
        reviewsCount: 118,
        image: hairTreatment,
        inStock: true,
        shortDesc: 'Pure botanical sulfate-free cleanser designed to protect smoothening, keratin, and colored hair from washing out.',
        details: [
            'Zero sulfates, zero parabens, zero harsh sodium chloride salts',
            'Infused with hydrolyzed silk proteins and Brazilian nut oil',
            'Maintains salon-smooth shine up to 6 months longer'
        ]
    },
    {
        id: 'argan-keratin-hair-mask',
        name: 'Deep Nourishing Argan & Keratin Hair Mask (250g)',
        category: 'haircare',
        price: '₹1,400',
        priceNum: 1400,
        originalPrice: '₹1,750',
        badge: 'Intense Repair',
        rating: 4.9,
        reviewsCount: 94,
        image: keratinHairSmoothening,
        inStock: true,
        shortDesc: 'Salon-potency deep conditioning butter to eliminate dry frizz, split ends, and heat-damaged cuticles.',
        details: [
            '100% Moroccan Argan oil, Shea Butter, and amino keratin complex',
            'Use once a week for 10 minutes for mirror-like silkiness'
        ]
    },
    {
        id: 'moroccan-argan-gloss-serum',
        name: 'Mirror-Gloss Moroccan Argan Hair Serum (100ml)',
        category: 'haircare',
        price: '₹850',
        priceNum: 850,
        originalPrice: '₹1,100',
        badge: 'Top Rated',
        rating: 4.9,
        reviewsCount: 142,
        image: hairSpaWash,
        inStock: true,
        shortDesc: 'Feather-light anti-humidity hair serum that tames flyaways, prevents heat damage up to 230°C, and adds glass shine.',
        details: [
            'Non-sticky, quick-absorbing dry oil texture',
            'UV defense shield against tropical coastal sun & humidity'
        ]
    },
    {
        id: 'kerala-ayurvedic-hair-growth-oil',
        name: 'Kerala Amla & Bhringraj Herbal Hair Growth Oil (200ml)',
        category: 'haircare',
        price: '₹550',
        priceNum: 550,
        originalPrice: '₹690',
        badge: '100% Herbal & Pure',
        rating: 5.0,
        reviewsCount: 204,
        image: hairSpaWash,
        inStock: true,
        shortDesc: 'Authentic slow-cooked Ayurvedic scalp oil made with cold-pressed coconut oil, fresh amla, bhringraj, and brahmi.',
        details: [
            'Cooked according to traditional Sahasrayogam Ayurvedic texts',
            'Strengthens hair roots, stops premature graying, and promotes dense regrowth'
        ]
    },

    // --- 4. SKINCARE & BRIDAL GLOW KITS ---
    {
        id: '30-day-pre-bridal-glow-kit',
        name: '30-Day Pre-Bridal Radiance Home Care Kit (4-Piece)',
        category: 'skincare',
        price: '₹3,800',
        priceNum: 3800,
        originalPrice: '₹4,900',
        badge: 'Bride Favourite',
        rating: 5.0,
        reviewsCount: 56,
        image: luxuryGoldFacial,
        inStock: true,
        shortDesc: 'Complete 30-day facial ritual: Vitamin C Foaming Cleanser, Kumkumadi Serum, Gold Glow Cream, and D-Tan Exfoliator.',
        details: [
            'Curated specifically by Shobitha salon aesthetic experts for brides-to-be',
            'Eliminates pigmentation, sun tanning, and dry patches before the big day'
        ]
    },
    {
        id: 'o3-professional-dtan-pack',
        name: 'O3+ Professional Brightening & D-Tan Face Pack (300g)',
        category: 'skincare',
        price: '₹1,150',
        priceNum: 1150,
        originalPrice: '₹1,450',
        badge: 'Instant Results',
        rating: 4.8,
        reviewsCount: 88,
        image: skinFacial,
        inStock: true,
        shortDesc: 'Dermatologically formulated salon treatment mask that clears stubborn sun tan and dullness in just 10 minutes.',
        details: [
            'Enriched with Mint, Eucalyptus, and botanical brightening peptides',
            'Safe for all skin types, including sensitive and acne-prone skin'
        ]
    },
    {
        id: 'pure-kumkumadi-night-oil',
        name: 'Kashmiri Saffron Kumkumadi Miraculous Night Oil (30ml)',
        category: 'skincare',
        price: '₹1,250',
        priceNum: 1250,
        originalPrice: '₹1,600',
        badge: 'Pure Saffron',
        rating: 4.9,
        reviewsCount: 73,
        image: luxuryGoldFacial,
        inStock: true,
        shortDesc: 'Cold-pressed Ayurvedic face elixir infused with 26 rare herbs and pure Grade-A Kashmiri saffron for a glass-skin glow.',
        details: [
            'Reduces dark circles, blemishes, and fine lines overnight',
            '100% natural, chemical-free, paraben-free'
        ]
    },

    // --- 5. PUJA SAMAGRI & SHAGUN GIFTS ---
    {
        id: 'velvet-trousseau-shagun-trays',
        name: 'Velvet & Acrylic Trousseau Presentation Trays (Set of 7)',
        category: 'puja_gifts',
        price: '₹4,500',
        priceNum: 4500,
        originalPrice: '₹5,800',
        badge: 'Wedding Essential',
        rating: 5.0,
        reviewsCount: 37,
        image: bridalGiftBoxes,
        inStock: true,
        shortDesc: 'Luxurious gold-lined velvet packaging trays for presenting sarees, cosmetics, dry fruits, and bridal jewelry.',
        details: [
            'Includes 2 large saree hampers, 2 cosmetic trays, 2 dry fruit bowls, and 1 ring platter',
            'Custom color options: Royal Burgundy, Champagne Gold, Emerald Green'
        ]
    },
    {
        id: 'complete-vivah-puja-samagri-box',
        name: 'Complete Vivah Puja Samagri Box (31 Vedic Items)',
        category: 'puja_gifts',
        price: '₹2,800',
        priceNum: 2800,
        originalPrice: '₹3,500',
        badge: 'Pandit Approved',
        rating: 4.9,
        reviewsCount: 46,
        image: bridalGiftBoxes,
        inStock: true,
        shortDesc: 'All-in-one pre-packed Vedic wedding puja kit: Pure cow ghee, camphor, akshat, mauli, supari, samidha, havan samagri, and roli.',
        details: [
            'Every item hygienically packed and clearly labelled in separate pouches',
            'Saves family members hours running between market vendors 2 days before the wedding'
        ]
    },
    {
        id: 'luxury-shagun-cash-envelopes',
        name: 'Handmade Silk Brocade Shagun Cash Envelopes (Pack of 12)',
        category: 'puja_gifts',
        price: '₹850',
        priceNum: 850,
        originalPrice: '₹1,100',
        badge: 'Handmade',
        rating: 4.8,
        reviewsCount: 65,
        image: bridalGiftBoxes,
        inStock: true,
        shortDesc: 'Embroidered brocade silk cash envelopes with gold tassels for shagun, milni, and blessings gifts.',
        details: [
            'Assorted royal festival colors with gold metallic snap closures',
            'Sturdy reusable keepsake packaging'
        ]
    }
];
