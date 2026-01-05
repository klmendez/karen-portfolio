import { FadeIn } from "@/components/Motion";
import Section from "@/components/Section";
import Card from "@/components/Card";

import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { skills as skillsLibrary } from "@/data/skills";

import { HeroSection } from "@/sections/home/HeroSection";
import { AboutSection } from "@/sections/home/AboutSection";
import { ProjectsSection } from "@/sections/home/ProjectsSection";
import { AportesSection } from "@/sections/home/AportesSection";
import { ExperienceSection } from "@/sections/home/ExperienceSection";
import { EducationSection } from "@/sections/home/EducationSection";
import { SkillsSection } from "@/sections/home/SkillsSection";
import { ComplementarySection } from "@/sections/home/ComplementarySection";
import { TalksSection } from "@/sections/home/TalksSection";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen w-full overflow-x-hidden">
        <div
          className="pointer-events-none fixed inset-0 -z-50 bg-gradient-to-br from-background via-background to-background"
          aria-hidden="true"
        />
        <div className="pointer-events-none fixed inset-0 -z-40" aria-hidden="true">
          <span className="absolute -left-44 top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-[160px]" />
          <span className="absolute right-[-12rem] top-24 h-[30rem] w-[30rem] rounded-full bg-violet-500/10 blur-[160px]" />
          <span className="absolute left-1/3 bottom-[-12rem] h-[34rem] w-[34rem] rounded-full bg-amber-500/10 blur-[170px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.10),_transparent_60%)]" />
        </div>

        <HeroSection profile={profile} />

        <main className="pb-24">
          <AboutSection profile={profile} />

          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <ProjectsSection projects={projects} />
            <AportesSection />
            <ExperienceSection profile={profile} />
            <EducationSection profile={profile} />
            <SkillsSection skills={skillsLibrary} />
            <ComplementarySection profile={profile} />
            <TalksSection profile={profile} />

            <Section title="Contacto" subtitle="Estoy disponible para colaboraciones, proyectos y oportunidades de crecimiento. ¡Conéctame!">
              <FadeIn>
                <Card>
                  <div className="grid gap-6 p-6 text-sm md:grid-cols-2">
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
          </div>
        </main>
      </div>
    </>
  );
}
