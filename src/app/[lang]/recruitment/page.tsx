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
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            {t('hero_title')}
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            {t('hero_subtitle')}
          </p>
        </div>
      </section>

      {/* Problems */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold font-montserrat text-center text-primary mb-12">
            {t('problems_title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((prob, i) => (
              <div key={i} className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-brand-accent flex-shrink-0 mr-4" />
                <p className="text-gray-700">{prob}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-montserrat text-primary mb-4">
              {t('cta_title')}
            </h2>
          </div>
          <ProposalForm serviceType="recruitment" locale={lang} />
        </div>
      </section>
    </div>
  );
}
