module.exports = {
  purge: [
    "./src/pages/**/*.ts",
    "./src/pages/**/*.tsx",
    "./src/components/**/*.ts",
    "./src/components/**/*.tsx",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: '"Yusei Magic", sans-serif',
      },
      colors: {
        primary: {
          lighter: "#d3d1c5",
          default: "#afab96",
          dark: "#958f72",
        },
        secondary: {
          default: "#e5e5e5",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
