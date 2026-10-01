'use client';

import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Facilitator } from '@/lib/types';
import { formatCurrency, getBilingualText } from '@/lib/utils';

interface ProfileDrawerProps {
  facilitator: Facilitator;
  open: boolean;
  onClose: () => void;
  onSelect: () => void;
  locale: string;
}

export function ProfileDrawer({ facilitator, open, onClose, onSelect, locale }: ProfileDrawerProps) {
  const t = useTranslations('counseling');
  const tCommon = useTranslations('common');

  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 transition-opacity"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full overflow-y-auto shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-4 border-b flex justify-between items-center sticky top-0 bg-white z-10">
          <h2 className="font-bold text-lg">Profil Fasilitator</h2>
          <button onClick={onClose} className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 flex-1">
          <div className="flex flex-col items-center mb-6 text-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden mb-4 shadow-sm">
              {facilitator.photo_url ? (
                <img src={facilitator.photo_url} alt={facilitator.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gray-300"></div>
              )}
            </div>
            <h3 className="text-2xl font-bold font-montserrat text-gray-900">{facilitator.name}</h3>
            <span className="inline-block bg-blue-100 text-brand-primary px-3 py-1 rounded-full text-sm font-medium mt-2">
              {t(facilitator.type)}
            </span>
            {facilitator.sipp_number && (
              <p className="text-xs text-gray-500 mt-2">SIPP: {facilitator.sipp_number}</p>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 border-b pb-1">Latar Belakang</h4>
              <p className="text-gray-700 text-sm whitespace-pre-wrap leading-relaxed">
                {getBilingualText(facilitator.background, locale as 'id'|'en')}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2 border-b pb-1">{t('specialization')}</h4>
              <div className="flex flex-wrap gap-2">
                {facilitator.specializations.map((spec, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    {getBilingualText(spec, locale as 'id'|'en')}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2 border-b pb-1">{t('languages')}</h4>
              <div className="flex flex-wrap gap-2">
                {facilitator.languages.map((lang, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2 border-b pb-1">Biaya Sesi</h4>
              <p className="font-bold text-lg text-brand-primary">
                {formatCurrency(facilitator.price_per_session)} <span className="text-sm text-gray-500 font-normal">{tCommon('per_session')}</span>
              </p>
            </div>

            {facilitator.type === 'peer_counselor' && facilitator.disclaimer && (
              <div className="bg-orange-50 border-l-4 border-orange-400 p-3 mt-4">
                <p className="text-xs text-orange-800 italic">
                  {getBilingualText(facilitator.disclaimer, locale as 'id'|'en')}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="p-4 border-t sticky bottom-0 bg-white">
          <button 
            onClick={onSelect}
            className="w-full bg-brand-primary text-white font-bold py-3 rounded-lg hover:bg-opacity-90"
          >
            Pilih Fasilitator Ini
          </button>
        </div>
      </div>
    </div>
  );
}
