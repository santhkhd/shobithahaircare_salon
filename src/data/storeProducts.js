// Complete E-Commerce Store Catalog for Shobitha Haircare & Bridal Makeup Studio
// Supports both Direct Salon Products (WhatsApp Cart) and Affiliate Items (Amazon, Flipkart, Myntra)

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
    { id: 'all', label: 'All Collection', icon: '✨' },
    { id: 'sarees', label: 'Bridal Sarees & Silks', icon: '🥻' },
    { id: 'clothing', label: 'Lehengas & Ethnic Wear', icon: '👗' },
    { id: 'jewellery', label: 'Jewellery & Solah Shringar', icon: '👑' },
    { id: 'haircare', label: 'Salon Haircare & Oils', icon: '💆‍♀️' },
    { id: 'styling_tools', label: 'Hair Dryers & Styling Tools', icon: '⚡' },
    { id: 'skincare', label: 'Skincare & Glow Kits', icon: '✨' },
    { id: 'puja_gifts', label: 'Puja Samagri & Shagun Trays', icon: '🎁' }
];

export const platformFilters = [
    { id: 'all', label: 'All Items' },
    { id: 'salon', label: 'Salon Exclusives', badge: '🛍️' },
    { id: 'amazon', label: 'Amazon Picks', badge: '📦' },
    { id: 'flipkart', label: 'Flipkart Finds', badge: '⚡' },
    { id: 'myntra', label: 'Myntra Fashion', badge: '👗' }
];

