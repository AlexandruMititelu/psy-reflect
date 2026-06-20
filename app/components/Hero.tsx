import { SectionLabel } from "./SectionLabel";
import { CurvedGrid } from "./CurvedGrid";
import { site } from "@/app/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <CurvedGrid className="pointer-events-none absolute inset-0 size-full text-accent/[0.10]" />
      <div className="shell relative py-20 md:py-32">
        <SectionLabel index="00">
          {site.tagline} · {site.city}
        </SectionLabel>

        <h1 className="mt-8 max-w-[15ch] text-balance text-[clamp(2.75rem,7.5vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.035em] text-ink">
          Ai grijă de toți ceilalți. E timpul și pentru tine.
        </h1>

        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-5 md:col-start-8">
            <p className="text-lg leading-relaxed text-ink-soft md:text-xl">
              Terapie clinică și evaluări psihologice în {site.city}. Lucrăm la
              probleme reale, cu un plan clar și pași pe care îi poți face din
              prima ședință.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a href={site.phoneHref} className="cta">
                Programează o ședință
              </a>
              <a href="#servicii" className="link-arrow">
                Vezi ce facem <span aria-hidden>↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
