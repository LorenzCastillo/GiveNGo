/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./node_modules/flowbite-react/**/*.js",
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./public/**/*.html",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "custom": {
                    orange: "#FF9255",
                    grey: "#313039",
                    dark_grey: "#1A1F23",
                    post_button_left: "#FF7A00",
                    post_button_right: "#B95900"
                }
            },
            fontFamily: {
                "lato": {
                    black: ["Lato_Black", "sans-serif"],
                    blackItalic: ["Lato_BlackItalic", "sans-serif"],
                    bold: ["Lato_Bold", "sans-serif"],
                    boldItalic: ["Lato_BoldItalic", "sans-serif"],
                    italic: ["Lato_Italic", "sans-serif"],
                    light: ["Lato_Light", "sans-serif"],
                    lightItalic: ["Lato_LightItalic", "sans-serif"],
                    regular: ["Lato_Regular", "sans-serif"],
                    thin: ["Lato_Thin", "sans-serif"],
                    thinItalic: ["Lato_ThinItalic", "sans-serif"]
                }
            },
        },
    },
    plugins: [
        // Tailwind plugin for Multiline Text Overflow
        require("@tailwindcss/line-clamp"),
        require("tailwind-scrollbar"),
        require("flowbite/plugin")
    ],
};
