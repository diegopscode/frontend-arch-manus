module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-function-return-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
