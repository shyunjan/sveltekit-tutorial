/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        mono: ['"Fira Mono"', 'monospace']
      },
      fontSize: {
        '.8x': [
          '1.175rem',
          {
            lineHeight: 1.6
          }
        ],
        '.9x': [
          '1.2rem',
          {
            lineHeight: 1.618
          }
        ],
        '1.3x': [
          '1.3rem',
          {
            lineHeight: 1.7
          }
        ],
        '2.5xl': [
          '1.6rem !important',
          {
            lineHeight: 1.618
          }
        ],
        '4.2xl': [
          '2.4rem',
          {
            lineHeight: 1.35
          }
        ],
        '5.3xl': [
          '3.2rem',
          {
            lineHeight: 1.1
          }
        ]
      },
      lineHeight: {
        h1: 1.1,
        h2: 1.35
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
        green: {
          50: '#e7ffe4',
          100: '#c9ffc4',
          200: '#98ff90',
          300: '#56ff50',
          400: '#00ff002e',
          500: '#00e606',
          600: '#00b809',
          700: '#008b07',
          800: '#076d0d',
          900: '#0b5c11',
          950: '#003406'
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
          950: 'hsl(212, 63%, 16%)'
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
          950: 'hsl(0, 0%, 21%)'
        },
        'picton-blue': {
          50: '#eff8ff',
          100: '#dfefff',
          200: '#b8e1ff',
          300: '#78c9ff',
          400: '#42b4ff4d',
          500: '#0693f1',
          600: '#0074ce',
          700: '#005ca7',
          800: '#024e8a',
          900: '#084272',
          950: '#06294b'
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
          950: '#2f333c'
        },
        seashell: {
          50: '#f8f8f8',
          100: '#f1f1f1',
          200: '#dcdcdc',
          300: '#bdbdbd',
          400: '#989898',
          500: '#7c7c7c',
          600: '#656565',
          700: '#525252',
          800: '#464646',
          900: '#3d3d3d',
          950: '#292929'
        },
        tuatara: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#383838',
          950: '#262626'
        },
        iron: {
          50: '#f7f7f7',
          100: '#ededed',
          200: '#dfdfdf',
          300: '#cccccc',
          400: '#adadad',
          500: '#999999',
          600: '#888888',
          700: '#7b7b7b',
          800: '#676767',
          900: '#545454',
          950: '#363636'
        },
        'primary-hsl': 'hsl(var(--sk-theme-1-hsl))',
        'primary-hsla': 'hsla(var(--sk-theme-1-hsl), .02)'
      },
      margin: {
        0.1: '0.1rem',
        0.2: '0.2rem',
        0.8: '0.8rem',
        1.6: '1.6rem',
        1.8: '1.8rem',
        9.5: '2.4rem',
        13: '3.2rem',
        26: '6.4rem',
        '1em': '1em'
      },
      padding: {
        0.1: '0.1rem',
        0.2: '0.2rem',
        0.4: '0.4rem',
        0.8: '0.8rem',
        1.6: '1.6rem',
        1.8: '1.8rem',
        9.5: '2.4rem'
      },
      spacing: {
        0.1: '0.1rem'
      },
      borderRadius: {
        0.4: '0.4rem'
      },
      boxShadow: {
        2: '0 2px 6px hsla(var(--sk-theme-1-hsl),.2)'
      }
    }
  },

  // corePlugins: {
  // 	preflight: true
  // },

  plugins: []
};

module.exports = config;
