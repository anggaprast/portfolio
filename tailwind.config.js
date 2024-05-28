/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#222831',
        'light': '#eeeeee',
        'bluebtn': '#00B3BB',
        'grayform': '#343840'
      },
      fontFamily: {
        'plusjs': ["Plus Jakarta Sans", 'sans-serif'],
      },
      animation: {
        'slide': 'slide 20s linear infinite',
        'fadeIn': 'fade 1s',
      },
      keyframes: {
        slide: {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          },
        },
        fade: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          },
        },
      },
    },
  },
  plugins: [],
}