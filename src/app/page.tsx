import Link from "next/link";
import { skills } from "@/data/skills";
import { FadeIn } from "@/components/Motion";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-5xl mx-auto">
      <FadeIn>
        <header className="space-y-4">
          <p className="text-sm opacity-70">Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            KAREN LISETH MENDEZ QUILINDO
          </h1>
          <p className="text-lg opacity-80">Fullstack • APIs • Data • DevOps</p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/projects"
              className="px-4 py-2 rounded-xl border hover:opacity-80 transition"
            >
              Ver proyectos
            </Link>
            <a
              className="px-4 py-2 rounded-xl border hover:opacity-80 transition"
              href="mailto:klmendez@unimayor.edu.co"
            >
              Contacto
            </a>
          </div>
        </header>
      </FadeIn>

      <section className="mt-12 space-y-6">
        <FadeIn>
          <h2 className="text-2xl font-semibold">Skills</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <FadeIn key={category}>
              <div className="rounded-2xl border p-6 space-y-3">
                <h3 className="font-semibold">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className="text-sm px-3 py-1 rounded-full border">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <footer className="mt-14 text-sm opacity-70">
        © {new Date().getFullYear()} Karen Liseth Mendez Quilindo
      </footer>
    </main>
  );
}
