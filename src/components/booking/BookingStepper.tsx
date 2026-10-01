'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Step1DataDiri } from './Step1DataDiri';
import { Step2Recommendation } from './Step2Recommendation';
import { Step3Facilitator } from './Step3Facilitator';
import { Step4Schedule } from './Step4Schedule';
import { Step5Invoice } from './Step5Invoice';
import { CounselingFormData, TriageResult, Facilitator, TimeSlot } from '@/lib/types';
import { getComplaintCategories, getFacilitatorById, getAvailableSlots, getClinicalConfig, getTriageResult, getFacilitators } from '@/lib/data/repository';

export function BookingStepper({ locale }: { locale: string }) {
  const t = useTranslations('counseling');
  
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<CounselingFormData>>({
    name: '', email: '', phone: '', age: null, complaint_category: '', complaint_description: '',
    consent_privacy: false, consent_informed: false, counseling_type: null, triage_result: null,
    facilitator_id: null, auto_assign: false, date: null, time_slot_id: null, session_format: null
  });

  const [triageResult, setTriageResult] = useState<TriageResult | null>(null);
  
  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('cognesia-booking-draft');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFormData(parsed);
      } catch (e) {
        console.error("Failed to parse saved draft", e);
      }
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('cognesia-booking-draft', JSON.stringify(formData));
  }, [formData]);

  const handleNext = async () => {
    if (currentStep === 1) {
      try {
        const result = await getTriageResult(formData.complaint_category as string);
        setTriageResult(result);
        setFormData(prev => ({ ...prev, triage_result: result }));
      } catch (e) {
        // Fallback
        setTriageResult('normal');
      }
    }
    setCurrentStep(prev => Math.min(prev + 1, 5));
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const steps = [
    t('step_1'), t('step_2'), t('step_3'), t('step_4'), t('step_5')
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 -z-10" />
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-brand-primary -z-10 transition-all duration-300"
            style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
          />
          {steps.map((label, index) => {
            const stepNum = index + 1;
            const isCompleted = stepNum < currentStep;
            const isCurrent = stepNum === currentStep;
            return (
              <div key={stepNum} className="flex flex-col items-center">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mb-2
                    ${isCurrent ? 'bg-brand-primary text-white ring-4 ring-blue-50' : 
                      isCompleted ? 'bg-brand-primary text-white' : 'bg-gray-200 text-gray-500'}`}
                >
                  {isCompleted ? '✓' : stepNum}
                </div>
                <span className={`text-xs hidden md:block ${isCurrent || isCompleted ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Step Content */}
      <div className="mb-8 min-h-[400px]">
        {currentStep === 1 && <Step1DataDiri formData={formData} onChange={setFormData} locale={locale} onNext={handleNext} />}
        {currentStep === 2 && <Step2Recommendation formData={formData} onChange={setFormData} triageResult={triageResult} locale={locale} onNext={handleNext} onBack={handleBack} />}
        {currentStep === 3 && <Step3Facilitator formData={formData} onChange={setFormData} locale={locale} onNext={handleNext} onBack={handleBack} />}
        {currentStep === 4 && <Step4Schedule formData={formData} onChange={setFormData} locale={locale} onNext={handleNext} onBack={handleBack} />}
        {currentStep === 5 && <Step5Invoice formData={formData} locale={locale} onBack={handleBack} />}
      </div>
    </div>
  );
}
