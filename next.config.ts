import type { NextConfig } from "next";

const remotePatternsList = [
  {
    protocol: "http" as const,
    hostname: "localhost",
    port: "3001",
  },
  {
    protocol: "http" as const,
    hostname: "localhost",
  },
  {
    protocol: "https" as const,
    hostname: "localhost",
  },
  {
    protocol: "http" as const,
    hostname: "127.0.0.1",
    port: "3001",
  },
  {
    protocol: "http" as const,
    hostname: "127.0.0.1",
  },
  {
    protocol: "https" as const,
    hostname: "ik.imagekit.io",
  },
];

if (process.env.NEXT_PUBLIC_PAYLOAD_URL) {
  try {
    const url = new URL(process.env.NEXT_PUBLIC_PAYLOAD_URL);
    if (!remotePatternsList.some((p) => p.hostname === url.hostname && p.port === url.port)) {
      remotePatternsList.push({
        protocol: url.protocol.replace(":", "") as "http" | "https",
        hostname: url.hostname,
        port: url.port || undefined,
      });
    }
  } catch {
    // Ignore URL parse errors
  }
}

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: remotePatternsList,
  },
};

export default nextConfig;
