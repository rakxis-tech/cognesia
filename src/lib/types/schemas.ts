import { z } from 'zod';
import { CounselingType, TriageResult, SessionFormat, AssessmentCategory } from './index';

// Reusable fields
const phoneRegex = /^(\+62|62|0)8[1-9][0-9]{6,10}$/;
const nameSchema = z.string().min(2, { message: 'Name must be at least 2 characters / Nama minimal 2 karakter' });
const emailSchema = z.string().email({ message: 'Invalid email address / Format email tidak valid' });
const phoneSchema = z.string().regex(phoneRegex, { message: 'Invalid phone number format / Format nomor telepon tidak valid' });
const dateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: 'Invalid date format / Format tanggal tidak valid' });

export const CounselingStep1Schema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  age: z.number().min(1, { message: 'Age is required / Umur wajib diisi' }),
  complaint_category: z.string().min(1, { message: 'Category is required / Kategori wajib dipilih' }),
  complaint_description: z.string().min(10, { message: 'Description must be at least 10 characters / Deskripsi minimal 10 karakter' }),
  consent_privacy: z.literal(true, { errorMap: () => ({ message: 'You must agree to the privacy policy / Anda harus menyetujui kebijakan privasi' }) }),
  consent_informed: z.literal(true, { errorMap: () => ({ message: 'You must agree to informed consent / Anda harus menyetujui informed consent' }) }),
});

export const CounselingStep2Schema = z.object({
  counseling_type: z.enum(['psychologist', 'peer_counselor'] as const, {
    errorMap: () => ({ message: 'Please select counseling type / Silakan pilih jenis konseling' })
  }),
  triage_result: z.enum(['normal', 'sensitive', 'high_risk'] as const).nullable(),
});

export const CounselingStep3Schema = z.object({
  facilitator_id: z.string().nullable(),
  auto_assign: z.boolean(),
}).refine(data => data.facilitator_id || data.auto_assign, {
  message: 'Please select a facilitator or choose auto-assign / Silakan pilih fasilitator atau pilih penugasan otomatis',
  path: ['facilitator_id']
});

export const CounselingStep4Schema = z.object({
  date: dateSchema.nullable(),
  time_slot_id: z.string().nullable(),
  session_format: z.enum(['online_zoom', 'offline'] as const).nullable(),
}).refine(data => data.date && data.time_slot_id && data.session_format, {
  message: 'Please complete scheduling details / Silakan lengkapi detail jadwal',
  path: ['date']
});

export const AssessmentFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  booker_type: z.enum(['individual', 'institution'] as const),
  institution_name: z.string().optional(),
  participant_count: z.number().min(1, { message: 'Must have at least 1 participant / Minimal 1 peserta' }),
  preferred_date: dateSchema,
  notes: z.string().optional(),
  test_id: z.string().min(1, { message: 'Test selection is required / Pilihan tes wajib diisi' }),
  category: z.enum(['education', 'industry'] as const),
}).refine(data => data.booker_type === 'institution' ? !!data.institution_name : true, {
  message: 'Institution name is required for institution bookers / Nama instansi wajib diisi untuk pendaftar instansi',
  path: ['institution_name']
});

export const SeminarFormSchema = z.object({
  event_name: z.string().min(2, { message: 'Event name is required / Nama acara wajib diisi' }),
  institution: z.string().min(2, { message: 'Institution is required / Instansi wajib diisi' }),
  location_type: z.enum(['online', 'offline'] as const),
  location_detail: z.string().optional(),
  estimated_participants: z.number().min(1, { message: 'Must estimate participants / Perkiraan peserta wajib diisi' }),
  speaker_id: z.string().min(1, { message: 'Speaker selection is required / Pilihan pembicara wajib diisi' }),
  date: dateSchema,
  time_slot_id: z.string().min(1, { message: 'Time slot selection is required / Pilihan waktu wajib diisi' }),
}).refine(data => data.location_type === 'offline' ? !!data.location_detail : true, {
  message: 'Location details required for offline events / Detail lokasi wajib untuk acara offline',
  path: ['location_detail']
});

export const ProposalFormSchema = z.object({
  company_name: z.string().min(2, { message: 'Company name is required / Nama perusahaan wajib diisi' }),
  pic_name: nameSchema,
  pic_email: emailSchema,
  pic_phone: phoneSchema,
  needs: z.string().min(10, { message: 'Description of needs required / Penjelasan kebutuhan wajib diisi' }),
  participant_count: z.number().optional(),
  position_count: z.number().optional(),
  target_date: z.string().min(1, { message: 'Target date required / Target tanggal wajib diisi' }),
  service_type: z.enum(['team_training', 'recruitment'] as const),
});

export const ContactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  message: z.string().min(10, { message: 'Message must be at least 10 characters / Pesan minimal 10 karakter' }),
});
