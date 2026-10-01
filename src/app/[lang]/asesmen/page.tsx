import { getTranslations } from 'next-intl/server';
import { Locale } from '@/i18n/config';
import Link from 'next/link';
import { BookOpen, Briefcase } from 'lucide-react';

export default async function AssessmentPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const t = await getTranslations({ locale: lang, namespace: 'assessment' });

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-montserrat text-primary mb-4">
          {t('title')}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Link
          href={`/${lang}/asesmen/pendidikan`}
          className="group block bg-surface rounded-xl p-8 border hover:border-brand-primary hover:shadow-lg transition-all"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-blue-50 text-brand-primary rounded-full flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
              <BookOpen size={32} />
            </div>
            <h2 className="text-2xl font-bold font-montserrat text-primary">
              {t('education')}
            </h2>
            <p className="text-gray-600">{t('education_desc')}</p>
          </div>
        </Link>

        <Link
          href={`/${lang}/asesmen/industri`}
          className="group block bg-surface rounded-xl p-8 border hover:border-brand-primary hover:shadow-lg transition-all"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-blue-50 text-brand-primary rounded-full flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
              <Briefcase size={32} />
            </div>
            <h2 className="text-2xl font-bold font-montserrat text-primary">
              {t('industry')}
            </h2>
            <p className="text-gray-600">{t('industry_desc')}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
