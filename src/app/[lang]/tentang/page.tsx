import { useTranslations } from 'next-intl'
import { getFacilitators, getSpeakers, getSettings } from '@/lib/data/repository'
import Image from 'next/image'

export default async function AboutPage() {
  const t = (await import('next-intl/server')).getTranslations('about')
  const facilitators = await getFacilitators()
  const speakers = await getSpeakers()
  const settings = await getSettings()
  
  // Note: we can't use hooks directly in an async server component without 'use client', 
  // so we should pass the translations or assume a client component.
  // Actually, standard Next.js 14 i18n allows awaiting getTranslations in Server Components.

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Tentang Cognesia</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Mengenal lebih dekat layanan psikologi profesional kami.</p>
      </section>

      <section className="mb-16 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-900">
          <h2 className="mb-4 text-2xl font-bold text-brand-primary">Visi</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Menjadi penyedia layanan psikologi terdepan yang mengintegrasikan pendidikan, industri, dan pengembangan SDM di Indonesia.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-900">
          <h2 className="mb-4 text-2xl font-bold text-brand-primary">Misi</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Menyediakan layanan asesmen dan konseling berkualitas tinggi.</li>
            <li>Mengembangkan SDM melalui program training berbasis psikologi.</li>
            <li>Mendukung proses rekrutmen dengan pendekatan ilmiah.</li>
            <li>Mengedukasi masyarakat tentang pentingnya kesehatan mental.</li>
          </ul>
        </div>
      </section>

      <section className="mb-16" id="fasilitator">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">Tim Kami</h2>
        
        <h3 className="mb-6 text-2xl font-semibold">Fasilitator</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {facilitators.map(f => (
            <div key={f.id} className="overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-900">
              <div className="aspect-square relative bg-gray-100 dark:bg-gray-800">
                {/* Image placeholder */}
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-lg">{f.name}</h4>
                <p className="text-sm text-gray-500">{f.type === 'psychologist' ? 'Psikolog' : 'Konselor Sebaya'}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="mb-6 text-2xl font-semibold">Speaker</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map(s => (
            <div key={s.id} className="overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-900">
              <div className="aspect-square relative bg-gray-100 dark:bg-gray-800"></div>
              <div className="p-4">
                <h4 className="font-semibold text-lg">{s.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {settings.trust_section_visible && (
        <section className="mb-16 rounded-2xl bg-gray-50 p-8 dark:bg-gray-800/50">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Legalitas & Kepercayaan</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {settings.company_name && (
              <div>
                <p className="text-sm text-gray-500">Nama Perusahaan</p>
                <p className="font-medium">{settings.company_name}</p>
              </div>
            )}
            {settings.practice_license && (
              <div>
                <p className="text-sm text-gray-500">Izin Praktik</p>
                <p className="font-medium">{settings.practice_license}</p>
              </div>
            )}
            <div>
              <p className="text-sm text-gray-500">Keanggotaan</p>
              <p className="font-medium">HIMPSI (Himpunan Psikologi Indonesia)</p>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
