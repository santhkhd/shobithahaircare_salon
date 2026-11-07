import bridalMuhurtham from '../assets/images/bridal-muhurtham.jpg';
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

export const categories = [
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

export const services = [
    {
        "id": "basic-haircut",
        "slug": "basic-haircut",
        "name": "Basic Haircut",
        "category": "Haircuts & Styling",
        "folder": "01-haircuts-and-styling",
        "imageFile": "basic-haircut.webp",
        "image": "/images/services/01-haircuts-and-styling/basic-haircut.webp",
        "fallbackVar": "hairCut",
        "imageAlt": "Basic Haircut - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional basic haircut delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated basic haircut service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹350",
        "offerPrice": "50%",
        "duration": "30-45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of basic haircut",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Basic Haircut appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Basic Haircut typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Basic Haircut?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "u-cut",
                "name": "U-Cut",
                "price": "₹300"
            },
            {
                "id": "v-cut",
                "name": "V-Cut",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": true
    },
    {
        "id": "u-cut",
        "slug": "u-cut",
        "name": "U-Cut",
        "category": "Haircuts & Styling",
        "folder": "01-haircuts-and-styling",
        "imageFile": "u-cut.webp",
        "image": "/images/services/01-haircuts-and-styling/u-cut.webp",
        "fallbackVar": "hairCut",
        "imageAlt": "U-Cut - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional u-cut delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated u-cut service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹300",
        "offerPrice": "10%",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of u-cut",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my U-Cut appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of U-Cut typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for U-Cut?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-haircut",
                "name": "Basic Haircut",
                "price": "₹350"
            },
            {
                "id": "v-cut",
                "name": "V-Cut",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": true
    },
    {
        "id": "v-cut",
        "slug": "v-cut",
        "name": "V-Cut",
        "category": "Haircuts & Styling",
        "folder": "01-haircuts-and-styling",
        "imageFile": "v-cut.webp",
        "image": "/images/services/01-haircuts-and-styling/v-cut.webp",
        "fallbackVar": "hairCut",
        "imageAlt": "V-Cut - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional v-cut delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated v-cut service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹350",
        "offerPrice": "50%",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of v-cut",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my V-Cut appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of V-Cut typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for V-Cut?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-haircut",
                "name": "Basic Haircut",
                "price": "₹350"
            },
            {
                "id": "u-cut",
                "name": "U-Cut",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "layer-cut",
        "slug": "layer-cut",
        "name": "Layer Cut",
        "category": "Haircuts & Styling",
        "folder": "01-haircuts-and-styling",
        "imageFile": "layer-cut.webp",
        "image": "/images/services/01-haircuts-and-styling/layer-cut.webp",
        "fallbackVar": "hairCut",
        "imageAlt": "Layer Cut - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional layer cut delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated layer cut service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹700",
        "offerPrice": "10%",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of layer cut",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Layer Cut appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Layer Cut typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Layer Cut?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-haircut",
                "name": "Basic Haircut",
                "price": "₹350"
            },
            {
                "id": "u-cut",
                "name": "U-Cut",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "step-cut",
        "slug": "step-cut",
        "name": "Step Cut",
        "category": "Haircuts & Styling",
        "folder": "01-haircuts-and-styling",
        "imageFile": "step-cut.webp",
        "image": "/images/services/01-haircuts-and-styling/step-cut.webp",
        "fallbackVar": "hairCut",
        "imageAlt": "Step Cut - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional step cut delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated step cut service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹700",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of step cut",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Step Cut appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Step Cut typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Step Cut?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-haircut",
                "name": "Basic Haircut",
                "price": "₹350"
            },
            {
                "id": "u-cut",
                "name": "U-Cut",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "feather-cut",
        "slug": "feather-cut",
        "name": "Feather Cut",
        "category": "Haircuts & Styling",
        "folder": "01-haircuts-and-styling",
        "imageFile": "feather-cut.webp",
        "image": "/images/services/01-haircuts-and-styling/feather-cut.webp",
        "fallbackVar": "hairCut",
        "imageAlt": "Feather Cut - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional feather cut delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated feather cut service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹700",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of feather cut",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Feather Cut appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Feather Cut typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Feather Cut?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-haircut",
                "name": "Basic Haircut",
                "price": "₹350"
            },
            {
                "id": "u-cut",
                "name": "U-Cut",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "butterfly-cut",
        "slug": "butterfly-cut",
        "name": "Butterfly Cut",
        "category": "Haircuts & Styling",
        "folder": "01-haircuts-and-styling",
        "imageFile": "butterfly-cut.webp",
        "image": "/images/services/01-haircuts-and-styling/butterfly-cut.webp",
        "fallbackVar": "hairCut",
        "imageAlt": "Butterfly Cut - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional butterfly cut delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated butterfly cut service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹850",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of butterfly cut",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Butterfly Cut appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Butterfly Cut typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Butterfly Cut?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-haircut",
                "name": "Basic Haircut",
                "price": "₹350"
            },
            {
                "id": "u-cut",
                "name": "U-Cut",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "wolf-cut",
        "slug": "wolf-cut",
        "name": "Wolf Cut",
        "category": "Haircuts & Styling",
        "folder": "01-haircuts-and-styling",
        "imageFile": "wolf-cut.webp",
        "image": "/images/services/01-haircuts-and-styling/wolf-cut.webp",
        "fallbackVar": "hairCut",
        "imageAlt": "Wolf Cut - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional wolf cut delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated wolf cut service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹850",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of wolf cut",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Wolf Cut appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Wolf Cut typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Wolf Cut?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-haircut",
                "name": "Basic Haircut",
                "price": "₹350"
            },
            {
                "id": "u-cut",
                "name": "U-Cut",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "bob-cut",
        "slug": "bob-cut",
        "name": "Bob Cut",
        "category": "Haircuts & Styling",
        "folder": "01-haircuts-and-styling",
        "imageFile": "bob-cut.webp",
        "image": "/images/services/01-haircuts-and-styling/bob-cut.webp",
        "fallbackVar": "hairCut",
        "imageAlt": "Bob Cut - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional bob cut delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated bob cut service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹600",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of bob cut",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Bob Cut appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Bob Cut typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Bob Cut?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-haircut",
                "name": "Basic Haircut",
                "price": "₹350"
            },
            {
                "id": "u-cut",
                "name": "U-Cut",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "pixie-cut",
        "slug": "pixie-cut",
        "name": "Pixie Cut",
        "category": "Haircuts & Styling",
        "folder": "01-haircuts-and-styling",
        "imageFile": "pixie-cut.webp",
        "image": "/images/services/01-haircuts-and-styling/pixie-cut.webp",
        "fallbackVar": "hairCut",
        "imageAlt": "Pixie Cut - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional pixie cut delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated pixie cut service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹600",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of pixie cut",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Pixie Cut appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Pixie Cut typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Pixie Cut?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-haircut",
                "name": "Basic Haircut",
                "price": "₹350"
            },
            {
                "id": "u-cut",
                "name": "U-Cut",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "bangs-fringe-cut",
        "slug": "bangs-fringe-cut",
        "name": "Bangs / Fringe Cut",
        "category": "Haircuts & Styling",
        "folder": "01-haircuts-and-styling",
        "imageFile": "bangs-fringe-cut.webp",
        "image": "/images/services/01-haircuts-and-styling/bangs-fringe-cut.webp",
        "fallbackVar": "hairCut",
        "imageAlt": "Bangs / Fringe Cut - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional bangs / fringe cut delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated bangs / fringe cut service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of bangs / fringe cut",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Bangs / Fringe Cut appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Bangs / Fringe Cut typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Bangs / Fringe Cut?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-haircut",
                "name": "Basic Haircut",
                "price": "₹350"
            },
            {
                "id": "u-cut",
                "name": "U-Cut",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "hair-trimming",
        "slug": "hair-trimming",
        "name": "Hair Trimming",
        "category": "Haircuts & Styling",
        "folder": "01-haircuts-and-styling",
        "imageFile": "hair-trimming.webp",
        "image": "/images/services/01-haircuts-and-styling/hair-trimming.webp",
        "fallbackVar": "hairCut",
        "imageAlt": "Hair Trimming - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional hair trimming delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated hair trimming service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹300",
        "duration": "15-20 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of hair trimming",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Hair Trimming appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Hair Trimming typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Hair Trimming?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-haircut",
                "name": "Basic Haircut",
                "price": "₹350"
            },
            {
                "id": "u-cut",
                "name": "U-Cut",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "split-end-trimming",
        "slug": "split-end-trimming",
        "name": "Split-End Trimming",
        "category": "Haircuts & Styling",
        "folder": "01-haircuts-and-styling",
        "imageFile": "split-end-trimming.webp",
        "image": "/images/services/01-haircuts-and-styling/split-end-trimming.webp",
        "fallbackVar": "hairCut",
        "imageAlt": "Split-End Trimming - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional split-end trimming delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated split-end trimming service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹300",
        "duration": "15-20 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of split-end trimming",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Split-End Trimming appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Split-End Trimming typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Split-End Trimming?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-haircut",
                "name": "Basic Haircut",
                "price": "₹350"
            },
            {
                "id": "u-cut",
                "name": "U-Cut",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "hair-wash",
        "slug": "hair-wash",
        "name": "Hair Wash",
        "category": "Haircuts & Styling",
        "folder": "01-haircuts-and-styling",
        "imageFile": "hair-wash.webp",
        "image": "/images/services/01-haircuts-and-styling/hair-wash.webp",
        "fallbackVar": "hairCut",
        "imageAlt": "Hair Wash - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional hair wash delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated hair wash service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹600",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of hair wash",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Hair Wash appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Hair Wash typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Hair Wash?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-haircut",
                "name": "Basic Haircut",
                "price": "₹350"
            },
            {
                "id": "u-cut",
                "name": "U-Cut",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "blow-dry",
        "slug": "blow-dry",
        "name": "Blow Dry",
        "category": "Haircuts & Styling",
        "folder": "01-haircuts-and-styling",
        "imageFile": "blow-dry.webp",
        "image": "/images/services/01-haircuts-and-styling/blow-dry.webp",
        "fallbackVar": "hairCut",
        "imageAlt": "Blow Dry - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional blow dry delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated blow dry service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹600",
        "duration": "30-45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of blow dry",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Blow Dry appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Blow Dry typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Blow Dry?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-haircut",
                "name": "Basic Haircut",
                "price": "₹350"
            },
            {
                "id": "u-cut",
                "name": "U-Cut",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "hair-ironing-straightening-temporary",
        "slug": "hair-ironing-straightening-temporary",
        "name": "Hair Ironing / Straightening (Temporary)",
        "category": "Haircuts & Styling",
        "folder": "01-haircuts-and-styling",
        "imageFile": "hair-ironing-straightening-temporary.webp",
        "image": "/images/services/01-haircuts-and-styling/hair-ironing-straightening-temporary.webp",
        "fallbackVar": "hairCut",
        "imageAlt": "Hair Ironing / Straightening (Temporary) - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional hair ironing / straightening (temporary) delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated hair ironing / straightening (temporary) service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹4,500",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of hair ironing / straightening (temporary)",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Hair Ironing / Straightening (Temporary) appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Hair Ironing / Straightening (Temporary) typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Hair Ironing / Straightening (Temporary)?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-haircut",
                "name": "Basic Haircut",
                "price": "₹350"
            },
            {
                "id": "u-cut",
                "name": "U-Cut",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "hair-curling",
        "slug": "hair-curling",
        "name": "Hair Curling",
        "category": "Haircuts & Styling",
        "folder": "01-haircuts-and-styling",
        "imageFile": "hair-curling.webp",
        "image": "/images/services/01-haircuts-and-styling/hair-curling.webp",
        "fallbackVar": "hairCut",
        "imageAlt": "Hair Curling - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional hair curling delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated hair curling service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹600",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of hair curling",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Hair Curling appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Hair Curling typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Hair Curling?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-haircut",
                "name": "Basic Haircut",
                "price": "₹350"
            },
            {
                "id": "u-cut",
                "name": "U-Cut",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "beach-waves",
        "slug": "beach-waves",
        "name": "Beach Waves",
        "category": "Haircuts & Styling",
        "folder": "01-haircuts-and-styling",
        "imageFile": "beach-waves.webp",
        "image": "/images/services/01-haircuts-and-styling/beach-waves.webp",
        "fallbackVar": "hairCut",
        "imageAlt": "Beach Waves - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional beach waves delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated beach waves service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of beach waves",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Beach Waves appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Beach Waves typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Beach Waves?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-haircut",
                "name": "Basic Haircut",
                "price": "₹350"
            },
            {
                "id": "u-cut",
                "name": "U-Cut",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "hair-braiding",
        "slug": "hair-braiding",
        "name": "Hair Braiding",
        "category": "Haircuts & Styling",
        "folder": "01-haircuts-and-styling",
        "imageFile": "hair-braiding.webp",
        "image": "/images/services/01-haircuts-and-styling/hair-braiding.webp",
        "fallbackVar": "hairCut",
        "imageAlt": "Hair Braiding - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional hair braiding delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated hair braiding service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of hair braiding",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Hair Braiding appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Hair Braiding typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Hair Braiding?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-haircut",
                "name": "Basic Haircut",
                "price": "₹350"
            },
            {
                "id": "u-cut",
                "name": "U-Cut",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "party-hairstyle",
        "slug": "party-hairstyle",
        "name": "Party Hairstyle",
        "category": "Haircuts & Styling",
        "folder": "01-haircuts-and-styling",
        "imageFile": "party-hairstyle.webp",
        "image": "/images/services/01-haircuts-and-styling/party-hairstyle.webp",
        "fallbackVar": "hairCut",
        "imageAlt": "Party Hairstyle - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional party hairstyle delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated party hairstyle service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,500",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of party hairstyle",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Party Hairstyle appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Party Hairstyle typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Party Hairstyle?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-haircut",
                "name": "Basic Haircut",
                "price": "₹350"
            },
            {
                "id": "u-cut",
                "name": "U-Cut",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "bridal-hairstyle",
        "slug": "bridal-hairstyle",
        "name": "Bridal Hairstyle",
        "category": "Haircuts & Styling",
        "folder": "01-haircuts-and-styling",
        "imageFile": "bridal-hairstyle.webp",
        "image": "/images/services/01-haircuts-and-styling/bridal-hairstyle.webp",
        "fallbackVar": "hairCut",
        "imageAlt": "Bridal Hairstyle - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional bridal hairstyle delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated bridal hairstyle service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,500",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of bridal hairstyle",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Bridal Hairstyle appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Bridal Hairstyle typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Bridal Hairstyle?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-haircut",
                "name": "Basic Haircut",
                "price": "₹350"
            },
            {
                "id": "u-cut",
                "name": "U-Cut",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "updo-hairstyle",
        "slug": "updo-hairstyle",
        "name": "Updo Hairstyle",
        "category": "Haircuts & Styling",
        "folder": "01-haircuts-and-styling",
        "imageFile": "updo-hairstyle.webp",
        "image": "/images/services/01-haircuts-and-styling/updo-hairstyle.webp",
        "fallbackVar": "hairCut",
        "imageAlt": "Updo Hairstyle - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional updo hairstyle delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated updo hairstyle service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,500",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of updo hairstyle",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Updo Hairstyle appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Updo Hairstyle typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Updo Hairstyle?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-haircut",
                "name": "Basic Haircut",
                "price": "₹350"
            },
            {
                "id": "u-cut",
                "name": "U-Cut",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "saree-hairstyle",
        "slug": "saree-hairstyle",
        "name": "Saree Hairstyle",
        "category": "Haircuts & Styling",
        "folder": "01-haircuts-and-styling",
        "imageFile": "saree-hairstyle.webp",
        "image": "/images/services/01-haircuts-and-styling/saree-hairstyle.webp",
        "fallbackVar": "hairCut",
        "imageAlt": "Saree Hairstyle - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional saree hairstyle delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated saree hairstyle service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,500",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of saree hairstyle",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Saree Hairstyle appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Saree Hairstyle typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Saree Hairstyle?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-haircut",
                "name": "Basic Haircut",
                "price": "₹350"
            },
            {
                "id": "u-cut",
                "name": "U-Cut",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "kids-haircut",
        "slug": "kids-haircut",
        "name": "Kids' Haircut",
        "category": "Haircuts & Styling",
        "folder": "01-haircuts-and-styling",
        "imageFile": "kids-haircut.webp",
        "image": "/images/services/01-haircuts-and-styling/kids-haircut.webp",
        "fallbackVar": "hairCut",
        "imageAlt": "Kids' Haircut - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional kids' haircut delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated kids' haircut service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹250",
        "duration": "30-45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of kids' haircut",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Kids' Haircut appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Kids' Haircut typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Kids' Haircut?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-haircut",
                "name": "Basic Haircut",
                "price": "₹350"
            },
            {
                "id": "u-cut",
                "name": "U-Cut",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "senior-ladies-haircut",
        "slug": "senior-ladies-haircut",
        "name": "Senior Ladies' Haircut",
        "category": "Haircuts & Styling",
        "folder": "01-haircuts-and-styling",
        "imageFile": "senior-ladies-haircut.webp",
        "image": "/images/services/01-haircuts-and-styling/senior-ladies-haircut.webp",
        "fallbackVar": "hairCut",
        "imageAlt": "Senior Ladies' Haircut - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional senior ladies' haircut delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated senior ladies' haircut service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹250",
        "duration": "30-45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of senior ladies' haircut",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Senior Ladies' Haircut appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Senior Ladies' Haircut typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Senior Ladies' Haircut?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-haircut",
                "name": "Basic Haircut",
                "price": "₹350"
            },
            {
                "id": "u-cut",
                "name": "U-Cut",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "hair-spa",
        "slug": "basic-hair-spa",
        "name": "Basic Hair Spa",
        "category": "Hair Spa & Hair Treatments",
        "folder": "02-hair-spa-and-treatments",
        "imageFile": "basic-hair-spa.webp",
        "image": "/images/services/02-hair-spa-and-treatments/basic-hair-spa.webp",
        "fallbackVar": "hairTreatment",
        "imageAlt": "Basic Hair Spa - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional basic hair spa delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated basic hair spa service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,200",
        "duration": "45-60 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of basic hair spa",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Basic Hair Spa appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Basic Hair Spa typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Basic Hair Spa?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "premium-hair-spa",
                "name": "Premium Hair Spa",
                "price": "₹1,200"
            },
            {
                "id": "deep-conditioning",
                "name": "Deep Conditioning",
                "price": "₹1,200"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": true
    },
    {
        "id": "premium-hair-spa",
        "slug": "premium-hair-spa",
        "name": "Premium Hair Spa",
        "category": "Hair Spa & Hair Treatments",
        "folder": "02-hair-spa-and-treatments",
        "imageFile": "premium-hair-spa.webp",
        "image": "/images/services/02-hair-spa-and-treatments/premium-hair-spa.webp",
        "fallbackVar": "hairTreatment",
        "imageAlt": "Premium Hair Spa - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional premium hair spa delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated premium hair spa service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,200",
        "duration": "45-60 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of premium hair spa",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Premium Hair Spa appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Premium Hair Spa typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Premium Hair Spa?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "hair-spa",
                "name": "Basic Hair Spa",
                "price": "₹1,200"
            },
            {
                "id": "deep-conditioning",
                "name": "Deep Conditioning",
                "price": "₹1,200"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": true
    },
    {
        "id": "deep-conditioning",
        "slug": "deep-conditioning",
        "name": "Deep Conditioning",
        "category": "Hair Spa & Hair Treatments",
        "folder": "02-hair-spa-and-treatments",
        "imageFile": "deep-conditioning.webp",
        "image": "/images/services/02-hair-spa-and-treatments/deep-conditioning.webp",
        "fallbackVar": "hairTreatment",
        "imageAlt": "Deep Conditioning - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional deep conditioning delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated deep conditioning service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,200",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of deep conditioning",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Deep Conditioning appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Deep Conditioning typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Deep Conditioning?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "hair-spa",
                "name": "Basic Hair Spa",
                "price": "₹1,200"
            },
            {
                "id": "premium-hair-spa",
                "name": "Premium Hair Spa",
                "price": "₹1,200"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "hair-mask-treatment",
        "slug": "hair-mask-treatment",
        "name": "Hair Mask Treatment",
        "category": "Hair Spa & Hair Treatments",
        "folder": "02-hair-spa-and-treatments",
        "imageFile": "hair-mask-treatment.webp",
        "image": "/images/services/02-hair-spa-and-treatments/hair-mask-treatment.webp",
        "fallbackVar": "hairTreatment",
        "imageAlt": "Hair Mask Treatment - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional hair mask treatment delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated hair mask treatment service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹500",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of hair mask treatment",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Hair Mask Treatment appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Hair Mask Treatment typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Hair Mask Treatment?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "hair-spa",
                "name": "Basic Hair Spa",
                "price": "₹1,200"
            },
            {
                "id": "premium-hair-spa",
                "name": "Premium Hair Spa",
                "price": "₹1,200"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "hot-oil-treatment",
        "slug": "hot-oil-treatment",
        "name": "Hot Oil Treatment",
        "category": "Hair Spa & Hair Treatments",
        "folder": "02-hair-spa-and-treatments",
        "imageFile": "hot-oil-treatment.webp",
        "image": "/images/services/02-hair-spa-and-treatments/hot-oil-treatment.webp",
        "fallbackVar": "hairTreatment",
        "imageAlt": "Hot Oil Treatment - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional hot oil treatment delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated hot oil treatment service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of hot oil treatment",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Hot Oil Treatment appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Hot Oil Treatment typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Hot Oil Treatment?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "hair-spa",
                "name": "Basic Hair Spa",
                "price": "₹1,200"
            },
            {
                "id": "premium-hair-spa",
                "name": "Premium Hair Spa",
                "price": "₹1,200"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "scalp-cleansing",
        "slug": "scalp-cleansing",
        "name": "Scalp Cleansing",
        "category": "Hair Spa & Hair Treatments",
        "folder": "02-hair-spa-and-treatments",
        "imageFile": "scalp-cleansing.webp",
        "image": "/images/services/02-hair-spa-and-treatments/scalp-cleansing.webp",
        "fallbackVar": "hairTreatment",
        "imageAlt": "Scalp Cleansing - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional scalp cleansing delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated scalp cleansing service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of scalp cleansing",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Scalp Cleansing appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Scalp Cleansing typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Scalp Cleansing?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "hair-spa",
                "name": "Basic Hair Spa",
                "price": "₹1,200"
            },
            {
                "id": "premium-hair-spa",
                "name": "Premium Hair Spa",
                "price": "₹1,200"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "scalp-massage",
        "slug": "scalp-massage",
        "name": "Scalp Massage",
        "category": "Hair Spa & Hair Treatments",
        "folder": "02-hair-spa-and-treatments",
        "imageFile": "scalp-massage.webp",
        "image": "/images/services/02-hair-spa-and-treatments/scalp-massage.webp",
        "fallbackVar": "hairTreatment",
        "imageAlt": "Scalp Massage - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional scalp massage delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated scalp massage service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,200",
        "duration": "45-60 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of scalp massage",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Scalp Massage appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Scalp Massage typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Scalp Massage?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "hair-spa",
                "name": "Basic Hair Spa",
                "price": "₹1,200"
            },
            {
                "id": "premium-hair-spa",
                "name": "Premium Hair Spa",
                "price": "₹1,200"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "anti-dandruff-scalp-care",
        "slug": "anti-dandruff-scalp-care",
        "name": "Anti-Dandruff Scalp Care",
        "category": "Hair Spa & Hair Treatments",
        "folder": "02-hair-spa-and-treatments",
        "imageFile": "anti-dandruff-scalp-care.webp",
        "image": "/images/services/02-hair-spa-and-treatments/anti-dandruff-scalp-care.webp",
        "fallbackVar": "hairTreatment",
        "imageAlt": "Anti-Dandruff Scalp Care - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional anti-dandruff scalp care delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated anti-dandruff scalp care service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of anti-dandruff scalp care",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Anti-Dandruff Scalp Care appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Anti-Dandruff Scalp Care typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Anti-Dandruff Scalp Care?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "hair-spa",
                "name": "Basic Hair Spa",
                "price": "₹1,200"
            },
            {
                "id": "premium-hair-spa",
                "name": "Premium Hair Spa",
                "price": "₹1,200"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "dry-hair-treatment",
        "slug": "dry-hair-treatment",
        "name": "Dry Hair Treatment",
        "category": "Hair Spa & Hair Treatments",
        "folder": "02-hair-spa-and-treatments",
        "imageFile": "dry-hair-treatment.webp",
        "image": "/images/services/02-hair-spa-and-treatments/dry-hair-treatment.webp",
        "fallbackVar": "hairTreatment",
        "imageAlt": "Dry Hair Treatment - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional dry hair treatment delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated dry hair treatment service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of dry hair treatment",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Dry Hair Treatment appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Dry Hair Treatment typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Dry Hair Treatment?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "hair-spa",
                "name": "Basic Hair Spa",
                "price": "₹1,200"
            },
            {
                "id": "premium-hair-spa",
                "name": "Premium Hair Spa",
                "price": "₹1,200"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "frizz-control-treatment",
        "slug": "frizz-control-treatment",
        "name": "Frizz Control Treatment",
        "category": "Hair Spa & Hair Treatments",
        "folder": "02-hair-spa-and-treatments",
        "imageFile": "frizz-control-treatment.webp",
        "image": "/images/services/02-hair-spa-and-treatments/frizz-control-treatment.webp",
        "fallbackVar": "hairTreatment",
        "imageAlt": "Frizz Control Treatment - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional frizz control treatment delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated frizz control treatment service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of frizz control treatment",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Frizz Control Treatment appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Frizz Control Treatment typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Frizz Control Treatment?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "hair-spa",
                "name": "Basic Hair Spa",
                "price": "₹1,200"
            },
            {
                "id": "premium-hair-spa",
                "name": "Premium Hair Spa",
                "price": "₹1,200"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "hair-damage-repair",
        "slug": "hair-damage-repair",
        "name": "Hair Damage Repair",
        "category": "Hair Spa & Hair Treatments",
        "folder": "02-hair-spa-and-treatments",
        "imageFile": "hair-damage-repair.webp",
        "image": "/images/services/02-hair-spa-and-treatments/hair-damage-repair.webp",
        "fallbackVar": "hairTreatment",
        "imageAlt": "Hair Damage Repair - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional hair damage repair delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated hair damage repair service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of hair damage repair",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Hair Damage Repair appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Hair Damage Repair typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Hair Damage Repair?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "hair-spa",
                "name": "Basic Hair Spa",
                "price": "₹1,200"
            },
            {
                "id": "premium-hair-spa",
                "name": "Premium Hair Spa",
                "price": "₹1,200"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "protein-hair-treatment",
        "slug": "protein-hair-treatment",
        "name": "Protein Hair Treatment",
        "category": "Hair Spa & Hair Treatments",
        "folder": "02-hair-spa-and-treatments",
        "imageFile": "protein-hair-treatment.webp",
        "image": "/images/services/02-hair-spa-and-treatments/protein-hair-treatment.webp",
        "fallbackVar": "hairTreatment",
        "imageAlt": "Protein Hair Treatment - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional protein hair treatment delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated protein hair treatment service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of protein hair treatment",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Protein Hair Treatment appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Protein Hair Treatment typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Protein Hair Treatment?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "hair-spa",
                "name": "Basic Hair Spa",
                "price": "₹1,200"
            },
            {
                "id": "premium-hair-spa",
                "name": "Premium Hair Spa",
                "price": "₹1,200"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "bond-repair-treatment",
        "slug": "bond-repair-treatment",
        "name": "Bond Repair Treatment",
        "category": "Hair Spa & Hair Treatments",
        "folder": "02-hair-spa-and-treatments",
        "imageFile": "bond-repair-treatment.webp",
        "image": "/images/services/02-hair-spa-and-treatments/bond-repair-treatment.webp",
        "fallbackVar": "hairTreatment",
        "imageAlt": "Bond Repair Treatment - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional bond repair treatment delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated bond repair treatment service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹2,500",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of bond repair treatment",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Bond Repair Treatment appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Bond Repair Treatment typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Bond Repair Treatment?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "hair-spa",
                "name": "Basic Hair Spa",
                "price": "₹1,200"
            },
            {
                "id": "premium-hair-spa",
                "name": "Premium Hair Spa",
                "price": "₹1,200"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "hair-botox-treatment",
        "slug": "hair-botox-treatment",
        "name": "Hair Botox Treatment",
        "category": "Hair Spa & Hair Treatments",
        "folder": "02-hair-spa-and-treatments",
        "imageFile": "hair-botox-treatment.webp",
        "image": "/images/services/02-hair-spa-and-treatments/hair-botox-treatment.webp",
        "fallbackVar": "hairTreatment",
        "imageAlt": "Hair Botox Treatment - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional hair botox treatment delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated hair botox treatment service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹6,000",
        "duration": "2-3 Hours",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of hair botox treatment",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Hair Botox Treatment appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Hair Botox Treatment typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Hair Botox Treatment?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "hair-spa",
                "name": "Basic Hair Spa",
                "price": "₹1,200"
            },
            {
                "id": "premium-hair-spa",
                "name": "Premium Hair Spa",
                "price": "₹1,200"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "keratin-treatment",
        "slug": "keratin-treatment",
        "name": "Keratin Treatment",
        "category": "Hair Spa & Hair Treatments",
        "folder": "02-hair-spa-and-treatments",
        "imageFile": "keratin-treatment.webp",
        "image": "/images/services/02-hair-spa-and-treatments/keratin-treatment.webp",
        "fallbackVar": "hairTreatment",
        "imageAlt": "Keratin Treatment - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional keratin treatment delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated keratin treatment service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹5,000",
        "duration": "2-3 Hours",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of keratin treatment",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Keratin Treatment appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Keratin Treatment typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Keratin Treatment?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "hair-spa",
                "name": "Basic Hair Spa",
                "price": "₹1,200"
            },
            {
                "id": "premium-hair-spa",
                "name": "Premium Hair Spa",
                "price": "₹1,200"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "cysteine-treatment",
        "slug": "cysteine-treatment",
        "name": "Cysteine Treatment",
        "category": "Hair Spa & Hair Treatments",
        "folder": "02-hair-spa-and-treatments",
        "imageFile": "cysteine-treatment.webp",
        "image": "/images/services/02-hair-spa-and-treatments/cysteine-treatment.webp",
        "fallbackVar": "hairTreatment",
        "imageAlt": "Cysteine Treatment - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional cysteine treatment delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated cysteine treatment service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹5,000",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of cysteine treatment",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Cysteine Treatment appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Cysteine Treatment typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Cysteine Treatment?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "hair-spa",
                "name": "Basic Hair Spa",
                "price": "₹1,200"
            },
            {
                "id": "premium-hair-spa",
                "name": "Premium Hair Spa",
                "price": "₹1,200"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "herbal-hair-pack",
        "slug": "herbal-hair-pack",
        "name": "Herbal Hair Pack",
        "category": "Hair Spa & Hair Treatments",
        "folder": "02-hair-spa-and-treatments",
        "imageFile": "herbal-hair-pack.webp",
        "image": "/images/services/02-hair-spa-and-treatments/herbal-hair-pack.webp",
        "fallbackVar": "hairTreatment",
        "imageAlt": "Herbal Hair Pack - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional herbal hair pack delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated herbal hair pack service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,000",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of herbal hair pack",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Herbal Hair Pack appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Herbal Hair Pack typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Herbal Hair Pack?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "hair-spa",
                "name": "Basic Hair Spa",
                "price": "₹1,200"
            },
            {
                "id": "premium-hair-spa",
                "name": "Premium Hair Spa",
                "price": "₹1,200"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "herbal-hair-oil-treatment",
        "slug": "herbal-hair-oil-treatment",
        "name": "Herbal Hair Oil Treatment",
        "category": "Hair Spa & Hair Treatments",
        "folder": "02-hair-spa-and-treatments",
        "imageFile": "herbal-hair-oil-treatment.webp",
        "image": "/images/services/02-hair-spa-and-treatments/herbal-hair-oil-treatment.webp",
        "fallbackVar": "hairTreatment",
        "imageAlt": "Herbal Hair Oil Treatment - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional herbal hair oil treatment delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated herbal hair oil treatment service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,000",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of herbal hair oil treatment",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Herbal Hair Oil Treatment appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Herbal Hair Oil Treatment typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Herbal Hair Oil Treatment?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "hair-spa",
                "name": "Basic Hair Spa",
                "price": "₹1,200"
            },
            {
                "id": "premium-hair-spa",
                "name": "Premium Hair Spa",
                "price": "₹1,200"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "root-touch-up",
        "slug": "root-touch-up",
        "name": "Root Touch-Up",
        "category": "Hair Colour & Highlights",
        "folder": "03-hair-colour-and-highlights",
        "imageFile": "root-touch-up.webp",
        "image": "/images/services/03-hair-colour-and-highlights/root-touch-up.webp",
        "fallbackVar": "hairColor",
        "imageAlt": "Root Touch-Up - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional root touch-up delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated root touch-up service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,000",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of root touch-up",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Root Touch-Up appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Root Touch-Up typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Root Touch-Up?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "hair-color",
                "name": "Global Hair Colour",
                "price": "₹2,500"
            },
            {
                "id": "grey-hair-coverage",
                "name": "Grey Hair Coverage",
                "price": "₹800"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": true
    },
    {
        "id": "hair-color",
        "slug": "global-hair-colour",
        "name": "Global Hair Colour",
        "category": "Hair Colour & Highlights",
        "folder": "03-hair-colour-and-highlights",
        "imageFile": "global-hair-colour.webp",
        "image": "/images/services/03-hair-colour-and-highlights/global-hair-colour.webp",
        "fallbackVar": "hairColor",
        "imageAlt": "Global Hair Colour - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional global hair colour delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated global hair colour service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹2,500",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of global hair colour",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Global Hair Colour appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Global Hair Colour typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Global Hair Colour?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "root-touch-up",
                "name": "Root Touch-Up",
                "price": "₹1,000"
            },
            {
                "id": "grey-hair-coverage",
                "name": "Grey Hair Coverage",
                "price": "₹800"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": true
    },
    {
        "id": "grey-hair-coverage",
        "slug": "grey-hair-coverage",
        "name": "Grey Hair Coverage",
        "category": "Hair Colour & Highlights",
        "folder": "03-hair-colour-and-highlights",
        "imageFile": "grey-hair-coverage.webp",
        "image": "/images/services/03-hair-colour-and-highlights/grey-hair-coverage.webp",
        "fallbackVar": "hairColor",
        "imageAlt": "Grey Hair Coverage - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional grey hair coverage delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated grey hair coverage service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of grey hair coverage",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Grey Hair Coverage appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Grey Hair Coverage typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Grey Hair Coverage?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "root-touch-up",
                "name": "Root Touch-Up",
                "price": "₹1,000"
            },
            {
                "id": "hair-color",
                "name": "Global Hair Colour",
                "price": "₹2,500"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "ammonia-free-hair-colour",
        "slug": "ammonia-free-hair-colour",
        "name": "Ammonia-Free Hair Colour",
        "category": "Hair Colour & Highlights",
        "folder": "03-hair-colour-and-highlights",
        "imageFile": "ammonia-free-hair-colour.webp",
        "image": "/images/services/03-hair-colour-and-highlights/ammonia-free-hair-colour.webp",
        "fallbackVar": "hairColor",
        "imageAlt": "Ammonia-Free Hair Colour - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional ammonia-free hair colour delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated ammonia-free hair colour service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of ammonia-free hair colour",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Ammonia-Free Hair Colour appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Ammonia-Free Hair Colour typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Ammonia-Free Hair Colour?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "root-touch-up",
                "name": "Root Touch-Up",
                "price": "₹1,000"
            },
            {
                "id": "hair-color",
                "name": "Global Hair Colour",
                "price": "₹2,500"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "fashion-hair-colour",
        "slug": "fashion-hair-colour",
        "name": "Fashion Hair Colour",
        "category": "Hair Colour & Highlights",
        "folder": "03-hair-colour-and-highlights",
        "imageFile": "fashion-hair-colour.webp",
        "image": "/images/services/03-hair-colour-and-highlights/fashion-hair-colour.webp",
        "fallbackVar": "hairColor",
        "imageAlt": "Fashion Hair Colour - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional fashion hair colour delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated fashion hair colour service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of fashion hair colour",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Fashion Hair Colour appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Fashion Hair Colour typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Fashion Hair Colour?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "root-touch-up",
                "name": "Root Touch-Up",
                "price": "₹1,000"
            },
            {
                "id": "hair-color",
                "name": "Global Hair Colour",
                "price": "₹2,500"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "highlights",
        "slug": "highlights",
        "name": "Highlights",
        "category": "Hair Colour & Highlights",
        "folder": "03-hair-colour-and-highlights",
        "imageFile": "highlights.webp",
        "image": "/images/services/03-hair-colour-and-highlights/highlights.webp",
        "fallbackVar": "hairColor",
        "imageAlt": "Highlights - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional highlights delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated highlights service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹3,000",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of highlights",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Highlights appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Highlights typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Highlights?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "root-touch-up",
                "name": "Root Touch-Up",
                "price": "₹1,000"
            },
            {
                "id": "hair-color",
                "name": "Global Hair Colour",
                "price": "₹2,500"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "lowlights",
        "slug": "lowlights",
        "name": "Lowlights",
        "category": "Hair Colour & Highlights",
        "folder": "03-hair-colour-and-highlights",
        "imageFile": "lowlights.webp",
        "image": "/images/services/03-hair-colour-and-highlights/lowlights.webp",
        "fallbackVar": "hairColor",
        "imageAlt": "Lowlights - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional lowlights delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated lowlights service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of lowlights",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Lowlights appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Lowlights typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Lowlights?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "root-touch-up",
                "name": "Root Touch-Up",
                "price": "₹1,000"
            },
            {
                "id": "hair-color",
                "name": "Global Hair Colour",
                "price": "₹2,500"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "balayage",
        "slug": "balayage",
        "name": "Balayage",
        "category": "Hair Colour & Highlights",
        "folder": "03-hair-colour-and-highlights",
        "imageFile": "balayage.webp",
        "image": "/images/services/03-hair-colour-and-highlights/balayage.webp",
        "fallbackVar": "hairColor",
        "imageAlt": "Balayage - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional balayage delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated balayage service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹4,500",
        "duration": "3-4 Hours",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of balayage",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Balayage appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Balayage typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Balayage?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "root-touch-up",
                "name": "Root Touch-Up",
                "price": "₹1,000"
            },
            {
                "id": "hair-color",
                "name": "Global Hair Colour",
                "price": "₹2,500"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "ombre-colour",
        "slug": "ombre-colour",
        "name": "Ombre Colour",
        "category": "Hair Colour & Highlights",
        "folder": "03-hair-colour-and-highlights",
        "imageFile": "ombre-colour.webp",
        "image": "/images/services/03-hair-colour-and-highlights/ombre-colour.webp",
        "fallbackVar": "hairColor",
        "imageAlt": "Ombre Colour - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional ombre colour delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated ombre colour service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹4,500",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of ombre colour",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Ombre Colour appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Ombre Colour typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Ombre Colour?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "root-touch-up",
                "name": "Root Touch-Up",
                "price": "₹1,000"
            },
            {
                "id": "hair-color",
                "name": "Global Hair Colour",
                "price": "₹2,500"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "babylights",
        "slug": "babylights",
        "name": "Babylights",
        "category": "Hair Colour & Highlights",
        "folder": "03-hair-colour-and-highlights",
        "imageFile": "babylights.webp",
        "image": "/images/services/03-hair-colour-and-highlights/babylights.webp",
        "fallbackVar": "hairColor",
        "imageAlt": "Babylights - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional babylights delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated babylights service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of babylights",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Babylights appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Babylights typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Babylights?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "root-touch-up",
                "name": "Root Touch-Up",
                "price": "₹1,000"
            },
            {
                "id": "hair-color",
                "name": "Global Hair Colour",
                "price": "₹2,500"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "money-piece-highlights",
        "slug": "money-piece-highlights",
        "name": "Money Piece Highlights",
        "category": "Hair Colour & Highlights",
        "folder": "03-hair-colour-and-highlights",
        "imageFile": "money-piece-highlights.webp",
        "image": "/images/services/03-hair-colour-and-highlights/money-piece-highlights.webp",
        "fallbackVar": "hairColor",
        "imageAlt": "Money Piece Highlights - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional money piece highlights delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated money piece highlights service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹3,000",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of money piece highlights",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Money Piece Highlights appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Money Piece Highlights typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Money Piece Highlights?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "root-touch-up",
                "name": "Root Touch-Up",
                "price": "₹1,000"
            },
            {
                "id": "hair-color",
                "name": "Global Hair Colour",
                "price": "₹2,500"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "colour-correction",
        "slug": "colour-correction",
        "name": "Colour Correction",
        "category": "Hair Colour & Highlights",
        "folder": "03-hair-colour-and-highlights",
        "imageFile": "colour-correction.webp",
        "image": "/images/services/03-hair-colour-and-highlights/colour-correction.webp",
        "fallbackVar": "hairColor",
        "imageAlt": "Colour Correction - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional colour correction delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated colour correction service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of colour correction",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Colour Correction appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Colour Correction typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Colour Correction?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "root-touch-up",
                "name": "Root Touch-Up",
                "price": "₹1,000"
            },
            {
                "id": "hair-color",
                "name": "Global Hair Colour",
                "price": "₹2,500"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "hair-bleaching",
        "slug": "hair-bleaching",
        "name": "Hair Bleaching",
        "category": "Hair Colour & Highlights",
        "folder": "03-hair-colour-and-highlights",
        "imageFile": "hair-bleaching.webp",
        "image": "/images/services/03-hair-colour-and-highlights/hair-bleaching.webp",
        "fallbackVar": "hairColor",
        "imageAlt": "Hair Bleaching - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional hair bleaching delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated hair bleaching service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of hair bleaching",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Hair Bleaching appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Hair Bleaching typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Hair Bleaching?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "root-touch-up",
                "name": "Root Touch-Up",
                "price": "₹1,000"
            },
            {
                "id": "hair-color",
                "name": "Global Hair Colour",
                "price": "₹2,500"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "henna-hair-colour",
        "slug": "henna-hair-colour",
        "name": "Henna Hair Colour",
        "category": "Hair Colour & Highlights",
        "folder": "03-hair-colour-and-highlights",
        "imageFile": "henna-hair-colour.webp",
        "image": "/images/services/03-hair-colour-and-highlights/henna-hair-colour.webp",
        "fallbackVar": "hairColor",
        "imageAlt": "Henna Hair Colour - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional henna hair colour delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated henna hair colour service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of henna hair colour",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Henna Hair Colour appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Henna Hair Colour typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Henna Hair Colour?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "root-touch-up",
                "name": "Root Touch-Up",
                "price": "₹1,000"
            },
            {
                "id": "hair-color",
                "name": "Global Hair Colour",
                "price": "₹2,500"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "hair-smoothening",
        "slug": "hair-smoothening",
        "name": "Hair Smoothening",
        "category": "Smoothening & Chemical Hair Services",
        "folder": "04-smoothening-and-chemical",
        "imageFile": "hair-smoothening.webp",
        "image": "/images/services/04-smoothening-and-chemical/hair-smoothening.webp",
        "fallbackVar": "hairSmootheningAfter",
        "imageAlt": "Hair Smoothening - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional hair smoothening delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated hair smoothening service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹4,500",
        "duration": "3-4 Hours",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of hair smoothening",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Hair Smoothening appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Hair Smoothening typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Hair Smoothening?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "hair-rebonding",
                "name": "Hair Rebonding",
                "price": "₹4,500"
            },
            {
                "id": "permanent-hair-straightening",
                "name": "Permanent Hair Straightening",
                "price": "₹4,500"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": true
    },
    {
        "id": "hair-rebonding",
        "slug": "hair-rebonding",
        "name": "Hair Rebonding",
        "category": "Smoothening & Chemical Hair Services",
        "folder": "04-smoothening-and-chemical",
        "imageFile": "hair-rebonding.webp",
        "image": "/images/services/04-smoothening-and-chemical/hair-rebonding.webp",
        "fallbackVar": "hairSmootheningAfter",
        "imageAlt": "Hair Rebonding - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional hair rebonding delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated hair rebonding service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹4,500",
        "duration": "3-4 Hours",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of hair rebonding",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Hair Rebonding appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Hair Rebonding typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Hair Rebonding?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "hair-smoothening",
                "name": "Hair Smoothening",
                "price": "₹4,500"
            },
            {
                "id": "permanent-hair-straightening",
                "name": "Permanent Hair Straightening",
                "price": "₹4,500"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": true
    },
    {
        "id": "permanent-hair-straightening",
        "slug": "permanent-hair-straightening",
        "name": "Permanent Hair Straightening",
        "category": "Smoothening & Chemical Hair Services",
        "folder": "04-smoothening-and-chemical",
        "imageFile": "permanent-hair-straightening.webp",
        "image": "/images/services/04-smoothening-and-chemical/permanent-hair-straightening.webp",
        "fallbackVar": "hairSmootheningAfter",
        "imageAlt": "Permanent Hair Straightening - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional permanent hair straightening delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated permanent hair straightening service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹4,500",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of permanent hair straightening",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Permanent Hair Straightening appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Permanent Hair Straightening typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Permanent Hair Straightening?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "hair-smoothening",
                "name": "Hair Smoothening",
                "price": "₹4,500"
            },
            {
                "id": "hair-rebonding",
                "name": "Hair Rebonding",
                "price": "₹4,500"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "hair-relaxing",
        "slug": "hair-relaxing",
        "name": "Hair Relaxing",
        "category": "Smoothening & Chemical Hair Services",
        "folder": "04-smoothening-and-chemical",
        "imageFile": "hair-relaxing.webp",
        "image": "/images/services/04-smoothening-and-chemical/hair-relaxing.webp",
        "fallbackVar": "hairSmootheningAfter",
        "imageAlt": "Hair Relaxing - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional hair relaxing delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated hair relaxing service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of hair relaxing",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Hair Relaxing appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Hair Relaxing typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Hair Relaxing?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "hair-smoothening",
                "name": "Hair Smoothening",
                "price": "₹4,500"
            },
            {
                "id": "hair-rebonding",
                "name": "Hair Rebonding",
                "price": "₹4,500"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "permanent-hair-perming",
        "slug": "permanent-hair-perming",
        "name": "Permanent Hair Perming",
        "category": "Smoothening & Chemical Hair Services",
        "folder": "04-smoothening-and-chemical",
        "imageFile": "permanent-hair-perming.webp",
        "image": "/images/services/04-smoothening-and-chemical/permanent-hair-perming.webp",
        "fallbackVar": "hairSmootheningAfter",
        "imageAlt": "Permanent Hair Perming - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional permanent hair perming delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated permanent hair perming service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹3,500",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of permanent hair perming",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Permanent Hair Perming appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Permanent Hair Perming typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Permanent Hair Perming?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "hair-smoothening",
                "name": "Hair Smoothening",
                "price": "₹4,500"
            },
            {
                "id": "hair-rebonding",
                "name": "Hair Rebonding",
                "price": "₹4,500"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "root-lift-treatment",
        "slug": "root-lift-treatment",
        "name": "Root Lift Treatment",
        "category": "Smoothening & Chemical Hair Services",
        "folder": "04-smoothening-and-chemical",
        "imageFile": "root-lift-treatment.webp",
        "image": "/images/services/04-smoothening-and-chemical/root-lift-treatment.webp",
        "fallbackVar": "hairSmootheningAfter",
        "imageAlt": "Root Lift Treatment - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional root lift treatment delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated root lift treatment service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹3,500",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of root lift treatment",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Root Lift Treatment appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Root Lift Treatment typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Root Lift Treatment?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "hair-smoothening",
                "name": "Hair Smoothening",
                "price": "₹4,500"
            },
            {
                "id": "hair-rebonding",
                "name": "Hair Rebonding",
                "price": "₹4,500"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "basic-facial",
        "slug": "basic-facial",
        "name": "Basic Facial",
        "category": "Facial & Skincare",
        "folder": "05-facial-and-skincare",
        "imageFile": "basic-facial.webp",
        "image": "/images/services/05-facial-and-skincare/basic-facial.webp",
        "fallbackVar": "skinFacial",
        "imageAlt": "Basic Facial - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional basic facial delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated basic facial service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,200",
        "duration": "60-90 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of basic facial",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Basic Facial appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Basic Facial typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Basic Facial?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "fruit-facial",
                "name": "Fruit Facial",
                "price": "₹1,000"
            },
            {
                "id": "herbal-facial",
                "name": "Herbal Facial",
                "price": "₹1,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": true
    },
    {
        "id": "fruit-facial",
        "slug": "fruit-facial",
        "name": "Fruit Facial",
        "category": "Facial & Skincare",
        "folder": "05-facial-and-skincare",
        "imageFile": "fruit-facial.webp",
        "image": "/images/services/05-facial-and-skincare/fruit-facial.webp",
        "fallbackVar": "skinFacial",
        "imageAlt": "Fruit Facial - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional fruit facial delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated fruit facial service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,000",
        "duration": "60-90 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of fruit facial",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Fruit Facial appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Fruit Facial typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Fruit Facial?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-facial",
                "name": "Basic Facial",
                "price": "₹1,200"
            },
            {
                "id": "herbal-facial",
                "name": "Herbal Facial",
                "price": "₹1,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": true
    },
    {
        "id": "herbal-facial",
        "slug": "herbal-facial",
        "name": "Herbal Facial",
        "category": "Facial & Skincare",
        "folder": "05-facial-and-skincare",
        "imageFile": "herbal-facial.webp",
        "image": "/images/services/05-facial-and-skincare/herbal-facial.webp",
        "fallbackVar": "skinFacial",
        "imageAlt": "Herbal Facial - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional herbal facial delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated herbal facial service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,000",
        "duration": "60-90 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of herbal facial",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Herbal Facial appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Herbal Facial typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Herbal Facial?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-facial",
                "name": "Basic Facial",
                "price": "₹1,200"
            },
            {
                "id": "fruit-facial",
                "name": "Fruit Facial",
                "price": "₹1,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "hydrating-facial",
        "slug": "hydrating-facial",
        "name": "Hydrating Facial",
        "category": "Facial & Skincare",
        "folder": "05-facial-and-skincare",
        "imageFile": "hydrating-facial.webp",
        "image": "/images/services/05-facial-and-skincare/hydrating-facial.webp",
        "fallbackVar": "skinFacial",
        "imageAlt": "Hydrating Facial - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional hydrating facial delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated hydrating facial service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹2,000",
        "duration": "60-90 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of hydrating facial",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Hydrating Facial appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Hydrating Facial typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Hydrating Facial?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-facial",
                "name": "Basic Facial",
                "price": "₹1,200"
            },
            {
                "id": "fruit-facial",
                "name": "Fruit Facial",
                "price": "₹1,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "o3-gold-facial",
        "slug": "gold-facial",
        "name": "Gold Facial",
        "category": "Facial & Skincare",
        "folder": "05-facial-and-skincare",
        "imageFile": "gold-facial.webp",
        "image": "/images/services/05-facial-and-skincare/gold-facial.webp",
        "fallbackVar": "skinFacial",
        "imageAlt": "Gold Facial - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional gold facial delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated gold facial service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹2,500",
        "duration": "60-90 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of gold facial",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Gold Facial appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Gold Facial typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Gold Facial?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-facial",
                "name": "Basic Facial",
                "price": "₹1,200"
            },
            {
                "id": "fruit-facial",
                "name": "Fruit Facial",
                "price": "₹1,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "diamond-facial",
        "slug": "diamond-facial",
        "name": "Diamond Facial",
        "category": "Facial & Skincare",
        "folder": "05-facial-and-skincare",
        "imageFile": "diamond-facial.webp",
        "image": "/images/services/05-facial-and-skincare/diamond-facial.webp",
        "fallbackVar": "skinFacial",
        "imageAlt": "Diamond Facial - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional diamond facial delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated diamond facial service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹2,500",
        "duration": "60-90 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of diamond facial",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Diamond Facial appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Diamond Facial typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Diamond Facial?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-facial",
                "name": "Basic Facial",
                "price": "₹1,200"
            },
            {
                "id": "fruit-facial",
                "name": "Fruit Facial",
                "price": "₹1,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "pearl-facial",
        "slug": "pearl-facial",
        "name": "Pearl Facial",
        "category": "Facial & Skincare",
        "folder": "05-facial-and-skincare",
        "imageFile": "pearl-facial.webp",
        "image": "/images/services/05-facial-and-skincare/pearl-facial.webp",
        "fallbackVar": "skinFacial",
        "imageAlt": "Pearl Facial - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional pearl facial delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated pearl facial service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹2,500",
        "duration": "60-90 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of pearl facial",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Pearl Facial appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Pearl Facial typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Pearl Facial?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-facial",
                "name": "Basic Facial",
                "price": "₹1,200"
            },
            {
                "id": "fruit-facial",
                "name": "Fruit Facial",
                "price": "₹1,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "brightening-facial",
        "slug": "brightening-facial",
        "name": "Brightening Facial",
        "category": "Facial & Skincare",
        "folder": "05-facial-and-skincare",
        "imageFile": "brightening-facial.webp",
        "image": "/images/services/05-facial-and-skincare/brightening-facial.webp",
        "fallbackVar": "skinFacial",
        "imageAlt": "Brightening Facial - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional brightening facial delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated brightening facial service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "60-90 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of brightening facial",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Brightening Facial appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Brightening Facial typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Brightening Facial?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-facial",
                "name": "Basic Facial",
                "price": "₹1,200"
            },
            {
                "id": "fruit-facial",
                "name": "Fruit Facial",
                "price": "₹1,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "anti-ageing-facial",
        "slug": "anti-ageing-facial",
        "name": "Anti-Ageing Facial",
        "category": "Facial & Skincare",
        "folder": "05-facial-and-skincare",
        "imageFile": "anti-ageing-facial.webp",
        "image": "/images/services/05-facial-and-skincare/anti-ageing-facial.webp",
        "fallbackVar": "skinFacial",
        "imageAlt": "Anti-Ageing Facial - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional anti-ageing facial delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated anti-ageing facial service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "60-90 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of anti-ageing facial",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Anti-Ageing Facial appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Anti-Ageing Facial typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Anti-Ageing Facial?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-facial",
                "name": "Basic Facial",
                "price": "₹1,200"
            },
            {
                "id": "fruit-facial",
                "name": "Fruit Facial",
                "price": "₹1,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "acne-prone-skin-facial",
        "slug": "acne-prone-skin-facial",
        "name": "Acne-Prone Skin Facial",
        "category": "Facial & Skincare",
        "folder": "05-facial-and-skincare",
        "imageFile": "acne-prone-skin-facial.webp",
        "image": "/images/services/05-facial-and-skincare/acne-prone-skin-facial.webp",
        "fallbackVar": "skinFacial",
        "imageAlt": "Acne-Prone Skin Facial - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional acne-prone skin facial delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated acne-prone skin facial service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "60-90 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of acne-prone skin facial",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Acne-Prone Skin Facial appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Acne-Prone Skin Facial typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Acne-Prone Skin Facial?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-facial",
                "name": "Basic Facial",
                "price": "₹1,200"
            },
            {
                "id": "fruit-facial",
                "name": "Fruit Facial",
                "price": "₹1,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "sensitive-skin-facial",
        "slug": "sensitive-skin-facial",
        "name": "Sensitive Skin Facial",
        "category": "Facial & Skincare",
        "folder": "05-facial-and-skincare",
        "imageFile": "sensitive-skin-facial.webp",
        "image": "/images/services/05-facial-and-skincare/sensitive-skin-facial.webp",
        "fallbackVar": "skinFacial",
        "imageAlt": "Sensitive Skin Facial - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional sensitive skin facial delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated sensitive skin facial service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "60-90 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of sensitive skin facial",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Sensitive Skin Facial appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Sensitive Skin Facial typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Sensitive Skin Facial?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-facial",
                "name": "Basic Facial",
                "price": "₹1,200"
            },
            {
                "id": "fruit-facial",
                "name": "Fruit Facial",
                "price": "₹1,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "de-tan-facial",
        "slug": "de-tan-facial",
        "name": "De-Tan Facial",
        "category": "Facial & Skincare",
        "folder": "05-facial-and-skincare",
        "imageFile": "de-tan-facial.webp",
        "image": "/images/services/05-facial-and-skincare/de-tan-facial.webp",
        "fallbackVar": "skinFacial",
        "imageAlt": "De-Tan Facial - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional de-tan facial delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated de-tan facial service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,000",
        "duration": "60-90 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of de-tan facial",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my De-Tan Facial appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of De-Tan Facial typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for De-Tan Facial?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-facial",
                "name": "Basic Facial",
                "price": "₹1,200"
            },
            {
                "id": "fruit-facial",
                "name": "Fruit Facial",
                "price": "₹1,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "deep-cleansing-facial",
        "slug": "deep-cleansing-facial",
        "name": "Deep Cleansing Facial",
        "category": "Facial & Skincare",
        "folder": "05-facial-and-skincare",
        "imageFile": "deep-cleansing-facial.webp",
        "image": "/images/services/05-facial-and-skincare/deep-cleansing-facial.webp",
        "fallbackVar": "skinFacial",
        "imageAlt": "Deep Cleansing Facial - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional deep cleansing facial delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated deep cleansing facial service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹2,000",
        "duration": "60-90 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of deep cleansing facial",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Deep Cleansing Facial appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Deep Cleansing Facial typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Deep Cleansing Facial?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-facial",
                "name": "Basic Facial",
                "price": "₹1,200"
            },
            {
                "id": "fruit-facial",
                "name": "Fruit Facial",
                "price": "₹1,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "basic-cleanup",
        "slug": "basic-cleanup",
        "name": "Basic Cleanup",
        "category": "Facial & Skincare",
        "folder": "05-facial-and-skincare",
        "imageFile": "basic-cleanup.webp",
        "image": "/images/services/05-facial-and-skincare/basic-cleanup.webp",
        "fallbackVar": "skinFacial",
        "imageAlt": "Basic Cleanup - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional basic cleanup delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated basic cleanup service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹600",
        "duration": "30-45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of basic cleanup",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Basic Cleanup appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Basic Cleanup typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Basic Cleanup?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-facial",
                "name": "Basic Facial",
                "price": "₹1,200"
            },
            {
                "id": "fruit-facial",
                "name": "Fruit Facial",
                "price": "₹1,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "premium-cleanup",
        "slug": "premium-cleanup",
        "name": "Premium Cleanup",
        "category": "Facial & Skincare",
        "folder": "05-facial-and-skincare",
        "imageFile": "premium-cleanup.webp",
        "image": "/images/services/05-facial-and-skincare/premium-cleanup.webp",
        "fallbackVar": "skinFacial",
        "imageAlt": "Premium Cleanup - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional premium cleanup delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated premium cleanup service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹600",
        "duration": "30-45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of premium cleanup",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Premium Cleanup appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Premium Cleanup typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Premium Cleanup?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-facial",
                "name": "Basic Facial",
                "price": "₹1,200"
            },
            {
                "id": "fruit-facial",
                "name": "Fruit Facial",
                "price": "₹1,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "blackhead-removal",
        "slug": "blackhead-removal",
        "name": "Blackhead Removal",
        "category": "Facial & Skincare",
        "folder": "05-facial-and-skincare",
        "imageFile": "blackhead-removal.webp",
        "image": "/images/services/05-facial-and-skincare/blackhead-removal.webp",
        "fallbackVar": "skinFacial",
        "imageAlt": "Blackhead Removal - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional blackhead removal delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated blackhead removal service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹500",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of blackhead removal",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Blackhead Removal appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Blackhead Removal typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Blackhead Removal?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-facial",
                "name": "Basic Facial",
                "price": "₹1,200"
            },
            {
                "id": "fruit-facial",
                "name": "Fruit Facial",
                "price": "₹1,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "whitehead-removal",
        "slug": "whitehead-removal",
        "name": "Whitehead Removal",
        "category": "Facial & Skincare",
        "folder": "05-facial-and-skincare",
        "imageFile": "whitehead-removal.webp",
        "image": "/images/services/05-facial-and-skincare/whitehead-removal.webp",
        "fallbackVar": "skinFacial",
        "imageAlt": "Whitehead Removal - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional whitehead removal delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated whitehead removal service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹500",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of whitehead removal",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Whitehead Removal appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Whitehead Removal typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Whitehead Removal?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-facial",
                "name": "Basic Facial",
                "price": "₹1,200"
            },
            {
                "id": "fruit-facial",
                "name": "Fruit Facial",
                "price": "₹1,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "face-mask-treatment",
        "slug": "face-mask-treatment",
        "name": "Face Mask Treatment",
        "category": "Facial & Skincare",
        "folder": "05-facial-and-skincare",
        "imageFile": "face-mask-treatment.webp",
        "image": "/images/services/05-facial-and-skincare/face-mask-treatment.webp",
        "fallbackVar": "skinFacial",
        "imageAlt": "Face Mask Treatment - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional face mask treatment delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated face mask treatment service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹500",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of face mask treatment",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Face Mask Treatment appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Face Mask Treatment typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Face Mask Treatment?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-facial",
                "name": "Basic Facial",
                "price": "₹1,200"
            },
            {
                "id": "fruit-facial",
                "name": "Fruit Facial",
                "price": "₹1,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "face-bleaching",
        "slug": "face-bleaching",
        "name": "Face Bleaching",
        "category": "Facial & Skincare",
        "folder": "05-facial-and-skincare",
        "imageFile": "face-bleaching.webp",
        "image": "/images/services/05-facial-and-skincare/face-bleaching.webp",
        "fallbackVar": "skinFacial",
        "imageAlt": "Face Bleaching - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional face bleaching delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated face bleaching service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of face bleaching",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Face Bleaching appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Face Bleaching typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Face Bleaching?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-facial",
                "name": "Basic Facial",
                "price": "₹1,200"
            },
            {
                "id": "fruit-facial",
                "name": "Fruit Facial",
                "price": "₹1,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "skin-polishing",
        "slug": "skin-polishing",
        "name": "Skin Polishing",
        "category": "Facial & Skincare",
        "folder": "05-facial-and-skincare",
        "imageFile": "skin-polishing.webp",
        "image": "/images/services/05-facial-and-skincare/skin-polishing.webp",
        "fallbackVar": "skinFacial",
        "imageAlt": "Skin Polishing - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional skin polishing delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated skin polishing service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "15-20 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of skin polishing",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Skin Polishing appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Skin Polishing typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Skin Polishing?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-facial",
                "name": "Basic Facial",
                "price": "₹1,200"
            },
            {
                "id": "fruit-facial",
                "name": "Fruit Facial",
                "price": "₹1,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "under-eye-care",
        "slug": "under-eye-care",
        "name": "Under-Eye Care",
        "category": "Facial & Skincare",
        "folder": "05-facial-and-skincare",
        "imageFile": "under-eye-care.webp",
        "image": "/images/services/05-facial-and-skincare/under-eye-care.webp",
        "fallbackVar": "skinFacial",
        "imageAlt": "Under-Eye Care - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional under-eye care delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated under-eye care service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹500",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of under-eye care",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Under-Eye Care appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Under-Eye Care typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Under-Eye Care?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-facial",
                "name": "Basic Facial",
                "price": "₹1,200"
            },
            {
                "id": "fruit-facial",
                "name": "Fruit Facial",
                "price": "₹1,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "bridal-skin-preparation",
        "slug": "bridal-skin-preparation",
        "name": "Bridal Skin Preparation",
        "category": "Facial & Skincare",
        "folder": "05-facial-and-skincare",
        "imageFile": "bridal-skin-preparation.webp",
        "image": "/images/services/05-facial-and-skincare/bridal-skin-preparation.webp",
        "fallbackVar": "skinFacial",
        "imageAlt": "Bridal Skin Preparation - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional bridal skin preparation delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated bridal skin preparation service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of bridal skin preparation",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Bridal Skin Preparation appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Bridal Skin Preparation typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Bridal Skin Preparation?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-facial",
                "name": "Basic Facial",
                "price": "₹1,200"
            },
            {
                "id": "fruit-facial",
                "name": "Fruit Facial",
                "price": "₹1,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "eyebrow-threading",
        "slug": "eyebrow-threading",
        "name": "Eyebrow Threading",
        "category": "Threading & Face Grooming",
        "folder": "06-threading-and-face-grooming",
        "imageFile": "eyebrow-threading.webp",
        "image": "/images/services/06-threading-and-face-grooming/eyebrow-threading.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Eyebrow Threading - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional eyebrow threading delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated eyebrow threading service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹50",
        "duration": "15-20 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of eyebrow threading",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Eyebrow Threading appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Eyebrow Threading typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Eyebrow Threading?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "upper-lip-threading",
                "name": "Upper Lip Threading",
                "price": "₹50"
            },
            {
                "id": "forehead-threading",
                "name": "Forehead Threading",
                "price": "₹50"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": true
    },
    {
        "id": "upper-lip-threading",
        "slug": "upper-lip-threading",
        "name": "Upper Lip Threading",
        "category": "Threading & Face Grooming",
        "folder": "06-threading-and-face-grooming",
        "imageFile": "upper-lip-threading.webp",
        "image": "/images/services/06-threading-and-face-grooming/upper-lip-threading.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Upper Lip Threading - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional upper lip threading delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated upper lip threading service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹50",
        "duration": "15-20 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of upper lip threading",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Upper Lip Threading appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Upper Lip Threading typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Upper Lip Threading?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "eyebrow-threading",
                "name": "Eyebrow Threading",
                "price": "₹50"
            },
            {
                "id": "forehead-threading",
                "name": "Forehead Threading",
                "price": "₹50"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": true
    },
    {
        "id": "forehead-threading",
        "slug": "forehead-threading",
        "name": "Forehead Threading",
        "category": "Threading & Face Grooming",
        "folder": "06-threading-and-face-grooming",
        "imageFile": "forehead-threading.webp",
        "image": "/images/services/06-threading-and-face-grooming/forehead-threading.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Forehead Threading - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional forehead threading delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated forehead threading service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹50",
        "duration": "15-20 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of forehead threading",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Forehead Threading appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Forehead Threading typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Forehead Threading?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "eyebrow-threading",
                "name": "Eyebrow Threading",
                "price": "₹50"
            },
            {
                "id": "upper-lip-threading",
                "name": "Upper Lip Threading",
                "price": "₹50"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "chin-threading",
        "slug": "chin-threading",
        "name": "Chin Threading",
        "category": "Threading & Face Grooming",
        "folder": "06-threading-and-face-grooming",
        "imageFile": "chin-threading.webp",
        "image": "/images/services/06-threading-and-face-grooming/chin-threading.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Chin Threading - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional chin threading delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated chin threading service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹50",
        "duration": "15-20 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of chin threading",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Chin Threading appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Chin Threading typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Chin Threading?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "eyebrow-threading",
                "name": "Eyebrow Threading",
                "price": "₹50"
            },
            {
                "id": "upper-lip-threading",
                "name": "Upper Lip Threading",
                "price": "₹50"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "side-locks-threading",
        "slug": "side-locks-threading",
        "name": "Side Locks Threading",
        "category": "Threading & Face Grooming",
        "folder": "06-threading-and-face-grooming",
        "imageFile": "side-locks-threading.webp",
        "image": "/images/services/06-threading-and-face-grooming/side-locks-threading.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Side Locks Threading - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional side locks threading delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated side locks threading service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹50",
        "duration": "15-20 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of side locks threading",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Side Locks Threading appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Side Locks Threading typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Side Locks Threading?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "eyebrow-threading",
                "name": "Eyebrow Threading",
                "price": "₹50"
            },
            {
                "id": "upper-lip-threading",
                "name": "Upper Lip Threading",
                "price": "₹50"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "full-face-threading",
        "slug": "full-face-threading",
        "name": "Full Face Threading",
        "category": "Threading & Face Grooming",
        "folder": "06-threading-and-face-grooming",
        "imageFile": "full-face-threading.webp",
        "image": "/images/services/06-threading-and-face-grooming/full-face-threading.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Full Face Threading - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional full face threading delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated full face threading service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹250",
        "duration": "15-20 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of full face threading",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Full Face Threading appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Full Face Threading typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Full Face Threading?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "eyebrow-threading",
                "name": "Eyebrow Threading",
                "price": "₹50"
            },
            {
                "id": "upper-lip-threading",
                "name": "Upper Lip Threading",
                "price": "₹50"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "eyebrow-shaping",
        "slug": "eyebrow-shaping",
        "name": "Eyebrow Shaping",
        "category": "Threading & Face Grooming",
        "folder": "06-threading-and-face-grooming",
        "imageFile": "eyebrow-shaping.webp",
        "image": "/images/services/06-threading-and-face-grooming/eyebrow-shaping.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Eyebrow Shaping - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional eyebrow shaping delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated eyebrow shaping service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹50",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of eyebrow shaping",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Eyebrow Shaping appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Eyebrow Shaping typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Eyebrow Shaping?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "eyebrow-threading",
                "name": "Eyebrow Threading",
                "price": "₹50"
            },
            {
                "id": "upper-lip-threading",
                "name": "Upper Lip Threading",
                "price": "₹50"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "eyebrow-tinting",
        "slug": "eyebrow-tinting",
        "name": "Eyebrow Tinting",
        "category": "Threading & Face Grooming",
        "folder": "06-threading-and-face-grooming",
        "imageFile": "eyebrow-tinting.webp",
        "image": "/images/services/06-threading-and-face-grooming/eyebrow-tinting.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Eyebrow Tinting - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional eyebrow tinting delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated eyebrow tinting service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹300",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of eyebrow tinting",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Eyebrow Tinting appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Eyebrow Tinting typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Eyebrow Tinting?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "eyebrow-threading",
                "name": "Eyebrow Threading",
                "price": "₹50"
            },
            {
                "id": "upper-lip-threading",
                "name": "Upper Lip Threading",
                "price": "₹50"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "eyebrow-lamination",
        "slug": "eyebrow-lamination",
        "name": "Eyebrow Lamination",
        "category": "Threading & Face Grooming",
        "folder": "06-threading-and-face-grooming",
        "imageFile": "eyebrow-lamination.webp",
        "image": "/images/services/06-threading-and-face-grooming/eyebrow-lamination.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Eyebrow Lamination - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional eyebrow lamination delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated eyebrow lamination service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,500",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of eyebrow lamination",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Eyebrow Lamination appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Eyebrow Lamination typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Eyebrow Lamination?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "eyebrow-threading",
                "name": "Eyebrow Threading",
                "price": "₹50"
            },
            {
                "id": "upper-lip-threading",
                "name": "Upper Lip Threading",
                "price": "₹50"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "eyelash-tinting",
        "slug": "eyelash-tinting",
        "name": "Eyelash Tinting",
        "category": "Threading & Face Grooming",
        "folder": "06-threading-and-face-grooming",
        "imageFile": "eyelash-tinting.webp",
        "image": "/images/services/06-threading-and-face-grooming/eyelash-tinting.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Eyelash Tinting - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional eyelash tinting delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated eyelash tinting service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹300",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of eyelash tinting",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Eyelash Tinting appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Eyelash Tinting typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Eyelash Tinting?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "eyebrow-threading",
                "name": "Eyebrow Threading",
                "price": "₹50"
            },
            {
                "id": "upper-lip-threading",
                "name": "Upper Lip Threading",
                "price": "₹50"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "eyelash-extensions",
        "slug": "eyelash-extensions",
        "name": "Eyelash Extensions",
        "category": "Threading & Face Grooming",
        "folder": "06-threading-and-face-grooming",
        "imageFile": "eyelash-extensions.webp",
        "image": "/images/services/06-threading-and-face-grooming/eyelash-extensions.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Eyelash Extensions - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional eyelash extensions delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated eyelash extensions service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,500",
        "duration": "60-90 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of eyelash extensions",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Eyelash Extensions appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Eyelash Extensions typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Eyelash Extensions?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "eyebrow-threading",
                "name": "Eyebrow Threading",
                "price": "₹50"
            },
            {
                "id": "upper-lip-threading",
                "name": "Upper Lip Threading",
                "price": "₹50"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "lash-lift",
        "slug": "lash-lift",
        "name": "Lash Lift",
        "category": "Threading & Face Grooming",
        "folder": "06-threading-and-face-grooming",
        "imageFile": "lash-lift.webp",
        "image": "/images/services/06-threading-and-face-grooming/lash-lift.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Lash Lift - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional lash lift delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated lash lift service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,500",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of lash lift",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Lash Lift appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Lash Lift typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Lash Lift?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "eyebrow-threading",
                "name": "Eyebrow Threading",
                "price": "₹50"
            },
            {
                "id": "upper-lip-threading",
                "name": "Upper Lip Threading",
                "price": "₹50"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "false-eyelash-application",
        "slug": "false-eyelash-application",
        "name": "False Eyelash Application",
        "category": "Threading & Face Grooming",
        "folder": "06-threading-and-face-grooming",
        "imageFile": "false-eyelash-application.webp",
        "image": "/images/services/06-threading-and-face-grooming/false-eyelash-application.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "False Eyelash Application - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional false eyelash application delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated false eyelash application service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of false eyelash application",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my False Eyelash Application appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of False Eyelash Application typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for False Eyelash Application?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "eyebrow-threading",
                "name": "Eyebrow Threading",
                "price": "₹50"
            },
            {
                "id": "upper-lip-threading",
                "name": "Upper Lip Threading",
                "price": "₹50"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "upper-lip-waxing",
        "slug": "upper-lip-waxing",
        "name": "Upper Lip Waxing",
        "category": "Waxing",
        "folder": "07-waxing",
        "imageFile": "upper-lip-waxing.webp",
        "image": "/images/services/07-waxing/upper-lip-waxing.webp",
        "fallbackVar": "bodySpa",
        "imageAlt": "Upper Lip Waxing - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional upper lip waxing delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated upper lip waxing service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹150",
        "duration": "30-45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of upper lip waxing",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Upper Lip Waxing appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Upper Lip Waxing typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Upper Lip Waxing?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "full-face-waxing",
                "name": "Full Face Waxing",
                "price": "₹350"
            },
            {
                "id": "underarm-waxing",
                "name": "Underarm Waxing",
                "price": "₹150"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": true
    },
    {
        "id": "full-face-waxing",
        "slug": "full-face-waxing",
        "name": "Full Face Waxing",
        "category": "Waxing",
        "folder": "07-waxing",
        "imageFile": "full-face-waxing.webp",
        "image": "/images/services/07-waxing/full-face-waxing.webp",
        "fallbackVar": "bodySpa",
        "imageAlt": "Full Face Waxing - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional full face waxing delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated full face waxing service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹350",
        "duration": "30-45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of full face waxing",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Full Face Waxing appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Full Face Waxing typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Full Face Waxing?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "upper-lip-waxing",
                "name": "Upper Lip Waxing",
                "price": "₹150"
            },
            {
                "id": "underarm-waxing",
                "name": "Underarm Waxing",
                "price": "₹150"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": true
    },
    {
        "id": "underarm-waxing",
        "slug": "underarm-waxing",
        "name": "Underarm Waxing",
        "category": "Waxing",
        "folder": "07-waxing",
        "imageFile": "underarm-waxing.webp",
        "image": "/images/services/07-waxing/underarm-waxing.webp",
        "fallbackVar": "bodySpa",
        "imageAlt": "Underarm Waxing - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional underarm waxing delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated underarm waxing service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹150",
        "duration": "30-45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of underarm waxing",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Underarm Waxing appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Underarm Waxing typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Underarm Waxing?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "upper-lip-waxing",
                "name": "Upper Lip Waxing",
                "price": "₹150"
            },
            {
                "id": "full-face-waxing",
                "name": "Full Face Waxing",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "half-arms-waxing",
        "slug": "half-arms-waxing",
        "name": "Half Arms Waxing",
        "category": "Waxing",
        "folder": "07-waxing",
        "imageFile": "half-arms-waxing.webp",
        "image": "/images/services/07-waxing/half-arms-waxing.webp",
        "fallbackVar": "bodySpa",
        "imageAlt": "Half Arms Waxing - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional half arms waxing delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated half arms waxing service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹150",
        "duration": "30-45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of half arms waxing",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Half Arms Waxing appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Half Arms Waxing typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Half Arms Waxing?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "upper-lip-waxing",
                "name": "Upper Lip Waxing",
                "price": "₹150"
            },
            {
                "id": "full-face-waxing",
                "name": "Full Face Waxing",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "full-arms-waxing",
        "slug": "full-arms-waxing",
        "name": "Full Arms Waxing",
        "category": "Waxing",
        "folder": "07-waxing",
        "imageFile": "full-arms-waxing.webp",
        "image": "/images/services/07-waxing/full-arms-waxing.webp",
        "fallbackVar": "bodySpa",
        "imageAlt": "Full Arms Waxing - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional full arms waxing delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated full arms waxing service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹450",
        "duration": "30-45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of full arms waxing",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Full Arms Waxing appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Full Arms Waxing typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Full Arms Waxing?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "upper-lip-waxing",
                "name": "Upper Lip Waxing",
                "price": "₹150"
            },
            {
                "id": "full-face-waxing",
                "name": "Full Face Waxing",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "half-legs-waxing",
        "slug": "half-legs-waxing",
        "name": "Half Legs Waxing",
        "category": "Waxing",
        "folder": "07-waxing",
        "imageFile": "half-legs-waxing.webp",
        "image": "/images/services/07-waxing/half-legs-waxing.webp",
        "fallbackVar": "bodySpa",
        "imageAlt": "Half Legs Waxing - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional half legs waxing delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated half legs waxing service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹150",
        "duration": "30-45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of half legs waxing",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Half Legs Waxing appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Half Legs Waxing typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Half Legs Waxing?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "upper-lip-waxing",
                "name": "Upper Lip Waxing",
                "price": "₹150"
            },
            {
                "id": "full-face-waxing",
                "name": "Full Face Waxing",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "full-legs-waxing",
        "slug": "full-legs-waxing",
        "name": "Full Legs Waxing",
        "category": "Waxing",
        "folder": "07-waxing",
        "imageFile": "full-legs-waxing.webp",
        "image": "/images/services/07-waxing/full-legs-waxing.webp",
        "fallbackVar": "bodySpa",
        "imageAlt": "Full Legs Waxing - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional full legs waxing delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated full legs waxing service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹650",
        "duration": "30-45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of full legs waxing",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Full Legs Waxing appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Full Legs Waxing typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Full Legs Waxing?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "upper-lip-waxing",
                "name": "Upper Lip Waxing",
                "price": "₹150"
            },
            {
                "id": "full-face-waxing",
                "name": "Full Face Waxing",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "full-body-waxing",
        "slug": "full-body-waxing",
        "name": "Full Body Waxing",
        "category": "Waxing",
        "folder": "07-waxing",
        "imageFile": "full-body-waxing.webp",
        "image": "/images/services/07-waxing/full-body-waxing.webp",
        "fallbackVar": "bodySpa",
        "imageAlt": "Full Body Waxing - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional full body waxing delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated full body waxing service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,800",
        "duration": "30-45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of full body waxing",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Full Body Waxing appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Full Body Waxing typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Full Body Waxing?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "upper-lip-waxing",
                "name": "Upper Lip Waxing",
                "price": "₹150"
            },
            {
                "id": "full-face-waxing",
                "name": "Full Face Waxing",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "back-waxing",
        "slug": "back-waxing",
        "name": "Back Waxing",
        "category": "Waxing",
        "folder": "07-waxing",
        "imageFile": "back-waxing.webp",
        "image": "/images/services/07-waxing/back-waxing.webp",
        "fallbackVar": "bodySpa",
        "imageAlt": "Back Waxing - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional back waxing delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated back waxing service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹150",
        "duration": "30-45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of back waxing",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Back Waxing appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Back Waxing typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Back Waxing?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "upper-lip-waxing",
                "name": "Upper Lip Waxing",
                "price": "₹150"
            },
            {
                "id": "full-face-waxing",
                "name": "Full Face Waxing",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "stomach-waxing",
        "slug": "stomach-waxing",
        "name": "Stomach Waxing",
        "category": "Waxing",
        "folder": "07-waxing",
        "imageFile": "stomach-waxing.webp",
        "image": "/images/services/07-waxing/stomach-waxing.webp",
        "fallbackVar": "bodySpa",
        "imageAlt": "Stomach Waxing - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional stomach waxing delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated stomach waxing service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹150",
        "duration": "30-45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of stomach waxing",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Stomach Waxing appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Stomach Waxing typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Stomach Waxing?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "upper-lip-waxing",
                "name": "Upper Lip Waxing",
                "price": "₹150"
            },
            {
                "id": "full-face-waxing",
                "name": "Full Face Waxing",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "bikini-line-waxing",
        "slug": "bikini-line-waxing",
        "name": "Bikini Line Waxing",
        "category": "Waxing",
        "folder": "07-waxing",
        "imageFile": "bikini-line-waxing.webp",
        "image": "/images/services/07-waxing/bikini-line-waxing.webp",
        "fallbackVar": "bodySpa",
        "imageAlt": "Bikini Line Waxing - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional bikini line waxing delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated bikini line waxing service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹150",
        "duration": "30-45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of bikini line waxing",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Bikini Line Waxing appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Bikini Line Waxing typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Bikini Line Waxing?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "upper-lip-waxing",
                "name": "Upper Lip Waxing",
                "price": "₹150"
            },
            {
                "id": "full-face-waxing",
                "name": "Full Face Waxing",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "honey-wax",
        "slug": "honey-wax",
        "name": "Honey Wax",
        "category": "Waxing",
        "folder": "07-waxing",
        "imageFile": "honey-wax.webp",
        "image": "/images/services/07-waxing/honey-wax.webp",
        "fallbackVar": "bodySpa",
        "imageAlt": "Honey Wax - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional honey wax delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated honey wax service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹150",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of honey wax",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Honey Wax appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Honey Wax typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Honey Wax?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "upper-lip-waxing",
                "name": "Upper Lip Waxing",
                "price": "₹150"
            },
            {
                "id": "full-face-waxing",
                "name": "Full Face Waxing",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "chocolate-wax",
        "slug": "chocolate-wax",
        "name": "Chocolate Wax",
        "category": "Waxing",
        "folder": "07-waxing",
        "imageFile": "chocolate-wax.webp",
        "image": "/images/services/07-waxing/chocolate-wax.webp",
        "fallbackVar": "bodySpa",
        "imageAlt": "Chocolate Wax - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional chocolate wax delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated chocolate wax service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹900",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of chocolate wax",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Chocolate Wax appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Chocolate Wax typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Chocolate Wax?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "upper-lip-waxing",
                "name": "Upper Lip Waxing",
                "price": "₹150"
            },
            {
                "id": "full-face-waxing",
                "name": "Full Face Waxing",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "rica-wax",
        "slug": "rica-wax",
        "name": "Rica Wax",
        "category": "Waxing",
        "folder": "07-waxing",
        "imageFile": "rica-wax.webp",
        "image": "/images/services/07-waxing/rica-wax.webp",
        "fallbackVar": "bodySpa",
        "imageAlt": "Rica Wax - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional rica wax delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated rica wax service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹900",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of rica wax",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Rica Wax appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Rica Wax typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Rica Wax?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "upper-lip-waxing",
                "name": "Upper Lip Waxing",
                "price": "₹150"
            },
            {
                "id": "full-face-waxing",
                "name": "Full Face Waxing",
                "price": "₹350"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "kerala-bridal-makeup",
        "slug": "kerala-bridal-makeup",
        "name": "Kerala Bridal Makeup",
        "category": "Bridal Makeup & Special Occasion Makeup",
        "folder": "08-bridal-and-special-occasion-makeup",
        "imageFile": "kerala-bridal-makeup.webp",
        "image": "/images/services/08-bridal-and-special-occasion-makeup/kerala-bridal-makeup.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Kerala Bridal Makeup - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional kerala bridal makeup delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated kerala bridal makeup service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹15,000",
        "duration": "3-4 Hours",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of kerala bridal makeup",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Kerala Bridal Makeup appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Kerala Bridal Makeup typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Kerala Bridal Makeup?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "traditional-bridal-makeup",
                "name": "Traditional Bridal Makeup",
                "price": "₹15,000"
            },
            {
                "id": "bridal-makeup",
                "name": "HD Bridal Makeup",
                "price": "₹15,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": true
    },
    {
        "id": "traditional-bridal-makeup",
        "slug": "traditional-bridal-makeup",
        "name": "Traditional Bridal Makeup",
        "category": "Bridal Makeup & Special Occasion Makeup",
        "folder": "08-bridal-and-special-occasion-makeup",
        "imageFile": "traditional-bridal-makeup.webp",
        "image": "/images/services/08-bridal-and-special-occasion-makeup/traditional-bridal-makeup.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Traditional Bridal Makeup - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional traditional bridal makeup delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated traditional bridal makeup service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹15,000",
        "duration": "3-4 Hours",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of traditional bridal makeup",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Traditional Bridal Makeup appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Traditional Bridal Makeup typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Traditional Bridal Makeup?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "kerala-bridal-makeup",
                "name": "Kerala Bridal Makeup",
                "price": "₹15,000"
            },
            {
                "id": "bridal-makeup",
                "name": "HD Bridal Makeup",
                "price": "₹15,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": true
    },
    {
        "id": "bridal-makeup",
        "slug": "hd-bridal-makeup",
        "name": "HD Bridal Makeup",
        "category": "Bridal Makeup & Special Occasion Makeup",
        "folder": "08-bridal-and-special-occasion-makeup",
        "imageFile": "hd-bridal-makeup.webp",
        "image": "/images/services/08-bridal-and-special-occasion-makeup/hd-bridal-makeup.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "HD Bridal Makeup - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional hd bridal makeup delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated hd bridal makeup service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹15,000",
        "duration": "3-4 Hours",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of hd bridal makeup",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my HD Bridal Makeup appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of HD Bridal Makeup typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for HD Bridal Makeup?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "kerala-bridal-makeup",
                "name": "Kerala Bridal Makeup",
                "price": "₹15,000"
            },
            {
                "id": "traditional-bridal-makeup",
                "name": "Traditional Bridal Makeup",
                "price": "₹15,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "airbrush-bridal",
        "slug": "airbrush-bridal-makeup",
        "name": "Airbrush Bridal Makeup",
        "category": "Bridal Makeup & Special Occasion Makeup",
        "folder": "08-bridal-and-special-occasion-makeup",
        "imageFile": "airbrush-bridal-makeup.webp",
        "image": "/images/services/08-bridal-and-special-occasion-makeup/airbrush-bridal-makeup.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Airbrush Bridal Makeup - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional airbrush bridal makeup delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated airbrush bridal makeup service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹22,000",
        "duration": "3-4 Hours",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of airbrush bridal makeup",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Airbrush Bridal Makeup appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Airbrush Bridal Makeup typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Airbrush Bridal Makeup?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "kerala-bridal-makeup",
                "name": "Kerala Bridal Makeup",
                "price": "₹15,000"
            },
            {
                "id": "traditional-bridal-makeup",
                "name": "Traditional Bridal Makeup",
                "price": "₹15,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "engagement-makeup",
        "slug": "engagement-makeup",
        "name": "Engagement Makeup",
        "category": "Bridal Makeup & Special Occasion Makeup",
        "folder": "08-bridal-and-special-occasion-makeup",
        "imageFile": "engagement-makeup.webp",
        "image": "/images/services/08-bridal-and-special-occasion-makeup/engagement-makeup.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Engagement Makeup - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional engagement makeup delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated engagement makeup service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹8,000",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of engagement makeup",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Engagement Makeup appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Engagement Makeup typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Engagement Makeup?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "kerala-bridal-makeup",
                "name": "Kerala Bridal Makeup",
                "price": "₹15,000"
            },
            {
                "id": "traditional-bridal-makeup",
                "name": "Traditional Bridal Makeup",
                "price": "₹15,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "reception-makeup",
        "slug": "reception-makeup",
        "name": "Reception Makeup",
        "category": "Bridal Makeup & Special Occasion Makeup",
        "folder": "08-bridal-and-special-occasion-makeup",
        "imageFile": "reception-makeup.webp",
        "image": "/images/services/08-bridal-and-special-occasion-makeup/reception-makeup.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Reception Makeup - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional reception makeup delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated reception makeup service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹8,000",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of reception makeup",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Reception Makeup appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Reception Makeup typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Reception Makeup?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "kerala-bridal-makeup",
                "name": "Kerala Bridal Makeup",
                "price": "₹15,000"
            },
            {
                "id": "traditional-bridal-makeup",
                "name": "Traditional Bridal Makeup",
                "price": "₹15,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "party-makeup",
        "slug": "party-makeup",
        "name": "Party Makeup",
        "category": "Bridal Makeup & Special Occasion Makeup",
        "folder": "08-bridal-and-special-occasion-makeup",
        "imageFile": "party-makeup.webp",
        "image": "/images/services/08-bridal-and-special-occasion-makeup/party-makeup.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Party Makeup - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional party makeup delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated party makeup service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹3,500",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of party makeup",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Party Makeup appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Party Makeup typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Party Makeup?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "kerala-bridal-makeup",
                "name": "Kerala Bridal Makeup",
                "price": "₹15,000"
            },
            {
                "id": "traditional-bridal-makeup",
                "name": "Traditional Bridal Makeup",
                "price": "₹15,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "natural-makeup",
        "slug": "natural-makeup",
        "name": "Natural Makeup",
        "category": "Bridal Makeup & Special Occasion Makeup",
        "folder": "08-bridal-and-special-occasion-makeup",
        "imageFile": "natural-makeup.webp",
        "image": "/images/services/08-bridal-and-special-occasion-makeup/natural-makeup.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Natural Makeup - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional natural makeup delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated natural makeup service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹2,500",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of natural makeup",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Natural Makeup appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Natural Makeup typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Natural Makeup?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "kerala-bridal-makeup",
                "name": "Kerala Bridal Makeup",
                "price": "₹15,000"
            },
            {
                "id": "traditional-bridal-makeup",
                "name": "Traditional Bridal Makeup",
                "price": "₹15,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "soft-glam-makeup",
        "slug": "soft-glam-makeup",
        "name": "Soft Glam Makeup",
        "category": "Bridal Makeup & Special Occasion Makeup",
        "folder": "08-bridal-and-special-occasion-makeup",
        "imageFile": "soft-glam-makeup.webp",
        "image": "/images/services/08-bridal-and-special-occasion-makeup/soft-glam-makeup.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Soft Glam Makeup - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional soft glam makeup delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated soft glam makeup service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹2,500",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of soft glam makeup",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Soft Glam Makeup appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Soft Glam Makeup typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Soft Glam Makeup?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "kerala-bridal-makeup",
                "name": "Kerala Bridal Makeup",
                "price": "₹15,000"
            },
            {
                "id": "traditional-bridal-makeup",
                "name": "Traditional Bridal Makeup",
                "price": "₹15,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "evening-makeup",
        "slug": "evening-makeup",
        "name": "Evening Makeup",
        "category": "Bridal Makeup & Special Occasion Makeup",
        "folder": "08-bridal-and-special-occasion-makeup",
        "imageFile": "evening-makeup.webp",
        "image": "/images/services/08-bridal-and-special-occasion-makeup/evening-makeup.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Evening Makeup - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional evening makeup delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated evening makeup service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹3,500",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of evening makeup",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Evening Makeup appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Evening Makeup typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Evening Makeup?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "kerala-bridal-makeup",
                "name": "Kerala Bridal Makeup",
                "price": "₹15,000"
            },
            {
                "id": "traditional-bridal-makeup",
                "name": "Traditional Bridal Makeup",
                "price": "₹15,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "wedding-guest-makeup",
        "slug": "wedding-guest-makeup",
        "name": "Wedding Guest Makeup",
        "category": "Bridal Makeup & Special Occasion Makeup",
        "folder": "08-bridal-and-special-occasion-makeup",
        "imageFile": "wedding-guest-makeup.webp",
        "image": "/images/services/08-bridal-and-special-occasion-makeup/wedding-guest-makeup.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Wedding Guest Makeup - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional wedding guest makeup delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated wedding guest makeup service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹2,500",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of wedding guest makeup",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Wedding Guest Makeup appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Wedding Guest Makeup typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Wedding Guest Makeup?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "kerala-bridal-makeup",
                "name": "Kerala Bridal Makeup",
                "price": "₹15,000"
            },
            {
                "id": "traditional-bridal-makeup",
                "name": "Traditional Bridal Makeup",
                "price": "₹15,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "bridesmaid-makeup",
        "slug": "bridesmaid-makeup",
        "name": "Bridesmaid Makeup",
        "category": "Bridal Makeup & Special Occasion Makeup",
        "folder": "08-bridal-and-special-occasion-makeup",
        "imageFile": "bridesmaid-makeup.webp",
        "image": "/images/services/08-bridal-and-special-occasion-makeup/bridesmaid-makeup.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Bridesmaid Makeup - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional bridesmaid makeup delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated bridesmaid makeup service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of bridesmaid makeup",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Bridesmaid Makeup appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Bridesmaid Makeup typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Bridesmaid Makeup?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "kerala-bridal-makeup",
                "name": "Kerala Bridal Makeup",
                "price": "₹15,000"
            },
            {
                "id": "traditional-bridal-makeup",
                "name": "Traditional Bridal Makeup",
                "price": "₹15,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "photoshoot-makeup",
        "slug": "photoshoot-makeup",
        "name": "Photoshoot Makeup",
        "category": "Bridal Makeup & Special Occasion Makeup",
        "folder": "08-bridal-and-special-occasion-makeup",
        "imageFile": "photoshoot-makeup.webp",
        "image": "/images/services/08-bridal-and-special-occasion-makeup/photoshoot-makeup.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Photoshoot Makeup - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional photoshoot makeup delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated photoshoot makeup service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of photoshoot makeup",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Photoshoot Makeup appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Photoshoot Makeup typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Photoshoot Makeup?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "kerala-bridal-makeup",
                "name": "Kerala Bridal Makeup",
                "price": "₹15,000"
            },
            {
                "id": "traditional-bridal-makeup",
                "name": "Traditional Bridal Makeup",
                "price": "₹15,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "bridal-makeup-trial",
        "slug": "bridal-makeup-trial",
        "name": "Bridal Makeup Trial",
        "category": "Bridal Makeup & Special Occasion Makeup",
        "folder": "08-bridal-and-special-occasion-makeup",
        "imageFile": "bridal-makeup-trial.webp",
        "image": "/images/services/08-bridal-and-special-occasion-makeup/bridal-makeup-trial.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Bridal Makeup Trial - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional bridal makeup trial delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated bridal makeup trial service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹3,500",
        "duration": "3-4 Hours",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of bridal makeup trial",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Bridal Makeup Trial appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Bridal Makeup Trial typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Bridal Makeup Trial?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "kerala-bridal-makeup",
                "name": "Kerala Bridal Makeup",
                "price": "₹15,000"
            },
            {
                "id": "traditional-bridal-makeup",
                "name": "Traditional Bridal Makeup",
                "price": "₹15,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "bridal-hairstyling",
        "slug": "bridal-hairstyling",
        "name": "Bridal Hairstyling",
        "category": "Bridal Makeup & Special Occasion Makeup",
        "folder": "08-bridal-and-special-occasion-makeup",
        "imageFile": "bridal-hairstyling.webp",
        "image": "/images/services/08-bridal-and-special-occasion-makeup/bridal-hairstyling.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Bridal Hairstyling - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional bridal hairstyling delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated bridal hairstyling service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of bridal hairstyling",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Bridal Hairstyling appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Bridal Hairstyling typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Bridal Hairstyling?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "kerala-bridal-makeup",
                "name": "Kerala Bridal Makeup",
                "price": "₹15,000"
            },
            {
                "id": "traditional-bridal-makeup",
                "name": "Traditional Bridal Makeup",
                "price": "₹15,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "bridal-saree-draping",
        "slug": "bridal-saree-draping",
        "name": "Bridal Saree Draping",
        "category": "Bridal Makeup & Special Occasion Makeup",
        "folder": "08-bridal-and-special-occasion-makeup",
        "imageFile": "bridal-saree-draping.webp",
        "image": "/images/services/08-bridal-and-special-occasion-makeup/bridal-saree-draping.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Bridal Saree Draping - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional bridal saree draping delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated bridal saree draping service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of bridal saree draping",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Bridal Saree Draping appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Bridal Saree Draping typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Bridal Saree Draping?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "kerala-bridal-makeup",
                "name": "Kerala Bridal Makeup",
                "price": "₹15,000"
            },
            {
                "id": "traditional-bridal-makeup",
                "name": "Traditional Bridal Makeup",
                "price": "₹15,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "traditional-saree-draping",
        "slug": "traditional-saree-draping",
        "name": "Traditional Saree Draping",
        "category": "Bridal Makeup & Special Occasion Makeup",
        "folder": "08-bridal-and-special-occasion-makeup",
        "imageFile": "traditional-saree-draping.webp",
        "image": "/images/services/08-bridal-and-special-occasion-makeup/traditional-saree-draping.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Traditional Saree Draping - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional traditional saree draping delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated traditional saree draping service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of traditional saree draping",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Traditional Saree Draping appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Traditional Saree Draping typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Traditional Saree Draping?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "kerala-bridal-makeup",
                "name": "Kerala Bridal Makeup",
                "price": "₹15,000"
            },
            {
                "id": "traditional-bridal-makeup",
                "name": "Traditional Bridal Makeup",
                "price": "₹15,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "false-eyelash-application",
        "slug": "false-eyelash-application",
        "name": "False Eyelash Application",
        "category": "Bridal Makeup & Special Occasion Makeup",
        "folder": "08-bridal-and-special-occasion-makeup",
        "imageFile": "false-eyelash-application.webp",
        "image": "/images/services/08-bridal-and-special-occasion-makeup/false-eyelash-application.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "False Eyelash Application - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional false eyelash application delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated false eyelash application service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of false eyelash application",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my False Eyelash Application appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of False Eyelash Application typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for False Eyelash Application?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "kerala-bridal-makeup",
                "name": "Kerala Bridal Makeup",
                "price": "₹15,000"
            },
            {
                "id": "traditional-bridal-makeup",
                "name": "Traditional Bridal Makeup",
                "price": "₹15,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "complete-bridal-makeup-package",
        "slug": "complete-bridal-makeup-package",
        "name": "Complete Bridal Makeup Package",
        "category": "Bridal Makeup & Special Occasion Makeup",
        "folder": "08-bridal-and-special-occasion-makeup",
        "imageFile": "complete-bridal-makeup-package.webp",
        "image": "/images/services/08-bridal-and-special-occasion-makeup/complete-bridal-makeup-package.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Complete Bridal Makeup Package - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional complete bridal makeup package delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated complete bridal makeup package service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹25,000",
        "duration": "3-4 Hours",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of complete bridal makeup package",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Complete Bridal Makeup Package appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Complete Bridal Makeup Package typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Complete Bridal Makeup Package?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "kerala-bridal-makeup",
                "name": "Kerala Bridal Makeup",
                "price": "₹15,000"
            },
            {
                "id": "traditional-bridal-makeup",
                "name": "Traditional Bridal Makeup",
                "price": "₹15,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "pre-bridal-package",
        "slug": "pre-bridal-package",
        "name": "Pre-Bridal Package",
        "category": "Bridal Makeup & Special Occasion Makeup",
        "folder": "08-bridal-and-special-occasion-makeup",
        "imageFile": "pre-bridal-package.webp",
        "image": "/images/services/08-bridal-and-special-occasion-makeup/pre-bridal-package.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Pre-Bridal Package - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional pre-bridal package delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated pre-bridal package service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹6,500",
        "duration": "2-3 Hours",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of pre-bridal package",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Pre-Bridal Package appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Pre-Bridal Package typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Pre-Bridal Package?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "kerala-bridal-makeup",
                "name": "Kerala Bridal Makeup",
                "price": "₹15,000"
            },
            {
                "id": "traditional-bridal-makeup",
                "name": "Traditional Bridal Makeup",
                "price": "₹15,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "basic-manicure",
        "slug": "basic-manicure",
        "name": "Basic Manicure",
        "category": "Manicure, Pedicure & Nail Care",
        "folder": "09-manicure-pedicure-and-nail-care",
        "imageFile": "basic-manicure.webp",
        "image": "/images/services/09-manicure-pedicure-and-nail-care/basic-manicure.webp",
        "fallbackVar": "pedicureSpa",
        "imageAlt": "Basic Manicure - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional basic manicure delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated basic manicure service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹600",
        "duration": "45-60 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of basic manicure",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Basic Manicure appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Basic Manicure typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Basic Manicure?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "manicure",
                "name": "Spa Manicure",
                "price": "₹600"
            },
            {
                "id": "premium-manicure",
                "name": "Premium Manicure",
                "price": "₹600"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": true
    },
    {
        "id": "manicure",
        "slug": "spa-manicure",
        "name": "Spa Manicure",
        "category": "Manicure, Pedicure & Nail Care",
        "folder": "09-manicure-pedicure-and-nail-care",
        "imageFile": "spa-manicure.webp",
        "image": "/images/services/09-manicure-pedicure-and-nail-care/spa-manicure.webp",
        "fallbackVar": "pedicureSpa",
        "imageAlt": "Spa Manicure - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional spa manicure delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated spa manicure service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹600",
        "duration": "45-60 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of spa manicure",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Spa Manicure appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Spa Manicure typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Spa Manicure?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-manicure",
                "name": "Basic Manicure",
                "price": "₹600"
            },
            {
                "id": "premium-manicure",
                "name": "Premium Manicure",
                "price": "₹600"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": true
    },
    {
        "id": "premium-manicure",
        "slug": "premium-manicure",
        "name": "Premium Manicure",
        "category": "Manicure, Pedicure & Nail Care",
        "folder": "09-manicure-pedicure-and-nail-care",
        "imageFile": "premium-manicure.webp",
        "image": "/images/services/09-manicure-pedicure-and-nail-care/premium-manicure.webp",
        "fallbackVar": "pedicureSpa",
        "imageAlt": "Premium Manicure - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional premium manicure delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated premium manicure service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹600",
        "duration": "45-60 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of premium manicure",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Premium Manicure appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Premium Manicure typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Premium Manicure?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-manicure",
                "name": "Basic Manicure",
                "price": "₹600"
            },
            {
                "id": "manicure",
                "name": "Spa Manicure",
                "price": "₹600"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "gel-manicure",
        "slug": "gel-manicure",
        "name": "Gel Manicure",
        "category": "Manicure, Pedicure & Nail Care",
        "folder": "09-manicure-pedicure-and-nail-care",
        "imageFile": "gel-manicure.webp",
        "image": "/images/services/09-manicure-pedicure-and-nail-care/gel-manicure.webp",
        "fallbackVar": "pedicureSpa",
        "imageAlt": "Gel Manicure - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional gel manicure delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated gel manicure service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹600",
        "duration": "45-60 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of gel manicure",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Gel Manicure appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Gel Manicure typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Gel Manicure?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-manicure",
                "name": "Basic Manicure",
                "price": "₹600"
            },
            {
                "id": "manicure",
                "name": "Spa Manicure",
                "price": "₹600"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "basic-pedicure",
        "slug": "basic-pedicure",
        "name": "Basic Pedicure",
        "category": "Manicure, Pedicure & Nail Care",
        "folder": "09-manicure-pedicure-and-nail-care",
        "imageFile": "basic-pedicure.webp",
        "image": "/images/services/09-manicure-pedicure-and-nail-care/basic-pedicure.webp",
        "fallbackVar": "pedicureSpa",
        "imageAlt": "Basic Pedicure - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional basic pedicure delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated basic pedicure service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹750",
        "duration": "45-60 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of basic pedicure",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Basic Pedicure appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Basic Pedicure typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Basic Pedicure?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-manicure",
                "name": "Basic Manicure",
                "price": "₹600"
            },
            {
                "id": "manicure",
                "name": "Spa Manicure",
                "price": "₹600"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "pedicure",
        "slug": "spa-pedicure",
        "name": "Spa Pedicure",
        "category": "Manicure, Pedicure & Nail Care",
        "folder": "09-manicure-pedicure-and-nail-care",
        "imageFile": "spa-pedicure.webp",
        "image": "/images/services/09-manicure-pedicure-and-nail-care/spa-pedicure.webp",
        "fallbackVar": "pedicureSpa",
        "imageAlt": "Spa Pedicure - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional spa pedicure delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated spa pedicure service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹750",
        "duration": "45-60 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of spa pedicure",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Spa Pedicure appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Spa Pedicure typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Spa Pedicure?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-manicure",
                "name": "Basic Manicure",
                "price": "₹600"
            },
            {
                "id": "manicure",
                "name": "Spa Manicure",
                "price": "₹600"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "premium-pedicure",
        "slug": "premium-pedicure",
        "name": "Premium Pedicure",
        "category": "Manicure, Pedicure & Nail Care",
        "folder": "09-manicure-pedicure-and-nail-care",
        "imageFile": "premium-pedicure.webp",
        "image": "/images/services/09-manicure-pedicure-and-nail-care/premium-pedicure.webp",
        "fallbackVar": "pedicureSpa",
        "imageAlt": "Premium Pedicure - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional premium pedicure delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated premium pedicure service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹750",
        "duration": "45-60 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of premium pedicure",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Premium Pedicure appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Premium Pedicure typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Premium Pedicure?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-manicure",
                "name": "Basic Manicure",
                "price": "₹600"
            },
            {
                "id": "manicure",
                "name": "Spa Manicure",
                "price": "₹600"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "heel-care",
        "slug": "heel-care",
        "name": "Heel Care",
        "category": "Manicure, Pedicure & Nail Care",
        "folder": "09-manicure-pedicure-and-nail-care",
        "imageFile": "heel-care.webp",
        "image": "/images/services/09-manicure-pedicure-and-nail-care/heel-care.webp",
        "fallbackVar": "pedicureSpa",
        "imageAlt": "Heel Care - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional heel care delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated heel care service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of heel care",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Heel Care appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Heel Care typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Heel Care?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-manicure",
                "name": "Basic Manicure",
                "price": "₹600"
            },
            {
                "id": "manicure",
                "name": "Spa Manicure",
                "price": "₹600"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "foot-scrub",
        "slug": "foot-scrub",
        "name": "Foot Scrub",
        "category": "Manicure, Pedicure & Nail Care",
        "folder": "09-manicure-pedicure-and-nail-care",
        "imageFile": "foot-scrub.webp",
        "image": "/images/services/09-manicure-pedicure-and-nail-care/foot-scrub.webp",
        "fallbackVar": "pedicureSpa",
        "imageAlt": "Foot Scrub - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional foot scrub delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated foot scrub service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of foot scrub",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Foot Scrub appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Foot Scrub typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Foot Scrub?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-manicure",
                "name": "Basic Manicure",
                "price": "₹600"
            },
            {
                "id": "manicure",
                "name": "Spa Manicure",
                "price": "₹600"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "foot-massage",
        "slug": "foot-massage",
        "name": "Foot Massage",
        "category": "Manicure, Pedicure & Nail Care",
        "folder": "09-manicure-pedicure-and-nail-care",
        "imageFile": "foot-massage.webp",
        "image": "/images/services/09-manicure-pedicure-and-nail-care/foot-massage.webp",
        "fallbackVar": "pedicureSpa",
        "imageAlt": "Foot Massage - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional foot massage delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated foot massage service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,200",
        "duration": "45-60 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of foot massage",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Foot Massage appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Foot Massage typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Foot Massage?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-manicure",
                "name": "Basic Manicure",
                "price": "₹600"
            },
            {
                "id": "manicure",
                "name": "Spa Manicure",
                "price": "₹600"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "nail-shaping",
        "slug": "nail-shaping",
        "name": "Nail Shaping",
        "category": "Manicure, Pedicure & Nail Care",
        "folder": "09-manicure-pedicure-and-nail-care",
        "imageFile": "nail-shaping.webp",
        "image": "/images/services/09-manicure-pedicure-and-nail-care/nail-shaping.webp",
        "fallbackVar": "pedicureSpa",
        "imageAlt": "Nail Shaping - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional nail shaping delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated nail shaping service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of nail shaping",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Nail Shaping appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Nail Shaping typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Nail Shaping?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-manicure",
                "name": "Basic Manicure",
                "price": "₹600"
            },
            {
                "id": "manicure",
                "name": "Spa Manicure",
                "price": "₹600"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "nail-polish-application",
        "slug": "nail-polish-application",
        "name": "Nail Polish Application",
        "category": "Manicure, Pedicure & Nail Care",
        "folder": "09-manicure-pedicure-and-nail-care",
        "imageFile": "nail-polish-application.webp",
        "image": "/images/services/09-manicure-pedicure-and-nail-care/nail-polish-application.webp",
        "fallbackVar": "pedicureSpa",
        "imageAlt": "Nail Polish Application - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional nail polish application delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated nail polish application service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "15-20 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of nail polish application",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Nail Polish Application appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Nail Polish Application typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Nail Polish Application?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-manicure",
                "name": "Basic Manicure",
                "price": "₹600"
            },
            {
                "id": "manicure",
                "name": "Spa Manicure",
                "price": "₹600"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "gel-nail-polish",
        "slug": "gel-nail-polish",
        "name": "Gel Nail Polish",
        "category": "Manicure, Pedicure & Nail Care",
        "folder": "09-manicure-pedicure-and-nail-care",
        "imageFile": "gel-nail-polish.webp",
        "image": "/images/services/09-manicure-pedicure-and-nail-care/gel-nail-polish.webp",
        "fallbackVar": "pedicureSpa",
        "imageAlt": "Gel Nail Polish - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional gel nail polish delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated gel nail polish service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹500",
        "duration": "15-20 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of gel nail polish",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Gel Nail Polish appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Gel Nail Polish typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Gel Nail Polish?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-manicure",
                "name": "Basic Manicure",
                "price": "₹600"
            },
            {
                "id": "manicure",
                "name": "Spa Manicure",
                "price": "₹600"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "nail-art",
        "slug": "nail-art",
        "name": "Nail Art",
        "category": "Manicure, Pedicure & Nail Care",
        "folder": "09-manicure-pedicure-and-nail-care",
        "imageFile": "nail-art.webp",
        "image": "/images/services/09-manicure-pedicure-and-nail-care/nail-art.webp",
        "fallbackVar": "pedicureSpa",
        "imageAlt": "Nail Art - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional nail art delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated nail art service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of nail art",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Nail Art appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Nail Art typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Nail Art?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-manicure",
                "name": "Basic Manicure",
                "price": "₹600"
            },
            {
                "id": "manicure",
                "name": "Spa Manicure",
                "price": "₹600"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "nail-extensions",
        "slug": "nail-extensions",
        "name": "Nail Extensions",
        "category": "Manicure, Pedicure & Nail Care",
        "folder": "09-manicure-pedicure-and-nail-care",
        "imageFile": "nail-extensions.webp",
        "image": "/images/services/09-manicure-pedicure-and-nail-care/nail-extensions.webp",
        "fallbackVar": "pedicureSpa",
        "imageAlt": "Nail Extensions - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional nail extensions delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated nail extensions service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹2,000",
        "duration": "60-90 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of nail extensions",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Nail Extensions appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Nail Extensions typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Nail Extensions?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-manicure",
                "name": "Basic Manicure",
                "price": "₹600"
            },
            {
                "id": "manicure",
                "name": "Spa Manicure",
                "price": "₹600"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "nail-extension-removal",
        "slug": "nail-extension-removal",
        "name": "Nail Extension Removal",
        "category": "Manicure, Pedicure & Nail Care",
        "folder": "09-manicure-pedicure-and-nail-care",
        "imageFile": "nail-extension-removal.webp",
        "image": "/images/services/09-manicure-pedicure-and-nail-care/nail-extension-removal.webp",
        "fallbackVar": "pedicureSpa",
        "imageAlt": "Nail Extension Removal - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional nail extension removal delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated nail extension removal service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹500",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of nail extension removal",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Nail Extension Removal appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Nail Extension Removal typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Nail Extension Removal?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "basic-manicure",
                "name": "Basic Manicure",
                "price": "₹600"
            },
            {
                "id": "manicure",
                "name": "Spa Manicure",
                "price": "₹600"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "head-neck-and-shoulder-massage",
        "slug": "head-neck-and-shoulder-massage",
        "name": "Head, Neck & Shoulder Massage",
        "category": "Body Care & Relaxation",
        "folder": "10-body-care-and-relaxation",
        "imageFile": "head-neck-and-shoulder-massage.webp",
        "image": "/images/services/10-body-care-and-relaxation/head-neck-and-shoulder-massage.webp",
        "fallbackVar": "bodySpa",
        "imageAlt": "Head, Neck & Shoulder Massage - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional head, neck & shoulder massage delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated head, neck & shoulder massage service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,200",
        "duration": "45-60 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of head, neck & shoulder massage",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Head, Neck & Shoulder Massage appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Head, Neck & Shoulder Massage typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Head, Neck & Shoulder Massage?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "hand-spa",
                "name": "Hand Spa",
                "price": "₹1,200"
            },
            {
                "id": "foot-spa",
                "name": "Foot Spa",
                "price": "₹1,200"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": true
    },
    {
        "id": "hand-spa",
        "slug": "hand-spa",
        "name": "Hand Spa",
        "category": "Body Care & Relaxation",
        "folder": "10-body-care-and-relaxation",
        "imageFile": "hand-spa.webp",
        "image": "/images/services/10-body-care-and-relaxation/hand-spa.webp",
        "fallbackVar": "bodySpa",
        "imageAlt": "Hand Spa - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional hand spa delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated hand spa service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,200",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of hand spa",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Hand Spa appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Hand Spa typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Hand Spa?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "head-neck-and-shoulder-massage",
                "name": "Head, Neck & Shoulder Massage",
                "price": "₹1,200"
            },
            {
                "id": "foot-spa",
                "name": "Foot Spa",
                "price": "₹1,200"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": true
    },
    {
        "id": "foot-spa",
        "slug": "foot-spa",
        "name": "Foot Spa",
        "category": "Body Care & Relaxation",
        "folder": "10-body-care-and-relaxation",
        "imageFile": "foot-spa.webp",
        "image": "/images/services/10-body-care-and-relaxation/foot-spa.webp",
        "fallbackVar": "bodySpa",
        "imageAlt": "Foot Spa - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional foot spa delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated foot spa service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,200",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of foot spa",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Foot Spa appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Foot Spa typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Foot Spa?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "head-neck-and-shoulder-massage",
                "name": "Head, Neck & Shoulder Massage",
                "price": "₹1,200"
            },
            {
                "id": "hand-spa",
                "name": "Hand Spa",
                "price": "₹1,200"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "body-scrub",
        "slug": "body-scrub",
        "name": "Body Scrub",
        "category": "Body Care & Relaxation",
        "folder": "10-body-care-and-relaxation",
        "imageFile": "body-scrub.webp",
        "image": "/images/services/10-body-care-and-relaxation/body-scrub.webp",
        "fallbackVar": "bodySpa",
        "imageAlt": "Body Scrub - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional body scrub delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated body scrub service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹2,500",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of body scrub",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Body Scrub appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Body Scrub typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Body Scrub?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "head-neck-and-shoulder-massage",
                "name": "Head, Neck & Shoulder Massage",
                "price": "₹1,200"
            },
            {
                "id": "hand-spa",
                "name": "Hand Spa",
                "price": "₹1,200"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "body-polishing",
        "slug": "body-polishing",
        "name": "Body Polishing",
        "category": "Body Care & Relaxation",
        "folder": "10-body-care-and-relaxation",
        "imageFile": "body-polishing.webp",
        "image": "/images/services/10-body-care-and-relaxation/body-polishing.webp",
        "fallbackVar": "bodySpa",
        "imageAlt": "Body Polishing - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional body polishing delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated body polishing service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹2,500",
        "duration": "60-90 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of body polishing",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Body Polishing appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Body Polishing typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Body Polishing?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "head-neck-and-shoulder-massage",
                "name": "Head, Neck & Shoulder Massage",
                "price": "₹1,200"
            },
            {
                "id": "hand-spa",
                "name": "Hand Spa",
                "price": "₹1,200"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "body-de-tan",
        "slug": "body-de-tan",
        "name": "Body De-Tan",
        "category": "Body Care & Relaxation",
        "folder": "10-body-care-and-relaxation",
        "imageFile": "body-de-tan.webp",
        "image": "/images/services/10-body-care-and-relaxation/body-de-tan.webp",
        "fallbackVar": "bodySpa",
        "imageAlt": "Body De-Tan - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional body de-tan delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated body de-tan service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,000",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of body de-tan",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Body De-Tan appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Body De-Tan typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Body De-Tan?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "head-neck-and-shoulder-massage",
                "name": "Head, Neck & Shoulder Massage",
                "price": "₹1,200"
            },
            {
                "id": "hand-spa",
                "name": "Hand Spa",
                "price": "₹1,200"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "back-care",
        "slug": "back-care",
        "name": "Back Care",
        "category": "Body Care & Relaxation",
        "folder": "10-body-care-and-relaxation",
        "imageFile": "back-care.webp",
        "image": "/images/services/10-body-care-and-relaxation/back-care.webp",
        "fallbackVar": "bodySpa",
        "imageAlt": "Back Care - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional back care delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated back care service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of back care",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Back Care appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Back Care typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Back Care?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "head-neck-and-shoulder-massage",
                "name": "Head, Neck & Shoulder Massage",
                "price": "₹1,200"
            },
            {
                "id": "hand-spa",
                "name": "Hand Spa",
                "price": "₹1,200"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "relaxing-foot-massage",
        "slug": "relaxing-foot-massage",
        "name": "Relaxing Foot Massage",
        "category": "Body Care & Relaxation",
        "folder": "10-body-care-and-relaxation",
        "imageFile": "relaxing-foot-massage.webp",
        "image": "/images/services/10-body-care-and-relaxation/relaxing-foot-massage.webp",
        "fallbackVar": "bodySpa",
        "imageAlt": "Relaxing Foot Massage - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional relaxing foot massage delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated relaxing foot massage service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,200",
        "duration": "45-60 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of relaxing foot massage",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Relaxing Foot Massage appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Relaxing Foot Massage typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Relaxing Foot Massage?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "head-neck-and-shoulder-massage",
                "name": "Head, Neck & Shoulder Massage",
                "price": "₹1,200"
            },
            {
                "id": "hand-spa",
                "name": "Hand Spa",
                "price": "₹1,200"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "bridal-mehndi",
        "slug": "bridal-mehndi",
        "name": "Bridal Mehndi",
        "category": "Mehndi & Traditional Beauty",
        "folder": "11-mehndi-and-traditional-beauty",
        "imageFile": "bridal-mehndi.webp",
        "image": "/images/services/11-mehndi-and-traditional-beauty/bridal-mehndi.webp",
        "fallbackVar": "bridalMehndi",
        "imageAlt": "Bridal Mehndi - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional bridal mehndi delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated bridal mehndi service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹3,500",
        "duration": "3-4 Hours",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of bridal mehndi",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Bridal Mehndi appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Bridal Mehndi typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Bridal Mehndi?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "traditional-mehndi",
                "name": "Traditional Mehndi",
                "price": "₹1,000"
            },
            {
                "id": "party-mehndi",
                "name": "Party Mehndi",
                "price": "₹1,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": true
    },
    {
        "id": "traditional-mehndi",
        "slug": "traditional-mehndi",
        "name": "Traditional Mehndi",
        "category": "Mehndi & Traditional Beauty",
        "folder": "11-mehndi-and-traditional-beauty",
        "imageFile": "traditional-mehndi.webp",
        "image": "/images/services/11-mehndi-and-traditional-beauty/traditional-mehndi.webp",
        "fallbackVar": "bridalMehndi",
        "imageAlt": "Traditional Mehndi - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional traditional mehndi delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated traditional mehndi service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,000",
        "duration": "3-4 Hours",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of traditional mehndi",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Traditional Mehndi appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Traditional Mehndi typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Traditional Mehndi?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "bridal-mehndi",
                "name": "Bridal Mehndi",
                "price": "₹3,500"
            },
            {
                "id": "party-mehndi",
                "name": "Party Mehndi",
                "price": "₹1,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": true
    },
    {
        "id": "party-mehndi",
        "slug": "party-mehndi",
        "name": "Party Mehndi",
        "category": "Mehndi & Traditional Beauty",
        "folder": "11-mehndi-and-traditional-beauty",
        "imageFile": "party-mehndi.webp",
        "image": "/images/services/11-mehndi-and-traditional-beauty/party-mehndi.webp",
        "fallbackVar": "bridalMehndi",
        "imageAlt": "Party Mehndi - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional party mehndi delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated party mehndi service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,000",
        "duration": "3-4 Hours",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of party mehndi",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Party Mehndi appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Party Mehndi typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Party Mehndi?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "bridal-mehndi",
                "name": "Bridal Mehndi",
                "price": "₹3,500"
            },
            {
                "id": "traditional-mehndi",
                "name": "Traditional Mehndi",
                "price": "₹1,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "simple-hand-mehndi",
        "slug": "simple-hand-mehndi",
        "name": "Simple Hand Mehndi",
        "category": "Mehndi & Traditional Beauty",
        "folder": "11-mehndi-and-traditional-beauty",
        "imageFile": "simple-hand-mehndi.webp",
        "image": "/images/services/11-mehndi-and-traditional-beauty/simple-hand-mehndi.webp",
        "fallbackVar": "bridalMehndi",
        "imageAlt": "Simple Hand Mehndi - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional simple hand mehndi delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated simple hand mehndi service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,000",
        "offerPrice": "300",
        "duration": "3-4 Hours",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of simple hand mehndi",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Simple Hand Mehndi appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Simple Hand Mehndi typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Simple Hand Mehndi?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "bridal-mehndi",
                "name": "Bridal Mehndi",
                "price": "₹3,500"
            },
            {
                "id": "traditional-mehndi",
                "name": "Traditional Mehndi",
                "price": "₹1,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "arabic-mehndi",
        "slug": "arabic-mehndi",
        "name": "Arabic Mehndi",
        "category": "Mehndi & Traditional Beauty",
        "folder": "11-mehndi-and-traditional-beauty",
        "imageFile": "arabic-mehndi.webp",
        "image": "/images/services/11-mehndi-and-traditional-beauty/arabic-mehndi.webp",
        "fallbackVar": "bridalMehndi",
        "imageAlt": "Arabic Mehndi - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional arabic mehndi delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated arabic mehndi service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,000",
        "duration": "3-4 Hours",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of arabic mehndi",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Arabic Mehndi appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Arabic Mehndi typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Arabic Mehndi?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "bridal-mehndi",
                "name": "Bridal Mehndi",
                "price": "₹3,500"
            },
            {
                "id": "traditional-mehndi",
                "name": "Traditional Mehndi",
                "price": "₹1,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "hair-henna-application",
        "slug": "hair-henna-application",
        "name": "Hair Henna Application",
        "category": "Mehndi & Traditional Beauty",
        "folder": "11-mehndi-and-traditional-beauty",
        "imageFile": "hair-henna-application.webp",
        "image": "/images/services/11-mehndi-and-traditional-beauty/hair-henna-application.webp",
        "fallbackVar": "bridalMehndi",
        "imageAlt": "Hair Henna Application - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional hair henna application delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated hair henna application service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹800",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of hair henna application",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Hair Henna Application appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Hair Henna Application typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Hair Henna Application?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "bridal-mehndi",
                "name": "Bridal Mehndi",
                "price": "₹3,500"
            },
            {
                "id": "traditional-mehndi",
                "name": "Traditional Mehndi",
                "price": "₹1,000"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "haircut-plus-hair-spa-combo",
        "slug": "haircut-plus-hair-spa-combo",
        "name": "Haircut + Hair Spa Combo",
        "category": "Salon Packages & Combos",
        "folder": "12-salon-packages-and-combos",
        "imageFile": "haircut-plus-hair-spa-combo.webp",
        "image": "/images/services/12-salon-packages-and-combos/haircut-plus-hair-spa-combo.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Haircut + Hair Spa Combo - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional haircut + hair spa combo delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated haircut + hair spa combo service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,200",
        "duration": "45-60 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of haircut + hair spa combo",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Haircut + Hair Spa Combo appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Haircut + Hair Spa Combo typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Haircut + Hair Spa Combo?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "hair-colour-plus-haircut-combo",
                "name": "Hair Colour + Haircut Combo",
                "price": "₹1,800"
            },
            {
                "id": "facial-plus-cleanup-combo",
                "name": "Facial + Cleanup Combo",
                "price": "₹600"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": true
    },
    {
        "id": "hair-colour-plus-haircut-combo",
        "slug": "hair-colour-plus-haircut-combo",
        "name": "Hair Colour + Haircut Combo",
        "category": "Salon Packages & Combos",
        "folder": "12-salon-packages-and-combos",
        "imageFile": "hair-colour-plus-haircut-combo.webp",
        "image": "/images/services/12-salon-packages-and-combos/hair-colour-plus-haircut-combo.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Hair Colour + Haircut Combo - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional hair colour + haircut combo delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated hair colour + haircut combo service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹1,800",
        "duration": "30-45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of hair colour + haircut combo",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Hair Colour + Haircut Combo appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Hair Colour + Haircut Combo typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Hair Colour + Haircut Combo?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "haircut-plus-hair-spa-combo",
                "name": "Haircut + Hair Spa Combo",
                "price": "₹1,200"
            },
            {
                "id": "facial-plus-cleanup-combo",
                "name": "Facial + Cleanup Combo",
                "price": "₹600"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": true
    },
    {
        "id": "facial-plus-cleanup-combo",
        "slug": "facial-plus-cleanup-combo",
        "name": "Facial + Cleanup Combo",
        "category": "Salon Packages & Combos",
        "folder": "12-salon-packages-and-combos",
        "imageFile": "facial-plus-cleanup-combo.webp",
        "image": "/images/services/12-salon-packages-and-combos/facial-plus-cleanup-combo.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Facial + Cleanup Combo - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional facial + cleanup combo delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated facial + cleanup combo service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹600",
        "duration": "60-90 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of facial + cleanup combo",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Facial + Cleanup Combo appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Facial + Cleanup Combo typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Facial + Cleanup Combo?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "haircut-plus-hair-spa-combo",
                "name": "Haircut + Hair Spa Combo",
                "price": "₹1,200"
            },
            {
                "id": "hair-colour-plus-haircut-combo",
                "name": "Hair Colour + Haircut Combo",
                "price": "₹1,800"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "manicure-plus-pedicure-combo",
        "slug": "manicure-plus-pedicure-combo",
        "name": "Manicure + Pedicure Combo",
        "category": "Salon Packages & Combos",
        "folder": "12-salon-packages-and-combos",
        "imageFile": "manicure-plus-pedicure-combo.webp",
        "image": "/images/services/12-salon-packages-and-combos/manicure-plus-pedicure-combo.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Manicure + Pedicure Combo - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional manicure + pedicure combo delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated manicure + pedicure combo service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹750",
        "duration": "45-60 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of manicure + pedicure combo",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Manicure + Pedicure Combo appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Manicure + Pedicure Combo typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Manicure + Pedicure Combo?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "haircut-plus-hair-spa-combo",
                "name": "Haircut + Hair Spa Combo",
                "price": "₹1,200"
            },
            {
                "id": "hair-colour-plus-haircut-combo",
                "name": "Hair Colour + Haircut Combo",
                "price": "₹1,800"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "haircare-maintenance-package",
        "slug": "haircare-maintenance-package",
        "name": "Haircare Maintenance Package",
        "category": "Salon Packages & Combos",
        "folder": "12-salon-packages-and-combos",
        "imageFile": "haircare-maintenance-package.webp",
        "image": "/images/services/12-salon-packages-and-combos/haircare-maintenance-package.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Haircare Maintenance Package - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional haircare maintenance package delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated haircare maintenance package service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹3,500",
        "duration": "2-3 Hours",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of haircare maintenance package",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Haircare Maintenance Package appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Haircare Maintenance Package typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Haircare Maintenance Package?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "haircut-plus-hair-spa-combo",
                "name": "Haircut + Hair Spa Combo",
                "price": "₹1,200"
            },
            {
                "id": "hair-colour-plus-haircut-combo",
                "name": "Hair Colour + Haircut Combo",
                "price": "₹1,800"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "monthly-beauty-maintenance",
        "slug": "monthly-beauty-maintenance",
        "name": "Monthly Beauty Maintenance",
        "category": "Salon Packages & Combos",
        "folder": "12-salon-packages-and-combos",
        "imageFile": "monthly-beauty-maintenance.webp",
        "image": "/images/services/12-salon-packages-and-combos/monthly-beauty-maintenance.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Monthly Beauty Maintenance - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional monthly beauty maintenance delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated monthly beauty maintenance service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹3,500",
        "duration": "45 Mins",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of monthly beauty maintenance",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Monthly Beauty Maintenance appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Monthly Beauty Maintenance typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Monthly Beauty Maintenance?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "haircut-plus-hair-spa-combo",
                "name": "Haircut + Hair Spa Combo",
                "price": "₹1,200"
            },
            {
                "id": "hair-colour-plus-haircut-combo",
                "name": "Hair Colour + Haircut Combo",
                "price": "₹1,800"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "pre-bridal-beauty-package",
        "slug": "pre-bridal-beauty-package",
        "name": "Pre-Bridal Beauty Package",
        "category": "Salon Packages & Combos",
        "folder": "12-salon-packages-and-combos",
        "imageFile": "pre-bridal-beauty-package.webp",
        "image": "/images/services/12-salon-packages-and-combos/pre-bridal-beauty-package.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Pre-Bridal Beauty Package - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional pre-bridal beauty package delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated pre-bridal beauty package service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹6,500",
        "duration": "2-3 Hours",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of pre-bridal beauty package",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Pre-Bridal Beauty Package appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Pre-Bridal Beauty Package typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Pre-Bridal Beauty Package?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "haircut-plus-hair-spa-combo",
                "name": "Haircut + Hair Spa Combo",
                "price": "₹1,200"
            },
            {
                "id": "hair-colour-plus-haircut-combo",
                "name": "Hair Colour + Haircut Combo",
                "price": "₹1,800"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "engagement-beauty-package",
        "slug": "engagement-beauty-package",
        "name": "Engagement Beauty Package",
        "category": "Salon Packages & Combos",
        "folder": "12-salon-packages-and-combos",
        "imageFile": "engagement-beauty-package.webp",
        "image": "/images/services/12-salon-packages-and-combos/engagement-beauty-package.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Engagement Beauty Package - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional engagement beauty package delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated engagement beauty package service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹8,000",
        "duration": "2-3 Hours",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of engagement beauty package",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Engagement Beauty Package appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Engagement Beauty Package typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Engagement Beauty Package?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "haircut-plus-hair-spa-combo",
                "name": "Haircut + Hair Spa Combo",
                "price": "₹1,200"
            },
            {
                "id": "hair-colour-plus-haircut-combo",
                "name": "Hair Colour + Haircut Combo",
                "price": "₹1,800"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "complete-bridal-package",
        "slug": "complete-bridal-package",
        "name": "Complete Bridal Package",
        "category": "Salon Packages & Combos",
        "folder": "12-salon-packages-and-combos",
        "imageFile": "complete-bridal-package.webp",
        "image": "/images/services/12-salon-packages-and-combos/complete-bridal-package.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Complete Bridal Package - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional complete bridal package delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated complete bridal package service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹25,000",
        "duration": "2-3 Hours",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of complete bridal package",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Complete Bridal Package appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Complete Bridal Package typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Complete Bridal Package?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "haircut-plus-hair-spa-combo",
                "name": "Haircut + Hair Spa Combo",
                "price": "₹1,200"
            },
            {
                "id": "hair-colour-plus-haircut-combo",
                "name": "Hair Colour + Haircut Combo",
                "price": "₹1,800"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    },
    {
        "id": "party-makeup-package",
        "slug": "party-makeup-package",
        "name": "Party Makeup Package",
        "category": "Salon Packages & Combos",
        "folder": "12-salon-packages-and-combos",
        "imageFile": "party-makeup-package.webp",
        "image": "/images/services/12-salon-packages-and-combos/party-makeup-package.webp",
        "fallbackVar": "bridalMuhurtham",
        "imageAlt": "Party Makeup Package - Shobitha Haircare & Bridal Makeup Studio, Kanhangad",
        "shortDescription": "Professional party makeup package delivered with authentic salon-grade products, custom consultation, and hygienic precision at Shobitha Studio, Kanhangad.",
        "fullDescription": "Experience our dedicated party makeup package service tailored to your personal aesthetic. Performed by trained specialists using authentic international formulations to ensure optimum comfort, safety, and radiant results for every client.",
        "price": "₹3,500",
        "duration": "2-3 Hours",
        "benefits": [
            "Personalized consultation tailored specifically to your hair/skin profile",
            "Performed using premium, skin-safe and authentic salon-grade international brands",
            "Long-lasting, camera-ready and confidence-boosting results",
            "100% hygienic, sterilized salon environment adhering to high safety standards"
        ],
        "procedureSteps": [
            "In-depth consultation and assessment of hair/skin condition",
            "Preparation and gentle surface sanitization with specialized salon primers",
            "Precision professional application of party makeup package",
            "Relaxing finishing step, nourishment infusion, and client comfort check",
            "Personalized aftercare review and home maintenance guidance"
        ],
        "faq": [
            {
                "q": "How should I prepare before my Party Makeup Package appointment?",
                "a": "Simply arrive on time with clean hair/skin. Avoid applying heavy oils or unprescribed topical products right before the session."
            },
            {
                "q": "How long do the results of Party Makeup Package typically last?",
                "a": "Results depend on individual hair and skin type, but with our recommended aftercare, results stay fresh and vibrant for the maximum duration."
            },
            {
                "q": "Do I need to book in advance for Party Makeup Package?",
                "a": "Yes, we encourage reserving at least 24 hours ahead to ensure your preferred time slot with our senior stylists."
            }
        ],
        "aftercare": "Avoid exposure to extreme dust, harsh heat, or chlorinated water immediately after treatment. Maintain results with recommended gentle salon-grade products.",
        "relatedServices": [
            {
                "id": "haircut-plus-hair-spa-combo",
                "name": "Haircut + Hair Spa Combo",
                "price": "₹1,200"
            },
            {
                "id": "hair-colour-plus-haircut-combo",
                "name": "Hair Colour + Haircut Combo",
                "price": "₹1,800"
            }
        ],
        "addons": [
            {
                "name": "Deep Conditioning Infusion",
                "price": "₹350"
            },
            {
                "name": "Serum Gloss Finish",
                "price": "₹200"
            }
        ],
        "active": true,
        "featured": false
    }
];

export const bridalPackages = [
    {
        "id": "basic-bridal",
        "name": "Classic Bridal Package",
        "price": "₹25,000",
        "description": "Essential South Indian bridal makeup and styling for an elegant ceremony.",
        "includes": [
            "Traditional HD Muhurtham Makeup",
            "Bridal Hairstyle with Fresh Jasmine Flowers",
            "Kasavu / Kanjeevaram Saree Draping & Pinning",
            "Radiance Facial Sitting (3 days prior)",
            "Classic Spa Manicure & Pedicure",
            "Full Face Threading & Brow Shaping"
        ]
    },
    {
        "id": "premium-bridal",
        "name": "Royal Heritage Package",
        "price": "₹40,000",
        "description": "Our signature luxury package with Airbrush finish, pre-bridal care and jewelry styling.",
        "includes": [
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
        "id": "luxury-bridal",
        "name": "Empress Couture Bridal",
        "price": "₹60,000",
        "description": "The ultimate 2-event bridal indulgence covering Muhurtham and Grand Reception.",
        "includes": [
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

// Automatically apply custom prices & offers saved from the Price Editor
if (typeof window !== 'undefined' && window.localStorage) {
    try {
        const savedCustom = window.localStorage.getItem('shobitha_custom_services');
        if (savedCustom) {
            const parsed = JSON.parse(savedCustom);
            if (Array.isArray(parsed) && parsed.length > 0) {
                const map = new Map(parsed.map(item => [item.id, item]));
                services.forEach(s => {
                    const custom = map.get(s.id);
                    if (custom) {
                        if (custom.price) s.price = custom.price;
                        if (custom.offerPrice !== undefined) s.offerPrice = custom.offerPrice;
                        if (custom.duration) s.duration = custom.duration;
                        if (custom.hidden !== undefined) s.hidden = custom.hidden;
                    }
                });
            }
        }
    } catch (e) {
        // Fallback silently to default prices
    }
}

