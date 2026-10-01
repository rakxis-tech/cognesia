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
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="relative w-full max-w-md bg-surface dark:bg-[#1e1f20] text-on-surface h-full overflow-y-auto shadow-2xl flex flex-col animate-in slide-in-from-right duration-300 border-l border-outline-variant/30 dark:border-[#3c4043]">
        <div className="p-4 sm:p-5 border-b border-outline-variant/30 dark:border-[#3c4043] flex justify-between items-center sticky top-0 bg-surface/95 dark:bg-[#1e1f20]/95 backdrop-blur-md z-10">
          <h2 className="font-heading font-bold text-lg text-on-surface">Profil Fasilitator</h2>
          <button 
            onClick={onClose} 
            className="p-2 text-outline hover:text-on-surface hover:bg-surface-container dark:hover:bg-[#282a2c] rounded-full transition-colors"
            aria-label="Tutup"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-5 sm:p-6 flex-1">
          <div className="flex flex-col items-center mb-6 text-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-surface-container overflow-hidden mb-4 shadow-sm border-2 border-outline-variant/40">
              {facilitator.photo_url ? (
                <img src={facilitator.photo_url} alt={facilitator.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-surface-container-high" />
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-on-surface">{facilitator.name}</h3>
            <span className="inline-block bg-primary/10 text-brand-primary font-bold px-3 py-1 rounded-full text-xs mt-2">
              {t(facilitator.type)}
            </span>
            {facilitator.sipp_number && (
              <p className="text-xs text-outline mt-2 font-mono">{facilitator.sipp_number}</p>
            )}
          </div>

          <div className="space-y-5">
            <div>
              <h4 className="font-bold text-sm text-on-surface mb-2 border-b border-outline-variant/20 dark:border-[#3c4043] pb-1">Latar Belakang</h4>
              <p className="text-on-surface-variant text-xs sm:text-sm whitespace-pre-wrap leading-relaxed">
                {getBilingualText(facilitator.background, locale as 'id'|'en')}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-sm text-on-surface mb-2 border-b border-outline-variant/20 dark:border-[#3c4043] pb-1">{t('specialization')}</h4>
              <div className="flex flex-wrap gap-1.5">
                {facilitator.specializations.map((spec, i) => (
                  <span key={i} className="bg-surface-container dark:bg-[#282a2c] text-on-surface px-2.5 py-1 rounded-lg text-xs font-medium">
                    {getBilingualText(spec, locale as 'id'|'en')}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm text-on-surface mb-2 border-b border-outline-variant/20 dark:border-[#3c4043] pb-1">{t('languages')}</h4>
              <div className="flex flex-wrap gap-1.5">
                {facilitator.languages.map((lang, i) => (
                  <span key={i} className="bg-surface-container dark:bg-[#282a2c] text-on-surface px-2.5 py-1 rounded-lg text-xs font-medium">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm text-on-surface mb-2 border-b border-outline-variant/20 dark:border-[#3c4043] pb-1">Biaya Sesi</h4>
              <p className="font-heading font-bold text-xl text-brand-primary">
                {formatCurrency(facilitator.price_per_session)} <span className="text-xs text-outline font-normal font-body">{tCommon('per_session')}</span>
              </p>
            </div>

            {facilitator.type === 'peer_counselor' && facilitator.disclaimer && (
              <div className="bg-amber-500/10 border-l-4 border-[#F58A31] p-3 rounded-r-xl mt-4">
                <p className="text-xs text-on-surface italic leading-relaxed">
                  {getBilingualText(facilitator.disclaimer, locale as 'id'|'en')}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="p-4 border-t border-outline-variant/30 dark:border-[#3c4043] sticky bottom-0 bg-surface/95 dark:bg-[#1e1f20]/95 backdrop-blur-md">
          <button 
            onClick={onSelect}
            className="w-full bg-[#F58A31] hover:bg-[#e07722] text-[#14508A] font-bold py-3.5 rounded-full shadow-orange-glow transition-all active:scale-95 text-sm"
          >
            Pilih Fasilitator Ini
          </button>
        </div>
      </div>
    </div>
  );
}
