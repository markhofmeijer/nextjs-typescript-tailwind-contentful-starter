const defaultTheme = require("tailwindcss/defaultTheme")

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
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
