import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { 
    FaTimes, FaTrashAlt, FaPlus, FaMinus, FaWhatsapp, 
    FaShoppingBag, FaStore, FaTruck, FaShieldAlt, FaArrowRight 
} from 'react-icons/fa';

const CartDrawer = () => {
    const { 
        cartItems, 
        isCartOpen, 
        closeCart, 
        cartCount, 
        cartTotal, 
        cartTotalNum, 
        updateQuantity, 
        removeFromCart, 
        clearCart 
    } = useCart();

    const [deliveryType, setDeliveryType] = useState('pickup'); // 'pickup' | 'delivery'
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [notes, setNotes] = useState('');
    const [formError, setFormError] = useState('');

    if (!isCartOpen) return null;

    const deliveryFeeNum = deliveryType === 'delivery' ? 120 : 0;
    const grandTotalNum = cartTotalNum + deliveryFeeNum;
    const grandTotal = `₹${grandTotalNum.toLocaleString('en-IN')}`;

    const handleWhatsAppOrder = (e) => {
        e.preventDefault();
        if (!name.trim()) {
            setFormError('Please enter your name.');
            return;
        }
        if (!phone.trim() || phone.replace(/[^\d]/g, '').length < 10) {
            setFormError('Please enter a valid 10-digit WhatsApp/Phone number.');
            return;
        }
        if (deliveryType === 'delivery' && !address.trim()) {
            setFormError('Please enter your full delivery address.');
            return;
        }
        setFormError('');

        // Build elegant WhatsApp Invoice message
        let itemsText = cartItems.map((item, idx) => {
            const itemTotal = `₹${(item.priceNum * item.quantity).toLocaleString('en-IN')}`;
            return `${idx + 1}. *${item.name}* (x${item.quantity}) — ${itemTotal}`;
        }).join('\n');

        const message = 
            `🛍️ *NEW STORE ORDER — Shobitha Haircare & Bridal Studio*\n` +
            `──────────────────────────\n` +
            `👤 *Customer:* ${name.trim()}\n` +
            `📞 *Phone:* ${phone.trim()}\n` +
            `📦 *Order Type:* ${deliveryType === 'pickup' ? '🏪 Salon Store Pickup (Kanhangad)' : '🚚 Home Delivery via Courier'}\n` +
            (deliveryType === 'delivery' ? `📍 *Address:* ${address.trim()}\n` : '') +
            (notes.trim() ? `📝 *Notes/Sizing:* ${notes.trim()}\n` : '') +
            `──────────────────────────\n` +
            `🛒 *ITEMS ORDERED:*\n` +
            `${itemsText}\n\n` +
            `💵 *Subtotal:* ${cartTotal}\n` +
            (deliveryType === 'delivery' ? `🚚 *Courier Delivery:* ₹120\n` : `🏪 *Pickup Fee:* Free\n`) +
            `💰 *GRAND TOTAL:* *${grandTotal}*\n` +
            `──────────────────────────\n` +
            `Please confirm stock availability and send GPay/UPI QR or bank transfer details. Thank you!`;

        const waUrl = `https://wa.me/918075340778?text=${encodeURIComponent(message)}`;
        window.open(waUrl, '_blank');
    };

    return (
        <div 
            className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end transition-opacity duration-300"
            onClick={closeCart}
        >
            <div 
                className="w-full max-w-md bg-[#FAF9F5] h-full shadow-2xl flex flex-col justify-between overflow-hidden relative border-l border-[#E8D9C5] select-none"
                onClick={(e) => e.stopPropagation()}
            >
                {/* 1. DRAWER TOP BAR */}
                <div className="bg-white p-4 sm:p-5 border-b border-[#E8D9C5] flex items-center justify-between shadow-2xs">
                    <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-2xl bg-[#4A0A16] text-amber-300 flex items-center justify-center text-lg shadow-xs">
                            <FaShoppingBag />
                        </div>
                        <div>
                            <h2 className="font-serif font-black text-base sm:text-lg text-gray-950 leading-tight">
                                Your Shopping Cart
                            </h2>
                            <span className="text-xs text-[#A46E19] font-bold">
                                {cartCount} {cartCount === 1 ? 'item' : 'items'} selected
                            </span>
                        </div>
                    </div>

                    <button
                        onClick={closeCart}
                        className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition active:scale-95"
                        title="Close Cart"
                        aria-label="Close Cart"
                    >
                        <FaTimes size={14} />
                    </button>
                </div>

                {/* 2. DRAWER BODY */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {cartItems.length === 0 ? (
                        <div className="py-16 text-center">
                            <div className="w-20 h-20 rounded-full bg-[#FAF3E8] border border-[#E8DAC8] text-[#8E580B] flex items-center justify-center mx-auto mb-4 text-3xl">
                                <FaShoppingBag />
                            </div>
                            <h3 className="font-serif font-black text-lg text-gray-950 mb-1">
                                Your cart is empty
                            </h3>
                            <p className="text-xs text-gray-500 max-w-xs mx-auto mb-6">
                                Add pure silk bridal sarees, professional salon haircare, or Solah Shringar sets to your cart.
                            </p>
                            <button
                                onClick={closeCart}
                                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#B97A1E] to-[#8E580B] text-white text-xs font-bold shadow-md active:scale-95 transition"
                            >
                                Start Shopping
                            </button>
                        </div>
                    ) : (
                        <>
                            {/* Items List */}
                            <div className="space-y-3">
                                {cartItems.map((item) => (
                                    <div 
                                        key={item.id}
                                        className="bg-white p-3.5 rounded-2xl border border-[#E8D9C5] shadow-2xs flex items-center gap-3"
                                    >
                                        {/* Thumbnail */}
                                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-stone-100 shrink-0 border border-gray-100">
                                            <img 
                                                src={item.image} 
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Info */}
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-serif font-extrabold text-xs sm:text-sm text-gray-950 truncate leading-snug">
                                                {item.name}
                                            </h4>
                                            <div className="text-xs font-black text-[#8E580B] mt-0.5">
                                                {item.price}
                                            </div>

                                            {/* Quantity Adjusters */}
                                            <div className="flex items-center gap-2 mt-2">
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 flex items-center justify-center text-xs font-bold transition active:scale-90"
                                                >
                                                    <FaMinus size={8} />
                                                </button>
                                                <span className="font-mono font-black text-xs px-1 text-gray-900">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 flex items-center justify-center text-xs font-bold transition active:scale-90"
                                                >
                                                    <FaPlus size={8} />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Remove Button */}
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-gray-400 hover:text-red-500 p-2 transition"
                                            title="Remove item"
                                        >
                                            <FaTrashAlt size={13} />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Delivery Type Selector */}
                            <div className="bg-white p-3.5 rounded-2xl border border-[#E8D9C5]">
                                <span className="text-[11px] font-black uppercase tracking-wider text-gray-600 block mb-2">
                                    Choose Delivery Option
                                </span>
                                <div className="grid grid-cols-2 gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setDeliveryType('pickup')}
                                        className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1 transition ${
                                            deliveryType === 'pickup'
                                                ? 'bg-[#FAF3E8] border-[#A46E19] text-[#8E580B] shadow-2xs'
                                                : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                                        }`}
                                    >
                                        <FaStore size={14} />
                                        <span>Studio Pickup</span>
                                        <span className="text-[10px] text-emerald-700 font-extrabold">FREE</span>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setDeliveryType('delivery')}
                                        className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1 transition ${
                                            deliveryType === 'delivery'
                                                ? 'bg-[#FAF3E8] border-[#A46E19] text-[#8E580B] shadow-2xs'
                                                : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                                        }`}
                                    >
                                        <FaTruck size={14} />
                                        <span>Courier Delivery</span>
                                        <span className="text-[10px] text-gray-500">+₹120</span>
                                    </button>
                                </div>
                            </div>

                            {/* Customer Details Form */}
                            <form className="bg-white p-3.5 rounded-2xl border border-[#E8D9C5] space-y-2.5">
                                <span className="text-[11px] font-black uppercase tracking-wider text-gray-600 block mb-1">
                                    Your Details (For Order Invoice)
                                </span>

                                {formError && (
                                    <div className="p-2 rounded-lg bg-red-50 text-red-700 text-xs font-bold border border-red-200">
                                        {formError}
                                    </div>
                                )}

                                <div>
                                    <input
                                        type="text"
                                        placeholder="Full Name *"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full text-xs font-semibold px-3 py-2 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Phone / WhatsApp Number *"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full text-xs font-semibold px-3 py-2 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                                    />
                                </div>

                                {deliveryType === 'delivery' && (
                                    <div>
                                        <textarea
                                            rows={2}
                                            placeholder="Full Delivery Address & Pincode *"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            className="w-full text-xs font-semibold px-3 py-2 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                                        />
                                    </div>
                                )}

                                <div>
                                    <input
                                        type="text"
                                        placeholder="Optional Notes / Saree Blouse Size / Preferences"
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                        className="w-full text-xs font-semibold px-3 py-2 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                                    />
                                </div>
                            </form>
                        </>
                    )}
                </div>

                {/* 3. DRAWER FOOTER: PRICING TOTAL & 1-TAP WHATSAPP BUTTON */}
                {cartItems.length > 0 && (
                    <div className="bg-white p-4 sm:p-5 border-t border-[#E8D9C5] shadow-lg space-y-3">
                        <div className="space-y-1 text-xs">
                            <div className="flex items-center justify-between text-gray-600 font-semibold">
                                <span>Items Subtotal:</span>
                                <span>{cartTotal}</span>
                            </div>
                            <div className="flex items-center justify-between text-gray-600 font-semibold">
                                <span>Shipping:</span>
                                <span>{deliveryType === 'delivery' ? '₹120' : 'FREE (Pickup)'}</span>
                            </div>
                            <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-base font-black text-gray-950">
                                <span>Estimated Total:</span>
                                <span className="text-[#8E580B] text-lg">{grandTotal}</span>
                            </div>
                        </div>

                        {/* Instant WhatsApp Order Button */}
                        <button
                            onClick={handleWhatsAppOrder}
                            className="w-full py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md active:scale-95 transition"
                        >
                            <FaWhatsapp size={18} />
                            <span>Place Order via WhatsApp</span>
                            <FaArrowRight size={12} />
                        </button>

                        <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-500 font-bold text-center">
                            <FaShieldAlt className="text-emerald-700" size={11} />
                            <span>100% Genuine Certified Silk & Salon Products • Verified Studio</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartDrawer;
