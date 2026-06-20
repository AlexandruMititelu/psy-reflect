import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://psy-reflect.ro"),
  title: "Psy-Reflect — Cabinet de psihologie în Galați",
  description:
    "Terapie clinică și evaluări psihologice în Galați. Un plan clar și pași concreți, fără judecată. Programează o ședință: 0731 181 050.",
  keywords: [
    "psiholog Galați",
    "terapie clinică",
    "evaluări psihologice",
    "psihoterapie",
    "cabinet psihologie Galați",
    "Psy-Reflect",
  ],
  authors: [{ name: "Psy-Reflect — Căpățînă și Mititelu SCPP" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Psy-Reflect — Cabinet de psihologie în Galați",
    description:
      "Terapie clinică și evaluări psihologice în Galați. Plan clar, pași concreți, fără judecată.",
    type: "website",
    locale: "ro_RO",
    siteName: "Psy-Reflect",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${inter.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
