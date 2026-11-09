import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { services, fallbackMap } from '../data/services';
import { useBooking } from '../context/BookingContext';
import { motion } from 'framer-motion';
import { getDiscountDetails } from '../utils/pricing';
import { 
    FaClock, FaTag, FaChevronLeft, FaCheckCircle, FaCalendarCheck, 
    FaPlusCircle, FaArrowRight, FaShieldAlt, FaWhatsapp, FaSpa, FaChevronRight 
} from 'react-icons/fa';

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { openBooking } = useBooking();
    
    // Look up service by either id or slug for maximum URL flexibility
    const service = services.find(s => s.id === id || s.slug === id);

    const customImages = (() => {
        try {
            return JSON.parse(localStorage.getItem('shobitha_custom_service_images') || '{}');
        } catch (e) {
            return {};
        }
    })();

    useEffect(() => {
        if (!service) {
            navigate('/services');
        } else {
            // SEO Document Title & Meta Description
            document.title = `${service.name} - Haircare & Bridal | Shobitha Salon Kanhangad`;
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute('content', service.shortDescription || service.description || `${service.name} at Shobitha Haircare & Bridal Makeup Studio, Kanhangad.`);
            }

            // Canonical Link
            let canonical = document.querySelector('link[rel="canonical"]');
            if (canonical) {
                canonical.setAttribute('href', `https://shobithasalon.pages.dev/#/services/${service.slug || service.id}`);
            }

            // Structured Data JSON-LD for Service
            const scriptId = 'service-jsonld';
            let script = document.getElementById(scriptId);
            if (!script) {
                script = document.createElement('script');
                script.id = scriptId;
                script.type = 'application/ld+json';
                document.head.appendChild(script);
            }
            script.textContent = JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "name": service.name,
                "serviceType": service.name,
                "category": service.category,
                "image": `https://shobithasalon.pages.dev${service.image}`,
                "provider": {
                    "@type": "BeautySalon",
                    "name": "Shobitha Haircare & Bridal Makeup Studio",
                    "telephone": "+918075340778",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Vanila Square Building, Municipal Bus Stand Road",
                        "addressLocality": "Kanhangad",
                        "addressRegion": "Kerala",
                        "postalCode": "671315",
                        "addressCountry": "IN"
                    }
                },
                "offers": {
                    "@type": "Offer",
                    "price": service.price.replace(/[^0-9]/g, '') || "500",
                    "priceCurrency": "INR"
                },
                "description": service.shortDescription || service.description
            });

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [service, navigate]);

    if (!service) return null;

    const defaultFallback = fallbackMap[service.fallbackVar] || fallbackMap.hairCut;

    // Use service-specific FAQs if defined, or graceful fallback
    const displayFaqs = (service.faq && service.faq.length > 0) ? service.faq : [
        { q: "How long do the results last?", a: `Treatment takes approximately ${service.duration}. Results depend on hair/skin type and recommended home maintenance.` },
        { q: "Do I need to schedule in advance?", a: "Yes, we encourage reserving at least 24-48 hours ahead to ensure your preferred time slot." },
        { q: "Which salon brands are utilized?", a: "We exclusively employ authentic, salon-grade international brands including L'Oréal, Schwarzkopf, and O3+." }
    ];

    const benefits = service.benefits || service.details?.benefits || [];
    const procedureSteps = service.procedureSteps || service.details?.steps || [];
    const aftercare = service.aftercare || service.details?.aftercare;

    const discount = getDiscountDetails(service.price, service.offerPrice);

    const whatsappMessage = encodeURIComponent(
        discount.hasDiscount
            ? `Hello Shobitha Haircare, I would like to book or inquire about: *${service.name}* (Special Offer: ${discount.displayPrice}, Original: ${discount.originalPrice}, ${discount.badge}). Please share available slots!`
            : `Hello Shobitha Haircare, I would like to book or inquire about: *${service.name}* (${service.price}, ${service.duration}). Please share available slots!`
    );

    return (
        <div className="pt-24 md:pt-28 pb-16 bg-[#FAF8F5] min-h-screen">
            <div className="container-custom px-4 sm:px-6">
                
                {/* 1. Complete Breadcrumb Navigation */}
                <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-6 font-medium flex-wrap" aria-label="Breadcrumb">
                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                    <FaChevronRight size={10} className="text-gray-400" />
                    <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
                    <FaChevronRight size={10} className="text-gray-400" />
                    <span className="text-gray-700 font-semibold">{service.category}</span>
                    <FaChevronRight size={10} className="text-gray-400" />
                    <span className="text-primary-dark font-bold truncate max-w-[220px] sm:max-w-none">{service.name}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
                    {/* LEFT COLUMN: Large Image & Service FAQ */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {/* Service-Specific Image in 4:5 Portrait Ratio with Graceful Auto-Fallback */}
                        <div className="rounded-3xl overflow-hidden shadow-xl mb-8 bg-white border-2 border-primary-200 aspect-[4/5] relative group">
                            <img
                                src={customImages[service.id] || service.image}
                                alt={service.imageAlt || `${service.name} - Shobitha Haircare Kanhangad`}
                                width="800"
                                height="1000"
                                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = defaultFallback;
                                }}
                                loading="eager"
                            />
                        </div>

                        {/* Service FAQ Card */}
                        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-primary-200 shadow-sm">
                            <h3 className="text-lg font-serif font-bold text-gray-900 mb-5 flex items-center gap-2.5">
                                <span className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                                    ?
                                </span>
                                Frequently Asked Questions
                            </h3>
                            <div className="space-y-4">
                                {displayFaqs.map((faq, idx) => (
                                    <div key={idx} className="border-b border-primary-100 pb-3 last:border-0 last:pb-0">
                                        <h4 className="font-semibold text-gray-900 text-sm mb-1">{faq.q}</h4>
                                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: Badge, Title, Price, Benefits, Steps, What to Expect & Aftercare */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col"
                    >
                        {/* Category & Duration */}
                        <div className="mb-4 flex flex-wrap items-center gap-3">
                            <span className="bg-primary-50 text-primary-dark border border-primary-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                                <FaTag size={10} /> {service.category}
                            </span>
                            <div className="flex items-center gap-1.5 text-gray-700 text-xs sm:text-sm font-semibold">
                                <FaClock className="text-primary-dark" /> {service.duration}
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold mb-4 text-gray-950">
                            {service.name}
                        </h1>

                        {/* Short Professional Description */}
                        <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed border-l-4 border-primary pl-4 bg-white/80 py-3 rounded-r-xl shadow-sm">
                            {service.fullDescription || service.description || service.shortDescription}
                        </p>

                        {/* Price Card & Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-primary-200 shadow-sm mb-8">
                            <div>
                                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block">Estimated Price</span>
                                {discount.hasDiscount ? (
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-base text-gray-400 line-through font-semibold">
                                                {discount.originalPrice}
                                            </span>
                                            <span className="text-3xl sm:text-4xl font-extrabold text-emerald-700">
                                                {discount.displayPrice}
                                            </span>
                                        </div>
                                        <span className="bg-emerald-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-sm tracking-wide">
                                            {discount.badge} SPECIAL
                                        </span>
                                    </div>
                                ) : (
                                    <div className="text-2xl sm:text-3xl font-extrabold text-primary-dark">
                                        {service.price}
                                    </div>
                                )}
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
                                <button
                                    onClick={() => openBooking({ ...service, price: discount.displayPrice })}
                                    className="btn-primary py-3.5 px-6 flex items-center justify-center gap-2 shadow-md font-bold text-sm w-full sm:w-auto"
                                >
                                    <FaCalendarCheck size={14} /> Book Appointment
                                </button>
                                <a
                                    href={`https://wa.me/918075340778?text=${whatsappMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-3.5 px-6 rounded-full shadow-md text-sm transition-all w-full sm:w-auto"
                                >
                                    <FaWhatsapp size={16} /> WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* Optional Add-ons if available */}
                        {service.addons && service.addons.length > 0 && (
                            <div className="bg-white p-5 rounded-2xl border border-primary-200 shadow-sm mb-6">
                                <h3 className="text-sm font-serif font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <FaPlusCircle className="text-primary-dark" /> Available Upgrades & Add-ons
                                </h3>
                                <div className="divide-y divide-gray-100">
                                    {service.addons.map((add, idx) => (
                                        <div key={idx} className="py-2.5 flex items-center justify-between text-xs sm:text-sm">
                                            <span className="font-semibold text-gray-800">{add.name}</span>
                                            <span className="font-extrabold text-primary-dark bg-primary-50 px-2.5 py-0.5 rounded-full border border-primary-200">
                                                +{add.price}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Detailed Cards */}
                        <div className="space-y-6">
                            {/* Key Benefits Card */}
                            {benefits.length > 0 && (
                                <div className="bg-white p-6 rounded-2xl border border-primary-200 shadow-sm">
                                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-4">Key Benefits</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {benefits.map((b, i) => (
                                            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-800">
                                                <FaCheckCircle className="text-primary-dark mt-1 shrink-0" size={13} />
                                                <span>{b}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Procedure Steps Card */}
                            {procedureSteps.length > 0 && (
                                <div className="bg-white p-6 rounded-2xl border border-primary-200 shadow-sm">
                                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-4">Procedure Steps</h3>
                                    <ol className="space-y-2.5">
                                        {procedureSteps.map((s, i) => (
                                            <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-gray-800">
                                                <span className="w-5 h-5 rounded-full bg-primary-100 text-primary-dark font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                                                    {i + 1}
                                                </span>
                                                <span>{s}</span>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            )}

                            {/* What Customer Should Expect Card */}
                            <div className="bg-white p-6 rounded-2xl border border-primary-200 shadow-sm">
                                <h3 className="text-lg font-serif font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <FaSpa className="text-primary-dark" /> What to Expect
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-gray-700">
                                    <div className="bg-[#FAF8F5] p-3 rounded-xl border border-primary-100">
                                        <strong className="block text-gray-900 font-bold mb-1">1. Consultation</strong>
                                        <span>One-on-one styling assessment for your hair or skin profile.</span>
                                    </div>
                                    <div className="bg-[#FAF8F5] p-3 rounded-xl border border-primary-100">
                                        <strong className="block text-gray-900 font-bold mb-1">2. Luxury Care</strong>
                                        <span>Gentle application using 100% genuine salon-grade products.</span>
                                    </div>
                                    <div className="bg-[#FAF8F5] p-3 rounded-xl border border-primary-100">
                                        <strong className="block text-gray-900 font-bold mb-1">3. Clear Aftercare</strong>
                                        <span>Long-lasting finish with transparent maintenance instructions.</span>
                                    </div>
                                </div>
                            </div>

                            {/* Recommended Aftercare Card */}
                            {aftercare && (
                                <div className="bg-amber-50/70 p-5 rounded-2xl border border-amber-200">
                                    <h4 className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-2">
                                        <FaShieldAlt className="text-primary-dark" /> Recommended Aftercare & Maintenance:
                                    </h4>
                                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                                        {aftercare}
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* RELATED SERVICES SECTION */}
                {service.relatedServices && service.relatedServices.length > 0 && (
                    <div className="mt-16 pt-12 border-t border-primary-200">
                        <div className="text-center max-w-xl mx-auto mb-8">
                            <span className="text-xs font-bold uppercase tracking-wider text-primary-dark mb-1 block">
                                Complete Your Look
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-950">
                                Frequently Paired Services
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {service.relatedServices.map((rel, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-5 rounded-2xl border border-primary-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                                >
                                    <div>
                                        <h3 className="font-serif font-bold text-base text-gray-900 mb-1">
                                            {rel.name}
                                        </h3>
                                        <span className="text-xs text-primary-dark font-extrabold">
                                            {rel.price}
                                        </span>
                                    </div>
                                    <Link
                                        to={`/services/${rel.id}`}
                                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary-dark hover:text-primary transition-colors"
                                    >
                                        View Details <FaArrowRight size={10} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServiceDetail;
