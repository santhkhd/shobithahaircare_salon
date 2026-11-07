// Utility to calculate discounted final price, original price strikethrough, and discount badge
export function getDiscountDetails(basePrice, offerPrice) {
    if (!offerPrice) {
        return {
            hasDiscount: false,
            displayPrice: basePrice || '₹0',
            originalPrice: null,
            badge: null
        };
    }

    const numBase = parseFloat(String(basePrice).replace(/[^0-9.]/g, ''));
    if (isNaN(numBase) || numBase <= 0) {
        return {
            hasDiscount: false,
            displayPrice: basePrice || '₹0',
            originalPrice: null,
            badge: null
        };
    }

    const trimmedOffer = String(offerPrice).trim();

    // 1. Percentage discount e.g. "50%", "10%", "20%"
    if (trimmedOffer.includes('%')) {
        const pct = parseFloat(trimmedOffer.replace(/[^0-9.]/g, ''));
        if (!isNaN(pct) && pct > 0 && pct < 100) {
            const finalNum = Math.round(numBase - (numBase * pct) / 100);
            return {
                hasDiscount: true,
                displayPrice: `₹${finalNum.toLocaleString('en-IN')}`,
                originalPrice: basePrice,
                badge: `${pct}% OFF`
            };
        }
    }

    // 2. Flat price e.g. "300" or "₹300"
    const offerNum = parseFloat(trimmedOffer.replace(/[^0-9.]/g, ''));
    if (!isNaN(offerNum) && offerNum > 0 && offerNum < numBase) {
        return {
            hasDiscount: true,
            displayPrice: `₹${offerNum.toLocaleString('en-IN')}`,
            originalPrice: basePrice,
            badge: `SAVE ₹${Math.round(numBase - offerNum).toLocaleString('en-IN')}`
        };
    }

    return {
        hasDiscount: false,
        displayPrice: basePrice,
        originalPrice: null,
        badge: offerPrice
    };
}

