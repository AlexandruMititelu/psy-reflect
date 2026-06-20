// Swiss index label: ▪ 01 / Section — monospaced, letter-spaced, uppercase.
export function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">
      <span className="inline-block size-1.5 bg-accent" aria-hidden />
      <span className="text-accent">{index}</span>
      <span className="text-line" aria-hidden>
        /
      </span>
      <span>{children}</span>
    </div>
  );
}
