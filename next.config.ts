import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "digitalassets.tesla.com",
      },
    ],
  },
};

export default nextConfig;
