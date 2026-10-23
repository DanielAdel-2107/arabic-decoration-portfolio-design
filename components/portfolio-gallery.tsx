'use client'

import Image from 'next/image'
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from 'react'
import {
  ChevronLeft,
  ChevronRight,
  X,
  Images,
  ArrowLeft,
  ChevronDown,
} from 'lucide-react'
import {
  portfolioCategories,
  portfolioProjects,
  type PortfolioCategory,
  type PortfolioProject,
} from '@/lib/portfolio-data'
import { contact } from '@/lib/site-data'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

const PAGE_SIZE = 10

const toArabicDigits = (n: number) =>
  n.toLocaleString('ar-SA', { minimumIntegerDigits: 1, useGrouping: false })

const categoryLabel: Record<PortfolioCategory, string> = {
  gypsum: 'جبس بورد',
  'wood-alternative': 'بديل خشب',
  chipboard: 'شيب بورد',
  'marble-alternative': 'بديل رخام',
}

// ─── Lightbox ────────────────────────────────────────────────────────────────

interface LightboxProps {
  project: PortfolioProject
  startIndex: number
  onClose: () => void
}

function Lightbox({ project, startIndex, onClose }: LightboxProps) {
  const [imgIndex, setImgIndex] = useState(startIndex)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const touchStartX = useRef<number | null>(null)
  const total = project.images.length

  const prev = useCallback(
    () => setImgIndex((i) => (i - 1 + total) % total),
    [total],
  )
  const next = useCallback(() => setImgIndex((i) => (i + 1) % total), [total])

  useEffect(() => {
    dialogRef.current?.showModal()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') prev()
      if (e.key === 'ArrowLeft') next()
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next, onClose])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
    touchStartX.current = null
  }

  const src = project.images[imgIndex]

  return (
    <dialog
      ref={dialogRef}
      aria-label={`${project.title} — معرض الصور`}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 text-ink-foreground backdrop:bg-ink/95"
    >
      <div
        className="flex h-full flex-col bg-ink"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top bar */}
        <div className="flex shrink-0 items-center justify-between border-b border-ink-foreground/10 px-4 py-3 md:px-8">
          <div className="flex items-center gap-3">
            <span className="rounded-md bg-brass/15 px-2 py-0.5 text-xs font-medium text-brass">
              {categoryLabel[project.category]}
            </span>
            <span className="font-display text-sm font-semibold text-ink-foreground line-clamp-1 max-w-[200px] sm:max-w-none">
              {project.title}
            </span>
            {total > 1 && (
              <span className="font-mono text-xs text-ink-foreground/50">
                {toArabicDigits(imgIndex + 1)} / {toArabicDigits(total)}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-ink-foreground/20 text-ink-foreground/80 transition-colors hover:border-ink-foreground hover:text-ink-foreground"
            aria-label="إغلاق المعرض"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        {/* Image area */}
        <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 py-4 md:px-20 md:py-8">
          <Image
            key={src}
            src={src}
            alt={`${project.title} — صورة ${toArabicDigits(imgIndex + 1)}`}
            fill
            sizes="100vw"
            className="object-contain animate-in fade-in duration-300"
            priority={imgIndex === 0}
          />

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prev() }}
                className="absolute right-3 top-1/2 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border border-ink-foreground/20 bg-ink/70 text-ink-foreground backdrop-blur-sm transition-all hover:bg-ink hover:text-brass md:inline-flex"
                aria-label="الصورة السابقة"
              >
                <ChevronRight className="size-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); next() }}
                className="absolute left-3 top-1/2 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border border-ink-foreground/20 bg-ink/70 text-ink-foreground backdrop-blur-sm transition-all hover:bg-ink hover:text-brass md:inline-flex"
                aria-label="الصورة التالية"
              >
                <ChevronLeft className="size-6" aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        {/* Bottom bar — mobile arrows */}
        {total > 1 && (
          <div className="flex shrink-0 items-center justify-between border-t border-ink-foreground/10 px-4 py-3 md:hidden">
            <button
              type="button"
              onClick={prev}
              className="inline-flex size-10 items-center justify-center rounded-lg border border-ink-foreground/25 text-ink-foreground/80 transition-colors hover:border-brass hover:text-brass"
              aria-label="الصورة السابقة"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
            <span className="font-mono text-xs text-ink-foreground/50">
              {toArabicDigits(imgIndex + 1)} / {toArabicDigits(total)}
            </span>
            <button
              type="button"
              onClick={next}
              className="inline-flex size-10 items-center justify-center rounded-lg border border-ink-foreground/25 text-ink-foreground/80 transition-colors hover:border-brass hover:text-brass"
              aria-label="الصورة التالية"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </dialog>
  )
}

