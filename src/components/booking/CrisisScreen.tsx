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
    <div className="space-y-6 text-center py-8">
      {clinicalConfig.validation_status === 'draft' && (
        <div className="bg-yellow-100 text-yellow-800 text-xs py-1 px-3 inline-block rounded-full mb-4">
          DRAFT, belum divalidasi
        </div>
      )}
      
      <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </div>

      <h2 className="text-2xl font-bold font-montserrat text-gray-900">{tCrisis('title')}</h2>
      
      <p className="text-gray-700 max-w-md mx-auto">{message}</p>
      
      <div className="bg-red-50 border border-red-100 rounded-xl p-6 max-w-md mx-auto mt-6">
        <p className="font-semibold text-red-800 mb-4">{tCrisis('immediate_help')}</p>
        <ul className="space-y-3">
          {clinicalConfig.crisis_numbers.map((num, i) => (
            <li key={i} className="flex flex-col sm:flex-row justify-between items-center bg-white p-3 rounded-lg shadow-sm">
              <span className="font-medium text-gray-800">{num.name}</span>
              <a href={`tel:${num.number}`} className="text-brand-primary font-bold hover:underline mt-1 sm:mt-0">
                {num.number}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-6">
        <p className="text-sm text-gray-500 mb-4 italic">{tCrisis('note')}</p>
        <a 
          href={buildWhatsAppUrl('+628111111111', 'Halo, saya membutuhkan bantuan segera.')} // Use real default WA
          target="_blank" rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors shadow-md"
        >
          {tCrisis('wa_priority')}
        </a>
      </div>
    </div>
  );
}
