import type { NextConfig } from "next";

const isVercel = process.env.VERCEL === "1" || !!process.env.VERCEL_ENV;
const isGithubPages = !isVercel && process.env.DEPLOY_TARGET === "github";

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
