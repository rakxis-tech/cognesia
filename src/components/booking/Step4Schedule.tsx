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
    <div className="space-y-8">
      <h2 className="text-2xl font-bold font-montserrat text-brand-primary">{t('schedule_title')}</h2>
      
      {/* Session Format */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900">{t('session_format')}</h3>
        <div className="flex gap-4">
          <label className={`flex-1 border p-4 rounded-xl cursor-pointer flex items-start gap-3 transition-colors ${formData.session_format === 'online_zoom' ? 'border-brand-primary bg-blue-50/50' : 'hover:border-blue-300'}`}>
            <input 
              type="radio" 
              name="format" 
              checked={formData.session_format === 'online_zoom'}
              onChange={() => onChange({ ...formData, session_format: 'online_zoom' })}
              className="mt-1"
            />
            <div>
              <div className="font-medium text-gray-900">{t('online')}</div>
              <div className="text-xs text-gray-500">{t('online_note')}</div>
            </div>
          </label>
          
          <label className={`flex-1 border p-4 rounded-xl cursor-pointer flex items-start gap-3 transition-colors ${formData.session_format === 'offline' ? 'border-brand-primary bg-blue-50/50' : 'hover:border-blue-300'}`}>
            <input 
              type="radio" 
              name="format" 
              checked={formData.session_format === 'offline'}
              onChange={() => onChange({ ...formData, session_format: 'offline' })}
              className="mt-1"
            />
            <div>
              <div className="font-medium text-gray-900">{t('offline')}</div>
              <div className="text-xs text-gray-500">{t('offline_note')}</div>
            </div>
          </label>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Calendar */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Pilih Tanggal</h3>
          <div className="border rounded-xl p-4 bg-white shadow-sm">
            <div className="text-center font-semibold mb-4 text-gray-800">
              {new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'id-ID', { month: 'long', year: 'numeric' }).format(today)}
            </div>
            <div className="grid grid-cols-7 gap-1 text-center mb-2">
              {['M', 'S', 'S', 'R', 'K', 'J', 'S'].map((d, i) => (
                <div key={i} className="text-xs font-semibold text-gray-400">{d}</div>
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
                      p-2 w-full aspect-square rounded-full flex items-center justify-center text-sm transition-colors
                      ${isSelected ? 'bg-brand-primary text-white font-bold' : ''}
                      ${!isSelected && hasSlots ? 'bg-green-50 text-green-700 hover:bg-green-100 font-medium' : ''}
                      ${!isSelected && !hasSlots ? 'text-gray-300 cursor-not-allowed' : ''}
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
          <h3 className="font-semibold text-gray-900 mb-4">Pilih Waktu</h3>
          {!selectedDate ? (
            <div className="border border-dashed border-gray-300 rounded-xl p-8 flex items-center justify-center text-gray-400 text-center h-[280px]">
              Silakan pilih tanggal terlebih dahulu
            </div>
          ) : slotsForDate.length === 0 ? (
            <div className="border rounded-xl p-8 flex items-center justify-center text-gray-500 bg-gray-50 text-center h-[280px]">
              Tidak ada slot tersedia di tanggal ini
            </div>
          ) : (
            <div className="border rounded-xl p-4 bg-white shadow-sm h-[280px] overflow-y-auto">
              <div className="text-sm text-gray-500 mb-3 pb-2 border-b">{t('duration')}</div>
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
                        py-2 px-3 rounded-lg border text-sm font-medium transition-all text-center
                        ${isSelected ? 'bg-brand-primary border-brand-primary text-white shadow-md' : ''}
                        ${!isSelected && isAvailable ? 'bg-white border-green-200 text-gray-700 hover:border-green-400 hover:bg-green-50' : ''}
                        ${!isAvailable ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed' : ''}
                      `}
                    >
                      {slot.start_time}
                    </button>
                  );
                })}
              </div>
              {formData.time_slot_id && (
                <div className="mt-4 p-3 bg-blue-50 text-blue-800 text-xs rounded-lg flex gap-2 items-start">
                  <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>{t('slot_hold_notice').replace('{minutes}', '15')}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between pt-6 border-t mt-8">
        <button onClick={onBack} className="text-gray-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100">
          {tCommon('cta_back')}
        </button>
        <button 
          onClick={onNext} 
          disabled={!isFormValid}
          className="bg-brand-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {tCommon('cta_next')}
        </button>
      </div>
    </div>
  );
}
