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
      <h2 className="text-2xl font-bold font-montserrat text-brand-primary">{t('recommendation_title')}</h2>
      
      <p className="text-gray-700">{t('recommendation_desc')}</p>
      
      {isSensitive && (
        <div className="bg-orange-50 border-l-4 border-accent-orange p-4 rounded-r">
          <p className="text-orange-800 text-sm">{t('sensitive_notice')}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Psikolog Card */}
        <div 
          onClick={() => selectType('psychologist')}
          className={`cursor-pointer border-2 rounded-xl p-6 transition-all ${
            formData.counseling_type === 'psychologist' 
              ? 'border-brand-primary bg-blue-50/50 shadow-md' 
              : 'border-gray-200 hover:border-blue-300'
          }`}
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-gray-900">{t('psychologist')}</h3>
            {isSensitive && (
              <span className="bg-brand-primary text-white text-xs px-2 py-1 rounded-full">Rekomendasi</span>
            )}
          </div>
          <p className="text-sm text-gray-600 mb-4">{t('psychologist_desc')}</p>
        </div>

        {/* Konselor Sebaya Card */}
        <div 
          onClick={() => selectType('peer_counselor')}
          className={`border-2 rounded-xl p-6 transition-all ${
            isSensitive 
              ? 'opacity-50 cursor-not-allowed border-gray-200 bg-gray-50' 
              : formData.counseling_type === 'peer_counselor'
                ? 'cursor-pointer border-brand-primary bg-blue-50/50 shadow-md'
                : 'cursor-pointer border-gray-200 hover:border-blue-300'
          }`}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">{t('peer_counselor')}</h3>
          <p className="text-sm text-gray-600 mb-4">{t('peer_counselor_desc')}</p>
          <p className="text-xs text-gray-500 italic mt-auto border-t pt-4">{t('peer_disclaimer')}</p>
        </div>
      </div>

      <div className="flex justify-between pt-6 border-t mt-8">
        <button onClick={onBack} className="text-gray-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100">
          {tCommon('cta_back')}
        </button>
        <button 
          onClick={onNext} 
          disabled={!formData.counseling_type}
          className="bg-brand-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {tCommon('cta_next')}
        </button>
      </div>
    </div>
  );
}
