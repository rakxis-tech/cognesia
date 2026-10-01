import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function CTASection() {
  const t = useTranslations('home');
  const tCommon = useTranslations('common');

  return (
    <section className="w-full bg-brand-primary py-20 px-4 md:px-8 text-center">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-h2-mobile md:text-h2 font-heading text-text-on-primary mb-4">
          {t('cta_bottom_title')}
        </h2>
        <p className="text-body-lg text-text-on-primary/90 mb-10">
          {t('cta_bottom_subtitle')}
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link
            href="/konseling"
            className="w-full md:w-auto px-8 py-3 bg-brand-accent hover:bg-brand-accent-hover text-text-on-accent font-semibold rounded transition-colors"
          >
            {tCommon('cta_book_now')}
          </Link>
          <a
            href="https://wa.me/123456789" // This would use the settings ideally
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-8 py-3 bg-transparent border-2 border-text-on-primary text-text-on-primary hover:bg-text-on-primary/10 font-semibold rounded transition-colors"
          >
            {tCommon('cta_whatsapp')}
          </a>
        </div>
      </div>
    </section>
  );
}
