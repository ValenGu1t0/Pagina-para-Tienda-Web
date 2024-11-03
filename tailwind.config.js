/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {

      boxShadow: {'myshadow': '0 4px 15px rgba(0, 0, 0, 0.4)'},
      maxWidth: { '1/2': '50%' },
      screens: { 'celu': '425px' }  // desp revisar mas breakpoints

    },
  },
  plugins: [],
}

