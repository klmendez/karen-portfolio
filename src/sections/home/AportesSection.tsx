import { FadeIn } from "@/components/Motion";
import Section from "@/components/Section";

const aportes = [
  {
    title: "Diseño web & UX",
    description:
      "Interfaces fluidas, accesibles y con narrativa visual usando React, Tailwind y animaciones con intención.",
    tag: "Frontend Craft",
    accent: {
      overlay: "from-rose-400/22 via-amber-400/10 to-transparent",
      beam: "bg-[radial-gradient(circle_at_center,_rgba(244,114,182,0.40),_transparent_70%)]",
      marker: "bg-gradient-to-r from-rose-400 via-amber-400 to-lime-300",
    },
  },
  {
    title: "Backend & APIs",
    description:
      "Arquitecturas modulares, automatización de flujos y servicios escalables con enfoque en calidad y documentación.",
    tag: "Software Foundations",
    accent: {
      overlay: "from-indigo-400/22 via-blue-400/12 to-transparent",
      beam: "bg-[radial-gradient(circle_at_center,_rgba(129,140,248,0.36),_transparent_72%)]",
      marker: "bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300",
    },
  },
  {
    title: "IA aplicada",
    description:
      "Modelos de NLP, visión y analítica avanzada integrados en productos reales con métricas accionables.",
    tag: "AI Delivery",
    accent: {
      overlay: "from-emerald-400/24 via-teal-400/12 to-transparent",
      beam: "bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.38),_transparent_68%)]",
      marker: "bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-200",
    },
  },
];

export function AportesSection() {
  return (
    <Section
      title="Aportes"
      subtitle="Me diferencio por integrar : tecnología + contabilidad + investigación."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {aportes.map((item) => (
          <FadeIn key={item.title}>
            <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white/80 p-8 text-slate-900 shadow-[0_28px_70px_rgba(15,23,42,0.12)] backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:shadow-[0_40px_110px_rgba(15,23,42,0.22)] dark:bg-slate-950/55 dark:text-white dark:shadow-[0_36px_90px_rgba(2,6,23,0.55)]">
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent.overlay} opacity-70 transition duration-500 group-hover:opacity-95`}
                aria-hidden="true"
              />
              <div
                className={`pointer-events-none absolute -left-16 top-1/2 h-44 w-44 -translate-y-1/2 transform-gpu blur-3xl opacity-0 transition duration-500 group-hover:opacity-70 ${item.accent.beam}`}
                aria-hidden="true"
              />

              <div className="relative flex flex-1 flex-col justify-between gap-6">
                <div className="space-y-5">
                  <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-slate-900/70 dark:text-white/85">
                    <span className={`h-1.5 w-12 rounded-full ${item.accent.marker}`} aria-hidden="true" />
                    {item.tag}
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight text-inherit dark:text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-800/80 dark:text-white/90">{item.description}</p>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.38em] text-slate-800/55 dark:text-white/85">
                  <span className="h-px flex-1 bg-gradient-to-r from-slate-900/15 via-slate-900/35 to-transparent dark:from-white/18 dark:via-white/36" aria-hidden="true" />
                  Impacto medible
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
