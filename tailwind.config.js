module.exports = {
  purge: [],
  darkMode: false, // Or 'media' or 'class'
  theme: {
    /* Screens: {
      Culturedwhite: "#F3F3F3",
    }, */
    fontFamily: {
      sans: ["Nunito"]
    }, /*,
    backgroundColor: theme => ({
      ...theme("colors"),
      cyberyellow: "#FAD000",
      minionyellow: "#FFE45C",
      goldenrod: "#E6A503",
      culturedwhite: "#F3F3F3",
      honolulublue: "#0070A3",
      bluejeans: "#00A8F5",
      capriblue: "#5CCBFF",
      davysgrey: "#242424",
      richblack: "#0A0C09"

    }), /* De esta forma solo coge los colores para los fondos, pero no para texto, por ejemplo */
    extend: {
      colors: {
        cyberyellow: "#FAD000",
        minionyellow: "#FFE45C",
        goldenrod: "#E6A503",
        culturedwhite: "#F3F3F3",
        honolulublue: "#0070A3",
        bluejeans: "#00A8F5",
        capriblue: "#5CCBFF",
        davysgray: "#4D4D4D",
        richblack: "#0A0C09"
      }
    }
  }, /* De esta forma puedes coger los colores para todo */
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
};
