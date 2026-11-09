import { services } from '../data/services';
import { specialOffers } from '../data/offers';

export const DEFAULT_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbyxmhYmk3iV0Q9YjvJ7Wlyrl69J-hp8CNikUWZRfB-LJJdt870P6JvAm-HBEkbc8JVdMQ/exec';

export const getGoogleSheetWebhookUrl = () => {
    try {
        return localStorage.getItem('shobitha_sheet_webhook') || DEFAULT_WEBHOOK_URL;
    } catch (e) {
        return DEFAULT_WEBHOOK_URL;
    }
};

/**
 * Fetch latest prices and offers from Google Sheet and update in-memory catalog
 * Broadcasts 'prices_updated' event for live re-renders across all active components.
 */
export const syncWithGoogleSheets = async () => {
    const webhookUrl = getGoogleSheetWebhookUrl();
    if (!webhookUrl) return { success: false, reason: 'No webhook URL' };

    try {
        const response = await fetch(webhookUrl, {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        let updatedCount = 0;

        // 1. Update Services & Prices
        if (data && data.services && Array.isArray(data.services) && data.services.length > 0) {
            const sheetMap = new Map();
            data.services.forEach(item => {
                if (item && item.id) {
                    sheetMap.set(String(item.id).trim().toLowerCase(), item);
                }
            });

            services.forEach(s => {
                const sheetItem = sheetMap.get(String(s.id).trim().toLowerCase());
                if (sheetItem) {
                    if (sheetItem.price && sheetItem.price !== s.price) {
                        s.price = sheetItem.price;
                        updatedCount++;
                    }
                    if (sheetItem.offerPrice !== undefined && sheetItem.offerPrice !== s.offerPrice) {
                        s.offerPrice = sheetItem.offerPrice;
                        updatedCount++;
                    }
                    if (sheetItem.duration && sheetItem.duration !== s.duration) {
                        s.duration = sheetItem.duration;
                    }
                    if (sheetItem.hidden !== undefined) {
                        s.hidden = !!sheetItem.hidden;
                    }
                }
            });

            // Persist to local cache for instant offline loads on subsequent visits
            try {
                const customToSave = services.map(s => ({
                    id: s.id,
                    name: s.name,
                    category: s.category,
                    price: s.price,
                    offerPrice: s.offerPrice || '',
                    duration: s.duration,
                    hidden: !!s.hidden
                }));
                localStorage.setItem('shobitha_custom_services', JSON.stringify(customToSave));
                localStorage.setItem('shobitha_last_sheet_sync', new Date().toISOString());
            } catch (e) {}
        }

        // 2. Update Festive Banner & Offers
        if (data && data.offers && typeof data.offers === 'object') {
            const offersData = data.offers;
            if (offersData['Banner Active'] !== undefined) {
                specialOffers.showTopBanner = String(offersData['Banner Active']).toLowerCase() === 'true';
            }
            if (offersData['Banner Badge']) {
                specialOffers.banner.badge = offersData['Banner Badge'];
            }
            if (offersData['Banner Text']) {
                specialOffers.banner.text = offersData['Banner Text'];
            }

            try {
                localStorage.setItem('shobitha_custom_offers', JSON.stringify({
                    showTopBanner: specialOffers.showTopBanner,
                    banner: specialOffers.banner
                }));
            } catch (e) {}
        }

        // 3. Broadcast to all active pages
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('prices_updated', { 
                detail: { updatedCount, timestamp: Date.now() } 
            }));
        }

        return { success: true, updatedCount };
    } catch (err) {
        console.warn('Google Sheets live sync (offline or unavailable):', err.message);
        return { success: false, error: err.message };
    }
};
