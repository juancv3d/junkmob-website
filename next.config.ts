import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/junkmob-website",
  assetPrefix: "/junkmob-website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
