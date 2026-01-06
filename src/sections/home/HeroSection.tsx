import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/Motion";
import type { Profile } from "@/types/content";

interface HeroSectionProps {
  profile: Profile;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] px-3 py-1 bg-background/70 uppercase tracking-[0.3em] text-foreground/70">
      {children}
    </span>
  );
}

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <FadeIn>
      <section className="relative isolate flex min-h-screen w-full items-center overflow-hidden py-28">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_62%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full">
          <div className="grid items-center gap-16 px-6 sm:px-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-16 xl:px-24 2xl:px-32">
            <div className="max-w-3xl space-y-10">
              <div className="inline-flex items-center gap-2 bg-foreground/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/70">
                Perfil profesional
              </div>

              <div className="space-y-6">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.85rem] md:leading-[1.05]">
                  {profile.name.toUpperCase()}
                </h1>
                <p className="max-w-2xl text-base opacity-85 sm:text-lg md:text-xl">
                  {profile.headline}
                </p>
                <p className="max-w-3xl text-sm opacity-80 sm:text-base">
                  {profile.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-medium uppercase tracking-[0.4em] text-foreground/60 sm:gap-3">
                <Pill>Analítica</Pill>
                <Pill>Automatización</Pill>
                <Pill>APIs</Pill>
                <Pill>IA</Pill>
                <Pill>Finanzas</Pill>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/projects" className="btn btn-primary">
                  Ver proyectos
                </Link>

                <a href="/cv.pdf" download className="btn btn-outline">
                  Descargar CV
                </a>

                <a href={`mailto:${profile.contact.emails[0]}`} className="btn btn-outline">
                  Contacto
                </a>

                <a
                  href={profile.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="mx-auto flex-none lg:mx-0">
              <div className="group relative h-56 w-56 overflow-hidden rounded-full shadow-[0_40px_70px_rgba(20,25,40,0.7)] transition-shadow duration-700 sm:h-64 sm:w-64 lg:h-72 lg:w-72 group-hover:shadow-[0_36px_95px_rgba(12,12,35,0.4)]">
                <div
                  className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-br from-foreground/20 via-transparent to-foreground/10 opacity-70 blur-xl transition duration-700 group-hover:opacity-90"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-foreground/20 backdrop-blur-[1px] transition duration-700 group-hover:ring-foreground/40"
                  aria-hidden="true"
                />
                <Image
                  src="/Fotos/1.jpeg"
                  alt="Retrato de Karen Mendez"
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 256px, 220px"
                  priority
                  className="rounded-full object-cover object-[center_15%] scale-140 transition-transform duration-[900ms] group-hover:scale-[1.48]"
                />
                <div
                  className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_65%)]"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
