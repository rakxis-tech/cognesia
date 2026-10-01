'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { Languages } from 'lucide-react'
import type { Locale } from '@/i18n/config'
import { localeNames } from '@/i18n/config'

export function LanguageSwitcher() {
  const locale = useLocale() as Locale
  const pathname = usePathname()
  const router = useRouter()

  const switchLocale = () => {
    const nextLocale: Locale = locale === 'id' ? 'en' : 'id'
    // Replace the locale segment in the pathname
    const segments = pathname.split('/')
    segments[1] = nextLocale
    router.push(segments.join('/'))
  }

  return (
    <button
      onClick={switchLocale}
      className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-border-subtle bg-canvas px-3 text-sm font-medium text-text-secondary transition-colors hover:bg-surface hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
      aria-label={`Switch to ${localeNames[locale === 'id' ? 'en' : 'id']}`}
      title={`Switch to ${localeNames[locale === 'id' ? 'en' : 'id']}`}
    >
      <Languages className="h-[18px] w-[18px]" />
      <span className="uppercase">{locale === 'id' ? 'EN' : 'ID'}</span>
    </button>
  )
}
