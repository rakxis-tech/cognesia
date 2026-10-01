'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { CounselingFormData } from '@/lib/types';
import { getComplaintCategories } from '@/lib/data/repository';
import { AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';

interface Step1Props {
  formData: Partial<CounselingFormData>;
  onChange: (data: Partial<CounselingFormData>) => void;
  locale: string;
  onNext: () => void;
}

export function Step1DataDiri({ formData, onChange, locale, onNext }: Step1Props) {
  const t = useTranslations('counseling');
  const tCommon = useTranslations('common');
  const valT = useTranslations('validation');
  const [categories, setCategories] = useState<any[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    getComplaintCategories().then(setCategories);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      onChange({ ...formData, [name]: checked });
    } else if (name === 'age') {
      const num = parseInt(value, 10);
      onChange({ ...formData, [name]: isNaN(num) ? null : num });
    } else {
      onChange({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name || !formData.name.trim()) {
      newErrors.name = 'Nama lengkap wajib diisi';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !formData.email.trim()) {
      newErrors.email = 'Alamat email wajib diisi';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Format email tidak valid (contoh: nama@domain.com)';
    }

    if (!formData.phone || !formData.phone.trim()) {
      newErrors.phone = 'Nomor WhatsApp wajib diisi';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Nomor telepon minimal 8 digit';
    }

    if (!formData.age || formData.age < 5 || formData.age > 100) {
      newErrors.age = 'Usia wajib diisi (antara 5 - 100 tahun)';
    }

    if (!formData.complaint_category) {
      newErrors.complaint_category = 'Pilih kategori keluhan utama Anda';
    }

    if (!formData.complaint_description || formData.complaint_description.trim().length < 5) {
      newErrors.complaint_description = 'Deskripsi singkat keluhan minimal 5 karakter';
    }

    if (!formData.consent_privacy) {
      newErrors.consent_privacy = 'Anda harus menyetujui kebijakan privasi';
    }

    if (!formData.consent_informed) {
      newErrors.consent_informed = 'Anda harus menyetujui informed consent layanan';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleNextClick} className="space-y-6">
      <div>
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#14508A] dark:text-[#8ab4f8]">
          {t('step_1')} — Data Diri &amp; Keluhan Awal
        </h2>
        <p className="text-xs sm:text-sm text-outline mt-1 leading-relaxed">
          Informasi Anda dijamin kerahasiaannya sesuai Kode Etik Psikologi Indonesia dan UU PDP.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {/* Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-1.5">
            {t('form_name')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="e.g. Budi Pratama"
            value={formData.name || ''}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm bg-canvas dark:bg-[#282a2c] text-on-surface transition-all focus:outline-none focus:ring-2 ${
              errors.name
                ? 'border-red-500 focus:ring-red-400'
                : 'border-border-subtle dark:border-[#3c4043] focus:ring-brand-primary'
            }`}
          />
          {errors.name && (
            <p className="flex items-center gap-1 text-red-500 text-xs mt-1.5 font-medium">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-1.5">
            {t('form_email')} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="nama@email.com"
            value={formData.email || ''}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm bg-canvas dark:bg-[#282a2c] text-on-surface transition-all focus:outline-none focus:ring-2 ${
              errors.email
                ? 'border-red-500 focus:ring-red-400'
                : 'border-border-subtle dark:border-[#3c4043] focus:ring-brand-primary'
            }`}
          />
          {errors.email && (
            <p className="flex items-center gap-1 text-red-500 text-xs mt-1.5 font-medium">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* WhatsApp Phone */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-1.5">
            {t('form_phone')} <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="081234567890"
            value={formData.phone || ''}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm bg-canvas dark:bg-[#282a2c] text-on-surface transition-all focus:outline-none focus:ring-2 ${
              errors.phone
                ? 'border-red-500 focus:ring-red-400'
                : 'border-border-subtle dark:border-[#3c4043] focus:ring-brand-primary'
            }`}
          />
          {errors.phone && (
            <p className="flex items-center gap-1 text-red-500 text-xs mt-1.5 font-medium">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* Age */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-1.5">
            {t('form_age')} (Tahun) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="age"
            placeholder="e.g. 25"
            min={5}
            max={100}
            value={formData.age ?? ''}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm bg-canvas dark:bg-[#282a2c] text-on-surface transition-all focus:outline-none focus:ring-2 ${
              errors.age
                ? 'border-red-500 focus:ring-red-400'
                : 'border-border-subtle dark:border-[#3c4043] focus:ring-brand-primary'
            }`}
          />
          {errors.age && (
            <p className="flex items-center gap-1 text-red-500 text-xs mt-1.5 font-medium">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{errors.age}</span>
            </p>
          )}
        </div>
      </div>

      {/* Complaint Category Dropdown */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-1.5">
          {t('form_complaint_category')} <span className="text-red-500">*</span>
        </label>
        <select
          name="complaint_category"
          value={formData.complaint_category || ''}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm bg-canvas dark:bg-[#282a2c] text-on-surface transition-all focus:outline-none focus:ring-2 ${
            errors.complaint_category
              ? 'border-red-500 focus:ring-red-400'
              : 'border-border-subtle dark:border-[#3c4043] focus:ring-brand-primary'
          }`}
        >
          <option value="">-- Pilih Kategori Keluhan Utama --</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name[locale as 'id' | 'en'] || c.name.id}
            </option>
          ))}
        </select>
        {errors.complaint_category && (
          <p className="flex items-center gap-1 text-red-500 text-xs mt-1.5 font-medium">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{errors.complaint_category}</span>
          </p>
        )}
      </div>

      {/* Complaint Description */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-1.5">
          {t('form_complaint_desc')} <span className="text-red-500">*</span>
        </label>
        <textarea
          name="complaint_description"
          rows={4}
          placeholder={t('form_complaint_placeholder')}
          value={formData.complaint_description || ''}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm bg-canvas dark:bg-[#282a2c] text-on-surface transition-all focus:outline-none focus:ring-2 ${
            errors.complaint_description
              ? 'border-red-500 focus:ring-red-400'
              : 'border-border-subtle dark:border-[#3c4043] focus:ring-brand-primary'
          }`}
        />
        {errors.complaint_description && (
          <p className="flex items-center gap-1 text-red-500 text-xs mt-1.5 font-medium">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{errors.complaint_description}</span>
          </p>
        )}
      </div>

      {/* Informed & Privacy Consents */}
      <div className="space-y-3 p-4 rounded-2xl bg-surface-container-low dark:bg-[#282a2c]/50 border border-outline-variant/30 dark:border-[#3c4043]">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="consent_privacy"
            checked={formData.consent_privacy || false}
            onChange={handleChange}
            className="mt-1 w-4 h-4 rounded text-[#14508A] focus:ring-[#14508A] border-outline-variant"
          />
          <span className="text-xs text-on-surface-variant leading-relaxed">
            {t('consent_privacy')}
          </span>
        </label>
        {errors.consent_privacy && (
          <p className="text-red-500 text-xs pl-7 font-medium">
            {errors.consent_privacy}
          </p>
        )}

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="consent_informed"
            checked={formData.consent_informed || false}
            onChange={handleChange}
            className="mt-1 w-4 h-4 rounded text-[#14508A] focus:ring-[#14508A] border-outline-variant"
          />
          <span className="text-xs text-on-surface-variant leading-relaxed">
            {t('consent_informed')}
          </span>
        </label>
        {errors.consent_informed && (
          <p className="text-red-500 text-xs pl-7 font-medium">
            {errors.consent_informed}
          </p>
        )}
      </div>

      {/* Action Button */}
      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F58A31] hover:bg-[#e07722] text-[#14508A] font-bold text-sm px-8 py-3.5 rounded-full shadow-orange-glow transition-all duration-200 active:scale-95"
        >
          <span>{tCommon('cta_next')}</span>
          <ArrowRight className="w-4 h-4 font-bold" />
        </button>
      </div>
    </form>
  );
}
