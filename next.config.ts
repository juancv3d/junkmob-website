import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/junkmob-website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
