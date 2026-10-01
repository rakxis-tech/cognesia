import { AssessmentTest } from '../../types';

export const tests: AssessmentTest[] = [
  {
    id: 't1',
    category: 'education',
    name: { id: 'Tes Kesiapan Sekolah (TK/SD)', en: 'School Readiness Test (Kindergarten/Primary)' },
    description: { id: 'Mengevaluasi kesiapan kognitif dan emosional anak.', en: 'Evaluates cognitive and emotional readiness of children.' },
    target_audience: { id: 'Anak usia 5-7 tahun', en: 'Children aged 5-7 years' },
    duration_minutes: 90,
    format: { id: 'Offline', en: 'Offline' },
    price_individual: 250000,
    price_institution: 200000,
    is_active: true,
    sort_order: 1
  },
  {
    id: 't2',
    category: 'education',
    name: { id: 'Tes Minat Bakat (SMP/SMA)', en: 'Aptitude & Interest Test (Middle/High School)' },
    description: { id: 'Membantu siswa menemukan potensi dan arah penjurusan.', en: 'Helps students discover their potential and study majors.' },
    target_audience: { id: 'Siswa SMP dan SMA', en: 'Middle and High School Students' },
    duration_minutes: 120,
    format: { id: 'Online / Offline', en: 'Online / Offline' },
    price_individual: 300000,
    price_institution: 250000,
    is_active: true,
    sort_order: 2
  },
  {
    id: 't3',
    category: 'education',
    name: { id: 'Tes IQ Pendidikan', en: 'Educational IQ Test' },
    description: { id: 'Pengukuran kecerdasan kognitif komprehensif.', en: 'Comprehensive cognitive intelligence measurement.' },
    target_audience: { id: 'Siswa SD hingga Mahasiswa', en: 'Primary students to University students' },
    duration_minutes: 90,
    format: { id: 'Offline', en: 'Offline' },
    price_individual: 350000,
    price_institution: 300000,
    is_active: true,
    sort_order: 3
  },
  {
    id: 't4',
    category: 'industry',
    name: { id: 'Tes Seleksi Karyawan', en: 'Employee Selection Test' },
    description: { id: 'Penilaian psikologis untuk kandidat karyawan baru.', en: 'Psychological assessment for new employee candidates.' },
    target_audience: { id: 'Kandidat Karyawan', en: 'Employee Candidates' },
    duration_minutes: 150,
    format: { id: 'Online', en: 'Online' },
    price_individual: null, // Contact for pricing
    price_institution: null,
    is_active: true,
    sort_order: 4
  },
  {
    id: 't5',
    category: 'industry',
    name: { id: 'Asesmen Kepemimpinan', en: 'Leadership Assessment' },
    description: { id: 'Evaluasi potensi manajerial dan kepemimpinan.', en: 'Evaluation of managerial and leadership potential.' },
    target_audience: { id: 'Manajer / Supervisor', en: 'Managers / Supervisors' },
    duration_minutes: 180,
    format: { id: 'Online / Offline', en: 'Online / Offline' },
    price_individual: 750000,
    price_institution: null,
    is_active: true,
    sort_order: 5
  },
  {
    id: 't6',
    category: 'industry',
    name: { id: 'Tes Profil Kepribadian', en: 'Personality Profile Test' },
    description: { id: 'Analisis mendalam mengenai dinamika kepribadian pekerja.', en: 'In-depth analysis of worker personality dynamics.' },
    target_audience: { id: 'Karyawan / Profesional', en: 'Employees / Professionals' },
    duration_minutes: 90,
    format: { id: 'Online', en: 'Online' },
    price_individual: 200000,
    price_institution: 150000,
    is_active: true,
    sort_order: 6
  }
];
