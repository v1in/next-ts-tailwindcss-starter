module.exports = {
  images: {
    domains: ['img.shields.io'],
  },
  publicRuntimeConfig: {
    // add your public runtime environment variables here with NEXT_PUBLIC_*** prefix
  },
  webpack: (config) => {
    // extend your webpack configuration here
    return config;
  },
};
