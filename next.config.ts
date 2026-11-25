import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Set at build time for sub-path hosting, e.g. GitHub Pages: NEXT_PUBLIC_BASE_PATH=/Portfolio
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    "*.replit.dev",
    "*.repl.co",
    "*.replit.app",
    "127.0.0.1",
    "localhost",
  ],
};

export default nextConfig;
