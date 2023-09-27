/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				Black: "#37395F",
				Blue: "#7C8EBF",
				Gray: "#697591",
				White: "#FFFFFF",
				Purple: "#A53050",
				Pink: "#DB8387",
				Green: "#5C9978",
				Yellow: "#E1B75D",
				LightGreen: "#BCF7D7",
				LightYellow: "#FFD67F",
				LightBlue: "#D3EDF3",
				LightPurple: "#CBD7FB",
				LightPink: "#FFD6D6",
			},
			fontSize: {
				"14xl": "13rem",
			},
		},
	},
	plugins: [],
};
