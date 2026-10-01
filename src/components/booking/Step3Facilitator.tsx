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
    if (formData.counseling_type) {
      getFacilitators(formData.counseling_type).then(setFacilitators);
    }
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
      <h2 className="text-2xl font-bold font-montserrat text-brand-primary">{t('select_facilitator')}</h2>
      
      <button 
        onClick={handleAutoAssign}
        className={`w-full p-4 border-2 rounded-xl text-left transition-all ${
          formData.auto_assign 
            ? 'border-brand-primary bg-blue-50/50' 
            : 'border-gray-200 hover:border-blue-300'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-gray-900">{t('pick_for_me')}</h3>
            <p className="text-sm text-gray-500">Kami akan mencarikan fasilitator yang paling sesuai dengan jadwal dan kebutuhan Anda.</p>
          </div>
        </div>
      </button>

      <div className="grid sm:grid-cols-2 gap-4">
        {facilitators.map(f => (
          <div 
            key={f.id}
            className={`border-2 rounded-xl p-4 flex flex-col transition-all ${
              formData.facilitator_id === f.id && !formData.auto_assign
                ? 'border-brand-primary bg-blue-50/50 shadow-sm'
                : 'border-gray-200 hover:border-blue-200'
            }`}
          >
            <div className="flex gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                {f.photo_url ? (
                  <img src={f.photo_url} alt={f.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gray-300"></div>
                )}
              </div>
              <div>
                <h4 className="font-bold text-gray-900">{f.name}</h4>
                <p className="text-xs text-brand-primary font-medium">{t(f.type)}</p>
                <p className="text-sm font-semibold text-gray-700 mt-1">{formatCurrency(f.price_per_session)}<span className="text-xs text-gray-500 font-normal"> {tCommon('per_session')}</span></p>
              </div>
            </div>
            
            <div className="mt-auto pt-4 flex gap-2">
              <button 
                onClick={() => setSelectedFacilitator(f)}
                className="flex-1 text-sm border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50"
              >
                {t('facilitator_profile')}
              </button>
              <button 
                onClick={() => handleSelect(f)}
                className={`flex-1 text-sm py-2 rounded-md font-medium transition-colors ${
                  formData.facilitator_id === f.id && !formData.auto_assign
                    ? 'bg-brand-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Pilih
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between pt-6 border-t mt-8">
        <button onClick={onBack} className="text-gray-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100">
          {tCommon('cta_back')}
        </button>
        <button 
          onClick={onNext} 
          disabled={!formData.facilitator_id && !formData.auto_assign}
          className="bg-brand-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {tCommon('cta_next')}
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
