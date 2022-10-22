/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
    },
  },
  plugins: [],
};
