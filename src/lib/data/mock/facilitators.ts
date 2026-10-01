import { Facilitator } from '../../types';

export const facilitators: Facilitator[] = [
  {
    id: 'f1',
    name: 'Dr. Budi Santoso, M.Psi, Psikolog',
    type: 'psychologist',
    photo_url: 'https://i.pravatar.cc/150?u=budi',
    background: { id: 'Magister Profesi Psikologi Universitas Indonesia', en: 'Master of Professional Psychology, University of Indonesia' },
    specializations: [
      { id: 'Kecemasan', en: 'Anxiety' },
      { id: 'Depresi', en: 'Depression' },
      { id: 'Trauma', en: 'Trauma' }
    ],
    languages: ['Indonesian', 'English'],
    price_per_session: 350000,
    sipp_number: '1234-5678-90',
    himpsi_member: true,
    is_featured: true,
    is_active: true
  },
  {
    id: 'f2',
    name: 'Siti Rahmawati, M.Psi, Psikolog',
    type: 'psychologist',
    photo_url: 'https://i.pravatar.cc/150?u=siti',
    background: { id: 'Magister Profesi Psikologi Universitas Gadjah Mada', en: 'Master of Professional Psychology, Gadjah Mada University' },
    specializations: [
      { id: 'Hubungan Keluarga', en: 'Family Relationships' },
      { id: 'Psikologi Anak', en: 'Child Psychology' }
    ],
    languages: ['Indonesian'],
    price_per_session: 300000,
    sipp_number: '0987-6543-21',
    himpsi_member: true,
    is_featured: true,
    is_active: true
  },
  {
    id: 'f3',
    name: 'Andi Pratama',
    type: 'peer_counselor',
    photo_url: 'https://i.pravatar.cc/150?u=andi',
    background: { id: 'S1 Psikologi Universitas Padjadjaran', en: 'Bachelor of Psychology, Padjadjaran University' },
    specializations: [
      { id: 'Stres Akademik', en: 'Academic Stress' },
      { id: 'Manajemen Waktu', en: 'Time Management' }
    ],
    languages: ['Indonesian', 'English'],
    price_per_session: 100000,
    is_featured: false,
    is_active: true,
    disclaimer: { id: 'Peer counselor bukan psikolog klinis.', en: 'Peer counselor is not a clinical psychologist.' }
  },
  {
    id: 'f4',
    name: 'Dewi Lestari',
    type: 'peer_counselor',
    photo_url: 'https://i.pravatar.cc/150?u=dewi',
    background: { id: 'S1 Psikologi Universitas Airlangga', en: 'Bachelor of Psychology, Airlangga University' },
    specializations: [
      { id: 'Pengembangan Diri', en: 'Self-Development' },
      { id: 'Adaptasi Karir', en: 'Career Adaptation' }
    ],
    languages: ['Indonesian'],
    price_per_session: 100000,
    is_featured: false,
    is_active: true,
    disclaimer: { id: 'Peer counselor bukan psikolog klinis.', en: 'Peer counselor is not a clinical psychologist.' }
  }
];
