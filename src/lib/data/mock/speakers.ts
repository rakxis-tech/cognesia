import { Speaker } from '../../types';

export const speakers: Speaker[] = [
  {
    id: 's1',
    name: 'Prof. Arief Rahman',
    slug: 'arief-rahman',
    photo_url: 'https://i.pravatar.cc/150?u=arief',
    bio: { id: 'Pakar pendidikan dengan pengalaman lebih dari 30 tahun.', en: 'Education expert with over 30 years of experience.' },
    topics: [
      { id: 'Psikologi Pendidikan', en: 'Educational Psychology' },
      { id: 'Pengembangan Karakter', en: 'Character Development' }
    ],
    experience: { id: 'Dosen UI, Pembicara Nasional', en: 'Lecturer at UI, National Speaker' },
    languages: ['Indonesian', 'English'],
    is_active: true
  },
  {
    id: 's2',
    name: 'Dr. Diana Setiyawati',
    slug: 'diana-setiyawati',
    photo_url: 'https://i.pravatar.cc/150?u=diana',
    bio: { id: 'Psikolog klinis dan peneliti di bidang kesehatan mental.', en: 'Clinical psychologist and researcher in mental health.' },
    topics: [
      { id: 'Kesehatan Mental di Tempat Kerja', en: 'Mental Health in the Workplace' },
      { id: 'Manajemen Stres', en: 'Stress Management' }
    ],
    experience: { id: 'Peneliti UGM, Psikolog Klinis', en: 'Researcher at UGM, Clinical Psychologist' },
    languages: ['Indonesian', 'English'],
    is_active: true
  },
  {
    id: 's3',
    name: 'Reza Gunawan',
    slug: 'reza-gunawan',
    photo_url: 'https://i.pravatar.cc/150?u=reza',
    bio: { id: 'Praktisi penyembuhan holistik dan pembicara inspirasional.', en: 'Holistic healing practitioner and inspirational speaker.' },
    topics: [
      { id: 'Mindfulness', en: 'Mindfulness' },
      { id: 'Keseimbangan Hidup', en: 'Life Balance' }
    ],
    experience: { id: 'Praktisi Holistik, Penulis', en: 'Holistic Practitioner, Author' },
    languages: ['Indonesian'],
    is_active: true
  },
  {
    id: 's4',
    name: 'Nurul Hidayati',
    slug: 'nurul-hidayati',
    photo_url: 'https://i.pravatar.cc/150?u=nurul',
    bio: { id: 'HR Consultant dengan fokus pada rekrutmen dan pelatihan.', en: 'HR Consultant with a focus on recruitment and training.' },
    topics: [
      { id: 'Dinamika Tim', en: 'Team Dynamics' },
      { id: 'Kepemimpinan Efektif', en: 'Effective Leadership' }
    ],
    experience: { id: 'Konsultan HR Senior', en: 'Senior HR Consultant' },
    languages: ['Indonesian', 'English'],
    is_active: true
  }
];
