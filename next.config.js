/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    dirs: ["app", "components", "lib", "pages", "utils"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
