import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load initial cart from localStorage
    useEffect(() => {
        try {
            const saved = JSON.parse(localStorage.getItem('shobitha_cart') || '[]');
            setCartItems(Array.isArray(saved) ? saved : []);
        } catch (e) {
            setCartItems([]);
        }
    }, []);

    // Save cart whenever it changes and dispatch global event
    const saveCart = (items) => {
        setCartItems(items);
        try {
            localStorage.setItem('shobitha_cart', JSON.stringify(items));
            window.dispatchEvent(new Event('cart_updated'));
        } catch (e) {}
    };

    const addToCart = (product, quantity = 1) => {
        const existingIndex = cartItems.findIndex(item => item.id === product.id);
        let updated;
        if (existingIndex > -1) {
            updated = [...cartItems];
            updated[existingIndex].quantity += quantity;
        } else {
            updated = [
                ...cartItems,
                {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    priceNum: product.priceNum || parseInt(String(product.price).replace(/[^\d]/g, ''), 10) || 0,
                    image: product.image,
                    category: product.category,
                    badge: product.badge,
                    quantity: quantity
                }
            ];
        }
        saveCart(updated);
        setIsCartOpen(true); // Automatically open the cart drawer when item added!
    };

    const removeFromCart = (id) => {
        const updated = cartItems.filter(item => item.id !== id);
        saveCart(updated);
    };

    const updateQuantity = (id, delta) => {
        const updated = cartItems.map(item => {
            if (item.id === id) {
                const newQty = item.quantity + delta;
                return newQty > 0 ? { ...item, quantity: newQty } : null;
            }
            return item;
        }).filter(Boolean);
        saveCart(updated);
    };

    const clearCart = () => {
        saveCart([]);
    };

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);
    const toggleCart = () => setIsCartOpen(prev => !prev);

    // Derived values
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const cartTotalNum = cartItems.reduce((acc, item) => acc + (item.priceNum * item.quantity), 0);
    const cartTotal = `₹${cartTotalNum.toLocaleString('en-IN')}`;

    return (
        <CartContext.Provider
            value={{
                cartItems,
                isCartOpen,
                cartCount,
                cartTotal,
                cartTotalNum,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                openCart,
                closeCart,
                toggleCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export default CartContext;
