module.exports = {
  purge: [
    './public/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth:{
        6:'6px',
      },
      marginLeft:{
        0.5:'-3px',
      },
      zIndex: {
       '0.5':'-1',
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}