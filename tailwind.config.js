const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    letterSpacing: {
      tighter: '-.06em',
      tight: '-.025em',
      normal: '0',
      wide: '.045em',
      wider: '.063em',
      widest: '.1em',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1696px',
    },
    fontFamily: {
      main: ['Inter', 'sans-serif'],
      landing: ['Hurricane', 'cursive'],
    },
    extend: {
      height: {
        'nav-height': '80px',
      },
      dropShadow: {
        'cover-pic': '0px 0px 10px rgba(0, 0, 0, 0.6)',
      },
      boxShadow: {
        dropdown: '0px 5px 30px rgba(0, 0, 0, 0.8)',
      },
      colors: {
        'main-green': '#1ED760',
        'hover-green': '#169E5F',
        'active-green': '#0d613a',
        'form-green': '#1AB26B',
        'gray-line': '#4F4F4F',
        'gray-input': '#C4C4C4',
        'gray-sidebar': '#030303',
        'gray-icon': '#ABABAB',
        'gray-form': '#171717',
        'gray-gradient-light': '#282828',
        'gray-gradient-dark': '#121212',
      },
      backgroundImage: (theme) => ({
        'gradient-main': `linear-gradient(176.13deg, ${theme(
          'colors.gray-gradient-light'
        )} 2.6%, ${theme('colors.gray-gradient-dark')} 104.99%)`,
        'gradient-dropdown':
          'linear-gradient(180deg, rgba(23, 23, 23, 0) 0%, #000000 100%);',
      }),
      keyframes: {
        heartAnimation: {
          '0%': { transform: 'scale(0)', opacity: 1 },
          '50%': { transform: 'scale(1.5)', opacity: 0.5 },
          '100%': { transform: 'scale(0)', opacity: 0 },
        },
      },
      animation: {
        'popping-heart': 'heartAnimation 1s',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.stroke-landing': {
          '-webkit-text-stroke': '2px #1ab26b',
        },
      });
    }),
  ],
};
