import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Locale } from '@/i18n/config';
import { getAssessmentTests } from '@/lib/data/repository';
import { TestCard } from '@/components/assessment';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function AssessmentIndustryPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const { lang } = await (params as any);
  setRequestLocale(lang);

  const t = await getTranslations({ locale: lang, namespace: 'assessment' });
  const tests = await getAssessmentTests('industry');

  return (
    <div className="min-h-screen bg-background py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Link
          href={`/${lang}/asesmen`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-outline hover:text-[#14508A] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Kategori Asesmen</span>
        </Link>

        <div className="text-center mb-12">
          <span className="px-3.5 py-1 rounded-full bg-[#14508A]/10 text-[#14508A] dark:text-blue-400 text-xs font-bold uppercase tracking-wider inline-block mb-3">
            Kategori Industri &amp; Korporat
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-on-surface mb-3">
            {t('industry')}
          </h1>
          <p className="text-sm md:text-base text-outline max-w-2xl mx-auto leading-relaxed">
            {t('industry_desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tests.map((test) => (
            <TestCard key={test.id} test={test} locale={lang} />
          ))}
        </div>
      </div>
    </div>
  );
}
