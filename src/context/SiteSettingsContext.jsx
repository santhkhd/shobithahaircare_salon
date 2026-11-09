import React, { createContext, useContext, useState, useEffect } from 'react';
import { syncWithGoogleSheets } from '../services/googleSheetsSync';

const SETTINGS_STORAGE_KEY = 'shobitha_site_settings';

export const defaultSiteSettings = {
    // 1. Navigation Menu & Page Visibility
    pageVisibility: {
        store: true,      // /wedding-store & /store
        bridal: true,     // /bridal
        gallery: true,    // /gallery
        pricing: true,    // /pricing
        reviews: true,    // /reviews
        blog: true,       // /blog
        contact: true     // /contact
    },

    // 2. Salon Operating Status
    salonStatus: {
        state: 'open', // 'open' | 'closed' | 'booked' | 'bridal_event'
        stateLabel: 'Open Today',
        hours: '9:00 AM – 8:00 PM',
        notice: '',
        showStatusPill: true
    },

    // 3. Home Page Sections
    homeSections: {
        beforeAfterSlider: true,
        priceEstimator: true,
        faqSection: true,
        instaFeed: true,
        statsStrip: true,
        welcomeOfferModal: false
    },

    // 4. WhatsApp & Contact Settings
    contactSettings: {
        whatsappNumber: '918075340778',
        phoneCallNumber: '+918075340778',
        advanceBookingNotice: 'Bridal Muhurtham makeovers require 5–7 days advance booking.',
        showAdvanceNotice: true
    },

    // 5. Affiliate Configurations (Flipkart, Amazon, Myntra)
    affiliateSettings: {
        amazonTag: 'shobithasalon-21',
        flipkartAffiliateId: '',
        enableAffiliateBadges: true,
        affiliateDisclosure: 'Curated by Shobitha Studio bridal stylists. As an affiliate partner, we may earn a small commission on qualifying purchases at zero extra cost to you.'
    }
};

const SiteSettingsContext = createContext();

export const SiteSettingsProvider = ({ children }) => {
    const [settings, setSettings] = useState(() => {
        try {
            const saved = localStorage.getItem(SETTINGS_STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                return {
                    ...defaultSiteSettings,
                    ...parsed,
                    pageVisibility: { ...defaultSiteSettings.pageVisibility, ...(parsed.pageVisibility || {}) },
                    salonStatus: { ...defaultSiteSettings.salonStatus, ...(parsed.salonStatus || {}) },
                    homeSections: { ...defaultSiteSettings.homeSections, ...(parsed.homeSections || {}) },
                    contactSettings: { ...defaultSiteSettings.contactSettings, ...(parsed.contactSettings || {}) },
                    affiliateSettings: { ...defaultSiteSettings.affiliateSettings, ...(parsed.affiliateSettings || {}) }
                };
            }
        } catch (e) {
            console.error('Error loading site settings:', e);
        }
        return defaultSiteSettings;
    });

    // Save and broadcast changes
    const updateSettings = (updater) => {
        setSettings(prev => {
            const next = typeof updater === 'function' ? updater(prev) : { ...prev, ...updater };
            try {
                localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(next));
                window.dispatchEvent(new Event('site_settings_updated'));
            } catch (e) {
                console.error('Error saving site settings:', e);
            }
            return next;
        });
    };

    // Listen to changes across tabs
    useEffect(() => {
        const handleSync = () => {
            try {
                const saved = localStorage.getItem(SETTINGS_STORAGE_KEY);
                if (saved) {
                    setSettings(JSON.parse(saved));
                }
            } catch (e) {}
        };
        window.addEventListener('site_settings_updated', handleSync);
        window.addEventListener('storage', handleSync);
        return () => {
            window.removeEventListener('site_settings_updated', handleSync);
            window.removeEventListener('storage', handleSync);
        };
    }, []);

    // Automatic Worldwide Live Sync with Google Sheets
    useEffect(() => {
        // Run initial live sync in background on site load
        syncWithGoogleSheets();

        // Re-sync when visitor returns to tab (e.g. mobile app switch or browser focus)
        const handleWindowFocus = () => {
            syncWithGoogleSheets();
        };
        window.addEventListener('focus', handleWindowFocus);

        // Keep fresh every 5 minutes while visitor browses
        const interval = setInterval(() => {
            syncWithGoogleSheets();
        }, 300000);

        return () => {
            window.removeEventListener('focus', handleWindowFocus);
            clearInterval(interval);
        };
    }, []);

    // Specific helper toggles
    const togglePage = (pageKey) => {
        updateSettings(prev => ({
            ...prev,
            pageVisibility: {
                ...prev.pageVisibility,
                [pageKey]: !prev.pageVisibility[pageKey]
            }
        }));
    };

    const toggleHomeSection = (sectionKey) => {
        updateSettings(prev => ({
            ...prev,
            homeSections: {
                ...prev.homeSections,
                [sectionKey]: !prev.homeSections[sectionKey]
            }
        }));
    };

    const setSalonState = (state, label, hours, notice = '') => {
        updateSettings(prev => ({
            ...prev,
            salonStatus: {
                ...prev.salonStatus,
                state,
                stateLabel: label,
                hours: hours || prev.salonStatus.hours,
                notice
            }
        }));
    };

    return (
        <SiteSettingsContext.Provider value={{
            settings,
            updateSettings,
            togglePage,
            toggleHomeSection,
            setSalonState,
            pageVisibility: settings.pageVisibility,
            salonStatus: settings.salonStatus,
            homeSections: settings.homeSections,
            contactSettings: settings.contactSettings,
            affiliateSettings: settings.affiliateSettings
        }}>
            {children}
        </SiteSettingsContext.Provider>
    );
};

export const useSiteSettings = () => {
    const ctx = useContext(SiteSettingsContext);
    if (!ctx) {
        return {
            settings: defaultSiteSettings,
            pageVisibility: defaultSiteSettings.pageVisibility,
            salonStatus: defaultSiteSettings.salonStatus,
            homeSections: defaultSiteSettings.homeSections,
            contactSettings: defaultSiteSettings.contactSettings,
            affiliateSettings: defaultSiteSettings.affiliateSettings,
            togglePage: () => {},
            toggleHomeSection: () => {},
            setSalonState: () => {},
            updateSettings: () => {}
        };
    }
    return ctx;
};

