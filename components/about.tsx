import Image from 'next/image'
import { contact } from '@/lib/site-data'

const principles = [
  { title: 'معاينة الموقع أولاً', text: 'زيارة الموقع بجدة، أخذ المقاسات بدقة، ومناقشة الخامة والحل الأنسب للمكان.' },
  { title: 'دقة في التفاصيل', text: 'استقامة الفواصل، نظافة الزوايا، وتوزيع متناسق لمسارات الإضاءة المخفية.' },
  { title: 'تواصل مباشر وموثوق', text: 'تتعامل مع الفني المشرف على التنفيذ مباشرة من أول استفسار حتى التسليم.' },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <figure className="lg:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden bg-muted">
            <Image
              src="/images/profile.png"
              alt="جدار تلفزيون بقشرة خشب بنقشة شيفرون أثناء التركيب في موقع العمل"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <figcaption className="mt-3 text-sm text-muted-foreground">من موقع العمل — أثناء التركيب.</figcaption>
        </figure>

        <div className="flex flex-col justify-center lg:col-span-7">
          <p className="mb-4 text-sm text-primary">٠٣ — عن محمد</p>
          <h2 id="about-title" className="font-display text-4xl font-bold leading-snug text-balance md:text-5xl">
            {contact.name}
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">{contact.profession}</p>

          <div className="mt-10 flex items-end gap-6 border-y border-foreground/15 py-8">
            <p className="font-display text-8xl font-bold leading-[0.8] text-primary md:text-9xl">١٥</p>
            <p className="pb-1 text-lg leading-relaxed">
              سنوات من العمل
              <br />
              في التشطيبات والديكور
            </p>
          </div>

          <p className="mt-8 max-w-xl text-lg leading-loose">
            صنعة تُرى، وثقة تُبنى. أعمل على تنفيذ وتركيب الديكورات والتشطيبات للمنازل والمداخل في جدة؛ من أسقف الجبس بورد والإضاءة المخفية إلى تكسيات الجدران ببديل الخشب وبديل الرخام والشيب بورد والواجهات الخارجية. كل تفصيلة لها أهميتها لنضمن لك عملًا متقنًا يعبّر عن ذوقك ويدوم.
          </p>

          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {principles.map((p) => (
              <li key={p.title} className="border-t-2 border-primary pt-4">
                <h3 className="font-medium">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
