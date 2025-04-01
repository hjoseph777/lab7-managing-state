/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  basePath: process.env.NODE_ENV === 'production' ? '/lab7-managing-state' : '', // Only use basePath in production
  assetPrefix: process.env.NODE_ENV === 'production' ? '/lab7-managing-state/' : '', // Only use assetPrefix in production
  images: {
    unoptimized: true, // Required for static export
    domains: ['localhost', '169.254.26.236'], // Allow images from these domains
  },
  trailingSlash: true, // Add trailing slashes for consistent paths
  reactStrictMode: false, // Disable strict mode to avoid double-rendering in development
  
  // Point to the src directory for better organization
  distDir: '.next',
  
  // Fix common hydration issues
  compiler: {
    // Eliminate dead code
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
};

export default nextConfig;
