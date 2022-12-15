/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
    content: ["*.{html,js,pug,css}"],
    darkMode: "class",
    theme: {
        colors: {
			transparent: "transparent",
			current: "currentColor",
			white: colors.white,
			gray: colors.gray,
			slate: colors.slate,
        },
        extend: {
            fontFamily: {
                sans: ["Archivo", "Open Sans", "Inria Sans", ...defaultTheme.fontFamily.sans],
                heading: ["Archivo", "Alegreya Sans", ...defaultTheme.fontFamily.sans],
                mono: ["Space Mono", "Fira Code", ...defaultTheme.fontFamily.mono],
            },
        },
    },
    plugins: [
        plugin(function ({ addBase, addComponents, addUtilities, theme }) {
            addBase({
                html: {
                  fontSize: "10px",
                },
            });
        }),
    ],
};
