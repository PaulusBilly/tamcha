import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'www.lebepur.com',
      },
      {
        protocol: 'https',
        hostname: 'images.sellbrite.com',
      },
      {
        protocol: 'https',
        hostname: 'raepublic.com',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'blog.davidstea.com',
      },
    ],
  },
};

export default nextConfig;
