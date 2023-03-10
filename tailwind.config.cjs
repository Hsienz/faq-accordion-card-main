/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.jsx"],
	theme: {
		colors: {
			// Text

			Very_dark_desaturated_blue: "hsl(238, 29%, 16%)",
			Soft_red: "hsl(14, 88%, 65%)",

			// Background gradient:

			Soft_violet: "hsl(273, 75%, 66%)",
			Soft_blue: "hsl(240, 73%, 65%)",

			// Text

			Very_dark_grayish_blue: "hsl(237, 12%, 33%)",
			Dark_grayish_blue: "hsl(240, 6%, 50%)",

			// Dividers

			Light_grayish_blue: "hsl(240, 5%, 91%)",
		},
		fontFamily: {
			sans: ["Kumbh Sans", "sans-serif"],
		},
	},
	plugins: [],
};
