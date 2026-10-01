import { Testimonial } from '../../types';

export const testimonials: Testimonial[] = [
  {
    id: 'tm1',
    name: 'Anisa',
    role: { id: 'Klien Konseling', en: 'Counseling Client' },
    content: { id: 'Pelayanan konseling di Cognesia sangat profesional. Saya merasa didengarkan dan mendapatkan solusi yang tepat.', en: 'Cognesia counseling services are very professional. I felt heard and got the right solutions.' },
    photo_url: 'https://i.pravatar.cc/150?u=anisa',
    is_active: true,
    sort_order: 1
  },
  {
    id: 'tm2',
    name: 'Bapak Rudi',
    role: { id: 'HR Manager, PT Maju Jaya', en: 'HR Manager, PT Maju Jaya' },
    content: { id: 'Asesmen industri dari Cognesia sangat membantu perusahaan kami dalam menemukan talenta terbaik.', en: 'Industry assessments from Cognesia really helped our company find the best talent.' },
    photo_url: 'https://i.pravatar.cc/150?u=rudi',
    is_active: true,
    sort_order: 2
  },
  {
    id: 'tm3',
    name: 'Ibu Siska',
    role: { id: 'Orang Tua Siswa', en: 'Student Parent' },
    content: { id: 'Tes minat bakat untuk anak saya sangat akurat dan laporannya mudah dipahami.', en: 'The aptitude test for my child was very accurate and the report was easy to understand.' },
    photo_url: 'https://i.pravatar.cc/150?u=siska',
    is_active: true,
    sort_order: 3
  },
  {
    id: 'tm4',
    name: 'Dinda',
    role: { id: 'Mahasiswa', en: 'University Student' },
    content: { id: 'Konselor sebaya di sini ramah banget, bikin nyaman buat cerita masalah kuliah.', en: 'The peer counselors here are very friendly, making it comfortable to talk about university problems.' },
    photo_url: 'https://i.pravatar.cc/150?u=dinda',
    is_active: true,
    sort_order: 4
  }
];
