/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#18222d',
        secondary: '#7f8f6a',
        dark: '#10161d',
        light: '#f4efe7',
        accent: '#c79b63',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Fraunces', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(16, 22, 29, 0.08)',
      },
    },
  },
  plugins: [],
};
