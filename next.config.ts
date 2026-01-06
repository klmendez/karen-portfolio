import type { NextConfig } from "next";

const isGithubPages = process.env.DEPLOY_TARGET === "github";

const nextConfig: NextConfig = {
  reactCompiler: true,

  ...(isGithubPages
    ? {
        // GitHub Pages necesita export estático
        output: "export",

        // tu repo se publica en /karen-portfolio
        basePath: "/karen-portfolio",

        // ayuda a que assets y rutas no apunten al dominio raíz
        assetPrefix: "/karen-portfolio/",

        // requerido para next/image en export estático
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
