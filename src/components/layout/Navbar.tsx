'use client'

import { useState, useRef } from 'react'
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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setServicesOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false)
    }, 200)
  }

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
    <header className="sticky top-0 z-50 bg-surface/95 dark:bg-[#131314]/95 backdrop-blur-md border-b border-outline-variant/30 dark:border-[#3c4043] shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2">
        {/* Brand Logo Cluster */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2.5 sm:gap-3.5 group active:scale-95 transition-transform duration-150 min-w-0 flex-shrink-0"
        >
          <div className="w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center">
            <LogoMark className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-sm" />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-baseline tracking-tight">
              <span className="font-heading text-xl sm:text-2xl font-bold text-[#14508A] dark:text-[#8ab4f8] tracking-tighter">
                COG
              </span>
              <span className="font-heading text-xl sm:text-2xl font-bold text-[#F58A31] tracking-tight">
                NESIA
              </span>
            </div>
            <span className="text-[8px] sm:text-[9px] tracking-[0.12em] sm:tracking-[0.2em] font-semibold text-outline uppercase -mt-0.5 truncate max-w-[140px] sm:max-w-none">
              Psychology &amp; Talent Solution
            </span>
          </div>
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7">
          {/* Layanan Dropdown */}
          <div
            className="relative py-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 font-heading text-sm font-semibold text-primary dark:text-[#8ab4f8] border-b-2 border-primary-container pb-1 focus:outline-none cursor-pointer"
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

            {/* Seamless Dropdown Wrapper */}
            {servicesOpen && (
              <div
                className="absolute left-0 top-full pt-2 w-80 z-50 animate-in fade-in zoom-in-95 duration-150"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="bg-surface dark:bg-[#1e1f20] rounded-2xl shadow-interactive border border-outline-variant/40 dark:border-[#3c4043] p-3">
                  {services.map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => {
                          setServicesOpen(false)
                        }}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-surface-container dark:hover:bg-[#282a2c] transition-colors cursor-pointer group"
                      >
                        <div
                          className={cn(
                            'w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105',
                            item.bgColor,
                            item.textColor
                          )}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-on-surface dark:text-[#e3e3e3] group-hover:text-primary dark:group-hover:text-[#8ab4f8] transition-colors">
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
              </div>
            )}
          </div>

          <Link
            href={`/${locale}#fasilitator`}
            className="text-sm font-medium text-on-surface-variant hover:text-primary dark:hover:text-[#8ab4f8] transition-colors"
          >
            Fasilitator &amp; Speaker
          </Link>
          <Link
            href={`/${locale}/tentang`}
            className="text-sm font-medium text-on-surface-variant hover:text-primary dark:hover:text-[#8ab4f8] transition-colors"
          >
            Tentang Kami
          </Link>
          <Link
            href={`/${locale}/kontak`}
            className="text-sm font-medium text-on-surface-variant hover:text-primary dark:hover:text-[#8ab4f8] transition-colors"
          >
            Kontak
          </Link>
        </nav>

        {/* Trailing Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
          <ThemeToggle />

          <Link
            href={`/${locale}/masuk`}
            className="hidden md:inline-flex items-center justify-center px-3.5 py-1.5 text-sm font-semibold text-secondary dark:text-[#8ab4f8] hover:text-on-secondary-container hover:bg-surface-container dark:hover:bg-[#282a2c] rounded-full transition-all duration-150 active:scale-95"
          >
            {t('login')}
          </Link>

          {/* Primary Action Button (Desktop & Tablet) */}
          <Link
            href={`/${locale}/konseling/booking`}
            className="hidden sm:inline-flex items-center gap-2 bg-[#F58A31] hover:bg-[#e07722] text-[#14508A] font-bold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-orange-glow hover:shadow-md transition-all duration-200 active:scale-95 flex-shrink-0"
          >
            <span>{tCommon('cta_consult')}</span>
            <ArrowRight className="w-4 h-4 font-bold" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl text-on-surface-variant hover:bg-surface-container dark:hover:bg-[#282a2c] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-outline-variant/30 dark:border-[#3c4043] bg-surface dark:bg-[#1e1f20] px-4 sm:px-6 py-5 space-y-4 animate-in slide-in-from-top-4 duration-200 max-h-[calc(100vh-4rem)] overflow-y-auto shadow-2xl">
          {/* Prominent Mobile CTA Button */}
          <Link
            href={`/${locale}/konseling/booking`}
            onClick={() => setMobileOpen(false)}
            className="w-full flex items-center justify-center gap-2 bg-[#F58A31] hover:bg-[#e07722] text-[#14508A] font-bold text-sm py-3 px-4 rounded-xl shadow-orange-glow transition-all active:scale-95"
          >
            <span>{tCommon('cta_consult')}</span>
            <ArrowRight className="w-4 h-4 font-bold" />
          </Link>

          {/* Mobile Quick Switcher Bar */}
          <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-surface-container dark:bg-[#282a2c] sm:hidden">
            <span className="text-xs font-medium text-outline">Bahasa / Language:</span>
            <LanguageSwitcher />
          </div>

          <p className="text-xs font-bold uppercase tracking-wider text-outline pt-1">
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
                  className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low dark:bg-[#282a2c] hover:bg-surface-container transition-colors"
                >
                  <Icon className="w-5 h-5 text-[#14508A] dark:text-[#f58a31]" />
                  <div>
                    <p className="text-sm font-semibold text-on-surface dark:text-[#e3e3e3]">
                      {s.title}
                    </p>
                    <p className="text-xs text-outline">{s.desc}</p>
                  </div>
                </Link>
              )
            })}
          </div>

          <hr className="border-outline-variant/20 dark:border-[#3c4043]" />

          <div className="flex flex-col gap-1">
            <Link
              href={`/${locale}#fasilitator`}
              onClick={() => setMobileOpen(false)}
              className="py-2.5 px-3 rounded-lg text-sm font-semibold text-on-surface dark:text-[#e3e3e3] hover:bg-surface-container dark:hover:bg-[#282a2c] transition-colors"
            >
              Fasilitator &amp; Speaker
            </Link>
            <Link
              href={`/${locale}/tentang`}
              onClick={() => setMobileOpen(false)}
              className="py-2.5 px-3 rounded-lg text-sm font-semibold text-on-surface dark:text-[#e3e3e3] hover:bg-surface-container dark:hover:bg-[#282a2c] transition-colors"
            >
              Tentang Kami
            </Link>
            <Link
              href={`/${locale}/kontak`}
              onClick={() => setMobileOpen(false)}
              className="py-2.5 px-3 rounded-lg text-sm font-semibold text-on-surface dark:text-[#e3e3e3] hover:bg-surface-container dark:hover:bg-[#282a2c] transition-colors"
            >
              Kontak
            </Link>
            <Link
              href={`/${locale}/masuk`}
              onClick={() => setMobileOpen(false)}
              className="py-2.5 px-3 rounded-lg text-sm font-semibold text-[#14508A] dark:text-[#8ab4f8] hover:bg-surface-container dark:hover:bg-[#282a2c] transition-colors"
            >
              {t('login')}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
