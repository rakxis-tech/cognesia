'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Brain,
  MessageSquare,
  Users,
  Briefcase,
  Mic,
  Sparkles,
} from 'lucide-react'
import { LogoMark } from './LogoMark'
import { ThemeToggle } from './ThemeToggle'
import { LanguageSwitcher } from './LanguageSwitcher'
import { cn } from '@/lib/utils'
import type { Locale } from '@/i18n/config'

export function Navbar() {
  const t = useTranslations('nav')
  const tCommon = useTranslations('common')
  const locale = useLocale() as Locale
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const services = [
    {
      title: 'Asesmen Psikologi',
      desc: 'Pendidikan, minat bakat, & promosi SDM',
      href: `/${locale}/asesmen`,
      icon: Brain,
      bgColor: 'bg-secondary-fixed',
      textColor: 'text-on-secondary-container',
    },
    {
      title: 'Konseling Klinis & Sebaya',
      desc: '1-on-1 privat 50 menit online/offline',
      href: `/${locale}/konseling`,
      icon: MessageSquare,
      bgColor: 'bg-primary-fixed',
      textColor: 'text-on-primary-fixed-variant',
    },
    {
      title: 'Team Training & Workshop',
      desc: 'Capacity building & leadership agility',
      href: `/${locale}/team-training`,
      icon: Users,
      bgColor: 'bg-surface-container',
      textColor: 'text-secondary',
    },
    {
      title: 'Talent Recruitment',
      desc: 'End-to-end psikotes & assessment center',
      href: `/${locale}/recruitment`,
      icon: Briefcase,
      bgColor: 'bg-secondary-fixed',
      textColor: 'text-on-secondary-container',
    },
    {
      title: 'Seminar & Keynote',
      desc: 'Narasumber psikolog berlisensi nasional',
      href: `/${locale}/seminar`,
      icon: Mic,
      bgColor: 'bg-primary-fixed',
      textColor: 'text-on-primary-fixed-variant',
    },
  ]

  return (
    <header className="sticky top-0 z-50 bg-surface-container-lowest/90 dark:bg-inverse-surface/90 backdrop-blur-md border-b border-outline-variant/30 dark:border-outline/20 shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo Cluster */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-3.5 group active:scale-95 transition-transform duration-150"
        >
          <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center">
            <LogoMark className="w-10 h-10 drop-shadow-sm" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline tracking-tight">
              <span className="font-heading text-2xl font-bold text-[#14508A] tracking-tighter">
                COG
              </span>
              <span className="font-heading text-2xl font-bold text-[#F58A31] tracking-tight">
                NESIA
              </span>
            </div>
            <span className="text-[9px] tracking-[0.2em] font-semibold text-outline uppercase -mt-1">
              Psychology &amp; Talent Solution
            </span>
          </div>
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* Layanan Dropdown */}
          <div
            className="relative py-2"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 font-heading text-sm font-semibold text-primary dark:text-primary-container border-b-2 border-primary-container pb-1 focus:outline-none"
              aria-expanded={servicesOpen}
            >
              <span>{t('services')}</span>
              <ChevronDown
                className={cn(
                  'w-4 h-4 transition-transform duration-200',
                  servicesOpen && 'rotate-180'
                )}
              />
            </button>

            {/* Dropdown Panel */}
            {servicesOpen && (
              <div className="absolute left-0 top-full mt-1 w-80 bg-surface-container-lowest/98 dark:bg-inverse-surface rounded-2xl shadow-interactive border border-outline-variant/30 p-3 animate-in fade-in zoom-in-95 duration-150 z-50">
                {services.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-surface-container-low dark:hover:bg-gray-800 transition-colors"
                    >
                      <div
                        className={cn(
                          'w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0',
                          item.bgColor,
                          item.textColor
                        )}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-on-surface dark:text-white">
                          {item.title}
                        </p>
                        <p className="text-xs text-outline leading-tight">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>

          <Link
            href={`/${locale}#fasilitator`}
            className="text-sm font-medium text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-container transition-colors"
          >
            Fasilitator &amp; Speaker
          </Link>
          <Link
            href={`/${locale}/tentang`}
            className="text-sm font-medium text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-container transition-colors"
          >
            Tentang Kami
          </Link>
          <Link
            href={`/${locale}/kontak`}
            className="text-sm font-medium text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-container transition-colors"
          >
            Kontak
          </Link>
        </nav>

        {/* Trailing Action Controls */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />

          <Link
            href={`/${locale}/masuk`}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-secondary dark:text-blue-400 hover:text-on-secondary-container hover:bg-surface-container dark:hover:bg-gray-800 rounded-full transition-all duration-150 active:scale-95"
          >
            {t('login')}
          </Link>

          {/* Primary Action Button */}
          <Link
            href={`/${locale}/konseling/booking`}
            className="inline-flex items-center gap-2 bg-[#F58A31] hover:bg-[#e07722] text-[#14508A] font-bold text-sm px-5 py-2.5 rounded-full shadow-orange-glow hover:shadow-md transition-all duration-200 active:scale-95 flex-shrink-0"
          >
            <span>{tCommon('cta_consult')}</span>
            <ArrowRight className="w-4 h-4 font-bold" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl text-on-surface-variant hover:bg-surface-container transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-outline-variant/30 bg-surface-container-lowest dark:bg-inverse-surface px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <p className="text-xs font-bold uppercase tracking-wider text-outline">
            {t('services')}
          </p>
          <div className="grid grid-cols-1 gap-2">
            {services.map((s, idx) => {
              const Icon = s.icon
              return (
                <Link
                  key={idx}
                  href={s.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-surface-container-low dark:bg-gray-800"
                >
                  <Icon className="w-5 h-5 text-[#14508A] dark:text-[#F58A31]" />
                  <div>
                    <p className="text-sm font-semibold text-on-surface dark:text-white">
                      {s.title}
                    </p>
                    <p className="text-xs text-outline">{s.desc}</p>
                  </div>
                </Link>
              )
            })}
          </div>

          <hr className="border-outline-variant/20" />

          <div className="flex flex-col gap-2">
            <Link
              href={`/${locale}#fasilitator`}
              onClick={() => setMobileOpen(false)}
              className="py-2 text-sm font-semibold text-on-surface dark:text-white"
            >
              Fasilitator &amp; Speaker
            </Link>
            <Link
              href={`/${locale}/tentang`}
              onClick={() => setMobileOpen(false)}
              className="py-2 text-sm font-semibold text-on-surface dark:text-white"
            >
              Tentang Kami
            </Link>
            <Link
              href={`/${locale}/kontak`}
              onClick={() => setMobileOpen(false)}
              className="py-2 text-sm font-semibold text-on-surface dark:text-white"
            >
              Kontak
            </Link>
            <Link
              href={`/${locale}/masuk`}
              onClick={() => setMobileOpen(false)}
              className="py-2 text-sm font-semibold text-secondary"
            >
              {t('login')}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
