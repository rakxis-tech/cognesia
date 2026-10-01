import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function KonselingLandingPage({ params: { lang } }: { params: { lang: string } }) {
  const t = useTranslations('counseling');
  const tCommon = useTranslations('common');

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-20">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto mb-10">
            {t('subtitle')}
          </p>
          <Link 
            href={`/${lang}/konseling/booking`}
            className="inline-block bg-accent-orange text-white font-semibold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            {t('booking_title')}
          </Link>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-montserrat text-gray-900 mb-4">Pilihan Layanan Kami</h2>
            <p className="text-gray-600">Pilih layanan yang paling sesuai dengan kebutuhan Anda.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Psikolog Card */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-brand-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-montserrat text-gray-900 mb-3">{t('psychologist')}</h3>
              <p className="text-gray-600 mb-6">{t('psychologist_desc')}</p>
              <Link 
                href={`/${lang}/konseling/booking`}
                className="block text-center border-2 border-brand-primary text-brand-primary font-medium py-2 px-4 rounded-lg hover:bg-brand-primary hover:text-white transition-colors"
              >
                {tCommon('cta_book_now')}
              </Link>
            </div>

            {/* Konselor Sebaya Card */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 text-accent-orange rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-montserrat text-gray-900 mb-3">{t('peer_counselor')}</h3>
              <p className="text-gray-600 mb-6">{t('peer_counselor_desc')}</p>
              <Link 
                href={`/${lang}/konseling/booking`}
                className="block text-center border-2 border-brand-primary text-brand-primary font-medium py-2 px-4 rounded-lg hover:bg-brand-primary hover:text-white transition-colors"
              >
                {tCommon('cta_book_now')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
