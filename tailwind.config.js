/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        secular: ['Secular One'],
        inter: ['Inter'],
      },
    },
  },
  plugins: [require('daisyui')],
};
