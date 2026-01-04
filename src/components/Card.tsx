export default function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const classes = ["bg-background/90 shadow-[0_16px_40px_rgba(0,0,0,0.1)]", className].filter(Boolean).join(" ");

  return <div className={classes}>{children}</div>;
}
