import { MapPin } from 'lucide-react'
import { areas } from '@/lib/site-data'

export function ServiceAreas() {
  return (
    <section id="areas" aria-labelledby="areas-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">

        {/* Header */}
        <div className="mb-12 grid gap-4 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-2 text-sm text-primary">٠٤ — مناطق العمل</p>
            <h2
              id="areas-title"
              className="font-display text-4xl font-bold leading-snug text-balance md:text-5xl"
            >
              في جدة وما حولها
            </h2>
          </div>
          <p className="max-w-xs leading-relaxed text-muted-foreground lg:col-span-5 lg:text-end">
            التنفيذ في موقعك مباشرة. إذا كان حيّك غير مذكور، راسلنا للتأكد.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {areas.map((area) => (
            <article
              key={area}
              className="group flex flex-col items-center justify-between rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:shadow-md hover:border-primary/60"
            >
              {/* Icon */}
              <MapPin className="size-5 text-primary" aria-hidden="true" />

              {/* Area name */}
              <h3 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
                {area}
              </h3>

              {/* Sub‑label */}
              <p className="text-sm text-muted-foreground">جدة</p>
            </article>
          ))}
        </div>

        {/* Full‑width coverage banner */}
        <div className="mt-8">
          <div className="flex flex-col items-center gap-4 bg-ink text-ink-foreground border border-ink-foreground/10 p-8 md:flex-row md:justify-between md:gap-6">
            <div className="flex items-center gap-3">
              <MapPin className="size-5 text-brass" aria-hidden="true" />
              <p className="font-display text-2xl font-bold md:text-3xl">
                جميع أنحاء جدة
              </p>
            </div>
            <p className="max-w-sm text-center text-sm leading-relaxed text-ink-foreground/70 md:text-right">
              نصل إلى جميع أحياء جدة — راسلنا حتى لو لم يُذكر حيّك هنا.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
