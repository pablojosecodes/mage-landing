/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverActions: true
  },
  images: { domains: ['i.ytimg.com']}
};

module.exports = nextConfig;


