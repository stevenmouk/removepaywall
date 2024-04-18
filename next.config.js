/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  reactStrictMode: true,
  // trailingSlash: false,
  // skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
