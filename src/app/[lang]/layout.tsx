import type { Metadata } from 'next'
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales, type Locale } from '@/i18n/config'
import { Providers } from '@/components/Providers'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import '@/app/globals.css'

export const dynamic = 'force-dynamic'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
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
    <html lang={lang} suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} font-body antialiased bg-background text-on-surface`}
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
