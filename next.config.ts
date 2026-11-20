import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    // Язык по умолчанию — таджикский (как в макете).
    return [{ source: "/", destination: "/tg", permanent: false }];
  },
};

export default nextConfig;
