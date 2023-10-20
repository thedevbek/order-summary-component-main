/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		fontFamily: {
			sans: ['Red Hat Display', ['sans-serif']],
		},
		colors: {
			'color-pale-blue': ' hsl(225, 100%, 94%)',
			'color-bright-blue': ' hsl(245, 75%, 52%)',
			'color-white': ' hsl(225, 100%, 98%)',
			'color-desaturated-blue': 'hsl(224, 23%, 55%)',
			'color-dark-blue': ' rgb(203 213 225)',
            'color-slate-blue': 'rgba(226 245 249)'
		},
	},
};
