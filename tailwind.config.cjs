/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
      fontSize: {
        ".8xl": ['1.175rem', {
          lineHeight: 1.6,
        }],
        ".9xl": ['1.2rem', {
          lineHeight: 1.618,
        }],
        "2.5xl": ['1.6rem !important', {
          lineHeight: 1.618,
        }],
        "4.2xl": ['2.4rem', {
          lineHeight: 1.35,
        }],
        "5.3xl": ['3.2rem', {
          lineHeight: 1.1,
        }],
      },
      lineHeight: {
        h1: 1.1,
        h2: 1.35,
      },
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
        mystic: {
          50: '#f5f7f9',
          100: '#e9edf0',
          200: '#e0e6eb',
          300: '#bcc9d4',
          400: '#9caebe',
          500: '#8497ad',
          600: '#72849e',
          700: '#66758f',
          800: '#566177',
          900: '#485060',
          950: '#2f333c',
        },
        'primary-hsl': 'hsl(var(--sk-theme-1-hsl))',
        'primary-hsla': 'hsla(var(--sk-theme-1-hsl), .02)',
      },
      margin: {
        0.4: '0.1rem',
        6.5: '1.6rem',
        7.5: '1.8rem',
        9.5: '2.4rem',
      },
      padding: {
        0.4: '0.1rem',
        6.5: '1.6rem',
        7.5: '1.8rem',
        9.5: '2.4rem',
      },
      borderRadius: {
        ml: '0.4rem',
      },
      boxShadow: {
        2: '0 2px 6px hsla(var(--sk-theme-1-hsl),.2)',
      }
    }
	},

	// corePlugins: {
	// 	preflight: true
	// },
	
	plugins: []
};

module.exports = config;
