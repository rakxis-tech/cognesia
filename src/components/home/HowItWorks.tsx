'use client'

import React from 'react'
import { Phone, AlertCircle, MessageCircle } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      num: '01',
      numBg: 'bg-[#14508A]',
      tag: 'Triase Kebutuhan',
      tagColor: 'text-[#F58A31]',
      title: 'Pilih Layanan & Profil',
      desc: 'Pilih apakah Anda membutuhkan asesmen, konseling klinis, atau konsultasi HR B2B. Sistem akan mengarahkan ke psikolog atau konselor sesuai kategori keluhan.',
    },
    {
      num: '02',
      numBg: 'bg-[#F58A31]',
      tag: 'Penjadwalan Pasti',
      tagColor: 'text-[#14508A] dark:text-blue-400',
      title: 'Tentukan Jadwal & Format',
      desc: 'Tentukan sesi online via Zoom privat atau tatap muka di klinik mitra. Slot yang Anda klik terkunci otomatis selama 15 menit agar tidak diambil pengguna lain.',
    },
    {
      num: '03',
      numBg: 'bg-emerald-700',
      tag: 'Konfirmasi Cepat',
      tagColor: 'text-emerald-800 dark:text-emerald-400',
      title: 'Konfirmasi & Sesi Berjalan',
      desc: 'Verifikasi pembayaran transfer rekening manual cepat via WhatsApp resmi Cognesia. Tautan Zoom aman dan panduan sesi langsung terkirim ke ponsel Anda.',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-surface-container-low/40 dark:bg-[#131314] border-y border-outline-variant/30 dark:border-[#3c4043]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="px-3 py-1 rounded-full bg-[#F58A31]/15 text-[#944a00] dark:text-[#ffaa55] text-xs font-bold uppercase tracking-wider">
            Alur Pelayanan Ringkas
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold mt-3">
            3 Langkah Menuju Solusi Kesehatan Mental &amp; Talenta
          </h2>
          <p className="font-body text-sm md:text-base text-outline mt-2 leading-relaxed">
            Didesain responsif agar Anda tidak membuang waktu dan mendapatkan penanganan tepat sesegera mungkin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-surface dark:bg-[#1e1f20] rounded-3xl p-6 sm:p-8 shadow-ambient border border-outline-variant/30 dark:border-[#3c4043] flex flex-col items-start"
            >
              <div
                className={`w-12 h-12 rounded-full ${step.numBg} text-white font-heading text-lg font-bold flex items-center justify-center mb-6 shadow-sm`}
              >
                {step.num}
              </div>
              <span className={`text-xs font-bold ${step.tagColor} uppercase tracking-wider`}>
                {step.tag}
              </span>
              <h3 className="font-heading text-lg font-bold text-on-surface mt-1 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-outline leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Emergency Hotline Callout Banner */}
        <div className="mt-10 sm:mt-12 bg-surface dark:bg-[#1e1f20] rounded-2xl p-4 sm:p-6 border border-outline-variant/30 dark:border-[#3c4043] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-on-surface">
                Sedang Mengalami Krisis Emosional Akut?
              </p>
              <p className="text-xs text-outline">
                Layanan konseling kami berdasarkan perjanjian terjadwal. Jika membutuhkan pertolongan darurat segera:
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
            <a
              href="tel:119"
              className="flex-1 sm:flex-none px-4 py-2 rounded-full bg-[#ba1a1a] hover:bg-red-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Hotline Krisis 119</span>
            </a>
            <a
              href="https://wa.me/628888295582"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-2 rounded-full bg-surface-container dark:bg-[#282a2c] text-on-surface font-bold text-xs hover:bg-surface-container-high dark:hover:bg-[#333538] transition-colors text-center"
            >
              Hubungi CS Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
