module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
    es2021: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  plugins: ["vue", "@typescript-eslint", "prettier"],
  rules: {
    "@typescript-eslint/no-unused-vars": ["off"],
    "vue/multi-word-component-names": "off",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
      {
        usePrettierrc: false,
        fileInfoOptions: {
          withNodeModules: true,
        },
      },
    ],
  },
};
