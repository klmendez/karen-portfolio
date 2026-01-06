import type { NextConfig } from "next";

const DEPLOY_TARGET = process.env.DEPLOY_TARGET; // "github" | "vercel" | undefined
const isGithubPages = DEPLOY_TARGET === "github";

const nextConfig: NextConfig = {
  reactCompiler: true,

  ...(isGithubPages
    ? {
        output: "export",
        basePath: "/karen-portfolio",
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
