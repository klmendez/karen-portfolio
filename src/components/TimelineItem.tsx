export default function TimelineItem({
  title,
  subtitle,
  meta,
  description,
}: {
  title: string;
  subtitle?: string;
  meta?: string;
  description?: string;
}) {
  return (
    <div className="bg-background/90 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.1)]">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h3 className="font-semibold tracking-tight">{title}</h3>
          {subtitle ? <p className="text-sm opacity-80">{subtitle}</p> : null}
        </div>
        {meta ? <span className="text-xs opacity-70 whitespace-nowrap">{meta}</span> : null}
      </div>
      {description ? <p className="mt-2 text-sm opacity-80">{description}</p> : null}
    </div>
  );
}
