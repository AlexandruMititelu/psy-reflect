import { SectionHeader } from "./SectionHeader";
import { CurvedGrid } from "./CurvedGrid";
import { services } from "@/app/lib/site";

export function Services() {
  return (
    <section id="servicii" className="scroll-mt-16 border-b border-line">
      <div className="shell py-20 md:py-32">
        <SectionHeader
          index="01"
          label="Servicii"
          title="Două servicii. Făcute temeinic."
          lede="Nu facem de toate. Facem două lucruri bine: te ajutăm să te simți mai bine și îți dăm răspunsuri clare despre tine."
        />

        <div className="mt-14 space-y-5 md:mt-20">
          {services.map((s) => (
            <article
              key={s.index}
              className="relative overflow-hidden rounded-3xl border border-line bg-paper px-6 py-8 md:px-12 md:py-12"
            >
              <CurvedGrid className="fade-corner pointer-events-none absolute -right-10 -top-10 size-56 text-accent/20 md:size-72" />
              <div className="relative grid grid-cols-1 gap-6 md:grid-cols-12">
                <div className="md:col-span-5">
                  <span className="font-mono text-sm text-accent">
                    {s.index}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                    {s.title}
                  </h3>
                </div>
                <div className="md:col-span-6 md:col-start-7">
                  <p className="text-lg leading-relaxed text-ink-soft">
                    {s.description}
                  </p>
                  <ul className="mt-6 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                    {s.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-start gap-2.5 text-sm text-ink"
                      >
                        <span
                          className="mt-2 size-1 shrink-0 bg-accent"
                          aria-hidden
                        />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
