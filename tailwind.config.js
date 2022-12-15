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
			gore: {
				50: "#f2f1fc",
				100: "#e6e5fa",
				200: "#d1cff6",
				300: "#b8b2ef",
				400: "#a293e6",
				500: "#9178dc",
				600: "#825ecd",
				700: "#704eb4",
				800: "#5c4192",
				900: "#2b2142",
			},
			martinique: {
				50: "#f7f6f9",
				100: "#eeebf3",
				200: "#d9d3e4",
				300: "#b8accd",
				400: "#8f7fb1",
				500: "#715e99",
				600: "#5d4a7f",
				700: "#4d3d67",
				800: "#423557",
				900: "#3a304a",
			},
			nepal: {
				50: "#f5f8fa",
				100: "#eaf0f4",
				200: "#d0dee7",
				300: "#a7c2d2",
				400: "#8db1c4",
				500: "#5687a1",
				600: "#436c86",
				700: "#37586d",
				800: "#314a5b",
				900: "#2c404e",
			},
			pea: {
				50: "#fdf5f3",
				100: "#fce8e4",
				200: "#fbd5cd",
				300: "#f7b8aa",
				400: "#f08e79",
				500: "#e4694f",
				600: "#d3563b",
				700: "#af3e26",
				800: "#913723",
				900: "#793223",
			},
			plum: {
				50: "#fdf6fd",
				100: "#f9ecfb",
				200: "#f5d9f5",
				300: "#ecbbeb",
				400: "#e092dd",
				500: "#ce67ca",
				600: "#b247ad",
				700: "#9c3c95",
				800: "#783071",
				900: "#632c5d",
			},
			razzmatazz: {
				50: "#fef1f7",
				100: "#fde6f2",
				200: "#fdcde5",
				300: "#fda4cf",
				400: "#fb6bae",
				500: "#f4408f",
				600: "#e41e6b",
				700: "#d81159",
				800: "#a41044",
				900: "#88133c",
			},
		},
		extend: {
			fontSize: {
				h1: ["4.209em", { letterSpacing: "-1.5px" }],
				h2: ["3.157em", { letterSpacing: "-0.5px" }],
				h3: ["2.369em", { letterSpacing: "normal" }],
				h4: ["1.777em", { letterSpacing: "0.25px" }],
				h5: ["1.333em", { letterSpacing: "normal" }],
				h6: ["1em", { letterSpacing: "0.15px" }],
				subtitle: ["1.111em", { letterSpacing: "0.15px" }],
				subtitleBold: ["1em", { letterSpacing: "0.1px", fontWeight: "600" }],
				button: ["clamp(13px, 0.888em, 15px)", { letterSpacing: "1.25px", fontWeight: "600" }], // Uppercase
				caption: ["0.833em", { letterSpacing: "0.75px" }],
				overline: ["clamp(12px, 11.8873239437px + 0.4225352113vw, 14px)", { letterSpacing: "1.5px" }], // Uppercase
				base: ["clamp(18px, 15.8873239437px + 0.4225352113vw, 24px)", { lineHeight: "1.725", letterSpacing: "0.5px" }],
				"base-sm": ["clamp(16px, 15.8873239437px + 0.4225352113vw, 18px)", { lineHeight: "1.625", letterSpacing: "0.25px" }],
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
			addBase({ html: { fontSize: "10px", }, });
		}),
	],
};
