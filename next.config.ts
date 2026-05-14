import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Forçar novo build
  generateBuildId: async () => {
    return "build-" + Date.now();
  },
};

export default nextConfig;
