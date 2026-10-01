import { Locale } from '@/i18n/config';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';
import { BookOpen, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';

export default async function AssessmentPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const { lang } = await (params as any);
  setRequestLocale(lang);

  return (
    <div className="min-h-screen bg-background py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full bg-[#14508A]/10 text-[#14508A] dark:text-blue-400 text-xs font-bold uppercase tracking-wider inline-block mb-3">
            Pemesanan Asesmen Psikologi
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface mb-4">
            Pengukuran Potensi &amp; Evaluasi Perilaku Berstandar Ilmiah
          </h1>
          <p className="font-body text-base text-outline leading-relaxed">
            Pilih kategori asesmen yang Anda butuhkan. Seluruh tes dikerjakan secara terarah dengan laporan psikogram resmi berlisensi HIMPSI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Pendidikan */}
          <Link
            href={`/${lang}/asesmen/pendidikan`}
            className="group bg-surface-container-lowest dark:bg-gray-900 rounded-3xl p-8 shadow-ambient border-t-4 border-t-[#F58A31] border border-outline-variant/30 dark:border-gray-800 hover:shadow-interactive hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 bg-primary-fixed dark:bg-amber-900/40 text-[#944a00] dark:text-amber-300 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <BookOpen className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-[#F58A31] uppercase tracking-wider">
                Siswa &amp; Lembaga Edukasi
              </span>
              <h2 className="font-heading text-2xl font-bold text-on-surface dark:text-white mt-1 mb-3">
                Asesmen Pendidikan
              </h2>
              <p className="text-sm text-outline mb-6 leading-relaxed">
                Kesiapan masuk sekolah dasar, pemetaan gaya belajar anak, tes IQ &amp; bakat minat penjurusan SMA / perkuliahan.
              </p>
              <ul className="space-y-2 text-xs text-on-surface-variant dark:text-gray-300 mb-8 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Test A: Kesiapan Masuk Sekolah (Anak)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Test B: Penjurusan Minat Bakat (Remaja)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Test C: Potensi Akademik &amp; Kognitif</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-outline-variant/20 text-xs font-bold text-[#F58A31]">
              <span>Pilih Paket Tes Pendidikan</span>
              <div className="w-8 h-8 rounded-full bg-[#F58A31] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Industri */}
          <Link
            href={`/${lang}/asesmen/industri`}
            className="group bg-surface-container-lowest dark:bg-gray-900 rounded-3xl p-8 shadow-ambient border-t-4 border-t-[#14508A] border border-outline-variant/30 dark:border-gray-800 hover:shadow-interactive hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 bg-secondary-fixed dark:bg-blue-900/40 text-[#0d4c86] dark:text-blue-300 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Briefcase className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-[#14508A] dark:text-blue-400 uppercase tracking-wider">
                Korporat &amp; Profesional
              </span>
              <h2 className="font-heading text-2xl font-bold text-on-surface dark:text-white mt-1 mb-3">
                Asesmen Industri &amp; Organisasi
              </h2>
              <p className="text-sm text-outline mb-6 leading-relaxed">
                Psikotes rekrutmen staf, profiling kompetensi managerial, assessment center promosi jabatan, dan evaluasi kesiapan kepemimpinan.
              </p>
              <ul className="space-y-2 text-xs text-on-surface-variant dark:text-gray-300 mb-8 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Test A: Seleksi Staf &amp; Entry Level</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Test B: Asesmen Managerial &amp; Leadership</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Test C: Executive Profiling &amp; Culture Fit</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-outline-variant/20 text-xs font-bold text-[#14508A] dark:text-blue-400">
              <span>Pilih Paket Tes Industri</span>
              <div className="w-8 h-8 rounded-full bg-[#14508A] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
