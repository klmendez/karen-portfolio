import type { NextConfig } from "next";

const isGithubPages = process.env.DEPLOY_TARGET === "github";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Solo necesario para GitHub Pages (sitio estático)
  ...(isGithubPages
    ? {
        output: "export",
        basePath: "/karen-portfolio",
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
