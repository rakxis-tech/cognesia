'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export function FAQSection() {
  const faqs = [
    {
      q: 'Apa perbedaan Psikolog Klinis dan Konselor Sebaya (Peer Counselor)?',
      a: (
        <div className="space-y-2">
          <p>
            <strong>Psikolog Klinis:</strong> Telah menyelesaikan pendidikan Magister Profesi Psikologi, berizin SIPP resmi, dan berwenang menegakkan diagnosis klinis serta terapi gangguan mental seperti kecemasan kronis, trauma, dan depresi.
          </p>
          <p>
            <strong>Konselor Sebaya:</strong> Lulusan Sarjana Psikologi/fasilitator terlatih yang mendampingi keluhan ringan seperti curhat terarah, penyesuaian gaya hidup, atau manajemen waktu.
          </p>
        </div>
      ),
    },
    {
      q: 'Bagaimana kebijakan Reschedule dan Pembatalan Sesi?',
      a: (
        <p>
          Permohonan perubahan jadwal (reschedule) dapat dilakukan maksimal H-24 sebelum sesi dimulai tanpa dikenakan biaya tambahan melalui kontak WhatsApp CS resmi. Pembatalan sepihak di bawah H-24 akan dikenakan penalti biaya operasional 50%.
        </p>
      ),
    },
    {
      q: 'Apakah data dan cerita konseling saya dijamin kerahasiaannya?',
      a: (
        <p>
          Sangat terjamin. Seluruh sesi dilindungi oleh Kode Etik Psikologi Indonesia dan UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (PDP). Catatan klinis disimpan terenkripsi dan tidak akan pernah dibagikan kepada pihak ketiga atau institusi tanpa izin tertulis dari Anda.
        </p>
      ),
    },
    {
      q: 'Bagaimana metode pembayaran transfer dan konfirmasi slotnya?',
      a: (
        <p>
          Pembayaran dilakukan via transfer manual ke rekening bank resmi Cognesia (BCA / Mandiri). Setelah transfer, kirim bukti ke WhatsApp resmi 08888295582 untuk verifikasi instan dalam kurun waktu 15 menit penahanan slot jadwal.
        </p>
      ),
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 md:py-24 bg-background" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="px-3 py-1 rounded-full bg-[#F58A31]/15 text-[#944a00] dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
            Pusat Informasi
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold mt-3">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="font-body text-sm md:text-base text-outline mt-2 leading-relaxed">
            Transparansi alur kerja, standar psikolog, dan kebijakan sesi konseling Cognesia.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="bg-surface dark:bg-[#1e1f20] rounded-2xl border border-outline-variant/30 dark:border-[#3c4043] p-5 transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left font-heading text-base font-bold text-on-surface"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 text-outline flex-shrink-0 transition-transform duration-200',
                      isOpen && 'rotate-180'
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="mt-3 text-sm text-on-surface-variant border-t border-outline-variant/20 dark:border-[#3c4043] pt-3 leading-relaxed animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
