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
            fontSize: {
                h1: [ '4.209em', { letterSpacing: "-1.5px" } ],
                h2: [ '3.157em', { letterSpacing: "-0.5px" } ],
                h3: [ '2.369em', { letterSpacing: "normal" } ],
                h4: [ '1.777em', { letterSpacing: "0.25px" } ],
                h5: [ '1.333em', { letterSpacing: "normal" } ],
                h6: [ '1em', { letterSpacing: "0.15px" } ],
                subtitle: [ '1.111em', { letterSpacing: '0.15px' } ],
                subtitleBold: [ '1em', { letterSpacing: '0.1px', fontWeight: '600' } ],
                button: [ '0.888em', { letterSpacing: "1.25px", fontWeight: '600' } ],  // Uppercase
                caption: [ '0.833em', { letterSpacing: '0.75px' } ],
                overline: [ 'clamp(12px, 11.8873239437px + 0.4225352113vw, 14px)', { letterSpacing: '1.5px' } ],  // Uppercase
                base: [ 'clamp(18px, 15.8873239437px + 0.4225352113vw, 24px)', { lineHeight: "1.725", letterSpacing: "0.5px" } ],
                'base-sm': [ 'clamp(16px, 15.8873239437px + 0.4225352113vw, 18px)', { lineHeight: '1.625', letterSpacing: "0.25px" } ]
            },
            fontFamily: {
                sans: ["Open Sans", "Idealist Sans", ...defaultTheme.fontFamily.sans],
                heading: ["Idealist Sans", "Open Sans", ...defaultTheme.fontFamily.sans],
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
