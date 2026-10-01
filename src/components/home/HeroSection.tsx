import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function HeroSection() {
  const t = useTranslations('home');
  const tCommon = useTranslations('common');

  return (
    <section className="relative w-full bg-gradient-to-br from-brand-primary to-brand-primary-hover min-h-screen md:min-h-[80vh] flex flex-col justify-center py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-h1-mobile md:text-h1 text-text-on-primary font-heading mb-6">
          {t('hero_title')}
        </h1>
        <p className="text-body md:text-body-lg text-text-on-primary/90 mb-10 max-w-2xl mx-auto">
          {t('hero_subtitle')}
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link
            href="/konseling"
            className="w-full md:w-auto px-8 py-3 bg-brand-accent hover:bg-brand-accent-hover text-text-on-accent font-semibold rounded transition-colors"
          >
            {t('hero_cta_individual')}
          </Link>
          <Link
            href="/kontak"
            className="w-full md:w-auto px-8 py-3 bg-transparent border-2 border-text-on-primary text-text-on-primary hover:bg-text-on-primary/10 font-semibold rounded transition-colors"
          >
            {t('hero_cta_institution')}
          </Link>
        </div>
      </div>
    </section>
  );
}
