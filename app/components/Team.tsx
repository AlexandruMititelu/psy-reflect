import Image from "next/image";
import { SectionLabel } from "./SectionLabel";
import { team } from "@/app/lib/site";

export function Team() {
  return (
    <section id="psihologi" className="scroll-mt-16 border-b border-line">
      <div className="shell py-20 md:py-32">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="md:col-span-6">
            <SectionLabel index="03">Psihologi</SectionLabel>
            <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              Cine te ascultă.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-ink-soft md:col-span-5 md:col-start-8 md:self-end md:text-lg">
            Suntem doi psihologi într-un cabinet mic, din alegere. Vezi cu cine
            vorbești înainte să ridici telefonul — și rămâi cu același om de la
            prima ședință până la capăt.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:mt-20 md:grid-cols-2">
          {team.map((person) => (
            <article
              key={person.name}
              className="overflow-hidden rounded-3xl border border-line bg-paper"
            >
              <div className="relative aspect-[4/5] w-full bg-line">
                <Image
                  src={person.photo}
                  alt={`${person.name} — ${person.role}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
              <div className="px-6 py-7 md:px-8 md:py-8">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {person.name}
                </h3>
                <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                  {person.role}
                </p>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">
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
