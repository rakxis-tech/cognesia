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
    <div className="bg-surface dark:bg-[#1e1f20] rounded-2xl border border-outline/10 dark:border-[#3c4043] overflow-hidden flex flex-col h-full hover:shadow-lg transition-all">
      <div className="p-6 flex flex-col items-center flex-grow">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4">
          <Image
            src={speaker.photo_url}
            alt={speaker.name}
            fill
            className="object-cover rounded-full border-4 border-white dark:border-[#282a2c] shadow-sm"
          />
        </div>
        
        <h3 className="text-lg sm:text-xl font-bold font-montserrat text-on-surface dark:text-white text-center mb-2">
          {speaker.name}
        </h3>
        
        <p className="text-sm text-outline dark:text-[#9aa0a6] text-center mb-4 line-clamp-3 flex-grow leading-relaxed">
          {bio}
        </p>

        <div className="w-full mb-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {speaker.topics.slice(0, 2).map((topic, i) => (
              <span
                key={i}
                className="bg-blue-50 dark:bg-[#8ab4f8]/10 text-brand-primary dark:text-[#8ab4f8] px-2.5 py-1 rounded-full text-xs font-medium"
              >
                {getBilingualText(topic, locale)}
              </span>
            ))}
            {speaker.topics.length > 2 && (
              <span className="bg-gray-100 dark:bg-[#282a2c] text-gray-600 dark:text-[#c4c7c5] px-2.5 py-1 rounded-full text-xs font-medium">
                +{speaker.topics.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-outline/10 dark:border-[#3c4043] bg-gray-50/50 dark:bg-[#282a2c]/60">
        <Link
          href={`/${locale}/seminar/${speaker.slug}`}
          className="block w-full text-center bg-[#14508A] hover:bg-[#14508A]/90 dark:bg-[#8ab4f8] dark:text-[#121c2a] dark:hover:bg-[#8ab4f8]/90 text-white py-2.5 rounded-xl font-semibold text-sm transition-all shadow-sm"
        >
          {t('book_speaker')}
        </Link>
      </div>
    </div>
  );
}
