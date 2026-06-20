import Image from "next/image";
import { SectionHeader } from "./SectionHeader";
import { team } from "@/app/lib/site";

export function Team() {
  return (
    <section id="psihologi" className="scroll-mt-16 border-b border-line">
      <div className="shell py-20 md:py-32">
        <SectionHeader
          index="03"
          label="Psihologi"
          title="Cine te ascultă."
          lede="Suntem doi psihologi într-un cabinet mic, din alegere. Vezi cu cine vorbești înainte să ridici telefonul — și rămâi cu același om de la prima ședință până la capăt."
        />

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-5 md:mt-20 md:grid-cols-2">
          {team.map((person) => (
            <article
              key={person.name}
              className="overflow-hidden rounded-2xl border border-line bg-paper"
            >
              <div className="relative aspect-[4/5] w-full bg-line">
                <Image
                  src={person.photo}
                  alt={`${person.name} — ${person.role}`}
                  fill
                  sizes="(min-width: 768px) 22rem, 100vw"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
              <div className="px-5 py-5 md:px-6 md:py-6">
                <h3 className="text-xl font-semibold tracking-tight">
                  {person.name}
                </h3>
                <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {person.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {person.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
