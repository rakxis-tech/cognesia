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
    <div className="bg-surface dark:bg-[#1e1f20] rounded-2xl shadow-ambient border border-outline-variant/30 dark:border-[#3c4043] p-4 sm:p-6 md:p-8">
      {/* Mobile Stepper Header */}
      <div className="md:hidden mb-6">
        <div className="flex items-center justify-between text-xs font-semibold mb-2">
          <span className="text-brand-primary uppercase tracking-wider">
            Langkah {currentStep} dari 5
          </span>
          <span className="text-on-surface truncate max-w-[180px]">
            {steps[currentStep - 1]}
          </span>
        </div>
        <div className="w-full h-2 bg-surface-container dark:bg-[#282a2c] rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-primary transition-all duration-300 rounded-full"
            style={{ width: `${(currentStep / 5) * 100}%` }}
          />
        </div>
      </div>

      {/* Desktop Stepper Progress Bar */}
      <div className="hidden md:block mb-8">
        <div className="flex items-center justify-between relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-surface-container dark:bg-[#282a2c] -z-10" />
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
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold mb-2 transition-all
                    ${isCurrent ? 'bg-brand-primary text-white dark:text-[#131314] ring-4 ring-brand-primary/20 shadow-sm' : 
                      isCompleted ? 'bg-brand-primary text-white dark:text-[#131314]' : 'bg-surface-container dark:bg-[#282a2c] text-outline'}`}
                >
                  {isCompleted ? '✓' : stepNum}
                </div>
                <span className={`text-xs ${isCurrent || isCompleted ? 'text-on-surface font-semibold' : 'text-outline'}`}>
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Step Content */}
      <div className="mb-6 min-h-[380px]">
        {currentStep === 1 && <Step1DataDiri formData={formData} onChange={setFormData} locale={locale} onNext={handleNext} />}
        {currentStep === 2 && <Step2Recommendation formData={formData} onChange={setFormData} triageResult={triageResult} locale={locale} onNext={handleNext} onBack={handleBack} />}
        {currentStep === 3 && <Step3Facilitator formData={formData} onChange={setFormData} locale={locale} onNext={handleNext} onBack={handleBack} />}
        {currentStep === 4 && <Step4Schedule formData={formData} onChange={setFormData} locale={locale} onNext={handleNext} onBack={handleBack} />}
        {currentStep === 5 && <Step5Invoice formData={formData} locale={locale} onBack={handleBack} />}
      </div>
    </div>
  );
}
