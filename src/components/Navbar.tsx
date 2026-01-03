import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          Karen M.
        </Link>

        <div className="flex items-center gap-4 text-sm">
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="/projects">
            Proyectos
          </Link>
          <a className="hover:underline" href="mailto:klmendez@unimayor.edu.co">
            Contacto
          </a>
          <a
            className="hover:underline"
            href="https://github.com/klmendez"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
