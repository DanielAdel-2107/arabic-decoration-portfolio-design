import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { PortfolioGallery } from '@/components/portfolio-gallery'
import { Services } from '@/components/services'
import { About } from '@/components/about'
import { ServiceAreas } from '@/components/service-areas'
import { ContactCTA } from '@/components/contact-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <PortfolioGallery />
        <Services />
        <About />
        <ServiceAreas />
        <ContactCTA />
      </main>
      <SiteFooter />
    </>
  )
}
