module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				azulEntel: '#0436a1',
				naranjaEntel: '#ff560a',
			},
			fontFamily: {
				barlow: ['Barlow', 'sans-serif'],
			},
			spacing: {
				500: '500px',
				1200: '1200px',
				66: '66px',
				aa: 'calc(100% - 20rem)',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
