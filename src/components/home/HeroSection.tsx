'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Video,
  CheckCircle2,
} from 'lucide-react'
import type { Locale } from '@/i18n/config'

export function HeroSection() {
  const locale = useLocale() as Locale

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-background via-surface-container-low/40 to-background">
      {/* Ambient Structural Blobs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-secondary-fixed/40 dark:bg-blue-900/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-primary-fixed/40 dark:bg-orange-900/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Hero Copy & Dual CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Trust Badge Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-surface-container dark:bg-[#1e1f20] border border-outline-variant/40 dark:border-[#3c4043] text-on-surface-variant text-[11px] sm:text-xs font-semibold mb-4 sm:mb-6 max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#F58A31] animate-pulse flex-shrink-0" />
              <span className="truncate">Mitra Terpercaya Psikologi Klinis &amp; Solusi Talenta Korporat</span>
            </div>

            {/* Headline H1 */}
            <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-[50px] leading-tight md:leading-[1.15] text-on-surface font-bold tracking-tight mb-4 sm:mb-6 break-words">
              Solusi Psikologi{' '}
              <span className="text-[#14508A] dark:text-[#8ab4f8] underline decoration-[#F58A31] decoration-wavy decoration-2 underline-offset-8">
                Berbasis Bukti
              </span>{' '}
              untuk Pertumbuhan Individu &amp; Keunggulan Organisasi
            </h1>

            {/* Subheadline */}
            <p className="font-body text-sm sm:text-base md:text-lg text-on-surface-variant max-w-2xl mb-6 sm:mb-8 leading-relaxed">
              Menghubungkan Anda dan institusi dengan psikolog klinis berlisensi (SIPP) serta konsultan asesmen perilaku bersertifikat. Dari kesehatan mental personal, kesiapan belajar, hingga pemetaan talenta berdaya saing tinggi.
            </p>

            {/* Dual-Path Pathway Card */}
            <div className="w-full bg-surface dark:bg-[#1e1f20] rounded-3xl p-3 sm:p-4 shadow-ambient border border-outline-variant/30 dark:border-[#3c4043] mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Pathway 1: Individu */}
                <Link
                  href={`/${locale}/konseling`}
                  className="group flex flex-col justify-between p-3.5 sm:p-4 rounded-2xl bg-surface-container-low dark:bg-[#282a2c] hover:bg-primary-fixed/20 dark:hover:bg-[#333538] border border-transparent hover:border-[#F58A31]/40 transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#F58A31]/15 text-[#944a00] dark:text-[#ffb784] text-[10px] uppercase font-bold tracking-wider">
                        Jalur Individu
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#F58A31] group-hover:translate-x-1 transition-transform" />
                    </div>
                    <h2 className="font-heading text-base font-bold text-on-surface mb-1">
                      Konseling &amp; Asesmen Pribadi
                    </h2>
                    <p className="text-xs text-outline leading-tight">
                      Sesi privat 50 menit dengan Psikolog Klinis atau Konselor Sebaya.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-outline-variant/20 dark:border-[#3c4043] flex items-center justify-between text-xs font-semibold text-[#F58A31]">
                    <span>Pilih Spesialisasi</span>
                    <span className="bg-[#F58A31] text-[#14508A] font-bold px-3 py-1 rounded-full text-[11px] shadow-sm">
                      Mulai Sesi
                    </span>
                  </div>
                </Link>

                {/* Pathway 2: Institusi */}
                <Link
                  href={`/${locale}/team-training`}
                  className="group flex flex-col justify-between p-3.5 sm:p-4 rounded-2xl bg-surface-container-low dark:bg-[#282a2c] hover:bg-secondary-fixed/30 dark:hover:bg-[#333538] border border-transparent hover:border-[#14508A]/40 transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#14508A]/15 text-[#14508A] dark:text-[#8ab4f8] text-[10px] uppercase font-bold tracking-wider">
                        Jalur B2B &amp; Kampus
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#14508A] dark:text-[#8ab4f8] group-hover:translate-x-1 transition-transform" />
                    </div>
                    <h2 className="font-heading text-base font-bold text-on-surface mb-1">
                      Solusi Talenta &amp; Organisasi
                    </h2>
                    <p className="text-xs text-outline leading-tight">
                      Psikotes massal, rekrutmen, profiling kompetensi &amp; training SDM.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-outline-variant/20 dark:border-[#3c4043] flex items-center justify-between text-xs font-semibold text-[#14508A] dark:text-[#8ab4f8]">
                    <span>Request Proposal B2B</span>
                    <span className="bg-[#14508A] dark:bg-[#8ab4f8] text-white dark:text-[#131314] px-3 py-1 rounded-full text-[11px] font-bold shadow-sm">
                      Konsultasi HR
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Micro-Trust Signals */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-6 text-[11px] sm:text-xs text-outline font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#2b609b] dark:text-[#8ab4f8]" />
                Kerahasiaan Terjamin (UU PDP)
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#2b609b] dark:text-[#8ab4f8]" />
                Psikolog Ber-SIPP Resmi
              </span>
              <span className="flex items-center gap-1.5">
                <Video className="w-4 h-4 text-[#2b609b] dark:text-[#8ab4f8]" />
                Online Zoom &amp; Offline Hub
              </span>
            </div>
          </div>

          {/* Right Hero Visual & Bento Metric Cluster */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Main Hero Image Frame */}
            <div className="relative bg-surface dark:bg-[#1e1f20] rounded-3xl p-2.5 sm:p-3 shadow-interactive border border-outline-variant/30 dark:border-[#3c4043]">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface-container">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                  alt="Sesi Konseling Profesional Cognesia"
                  width={800}
                  height={600}
                  priority
                  className="w-full h-full object-cover"
                />
                {/* Floating Tag */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-surface/95 dark:bg-[#1e1f20]/95 backdrop-blur-md p-2.5 sm:p-3 rounded-xl border border-outline-variant/30 dark:border-[#3c4043] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-on-surface truncate">
                        Sesi Konseling Aktif Hari Ini
                      </p>
                      <p className="text-[10px] sm:text-[11px] text-outline truncate">
                        Slot tersedia untuk booking 1-on-1
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-primary-fixed dark:bg-amber-900/40 text-[#944a00] dark:text-amber-200 font-bold text-[10px] sm:text-xs rounded-full flex-shrink-0">
                    Tersedia
                  </span>
                </div>
              </div>

              {/* Bento Metric Floaters */}
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mt-2.5 sm:mt-3">
                <div className="p-2 sm:p-3 bg-surface-container-low dark:bg-[#282a2c] rounded-2xl text-center border border-outline-variant/20 dark:border-[#3c4043]">
                  <p className="font-heading text-base sm:text-lg font-bold text-[#14508A] dark:text-[#8ab4f8]">
                    1.200+
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-outline truncate">Klien Terbantu</p>
                </div>
                <div className="p-2 sm:p-3 bg-surface-container-low dark:bg-[#282a2c] rounded-2xl text-center border border-outline-variant/20 dark:border-[#3c4043]">
                  <p className="font-heading text-base sm:text-lg font-bold text-[#F58A31]">
                    98%
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-outline truncate">Kepuasan</p>
                </div>
                <div className="p-2 sm:p-3 bg-surface-container-low dark:bg-[#282a2c] rounded-2xl text-center border border-outline-variant/20 dark:border-[#3c4043]">
                  <p className="font-heading text-base sm:text-lg font-bold text-[#14508A] dark:text-[#8ab4f8]">
                    45+
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-outline truncate">Mitra B2B</p>
                </div>
              </div>
            </div>

            {/* Micro Badge Accreditation */}
            <div className="absolute -bottom-5 -left-4 bg-surface dark:bg-[#1e1f20] p-3 rounded-2xl shadow-interactive border border-outline-variant/30 dark:border-[#3c4043] hidden sm:flex items-center gap-3 max-w-xs">
              <div className="w-9 h-9 rounded-full bg-[#14508A] dark:bg-[#8ab4f8] text-white dark:text-[#131314] flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 font-bold" />
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface">
                  Legalitas HIMPSI
                </p>
                <p className="text-[11px] text-outline leading-tight">
                  Terverifikasi Kode Etik Psikologi Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
