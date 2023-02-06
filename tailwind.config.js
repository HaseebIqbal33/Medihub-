/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  plugins: [
    require('autoprefixer')
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      primary: '#C09B4F',
      secondary: '#E7E7E7',
      tertiary: '#181818',
      yellow: '#DDB660',
      blue: '#4246B4',
      green: '#55B865',
      gray: {
        100: '#f7fafc',
        200: '#E7E7E7',
        300: '#D9D9D9',
        400: '#cccccc',
        500: '#c2c2c2',
        600: '#c4c4c4',
        700: '#c1c1c1',
        800: '#C2C2C2',
        900: '#1a202c',
      },
    },
    fontFamily: {
      sans: ['Nexa', 'sans-serif'],
      serif: ['Inter', 'serif'],
    },
  },
  plugins: [],
}
