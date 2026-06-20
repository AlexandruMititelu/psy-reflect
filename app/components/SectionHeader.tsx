import { SectionLabel } from "./SectionLabel";

// Swiss editorial masthead. A full-width ink rule heads each section and carries
// the index label like a ledger row; the headline sits wide in the left columns
// with an optional lede pushed to the right. Rules are structure, not ornament —
// the strong top rule is what gives each section its weight on the page.
export function SectionHeader({
  index,
  label,
  title,
  lede,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
}) {
  return (
    <header className="border-t border-ink pt-4 md:pt-5">
      <SectionLabel index={index}>{label}</SectionLabel>

      <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 md:mt-12 md:grid-cols-12">
        <h2 className="text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.02em] md:col-span-7 md:text-5xl">
          {title}
        </h2>
        {lede ? (
          <p className="text-base leading-relaxed text-ink-soft md:col-span-4 md:col-start-9 md:self-end md:text-lg">
            {lede}
          </p>
        ) : null}
      </div>
    </header>
  );
}
