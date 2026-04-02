module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  },
};
