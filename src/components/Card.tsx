export default function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const baseClasses = "bg-background/90 shadow-[0_16px_40px_rgba(0,0,0,0.1)] dark:bg-slate-950/70 dark:text-white/90 dark:shadow-[0_28px_80px_rgba(0,0,0,0.45)]";
  const classes = [baseClasses, className].filter(Boolean).join(" ");

  return <div className={classes}>{children}</div>;
}
