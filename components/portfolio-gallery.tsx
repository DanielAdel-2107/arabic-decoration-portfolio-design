'use client'

import Image from 'next/image'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X, Expand, ArrowLeft } from 'lucide-react'
import { categories, projects, type ProjectCategory, contact } from '@/lib/site-data'

const toArabicDigits = (n: number) =>
  n.toLocaleString('ar-SA', { minimumIntegerDigits: 2, useGrouping: false })

const categoryNames: Record<ProjectCategory, string> = {
  tv: 'جدران التلفزيون',
  entries: 'المداخل والردهات',
  bedrooms: 'غرف النوم',
}

export function PortfolioGallery() {
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  const open = (index: number) => {
    setActiveIndex(index)
    dialogRef.current?.showModal()
  }

  const close = useCallback(() => dialogRef.current?.close(), [])

  const step = useCallback(
    (dir: 1 | -1) =>
      setActiveIndex((i) => (i === null ? i : (i + dir + visible.length) % visible.length)),
    [visible.length],
  )

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const onClose = () => setActiveIndex(null)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') step(1)
      if (e.key === 'ArrowRight') step(-1)
      if (e.key === 'Escape') close()
    }
    dialog.addEventListener('close', onClose)
    dialog.addEventListener('keydown', onKey)
    return () => {
      dialog.removeEventListener('close', onClose)
      dialog.removeEventListener('keydown', onKey)
    }
  }, [step, close])

  const active = activeIndex !== null ? visible[activeIndex] : null

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="bg-ink py-20 text-ink-foreground md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        {/* Section Header */}
        <div className="mb-12 grid gap-6 md:mb-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-3 text-xs md:text-sm font-medium tracking-wide text-brass">
              ٠١ — الأعمال
            </p>
            <h2
              id="portfolio-title"
              className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-balance text-ink-foreground"
            >
              تفاصيل تُتقن، ونتائج تتكلم.
            </h2>
          </div>
          <p className="leading-relaxed text-sm md:text-base text-ink-foreground/75 lg:col-span-5">
            استكشف نماذج من أعمال التشطيب والديكور المنفذة في جدة، وشوف دقة الفواصل، وتناسق الخامات، وجودة الإضاءة في كل مساحة.
          </p>
        </div>

        {/* Category Filters */}
        <div
          role="group"
          aria-label="تصفية الأعمال حسب النوع"
          className="-mx-5 mb-10 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:px-0 scrollbar-none"
        >
          {categories.map((c) => {
            const count =
              c.id === 'all'
                ? projects.length
                : projects.filter((p) => p.category === c.id).length
            const selected = filter === c.id
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setFilter(c.id)}
                aria-pressed={selected}
                className={`flex shrink-0 items-center gap-2 rounded-lg border px-4 py-2 text-xs md:text-sm font-medium transition-all duration-200 ${
                  selected
                    ? 'border-brass bg-brass text-ink shadow-sm'
                    : 'border-ink-foreground/15 bg-ink-foreground/[0.03] text-ink-foreground/80 hover:border-brass/40 hover:bg-ink-foreground/[0.07] hover:text-ink-foreground'
                }`}
              >
                <span>{c.label}</span>
                <span
                  className={`text-[11px] font-mono ${
                    selected ? 'text-ink/80' : 'text-ink-foreground/50'
                  }`}
                >
                  {toArabicDigits(count)}
                </span>
              </button>
            )
          })}
        </div>

        {/* Unified Projects Grid */}
        <ul
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          aria-live="polite"
        >
          {visible.map((p, i) => (
            <li
              key={p.id}
              className="flex flex-col animate-in fade-in duration-300"
            >
              <article
                onClick={() => open(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    open(i)
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`عرض تفاصيل: ${p.title}`}
                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-ink-foreground/15 bg-ink-foreground/[0.03] transition-all duration-300 hover:border-brass/40 hover:bg-ink-foreground/[0.06] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
              >
                {/* Unified Image Container with fixed 4:3 Aspect Ratio */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-foreground/10">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient overlay on hover for extra depth */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  {/* Category Badge */}
                  <span className="absolute top-3 right-3 rounded-md border border-ink-foreground/20 bg-ink/80 px-2.5 py-1 text-[11px] font-medium text-brass backdrop-blur-md">
                    {categoryNames[p.category]}
                  </span>

                  {/* Expand Icon Button */}
                  <span className="absolute bottom-3 left-3 flex size-8 items-center justify-center rounded-full border border-ink-foreground/20 bg-ink/80 text-ink-foreground/80 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 hover:text-brass">
                    <Expand className="size-3.5" aria-hidden="true" />
                  </span>
                </div>

                {/* Card Info Content */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    {/* Number & Title */}
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-base md:text-lg font-bold text-ink-foreground transition-colors group-hover:text-brass line-clamp-1">
                        {p.title}
                      </h3>
                      <span className="shrink-0 text-xs font-semibold text-brass/70 font-mono">
                        {toArabicDigits(i + 1)}
                      </span>
                    </div>

                    {/* Materials Description */}
                    <p className="mt-2 text-xs leading-relaxed text-ink-foreground/65 line-clamp-2">
                      {p.materials}
                    </p>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="mt-4 flex items-center justify-between border-t border-ink-foreground/10 pt-3 text-xs text-ink-foreground/60 transition-colors group-hover:text-ink-foreground/90">
                    <span className="inline-flex items-center gap-1.5 font-medium group-hover:text-brass transition-colors">
                      <span>معاينة العمل</span>
                      <ArrowLeft
                        className="size-3.5 transition-transform duration-200 group-hover:-translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="text-[11px] text-ink-foreground/45">
                      جدة
                    </span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        {/* Bottom Callout */}
        <div className="mt-14 rounded-xl border border-brass/20 bg-ink-foreground/[0.02] p-6 text-center md:flex md:items-center md:justify-between md:text-right lg:p-8">
          <div>
            <h4 className="font-display text-lg font-bold text-ink-foreground md:text-xl">
              عجبك أحد التصاميم أو عندك فكرة خاصة لمشروعك؟
            </h4>
            <p className="mt-1 text-xs md:text-sm text-ink-foreground/70">
              أرسل صورة المكان ومقاساته ونناقش أنسب الخامات والتفاصيل للتنفيذ في موقعك.
            </p>
          </div>
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-brass px-5 py-2.5 text-xs md:text-sm font-semibold text-ink transition-colors hover:bg-brass/90 md:mt-0"
          >
            <span>ناقش فكرة مماثلة</span>
            <ArrowLeft className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Lightbox Dialog */}
      <dialog
        ref={dialogRef}
        aria-label={active ? active.title : 'عارض الصور'}
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 text-ink-foreground backdrop:bg-ink/95"
      >
        {active && (
          <div
            className="flex h-full flex-col"
            onClick={(e) => e.target === e.currentTarget && close()}
          >
            {/* Top Lightbox Bar */}
            <div className="flex items-center justify-between border-b border-ink-foreground/10 px-4 py-3 md:px-8">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-brass">
                  {categoryNames[active.category]}
                </span>
                <span className="text-xs text-ink-foreground/50">·</span>
                <p className="text-xs text-ink-foreground/70 font-mono">
                  {toArabicDigits((activeIndex ?? 0) + 1)} / {toArabicDigits(visible.length)}
                </p>
              </div>

              <button
                type="button"
                onClick={close}
                className="inline-flex size-10 items-center justify-center rounded-lg border border-ink-foreground/20 text-ink-foreground/80 hover:border-ink-foreground hover:text-ink-foreground transition-colors"
                aria-label="إغلاق العارض"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            {/* Lightbox Center Image */}
            <div
              className="relative flex min-h-0 flex-1 items-center justify-center px-4 py-4 md:px-20 md:py-8"
              onClick={(e) => e.target === e.currentTarget && close()}
            >
              <Image
                key={active.id}
                src={active.src}
                alt={active.alt}
                width={active.width}
                height={active.height}
                sizes="100vw"
                className="max-h-full w-auto max-w-full rounded-lg object-contain shadow-2xl animate-in fade-in duration-300"
              />

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  step(-1)
                }}
                className="absolute right-3 top-1/2 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border border-ink-foreground/20 bg-ink/70 text-ink-foreground hover:bg-ink hover:text-brass transition-all md:inline-flex"
                aria-label="الصورة السابقة"
              >
                <ChevronRight className="size-6" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  step(1)
                }}
                className="absolute left-3 top-1/2 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border border-ink-foreground/20 bg-ink/70 text-ink-foreground hover:bg-ink hover:text-brass transition-all md:inline-flex"
                aria-label="الصورة التالية"
              >
                <ChevronLeft className="size-6" aria-hidden="true" />
              </button>
            </div>

            {/* Bottom Caption Bar */}
            <div className="flex items-center gap-3 border-t border-ink-foreground/10 px-4 py-4 md:px-8">
              <button
                type="button"
                onClick={() => step(-1)}
                className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-ink-foreground/25 md:hidden"
                aria-label="الصورة السابقة"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>

              <div className="min-w-0 flex-1 text-center md:text-right">
                <p className="font-display text-base font-bold text-ink-foreground md:text-lg">
                  {active.title}
                </p>
                <p className="mt-1 text-xs text-ink-foreground/70">
                  {active.materials}
                </p>
              </div>

              <button
                type="button"
                onClick={() => step(1)}
                className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-ink-foreground/25 md:hidden"
                aria-label="الصورة التالية"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  )
}
