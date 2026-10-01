import { ClinicalConfig } from '../../types';

export const clinical: ClinicalConfig = {
  id: 'clin_config_1',
  complaint_categories: [
    {
      id: 'cat_1',
      name: { id: 'Masalah Akademik / Karir', en: 'Academic / Career Issues' },
      triage_result: 'normal',
      is_active: true
    },
    {
      id: 'cat_2',
      name: { id: 'Hubungan Sosial / Asmara', en: 'Social / Romantic Relationships' },
      triage_result: 'normal',
      is_active: true
    },
    {
      id: 'cat_3',
      name: { id: 'Kecemasan Berlebih', en: 'Severe Anxiety' },
      triage_result: 'sensitive',
      is_active: true
    },
    {
      id: 'cat_4',
      name: { id: 'Depresi Berkepanjangan', en: 'Prolonged Depression' },
      triage_result: 'sensitive',
      is_active: true
    },
    {
      id: 'cat_5',
      name: { id: 'Keinginan Menyakiti Diri Sendiri / Bunuh Diri', en: 'Self-harm / Suicidal Thoughts' },
      triage_result: 'high_risk',
      is_active: true
    },
    {
      id: 'cat_6',
      name: { id: 'Trauma / Pelecehan', en: 'Trauma / Abuse' },
      triage_result: 'sensitive',
      is_active: true
    }
  ],
  peer_counselor_disclaimer: {
    id: 'Konselor sebaya bukan pengganti psikolog klinis. Mereka hanya memberikan dukungan emosional awal.',
    en: 'Peer counselors are not a substitute for clinical psychologists. They only provide initial emotional support.'
  },
  high_risk_message: {
    id: 'Berdasarkan informasi Anda, kami menyarankan agar Anda segera mencari bantuan medis profesional atau menghubungi layanan darurat.',
    en: 'Based on your information, we recommend that you immediately seek professional medical help or contact emergency services.'
  },
  crisis_numbers: [
    { name: 'Layanan Darurat / Suicide Hotline', number: '119 ext 8' },
    { name: 'Kemenkes (Kesehatan Jiwa)', number: '021-500-454' },
    { name: 'Komnas Perempuan (Kasus Kekerasan)', number: '021-3903963' }
  ],
  validation_status: 'approved',
  validated_by: 'admin_1',
  validated_at: '2023-01-01T00:00:00Z'
};
