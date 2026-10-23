import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { contact, services } from '@/lib/site-data'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

const toArabicDigits = (n: number) =>
  n.toLocaleString('ar-SA', { minimumIntegerDigits: 2, useGrouping: false })

const whatsappFor = (title: string) =>
  `${contact.whatsappHref}?text=${encodeURIComponent(
    `السلام عليكم، أود الاستفسار عن تنفيذ خدمة ${title} في جدة ومناقشة التفاصيل.`
  )}`

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs md:text-sm font-medium tracking-wide text-primary">
              ٠٢ — الخدمات
            </p>
            <h2
              id="services-title"
              className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-balance text-foreground"
            >
              حلول تشطيب، تُصمَّم لتناسب مساحتك.
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-sm md:text-base text-muted-foreground md:text-right">
            من تفاصيل الأسقف والجدران إلى الواجهات الخارجية؛ استكشف مجالات عملنا في جدة، واختر ما يلائم مساحتك مع إمكانية المعاينة ومناقشة خطوات التنفيذ مباشرة.
          </p>
        </div>

        {/* Unified Services Grid */}
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-label="قائمة الخدمات">
          {services.map((s, i) => (
            <li key={s.id} className="flex flex-col">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
                {/* Unified Image Container (Fixed 4:3 Ratio) */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted/40">
                  <Image
                    src={s.image.src}
                    alt={s.image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Top-right Number Badge */}
                  <span className="absolute top-3.5 right-3.5 rounded-lg border border-ink-foreground/15 bg-ink/80 px-2.5 py-1 text-xs font-semibold text-brass backdrop-blur-md font-mono">
                    {toArabicDigits(i + 1)}
                  </span>
                </div>

                {/* Card Content (Equal Heights with flex-1) */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    {/* Title */}
                    <h3 className="font-display text-xl font-bold text-foreground transition-colors group-hover:text-primary line-clamp-1">
                      {s.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2.5 text-xs md:text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {s.description}
                    </p>

                    {/* Uses Tags */}
                    <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`استخدامات ${s.title}`}>
                      {s.uses.map((use) => (
                        <li
                          key={use}
                          className="rounded-md bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground"
                        >
                          {use}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="mt-6 border-t border-border/60 pt-4 flex items-center justify-between">
                    <a
                      href={whatsappFor(s.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-primary transition-colors hover:text-primary/80 group-hover:underline underline-offset-4"
                      aria-label={`ناقش خدمة ${s.title} عبر واتساب`}
                    >
                      <WhatsAppIcon className="size-4" />
                      <span>استفسر عن التنفيذ</span>
                      <ArrowLeft className="size-3.5 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true" />
                    </a>

                    <span className="text-[11px] text-muted-foreground/60">
                      تنفيذ بجدة
                    </span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

