module.exports = {
  purge: [],
  darkMode: false, // Or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Nunito"]
    },
    backgroundColor: theme => ({
      ...theme("colors"),
      login: "#FAD000",
      btn: "#00A8F5",
      btnh: "#5CCBFF"
    }),
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
};
