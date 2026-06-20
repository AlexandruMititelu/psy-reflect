import { Wordmark } from "./Wordmark";
import { nav, site } from "@/app/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between">
        <a href="#top" aria-label="Psy-Reflect — acasă">
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-ink-soft transition hover:text-ink"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a href={site.phoneHref} className="cta hidden sm:inline-flex">
          Programează o ședință
        </a>
        <a href={site.phoneHref} className="cta sm:hidden">
          Sună
        </a>
      </div>
    </header>
  );
}
