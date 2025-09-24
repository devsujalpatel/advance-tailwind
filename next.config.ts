import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // add https.ui.aceteriny.com to next.config.ts
  images: {
    remotePatterns: [new URL("https://ui.aceternity.com/**")],
  },
};

export default nextConfig;
