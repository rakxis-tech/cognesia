import { getTranslations } from 'next-intl/server';
import { Locale } from '@/i18n/config';
import { getSpeakerBySlug, getAvailableSlots } from '@/lib/data/repository';
import { getBilingualText } from '@/lib/utils';
import { SeminarBookingForm } from '@/components/seminar';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default async function SpeakerDetailPage({
  params: { lang, speaker: slug },
}: {
  params: { lang: Locale; speaker: string };
}) {
  const t = await getTranslations({ locale: lang, namespace: 'seminar' });
  const speakerData = await getSpeakerBySlug(slug);

  if (!speakerData) {
    notFound();
  }

  const bio = getBilingualText(speakerData.bio, lang);
  const experience = getBilingualText(speakerData.experience, lang);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12">
        {/* Profile Details */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-surface p-8 rounded-xl border">
            <div className="relative w-40 h-40 mx-auto mb-6">
              <Image
                src={speakerData.photo_url}
                alt={speakerData.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h1 className="text-3xl font-bold font-montserrat text-primary text-center mb-4">
              {speakerData.name}
            </h1>
            <p className="text-gray-700 text-center mb-6">{bio}</p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-primary mb-2">{t('topics')}</h3>
                <div className="flex flex-wrap gap-2">
                  {speakerData.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {getBilingualText(topic, lang)}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-primary mb-2">{t('experience')}</h3>
                <p className="text-gray-700">{experience}</p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Bahasa / Languages</h3>
                <p className="text-gray-700">{speakerData.languages.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="lg:col-span-7">
          <div className="bg-white p-8 rounded-xl border shadow-sm">
            <h2 className="text-2xl font-bold font-montserrat text-primary mb-6">
              {t('form_title')}
            </h2>
            <SeminarBookingForm speaker={speakerData} locale={lang} />
          </div>
        </div>
      </div>
    </div>
  );
}
