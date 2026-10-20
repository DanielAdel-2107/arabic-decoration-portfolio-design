import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { contact } from '@/lib/site-data'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden py-4">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-8 md:pt-14 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pb-24 lg:pt-16">
        <div className="flex flex-col justify-between gap-8 lg:col-span-5 lg:py-4">
          <div>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border/70 bg-card/70 px-4 py-1.5 text-xs font-medium text-foreground/80 shadow-xs backdrop-blur-xs">
              <span className="size-2 rounded-full bg-brass" aria-hidden="true" />
              <span>جدة · خبرة ٥ سنوات</span>
            </div>

            <h1
              id="hero-title"
              className="font-display text-4xl font-bold leading-[1.2] text-balance sm:text-5xl lg:text-[4rem]"
            >
              جدرانٌ تُروى
              <br />
              <span className="text-primary">بالخامة والضوء.</span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              تشطيبات وتركيب ديكورات داخلية وخارجية — جبس بورد، خشب وبديله، بديل رخام، وتكسيات واجهات —
              بتنفيذ دقيق في الفواصل والزوايا والإضاءة المخفية.
            </p>
          </div>

          <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-ink px-7 py-3.5 text-sm md:text-base font-semibold text-ink-foreground shadow-md transition-all duration-300 hover:bg-brass hover:text-ink hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
            >
              <WhatsAppIcon className="size-5" />
              <span>تواصل عبر واتساب</span>
            </a>

            <a
              href="#portfolio"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card/60 px-7 py-3.5 text-sm md:text-base font-semibold text-foreground shadow-xs transition-all duration-300 hover:border-foreground/40 hover:bg-card hover:shadow-md"
            >
              <span>شاهد الأعمال</span>
              <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4 lg:col-span-7">
          {/* Main Large Image */}
          <figure className="group col-span-5 sm:col-span-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/60 bg-muted/50 shadow-md sm:aspect-[3/4] transition-all duration-300 hover:shadow-xl">
              <Image
                src="/images/entry-walnut-mirror.jpg"
                alt="مدخل بألواح خشبية داكنة وجدار بملمس بارز ومرآة طويلة بإضاءة خلفية"
                fill
                priority
                sizes="(min-width: 1024px) 35vw, (min-width: 640px) 60vw, 100vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </figure>

          {/* Side Column: Secondary Image + Stat Card */}
          <div className="col-span-5 grid grid-cols-2 gap-4 sm:col-span-2 sm:grid-cols-1 sm:grid-rows-[1fr_auto]">
            <figure className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/60 bg-muted/50 shadow-md sm:aspect-auto transition-all duration-300 hover:shadow-xl">
              <Image
                src="/images/bedroom-marble-gypsum.jpg"
                alt="خلفية سرير ببديل رخام بين شرائح خشبية وسقف جبس بإضاءة مخفية"
                fill
                priority
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 50vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent pointer-events-none" />
            </figure>

            <div className="flex flex-col justify-end rounded-2xl border border-ink-foreground/15 bg-ink p-6 text-ink-foreground shadow-lg transition-all duration-300 hover:border-brass/40">
              <p className="font-display text-5xl font-bold leading-none text-brass lg:text-6xl">٧</p>
              <p className="mt-2.5 text-xs md:text-sm leading-relaxed text-ink-foreground/80">
                مجالات تنفيذ متخصصة، من السقف إلى الواجهة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
