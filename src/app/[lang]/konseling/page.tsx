import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';
import { Headphones, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export default async function KonselingLandingPage({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await (params as any);
  setRequestLocale(lang);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#14508A] to-[#0d3b66] text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="px-3.5 py-1 rounded-full bg-[#F58A31] text-[#14508A] text-xs font-bold uppercase tracking-wider inline-block mb-4">
            Layanan Konseling 1-on-1
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Ruang Aman untuk Bertumbuh &amp; Memulihkan Diri
          </h1>
          <p className="font-body text-base md:text-lg text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Didampingi oleh Psikolog Klinis berizin resmi (SIPP) dan Konselor Sebaya terlatih. Sesi privat 50 menit secara online via Zoom atau tatap muka di klinik mitra.
          </p>
          <Link 
            href={`/${lang}/konseling/booking`}
            className="inline-flex items-center gap-2 bg-[#F58A31] hover:bg-[#e07722] text-[#14508A] font-bold text-sm px-8 py-4 rounded-full shadow-orange-glow transition-all duration-200 active:scale-95"
          >
            <span>Mulai Booking Konseling</span>
            <ArrowRight className="w-4 h-4 font-bold" />
          </Link>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 md:py-24 bg-surface-container-low/40 dark:bg-[#131314]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="px-3 py-1 rounded-full bg-[#14508A]/10 text-[#14508A] dark:text-[#8ab4f8] text-xs font-bold uppercase tracking-wider">
              Dua Jalur Pendampingan
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-on-surface mt-3">
              Pilihan Layanan Sesuai Kebutuhan Anda
            </h2>
            <p className="text-sm md:text-base text-outline mt-2">
              Sistem triase kami juga akan membantu merekomendasikan pilihan paling tepat berdasarkan keluhan awal Anda.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Psikolog Card */}
            <div className="bg-surface dark:bg-[#1e1f20] rounded-3xl p-6 sm:p-8 shadow-ambient border-t-4 border-t-[#14508A] dark:border-t-[#8ab4f8] border border-outline-variant/30 dark:border-[#3c4043] flex flex-col justify-between hover:shadow-interactive transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-secondary-fixed dark:bg-blue-900/30 text-[#0d4c86] dark:text-[#8ab4f8] flex items-center justify-center mb-6">
                  <Headphones className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-[#14508A] dark:text-[#8ab4f8] text-xs font-bold">
                    Advance Handling
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold">
                    SIPP Resmi
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-on-surface mb-3">
                  Psikolog Klinis
                </h3>
                <p className="text-sm text-outline mb-6 leading-relaxed">
                  Penanganan profesional dan berwenang untuk kecemasan berat, depresi, trauma psikologis, gangguan kepribadian, serta pengarahan rujukan psikiater bila diperlukan.
                </p>
                <ul className="space-y-2.5 text-xs text-on-surface-variant mb-8 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span>Lulusan Magister Profesi Psikologi Berlisensi HIMPSI</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span>Psikoterapi berbasis bukti (CBT, ACT, Mindfulness)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span>Sesi privat 50 menit &amp; tindak lanjut evaluasi</span>
                  </li>
                </ul>
              </div>
              <Link 
                href={`/${lang}/konseling/booking`}
                className="w-full py-3 px-6 rounded-full bg-[#14508A] dark:bg-[#8ab4f8] hover:bg-[#0d3b66] text-white dark:text-[#131314] font-bold text-xs text-center transition-colors shadow-sm"
              >
                Pilih Psikolog Klinis
              </Link>
            </div>

            {/* Konselor Sebaya Card */}
            <div className="bg-surface dark:bg-[#1e1f20] rounded-3xl p-6 sm:p-8 shadow-ambient border-t-4 border-t-[#F58A31] border border-outline-variant/30 dark:border-[#3c4043] flex flex-col justify-between hover:shadow-interactive transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary-fixed dark:bg-amber-900/30 text-[#944a00] dark:text-[#ffaa55] flex items-center justify-center mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-[#944a00] dark:text-[#ffaa55] text-xs font-bold">
                    Lite &amp; Relatable
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-[#8ab4f8] text-[10px] font-bold">
                    Tarif Terjangkau
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-on-surface mb-3">
                  Konselor Sebaya (Peer)
                </h3>
                <p className="text-sm text-outline mb-6 leading-relaxed">
                  Pendekatan hangat seperti teman bercerita untuk keluhan ringan seperti curhat harian, overthinking akademis, adaptasi lingkungan baru, dan manajemen stres awal.
                </p>
                <ul className="space-y-2.5 text-xs text-on-surface-variant mb-8 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span>Sarjana Psikologi &amp; Fasilitator Terlatih</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span>Ruang curhat tanpa penghakiman &amp; boundaries jelas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span>Bukan terapi klinis &amp; tidak menangani krisis akut</span>
                  </li>
                </ul>
              </div>
              <Link 
                href={`/${lang}/konseling/booking`}
                className="w-full py-3 px-6 rounded-full bg-[#F58A31] hover:bg-[#e07722] text-[#14508A] font-bold text-xs text-center shadow-orange-glow transition-all"
              >
                Pilih Konselor Sebaya
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
