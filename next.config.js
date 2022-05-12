/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    localeDetection: false,
    locales: ["fr", "en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
