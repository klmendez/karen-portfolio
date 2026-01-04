"use client";

import { Github, Mail } from "lucide-react";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/klmendez",
    icon: Github,
    external: true,
  },
  {
    label: "Gmail",
    href: "mailto:klmendez@unimayor.edu.co",
    icon: Mail,
  },
];

export default function ContactBubbles() {
  return (
    <aside className="pointer-events-none fixed bottom-6 right-4 z-40 flex flex-col gap-3 md:bottom-8 md:right-6">
      {contactLinks.map(({ label, href, icon: Icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="pointer-events-auto grid h-12 w-12 place-items-center bg-background/85 text-foreground/70 shadow-[0_12px_30px_rgba(0,0,0,0.15)] transition hover:-translate-y-1 hover:text-foreground"
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          <Icon size={20} />
        </a>
      ))}
    </aside>
  );
}
