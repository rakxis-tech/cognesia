import { SiteSettings } from '../../types';

export const settings: SiteSettings = {
  whatsapp_numbers: {
    assessment: '+628888295582',
    counseling: '+628888295582',
    team_training: '+628888295582',
    recruitment: '+628888295582',
    seminar: '+628888295582'
  },
  whatsapp_default: '+628888295582',
  bank_name: 'BCA',
  bank_account_number: '1234567890',
  bank_account_name: 'PT Cognesia Indonesia',
  invoice_publisher_name: 'Cognesia',
  payment_deadline_hours: 24,
  reschedule_deadline_hours: 24,
  max_reschedule_count: 1,
  refund_policy: {
    id: 'Dana tidak dapat dikembalikan untuk pembatalan oleh klien.',
    en: 'Funds are non-refundable for cancellations by the client.'
  },
  reschedule_policy: {
    id: 'Reschedule dapat dilakukan maksimal 24 jam sebelum jadwal.',
    en: 'Rescheduling can be done up to 24 hours before the schedule.'
  },
  payment_policy: {
    id: 'Pembayaran harus dilunasi 24 jam setelah invoice diterbitkan.',
    en: 'Payment must be settled 24 hours after the invoice is issued.'
  },
  trust_section_visible: true,
  company_name: 'Cognesia',
  practice_license: 'SIP-12345',
  offline_location: {
    id: 'Jl. Psikologi No.1, Jakarta, Indonesia',
    en: '1 Psychology St, Jakarta, Indonesia'
  },
  slot_hold_minutes: 15
};
