'use client';

import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { CounselingFormData, TriageResult, ClinicalConfig } from '@/lib/types';
import { getClinicalConfig } from '@/lib/data/repository';
import { CrisisScreen } from './CrisisScreen';

interface Step2Props {
  formData: Partial<CounselingFormData>;
  onChange: (data: Partial<CounselingFormData>) => void;
  triageResult: TriageResult | null;
  locale: string;
  onNext: () => void;
  onBack: () => void;
}

export function Step2Recommendation({ formData, onChange, triageResult, locale, onNext, onBack }: Step2Props) {
  const t = useTranslations('counseling');
  const tCommon = useTranslations('common');
  const [clinicalConfig, setClinicalConfig] = useState<ClinicalConfig | null>(null);

  useEffect(() => {
    getClinicalConfig().then(setClinicalConfig);
  }, []);

  if (triageResult === 'high_risk' && clinicalConfig) {
    return <CrisisScreen clinicalConfig={clinicalConfig} locale={locale} />;
  }

  const isSensitive = triageResult === 'sensitive';

  const selectType = (type: 'psychologist' | 'peer_counselor') => {
    if (type === 'peer_counselor' && isSensitive) return;
    onChange({ ...formData, counseling_type: type });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#14508A] dark:text-[#8ab4f8]">
          {t('recommendation_title')}
        </h2>
        <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
          {t('recommendation_desc')}
        </p>
      </div>
      
      {isSensitive && (
        <div className="bg-[#F58A31]/10 border-l-4 border-[#F58A31] p-4 rounded-r-xl">
          <p className="text-sm text-on-surface font-medium">{t('sensitive_notice')}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Psikolog Card */}
        <div 
          onClick={() => selectType('psychologist')}
          className={`cursor-pointer border-2 rounded-2xl p-5 sm:p-6 transition-all flex flex-col justify-between ${
            formData.counseling_type === 'psychologist' 
              ? 'border-brand-primary bg-primary/10 dark:bg-[#8ab4f8]/10 shadow-md ring-2 ring-brand-primary/20' 
              : 'border-outline-variant/40 dark:border-[#3c4043] bg-surface dark:bg-[#282a2c] hover:border-brand-primary/50'
          }`}
        >
          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg sm:text-xl font-bold text-on-surface">{t('psychologist')}</h3>
              {isSensitive && (
                <span className="bg-brand-primary text-white dark:text-[#131314] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                  Rekomendasi
                </span>
              )}
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-4">{t('psychologist_desc')}</p>
          </div>
          <div className="pt-3 border-t border-outline-variant/20 dark:border-[#3c4043] flex items-center justify-between text-xs font-semibold text-brand-primary">
            <span>SIPP Terverifikasi</span>
            <span className="px-2.5 py-1 rounded-full bg-brand-primary/10">Klinis &amp; Advance</span>
          </div>
        </div>

        {/* Konselor Sebaya Card */}
        <div 
          onClick={() => selectType('peer_counselor')}
          className={`border-2 rounded-2xl p-5 sm:p-6 transition-all flex flex-col justify-between ${
            isSensitive 
              ? 'opacity-50 cursor-not-allowed border-outline-variant/20 bg-surface-container dark:bg-[#282a2c]/40' 
              : formData.counseling_type === 'peer_counselor'
                ? 'cursor-pointer border-brand-primary bg-primary/10 dark:bg-[#8ab4f8]/10 shadow-md ring-2 ring-brand-primary/20'
                : 'cursor-pointer border-outline-variant/40 dark:border-[#3c4043] bg-surface dark:bg-[#282a2c] hover:border-brand-primary/50'
          }`}
        >
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-on-surface mb-3">{t('peer_counselor')}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-4">{t('peer_counselor_desc')}</p>
          </div>
          <p className="text-xs text-outline italic border-t border-outline-variant/20 dark:border-[#3c4043] pt-3 mt-auto">
            {t('peer_disclaimer')}
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-3 pt-6 border-t border-outline-variant/20 dark:border-[#3c4043] mt-8">
        <button 
          onClick={onBack} 
          className="w-full sm:w-auto px-6 py-3 rounded-full font-medium text-sm text-on-surface-variant hover:bg-surface-container dark:hover:bg-[#282a2c] transition-colors"
        >
          {tCommon('cta_back')}
        </button>
        <button 
          onClick={onNext} 
          disabled={!formData.counseling_type}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F58A31] hover:bg-[#e07722] text-[#14508A] font-bold text-sm px-8 py-3.5 rounded-full shadow-orange-glow transition-all duration-200 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <span>{tCommon('cta_next')}</span>
        </button>
      </div>
    </div>
  );
}
