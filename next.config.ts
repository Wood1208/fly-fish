import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'haowallpaper.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ts3.cn.mm.bing.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.qzq.at',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ts4.cn.mm.bing.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
