import { FadeIn } from "@/components/Motion";
import Section from "@/components/Section";
import TimelineItem from "@/components/TimelineItem";
import type { Profile } from "@/types/content";

interface EducationSectionProps {
  profile: Profile;
}

export function EducationSection({ profile }: EducationSectionProps) {
  return (
    <Section title="Educación" subtitle="Formación académica que respalda mi enfoque interdisciplinario.">
      <div className="grid gap-6">
        {profile.education.map((item) => (
          <FadeIn key={`${item.program}-${item.org}`}>
            <TimelineItem title={item.program} subtitle={item.org} meta={item.fromTo} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
