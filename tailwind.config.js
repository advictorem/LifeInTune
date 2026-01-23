// See https://tailwindcss.com/docs/configuration for details

const theme = require('./src/styles/theme')

module.exports = {
  theme: {
    extend: {
      screens: {
        '2xl': '1500px',
      },
      fontFamily: {
        display: 'Montserrat, sans-serif',
        body: 'museo, sans-serif',
      },
      colors: theme.colors,
    },
  },
  variants: {},
  plugins: [],
}
