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
    <div className="min-h-screen bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-[#F58A31]/15 text-[#944a00] dark:text-amber-300 text-xs font-bold uppercase tracking-wider inline-block mb-3">
            Inspirasi & Edukasi
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat text-on-surface dark:text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-sm md:text-base text-outline leading-relaxed max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-montserrat text-on-surface dark:text-[#8ab4f8]">
            {t('speakers_title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} locale={lang} />
          ))}
        </div>
      </div>
    </div>
  );
}
