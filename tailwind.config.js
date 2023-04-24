/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1440px',
    },
    fontFamily: {
      main: ['Inter', 'sans-serif'],
      'text-landing': ['Hurricane', 'cursive'],
    },
    extend: {
      colors: {
        'main-green': '#1ED760',
        'form-green': '#1AB26B',
        'gray-line': '#4F4F4F',
        'gray-input': '#4C4C4',
        'gray-sidebar': '#030303',
        'gray-gradient-light': '#282828',
        'gray-gradient-dark': '#121212',
      },
      backgroundImage: (theme) => ({
        'gradient-main': `linear-gradient(176.13deg, ${theme('colors.gray-gradient-light')} 2.6%, ${theme('colors.gray-gradient-dark')} 104.99%)`,
      }),
    },
  },
  plugins: [],
};
