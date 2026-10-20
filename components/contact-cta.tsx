"use client"

import Image from 'next/image'
import { Phone, ChevronDown, SlidersHorizontal, ArrowLeft } from 'lucide-react'
import { contact, areas } from '@/lib/site-data'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { useState } from 'react'

export function ContactCTA() {
  const [isOpen, setIsOpen] = useState(false)
  const [service, setService] = useState('')
  const [customService, setCustomService] = useState('')
  const [area, setArea] = useState('')
  const [customArea, setCustomArea] = useState('')
  const [details, setDetails] = useState('')

  const serviceOptions = [
    'بديل خشب (WPC) — جدران أو قواطع',
    'واجهات وتكسيات خارجية للأسوار والممرات',
    'بديل رخام لخلفيات الشاشات والمغاسل',
    'جبس بورد وأسقف معلقة وبيوت نور',
    'خشب طبيعي وتأطير المداخل والكونسول',
    'ألواح شيب بورد ووحدات تلفزيون',
    'ساندوتش بانل وملاحق عازلة',
    'تشطيب وديكور متكامل للموقع',
    'خدمة أخرى',
  ]

  const resolvedService = service === 'خدمة أخرى' ? customService.trim() : service
  const resolvedArea = area === 'حي آخر في جدة' ? customArea.trim() : area

  const isFormReady = Boolean(resolvedService && resolvedArea)

  const dynamicMessage = isFormReady
    ? `السلام عليكم، أود الاستفسار عن تنفيذ ${resolvedService} في ${resolvedArea} بجدة.${details.trim() ? ` التفاصيل: ${details.trim()}` : ''}`
    : 'اختر نوع الخدمة والحي لتوليد نص الرسالة المخصصة.'

  const dynamicWhatsappHref = isFormReady
    ? `${contact.whatsappHref}?text=${encodeURIComponent(dynamicMessage)}`
    : contact.whatsappHref

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate overflow-hidden bg-ink text-ink-foreground py-16 md:py-20"
    >
      {/* Background imagery */}
      <Image
        src="/images/tv-wall-marble-arch.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-15"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/90 via-ink/75 to-ink" aria-hidden="true" />

      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        {/* Section Header */}
        <p className="mb-2 text-xs md:text-sm font-medium tracking-wide text-brass">
          ٠٥ — تواصل
        </p>

        {/* Primary Marketing Headline */}
        <h2
          id="contact-title"
          className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-balance text-ink-foreground"
        >
          صنعة تُرى، وثقة تُبنى.
        </h2>

        {/* Supporting Copy */}
        <p className="mt-3.5 max-w-lg text-sm sm:text-base md:text-lg leading-relaxed text-ink-foreground/80 mx-auto">
          عندك جدار أو سقف أو واجهة تحتاج لمسة؟ أرسل صورة المكان ومقاساته التقريبية، ونتفق على تفاصيل التنفيذ.
        </p>

        {/* Primary CTA */}
        <div className="mt-8 flex flex-col items-center">
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-lg bg-brass px-7 py-3.5 text-base md:text-lg font-semibold text-ink shadow transition-all duration-200 hover:bg-brass/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
          >
            <WhatsAppIcon className="size-5 md:size-6" />
            <span>ناقش مشروعك عبر واتساب</span>
          </a>

          <p className="mt-2.5 text-xs md:text-sm text-ink-foreground/60">
            أرسل صورة المكان وابدأ من هنا.
          </p>

          <p className="mt-3 text-xs md:text-sm text-ink-foreground/60">
            أو اتصل مباشرة على{' '}
            <a
              href={contact.phoneHref}
              dir="ltr"
              className="font-medium text-ink-foreground/80 underline underline-offset-4 hover:text-brass transition-colors"
            >
              {contact.phoneDisplay}
            </a>
          </p>
        </div>

        {/* Toggleable Inquiry Assistant */}
        <div className="mt-10 border-t border-ink-foreground/10 pt-6">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="inquiry-assistant"
            className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 bg-ink-foreground/5 px-4 py-2 text-xs md:text-sm font-medium text-ink-foreground/75 hover:bg-ink-foreground/10 hover:text-ink-foreground transition-all"
          >
            <SlidersHorizontal className="size-3.5 text-brass" aria-hidden="true" />
            <span>{isOpen ? 'إخفاء مخصّص الاستفسار' : 'جهّز استفسارك بالتفصيل (اختياري)'}</span>
            <ChevronDown
              className={`size-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>

          {/* Expandable Assistant Form */}
          {isOpen && (
            <div
              id="inquiry-assistant"
              className="mt-6 rounded-xl border border-ink-foreground/15 bg-ink/90 p-5 md:p-6 text-right text-sm shadow-xl max-w-xl mx-auto backdrop-blur-sm animate-in fade-in duration-200"
            >
              <div className="mb-4 text-center">
                <p className="font-semibold text-ink-foreground">جهّز استفسارك في أقل من دقيقة</p>
                <p className="text-xs text-ink-foreground/60 mt-1">
                  حدد نوع العمل والحي لتجهيز رسالة واتساب جاهزة للإرسال.
                </p>
              </div>

              <div className="space-y-4">
                {/* Service Selection */}
                <div>
                  <label htmlFor="modal-service" className="block text-xs font-medium text-ink-foreground/80 mb-1.5">
                    نوع الخدمة <span className="text-brass">*</span>
                  </label>
                  <select
                    id="modal-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full rounded-md border border-ink-foreground/20 bg-ink px-3 py-2 text-xs md:text-sm text-ink-foreground focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass"
                  >
                    <option value="">اختر الخدمة المطلوبة</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>

                  {service === 'خدمة أخرى' && (
                    <input
                      type="text"
                      placeholder="وضّح نوع الخدمة المطلوبة..."
                      value={customService}
                      onChange={(e) => setCustomService(e.target.value)}
                      className="mt-2 w-full rounded-md border border-ink-foreground/20 bg-ink px-3 py-2 text-xs md:text-sm text-ink-foreground focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass"
                    />
                  )}
                </div>

                {/* Area Selection */}
                <div>
                  <label htmlFor="modal-area" className="block text-xs font-medium text-ink-foreground/80 mb-1.5">
                    الحي أو المنطقة بجدة <span className="text-brass">*</span>
                  </label>
                  <select
                    id="modal-area"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full rounded-md border border-ink-foreground/20 bg-ink px-3 py-2 text-xs md:text-sm text-ink-foreground focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass"
                  >
                    <option value="">اختر الحي</option>
                    {areas.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                    <option value="حي آخر في جدة">حي آخر في جدة</option>
                  </select>

                  {area === 'حي آخر في جدة' && (
                    <input
                      type="text"
                      placeholder="اكتب اسم الحي في جدة..."
                      value={customArea}
                      onChange={(e) => setCustomArea(e.target.value)}
                      className="mt-2 w-full rounded-md border border-ink-foreground/20 bg-ink px-3 py-2 text-xs md:text-sm text-ink-foreground focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass"
                    />
                  )}
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="modal-details" className="block text-xs font-medium text-ink-foreground/80 mb-1.5">
                    تفاصيل إضافية عن المشروع (اختياري)
                  </label>
                  <textarea
                    id="modal-details"
                    rows={2}
                    placeholder="مثال: مقاس الجدار تقريبًا، داخلي أم خارجي..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full rounded-md border border-ink-foreground/20 bg-ink px-3 py-2 text-xs md:text-sm text-ink-foreground focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass"
                  />
                </div>

                {/* Message Preview */}
                <div>
                  <p className="text-xs font-medium text-ink-foreground/70 mb-1">
                    معاينة الرسالة:
                  </p>
                  <div className="rounded-md border border-ink-foreground/15 bg-ink-foreground/5 p-3 text-xs leading-relaxed text-ink-foreground/80">
                    {dynamicMessage}
                  </div>
                </div>

                {/* Submit Dynamic WhatsApp CTA */}
                <div className="pt-2">
                  <a
                    href={dynamicWhatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex w-full items-center justify-center gap-2 rounded-md bg-brass py-2.5 px-4 text-xs md:text-sm font-semibold text-ink transition-colors hover:bg-brass/90 ${
                      !isFormReady ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    aria-disabled={!isFormReady}
                  >
                    <WhatsAppIcon className="size-4" />
                    <span>إرسال الاستفسار عبر واتساب</span>
                  </a>
                  {!isFormReady && (
                    <p className="mt-1.5 text-center text-[11px] text-ink-foreground/50">
                      يرجى اختيار الخدمة والحي لتفعيل الإرسال المخصّص
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

