module.exports = {
  purge: [
    "./src/pages/**/*.ts",
    "./src/pages/**/*.tsx",
    "./src/components/**/*.ts",
    "./src/components/**/*.tsx",
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: '"Open Sans", sans-serif',
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
