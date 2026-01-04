"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const navItems: { label: string; href: string; external?: boolean }[] = [
  { label: "Home", href: "/" },
  { label: "Proyectos", href: "/projects" },
];

const isLinkActive = (pathname: string, href: string) => {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur">
      <nav className="w-full px-4 sm:px-6 py-4">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-4" aria-label="Volver al inicio">
            <span className="text-lg font-semibold tracking-tight text-foreground group-hover:opacity-80 transition">Karen Mendez</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
            {navItems.map(({ label, href, external }) => {
              const active = !external && isLinkActive(pathname, href);
              const baseClasses = "transition-colors";
              const stateClasses = active ? "text-foreground" : "hover:text-foreground";

              if (external) {
                return (
                  <a key={label} className={`${baseClasses} ${stateClasses}`} href={href} rel="noreferrer" target="_blank">
                    {label}
                  </a>
                );
              }

              return (
                <Link key={label} className={`${baseClasses} ${stateClasses}`} href={href}>
                  {label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="p-2"
              aria-expanded={open}
              aria-label="Abrir menú de navegación"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {open ? (
        <div className="md:hidden bg-background/95 px-4 py-4 shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 text-sm font-medium">
            {navItems.map(({ label, href, external }) => {
              const commonClasses = "w-full px-3 py-2 text-left transition hover:bg-foreground/10";

              if (external) {
                return (
                  <a key={label} className={commonClasses} href={href} rel="noreferrer" target="_blank">
                    {label}
                  </a>
                );
              }

              return (
                <Link key={label} className={commonClasses} href={href}>
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
