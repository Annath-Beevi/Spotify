module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor:{
        "lightblack": "#131313",
        "app-black": "#121212",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      height: {
        "1/10": "10%",
        "9/10": "90%",
    },
      buttonbackground:{
        "lightgreen": "#1ed760",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
