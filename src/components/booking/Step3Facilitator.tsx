'use client';

import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { CounselingFormData, Facilitator } from '@/lib/types';
import { getFacilitators } from '@/lib/data/repository';
import { ProfileDrawer } from './ProfileDrawer';
import { formatCurrency } from '@/lib/utils';

interface Step3Props {
  formData: Partial<CounselingFormData>;
  onChange: (data: Partial<CounselingFormData>) => void;
  locale: string;
  onNext: () => void;
  onBack: () => void;
}

export function Step3Facilitator({ formData, onChange, locale, onNext, onBack }: Step3Props) {
  const t = useTranslations('counseling');
  const tCommon = useTranslations('common');
  const [facilitators, setFacilitators] = useState<Facilitator[]>([]);
  const [selectedFacilitator, setSelectedFacilitator] = useState<Facilitator | null>(null);

  useEffect(() => {
    getFacilitators(formData.counseling_type || undefined).then(setFacilitators);
  }, [formData.counseling_type]);

  const handleSelect = (f: Facilitator) => {
    onChange({ ...formData, facilitator_id: f.id, auto_assign: false });
  };

  const handleAutoAssign = () => {
    onChange({ ...formData, facilitator_id: null, auto_assign: true });
    onNext();
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#14508A] dark:text-[#8ab4f8]">
          {t('select_facilitator')}
        </h2>
        <p className="text-sm text-on-surface-variant mt-1">
          Pilih psikolog atau konselor yang sesuai dengan preferensi Anda, atau biarkan sistem mencocokkan jadwal terbaik.
        </p>
      </div>
      
      <button 
        onClick={handleAutoAssign}
        className={`w-full p-4 border-2 rounded-2xl text-left transition-all ${
          formData.auto_assign 
            ? 'border-brand-primary bg-primary/10 dark:bg-[#8ab4f8]/10 ring-2 ring-brand-primary/20' 
            : 'border-outline-variant/40 dark:border-[#3c4043] bg-surface dark:bg-[#282a2c] hover:border-brand-primary/50'
        }`}
      >
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full bg-brand-primary text-white dark:text-[#131314] flex items-center justify-center flex-shrink-0 font-bold">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-base text-on-surface">{t('pick_for_me')}</h3>
            <p className="text-xs sm:text-sm text-outline">Kami akan mencarikan fasilitator yang paling sesuai dengan jadwal dan kebutuhan Anda.</p>
          </div>
        </div>
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {facilitators.map(f => (
          <div 
            key={f.id}
            className={`border-2 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all ${
              formData.facilitator_id === f.id && !formData.auto_assign
                ? 'border-brand-primary bg-primary/10 dark:bg-[#8ab4f8]/10 shadow-sm ring-2 ring-brand-primary/20'
                : 'border-outline-variant/40 dark:border-[#3c4043] bg-surface dark:bg-[#282a2c] hover:border-brand-primary/50'
            }`}
          >
            <div>
              <div className="flex gap-3.5 mb-3">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-surface-container overflow-hidden flex-shrink-0 border border-outline-variant/30">
                  {f.photo_url ? (
                    <img src={f.photo_url} alt={f.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-surface-container-high" />
                  )}
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-sm sm:text-base text-on-surface truncate">{f.name}</h4>
                  <p className="text-xs text-brand-primary font-semibold">{t(f.type)}</p>
                  <p className="text-xs sm:text-sm font-bold text-on-surface mt-1">
                    {formatCurrency(f.price_per_session)}
                    <span className="text-[11px] text-outline font-normal"> {tCommon('per_session')}</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-3 border-t border-outline-variant/20 dark:border-[#3c4043] flex gap-2">
              <button 
                onClick={() => setSelectedFacilitator(f)}
                className="flex-1 text-xs sm:text-sm border border-outline-variant/40 dark:border-[#3c4043] text-on-surface py-2.5 px-3 rounded-xl hover:bg-surface-container dark:hover:bg-[#333538] font-medium transition-colors"
              >
                {t('facilitator_profile')}
              </button>
              <button 
                onClick={() => handleSelect(f)}
                className={`flex-1 text-xs sm:text-sm py-2.5 px-3 rounded-xl font-bold transition-colors ${
                  formData.facilitator_id === f.id && !formData.auto_assign
                    ? 'bg-brand-primary text-white dark:text-[#131314]'
                    : 'bg-surface-container dark:bg-[#333538] text-on-surface hover:bg-surface-container-high'
                }`}
              >
                Pilih
              </button>
            </div>
          </div>
        ))}
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
          disabled={!formData.facilitator_id && !formData.auto_assign}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F58A31] hover:bg-[#e07722] text-[#14508A] font-bold text-sm px-8 py-3.5 rounded-full shadow-orange-glow transition-all duration-200 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <span>{tCommon('cta_next')}</span>
        </button>
      </div>

      {selectedFacilitator && (
        <ProfileDrawer 
          facilitator={selectedFacilitator} 
          open={!!selectedFacilitator} 
          onClose={() => setSelectedFacilitator(null)}
          onSelect={() => {
            handleSelect(selectedFacilitator);
            setSelectedFacilitator(null);
          }}
          locale={locale}
        />
      )}
    </div>
  );
}
