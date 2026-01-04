export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] px-3 py-1 bg-foreground/10 uppercase tracking-[0.3em] text-foreground/70">
      {children}
    </span>
  );
}
