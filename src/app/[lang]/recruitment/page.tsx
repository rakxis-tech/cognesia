import { getTranslations } from 'next-intl/server';
import { Locale } from '@/i18n/config';
import { ProposalForm } from '@/components/shared/ProposalForm';
import { CheckCircle2 } from 'lucide-react';

export default async function RecruitmentPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const t = await getTranslations({ locale: lang, namespace: 'recruitment' });

  // Mock problems
  const problems = [
    'Kesulitan mencari kandidat yang kompeten',
    'Tingkat turnover karyawan yang tinggi',
    'Ketidaksesuaian kandidat dengan budaya perusahaan',
    'Proses rekrutmen yang memakan waktu lama',
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-[#14508A] dark:bg-[#1e1f20] text-white py-16 md:py-20 border-b border-white/10 dark:border-[#3c4043]">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="px-3.5 py-1 rounded-full bg-white/15 dark:bg-[#8ab4f8]/20 text-white dark:text-[#8ab4f8] text-xs font-bold uppercase tracking-wider inline-block mb-3">
            B2B & Korporat
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat mb-4 tracking-tight">
            {t('hero_title')}
          </h1>
          <p className="text-base sm:text-lg text-blue-100 dark:text-[#c4c7c5] max-w-2xl mx-auto leading-relaxed">
            {t('hero_subtitle')}
          </p>
        </div>
      </section>

      {/* Problems */}
      <section className="py-16 bg-surface dark:bg-[#131314]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold font-montserrat text-center text-on-surface dark:text-[#8ab4f8] mb-12">
            {t('problems_title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {problems.map((prob, i) => (
              <div key={i} className="flex items-start p-4 rounded-xl bg-white dark:bg-[#1e1f20] border border-outline/10 dark:border-[#3c4043] shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#F58A31] flex-shrink-0 mr-3.5 mt-0.5" />
                <p className="text-sm sm:text-base text-on-surface dark:text-[#e3e3e3]">{prob}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-background dark:bg-[#18191a]">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold font-montserrat text-on-surface dark:text-[#8ab4f8] mb-3">
              {t('cta_title')}
            </h2>
            <p className="text-sm sm:text-base text-outline">
              Dapatkan profil talenta terbaik sesuai standar kompetensi dan budaya perusahaan Anda
            </p>
          </div>
          <ProposalForm serviceType="recruitment" locale={lang} />
        </div>
      </section>
    </div>
  );
}
