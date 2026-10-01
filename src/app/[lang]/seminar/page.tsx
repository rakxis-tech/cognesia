import { getTranslations } from 'next-intl/server';
import { Locale } from '@/i18n/config';
import { getSpeakers } from '@/lib/data/repository';
import { SpeakerCard } from '@/components/seminar';

export default async function SeminarPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const t = await getTranslations({ locale: lang, namespace: 'seminar' });
  const speakers = await getSpeakers();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-primary mb-6">
          {t('title')}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold font-montserrat text-primary">
          {t('speakers_title')}
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} locale={lang} />
        ))}
      </div>
    </div>
  );
}
