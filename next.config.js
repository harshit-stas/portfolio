/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  // If deploying to GitHub Pages at username.github.io/repo-name,
  // uncomment the two lines below and set repo-name.
  // basePath: "/repo-name",
  // assetPrefix: "/repo-name/",
};

module.exports = nextConfig;
