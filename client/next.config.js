/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
    SOCKET_URL: process.env.SOCKET_URL
  },
};

module.exports = nextConfig;
