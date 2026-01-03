import { projects } from "@/data/projects";
import { FadeIn } from "@/components/Motion";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-5xl mx-auto">
      <FadeIn>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Proyectos</h1>
          <p className="opacity-80">
            Selección de proyectos donde se ve el stack y lo que sé construir.
          </p>
        </div>
      </FadeIn>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <FadeIn key={p.title}>
            <article className="rounded-2xl border p-6 space-y-3">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="opacity-80">{p.description}</p>

              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full border">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-2 text-sm">
                <a className="underline" href={p.repo} target="_blank" rel="noreferrer">
                  Repo
                </a>
                {p.demo ? (
                  <a className="underline" href={p.demo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                ) : null}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </main>
  );
}
