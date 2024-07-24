const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const config = {
  plugins: [
    //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    tailwindcss(),
    //But others, like autoprefixer, need to run after,
    autoprefixer,
    process.env.NODE_ENV === 'production' ? cssnano : null // See https://tailwindcss.com/docs/optimizing-for-production
  ]
};

module.exports = config;
