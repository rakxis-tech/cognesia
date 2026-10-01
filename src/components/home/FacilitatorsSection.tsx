'use client'

import React from 'react'
import { useLocale } from 'next-intl'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { FacilitatorCard } from './FacilitatorCard'
import type { Locale } from '@/i18n/config'

export function FacilitatorsSection() {
  const locale = useLocale() as Locale

  const facilitators = [
    {
      id: 'f1',
      name: 'Dian Safitri, M.Psi., Psikolog',
      title: 'Psikolog Klinis Dewasa & Relasi Pasangan',
      sipp: 'SIPP: 2021-04-1872/HIMPSI',
      rating: 4.95,
      sessionCount: 140,
      bio: 'Berpengalaman 8+ tahun dalam penanganan anxiety, quarter-life crisis, trauma masa lalu, dan resolusi konflik komunikasi interpersonal.',
      tags: ['CBT', 'Mindfulness', 'Bahasa: ID, EN'],
      availability: 'today' as const,
      imageUrl: 'https://images.unsplash.com/photo-1594824813576-96b6fbcf2610?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'f2',
      name: 'Arya Pratama, M.Psi., Psikolog',
      title: 'Spesialis Karir, Burnout & Industri (PIO)',
      sipp: 'SIPP: 2018-09-0941/HIMPSI',
      rating: 5.0,
      sessionCount: 210,
      bio: 'Fokus mendampingi profesional muda dalam transisi karir, stress kepemimpinan, dan assessment center promosi managerial corporate.',
      tags: ['Career Coaching', 'Work Stress', 'Bahasa: ID, EN'],
      availability: 'tomorrow' as const,
      imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'f3',
      name: 'Nadira Kusuma, M.Psi., Psikolog',
      title: 'Psikolog Anak, Remaja & Minat Bakat',
      sipp: 'SIPP: 2022-11-2035/HIMPSI',
      rating: 4.92,
      sessionCount: 95,
      bio: 'Menangani asesmen kesiapan masuk sekolah dasar, evaluasi kesulitan belajar anak, gaya asuh (parenting), dan bimbingan penjurusan studi.',
      tags: ['Child Assessment', 'Parenting Guidance', 'Bahasa: ID'],
      availability: 'today' as const,
      imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background" id="fasilitator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-[#14508A]/10 dark:bg-blue-900/30 text-[#14508A] dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
              Fasilitator &amp; Tenaga Ahli
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold mt-3">
              Psikolog Klinis &amp; Konsultan Berpengalaman Resmi
            </h2>
            <p className="font-body text-sm md:text-base text-outline mt-2 leading-relaxed">
              Seluruh psikolog kami terverifikasi dengan Surat Izin Praktik Psikologi (SIPP) aktif dari HIMPSI dan patuh kode etik kerahasiaan.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            <button
              className="w-10 h-10 rounded-full border border-outline-variant/40 dark:border-gray-700 flex items-center justify-center hover:bg-surface-container dark:hover:bg-gray-800 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-on-surface" />
            </button>
            <button
              className="w-10 h-10 rounded-full border border-outline-variant/40 dark:border-gray-700 flex items-center justify-center hover:bg-surface-container dark:hover:bg-gray-800 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-on-surface" />
            </button>
          </div>
        </div>

        {/* Facilitators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitators.map((f) => (
            <FacilitatorCard key={f.id} {...f} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  )
}
