/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // basePath: "/us/washcombo-all-in-one",
  images: { unoptimized: true },
  sassOptions: {
    includePaths: ["styles/SJ"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  assetPrefix: "/washcombo",
};

module.exports = nextConfig;
