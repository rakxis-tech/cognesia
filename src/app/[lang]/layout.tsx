import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales, type Locale } from '@/i18n/config'
import { Providers } from '@/components/Providers'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import '@/app/globals.css'

export const dynamic = 'force-dynamic'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Cognesia — Layanan Psikologi Profesional',
    template: '%s | Cognesia',
  },
  description:
    'Cognesia Talent Solution — Layanan psikologi profesional untuk pendidikan, industri, dan pengembangan SDM. Asesmen, konseling, training, dan rekrutmen.',
  keywords: [
    'psikologi',
    'asesmen',
    'konseling',
    'training',
    'rekrutmen',
    'HR',
    'SDM',
    'pendidikan',
    'industri',
    'Cognesia',
  ],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    alternateLocale: 'en_US',
    siteName: 'Cognesia',
  },
}

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const { lang } = await params

  // Validate locale
  if (!locales.includes(lang as Locale)) {
    notFound()
  }

  setRequestLocale(lang)

  const messages = await getMessages()

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${inter.variable} font-body antialiased`}
      >
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  )
}
