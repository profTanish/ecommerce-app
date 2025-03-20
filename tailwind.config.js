/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: "Mulish, sans-serif",
        },
        extend: {
            colors: {
                darkSlate: "#1a2e35",
                lightGray: "#F2F2F2",
                darkGray: "#CCCCCC",
                textGray: "#4D4D4D",
            },
            maxWidth: {
                container: "82.5rem",
            },
        },
    },
    plugins: [],
};