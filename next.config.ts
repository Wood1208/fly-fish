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
  async headers() {
    return [
      {
        source: '/(.*)',  // 适用于所有路径
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // 设置缓存策略
          },
        ],
      },
    ];
  },
};

export default nextConfig;

