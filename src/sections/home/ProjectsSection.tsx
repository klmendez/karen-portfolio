"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { FadeIn } from "@/components/Motion";
import Section from "@/components/Section";
import Carousel from "@/components/Carousel";
import type { Project, Projects } from "@/types/content";

interface ProjectsSectionProps {
  projects: Projects;
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!previewProject) {
      document.body.style.removeProperty("overflow");
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [previewProject]);

  const accents = [
    {
      surface: "bg-sky-50/90 dark:bg-sky-950/55",
      overlay:
        "from-cyan-400/24 via-sky-400/12 to-transparent dark:from-cyan-500/22 dark:via-sky-500/14 dark:to-transparent",
      beam:
        "bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.32),_transparent_74%)] dark:bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.45),_transparent_68%)]",
      marker:
        "bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-300 dark:from-cyan-400 dark:via-sky-500 dark:to-teal-400",
    },
    {
      surface: "bg-fuchsia-50/85 dark:bg-violet-950/55",
      overlay:
        "from-violet-400/24 via-fuchsia-400/12 to-transparent dark:from-violet-500/24 dark:via-fuchsia-500/14 dark:to-transparent",
      beam:
        "bg-[radial-gradient(circle_at_center,_rgba(167,139,250,0.30),_transparent_72%)] dark:bg-[radial-gradient(circle_at_center,_rgba(124,58,237,0.45),_transparent_68%)]",
      marker:
        "bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-300 dark:from-violet-400 dark:via-fuchsia-500 dark:to-indigo-400",
    },
    {
      surface: "bg-amber-50/90 dark:bg-amber-950/55",
      overlay:
        "from-amber-400/24 via-orange-400/12 to-transparent dark:from-amber-500/22 dark:via-orange-500/14 dark:to-transparent",
      beam:
        "bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.32),_transparent_70%)] dark:bg-[radial-gradient(circle_at_center,_rgba(202,138,4,0.45),_transparent_66%)]",
      marker:
        "bg-gradient-to-r from-amber-400 via-orange-400 to-lime-300 dark:from-amber-400 dark:via-orange-500 dark:to-lime-300",
    },
  ];

  return (
    <Section
      title="Proyectos destacados"
      subtitle="Lo principal: productos y repos que demuestran el stack."
    >
      <Carousel>
        {projects.map((project, index) => {
          const accent = accents[index % accents.length];
          const hasPreview = Boolean(project.demo);

          return (
            <article
              key={project.title}
              className="group relative flex w-[calc(100vw-3rem)] min-w-[280px] max-w-xl shrink-0 snap-start sm:w-auto sm:min-w-[340px]"
            >
              <FadeIn>
                <div className={`relative flex h-full w-full flex-col overflow-hidden rounded-4xl border border-slate-900/5 p-6 text-slate-900 shadow-[0_32px_80px_rgba(15,23,42,0.16)] backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:shadow-[0_40px_130px_rgba(15,23,42,0.26)] dark:border-white/12 dark:text-white dark:shadow-[0_48px_140px_rgba(2,6,23,0.58)] sm:p-8 ${accent.surface}`}>
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent.overlay} opacity-70 transition duration-500 group-hover:opacity-95 dark:opacity-40 dark:mix-blend-screen`}
                    aria-hidden="true"
                  />
                  <div
                    className={`pointer-events-none absolute -left-16 top-1/2 h-52 w-52 -translate-y-1/2 transform-gpu blur-3xl opacity-0 transition duration-500 group-hover:opacity-75 ${accent.beam} dark:opacity-35`}
                    aria-hidden="true"
                  />

                  <div className="relative flex h-full flex-col gap-8">
                    <div className="space-y-4">
                      <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-900/70 dark:text-white/85">
                        <span className={`h-1 w-10 rounded-full ${accent.marker}`} aria-hidden="true" />
                        Proyecto principal
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-semibold tracking-tight text-inherit">{project.title}</h3>
                        <p className="text-sm leading-relaxed text-slate-800/80 dark:text-white/92">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-900/60 dark:text-white/70">
                        Stack
                      </p>
                      <div className="flex flex-wrap gap-2 text-[11px] font-medium uppercase tracking-[0.3em] text-slate-900/70 dark:text-white/85">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-slate-900/5 px-3 py-1 text-slate-900/80 ring-1 ring-slate-900/10 dark:bg-slate-800/80 dark:text-white dark:ring-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-3 pt-4">
                      <a
                        className="btn btn-outline"
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Repo
                      </a>
                      {project.demo ? (
                        <a
                          className="btn btn-primary"
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Demo
                        </a>
                      ) : null}
                      {hasPreview ? (
                        <button
                          type="button"
                          className="btn btn-outline"
                          onClick={() => setPreviewProject(project)}
                        >
                          Vista previa
                        </button>
                      ) : null}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </article>
          );
        })}
      </Carousel>

      <div className="mt-6">
        <Link className="btn btn-outline" href="/projects">
          Ver todos los proyectos →
        </Link>
      </div>

      {previewProject ? (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-4 py-10 backdrop-blur" role="dialog" aria-modal="true">
          <div className="relative flex h-[80vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-background shadow-[0_40px_140px_rgba(0,0,0,0.4)]">
            <div className="flex items-center justify-between border-b border-foreground/10 px-6 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">Vista previa</p>
                <h4 className="text-lg font-semibold tracking-tight text-foreground">{previewProject.title}</h4>
              </div>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setPreviewProject(null)}
              >
                Cerrar
              </button>
            </div>

            {previewProject.demo ? (
              <iframe
                src={previewProject.demo}
                title={`Vista previa de ${previewProject.title}`}
                className="aspect-video h-full w-full flex-1 bg-white"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            ) : (
              <div className="flex flex-1 items-center justify-center px-8 text-center text-sm text-foreground/70">
                <p>Este proyecto no cuenta con demo pública para vista previa.</p>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </Section>
  );
}
