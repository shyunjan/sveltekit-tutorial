/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
      colors: {
        indigo: {
          90: '#e0e6eb'
        },
        teal: {
          850: '#125087'
        },
        stone: {
          890: '#1c7ed4'
        },
        emerald: {
          410: 'rgb(52, 146, 229)'
        },
        matisse: {
          50: 'hsl(207, 73%, 97%)',
          100: 'hsl(212, 75%, 94%)',
          200: 'hsl(208, 75%, 86%)',
          300: 'hsl(207, 76%, 74%)',
          400: 'hsl(206, 74%, 60%)',
          500: 'hsl(206, 70%, 48%)',
          600: 'hsl(208, 77%, 40%)',
          700: 'hsl(209, 76%, 32%)',
          800: 'hsl(209, 71%, 27%)',
          900: 'hsl(210, 64%, 24%)',
          950: 'hsl(212, 63%, 16%)',
        },
        silver: {
          50: 'hsl(0, 0%, 97%)',
          100: 'hsl(0, 0%, 93%)',
          200: 'hsl(0, 0%, 87%)',
          300: 'hsl(0, 0%, 78%)',
          400: 'hsl(0, 0%, 68%)',
          500: 'hsl(0, 0%, 60%)',
          600: 'hsl(0, 0%, 53%)',
          700: 'hsl(0, 0%, 48%)',
          800: 'hsl(0, 0%, 40%)',
          900: 'hsl(0, 0%, 33%)',
          950: 'hsl(0, 0%, 21%)',
        },
      }
    }
	},

	// corePlugins: {
	// 	preflight: true
	// },
	
	plugins: []
};

module.exports = config;
