import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Amiri, IBM_Plex_Sans_Arabic } from 'next/font/google'
import './globals.css'

const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
})

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-plex-arabic',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'محمد أحمد عبد الظاهر | فني تشطيبات وتركيب ديكورات في جدة',
  description:
    'أعمال تشطيبات وتركيب ديكورات في جدة: جبس بورد، خشب طبيعي، بديل خشب، شيب بورد، بديل رخام، واجهات وتكسيات خارجية، وساندوتش بانل. خبرة ٥ سنوات.',
  generator: 'v0.app',
  openGraph: {
    title: 'محمد أحمد عبد الظاهر | تشطيبات وديكورات — جدة',
    description: 'فني تشطيبات وتركيب ديكورات بخبرة ٥ سنوات في جدة وما حولها.',
    locale: 'ar_SA',
    type: 'website',
    images: ['/images/tv-wall-marble-arch.jpg'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f3eee6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${amiri.variable} ${plexArabic.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
