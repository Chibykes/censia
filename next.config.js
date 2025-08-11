/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  fallbacks: {
    document: "/offline", // fallback for document/page when offline
  },
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: "NetworkFirst",
      options: {
        cacheName: "offlineCache",
        expiration: {
          maxEntries: 200,
        },
      },
    },
  ],
});

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPWA(nextConfig);
