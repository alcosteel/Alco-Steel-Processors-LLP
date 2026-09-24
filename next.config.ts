import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/products",
        destination: "/capabilities",
        permanent: true,
      },
      {
        source: "/products/:slug",
        destination: "/capabilities",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
