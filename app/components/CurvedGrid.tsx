// Decorative convex ("barrel") grid — lines bow gently away from center so the
// grid reads as a soft dome rather than a flat technical mesh. Pure ornament.
const VERTICAL = [
  "M20 0 Q6 120 20 240",
  "M60 0 Q51.6 120 60 240",
  "M100 0 Q97.2 120 100 240",
  "M140 0 Q142.8 120 140 240",
  "M180 0 Q188.4 120 180 240",
  "M220 0 Q234 120 220 240",
];

const HORIZONTAL = [
  "M0 20 Q120 6 240 20",
  "M0 60 Q120 51.6 240 60",
  "M0 100 Q120 97.2 240 100",
  "M0 140 Q120 142.8 240 140",
  "M0 180 Q120 188.4 240 180",
  "M0 220 Q120 234 240 220",
];

export function CurvedGrid({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 240" fill="none" aria-hidden className={className}>
      {[...VERTICAL, ...HORIZONTAL].map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="currentColor"
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}
