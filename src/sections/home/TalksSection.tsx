import { FadeIn } from "@/components/Motion";
import Section from "@/components/Section";
import Card from "@/components/Card";
import type { Profile } from "@/types/content";

interface TalksSectionProps {
  profile: Profile;
}

export function TalksSection({ profile }: TalksSectionProps) {
  return (
    <Section
      title="Ponencias y producción académica"
      subtitle="Comunicación efectiva de resultados académicos e investigativos."
    >
      <div className="grid gap-6">
        {profile.talks.map((talk) => (
          <FadeIn key={`${talk.event}-${talk.date}-${talk.title}`}>
            <Card>
              <div className="p-6 space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="font-semibold">{talk.title}</h3>
                    <p className="text-sm opacity-80">
                      {talk.event} • {talk.place}
                    </p>
                  </div>
                  <span className="whitespace-nowrap text-xs opacity-70">
                    {talk.type} • {talk.date}
                  </span>
                </div>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
