import { projects } from "@/data/projects";
import Badge from "@/components/Badge";
import Card from "@/components/Card";
import { FadeIn } from "@/components/Motion";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <FadeIn>
        <div className="space-y-2">
          <p className="text-sm opacity-70">Portafolio</p>
          <h1 className="text-4xl font-bold tracking-tight">Proyectos</h1>
          <p className="opacity-80 max-w-2xl">
            Proyectos seleccionados para mostrar tecnologías, prácticas y estilo de trabajo.
          </p>
        </div>
      </FadeIn>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <FadeIn key={p.title}>
            <Card>
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold">{p.title}</h2>
                  <p className="text-sm opacity-80">{p.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2 text-sm">
                  <a className="underline hover:opacity-80" href={p.repo} target="_blank" rel="noreferrer">
                    Repo
                  </a>

                  {p.demo ? (
                    <a className="underline hover:opacity-80" href={p.demo} target="_blank" rel="noreferrer">
                      Demo
                    </a>
                  ) : null}

                  <Link className="underline hover:opacity-80" href="/">
                    Volver
                  </Link>
                </div>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </main>
  );
}
