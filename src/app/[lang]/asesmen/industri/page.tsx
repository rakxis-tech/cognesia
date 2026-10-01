import { getTranslations } from 'next-intl/server';
import { Locale } from '@/i18n/config';
import { getAssessmentTests } from '@/lib/data/repository';
import { TestCard } from '@/components/assessment';

export default async function AssessmentIndustryPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const t = await getTranslations({ locale: lang, namespace: 'assessment' });
  const tests = await getAssessmentTests('industry');

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-montserrat text-primary mb-4">
          {t('industry')}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t('industry_desc')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tests.map((test) => (
          <TestCard key={test.id} test={test} locale={lang} />
        ))}
      </div>
    </div>
  );
}
