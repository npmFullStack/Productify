/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/features/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Montserrat", "system-ui", "sans-serif"],
                logo: ["Bowlby One", "sans-serif"]
            },
            colors: {
                primary: "#FFC400",
                secondary: "#8C00FF",
                bgColor: "#FAF8FF"
            }
        }
    },
    plugins: []
};
