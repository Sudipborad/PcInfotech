const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/logos/:path*",
        destination: "/LOGOS/:path*",
      },
      {
        source: "/LOGOS/Redington.svg",
        destination: "/LOGOS/redington.svg",
      },
    ];
  },
};

module.exports = nextConfig;
