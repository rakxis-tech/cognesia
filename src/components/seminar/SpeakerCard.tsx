'use client';

import { useTranslations } from 'next-intl';
import { Speaker } from '@/lib/types';
import { Locale } from '@/i18n/config';
import { getBilingualText } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface SpeakerCardProps {
  speaker: Speaker;
  locale: Locale;
}

export function SpeakerCard({ speaker, locale }: SpeakerCardProps) {
  const t = useTranslations('seminar');

  const bio = getBilingualText(speaker.bio, locale);

  return (
    <div className="bg-surface rounded-xl border overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
      <div className="p-6 flex flex-col items-center flex-grow">
        <div className="relative w-32 h-32 mb-4">
          <Image
            src={speaker.photo_url}
            alt={speaker.name}
            fill
            className="object-cover rounded-full border-4 border-white shadow-sm"
          />
        </div>
        
        <h3 className="text-xl font-bold font-montserrat text-primary text-center mb-2">
          {speaker.name}
        </h3>
        
        <p className="text-gray-600 text-center mb-4 line-clamp-3 flex-grow">
          {bio}
        </p>

        <div className="w-full mb-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {speaker.topics.slice(0, 2).map((topic, i) => (
              <span
                key={i}
                className="bg-blue-50 text-brand-primary px-2 py-1 rounded text-xs font-medium"
              >
                {getBilingualText(topic, locale)}
              </span>
            ))}
            {speaker.topics.length > 2 && (
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                +{speaker.topics.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 border-t bg-gray-50">
        <Link
          href={`/${locale}/seminar/${speaker.slug}`}
          className="block w-full text-center bg-brand-primary text-white py-2 rounded-lg font-medium hover:bg-opacity-90 transition-opacity"
        >
          {t('book_speaker')}
        </Link>
      </div>
    </div>
  );
}
