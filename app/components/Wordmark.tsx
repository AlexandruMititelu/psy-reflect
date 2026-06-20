// Brand wordmark: an accent square + the name. Reused in header and footer.
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="size-2 bg-accent" aria-hidden />
      <span className="text-[15px] font-semibold tracking-tight text-ink">
        Psy-Reflect
      </span>
    </span>
  );
}
