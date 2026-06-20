// Decorative convex ("barrel") grid — lines bow gently away from center so the
// grid reads as a soft dome rather than a flat technical mesh. Rectangular
// cells (wider than tall); `slice` makes it cover whatever box it's dropped in,
// so it can sit full-bleed behind a section or framed in a corner. Pure ornament.
const W = 360;
const H = 240;
const CX = W / 2;
const CY = H / 2;
const BOW = 0.12; // how far each line bulges from the center axis
const STEP_X = 36; // horizontal spacing — larger than STEP_Y ⇒ rectangular cells
const STEP_Y = 24; // vertical spacing

// A line's control point bulges outward in proportion to its distance from the
// matching center axis, so the further out a line is, the more it bows.
const bowX = (x: number) => x + BOW * (x - CX);
const bowY = (y: number) => y + BOW * (y - CY);

const PATHS: string[] = [];
for (let x = STEP_X; x < W; x += STEP_X) {
  PATHS.push(`M${x} 0 Q${bowX(x)} ${CY} ${x} ${H}`); // vertical line
}
for (let y = STEP_Y; y < H; y += STEP_Y) {
  PATHS.push(`M0 ${y} Q${CX} ${bowY(y)} ${W} ${y}`); // horizontal line
}

export function CurvedGrid({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      fill="none"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
      className={className}
    >
      {PATHS.map((d, i) => (
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
