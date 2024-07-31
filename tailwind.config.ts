// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
      backgroundImage: {
        'custom-gradient-r': 'linear-gradient(90deg, rgba(9,9,11,1) 40%, rgba(9,9,11,0.6) 80%, rgba(0,0,0,0) 100%)',
        'custom-gradient-t': 'linear-gradient(0deg, rgba(9,9,11,1) 40%, rgba(9,9,11,0.6) 80%, rgba(0,0,0,0) 100%)',
        'custom-genre-gradient-t': 'linear-gradient(0deg, rgba(9,9,11,1) 20%, rgba(9,9,11,0.6) 50%, rgba(0,0,0,0) 100%)',
        'custom-series-gradient-t': 'linear-gradient(0deg, rgba(9,9,11,0.8) 20%, rgba(0,0,0,0) 100%)',
      },
    },
  },
  variants: {},
  plugins: [],
}