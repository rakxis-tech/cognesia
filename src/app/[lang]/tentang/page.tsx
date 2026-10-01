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
    <div className="min-h-screen bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <section className="mb-16 text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-[#14508A]/10 text-[#14508A] dark:text-[#8ab4f8] text-xs font-bold uppercase tracking-wider inline-block mb-3">
            Profil Lembaga
          </span>
          <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat text-on-surface dark:text-white">Tentang Cognesia</h1>
          <p className="text-sm sm:text-base text-outline leading-relaxed max-w-2xl mx-auto">Mengenal lebih dekat layanan konsultasi psikologi, asesmen talenta, dan pengembangan SDM berbasis ilmiah.</p>
        </section>

        <section className="mb-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-surface dark:bg-[#1e1f20] p-6 sm:p-8 border border-outline/10 dark:border-[#3c4043] shadow-sm">
            <h2 className="mb-3 text-xl sm:text-2xl font-bold font-montserrat text-on-surface dark:text-[#8ab4f8]">Visi</h2>
            <p className="text-sm sm:text-base text-outline dark:text-[#c4c7c5] leading-relaxed">
              Menjadi penyedia layanan psikologi terdepan yang mengintegrasikan pendidikan, industri, dan pengembangan SDM di Indonesia dengan standar etika profesi tertinggi.
            </p>
          </div>
          <div className="rounded-2xl bg-surface dark:bg-[#1e1f20] p-6 sm:p-8 border border-outline/10 dark:border-[#3c4043] shadow-sm">
            <h2 className="mb-3 text-xl sm:text-2xl font-bold font-montserrat text-on-surface dark:text-[#8ab4f8]">Misi</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-outline dark:text-[#c4c7c5]">
              <li>Menyediakan layanan asesmen dan konseling berkualitas tinggi serta terjangkau.</li>
              <li>Mengembangkan kapasitas SDM organisasi melalui program intervensi berbasis riset.</li>
              <li>Mendukung proses seleksi talenta dengan metodologi psikometri ilmiah terstandar.</li>
              <li>Mengedukasi masyarakat luas tentang urgensi dan advokasi kesehatan mental.</li>
            </ul>
          </div>
        </section>

        <section className="mb-16" id="fasilitator">
          <h2 className="mb-8 text-center text-2xl sm:text-3xl font-bold font-montserrat text-on-surface dark:text-white">Tim Profesional Kami</h2>
          
          <h3 className="mb-4 text-lg sm:text-xl font-bold text-on-surface dark:text-[#8ab4f8]">Fasilitator & Psikolog</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
            {facilitators.map(f => (
              <div key={f.id} className="overflow-hidden rounded-2xl bg-surface dark:bg-[#1e1f20] border border-outline/10 dark:border-[#3c4043] shadow-sm hover:shadow-md transition-all">
                <div className="aspect-square relative bg-gray-100 dark:bg-[#282a2c] flex items-center justify-center">
                  <Image
                    src={f.photo_url}
                    alt={f.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-base text-on-surface dark:text-white">{f.name}</h4>
                  <p className="text-xs text-outline dark:text-[#9aa0a6] mt-0.5">{f.type === 'psychologist' ? 'Psikolog Klinis' : 'Konselor Sebaya'}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="mb-4 text-lg sm:text-xl font-bold text-on-surface dark:text-[#8ab4f8]">Speaker & Narasumber</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {speakers.map(s => (
              <div key={s.id} className="overflow-hidden rounded-2xl bg-surface dark:bg-[#1e1f20] border border-outline/10 dark:border-[#3c4043] shadow-sm hover:shadow-md transition-all">
                <div className="aspect-square relative bg-gray-100 dark:bg-[#282a2c] flex items-center justify-center">
                  <Image
                    src={s.photo_url}
                    alt={s.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-base text-on-surface dark:text-white">{s.name}</h4>
                  <p className="text-xs text-outline dark:text-[#9aa0a6] mt-0.5">Keynote & Workshop Trainer</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {settings.trust_section_visible && (
          <section className="rounded-2xl bg-surface dark:bg-[#1e1f20] p-6 sm:p-8 border border-outline/10 dark:border-[#3c4043] shadow-sm">
            <h2 className="mb-6 text-xl sm:text-2xl font-bold font-montserrat text-on-surface dark:text-white">Legalitas & Kredibilitas</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {settings.company_name && (
                <div>
                  <p className="text-xs text-outline font-semibold uppercase tracking-wider mb-0.5">Badan Hukum / Entitas</p>
                  <p className="font-medium text-sm sm:text-base text-on-surface dark:text-[#e3e3e3]">{settings.company_name}</p>
                </div>
              )}
              {settings.practice_license && (
                <div>
                  <p className="text-xs text-outline font-semibold uppercase tracking-wider mb-0.5">Izin Praktik / STR</p>
                  <p className="font-medium text-sm sm:text-base text-on-surface dark:text-[#e3e3e3]">{settings.practice_license}</p>
                </div>
              )}
              <div>
                <p className="text-xs text-outline font-semibold uppercase tracking-wider mb-0.5">Afiliasi Profesional</p>
                <p className="font-medium text-sm sm:text-base text-on-surface dark:text-[#e3e3e3]">HIMPSI (Himpunan Psikologi Indonesia)</p>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
