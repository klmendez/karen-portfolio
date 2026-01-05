import { FadeIn } from "@/components/Motion";
import Section from "@/components/Section";
import TimelineItem from "@/components/TimelineItem";
import type { Profile } from "@/types/content";

interface ExperienceSectionProps {
  profile: Profile;
}

export function ExperienceSection({ profile }: ExperienceSectionProps) {
  return (
    <Section title="Experiencia" subtitle="Roles que muestran impacto y habilidades transversales.">
      <div className="grid gap-6">
        {profile.experience.map((item) => (
          <FadeIn key={`${item.role}-${item.year}`}>
            <TimelineItem
              title={item.role}
              subtitle={item.org}
              meta={item.year}
              description={item.description}
            />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
