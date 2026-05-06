import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["localhost", "127.0.0.1", "192.168.68.83"],
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
