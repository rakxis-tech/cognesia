import Link from 'next/link'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { MessageCircle, Mail, MapPin } from 'lucide-react'
import type { Locale } from '@/i18n/config'

export function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  const locale = useLocale() as Locale
  const year = new Date().getFullYear()

  const serviceLinks = [
    { label: tNav('assessment'), href: `/${locale}/asesmen` },
    { label: tNav('counseling'), href: `/${locale}/konseling` },
    { label: tNav('team_training'), href: `/${locale}/team-training` },
    { label: tNav('recruitment'), href: `/${locale}/recruitment` },
    { label: tNav('seminar'), href: `/${locale}/seminar` },
  ]

  const companyLinks = [
    { label: tNav('about'), href: `/${locale}/tentang` },
    { label: tNav('contact'), href: `/${locale}/kontak` },
    { label: tNav('facilitators'), href: `/${locale}/tentang#fasilitator` },
  ]

  const legalLinks = [
    { label: t('privacy'), href: `/${locale}/privasi` },
    { label: t('terms'), href: `/${locale}/syarat` },
  ]

  return (
    <footer className="border-t border-border-subtle bg-surface">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href={`/${locale}`}>
              <Image
                src="/logos/logo-footer.png"
                alt="Cognesia Talent Solution"
                width={160}
                height={48}
                className="h-10 w-auto dark:brightness-0 dark:invert"
              />
            </Link>
            <p className="text-sm leading-relaxed text-text-secondary max-w-prose">
              {t('description')}
            </p>
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <MessageCircle className="h-4 w-4" />
              <a
                href="https://wa.me/628888295582"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-primary transition-colors"
              >
                0888-829-5582
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-text-primary">
              {t('services')}
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-brand-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-text-primary">
              {t('company')}
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-brand-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-text-primary">
              {t('legal')}
            </h3>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-brand-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-border-subtle pt-6">
          <p className="text-center text-xs text-text-secondary">
            {t('copyright', { year: year.toString() })}
          </p>
        </div>
      </div>
    </footer>
  )
}
