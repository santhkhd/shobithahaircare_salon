/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#FAF6EC',
                    100: '#F4EBD4',
                    200: '#E8D5A3',
                    300: '#DABF73',
                    light: '#F4EBD4',
                    DEFAULT: '#C59A27', // Rich warm metallic gold
                    dark: '#9E7815',
                },
                secondary: {
                    50: '#FDF7F6',
                    100: '#FAEDE9',
                    light: '#F5DDD7',
                    DEFAULT: '#C4776C', // Warm Rose-Gold / Soft Terracotta Blush
                    dark: '#9F554A',
                },
                gold: {
                    light: '#F4EBD4',
                    DEFAULT: '#C59A27',
                    dark: '#9E7815',
                },
                dark: {
                    light: '#282522',
                    DEFAULT: '#181715', // Warm luxury espresso charcoal
                    darker: '#100F0E',
                },
                cream: '#FAF8F5',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.5s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