export const initialStoreProducts = [
    // ============================================================
    // 1. BRIDAL SAREES & SILKS (Direct Salon & Affiliate)
    // ============================================================
    {
        id: 'kanjivaram-silk-saree',
        name: 'Pure Kanjivaram Muhurtham Silk Saree',
        brand: 'Shobitha Signature Silks',
        category: 'sarees',
        platform: 'salon',
        price: '₹18,500',
        priceNum: 18500,
        originalPrice: '₹24,000',
        originalPriceNum: 24000,
        discountPercent: 23,
        badge: '100% Pure Silk',
        rating: 4.9,
        reviewsCount: 38,
        image: bridalSaree,
        inStock: true,
        deliveryTag: 'Studio Pickup & Trial',
        shortDesc: 'Certified pure mulberry silk handwoven with authentic gold zari temple border and heavy contrast pallu.',
        details: [
            '100% Pure Mulberry Silk with Silk Mark Certification',
            'Heavy Pure Gold Zari Temple Border & Contrast Pallu',
            'Includes unstitched matching pure silk blouse piece',
            'Free saree draping consultation included'
        ]
    },
    {
        id: 'kerala-kasavu-tissue-saree',
        name: 'Kerala Kasavu Tissue Silk Wedding Saree',
        brand: 'Balaramapuram Master Weave',
        category: 'sarees',
        platform: 'salon',
        price: '₹9,800',
        priceNum: 9800,
        originalPrice: '₹12,500',
        originalPriceNum: 12500,
        discountPercent: 22,
        badge: 'Muhurtham Classic',
        rating: 5.0,
        reviewsCount: 42,
        image: heroKeralaBride,
        inStock: true,
        deliveryTag: 'Free Express Delivery',
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
        brand: 'Varanasi Mastercraft',
        category: 'sarees',
        platform: 'flipkart',
        affiliateUrl: 'https://www.flipkart.com/search?q=banarasi+georgette+saree',
        price: '₹4,599',
        priceNum: 4599,
        originalPrice: '₹9,999',
        originalPriceNum: 9999,
        discountPercent: 54,
        badge: 'Flipkart Choice',
        rating: 4.8,
        reviewsCount: 298,
        image: bridalHeroPurpleSaree,
        inStock: true,
        deliveryTag: 'Flipkart Assured • 2-Day Delivery',
        shortDesc: 'Rich jewel-toned Banarasi georgette saree featuring fine Kadhwa floral jaal work and scalloped borders.',
        details: [
            'Supple flowy pure georgette silk with dense gold zari work',
            'Perfect night-wear drape for Sangeet & Reception stages',
            'Handcrafted tassels pre-attached on the pallu'
        ]
    },
    {
        id: 'ready-to-wear-party-saree',
        name: 'Ready-to-Wear 1-Minute Pre-Pleated Saree',
        brand: 'Suta / Myntra Fashion',
        category: 'sarees',
        platform: 'myntra',
        affiliateUrl: 'https://www.myntra.com/ready-to-wear-saree',
        price: '₹2,499',
        priceNum: 2499,
        originalPrice: '₹4,999',
        originalPriceNum: 4999,
        discountPercent: 50,
        badge: 'Myntra Bestseller',
        rating: 4.7,
        reviewsCount: 512,
        image: bridalMuhurtham,
        inStock: true,
        deliveryTag: 'Free Shipping • Easy Returns',
        shortDesc: 'Stitched pre-pleated shimmer lycra saree that slips on in 60 seconds with zero pins required.',
        details: [
            'Pre-stitched pleats with adjustable waist hook fit (size 26 to 40)',
            'Stitched designer sequin padded blouse included',
            'Ultra comfortable for wedding guests and sangeet dance parties'
        ]
    },

    // ============================================================
    // 2. LEHENGAS & ETHNIC CLOTHING (Myntra & Amazon Affiliates)
    // ============================================================
    {
        id: 'semi-stitched-bridal-velvet-lehenga',
        name: 'Royal Embroidered Bridal Velvet Lehenga Choli',
        brand: 'Kalki Fashion / Myntra Luxe',
        category: 'clothing',
        platform: 'myntra',
        affiliateUrl: 'https://www.myntra.com/bridal-lehenga',
        price: '₹12,499',
        priceNum: 12499,
        originalPrice: '₹24,999',
        originalPriceNum: 24999,
        discountPercent: 50,
        badge: 'Trending on Myntra',
        rating: 4.9,
        reviewsCount: 184,
        image: bridalSaree,
        inStock: true,
        deliveryTag: 'Myntra Verified • Free Exchange',
        shortDesc: 'Heavy micro-velvet lehenga with intricate dori, sequin, and multi-thread zardozi embroidery with dual dupatta.',
        details: [
            'Semi-stitched flare up to 4.2 meters for royal bridal swirl',
            'Includes unstitched blouse piece and two soft net dupattas',
            'Can-can layer pre-attached for grand flare'
        ]
    },
    {
        id: 'georgette-anarkali-gown-suit',
        name: 'Designer Floor-Length Georgette Anarkali Suit',
        brand: 'BIBA / Amazon Fashion',
        category: 'clothing',
        platform: 'amazon',
        affiliateUrl: 'https://www.amazon.in/s?k=anarkali+suit+wedding',
        price: '₹3,299',
        priceNum: 3299,
        originalPrice: '₹6,999',
        originalPriceNum: 6999,
        discountPercent: 53,
        badge: 'Amazon Choice',
        rating: 4.7,
        reviewsCount: 840,
        image: bridalHeroPurpleSaree,
        inStock: true,
        deliveryTag: 'Amazon Prime • Next Day Delivery',
        shortDesc: 'Graceful flowy georgette floor-length gown with hand-embroidered neckline, perfect for Haldi, Sangeet, or engagement.',
        details: [
            'Breathable pure georgette with santoon inner lining',
            'Includes matching churidar and embroidered border dupatta'
        ]
    },
    {
        id: 'saree-shapewear-petticoat',
        name: 'Seamless Mermaid Fit Saree Silhouette Shapewear',
        brand: 'Dermawear / Amazon Fashion',
        category: 'clothing',
        platform: 'amazon',
        affiliateUrl: 'https://www.amazon.in/s?k=saree+shapewear',
        price: '₹799',
        priceNum: 799,
        originalPrice: '₹1,599',
        originalPriceNum: 1599,
        discountPercent: 50,
        badge: 'Top Rated Essential',
        rating: 4.8,
        reviewsCount: 2430,
        image: heroKeralaBride,
        inStock: true,
        deliveryTag: 'Amazon Prime • Free Delivery',
        shortDesc: 'Stretchable compression fabric that hugs waist and thighs to give clean mermaid pleats with comfortable side slit.',
        details: [
            'Targeted tummy and thigh compression for flawless saree posture',
            'Strong waistband that holds heavy bridal silks without slipping'
        ]
    },

    // ============================================================
    // 3. BRIDAL JEWELLERY & SOLAH SHRINGAR
    // ============================================================
    {
        id: 'temple-jewellery-choker-set',
        name: 'Temple Gold-Plated Choker & Haram Bridal Set',
        brand: 'Shobitha Bridal Heritage',
        category: 'jewellery',
        platform: 'salon',
        price: '₹8,900',
        priceNum: 8900,
        originalPrice: '₹12,000',
        originalPriceNum: 12000,
        discountPercent: 26,
        badge: 'Rental Available (₹2,500/day)',
        rating: 4.9,
        reviewsCount: 64,
        image: bridalNailArtLuxury,
        inStock: true,
        deliveryTag: 'Studio Trial & Courier',
        shortDesc: 'Antique matte gold finish South Indian temple jewellery set with choker, long haram, jhumkas, and maang tikka.',
        details: [
            'High-grade brass copper with 24K micron antique gold plating',
            'Kemp red stones, emerald green accents, and pearl cluster drops',
            'Hypoallergenic skin-friendly coating; available for purchase or rental'
        ]
    },
    {
        id: 'kundan-bridal-necklace-set',
        name: '22K Gold Plated Kundan & Emerald Bridal Set',
        brand: 'Zaveri Pearls / Flipkart',
        category: 'jewellery',
        platform: 'flipkart',
        affiliateUrl: 'https://www.flipkart.com/search?q=kundan+bridal+jewellery+set',
        price: '₹1,899',
        priceNum: 1899,
        originalPrice: '₹5,999',
        originalPriceNum: 5999,
        discountPercent: 68,
        badge: 'Top Flipkart Seller',
        rating: 4.6,
        reviewsCount: 1920,
        image: bridalMehndiArt,
        inStock: true,
        deliveryTag: 'Flipkart Assured • Express',
        shortDesc: 'Exquisite meenakari Kundan necklace with matching chandelier earrings, maang tikka, and royal green bead drops.',
        details: [
            'High quality hand-set Kundan stones with meenakari reverse',
            'Adjustable dori for custom neckline fit'
        ]
    },
    {
        id: 'antique-kamarbandh-oddiyanam',
        name: 'Antique Gold Kamarbandh / Oddiyanam (Waist Belt)',
        brand: 'Shobitha Bridal Crafts',
        category: 'jewellery',
        platform: 'salon',
        price: '₹3,400',
        priceNum: 3400,
        originalPrice: '₹4,500',
        originalPriceNum: 4500,
        discountPercent: 24,
        badge: 'Bridal Must-Have',
        rating: 4.9,
        reviewsCount: 31,
        image: bridalMehndiArt,
        inStock: true,
        deliveryTag: 'Studio Pickup & Courier',
        shortDesc: 'Sculpted Lakshmi motif waist belt to cinch and hold saree pleats flawlessly during wedding rituals.',
        details: [
            'Adjustable chain extension to fit waist sizes 26 to 42 inches',
            'Fine carving with genuine South Indian temple craftsmanship'
        ]
    },
    {
        id: 'bridal-matha-patti-pearls',
        name: 'Deluxe Kundan Matha Patti & Maang Tikka',
        brand: 'Amazon Fashion Handcrafted',
        category: 'jewellery',
        platform: 'amazon',
        affiliateUrl: 'https://www.amazon.in/s?k=bridal+matha+patti+kundan',
        price: '₹1,249',
        priceNum: 1249,
        originalPrice: '₹2,999',
        originalPriceNum: 2999,
        discountPercent: 58,
        badge: 'Amazon Prime Pick',
        rating: 4.8,
        reviewsCount: 470,
        image: bridalSaree,
        inStock: true,
        deliveryTag: 'Amazon Prime • Free Delivery',
        shortDesc: 'Intricate multi-strand forehead matha patti with uncut polki Kundan and rice pearl drops.',
        details: [
            'Lightweight ergonomic hair hooks for secure grip all day',
            'Framed for high-definition photography under stage lights'
        ]
    },

    // ============================================================
    // 4. SALON-GRADE HAIRCARE & GROWTH OILS
    // ============================================================
    {
        id: 'sulfate-free-keratin-shampoo',
        name: 'Post-Keratin Sulfate-Free Shampoo (300ml)',
        brand: 'Shobitha Professional Salon Care',
        category: 'haircare',
        platform: 'salon',
        price: '₹1,200',
        priceNum: 1200,
        originalPrice: '₹1,450',
        originalPriceNum: 1450,
        discountPercent: 17,
        badge: 'Salon Exclusive',
        rating: 5.0,
        reviewsCount: 118,
        image: hairTreatment,
        inStock: true,
        deliveryTag: 'In-Salon & Delivery',
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
        brand: 'Shobitha Professional Salon Care',
        category: 'haircare',
        platform: 'salon',
        price: '₹1,400',
        priceNum: 1400,
        originalPrice: '₹1,750',
        originalPriceNum: 1750,
        discountPercent: 20,
        badge: 'Intense Repair',
        rating: 4.9,
        reviewsCount: 94,
        image: keratinHairSmoothening,
        inStock: true,
        deliveryTag: 'In-Salon & Delivery',
        shortDesc: 'Salon-potency deep conditioning butter to eliminate dry frizz, split ends, and heat-damaged cuticles.',
        details: [
            '100% Moroccan Argan oil, Shea Butter, and amino keratin complex',
            'Use once a week for 10 minutes for mirror-like silkiness'
        ]
    },
    {
        id: 'kerala-ayurvedic-hair-growth-oil',
        name: 'Kerala Amla & Bhringraj Herbal Hair Growth Oil (200ml)',
        brand: 'Kerala Ayurvedic Heritage',
        category: 'haircare',
        platform: 'salon',
        price: '₹550',
        priceNum: 550,
        originalPrice: '₹690',
        originalPriceNum: 690,
        discountPercent: 20,
        badge: '100% Herbal & Pure',
        rating: 5.0,
        reviewsCount: 204,
        image: hairSpaWash,
        inStock: true,
        deliveryTag: 'Available in Studio',
        shortDesc: 'Authentic slow-cooked Ayurvedic scalp oil made with cold-pressed coconut oil, fresh amla, bhringraj, and brahmi.',
        details: [
            'Cooked according to traditional Sahasrayogam Ayurvedic texts',
            'Arrests postpartum and stress hair fall within 4 weeks'
        ]
    },

    // ============================================================
    // 5. STYLING TOOLS & GADGETS (Amazon & Flipkart Affiliates)
    // ============================================================
    {
        id: 'philips-thermo-protect-hair-dryer',
        name: 'Philips 2100W Salon Ionic Hair Dryer (HP8232)',
        brand: 'Philips / Amazon',
        category: 'styling_tools',
        platform: 'amazon',
        affiliateUrl: 'https://www.amazon.in/s?k=philips+hair+dryer+2100w',
        price: '₹1,999',
        priceNum: 1999,
        originalPrice: '₹2,695',
        originalPriceNum: 2695,
        discountPercent: 26,
        badge: 'Amazon Choice',
        rating: 4.8,
        reviewsCount: 3820,
        image: hairTreatment,
        inStock: true,
        deliveryTag: 'Amazon Prime • 1-Day Delivery',
        shortDesc: 'Ionic conditioning dryer that dries hair fast without thermal damage, providing salon blowout bounce.',
        details: [
            '2100W professional drying power with 6 speed and heat settings',
            'Ionic care eliminates static frizz for radiant shine'
        ]
    },
    {
        id: 'havells-titanium-hair-straightener',
        name: 'Havells Wide-Plate Titanium Hair Straightener',
        brand: 'Havells / Flipkart',
        category: 'styling_tools',
        platform: 'flipkart',
        affiliateUrl: 'https://www.flipkart.com/search?q=havells+hair+straightener',
        price: '₹1,699',
        priceNum: 1699,
        originalPrice: '₹2,895',
        originalPriceNum: 2895,
        discountPercent: 41,
        badge: 'Flipkart Assured',
        rating: 4.6,
        reviewsCount: 1420,
        image: keratinHairSmoothening,
        inStock: true,
        deliveryTag: 'Flipkart Assured • Express',
        shortDesc: 'Ultra-smooth floating ceramic titanium plates designed to glide through coarse or wavy hair in one single pass.',
        details: [
            'Digital temperature control up to 230°C',
            'Auto shut-off and heat resistant storage pouch included'
        ]
    },

    // ============================================================
    // 6. SKINCARE & GLOW KITS
    // ============================================================
    {
        id: 'o3-bridal-facial-kit',
        name: 'O3+ Bridal Facial Kit with Oxygen Firming Serum',
        brand: 'O3+ Professional / Amazon',
        category: 'skincare',
        platform: 'amazon',
        affiliateUrl: 'https://www.amazon.in/s?k=o3%2B+bridal+facial+kit',
        price: '₹3,450',
        priceNum: 3450,
        originalPrice: '₹4,150',
        originalPriceNum: 4150,
        discountPercent: 17,
        badge: 'Salon Brand Favorite',
        rating: 4.9,
        reviewsCount: 780,
        image: luxuryGoldFacial,
        inStock: true,
        deliveryTag: 'Amazon Prime • Free Delivery',
        shortDesc: 'The identical 10-step bridal glass skin protocol used by top artists for instant radiance and deep de-tan.',
        details: [
            'Complete 10-step single-use hygienic bridal treatment kit',
            'Suitable for all skin types, tested by our salon aesthetician'
        ]
    },
    {
        id: 'kumkumadi-tailam-gold-oil',
        name: 'Ayurvedic 24K Kumkumadi Thailam Glowing Oil (30ml)',
        brand: 'Shobitha Herbal Naturals',
        category: 'skincare',
        platform: 'salon',
        price: '₹950',
        priceNum: 950,
        originalPrice: '₹1,250',
        originalPriceNum: 1250,
        discountPercent: 24,
        badge: 'Bestseller',
        rating: 5.0,
        reviewsCount: 189,
        image: skinFacial,
        inStock: true,
        deliveryTag: 'Available in Studio',
        shortDesc: 'Pure Kashmiri saffron, red sandalwood, and 26 Himalayan herbs infused for overnight skin illumination.',
        details: [
            'Lightweight, fast absorbing golden elixir',
            'Visibly reduces pigmentation, dark spots, and dullness'
        ]
    },

    // ============================================================
    // 7. PUJA SAMAGRI & SHAGUN HAMPERS
    // ============================================================
    {
        id: 'complete-vivah-puja-samagri-box',
        name: 'Complete Vivah Puja Samagri Kit (64 Vedic Items)',
        brand: 'Shobitha Temple Crafts',
        category: 'puja_gifts',
        platform: 'salon',
        price: '₹3,200',
        priceNum: 3200,
        originalPrice: '₹3,900',
        originalPriceNum: 3900,
        discountPercent: 18,
        badge: 'Pandit Verified',
        rating: 5.0,
        reviewsCount: 56,
        image: bridalGiftBoxes,
        inStock: true,
        deliveryTag: 'Studio Delivery & Packing',
        shortDesc: 'Pandit-approved complete Hindu wedding puja box with Gangajal, pure cow ghee, havan samidha, and all sacred items.',
        details: [
            'Neatly partitioned hygienic containers for the Mandap & Havan',
            'Includes pure copper kalash, coconut, and cotton wicks'
        ]
    },
    {
        id: 'velvet-shagun-trousseau-trays',
        name: 'Royal Velvet Shagun & Saree Trays (Set of 5)',
        brand: 'Shobitha Wedding Décor',
        category: 'puja_gifts',
        platform: 'salon',
        price: '₹2,600',
        priceNum: 2600,
        originalPrice: '₹3,500',
        originalPriceNum: 3500,
        discountPercent: 26,
        badge: 'Handcrafted',
        rating: 4.8,
        reviewsCount: 39,
        image: bridalGiftBoxes,
        inStock: true,
        deliveryTag: 'Studio Pickup & Courier',
        shortDesc: 'Rich maroon velvet trays with golden brocade borders for presenting sarees, cosmetics, and jewelry during Sagai.',
        details: [
            'Sturdy wooden base lined with plush padded velvet',
            'Set includes 2 large saree trays and 3 accessory/mithai boxes'
        ]
    }
];
