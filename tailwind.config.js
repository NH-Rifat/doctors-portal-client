module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      xxsm: '315px',
      xsm: '410px',
      sm: '550px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1490px',
      '3xl': '1720px',
    },
    extend: {
      colors: {
        primary: '#0FCFEC',
        secondary: '#19D3AE',
        accent: '#3A4256',
        neutral: '#3d4451',
        'base-100': '#ffffff',
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
        red: {
          50: '#b5365a',
          100: '#c72653',
          200: '#b0123e',
          300: '#d6134b',
          400: '#d2bab0',
          500: '#d6134b',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
