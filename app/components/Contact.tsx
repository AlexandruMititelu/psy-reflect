import { SectionLabel } from "./SectionLabel";
import { site } from "@/app/lib/site";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 border-b border-line">
      <div className="shell py-20 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-7">
            <SectionLabel index="04">Contact</SectionLabel>
            <h2 className="mt-6 max-w-[15ch] text-balance text-3xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
              Primul pas e cel mai greu. Hai să-l facem împreună.
            </h2>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a href={site.phoneHref} className="cta">
                Sună acum — {site.phoneDisplay}
              </a>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow"
              >
                Vezi pe hartă <span aria-hidden>↗</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9 md:self-end">
            <dl className="grid gap-8 font-mono text-sm">
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted">
                  Telefon
                </dt>
                <dd className="mt-2">
                  <a
                    href={site.phoneHref}
                    className="text-ink transition hover:text-accent"
                  >
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted">
                  Adresă
                </dt>
                <dd className="mt-2 text-ink">{site.address}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted">
                  Programări
                </dt>
                <dd className="mt-2 text-ink">Telefonic, Luni – Vineri</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
