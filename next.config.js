/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    experimental: {
        outputStandalone: true,
    },
    basePath: '/nextjs-template'
};

module.exports = nextConfig;
