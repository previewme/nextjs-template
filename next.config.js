/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en'],
        defaultLocale: 'en'
    },
    reactStrictMode: true,
    poweredByHeader: false,
    basePath: '/nextjs-template'
};

module.exports = nextConfig;
