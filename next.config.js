/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    domains: ['image.tmdb.org'],
  },
};

module.exports = nextConfig;
