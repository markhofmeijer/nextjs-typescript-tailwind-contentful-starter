module.exports = {
  parser: `@typescript-eslint/parser`,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    `plugin:@typescript-eslint/recommended`,
    `plugin:prettier/recommended`,
    `prettier/@typescript-eslint`,
  ],
  plugins: [`@typescript-eslint`, `prettier`, "react"],
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: `module`,
  },
  rules: {
    "react/prop-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "prettier/prettier": [
      `error`,
      {
        endOfLine: `auto`,
      },
    ],
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
}
