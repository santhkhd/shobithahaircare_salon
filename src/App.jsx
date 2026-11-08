import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { BookingProvider } from './context/BookingContext';
import { CartProvider } from './context/CartContext';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Bridal from './pages/Bridal';
import Gallery from './pages/Gallery';
import Pricing from './pages/Pricing';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import PriceManager from './pages/PriceManager';
import WeddingStore from './pages/WeddingStore';
import NotFound from './pages/NotFound';

function App() {
    return (
        <BookingProvider>
            <CartProvider>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/services/:id" element={<ServiceDetail />} />
                        <Route path="/bridal" element={<Bridal />} />
                        <Route path="/store" element={<WeddingStore />} />
                        <Route path="/wedding-store" element={<WeddingStore />} />
                        <Route path="/marriage-items" element={<WeddingStore />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/reviews" element={<Reviews />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:id" element={<BlogPost />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/admin" element={<PriceManager />} />
                        <Route path="/price-editor" element={<PriceManager />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </CartProvider>
        </BookingProvider>
    );
}

export default App;
