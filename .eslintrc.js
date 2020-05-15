module.exports = {
  parser: "@typescript-eslint/parser",

  plugins: [
    "@typescript-eslint",
    "react",
    "import",
    "jsx-a11y",
  ],

  extends: [
    "airbnb-typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],

  env: {
    node: true,
    browser: true,
    rules: {
      "no-console": "off",
      "react/prop-types": "off",
    },
  }
}