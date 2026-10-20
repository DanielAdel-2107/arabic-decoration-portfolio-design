import { ArrowUp } from 'lucide-react'
import { contact, navItems } from '@/lib/site-data'
import { BackToTopButton } from '@/components/ui/back-to-top-button'

export function SiteFooter() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-ink text-ink-foreground">
      {/* Upper subtle divider */}
      <div className="mx-auto max-w-7xl border-t border-ink-foreground/10 px-5 md:px-10" />

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Brand & profession */}
          <div className="text-center md:text-right">
            <p className="font-display text-xl font-bold text-ink-foreground/90">
              {contact.name}
            </p>
            <p className="mt-0.5 text-xs text-ink-foreground/60">
              {contact.profession} · {contact.city}
            </p>
          </div>

          {/* Essential navigation links */}
          <nav aria-label="روابط التذييل">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-ink-foreground/70">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-brass"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact phone */}
          <a
            href={contact.phoneHref}
            dir="ltr"
            className="text-xs md:text-sm text-ink-foreground/70 hover:text-brass transition-colors"
          >
            {contact.phoneDisplay}
          </a>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center gap-3 border-t border-ink-foreground/10 pt-4 text-xs text-ink-foreground/50 md:flex-row md:justify-between">
          <p>
            © {currentYear} {contact.name}. جميع الحقوق محفوظة.
          </p>
          <BackToTopButton />
        </div>
      </div>
    </footer>
  )
}
