/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7c3aed',
        secondary: '#6b46c1',
        accent: '#ec4899',
        dark: '#1f1637',
        light: '#faf5ff',
        surface: '#f8f2ff',
        lavender: '#f3e8ff',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Manrope', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Manrope', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 60px rgba(124, 58, 237, 0.12)',
        glow: '0 18px 40px rgba(124, 58, 237, 0.18)',
      },
    },
  },
  plugins: [],
};
