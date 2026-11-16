import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Three products were renamed after the name check. Old links keep working.
  async redirects() {
    return [
      { source: "/shop/products/tala-wall-light", destination: "/shop/products/sulo-wall-light", permanent: true },
      { source: "/shop/products/kiso-stool", destination: "/shop/products/asa-stool", permanent: true },
      { source: "/shop/products/habi-wall-piece", destination: "/shop/products/hibla-wall-piece", permanent: true },
    ];
  },
};

export default nextConfig;
