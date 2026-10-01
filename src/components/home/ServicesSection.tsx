'use client'

import React from 'react'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import {
  Brain,
  Headphones,
  Users,
  Briefcase,
  Megaphone,
  CheckCircle2,
  Download,
} from 'lucide-react'
import type { Locale } from '@/i18n/config'

export function ServicesSection() {
  const locale = useLocale() as Locale

  return (
    <section className="py-16 md:py-24 bg-background" id="layanan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-[#14508A]/10 dark:bg-blue-900/30 text-[#14508A] dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
              Katalog Layanan Psikologi
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold mt-3">
              Layanan Komprehensif Berstandar Sains &amp; Praktik Teruji
            </h2>
            <p className="font-body text-sm md:text-base text-outline mt-2 leading-relaxed">
              Didesain khusus untuk memenuhi dinamika perkembangan mental pribadi maupun efektivitas manajemen modal insan organisasi.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <a
              className="inline-flex items-center gap-1.5 text-secondary dark:text-blue-400 hover:text-[#14508A] font-semibold text-sm transition-colors"
              href="https://wa.me/628888295582?text=Halo%20Admin,%20saya%20butuh%20katalog%20layanan%20lengkap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Unduh Brosur Lengkap (PDF)</span>
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bento Grid (5 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1. Asesmen Psikologi */}
          <div className="bg-surface-container-lowest dark:bg-gray-900 rounded-3xl p-6 shadow-ambient border border-outline-variant/30 dark:border-gray-800 flex flex-col justify-between hover:shadow-interactive hover:-translate-y-1 transition-all duration-200 border-t-4 border-t-[#F58A31]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary-fixed dark:bg-amber-900/40 flex items-center justify-center text-[#944a00] dark:text-amber-300 mb-5">
                <Brain className="w-6 h-6" />
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container dark:bg-gray-800 text-xs font-semibold text-on-surface-variant dark:text-gray-300">
                Pendidikan &amp; Korporat
              </span>
              <h3 className="font-heading text-xl font-bold text-on-surface dark:text-white mt-2 mb-2">
                Asesmen Psikologi
              </h3>
              <p className="text-sm text-outline mb-4 leading-relaxed">
                Pengukuran komprehensif potensi kognitif, kesiapan sekolah anak, minat bakat karir siswa, serta profiling asesmen kompetensi promosi jabatan (Test Battery A/B/C).
              </p>
              <ul className="space-y-2 mb-6 text-xs text-on-surface-variant dark:text-gray-300 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Laporan Psikogram Resmi &amp; Terstruktur</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Sesi Feedback &amp; Rekomendasi 1-on-1</span>
                </li>
              </ul>
            </div>
            <Link
              href={`/${locale}/asesmen`}
              className="w-full py-2.5 px-4 rounded-full bg-surface-container-high dark:bg-gray-800 hover:bg-[#F58A31] hover:text-white text-on-surface dark:text-white font-semibold text-xs text-center transition-all duration-200"
            >
              Pesan Asesmen
            </Link>
          </div>

          {/* 2. Konseling Psikologis */}
          <div className="bg-surface-container-lowest dark:bg-gray-900 rounded-3xl p-6 shadow-ambient border border-outline-variant/30 dark:border-gray-800 flex flex-col justify-between hover:shadow-interactive hover:-translate-y-1 transition-all duration-200 border-t-4 border-t-[#14508A]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-secondary-fixed dark:bg-blue-900/40 flex items-center justify-center text-[#0d4c86] dark:text-blue-300 mb-5">
                <Headphones className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container dark:bg-gray-800 text-xs font-semibold text-on-surface-variant dark:text-gray-300">
                  Klinis &amp; Sebaya
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-[10px] font-bold">
                  50 Menit
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-on-surface dark:text-white mt-2 mb-2">
                Konseling Psikologis
              </h3>
              <p className="text-sm text-outline mb-4 leading-relaxed">
                Ruang aman dan konfidensial untuk mengatasi kecemasan, depresi ringan, burnout kerja, dinamika keluarga, dan relasi berpasangan secara tatap muka atau video call.
              </p>
              <ul className="space-y-2 mb-6 text-xs text-on-surface-variant dark:text-gray-300 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Psikolog SIPP / Konselor Terlatih</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Tersedia Online (Zoom) &amp; Offline Hub</span>
                </li>
              </ul>
            </div>
            <Link
              href={`/${locale}/konseling/booking`}
              className="w-full py-2.5 px-4 rounded-full bg-[#F58A31] hover:bg-[#e07722] text-[#14508A] font-bold text-xs text-center shadow-orange-glow transition-all duration-200"
            >
              Booking Sesi Sekarang
            </Link>
          </div>

          {/* 3. Team Training & Workshop */}
          <div className="bg-surface-container-lowest dark:bg-gray-900 rounded-3xl p-6 shadow-ambient border border-outline-variant/30 dark:border-gray-800 flex flex-col justify-between hover:shadow-interactive hover:-translate-y-1 transition-all duration-200 border-t-4 border-t-[#F58A31]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary-fixed dark:bg-amber-900/40 flex items-center justify-center text-[#944a00] dark:text-amber-300 mb-5">
                <Users className="w-6 h-6" />
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container dark:bg-gray-800 text-xs font-semibold text-on-surface-variant dark:text-gray-300">
                Institusi &amp; Korporat
              </span>
              <h3 className="font-heading text-xl font-bold text-on-surface dark:text-white mt-2 mb-2">
                Team Training &amp; Workshop
              </h3>
              <p className="text-sm text-outline mb-4 leading-relaxed">
                Program pelatihan experiential learning terstruktur: stress management, psychological safety in workplace, emotional agility, dan leadership communication.
              </p>
              <ul className="space-y-2 mb-6 text-xs text-on-surface-variant dark:text-gray-300 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Modul Tailor-Made Sesuai Kebutuhan HR</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Pre-Test &amp; Post-Test Evaluasi Efektivitas</span>
                </li>
              </ul>
            </div>
            <Link
              href={`/${locale}/team-training`}
              className="w-full py-2.5 px-4 rounded-full bg-surface-container-high dark:bg-gray-800 hover:bg-[#14508A] hover:text-white text-on-surface dark:text-white font-semibold text-xs text-center transition-all duration-200"
            >
              Request Proposal B2B
            </Link>
          </div>

          {/* 4. Talent Recruitment */}
          <div className="bg-surface-container-lowest dark:bg-gray-900 rounded-3xl p-6 shadow-ambient border border-outline-variant/30 dark:border-gray-800 flex flex-col justify-between hover:shadow-interactive hover:-translate-y-1 transition-all duration-200 border-t-4 border-t-[#14508A]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-secondary-fixed dark:bg-blue-900/40 flex items-center justify-center text-[#0d4c86] dark:text-blue-300 mb-5">
                <Briefcase className="w-6 h-6" />
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container dark:bg-gray-800 text-xs font-semibold text-on-surface-variant dark:text-gray-300">
                Talent Acquisition
              </span>
              <h3 className="font-heading text-xl font-bold text-on-surface dark:text-white mt-2 mb-2">
                Talent Recruitment &amp; Assessment
              </h3>
              <p className="text-sm text-outline mb-4 leading-relaxed">
                End-to-end proses seleksi kandidat karyawan: psikotes online cepat, Leaderless Group Discussion (LGD), Behavioral Event Interview (BEI), dan executive profiling.
              </p>
              <ul className="space-y-2 mb-6 text-xs text-on-surface-variant dark:text-gray-300 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Turnaround Time Laporan 2-3 Hari Kerja</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Akurasi Prediksi Kinerja Teruji</span>
                </li>
              </ul>
            </div>
            <Link
              href={`/${locale}/recruitment`}
              className="w-full py-2.5 px-4 rounded-full bg-surface-container-high dark:bg-gray-800 hover:bg-[#14508A] hover:text-white text-on-surface dark:text-white font-semibold text-xs text-center transition-all duration-200"
            >
              Konsultasi Rekrutmen
            </Link>
          </div>

          {/* 5. Seminar & Keynote Speaker (Span 2 col on md/lg) */}
          <div className="bg-surface-container-lowest dark:bg-gray-900 rounded-3xl p-6 shadow-ambient border border-outline-variant/30 dark:border-gray-800 flex flex-col justify-between hover:shadow-interactive hover:-translate-y-1 transition-all duration-200 border-t-4 border-t-[#F58A31] md:col-span-2 lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7">
                <div className="w-12 h-12 rounded-2xl bg-primary-fixed dark:bg-amber-900/40 flex items-center justify-center text-[#944a00] dark:text-amber-300 mb-5">
                  <Megaphone className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container dark:bg-gray-800 text-xs font-semibold text-on-surface-variant dark:text-gray-300">
                  Public Event &amp; Corporate Keynote
                </span>
                <h3 className="font-heading text-xl font-bold text-on-surface dark:text-white mt-2 mb-2">
                  Seminar, Webinar &amp; Keynote Speaker
                </h3>
                <p className="text-sm text-outline mb-4 leading-relaxed">
                  Hadirkan psikolog klinis, akademisi, dan praktisi human capital berpengalaman dari Cognesia untuk memantik wawasan di auditorium kampus, seminar nasional, maupun internal townhall perusahaan Anda.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-surface-container-low dark:bg-gray-800 text-secondary dark:text-blue-300 font-medium">
                    Work-Life Integration
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-surface-container-low dark:bg-gray-800 text-secondary dark:text-blue-300 font-medium">
                    Gen Z in Workplace
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-surface-container-low dark:bg-gray-800 text-secondary dark:text-blue-300 font-medium">
                    Parenting &amp; Kesiapan Mental
                  </span>
                </div>
              </div>
              <div className="md:col-span-5 flex flex-col justify-between bg-surface-container-low dark:bg-gray-800/80 p-5 rounded-2xl border border-outline-variant/20 dark:border-gray-700">
                <div>
                  <p className="text-xs font-bold text-[#14508A] dark:text-blue-300 uppercase tracking-wider mb-2">
                    Portofolio Pembicara
                  </p>
                  <p className="text-xs text-on-surface-variant dark:text-gray-300 leading-relaxed">
                    Telah membawakan lebih dari 150+ sesi seminar dengan rating kepuasan audiens 4.9/5.0.
                  </p>
                </div>
                <Link
                  href={`/${locale}/seminar`}
                  className="w-full mt-4 py-2.5 px-4 rounded-full bg-[#14508A] text-white font-semibold text-xs text-center hover:bg-[#0d3b66] transition-colors"
                >
                  Undang Speaker
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
