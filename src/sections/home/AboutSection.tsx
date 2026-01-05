import Link from "next/link";

import { FadeIn } from "@/components/Motion";
import type { Profile } from "@/types/content";

const highlightCards = [
  {
    title: "Lo que construyo",
    summary:
      "Automatizo procesos, integro servicios y organizo datos para convertirlos en decisiones accionables.",
    tag: "Solution Design",
    points: [
      "Automatización de procesos (scripts / flujos).",
      "Integraciones de servicios y consumo de APIs.",
      "Estructuración de datos para reportes y dashboards.",
    ],
    footer: "Entrega funcional",
    accent: {
      overlay: "from-cyan-400/24 via-sky-400/12 to-transparent",
      beam: "bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.35),_transparent_68%)]",
      marker: "bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-300",
    },
  },
  {
    title: "Cómo trabajo",
    summary:
      "Combino orden, comunicación y validación continua para que cada entrega se mantenga en el tiempo.",
    tag: "Workflow Culture",
    points: [
      "Problema → diseño → implementación → validación.",
      "Código mantenible: modularidad, nombres claros, Git.",
      "Documentación y comunicación para handoff.",
    ],
    footer: "Procesos limpios",
    accent: {
      overlay: "from-violet-400/22 via-fuchsia-400/12 to-transparent",
      beam: "bg-[radial-gradient(circle_at_center,_rgba(167,139,250,0.34),_transparent_70%)]",
      marker: "bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-300",
    },
  },
  {
    title: "Diferencial",
    summary:
      "Integro visión técnica y financiera para medir impacto real y sostener la mejora continua.",
    tag: "Value Lens",
    points: [
      "Base técnica + comprensión financiera del contexto.",
      "Experiencia académica: investigación, ponencias, sustento.",
      "Enfoque en impacto: eficiencia, trazabilidad, métricas.",
    ],
    footer: "Impacto medible",
    accent: {
      overlay: "from-amber-400/24 via-orange-400/12 to-transparent",
      beam: "bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.36),_transparent_70%)]",
      marker: "bg-gradient-to-r from-amber-400 via-orange-400 to-lime-300",
    },
  },
];

interface AboutSectionProps {
  profile: Profile;
}

export function AboutSection({ profile }: AboutSectionProps) {
  return (
    <FadeIn>
      <section className="relative isolate flex min-h-screen w-full items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_62%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full">
          <div className="grid items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[minmax(0,1fr)_560px] lg:px-16 xl:px-24 2xl:px-32">
            <div className="max-w-3xl space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-foreground/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/70">
                Quién soy
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                  Construyo soluciones con{" "}
                  <span className="bg-gradient-to-r bg-clip-text text-transparent from-cyan-800 via-violet-800 to-amber-800 dark:from-cyan-200 dark:via-violet-200 dark:to-amber-200">
                    software, datos e IA
                  </span>
                  .
                </h2>

                <p className="max-w-2xl text-base leading-relaxed opacity-85 sm:text-lg">
                  Desde <span className="font-semibold">{profile.education?.[0]?.program}</span> me
                  enfoco en automatizar procesos, integrar sistemas y convertir datos en resultados
                  medibles. Mi base en contaduría me ayuda a entender el negocio y diseñar soluciones
                  con impacto.
                </p>

                <p className="max-w-2xl text-sm leading-relaxed opacity-80 sm:text-base">
                  Me muevo entre desarrollo y análisis: versiono con Git, trabajo con bases de datos,
                  conecto APIs y experimento con IA aplicada (CNN / ViT / NLP).
                </p>
              </div>

              <div className="grid gap-3 text-sm opacity-90 sm:grid-cols-2">
                {[
                  "Automatizo tareas y reportes para reducir trabajo manual.",
                  "Integro APIs y centralizo información para decisiones.",
                  "Organizo datos y creo métricas/KPIs para seguimiento.",
                  "Documentación clara y enfoque en mejora continua.",
                ].map((text) => (
                  <div key={text} className="rounded-2xl bg-foreground/5 px-5 py-4 ring-1 ring-foreground/10">
                    <div className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/60" aria-hidden="true" />
                      <p className="leading-relaxed">{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/projects" className="btn btn-primary">
                  Ver proyectos
                </Link>
                <a href={`mailto:${profile.contact.emails[0]}`} className="btn btn-outline">
                  Hablemos
                </a>
              </div>
            </div>

            <div className="grid gap-6">
              {highlightCards.map((card) => (
                <FadeIn key={card.title}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white/80 p-7 text-slate-900 shadow-[0_26px_68px_rgba(15,23,42,0.12)] backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:shadow-[0_40px_110px_rgba(15,23,42,0.22)] dark:bg-slate-950/55 dark:text-white dark:shadow-[0_36px_90px_rgba(2,6,23,0.55)]">
                    <div
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.accent.overlay} opacity-70 transition duration-500 group-hover:opacity-95`}
                      aria-hidden="true"
                    />
                    <div
                      className={`pointer-events-none absolute -left-16 top-1/2 h-44 w-44 -translate-y-1/2 transform-gpu blur-3xl opacity-0 transition duration-500 group-hover:opacity-70 ${card.accent.beam}`}
                      aria-hidden="true"
                    />

                    <div className="relative flex flex-1 flex-col justify-between gap-6">
                      <div className="space-y-5">
                        <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-slate-900/70 dark:text-white/85">
                          <span className={`h-1.5 w-12 rounded-full ${card.accent.marker}`} aria-hidden="true" />
                          {card.tag}
                        </span>
                        <h3 className="text-xl font-semibold tracking-tight text-inherit dark:text-white">{card.title}</h3>
                        <p className="text-sm leading-relaxed text-slate-800/80 dark:text-white/85">{card.summary}</p>

                        <ul className="space-y-3 text-sm text-slate-800/75 dark:text-white/85">
                          {card.points.map((point) => (
                            <li key={point} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900/70 dark:bg-white/80" aria-hidden="true" />
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.38em] text-slate-800/55 dark:text-white/85">
                        <span className="h-px flex-1 bg-gradient-to-r from-slate-900/15 via-slate-900/35 to-transparent dark:from-white/18 dark:via-white/36" aria-hidden="true" />
                        {card.footer}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
