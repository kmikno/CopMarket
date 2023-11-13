/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Montserrat: ['Montserrat'],
    },

    extend: {
      colors: {
        main: {
          800: '#2b4254',
        },
        gray: {
          200: '#D5DAE1',
        },
      },
    },
  },
  plugins: [],
};
