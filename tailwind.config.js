/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        copper: {
          DEFAULT: '#F8A635',
          dark: '#D4891A',
          light: '#FBBF45',
        },
      },
    },
  },
  plugins: [],
}
