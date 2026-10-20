'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { contact, navItems } from '@/lib/site-data'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="hidden border-b border-border/60 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-muted-foreground lg:px-10">
          <p>{contact.profession} — {contact.city}</p>
          <a href={contact.phoneHref} className="flex items-center gap-2 transition-colors hover:text-foreground">
            <Phone className="size-3.5" aria-hidden="true" />
            <span dir="ltr">{contact.phoneDisplay}</span>
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-10">
        <a href="#top" className="flex flex-col leading-tight">
          <span className="font-display text-xl font-bold md:text-2xl">{contact.name}</span>
          <span className="text-[11px] tracking-wide text-muted-foreground md:hidden">{contact.profession}</span>
        </a>

        <nav aria-label="التنقل الرئيسي" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative py-1 text-foreground/80 transition-colors hover:text-foreground after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-right after:scale-x-0 after:bg-brass after:transition-transform hover:after:scale-x-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-ink-foreground transition-all hover:bg-brass hover:text-ink sm:inline-flex shadow-xs"
          >
            <WhatsAppIcon className="size-4" />
            اطلب معاينة
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex size-11 items-center justify-center rounded-lg border border-border lg:hidden"
            aria-label="فتح القائمة"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="القائمة"
        className={`fixed inset-0 z-50 flex h-dvh flex-col bg-ink text-ink-foreground transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <span className="font-display text-xl font-bold">{contact.name}</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex size-11 items-center justify-center border border-ink-foreground/25"
            aria-label="إغلاق القائمة"
            tabIndex={open ? 0 : -1}
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="قائمة الجوال" className="flex flex-1 flex-col justify-center px-6">
          <ol className="flex flex-col">
            {navItems.map((item, i) => (
              <li key={item.href} className="border-b border-ink-foreground/15">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="flex items-baseline justify-between py-5 font-display text-3xl"
                >
                  {item.label}
                  <span className="font-sans text-xs text-brass">{`0${i + 1}`}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="grid grid-cols-2 gap-px bg-ink-foreground/15 text-sm">
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
            className="flex items-center justify-center gap-2 bg-brass py-5 text-ink"
          >
            <WhatsAppIcon className="size-4" />
            واتساب
          </a>
          <a
            href={contact.phoneHref}
            tabIndex={open ? 0 : -1}
            className="flex items-center justify-center gap-2 bg-ink py-5"
          >
            <Phone className="size-4" aria-hidden="true" />
            اتصال
          </a>
        </div>
      </div>
    </header>
  )
}
