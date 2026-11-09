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
 * Worldwide Master Sync:
 * Fetches latest prices, festive offers, uploaded images, salon operating status,
 * site navigation, and store products from Google Sheet.
 * Broadcasts live update events to immediately re-render active components on all devices globally.
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

        // 1. Update Services, Prices & Durations
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

        // 3. Update Custom Service Images (Uploaded Images Sync Worldwide)
        if (data && data.serviceImages && typeof data.serviceImages === 'object' && Object.keys(data.serviceImages).length > 0) {
            try {
                const existing = JSON.parse(localStorage.getItem('shobitha_custom_service_images') || '{}');
                const merged = { ...existing, ...data.serviceImages };
                localStorage.setItem('shobitha_custom_service_images', JSON.stringify(merged));
                window.dispatchEvent(new Event('service_images_updated'));
            } catch (e) {}
        }

        // 4. Update Store Status & Operating Hours
        if (data && data.storeStatus && typeof data.storeStatus === 'object') {
            const st = data.storeStatus;
            if (st.State || st.Text) {
                try {
                    const statusObj = {
                        state: st.State || 'open',
                        text: st.Text || 'Open Today: 9:00 AM – 8:00 PM',
                        customNote: st.CustomNote || 'Walk-ins & Appointments welcome'
                    };
                    localStorage.setItem('shobitha_store_status', JSON.stringify(statusObj));
                    window.dispatchEvent(new Event('store_status_updated'));
                } catch (e) {}
            }
        }

        // 5. Update Site Settings (Navigation, Home Sections, Contact)
        if (data && data.siteSettings && typeof data.siteSettings === 'object') {
            try {
                localStorage.setItem('shobitha_site_settings', JSON.stringify(data.siteSettings));
                window.dispatchEvent(new Event('site_settings_updated'));
            } catch (e) {}
        }

        // 6. Update Store & Affiliate Products
        if (data && data.storeProducts && Array.isArray(data.storeProducts) && data.storeProducts.length > 0) {
            try {
                localStorage.setItem('shobitha_custom_store_products', JSON.stringify(data.storeProducts));
                window.dispatchEvent(new Event('store_products_updated'));
            } catch (e) {}
        }

        // 7. Broadcast price update event to re-render all active pages
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
