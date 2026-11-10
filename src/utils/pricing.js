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

    let trimmedOffer = String(offerPrice).trim();

    // Auto-convert decimal percentages from Google Sheets / Excel:
    // When a cell in Google Sheets has "50%" or 50%, Google Sheets returns the raw decimal 0.5 (e.g. 0.1 = 10%, 0.25 = 25%, 0.5 = 50%)
    const rawDecimal = parseFloat(trimmedOffer);
    if (!trimmedOffer.includes('%') && !isNaN(rawDecimal) && rawDecimal > 0 && rawDecimal < 1) {
        trimmedOffer = `${Math.round(rawDecimal * 100)}%`;
    }

    // 1. Percentage discount e.g. "50%", "10%", "20%"
    if (trimmedOffer.includes('%')) {
        const pct = parseFloat(trimmedOffer.replace(/[^0-9.]/g, ''));
        if (!isNaN(pct) && pct > 0 && pct < 100) {
            const finalNum = Math.round(numBase - (numBase * pct) / 100);
            return {
                hasDiscount: true,
                displayPrice: `₹${finalNum.toLocaleString('en-IN')}`,
                originalPrice: basePrice,
                badge: `${pct}% OFF`,
                discountPercent: pct
            };
        }
    }

    // 2. Flat price e.g. "300" or "₹300"
    const offerNum = parseFloat(trimmedOffer.replace(/[^0-9.]/g, ''));
    if (!isNaN(offerNum) && offerNum > 0 && offerNum < numBase) {
        const pct = Math.round(((numBase - offerNum) / numBase) * 100);
        return {
            hasDiscount: true,
            displayPrice: `₹${offerNum.toLocaleString('en-IN')}`,
            originalPrice: basePrice,
            badge: `SAVE ₹${Math.round(numBase - offerNum).toLocaleString('en-IN')}`,
            discountPercent: pct
        };
    }

    return {
        hasDiscount: false,
        displayPrice: basePrice,
        originalPrice: null,
        badge: trimmedOffer
    };
}

