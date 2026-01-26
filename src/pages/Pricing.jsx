import React from 'react';
import { services, bridalPackages } from '../data/services';
import { FaWhatsapp, FaInfoCircle } from 'react-icons/fa';
import { useBooking } from '../context/BookingContext';

const Pricing = () => {
    const { openBooking } = useBooking();

    const groupedServices = services.reduce((acc, service) => {
        if (!acc[service.category]) acc[service.category] = [];
        acc[service.category].push(service);
        return acc;
    }, {});

    return (
        <div className="pt-24 pb-20">
            <section className="bg-primary/5 py-16 mb-12">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl heading-serif mb-4">Our Pricing</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">Transparent pricing for premium services. No hidden costs.</p>
                </div>
            </section>

            <div className="container-custom">
                {/* Bridal Packages (Quick Cards) */}
                <div className="mb-20">
                    <h2 className="text-3xl font-serif font-bold mb-8 text-center">Bridal Packages</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {bridalPackages.map((pkg) => (
                            <div key={pkg.id} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{pkg.name}</h3>
                                <div className="text-3xl font-bold text-primary mb-6">{pkg.price}</div>
                                <ul className="space-y-3 mb-8 text-left w-full h-40 overflow-y-auto pr-2 custom-scrollbar">
                                    {pkg.includes.map((item, i) => (
                                        <li key={i} className="text-gray-600 text-sm flex gap-3">
                                            <span className="text-primary">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={() => openBooking(pkg)} className="w-full btn-primary text-sm">Book on WhatsApp</button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Detailed Service Tables */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {Object.entries(groupedServices).map(([category, items]) => (
                        <div key={category} className="mb-10">
                            <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-primary rounded-full"></span> {category}
                            </h3>
                            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-gray-50 text-left">
                                            <th className="px-6 py-4 text-sm font-bold text-gray-700">Service</th>
                                            <th className="px-6 py-4 text-sm font-bold text-gray-700">Starting Price</th>
                                            <th className="px-6 py-4"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {items.map((item) => (
                                            <tr key={item.id} className="hover:bg-primary/5 transition duration-200 group">
                                                <td className="px-6 py-4">
                                                    <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors">{item.name}</div>
                                                    <div className="text-xs text-gray-500">{item.duration}</div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="font-bold text-gray-900">{item.price}</span>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <button onClick={() => openBooking(item)} className="text-green-500 hover:text-green-600 p-2 transition">
                                                        <FaWhatsapp size={18} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Important Info */}
                <div className="mt-16 bg-blue-50/50 p-8 rounded-3xl border border-blue-100 flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white shrink-0">
                        <FaInfoCircle size={32} />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Things to Note</h4>
                        <ul className="text-gray-600 space-y-2">
                            <li>• Final price may vary based on hair length, texture & product usage.</li>
                            <li>• Appointments are highly recommended for bridal and major treatments.</li>
                            <li>• Home services are available for bridal packages within Kanhangad limits.</li>
                            <li>• Please arrive 10 minutes prior to your scheduled time.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
