import type { NextConfig } from "next";

const remotePatternsList: Array<
  | { protocol: "http"; hostname: string; port?: string }
  | { protocol: "https"; hostname: string; port?: string }
> = [
  {
    protocol: "http",
    hostname: "localhost",
    port: "3001",
  },
  {
    protocol: "http",
    hostname: "localhost",
  },
  {
    protocol: "https",
    hostname: "localhost",
  },
  {
    protocol: "http",
    hostname: "127.0.0.1",
    port: "3001",
  },
  {
    protocol: "http",
    hostname: "127.0.0.1",
  },
  {
    protocol: "https",
    hostname: "ik.imagekit.io",
  },
];

if (process.env.NEXT_PUBLIC_PAYLOAD_URL) {
  try {
    const url = new URL(process.env.NEXT_PUBLIC_PAYLOAD_URL);
    const proto = url.protocol.replace(":", "") === "https" ? "https" : "http";
    if (!remotePatternsList.some((p) => p.hostname === url.hostname && p.port === (url.port || undefined))) {
      remotePatternsList.push(
        url.port
          ? { protocol: proto, hostname: url.hostname, port: url.port }
          : { protocol: proto, hostname: url.hostname }
      );
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
