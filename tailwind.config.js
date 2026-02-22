/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#3b82f6",
                secondary: "#10b981",
                background: "#0b0f18",
                surface: "#12141a",
                border: "rgba(255, 255, 255, 0.1)",
                "text-main": "#ffffff",
                "text-dim": "rgba(255, 255, 255, 0.6)",
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
            borderRadius: {
                '3xl': '1.5rem',
                '4xl': '2rem',
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            boxShadow: {
                'glass-premium': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            }
        },
    },
    plugins: [],
}
