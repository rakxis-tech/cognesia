'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import {
  Menu,
  X,
  ChevronDown,
  ClipboardCheck,
  Users,
  UserSearch,
  HeartHandshake,
  Mic2,
} from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { LanguageSwitcher } from './LanguageSwitcher'
import { cn } from '@/lib/utils'
import type { Locale } from '@/i18n/config'

const serviceIcons = {
  assessment: ClipboardCheck,
  team_training: Users,
  recruitment: UserSearch,
  counseling: HeartHandshake,
  seminar: Mic2,
}

export function Navbar() {
  const t = useTranslations('nav')
  const tCommon = useTranslations('common')
  const locale = useLocale() as Locale
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const services = [
    { key: 'assessment', href: `/${locale}/asesmen`, icon: serviceIcons.assessment },
    { key: 'team_training', href: `/${locale}/team-training`, icon: serviceIcons.team_training },
    { key: 'recruitment', href: `/${locale}/recruitment`, icon: serviceIcons.recruitment },
    { key: 'counseling', href: `/${locale}/konseling`, icon: serviceIcons.counseling },
    { key: 'seminar', href: `/${locale}/seminar`, icon: serviceIcons.seminar },
  ]

  const navLinks = [
    { label: t('home'), href: `/${locale}` },
    { label: t('facilitators'), href: `/${locale}/tentang#fasilitator` },
    { label: t('about'), href: `/${locale}/tentang` },
    { label: t('contact'), href: `/${locale}/kontak` },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-canvas/95 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between md:h-18">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex shrink-0 items-center">
          <Image
            src="/logos/logo-navbar.png"
            alt="Cognesia"
            width={140}
            height={40}
            className="h-8 w-auto dark:brightness-0 dark:invert"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" role="navigation">
          <Link
            href={`/${locale}`}
            className="rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-surface hover:text-text-primary"
          >
            {t('home')}
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onBlur={() => setTimeout(() => setServicesOpen(false), 200)}
              className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-surface hover:text-text-primary"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              {t('services')}
              <ChevronDown
                className={cn(
                  'h-4 w-4 transition-transform',
                  servicesOpen && 'rotate-180'
                )}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full mt-1 w-64 rounded-lg border border-border-subtle bg-canvas p-2 shadow-elevated animate-fade-in">
                {services.map((service) => {
                  const Icon = service.icon
                  return (
                    <Link
                      key={service.key}
                      href={service.href}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-text-secondary transition-colors hover:bg-surface hover:text-text-primary"
                      onClick={() => setServicesOpen(false)}
                    >
                      <Icon className="h-4 w-4 text-brand-primary" />
                      {t(service.key)}
                    </Link>
                  )
                })}
              </div>
            )}
          </div>

          <Link
            href={`/${locale}/tentang`}
            className="rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-surface hover:text-text-primary"
          >
            {t('about')}
          </Link>

          <Link
            href={`/${locale}/kontak`}
            className="rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-surface hover:text-text-primary"
          >
            {t('contact')}
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher />
          <ThemeToggle />

          <Link
            href={`/${locale}/masuk`}
            className="rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-surface hover:text-text-primary"
          >
            {t('login')}
          </Link>

          <Link
            href={`/${locale}/konseling/booking`}
            className="inline-flex h-10 items-center rounded-lg bg-brand-accent px-5 text-sm font-semibold text-text-on-accent transition-colors hover:bg-brand-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
          >
            {tCommon('cta_consult')}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary hover:bg-surface"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border-subtle bg-canvas lg:hidden animate-fade-in">
          <nav className="container flex flex-col gap-1 py-4">
            <Link
              href={`/${locale}`}
              className="rounded-lg px-4 py-3 text-sm font-medium text-text-secondary hover:bg-surface hover:text-text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {t('home')}
            </Link>

            {/* Services (expanded in mobile) */}
            <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-text-secondary">
              {t('services')}
            </div>
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.key}
                  href={service.href}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 pl-8 text-sm text-text-secondary hover:bg-surface hover:text-text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  <Icon className="h-4 w-4 text-brand-primary" />
                  {t(service.key)}
                </Link>
              )
            })}

            <Link
              href={`/${locale}/tentang`}
              className="rounded-lg px-4 py-3 text-sm font-medium text-text-secondary hover:bg-surface hover:text-text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {t('about')}
            </Link>

            <Link
              href={`/${locale}/kontak`}
              className="rounded-lg px-4 py-3 text-sm font-medium text-text-secondary hover:bg-surface hover:text-text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {t('contact')}
            </Link>

            <hr className="my-2 border-border-subtle" />

            <Link
              href={`/${locale}/masuk`}
              className="rounded-lg px-4 py-3 text-sm font-medium text-text-secondary hover:bg-surface hover:text-text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {t('login')}
            </Link>

            <div className="px-4 pt-2">
              <Link
                href={`/${locale}/konseling/booking`}
                className="flex h-12 w-full items-center justify-center rounded-lg bg-brand-accent text-sm font-semibold text-text-on-accent transition-colors hover:bg-brand-accent-hover"
                onClick={() => setMobileOpen(false)}
              >
                {tCommon('cta_consult')}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
