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
        accent: {
          DEFAULT: '#E11D48',
          dark: '#BE123C',
        },
        border: 'hsl(0 0% 100% / 0.1)',
        sidebar: {
          border: 'hsl(0 0% 100% / 0.1)',
        },
        input: 'hsl(0 0% 100% / 0.1)',
        ring: '#F8A635',
        background: '#0a0a0a',
        foreground: '#fafafa',
        primary: {
          DEFAULT: '#F8A635',
          foreground: '#0a0a0a',
        },
        secondary: {
          DEFAULT: 'hsl(0 0% 14.9%)',
          foreground: 'hsl(0 0% 98%)',
        },
        muted: {
          DEFAULT: 'hsl(0 0% 14.9%)',
          foreground: 'hsl(0 0% 63.9%)',
        },
        mutedForeground: 'hsl(0 0% 63.9%)',
        card: {
          DEFAULT: 'hsl(0 0% 9%)',
          foreground: 'hsl(0 0% 98%)',
        },
      },
    },
  },
  plugins: [],
}
