'use client'

import { useTranslations } from 'next-intl'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  const t = useTranslations('contact')

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">{t('title')}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">{t('subtitle')}</p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-900">
          <form className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">{t('form_name')}</label>
              <input type="text" className="w-full rounded-lg border border-gray-300 p-3 focus:border-brand-primary focus:ring-brand-primary dark:border-gray-700 dark:bg-gray-800" required />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">{t('form_email')}</label>
              <input type="email" className="w-full rounded-lg border border-gray-300 p-3 focus:border-brand-primary focus:ring-brand-primary dark:border-gray-700 dark:bg-gray-800" required />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">{t('form_subject')}</label>
              <input type="text" className="w-full rounded-lg border border-gray-300 p-3 focus:border-brand-primary focus:ring-brand-primary dark:border-gray-700 dark:bg-gray-800" required />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">{t('form_message')}</label>
              <textarea rows={4} className="w-full rounded-lg border border-gray-300 p-3 focus:border-brand-primary focus:ring-brand-primary dark:border-gray-700 dark:bg-gray-800" required></textarea>
            </div>
            <button type="submit" className="w-full rounded-lg bg-brand-primary px-6 py-3 font-semibold text-white hover:bg-brand-primary/90">
              Kirim Pesan
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-900">
            <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">{t('info_title')}</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-brand-primary/10 p-3 text-brand-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{t('info_phone')}</p>
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-brand-primary dark:text-gray-300">+62 812 3456 7890</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-brand-primary/10 p-3 text-brand-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{t('info_email')}</p>
                  <a href="mailto:info@cognesia.id" className="text-gray-600 hover:text-brand-primary dark:text-gray-300">info@cognesia.id</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-brand-primary/10 p-3 text-brand-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{t('info_address')}</p>
                  <p className="text-gray-600 dark:text-gray-300">Gedung Perkantoran Jakarta<br/>Jl. Sudirman No. 123<br/>Jakarta Selatan 12345</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-64 rounded-2xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
            <span className="text-gray-500">Peta Lokasi (Placeholder)</span>
          </div>
        </div>
      </div>
    </div>
  )
}
