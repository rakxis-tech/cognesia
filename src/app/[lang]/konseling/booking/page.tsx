import { useTranslations } from 'next-intl';
import { BookingStepper } from '@/components/booking';
import { getClinicalConfig } from '@/lib/data/repository';

export default async function BookingPage({ params: { lang } }: { params: { lang: string } }) {
  // Fetch clinical config on the server to pass down, or let client fetch it
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto max-w-3xl px-4">
        <BookingStepper locale={lang as any} />
      </div>
    </main>
  );
}
