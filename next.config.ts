import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost'
      } /* ,
      {
        protocol: 'https',
        hostname: 'google.com'
      } */
    ]
  }
};

export default nextConfig;
