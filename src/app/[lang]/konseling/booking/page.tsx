import { BookingStepper } from '@/components/booking';
import { setRequestLocale } from 'next-intl/server';

export default async function BookingPage({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await (params as any);
  setRequestLocale(lang);

  return (
    <main className="min-h-screen bg-background py-10 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="px-3.5 py-1 rounded-full bg-[#14508A]/10 text-[#14508A] dark:text-blue-400 text-xs font-bold uppercase tracking-wider inline-block mb-3">
            Alur Booking Konseling Terstruktur
          </span>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-on-surface">
            Reservasi Sesi Konseling Privat
          </h1>
          <p className="text-sm md:text-base text-outline mt-2 max-w-xl mx-auto">
            Isi data diri awal Anda, dapatkan rekomendasi layanan terbaik, pilih fasilitator, dan tentukan jadwal yang Anda inginkan.
          </p>
        </div>

        <BookingStepper locale={lang} />
      </div>
    </main>
  );
}
