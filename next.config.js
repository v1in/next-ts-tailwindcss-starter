/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // More details - https://nextjs.org/docs/api-reference/next/image#configuration-options
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.shields.io',
      },
    ],
  },
  publicRuntimeConfig: {
    // add your public runtime environment variables here with NEXT_PUBLIC_*** prefix
  },
  webpack: (config) => {
    // extend your webpack configuration here
    return config;
  },
};
