/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}',
  './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#0E0E0E',
        secondary: '#F5F5F7',
      },
      colors: {
        primary: '#0E0E0E',
        secondary: '#F5F5F7',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      // font-family: 'Jost', sans-serif;
      jost: ['Jost', 'serif'],
    },
    
  },
  plugins: [],
}
