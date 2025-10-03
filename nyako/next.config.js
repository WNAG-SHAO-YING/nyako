// next.config.js (CommonJS)
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: path.join(__dirname), // 指到 nyako
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3005",
        pathname: "/public/**",
      },
    ],
  },
};

module.exports = nextConfig;
