import { Wordmark } from "./Wordmark";
import { currentEvent, nav, site } from "@/app/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between">
        <a href="/#top" aria-label="Psy-Reflect — acasă">
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

        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href={currentEvent.href}
            className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-3.5 py-1.5 text-sm font-medium text-accent transition hover:bg-accent hover:text-paper"
          >
            <span className="size-1.5 rounded-full bg-current" aria-hidden />
            {currentEvent.label}
          </a>

          <a href={site.phoneHref} className="cta hidden sm:inline-flex">
            Programează o ședință
          </a>
          <a href={site.phoneHref} className="cta sm:hidden">
            Sună
          </a>
        </div>
      </div>
    </header>
  );
}
