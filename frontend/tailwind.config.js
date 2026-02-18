/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Override with pure black and white
                black: "#000000",
                white: "#FFFFFF",
                gray: {
                    50: "#F9FAFB",
                    100: "#F3F4F6",
                    200: "#E5E7EB",
                    300: "#D1D5DB",
                    400: "#9CA3AF",
                    500: "#6B7280",
                    600: "#4B5563",
                    700: "#374151",
                    800: "#1F2937",
                    900: "#111827",
                },
            },
            fontFamily: {
                sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
            },
            spacing: {
                '4.5': '1.125rem',
            },
        },
    },
    plugins: [],
}
