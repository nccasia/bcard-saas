/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Disable Next.js built-in image optimizer.
    // This avoids the upstream fetch that is failing with ECONNREFUSED
    // When using a custom Express server, while letting you keep
    unoptimized: true,
  },
};

module.exports = nextConfig;
