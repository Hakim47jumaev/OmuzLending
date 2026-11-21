import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    // Язык по умолчанию — таджикский (как в макете).
    return [
      { source: "/", destination: "/tj", permanent: false },
      // Старый адрес таджикской версии.
      { source: "/tg", destination: "/tj", permanent: true },
    ];
  },
};

export default nextConfig;
