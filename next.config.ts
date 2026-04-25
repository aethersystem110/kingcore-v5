import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/kingcore-v5",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
