import { Wordmark } from "./Wordmark";
import { nav, site } from "@/app/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-paper">
      <div className="shell flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <Wordmark />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
            {site.legalName} · {site.legalLong}, {site.city}.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <nav className="flex flex-wrap gap-6">
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
          <p className="font-mono text-xs text-muted">
            © 2026 {site.name}. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}
