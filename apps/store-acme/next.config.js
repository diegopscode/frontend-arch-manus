/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@ecommerce/contracts',
    '@ecommerce/sdk-commerce',
    '@ecommerce/theme-acme',
    '@ecommerce/theme-core',
    '@ecommerce/ui-primitives',
  ],
};

module.exports = nextConfig;
