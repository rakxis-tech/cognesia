import { FAQ } from '../../types';

export const faqs: FAQ[] = [
  {
    id: 'faq1',
    category: 'counseling',
    question: { id: 'Bagaimana cara mendaftar konseling?', en: 'How do I register for counseling?' },
    answer: { id: 'Anda dapat mendaftar melalui website kami pada menu Konseling, lalu mengisi form yang disediakan.', en: 'You can register through our website in the Counseling menu, then fill out the provided form.' },
    sort_order: 1,
    is_active: true
  },
  {
    id: 'faq2',
    category: 'counseling',
    question: { id: 'Apa perbedaan psikolog dan konselor sebaya?', en: 'What is the difference between a psychologist and a peer counselor?' },
    answer: { id: 'Psikolog adalah tenaga profesional berlisensi, sementara konselor sebaya adalah individu terlatih untuk memberikan dukungan emosional ringan.', en: 'A psychologist is a licensed professional, while a peer counselor is a trained individual who provides light emotional support.' },
    sort_order: 2,
    is_active: true
  },
  {
    id: 'faq3',
    category: 'assessment',
    question: { id: 'Berapa lama hasil tes psikologi keluar?', en: 'How long does it take for psychological test results to come out?' },
    answer: { id: 'Biasanya hasil tes akan keluar dalam 3-7 hari kerja setelah tes dilaksanakan.', en: 'Usually, test results will come out within 3-7 working days after the test is conducted.' },
    sort_order: 3,
    is_active: true
  },
  {
    id: 'faq4',
    category: 'payment',
    question: { id: 'Metode pembayaran apa saja yang tersedia?', en: 'What payment methods are available?' },
    answer: { id: 'Saat ini kami menerima pembayaran melalui transfer bank BCA.', en: 'Currently, we accept payments via BCA bank transfer.' },
    sort_order: 4,
    is_active: true
  },
  {
    id: 'faq5',
    category: 'counseling',
    question: { id: 'Apakah sesi konseling bersifat rahasia?', en: 'Are counseling sessions confidential?' },
    answer: { id: 'Tentu, kerahasiaan Anda sangat kami jaga sesuai dengan kode etik psikologi.', en: 'Yes, your confidentiality is strictly maintained in accordance with psychological ethical codes.' },
    sort_order: 5,
    is_active: true
  },
  {
    id: 'faq6',
    category: 'general',
    question: { id: 'Apakah bisa reschedule jadwal?', en: 'Can I reschedule my appointment?' },
    answer: { id: 'Bisa, maksimal H-1 dari jadwal yang ditentukan dengan menghubungi admin.', en: 'Yes, you can reschedule up to 1 day before the scheduled time by contacting our admin.' },
    sort_order: 6,
    is_active: true
  },
  {
    id: 'faq7',
    category: 'industry',
    question: { id: 'Bagaimana prosedur layanan rekrutmen perusahaan?', en: 'What is the procedure for corporate recruitment services?' },
    answer: { id: 'Silakan isi form pada layanan Rekrutmen, dan tim kami akan segera menghubungi Anda untuk diskusi lebih lanjut.', en: 'Please fill out the form in the Recruitment services section, and our team will contact you shortly for further discussion.' },
    sort_order: 7,
    is_active: true
  },
  {
    id: 'faq8',
    category: 'seminar',
    question: { id: 'Apakah Cognesia melayani seminar offline di luar kota?', en: 'Does Cognesia provide offline seminars outside the city?' },
    answer: { id: 'Ya, kami dapat mengatur seminar di luar kota dengan syarat dan ketentuan yang disepakati.', en: 'Yes, we can arrange out-of-town seminars subject to agreed terms and conditions.' },
    sort_order: 8,
    is_active: true
  }
];
