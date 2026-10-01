'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { CounselingFormData, TimeSlot } from '@/lib/types';
import { getAvailableSlots } from '@/lib/data/repository';

interface Step4Props {
  formData: Partial<CounselingFormData>;
  onChange: (data: Partial<CounselingFormData>) => void;
  locale: string;
  onNext: () => void;
  onBack: () => void;
}

export function Step4Schedule({ formData, onChange, locale, onNext, onBack }: Step4Props) {
  const t = useTranslations('counseling');
  const tCommon = useTranslations('common');
  
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(formData.date || null);

  useEffect(() => {
    // If auto_assign, we fetch all. Otherwise filter by facilitator
    getAvailableSlots(formData.auto_assign ? undefined : (formData.facilitator_id || undefined)).then(setSlots);
  }, [formData.facilitator_id, formData.auto_assign]);

  // Generate simple calendar for current month
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay(); // 0 is Sunday
  
  const calendarDays = useMemo(() => {
    const days = [];
    // Padding before 1st
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    // Days of month
    for (let i = 1; i <= daysInMonth; i++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      days.push({ day: i, dateStr });
    }
    return days;
  }, [year, month, daysInMonth, firstDay]);

  // Map slots to available dates
  const availableDates = useMemo(() => {
    const dates = new Set<string>();
    slots.forEach(s => {
      if (s.is_available && !s.is_blocked) {
        dates.add(s.date);
      }
    });
    return dates;
  }, [slots]);

  const slotsForDate = useMemo(() => {
    if (!selectedDate) return [];
    return slots.filter(s => s.date === selectedDate).sort((a, b) => a.start_time.localeCompare(b.start_time));
  }, [slots, selectedDate]);

  const handleDateSelect = (dateStr: string) => {
    if (availableDates.has(dateStr)) {
      setSelectedDate(dateStr);
      onChange({ ...formData, date: dateStr, time_slot_id: null }); // Reset slot on date change
    }
  };

  const handleSlotSelect = (slotId: string) => {
    onChange({ ...formData, time_slot_id: slotId });
  };

  const isFormValid = formData.session_format && formData.date && formData.time_slot_id;

  return (
    <div className="space-y-6 sm:space-y-8">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#14508A] dark:text-[#8ab4f8]">
          {t('schedule_title')}
        </h2>
        <p className="text-sm text-on-surface-variant mt-1">
          Pilih format sesi dan tentukan tanggal serta waktu yang paling nyaman bagi Anda.
        </p>
      </div>
      
      {/* Session Format */}
      <div className="space-y-3">
        <h3 className="font-semibold text-sm sm:text-base text-on-surface">{t('session_format')}</h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <label className={`flex-1 border-2 p-4 rounded-2xl cursor-pointer flex items-start gap-3 transition-all ${
            formData.session_format === 'online_zoom' 
              ? 'border-brand-primary bg-primary/10 dark:bg-[#8ab4f8]/10 ring-2 ring-brand-primary/20' 
              : 'border-outline-variant/40 dark:border-[#3c4043] bg-surface dark:bg-[#282a2c] hover:border-brand-primary/40'
          }`}>
            <input 
              type="radio" 
              name="format" 
              checked={formData.session_format === 'online_zoom'}
              onChange={() => onChange({ ...formData, session_format: 'online_zoom' })}
              className="mt-1 text-[#14508A] focus:ring-[#14508A]"
            />
            <div>
              <div className="font-bold text-sm sm:text-base text-on-surface">{t('online')}</div>
              <div className="text-xs text-outline mt-0.5">{t('online_note')}</div>
            </div>
          </label>
          
          <label className={`flex-1 border-2 p-4 rounded-2xl cursor-pointer flex items-start gap-3 transition-all ${
            formData.session_format === 'offline' 
              ? 'border-brand-primary bg-primary/10 dark:bg-[#8ab4f8]/10 ring-2 ring-brand-primary/20' 
              : 'border-outline-variant/40 dark:border-[#3c4043] bg-surface dark:bg-[#282a2c] hover:border-brand-primary/40'
          }`}>
            <input 
              type="radio" 
              name="format" 
              checked={formData.session_format === 'offline'}
              onChange={() => onChange({ ...formData, session_format: 'offline' })}
              className="mt-1 text-[#14508A] focus:ring-[#14508A]"
            />
            <div>
              <div className="font-bold text-sm sm:text-base text-on-surface">{t('offline')}</div>
              <div className="text-xs text-outline mt-0.5">{t('offline_note')}</div>
            </div>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Calendar */}
        <div>
          <h3 className="font-semibold text-sm sm:text-base text-on-surface mb-3">Pilih Tanggal</h3>
          <div className="border border-outline-variant/30 dark:border-[#3c4043] rounded-2xl p-4 bg-surface dark:bg-[#282a2c] shadow-sm">
            <div className="text-center font-bold mb-4 text-on-surface text-sm sm:text-base">
              {new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'id-ID', { month: 'long', year: 'numeric' }).format(today)}
            </div>
            <div className="grid grid-cols-7 gap-1 text-center mb-2">
              {['M', 'S', 'S', 'R', 'K', 'J', 'S'].map((d, i) => (
                <div key={i} className="text-xs font-bold text-outline">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((dayInfo, i) => {
                if (!dayInfo) return <div key={i} className="p-2"></div>;
                
                const { day, dateStr } = dayInfo;
                const hasSlots = availableDates.has(dateStr);
                const isSelected = selectedDate === dateStr;
                
                return (
                  <button
                    key={i}
                    onClick={() => handleDateSelect(dateStr)}
                    disabled={!hasSlots}
                    className={`
                      p-2 w-full aspect-square rounded-full flex items-center justify-center text-xs sm:text-sm transition-all
                      ${isSelected ? 'bg-brand-primary text-white dark:text-[#131314] font-bold shadow-sm' : ''}
                      ${!isSelected && hasSlots ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/25 font-bold' : ''}
                      ${!isSelected && !hasSlots ? 'text-outline/30 cursor-not-allowed' : ''}
                    `}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Time Slots */}
        <div>
          <h3 className="font-semibold text-sm sm:text-base text-on-surface mb-3">Pilih Waktu</h3>
          {!selectedDate ? (
            <div className="border border-dashed border-outline-variant/40 dark:border-[#3c4043] rounded-2xl p-8 flex items-center justify-center text-outline text-center text-xs sm:text-sm h-[280px]">
              Silakan pilih tanggal terlebih dahulu di kalender
            </div>
          ) : slotsForDate.length === 0 ? (
            <div className="border border-outline-variant/30 dark:border-[#3c4043] rounded-2xl p-8 flex items-center justify-center text-outline bg-surface-container-low dark:bg-[#1e1f20] text-center text-xs sm:text-sm h-[280px]">
              Tidak ada slot tersedia di tanggal ini
            </div>
          ) : (
            <div className="border border-outline-variant/30 dark:border-[#3c4043] rounded-2xl p-4 bg-surface dark:bg-[#282a2c] shadow-sm h-[280px] overflow-y-auto">
              <div className="text-xs text-outline mb-3 pb-2 border-b border-outline-variant/20 dark:border-[#3c4043] flex justify-between items-center">
                <span>{t('duration')}</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Tersedia</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {slotsForDate.map(slot => {
                  const isAvailable = slot.is_available && !slot.is_blocked;
                  const isSelected = formData.time_slot_id === slot.id;
                  
                  return (
                    <button
                      key={slot.id}
                      disabled={!isAvailable}
                      onClick={() => handleSlotSelect(slot.id)}
                      className={`
                        py-2.5 px-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all text-center
                        ${isSelected ? 'bg-brand-primary border-brand-primary text-white dark:text-[#131314] shadow-md' : ''}
                        ${!isSelected && isAvailable ? 'bg-surface-container dark:bg-[#1e1f20] border-emerald-500/40 text-on-surface hover:border-emerald-500' : ''}
                        ${!isAvailable ? 'bg-surface-container/50 border-outline-variant/20 text-outline/40 cursor-not-allowed' : ''}
                      `}
                    >
                      {slot.start_time} WIB
                    </button>
                  );
                })}
              </div>
              {formData.time_slot_id && (
                <div className="mt-4 p-3 bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs rounded-xl flex gap-2 items-start">
                  <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>{t('slot_hold_notice').replace('{minutes}', '15')}</span>
                </div>
              )}
            </div>
          )}
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
          disabled={!isFormValid}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F58A31] hover:bg-[#e07722] text-[#14508A] font-bold text-sm px-8 py-3.5 rounded-full shadow-orange-glow transition-all duration-200 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <span>{tCommon('cta_next')}</span>
        </button>
      </div>
    </div>
  );
}
