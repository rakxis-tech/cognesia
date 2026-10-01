'use client'

import { useTranslations } from 'next-intl'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  const t = useTranslations('contact')

  return (
    <div className="min-h-screen bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-[#14508A]/10 text-[#14508A] dark:text-[#8ab4f8] text-xs font-bold uppercase tracking-wider inline-block mb-3">
            Hubungi Kami
          </span>
          <h1 className="mb-3 text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat text-on-surface dark:text-white">{t('title')}</h1>
          <p className="text-sm sm:text-base text-outline leading-relaxed max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 max-w-6xl mx-auto">
          <div className="lg:col-span-7 rounded-2xl bg-surface dark:bg-[#1e1f20] p-6 sm:p-8 border border-outline/10 dark:border-[#3c4043] shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold font-montserrat text-on-surface dark:text-white mb-6">
              Kirim Pesan Langsung
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget
                const name = (form.elements.namedItem('name') as HTMLInputElement)?.value || ''
                const subject = (form.elements.namedItem('subject') as HTMLInputElement)?.value || ''
                const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || ''
                const text = `Halo Admin Cognesia,%0A%0ANama: ${encodeURIComponent(name)}%0ASubjek: ${encodeURIComponent(subject)}%0APesan: ${encodeURIComponent(message)}`
                window.open(`https://wa.me/628888295582?text=${text}`, '_blank')
              }}
              className="space-y-5"
            >
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-outline uppercase tracking-wider">{t('form_name')}</label>
                <input
                  name="name"
                  type="text"
                  className="flex h-11 w-full rounded-xl border border-outline/20 dark:border-[#3c4043] bg-canvas dark:bg-[#282a2c] px-3.5 py-2 text-base sm:text-sm text-text-primary dark:text-[#e3e3e3] focus:outline-none focus:ring-2 focus:ring-[#14508A] dark:focus:ring-[#8ab4f8] transition-colors"
                  placeholder="Nama Lengkap Anda"
                  required
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-outline uppercase tracking-wider">{t('form_email')}</label>
                <input
                  name="email"
                  type="email"
                  className="flex h-11 w-full rounded-xl border border-outline/20 dark:border-[#3c4043] bg-canvas dark:bg-[#282a2c] px-3.5 py-2 text-base sm:text-sm text-text-primary dark:text-[#e3e3e3] focus:outline-none focus:ring-2 focus:ring-[#14508A] dark:focus:ring-[#8ab4f8] transition-colors"
                  placeholder="nama@email.com"
                  required
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-outline uppercase tracking-wider">{t('form_subject')}</label>
                <input
                  name="subject"
                  type="text"
                  className="flex h-11 w-full rounded-xl border border-outline/20 dark:border-[#3c4043] bg-canvas dark:bg-[#282a2c] px-3.5 py-2 text-base sm:text-sm text-text-primary dark:text-[#e3e3e3] focus:outline-none focus:ring-2 focus:ring-[#14508A] dark:focus:ring-[#8ab4f8] transition-colors"
                  placeholder="Topik atau Pertanyaan Anda"
                  required
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-outline uppercase tracking-wider">{t('form_message')}</label>
                <textarea
                  name="message"
                  rows={4}
                  className="flex min-h-[100px] w-full rounded-xl border border-outline/20 dark:border-[#3c4043] bg-canvas dark:bg-[#282a2c] px-3.5 py-2.5 text-base sm:text-sm text-text-primary dark:text-[#e3e3e3] focus:outline-none focus:ring-2 focus:ring-[#14508A] dark:focus:ring-[#8ab4f8] transition-colors"
                  placeholder="Tuliskan pesan atau kebutuhan konsultasi Anda..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-[#14508A] hover:bg-[#14508A]/90 dark:bg-[#8ab4f8] dark:text-[#121c2a] dark:hover:bg-[#8ab4f8]/90 px-6 py-3 font-semibold text-white text-sm sm:text-base transition-all shadow-sm"
              >
                Kirim via WhatsApp
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-surface dark:bg-[#1e1f20] p-6 sm:p-8 border border-outline/10 dark:border-[#3c4043] shadow-sm">
              <h3 className="mb-6 text-xl font-bold font-montserrat text-on-surface dark:text-white">{t('info_title')}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-[#14508A]/10 dark:bg-[#8ab4f8]/15 p-3 text-[#14508A] dark:text-[#8ab4f8] flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-outline uppercase tracking-wider mb-0.5">{t('info_phone')}</p>
                    <a href="https://wa.me/628888295582" target="_blank" rel="noreferrer" className="text-sm sm:text-base font-semibold text-on-surface dark:text-[#8ab4f8] hover:underline">
                      +62 888 829 5582
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-[#14508A]/10 dark:bg-[#8ab4f8]/15 p-3 text-[#14508A] dark:text-[#8ab4f8] flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-outline uppercase tracking-wider mb-0.5">{t('info_email')}</p>
                    <a href="mailto:halo@cognesia.id" className="text-sm sm:text-base font-semibold text-on-surface dark:text-[#8ab4f8] hover:underline">
                      halo@cognesia.id
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-[#14508A]/10 dark:bg-[#8ab4f8]/15 p-3 text-[#14508A] dark:text-[#8ab4f8] flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-outline uppercase tracking-wider mb-0.5">{t('info_address')}</p>
                    <p className="text-sm text-outline dark:text-[#c4c7c5] leading-relaxed">
                      Gedung Graha Talentia Lt. 3<br />
                      Jakarta Selatan &amp; Mitra Klinik Surabaya
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl border border-outline/10 dark:border-[#3c4043] bg-surface dark:bg-[#1e1f20] p-6 text-center shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-outline block mb-1">Jam Operasional Konsultasi</span>
              <p className="text-sm font-medium text-on-surface dark:text-[#e3e3e3]">Senin – Sabtu: 08.00 – 20.00 WIB</p>
              <p className="text-xs text-outline mt-1">Minggu &amp; Hari Libur Nasional: Berdasarkan Janji Temu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
