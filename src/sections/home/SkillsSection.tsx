import { FadeIn } from "@/components/Motion";
import Section from "@/components/Section";
import type { SkillLibraryKey, SkillsLibrary } from "@/types/content";

const SKILL_LABELS: Record<SkillLibraryKey, string> = {
  LenguajesDeProgramacion: "Lenguajes de programación",
  FrameworksBackend: "Frameworks backend",
  FrameworksFrontend: "Frameworks frontend",
  DesarrolloAPIsEIntegracion: "Desarrollo de APIs e integración",
  BasesDeDatos: "Bases de datos",
  ORMYAccesoADatos: "ORM y acceso a datos",
  DatosYAnalitica: "Datos y analítica",
  InteligenciaArtificial: "Inteligencia artificial",
  InteligenciaDeNegocio: "Inteligencia de negocio",
  DevOpsYDespliegue: "DevOps y despliegue",
  ArquitecturaDeSoftware: "Arquitectura de software",
  CalidadYMantenimiento: "Calidad y mantenimiento",
  Seguridad: "Seguridad",
  ControlDeVersionesYColaboracion: "Control de versiones y colaboración",
  AutomatizacionYProductividad: "Automatización y productividad",
};

interface SkillsSectionProps {
  skills: SkillsLibrary;
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const entries = (Object.keys(SKILL_LABELS) as SkillLibraryKey[]).map((key) => ({
    key,
    label: SKILL_LABELS[key],
    items: skills[key],
  }));

  return (
    <Section title="Habilidades" subtitle="Matriz general de competencias y herramientas.">
      <div className="space-y-6">
        {entries.map(({ key, label, items }) => {
          const total = items.length || 1;

          return (
            <FadeIn key={key}>
              <div className="rounded-2xl bg-foreground/5/80 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.16)] backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">{label}</h3>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60">
                      {items.length} items
                    </span>
                  </div>

                  <div className="space-y-4">
                    {items.map((skill: string, index: number) => {
                      const completion = Math.round(68 + ((total - index) / total) * 28);

                      return (
                        <div key={skill} className="space-y-2">
                          <div className="flex items-center justify-between text-sm font-medium text-foreground/80">
                            <span>{skill}</span>
                            <span className="text-xs text-foreground/60">{completion}%</span>
                          </div>
                          <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-foreground/10">
                            <div
                              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400"
                              style={{ width: `${completion}%` }}
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
