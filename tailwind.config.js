const colors = require('tailwindcss/colors')


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat']
      },
      colors: {
        x50primary: '#43384f',
        x50text: '#e3e3e3',
        cyan: colors.cyan,
        bluegray: colors.blueGray,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
