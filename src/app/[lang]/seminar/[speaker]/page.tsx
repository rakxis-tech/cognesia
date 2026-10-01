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
    <div className="min-h-screen bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Profile Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface dark:bg-[#1e1f20] p-6 sm:p-8 rounded-2xl border border-outline/10 dark:border-[#3c4043] shadow-sm">
              <div className="relative w-36 h-36 mx-auto mb-6">
                <Image
                  src={speakerData.photo_url}
                  alt={speakerData.name}
                  fill
                  className="object-cover rounded-full border-4 border-white dark:border-[#282a2c] shadow-sm"
                />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold font-montserrat text-on-surface dark:text-white text-center mb-3">
                {speakerData.name}
              </h1>
              <p className="text-sm sm:text-base text-outline leading-relaxed text-center mb-6">{bio}</p>

              <div className="space-y-4 pt-4 border-t border-outline/10 dark:border-[#3c4043]">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-outline mb-2">{t('topics')}</h3>
                  <div className="flex flex-wrap gap-2">
                    {speakerData.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="bg-blue-50 dark:bg-[#8ab4f8]/10 text-brand-primary dark:text-[#8ab4f8] px-3 py-1 rounded-full text-xs font-semibold"
                      >
                        {getBilingualText(topic, lang)}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-outline mb-1">{t('experience')}</h3>
                  <p className="text-sm text-on-surface dark:text-[#e3e3e3] leading-relaxed">{experience}</p>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-outline mb-1">Bahasa / Languages</h3>
                  <p className="text-sm text-on-surface dark:text-[#e3e3e3]">{speakerData.languages.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface dark:bg-[#1e1f20] p-6 sm:p-8 rounded-2xl border border-outline/10 dark:border-[#3c4043] shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold font-montserrat text-on-surface dark:text-white mb-2">
                {t('form_title')}
              </h2>
              <p className="text-sm text-outline mb-6">
                Undang speaker untuk acara internal, seminar nasional, atau workshop organisasi Anda
              </p>
              <SeminarBookingForm speaker={speakerData} locale={lang} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
