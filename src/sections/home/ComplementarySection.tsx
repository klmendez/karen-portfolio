import { FadeIn } from "@/components/Motion";
import Section from "@/components/Section";
import Card from "@/components/Card";
import type { Profile } from "@/types/content";

interface ComplementarySectionProps {
  profile: Profile;
}

export function ComplementarySection({ profile }: ComplementarySectionProps) {
  return (
    <Section title="Formación complementaria" subtitle="En formación / nivel académico.">
      <FadeIn>
        <Card>
          <div className="p-6">
            <ul className="list-disc pl-5 space-y-2 text-sm opacity-85">
              {profile.complementary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Card>
      </FadeIn>
    </Section>
  );
}
