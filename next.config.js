/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    localeDetection: false,
    locales: ["fr", "en"],
    defaultLocale: "en",
  },
  images: {
    domains: [
      "localhost",
      "klara-portfolio-bucket.s3.eu-central-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
