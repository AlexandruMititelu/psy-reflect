// Single source of truth for clinic details and page content (Romanian).

import cristinaPhoto from "@/constants/Cristina-Capatina.jpg";
import mihaelaPhoto from "@/constants/Mihaela-Mititelu.jpg";

export const site = {
  name: "Psy-Reflect",
  tagline: "Cabinet de psihologie",
  legalName: "Căpățînă și Mititelu SCPP",
  legalLong: "Societate Civilă Profesională de Psihologie",
  city: "Galați",
  address: "Strada Brăilei 165, Galați, 800310",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Strada+Br%C4%83ilei+165%2C+Gala%C8%9Bi+800310",
  phoneDisplay: "0731 181 050",
  phoneHref: "tel:+40731181050",
} as const;

export const nav = [
  { href: "/#servicii", label: "Servicii" },
  { href: "/#proces", label: "Cum lucrăm" },
  { href: "/#psihologi", label: "Psihologi" },
  { href: "/#contact", label: "Contact" },
] as const;

export const services = [
  {
    index: "01",
    title: "Terapie clinică",
    description:
      "Anxietate, depresie, burnout, atacuri de panică, relații, traume. Nu lucrăm la simptome la întâmplare — construim un plan pe problema ta și mergem cu el până la capăt.",
    items: [
      "Anxietate și atacuri de panică",
      "Depresie și epuizare (burnout)",
      "Relații și cupluri",
      "Traume și pierderi",
      "Stimă de sine și încredere",
    ],
  },
  {
    index: "02",
    title: "Evaluări psihologice",
    description:
      "Evaluări clare și documentate, pe care te poți baza. Pentru tine, pentru deciziile tale sau pentru cerințe oficiale. Primești un raport pe care chiar îl înțelegi — nu un teanc de termeni.",
    items: [
      "Evaluare clinică și psihodiagnostic",
      "Testare psihologică standardizată",
      "Rapoarte și recomandări",
      "Avize și documente oficiale",
    ],
  },
] as const;

export const team = [
  {
    name: "Cristina Căpățînă",
    role: "Psiholog clinician · Psihoterapie · Evaluare psihologică",
    photo: cristinaPhoto,
    bio: "Lucrează cu adulți pe anxietate, depresie, traume și relații. Crede în terapie cu o direcție clară — nu vorbe la nesfârșit, ci pași concreți pe care îi poți face.",
  },
  {
    name: "Mihaela Mititelu",
    role: "Psiholog clinician · Psihoterapie · Evaluare psihologică",
    photo: mihaelaPhoto,
    bio: "Se ocupă de evaluări și psihodiagnostic, cu rapoarte clare și documentate. Îți explică ce înseamnă rezultatele, pe înțelesul tău, fără jargon.",
  },
] as const;

// Campaign landing page — Renaissance Beauty Show voucher (22 iunie 2026).
export const voucher = {
  event: "Renaissance Beauty Show",
  eventDate: "22 iunie 2026",
  lead: "Un spațiu în care să te oprești pentru câteva clipe și să privești cu mai multă claritate către tine.",
  validUntil: "31.10.2026",
  notes: ["Programare obligatorie", "Locuri limitate", "Valabil până la 31.10.2026"],
  contacts: [
    {
      name: "Cristina Căpățînă",
      phoneDisplay: "0747 990 909",
      phoneHref: "tel:+40747990909",
    },
    {
      name: "Mihaela Mititelu",
      phoneDisplay: "0731 181 050",
      phoneHref: "tel:+40731181050",
    },
  ],
  forItems: [
    "Starea emoțională și nivelul de stres",
    "Încredere în sine și relația cu propria persoană",
    "Dificultăți relaționale și familiale",
    "Experiențe dificile sau traumatice",
    "Claritate în perioade de schimbare",
    "Dezvoltare personală",
  ],
  meeting: [
    "Identificăm preocuparea principală",
    "Discutăm posibile direcții de lucru",
    "Primești recomandări personalizate",
  ],
  format: [
    "La cabinet (Galați) sau online",
    "Din orice oraș din România și din străinătate",
  ],
  quote:
    "Cea mai frumoasă transformare începe din interior. Permite-ți să ai grijă de tine!",
} as const;

export const steps = [
  {
    index: "01",
    title: "Programare",
    description:
      "Un telefon. Stabilim când ne vedem și pentru ce. Fără formulare interminabile.",
  },
  {
    index: "02",
    title: "Prima ședință",
    description:
      "Ascultăm, înțelegem și punem un diagnostic onest al situației în care ești.",
  },
  {
    index: "03",
    title: "Plan și pași",
    description:
      "Pleci cu o direcție clară și lucruri concrete de făcut. Apoi le ducem împreună.",
  },
] as const;
