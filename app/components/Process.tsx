import { SectionLabel } from "./SectionLabel";
import { steps } from "@/app/lib/site";

export function Process() {
  return (
    <section id="proces" className="scroll-mt-16 border-b border-line">
      <div className="shell py-20 md:py-32">
        <SectionLabel index="02">Cum lucrăm</SectionLabel>
        <h2 className="mt-6 max-w-[14ch] text-balance text-3xl font-semibold tracking-tight md:text-5xl">
          Simplu. În trei pași.
        </h2>

        <div className="mt-14 grid grid-cols-1 md:mt-20 md:grid-cols-3 md:gap-8">
          {steps.map((st) => (
            <div
              key={st.index}
              className="border-t border-line py-8 md:pt-8"
            >
              <span className="font-mono text-sm text-accent">{st.index}</span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                {st.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                {st.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
