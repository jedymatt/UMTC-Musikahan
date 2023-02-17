/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#239a4e",
				"primary-20": "#C7F0D6",
				"primary-10": "#d3ffee",
			},
		},
	},
	plugins: [],
}
