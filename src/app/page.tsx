import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/Motion";
import Section from "@/components/Section";
import Badge from "@/components/Badge";
import Card from "@/components/Card";
import TimelineItem from "@/components/TimelineItem";
import Carousel from "@/components/Carousel";

import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] px-3 py-1 bg-background/70 uppercase tracking-[0.3em] text-foreground/70">
      {children}
    </span>
  );
}

export default function Home() {
  const skillEntries = Object.entries(profile.skills);
  const maxSkillCount = skillEntries.reduce(
    (max, [, items]) => Math.max(max, items.length),
    0
  );

  return (
    <>
      <FadeIn>
        <section className="hero-surface relative isolate flex min-h-screen w-full items-center overflow-hidden py-28">
          <span
            className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-foreground/10 blur-[140px]"
            aria-hidden="true"
          />
          <span
            className="absolute bottom-0 right-[-8rem] h-[26rem] w-[26rem] rounded-full bg-foreground/20 blur-[140px]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_60%)]"
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

                  <a
                    href={`mailto:${profile.contact.emails[0]}`}
                    className="btn btn-outline"
                  >
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
                  {/* Mantengo el brillo suave opcional */}
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

      <main className="mx-auto max-w-7xl px-4 pb-24 sm:px-8">
        <FadeIn>
          <section className="mt-20 grid gap-12 bg-gradient-to-br from-background/90 via-background/60 to-foreground/5 px-6 py-14 shadow-[0_30px_80px_rgba(0,0,0,0.12)] sm:px-12 sm:py-16 lg:grid-cols-[380px_minmax(0,1fr)]">
            <div className="relative overflow-hidden bg-gradient-to-br from-foreground/12 via-foreground/4 to-transparent p-8">
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.05),_transparent_70%)]"
                aria-hidden="true"
              />
              <div className="relative space-y-6">
                <span className="inline-flex items-center gap-2 bg-background/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60">
                  Quién soy
                </span>
                <h2 className="text-3xl font-semibold tracking-tight">Hola</h2>
                <p className="text-sm opacity-80 sm:text-base">
                  Soy una estudiante de Contaduria Pública que ha culminado sus
                  estudios de Ingenieria Informática. Me he dedicado a explorar
                  la intersección entre tecnología y finanzas; automatización y
                  contabilidad en entornos empresariales.
                </p>
                <p className="text-sm opacity-80 sm:text-base">
                  En mi tiempo de formación adquirí un gusto por las matemáticas
                  que me permitieron poderlas aplicar en los entornos que me
                  rodean, y por esto no me refiero a las ecuaciones, me refiero
                  a las habildades de descomponer, analizar problemas y encontrar
                  soluciones eficientes.
                </p>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="bg-background/90 p-6 shadow-[0_16px_35px_rgba(0,0,0,0.1)]">
                <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-foreground/50">
                  Valores
                </h3>
                <ul className="mt-4 space-y-2 text-sm opacity-80">
                  <li>
                    • Pensamiento interdisciplinario para unir tecnología y
                    gestión financiera.
                  </li>
                  <li>
                    • Orientación a resultados medibles y comunicación clara con
                    stakeholders.
                  </li>
                  <li>
                    • Curiosidad constante por aprender e integrar nuevas
                    herramientas.
                  </li>
                </ul>
              </div>

              <div className="bg-background/90 p-6 shadow-[0_16px_35px_rgba(0,0,0,0.1)]">
                <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-foreground/50">
                  Intereses
                </h3>
                <ul className="mt-4 space-y-2 text-sm opacity-80">
                  <li>• Analítica aplicada a decisiones contables y financieras.</li>
                  <li>• Integraciones de APIs y automatización de reportes.</li>
                  <li>• Experimentos con modelos de IA para datos y educación.</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* PROYECTOS (PRIMERO) */}
        <Section
          title="Proyectos destacados"
          subtitle="Lo principal: productos y repos que demuestran el stack."
        >
          <Carousel>
            {projects.map((p) => (
              <article
                key={p.title}
                className="min-w-[340px] max-w-sm shrink-0 snap-start bg-gradient-to-br from-background/95 via-background/70 to-foreground/10 p-10 shadow-[0_24px_60px_rgba(0,0,0,0.15)] transition hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(0,0,0,0.18)]"
              >
                <FadeIn>
                  <div className="flex h-full flex-col gap-5">
                    <div className="space-y-2">
                      <span className="inline-flex items-center rounded-full bg-foreground/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-foreground/60">
                        Proyecto
                      </span>
                      <h3 className="text-xl font-semibold tracking-tight text-foreground">
                        {p.title}
                      </h3>
                      <p className="text-sm opacity-80">{p.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 text-[11px] font-medium uppercase tracking-[0.35em] text-foreground/60">
                      {p.tech.map((t) => (
                        <span key={t} className="rounded-full bg-background/80 px-3 py-1">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap gap-3 pt-2 text-sm font-semibold text-foreground/70">
                      <a className="btn btn-text" href={p.repo} target="_blank" rel="noreferrer">
                        Repo
                      </a>
                      {p.demo ? (
                        <a className="btn btn-text" href={p.demo} target="_blank" rel="noreferrer">
                          Demo
                        </a>
                      ) : null}
                    </div>
                  </div>
                </FadeIn>
              </article>
            ))}
          </Carousel>

          <div className="mt-6">
            <Link className="btn btn-text" href="/projects">
              Ver todos los proyectos →
            </Link>
          </div>
        </Section>

        {/* LO QUE APORTO */}
        <Section
          title="Aportes"
          subtitle="Me diferencio por integrar : tecnología + contabilidad + investigación."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Analítica y decisiones",
                description:
                  "Análisis de datos, visualización y apoyo a la toma de decisiones en contextos académicos y organizacionales.",
              },
              {
                title: "Automatización",
                description:
                  "Optimización de procesos con herramientas tecnológicas, integración de APIs y scripting con Python.",
              },
              {
                title: "Investigación y comunicación",
                description:
                  "Formulación y redacción académica, ponencias/pósteres y trabajo interdisciplinario con enfoque en mejora continua.",
              },
            ].map((item) => (
              <FadeIn key={item.title}>
                <div className="group relative overflow-hidden bg-gradient-to-br from-background/95 via-background/70 to-foreground/10 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(0,0,0,0.16)]">
                  <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_60%)] opacity-0 transition group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <div className="relative space-y-3">
                    <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                    <p className="text-sm opacity-80">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>

        {/* EXPERIENCIA */}
        <Section title="Experiencia" subtitle="Roles que muestran impacto y habilidades transversales.">
          <div className="grid gap-6">
            {profile.experience.map((e) => (
              <FadeIn key={`${e.role}-${e.year}`}>
                <TimelineItem
                  title={e.role}
                  subtitle={e.org}
                  meta={e.year}
                  description={e.description}
                />
              </FadeIn>
            ))}
          </div>
        </Section>

        {/* EDUCACIÓN */}
        <Section title="Educación" subtitle="Formación académica que respalda mi enfoque interdisciplinario.">
          <div className="grid gap-6">
            {profile.education.map((ed) => (
              <FadeIn key={`${ed.program}-${ed.org}`}>
                <TimelineItem title={ed.program} subtitle={ed.org} meta={ed.fromTo} />
              </FadeIn>
            ))}
          </div>
        </Section>

        {/* SKILLS */}
        <Section title="Habilidades" subtitle="Matriz general de competencias y herramientas.">
          <div className="grid gap-6 lg:grid-cols-2">
            {skillEntries.map(([category, items]) => {
              const completion = maxSkillCount
                ? Math.round(70 + (items.length / maxSkillCount) * 25)
                : 70;

              return (
                <FadeIn key={category}>
                  <div className="bg-gradient-to-r from-background/85 via-background/70 to-foreground/10 p-6 shadow-[0_20px_55px_rgba(0,0,0,0.14)]">
                    <div className="flex flex-col gap-5">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="text-lg font-semibold tracking-tight text-foreground">
                            {category}
                          </h3>
                          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60">
                            {items.length} items
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.35em] text-foreground/50">
                            <span>Dominio</span>
                            <span>{completion}%</span>
                          </div>
                          <div className="relative h-3 w-full overflow-hidden rounded-full bg-foreground/10">
                            <div
                              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-foreground via-foreground/80 to-foreground/50"
                              style={{ width: `${completion}%` }}
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-2 text-sm sm:grid-cols-2">
                        {items.map((s) => (
                          <div
                            key={s}
                            className="flex items-center gap-2 bg-background/80 px-3 py-2 text-sm text-foreground/80"
                          >
                            <span className="h-1 w-6 bg-foreground/50" aria-hidden="true" />
                            <span>{s}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Section>

        {/* FORMACIÓN COMPLEMENTARIA */}
        <Section title="Formación complementaria" subtitle="En formación / nivel académico.">
          <FadeIn>
            <Card>
              <div className="p-6">
                <ul className="list-disc pl-5 space-y-2 text-sm opacity-85">
                  {profile.complementary.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </Card>
          </FadeIn>
        </Section>

        {/* PONENCIAS */}
        <Section
          title="Ponencias y producción académica"
          subtitle="Comunicación efectiva de resultados académicos e investigativos."
        >
          <div className="grid gap-6">
            {profile.talks.map((t) => (
              <FadeIn key={`${t.event}-${t.date}-${t.title}`}>
                <Card>
                  <div className="p-6 space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <h3 className="font-semibold">{t.title}</h3>
                        <p className="text-sm opacity-80">
                          {t.event} • {t.place}
                        </p>
                      </div>
                      <span className="text-xs opacity-70 whitespace-nowrap">
                        {t.type} • {t.date}
                      </span>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Section>

        {/* CONTACTO */}
        <Section
          title="Contacto"
          subtitle="Estoy disponible para colaboraciones, proyectos y oportunidades de crecimiento. ¡Conéctame!"
        >
          <FadeIn>
            <Card>
              <div className="p-6 grid md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-2">
                  <p className="opacity-70">Email</p>
                  {profile.contact.emails.map((em) => (
                    <p key={em}>
                      <a className="underline hover:opacity-80" href={`mailto:${em}`}>
                        {em}
                      </a>
                    </p>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="opacity-70">Ubicación</p>
                  <p>{profile.location}</p>
                  <p className="opacity-70">Teléfono</p>
                  <p>{profile.contact.phone}</p>
                </div>
              </div>
            </Card>
          </FadeIn>
        </Section>

        <footer className="mt-16 pb-6 text-sm opacity-60">
          © {new Date().getFullYear()} {profile.name}
        </footer>
      </main>
    </>
  );
}
