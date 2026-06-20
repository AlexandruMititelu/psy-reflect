// Subtle film grain over the warm paper: a fixed, monochrome SVG-noise layer
// that sits just above the canvas and below all content. Warmth and tactility,
// never visible "noise" — keep the opacity low. Static (does not scroll).
export function Grain() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 size-full opacity-[0.07]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="grain-noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.82"
          numOctaves={2}
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain-noise)" />
    </svg>
  );
}
