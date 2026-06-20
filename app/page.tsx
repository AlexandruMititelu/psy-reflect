import { SiteHeader } from "./components/SiteHeader";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { SiteFooter } from "./components/SiteFooter";
import { site, team } from "./lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: `${site.name} — ${site.legalName}`,
  description:
    "Cabinet de psihologie în Galați: terapie clinică și evaluări psihologice.",
  url: "https://psy-reflect.ro",
  telephone: "+40731181050",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Strada Brăilei 165",
    addressLocality: "Galați",
    postalCode: "800310",
    addressCountry: "RO",
  },
  areaServed: "Galați",
  employee: team.map((p) => ({
    "@type": "Person",
    name: p.name,
    jobTitle: p.role,
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Process />
        <Team />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
