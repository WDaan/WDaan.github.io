const sizes = {}
for (let index = 1; index <= 100; index++) {
  sizes[index + 'px'] = index + 'px'
}
const minSize = {
  0: '0',
  '1/4': '25%',
  '1/2': '50%',
  '3/4': '75%',
  full: '100%'
}

const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: { height: sizes, width: sizes, minWidth: minSize, minHeight: minSize, screens: { xs: '320px' } },
    colors
  },
  variants: {
    extend: {}
  },
  plugins: []
}
