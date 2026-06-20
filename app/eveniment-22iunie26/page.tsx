import type { Metadata } from "next";
import { SiteHeader } from "@/app/components/SiteHeader";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SectionLabel } from "@/app/components/SectionLabel";
import { voucher } from "@/app/lib/site";

export const metadata: Metadata = {
  title:
    "Voucher Renaissance Beauty Show — 20 de minute de orientare psihologică gratuită | Psy-Reflect",
  description: voucher.lead,
  alternates: { canonical: "/eveniment-22iunie26" },
  openGraph: {
    title: "Un cadou pentru tine — 20 de minute de orientare psihologică gratuită",
    description: voucher.lead,
    type: "website",
    locale: "ro_RO",
    siteName: "Psy-Reflect",
  },
};

const pad = (n: number) => String(n + 1).padStart(2, "0");

export default function EventPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Hero: the offer ─────────────────────────────────────── */}
        <section className="border-b border-line">
          <div className="shell py-20 md:py-28">
            <SectionLabel index="Voucher special">
              {voucher.event} · {voucher.eventDate}
            </SectionLabel>

            <p className="mt-7 text-lg italic text-ink-soft md:text-xl">
              Un cadou pentru tine.
            </p>
            <h1 className="mt-3 max-w-[18ch] text-balance text-4xl font-semibold leading-[1.03] tracking-tight md:text-7xl">
              20 de minute de orientare psihologică,{" "}
              <span className="text-accent">gratuită</span>.
            </h1>
            <p className="mt-6 max-w-[48ch] text-pretty text-lg leading-relaxed text-ink-soft md:text-xl">
              {voucher.lead}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3">
              {voucher.contacts.map((c) => (
                <a key={c.phoneHref} href={c.phoneHref} className="cta">
                  {c.name} — {c.phoneDisplay}
                </a>
              ))}
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2.5 font-mono text-xs uppercase tracking-[0.16em] text-muted">
              {voucher.notes.map((n) => (
                <li key={n} className="flex items-center gap-2.5">
                  <span className="inline-block size-1.5 bg-accent" aria-hidden />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Pentru cine ─────────────────────────────────────────── */}
        <section className="border-b border-line">
          <div className="shell py-20 md:py-28">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              <div className="md:col-span-5">
                <SectionLabel index="01">Pentru tine, dacă</SectionLabel>
                <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                  Un moment pentru ce simți.
                </h2>
              </div>
              <p className="text-base leading-relaxed text-ink-soft md:col-span-6 md:col-start-7 md:self-end md:text-lg">
                Nu trebuie să fie o criză ca să meriți 20 de minute pentru tine.
                Vino cu orice te apasă — alegem împreună de unde pornim.
              </p>
            </div>

            <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
              {voucher.forItems.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-4 bg-paper px-6 py-7"
                >
                  <span className="font-mono text-sm text-accent">{pad(i)}</span>
                  <span className="text-base leading-relaxed text-ink">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── În cadrul întâlnirii ────────────────────────────────── */}
        <section className="border-b border-line">
          <div className="shell py-20 md:py-28">
            <SectionLabel index="02">În cadrul întâlnirii</SectionLabel>
            <h2 className="mt-6 max-w-[16ch] text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Ce se întâmplă în cele 20 de minute.
            </h2>

            <div className="mt-14 grid grid-cols-1 md:mt-16 md:grid-cols-3 md:gap-8">
              {voucher.meeting.map((m, i) => (
                <div key={m} className="border-t border-line py-8">
                  <span className="font-mono text-sm text-accent">{pad(i)}</span>
                  <p className="mt-4 text-lg leading-relaxed text-ink">{m}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Format + programare ─────────────────────────────────── */}
        <section className="border-b border-line">
          <div className="shell py-20 md:py-28">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-6">
              <div className="md:col-span-7">
                <SectionLabel index="03">Cum ne vedem</SectionLabel>
                <h2 className="mt-6 max-w-[18ch] text-balance text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
                  La cabinet, în Galați. Sau online, de oriunde.
                </h2>
                <ul className="mt-8 space-y-3">
                  {voucher.format.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-base text-ink-soft md:text-lg"
                    >
                      <span
                        className="mt-2.5 size-1.5 shrink-0 bg-accent"
                        aria-hidden
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <figure className="mt-12 border-l-2 border-accent pl-6">
                  <blockquote className="text-pretty text-xl font-medium leading-relaxed tracking-tight text-ink md:text-2xl">
                    „{voucher.quote}”
                  </blockquote>
                </figure>
              </div>

              <div className="md:col-span-4 md:col-start-9">
                <div className="rounded-3xl border border-line bg-paper p-6 md:p-8">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                    Programare
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-ink-soft">
                    Locurile sunt limitate, iar programarea e obligatorie. Sună
                    la unul dintre numere și îți rezervăm un loc.
                  </p>

                  <div className="mt-6 grid gap-3">
                    {voucher.contacts.map((c) => (
                      <a
                        key={c.phoneHref}
                        href={c.phoneHref}
                        className="flex items-center justify-between gap-4 rounded-2xl border border-line px-4 py-4 transition hover:border-accent"
                      >
                        <span className="text-sm font-medium text-ink">
                          {c.name}
                        </span>
                        <span className="font-mono text-sm text-accent">
                          {c.phoneDisplay}
                        </span>
                      </a>
                    ))}
                  </div>

                  <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-muted">
                    Valabil până la {voucher.validUntil}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
