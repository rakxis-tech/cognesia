'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { CounselingFormData } from '@/lib/types';
import { getComplaintCategories } from '@/lib/data/repository';

interface Step1Props {
  formData: Partial<CounselingFormData>;
  onChange: (data: Partial<CounselingFormData>) => void;
  locale: string;
  onNext: () => void;
}

export function Step1DataDiri({ formData, onChange, locale, onNext }: Step1Props) {
  const t = useTranslations('counseling');
  const tCommon = useTranslations('common');
  const [categories, setCategories] = useState<any[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    getComplaintCategories().then(setCategories);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      onChange({ ...formData, [name]: checked });
    } else if (name === 'age') {
      onChange({ ...formData, [name]: parseInt(value) || null });
    } else {
      onChange({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = tCommon('required');
    if (!formData.email) newErrors.email = tCommon('required');
    else if (!/^\\S+@\\S+\\.\\S+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phone) newErrors.phone = tCommon('required');
    if (!formData.age) newErrors.age = tCommon('required');
    if (!formData.complaint_category) newErrors.complaint_category = tCommon('required');
    if (!formData.complaint_description || formData.complaint_description.length < 10) newErrors.complaint_description = 'Min 10 chars';
    if (!formData.consent_privacy) newErrors.consent_privacy = tCommon('required');
    if (!formData.consent_informed) newErrors.consent_informed = tCommon('required');
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextClick = () => {
    if (validate()) {
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold font-montserrat text-brand-primary">{t('step_1')}</h2>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t('form_name')} *</label>
          <input type="text" name="name" value={formData.name || ''} onChange={handleChange} className="w-full p-2 border rounded-md" />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t('form_email')} *</label>
          <input type="email" name="email" value={formData.email || ''} onChange={handleChange} className="w-full p-2 border rounded-md" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t('form_phone')} *</label>
          <input type="tel" name="phone" value={formData.phone || ''} onChange={handleChange} className="w-full p-2 border rounded-md" />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t('form_age')} *</label>
          <input type="number" name="age" value={formData.age || ''} onChange={handleChange} className="w-full p-2 border rounded-md" />
          {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{t('form_complaint_category')} *</label>
        <select name="complaint_category" value={formData.complaint_category || ''} onChange={handleChange} className="w-full p-2 border rounded-md">
          <option value="">-- Pilih --</option>
          {categories.map(c => (
            <option key={c.id} value={c.id}>{c.name[locale as 'id'|'en'] || c.name.id}</option>
          ))}
        </select>
        {errors.complaint_category && <p className="text-red-500 text-xs mt-1">{errors.complaint_category}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{t('form_complaint_desc')} *</label>
        <textarea name="complaint_description" value={formData.complaint_description || ''} onChange={handleChange} rows={4} placeholder={t('form_complaint_placeholder')} className="w-full p-2 border rounded-md" />
        {errors.complaint_description && <p className="text-red-500 text-xs mt-1">{errors.complaint_description}</p>}
      </div>

      <div className="space-y-3">
        <label className="flex items-start gap-2">
          <input type="checkbox" name="consent_privacy" checked={formData.consent_privacy || false} onChange={handleChange} className="mt-1" />
          <span className="text-sm text-gray-600">{t('consent_privacy')}</span>
        </label>
        {errors.consent_privacy && <p className="text-red-500 text-xs -mt-2">{errors.consent_privacy}</p>}
        
        <label className="flex items-start gap-2">
          <input type="checkbox" name="consent_informed" checked={formData.consent_informed || false} onChange={handleChange} className="mt-1" />
          <span className="text-sm text-gray-600">{t('consent_informed')}</span>
        </label>
        {errors.consent_informed && <p className="text-red-500 text-xs -mt-2">{errors.consent_informed}</p>}
      </div>

      <div className="flex justify-end pt-4">
        <button onClick={handleNextClick} className="bg-brand-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-opacity-90">
          {tCommon('cta_next')}
        </button>
      </div>
    </div>
  );
}
