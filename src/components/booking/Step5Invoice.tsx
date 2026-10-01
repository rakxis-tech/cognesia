'use client';

import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { CounselingFormData, Facilitator, SiteSettings, TimeSlot } from '@/lib/types';
import { getFacilitatorById, getSettings, getAvailableSlots } from '@/lib/data/repository';
import { formatCurrency, formatDate, buildWhatsAppBookingMessage, buildWhatsAppUrl, generateInvoiceNumber } from '@/lib/utils';

interface Step5Props {
  formData: Partial<CounselingFormData>;
  locale: string;
  onBack: () => void;
}

export function Step5Invoice({ formData, locale, onBack }: Step5Props) {
  const t = useTranslations('counseling');
  const tCommon = useTranslations('common');
  
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [facilitator, setFacilitator] = useState<Facilitator | null>(null);
  const [slot, setSlot] = useState<TimeSlot | null>(null);
  const [invoiceNo] = useState(() => generateInvoiceNumber());

  useEffect(() => {
    getSettings().then(setSettings);
    if (formData.facilitator_id) {
      getFacilitatorById(formData.facilitator_id).then(setFacilitator);
    }
    if (formData.time_slot_id) {
      // Find slot (this usually would be fetched properly)
      getAvailableSlots().then(slots => {
        const found = slots.find(s => s.id === formData.time_slot_id);
        if (found) setSlot(found);
      });
    }
  }, [formData.facilitator_id, formData.time_slot_id]);

  if (!settings) return <div className="p-8 text-center">{tCommon('loading')}</div>;

  const amount = facilitator ? facilitator.price_per_session : (formData.counseling_type === 'psychologist' ? 250000 : 100000); // Defaults for auto-assign mockup
  const facName = facilitator ? facilitator.name : (formData.auto_assign ? 'Fasilitator (Ditentukan Cognesia)' : '-');

  const waMessage = buildWhatsAppBookingMessage({
    invoiceNumber: invoiceNo,
    name: formData.name || '-',
    service: `Konseling (${formData.counseling_type === 'psychologist' ? 'Psikolog' : 'Konselor Sebaya'})`,
    facilitator: facName,
    date: formData.date ? formatDate(formData.date, locale as any) : '-',
    time: slot ? `${slot.start_time} - ${slot.end_time}` : '-',
    format: formData.session_format === 'online_zoom' ? 'Online (Zoom)' : 'Offline',
    amount: amount
  });

  const waUrl = buildWhatsAppUrl(settings.whatsapp_default, waMessage);

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (settings?.bank_account_number) {
      navigator.clipboard.writeText(settings.bank_account_number);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center mb-6">
        <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#14508A] dark:text-[#8ab4f8]">
          {t('invoice_title')}
        </h2>
        <p className="text-xs sm:text-sm text-on-surface-variant mt-1.5">
          Segera selesaikan pembayaran untuk mengkonfirmasi slot jadwal Anda.
        </p>
      </div>

      <div className="bg-surface dark:bg-[#1e1f20] border border-outline-variant/30 dark:border-[#3c4043] rounded-2xl overflow-hidden shadow-ambient">
        {/* Main Details */}
        <div className="p-5 sm:p-6 border-b border-outline-variant/20 dark:border-[#3c4043]">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-xs text-outline font-semibold uppercase tracking-wider mb-1">{t('invoice_number')}</p>
              <p className="font-mono text-base sm:text-lg font-bold text-on-surface">{invoiceNo}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-outline font-semibold uppercase tracking-wider mb-1">Status</p>
              <span className="bg-amber-500/15 text-amber-700 dark:text-amber-400 text-xs px-3 py-1 rounded-full font-bold inline-block">
                Menunggu Pembayaran
              </span>
            </div>
          </div>
          
          <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
            <div className="flex justify-between py-2 border-b border-outline-variant/15 dark:border-[#3c4043]/50">
              <span className="text-on-surface-variant">{t('invoice_service')}</span>
              <span className="font-semibold text-on-surface text-right">
                Konseling {formData.counseling_type === 'psychologist' ? 'Psikolog Klinis' : 'Konselor Sebaya'}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-outline-variant/15 dark:border-[#3c4043]/50">
              <span className="text-on-surface-variant">{t('invoice_facilitator')}</span>
              <span className="font-semibold text-on-surface text-right">{facName}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-outline-variant/15 dark:border-[#3c4043]/50">
              <span className="text-on-surface-variant">{t('invoice_schedule')}</span>
              <span className="font-bold text-brand-primary text-right">
                {formData.date ? formatDate(formData.date, locale as any) : '-'}, {slot ? slot.start_time : '-'} WIB
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-outline-variant/15 dark:border-[#3c4043]/50">
              <span className="text-on-surface-variant">{t('invoice_format')}</span>
              <span className="font-semibold text-on-surface text-right">
                {formData.session_format === 'online_zoom' ? 'Online (Zoom Meeting)' : 'Offline (Tatap Muka)'}
              </span>
            </div>
            <div className="flex justify-between items-center py-3 pt-4">
              <span className="font-bold text-sm sm:text-base text-on-surface">{t('invoice_amount')}</span>
              <span className="font-heading font-bold text-2xl sm:text-3xl text-brand-primary">{formatCurrency(amount)}</span>
            </div>
          </div>
        </div>
        
        {/* Payment & Bank Account Details */}
        <div className="p-5 sm:p-6 bg-surface-container-low dark:bg-[#282a2c]/60">
          <h3 className="font-bold text-sm sm:text-base text-on-surface mb-3">{t('invoice_bank')}</h3>
          <div className="bg-surface dark:bg-[#1e1f20] p-4 rounded-xl border border-outline-variant/30 dark:border-[#3c4043] mb-4">
            <p className="text-xs text-outline font-semibold uppercase tracking-wider mb-1">{settings.bank_name}</p>
            <div className="flex items-center justify-between gap-2">
              <p className="font-mono text-lg sm:text-xl font-bold tracking-wider text-on-surface">{settings.bank_account_number}</p>
              <button 
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg bg-brand-primary/10 hover:bg-brand-primary/20 text-brand-primary text-xs font-bold transition-colors flex items-center gap-1"
              >
                {copied ? 'Tersalin! ✓' : tCommon('cta_copy')}
              </button>
            </div>
            <p className="text-xs text-on-surface-variant mt-1.5">a.n. {settings.bank_account_name}</p>
          </div>
          
          <div className="bg-amber-500/10 border border-amber-500/20 text-on-surface text-xs p-3.5 rounded-xl flex gap-3 items-start">
            <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <div>
              <p className="font-bold mb-0.5 text-amber-700 dark:text-amber-400">{t('invoice_deadline')}: 24 Jam</p>
              <p className="text-on-surface-variant leading-relaxed">{t('invoice_deadline_notice')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-xs text-outline space-y-1.5 leading-relaxed px-1">
        <p>• {t('policy_reschedule')}</p>
        <p>• {t('policy_refund')}</p>
      </div>

      <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4 border-t border-outline-variant/20 dark:border-[#3c4043]">
        <button 
          onClick={onBack} 
          className="w-full sm:w-auto px-6 py-3.5 rounded-full text-on-surface-variant hover:bg-surface-container dark:hover:bg-[#282a2c] font-semibold text-sm transition-colors text-center"
        >
          {tCommon('cta_back')}
        </button>
        <a 
          href={waUrl}
          target="_blank" rel="noopener noreferrer"
          className="w-full sm:flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all active:scale-95 text-center"
        >
          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span>{tCommon('cta_send_proof')}</span>
        </a>
      </div>
    </div>
  );
}
