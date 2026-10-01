import { Service } from '../../types';

export const services: Service[] = [
  {
    id: '1',
    type: 'assessment',
    name: { id: 'Asesmen Psikologi', en: 'Psychological Assessment' },
    description: { id: 'Layanan evaluasi psikologis untuk individu, sekolah, dan perusahaan.', en: 'Psychological evaluation services for individuals, schools, and companies.' },
    icon: 'Brain',
    slug: 'assessment',
    is_active: true
  },
  {
    id: '2',
    type: 'counseling',
    name: { id: 'Konseling', en: 'Counseling' },
    description: { id: 'Sesi dukungan emosional dan psikologis dengan profesional atau konselor sebaya.', en: 'Emotional and psychological support sessions with professionals or peer counselors.' },
    icon: 'HeartHandshake',
    slug: 'counseling',
    is_active: true
  },
  {
    id: '3',
    type: 'team_training',
    name: { id: 'Pelatihan Tim', en: 'Team Training' },
    description: { id: 'Program pengembangan kapasitas dan sinergi tim untuk perusahaan.', en: 'Capacity building and team synergy programs for companies.' },
    icon: 'Users',
    slug: 'team-training',
    is_active: true
  },
  {
    id: '4',
    type: 'recruitment',
    name: { id: 'Rekrutmen', en: 'Recruitment' },
    description: { id: 'Layanan seleksi dan penempatan kandidat terbaik untuk organisasi Anda.', en: 'Selection and placement services for the best candidates for your organization.' },
    icon: 'UserPlus',
    slug: 'recruitment',
    is_active: true
  },
  {
    id: '5',
    type: 'seminar',
    name: { id: 'Seminar & Workshop', en: 'Seminar & Workshop' },
    description: { id: 'Sesi edukasi interaktif mengenai kesehatan mental dan pengembangan diri.', en: 'Interactive educational sessions on mental health and personal development.' },
    icon: 'Presentation',
    slug: 'seminar',
    is_active: true
  }
];
