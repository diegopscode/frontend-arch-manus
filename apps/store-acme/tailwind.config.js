/** @type {import('tailwindcss').Config} */
const baseConfig = require('@ecommerce/config-tailwind/tailwind.config.js');

module.exports = {
  ...baseConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui-primitives/src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui-commerce/src/**/*.{js,ts,jsx,tsx}',
  ],
};
