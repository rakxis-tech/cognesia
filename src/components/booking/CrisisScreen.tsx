'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { ClinicalConfig } from '@/lib/types';
import { buildWhatsAppUrl } from '@/lib/utils';

interface CrisisScreenProps {
  clinicalConfig: ClinicalConfig;
  locale: string;
}

export function CrisisScreen({ clinicalConfig, locale }: CrisisScreenProps) {
  const tCrisis = useTranslations('crisis');

  const message = clinicalConfig.high_risk_message[locale as 'id'|'en'] || clinicalConfig.high_risk_message.id;

  return (
    <div className="space-y-6 text-center py-6 sm:py-8">
      {clinicalConfig.validation_status === 'draft' && (
        <div className="bg-amber-500/15 text-amber-700 dark:text-amber-400 text-xs py-1 px-3 inline-block rounded-full mb-2 font-bold">
          DRAFT, belum divalidasi
        </div>
      )}
      
      <div className="w-16 h-16 bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold font-heading text-on-surface">{tCrisis('title')}</h2>
      
      <p className="text-on-surface-variant text-sm max-w-md mx-auto leading-relaxed">{message}</p>
      
      <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 sm:p-6 max-w-md mx-auto mt-6 text-left">
        <p className="font-bold text-red-700 dark:text-red-400 text-sm mb-4 text-center sm:text-left">{tCrisis('immediate_help')}</p>
        <ul className="space-y-2.5">
          {clinicalConfig.crisis_numbers.map((num, i) => (
            <li key={i} className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-surface dark:bg-[#1e1f20] border border-outline-variant/30 dark:border-[#3c4043] p-3 rounded-xl gap-1 sm:gap-0">
              <span className="font-semibold text-xs sm:text-sm text-on-surface">{num.name}</span>
              <a href={`tel:${num.number}`} className="text-brand-primary font-mono font-bold hover:underline text-xs sm:text-sm">
                {num.number}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4">
        <p className="text-xs text-outline mb-4 italic">{tCrisis('note')}</p>
        <a 
          href={buildWhatsAppUrl('+628888295582', 'Halo Tim Cognesia, saya membutuhkan bantuan darurat segera.')}
          target="_blank" rel="noopener noreferrer"
          className="inline-block bg-emerald-600 text-white px-8 py-3.5 rounded-full font-bold hover:bg-emerald-700 transition-all shadow-md text-sm active:scale-95"
        >
          {tCrisis('wa_priority')}
        </a>
      </div>
    </div>
  );
}
