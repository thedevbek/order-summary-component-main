/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		fontFamily: {
			sans: ['Red Hat Display', ['sans-serif']],
		},
        colors: {
            'projectPaleBlue': ' hsl(225, 100%, 94%)',
            'projectBrightBlue': ' hsl(245, 75%, 52%)',
            'projectWhite': ' hsl(225, 100%, 98%)',
            'projectDesaturatedBlue': 'hsl(224, 23%, 55%)',
            'projectDarkBlue': ' hsl(223, 47%, 23%)'
        }
	},
};
