import Link from "next/link";

import { FadeIn } from "@/components/Motion";
import Section from "@/components/Section";
import Carousel from "@/components/Carousel";
import type { Projects } from "@/types/content";

interface ProjectsSectionProps {
  projects: Projects;
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Section
      title="Proyectos destacados"
      subtitle="Lo principal: productos y repos que demuestran el stack."
    >
      <Carousel>
        {projects.map((project) => (
          <article
            key={project.title}
            className="min-w-[340px] max-w-sm shrink-0 snap-start bg-foreground/5 p-10 ring-1 ring-foreground/10 shadow-[0_24px_60px_rgba(0,0,0,0.15)] transition hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(0,0,0,0.18)]"
          >
            <FadeIn>
              <div className="flex h-full flex-col gap-5">
                <div className="space-y-2">
                  <span className="inline-flex items-center rounded-full bg-foreground/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-foreground/60">
                    Proyecto
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm opacity-80">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 text-[11px] font-medium uppercase tracking-[0.35em] text-foreground/60">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-background/70 px-3 py-1 ring-1 ring-foreground/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-2 text-sm font-semibold text-foreground/70">
                  <a className="btn btn-text" href={project.repo} target="_blank" rel="noreferrer">
                    Repo
                  </a>
                  {project.demo ? (
                    <a className="btn btn-text" href={project.demo} target="_blank" rel="noreferrer">
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
  );
}
