export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background/90 py-10 text-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-base font-semibold tracking-tight">¿Listo para colaborar?</p>
          <p className="max-w-xl text-foreground/70">
            Escríbeme cuando quieras conversar sobre proyectos de analítica, automatización o desarrollo.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a className="underline decoration-foreground/30 underline-offset-4 transition hover:decoration-foreground" href="mailto:klmendez@unimayor.edu.co">
            klmendez@unimayor.edu.co
          </a>
          <span className="hidden h-1 w-1 rounded-full bg-foreground/40 md:inline" />
          <a className="underline decoration-foreground/30 underline-offset-4 transition hover:decoration-foreground" href="https://github.com/klmendez" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span className="hidden h-1 w-1 rounded-full bg-foreground/40 md:inline" />
          <a className="underline decoration-foreground/30 underline-offset-4 transition hover:decoration-foreground" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-6xl flex-col gap-2 px-4 sm:px-6 text-foreground/60 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Karen Mendez</p>
        <p>Hecho con Next.js, datos y café colombiano :D
        </p>
      </div>
    </footer>
  );
}
