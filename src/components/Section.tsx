export default function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14 sm:mt-20 lg:mt-24">
      <div className="mb-6 space-y-1.5 sm:space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        {subtitle ? <p className="text-sm opacity-75 sm:text-base">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
