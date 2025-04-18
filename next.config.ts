/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  basePath: process.env.NODE_ENV === 'production' ? '/lab7-managing-state' : '', // Only use basePath in production
  assetPrefix: process.env.NODE_ENV === 'production' ? '/lab7-managing-state/' : '', // Only use assetPrefix in production
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Add trailing slashes for consistent paths
};

module.exports = nextConfig;