// ─── Project Card ─────────────────────────────────────────────────────────────

interface CardProps {
  project: PortfolioProject
  index: number
  onOpen: () => void
}

function ProjectCard({ project, index, onOpen }: CardProps) {
  const photoCount = project.images.length

  return (
    <li className="flex flex-col animate-in fade-in duration-300">
      <article
        onClick={onOpen}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onOpen()
          }
        }}
        tabIndex={0}
        role="button"
        aria-label={`عرض تفاصيل: ${project.title}`}
        className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-ink-foreground/15 bg-ink-foreground/[0.03] transition-all duration-300 hover:border-brass/40 hover:bg-ink-foreground/[0.06] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-foreground/10">
          <Image
            src={project.cover}
            alt={project.coverAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading={index < 6 ? 'eager' : 'lazy'}
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden="true"
          />

          {/* Category badge — top right */}
          <span className="absolute right-3 top-3 rounded-md border border-ink-foreground/20 bg-ink/80 px-2.5 py-1 text-[11px] font-medium text-brass backdrop-blur-md">
            {categoryLabel[project.category]}
          </span>

          {/* Photo count badge — top left, always visible when multi-image */}
          {photoCount > 1 && (
            <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-md border border-white/20 bg-ink/85 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md shadow-sm">
              <Images className="size-3 shrink-0" aria-hidden="true" />
              <span>{toArabicDigits(photoCount)} صور</span>
            </span>
          )}
        </div>

        {/* Card body */}
        <div className="flex flex-1 flex-col justify-between p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-base font-bold text-ink-foreground transition-colors group-hover:text-brass line-clamp-1 md:text-lg">
              {project.title}
            </h3>
            <span className="shrink-0 font-mono text-xs font-semibold text-brass/70">
              {toArabicDigits(index + 1)}
            </span>
          </div>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between border-t border-ink-foreground/10 pt-3 text-xs text-ink-foreground/60 transition-colors group-hover:text-ink-foreground/90">
            <span className="inline-flex items-center gap-1.5 font-medium transition-colors group-hover:text-brass">
              <span>معاينة العمل</span>
              <ArrowLeft
                className="size-3.5 transition-transform duration-200 group-hover:-translate-x-1"
                aria-hidden="true"
              />
            </span>
          </div>
        </div>
      </article>
    </li>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────────

export function PortfolioGallery() {
  const [filter, setFilter] = useState<PortfolioCategory | 'all'>('all')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [lightbox, setLightbox] = useState<{
    project: PortfolioProject
    imgIndex: number
  } | null>(null)
  const [, startTransition] = useTransition()

  // Filtered projects based on active category
  const filtered = useMemo(
    () =>
      filter === 'all'
        ? portfolioProjects
        : portfolioProjects.filter((p) => p.category === filter),
    [filter],
  )

  const visible = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount],
  )

  const hasMore = visibleCount < filtered.length

  // Category counts (only non-empty categories shown)
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: portfolioProjects.length }
    for (const p of portfolioProjects) {
      counts[p.category] = (counts[p.category] ?? 0) + 1
    }
    return counts
  }, [])

  const activeCategories = useMemo(
    () =>
      portfolioCategories.filter((c) => {
        if (c.id === 'all') return true
        return (categoryCounts[c.id] ?? 0) > 0
      }),
    [categoryCounts],
  )

  const handleFilterChange = (id: PortfolioCategory | 'all') => {
    startTransition(() => {
      setFilter(id)
      setVisibleCount(PAGE_SIZE)
    })
  }

  const handleLoadMore = () => {
    startTransition(() => {
      setVisibleCount((c) => c + PAGE_SIZE)
    })
  }

  const openLightbox = (project: PortfolioProject) => {
    setLightbox({ project, imgIndex: 0 })
  }

  const closeLightbox = () => setLightbox(null)

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
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-brass/30 bg-brass/10 px-3.5 py-1 text-xs font-medium text-brass">
              <span className="size-1.5 rounded-full bg-brass" aria-hidden="true" />
              <span>معرض الأعمال الحقيقية · تنفيذ على أرض الواقع في جدة</span>
            </div>
            <h2
              id="portfolio-title"
              className="font-display text-3xl font-bold leading-tight text-balance text-ink-foreground sm:text-4xl md:text-5xl"
            >
              أعمال حقيقية.. وتفاصيل تتحدث عن نفسها
            </h2>
          </div>
          <div className="space-y-2 lg:col-span-5">
            <p className="text-sm leading-relaxed text-ink-foreground/80 md:text-base">
              تعرّف على نماذج من أعمالنا المنفذة على أرض الواقع، وشاهد تفاصيل التنفيذ والزوايا المختلفة لكل عمل.
            </p>
            <p className="text-xs font-medium text-brass">
              كل صورة توثق جانبًا من دقة التنفيذ وجودة الصنعة.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div
          role="group"
          aria-label="تصفية الأعمال حسب النوع"
          className="-mx-5 mb-10 flex gap-2 overflow-x-auto px-5 pb-2 scrollbar-none md:mx-0 md:px-0"
        >
          {activeCategories.map((c) => {
            const count = categoryCounts[c.id] ?? 0
            const selected = filter === c.id
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => handleFilterChange(c.id)}
                aria-pressed={selected}
                className={`flex shrink-0 items-center gap-2 rounded-lg border px-4 py-2 text-xs font-medium transition-all duration-200 md:text-sm ${
                  selected
                    ? 'border-brass bg-brass text-ink shadow-sm'
                    : 'border-ink-foreground/15 bg-ink-foreground/[0.03] text-ink-foreground/80 hover:border-brass/40 hover:bg-ink-foreground/[0.07] hover:text-ink-foreground'
                }`}
              >
                <span>{c.label}</span>
                <span
                  className={`font-mono text-[11px] ${
                    selected ? 'text-ink/80' : 'text-ink-foreground/50'
                  }`}
                >
                  {toArabicDigits(count)}
                </span>
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <ul
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          aria-live="polite"
          aria-label="معرض الأعمال"
        >
          {visible.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={() => openLightbox(project)}
            />
          ))}
        </ul>

        {/* Load More */}
        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 rounded-xl border border-ink-foreground/20 bg-ink-foreground/[0.04] px-6 py-3 text-sm font-medium text-ink-foreground/80 transition-all duration-200 hover:border-brass/40 hover:bg-ink-foreground/[0.08] hover:text-ink-foreground"
            >
              <span>رؤية المزيد من الأعمال</span>
              <span className="font-mono text-xs text-ink-foreground/50">
                ({toArabicDigits(filtered.length - visibleCount)} متبقية)
              </span>
              <ChevronDown className="size-4" aria-hidden="true" />
            </button>
          </div>
        )}

        {/* Two Paths Section — لديه تصميم جاهز vs لا يمتلك تصميمًا */}
        <div className="mt-16 pt-12 border-t border-ink-foreground/10">
          <div className="mb-8 text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-wider text-brass">
              صنعة تُرى، وثقة تُبنى
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold text-ink-foreground sm:text-3xl">
              سواء كان تصميمك جاهزًا أو تبدأ معنا من الفكرة
            </h3>
            <p className="mt-2 text-xs md:text-sm text-ink-foreground/70">
              اختر المسار الأنسب لك، وشاركنا تفاصيل موقعك في جدة لنناقش الخطوة التالية بكل وضوح.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* المسار الأول: العميل لديه تصميم جاهز */}
            <div className="flex flex-col justify-between rounded-2xl border border-ink-foreground/15 bg-ink-foreground/[0.03] p-6 transition-all duration-300 hover:border-brass/40 hover:bg-ink-foreground/[0.05] lg:p-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-lg bg-brass/15 px-3 py-1 text-xs font-semibold text-brass">
                  <span>المسار الأول</span>
                  <span className="text-ink-foreground/40">•</span>
                  <span>تصميمك جاهز</span>
                </div>
                <h4 className="mt-4 font-display text-xl font-bold text-ink-foreground md:text-2xl">
                  عندك تصميم في بالك؟ خلّينا ننفّذه.
                </h4>
                <p className="mt-3 text-xs md:text-sm leading-relaxed text-ink-foreground/80">
                  إذا كان لديك تصميم جاهز أو صورة لفكرة أعجبتك، شاركنا بها لنناقش إمكانية تنفيذها بما يناسب المساحة والخامات المطلوبة في موقعك بجدة، مع تقييم متطلبات التنفيذ بدقة.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-ink-foreground/10">
                <a
                  href={`https://wa.me/966542484587?text=${encodeURIComponent(
                    'السلام عليكم، لدي تصميم أرغب في تنفيذه، وأود الاستفسار عن التفاصيل.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-brass px-5 py-3 text-xs md:text-sm font-semibold text-ink shadow-sm transition-all hover:bg-brass/90"
                >
                  <WhatsAppIcon className="size-4" />
                  <span>أرسل تصميمك عبر واتساب</span>
                  <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* المسار الثاني: العميل لا يمتلك تصميمًا جاهزًا */}
            <div className="flex flex-col justify-between rounded-2xl border border-ink-foreground/15 bg-ink-foreground/[0.03] p-6 transition-all duration-300 hover:border-brass/40 hover:bg-ink-foreground/[0.05] lg:p-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-lg bg-ink-foreground/10 px-3 py-1 text-xs font-semibold text-ink-foreground/80">
                  <span>المسار الثاني</span>
                  <span className="text-ink-foreground/40">•</span>
                  <span>بداية من الفكرة</span>
                </div>
                <h4 className="mt-4 font-display text-xl font-bold text-ink-foreground md:text-2xl">
                  ما عندك تصميم جاهز؟ نساعدك تبدأ من الفكرة.
                </h4>
                <p className="mt-3 text-xs md:text-sm leading-relaxed text-ink-foreground/80">
                  إذا كنت تبحث عن فكرة تناسب مساحتك، يمكنك مناقشة احتياجك معنا، والاستفادة من خبرات التصميم المتاحة لعرض تصور مبدئي للعمل قبل البدء في التنفيذ، وفقًا لنطاق العمل المتفق عليه.
                </p>
                <p className="mt-2 text-[11px] text-ink-foreground/55 leading-normal">
                  * التصور المبدئي يوضح شكل الفكرة والخيارات المتاحة قبل البدء في التنفيذ.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-ink-foreground/10">
                <a
                  href={`https://wa.me/966542484587?text=${encodeURIComponent(
                    'السلام عليكم، ليس لدي تصميم جاهز وأود مناقشة فكرة تناسب مساحتي في جدة وعرض الخيارات المتاحة.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-brass/50 bg-transparent px-5 py-3 text-xs md:text-sm font-semibold text-brass shadow-sm transition-all hover:bg-brass hover:text-ink"
                >
                  <WhatsAppIcon className="size-4" />
                  <span>ناقش فكرتك معنا</span>
                  <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          project={lightbox.project}
          startIndex={lightbox.imgIndex}
          onClose={closeLightbox}
        />
      )}
    </section>
  )
}
