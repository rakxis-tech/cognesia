'use client'

import React from 'react'
import { Star } from 'lucide-react'

export function TestimonialCarousel() {
  const testimonials = [
    {
      initials: 'AN',
      initialsBg: 'bg-primary-fixed dark:bg-amber-950 text-[#944a00] dark:text-amber-200',
      quote:
        'Awalnya ragu konseling online via Zoom, tapi psikolog Cognesia luar biasa hangat dan tidak menghakimi sama sekali. 50 menit yang sangat mengubah cara pandang saya mengelola kecemasan di kantor.',
      name: 'Klien Konseling B2C (Anonim)',
      role: 'Software Engineer, Jakarta',
    },
    {
      initials: 'RW',
      initialsBg: 'bg-secondary-fixed dark:bg-blue-950 text-[#0d4c86] dark:text-blue-200',
      quote:
        'Layanan Talent Recruitment & Psikotes Cognesia sangat membantu seleksi Management Trainee kami. Psikogram komprehensif selesai dalam waktu 48 jam, akurasi prediksinya terbukti sangat tinggi di masa probation.',
      name: 'Rian Wicaksono',
      role: 'Head of People & Culture, Fintech Group',
    },
    {
      initials: 'MT',
      initialsBg: 'bg-surface-container dark:bg-gray-800 text-secondary dark:text-blue-300',
      quote:
        'Tes minat bakat anak saya di Cognesia sangat membuka mata. Penjelasan saat sesi feedback sangat detail sehingga kami para orang tua tahu sekolah lanjutan apa yang tepat tanpa memaksakan kehendak.',
      name: 'Mira Trihapsari',
      role: 'Orang Tua Murid SMA, Surabaya',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-surface-container-low/40 dark:bg-[#131314] border-y border-outline-variant/30 dark:border-[#3c4043]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="px-3 py-1 rounded-full bg-[#14508A]/10 dark:bg-blue-900/30 text-[#14508A] dark:text-[#8ab4f8] text-xs font-bold uppercase tracking-wider">
            Dampak Nyata
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold mt-3">
            Kisah Perjalanan &amp; Validasi Klien Kami
          </h2>
          <p className="font-body text-sm md:text-base text-outline mt-2 leading-relaxed">
            Dengarkan penuturan langsung dari individu yang bertumbuh dan pimpinan HR yang mengoptimalkan timnya bersama Cognesia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-surface dark:bg-[#1e1f20] p-6 rounded-3xl shadow-ambient border border-outline-variant/30 dark:border-[#3c4043] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-on-surface italic mb-6 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-outline-variant/20 dark:border-[#3c4043]">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${t.initialsBg}`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-xs font-bold text-on-surface">
                    {t.name}
                  </p>
                  <p className="text-[11px] text-outline">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
