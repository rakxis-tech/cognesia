import { useTranslations } from 'next-intl';
import { ClipboardList, Calendar, CheckCircle2 } from 'lucide-react';

export function HowItWorks() {
  const t = useTranslations('home');

  return (
    <section className="w-full bg-canvas py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-h2-mobile md:text-h2 font-heading text-text-primary mb-4">
            {t('how_it_works_title')}
          </h2>
          <p className="text-text-secondary text-body-lg">
            {t('how_it_works_subtitle')}
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-0.5 bg-border-subtle z-0"></div>

          {/* Step 1 */}
          <div className="relative z-10 flex-1 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-surface-alt rounded-full flex items-center justify-center mb-4 relative shadow-subtle border border-border-subtle">
              <ClipboardList className="text-brand-primary w-8 h-8" />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-primary text-text-on-primary rounded-full flex items-center justify-center font-bold font-heading">
                1
              </div>
            </div>
            <h3 className="text-h3-mobile md:text-h3 font-heading text-text-primary mb-2">
              {t('step_1_title')}
            </h3>
            <p className="text-text-secondary text-body">
              {t('step_1_desc')}
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex-1 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-surface-alt rounded-full flex items-center justify-center mb-4 relative shadow-subtle border border-border-subtle">
              <Calendar className="text-brand-primary w-8 h-8" />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-primary text-text-on-primary rounded-full flex items-center justify-center font-bold font-heading">
                2
              </div>
            </div>
            <h3 className="text-h3-mobile md:text-h3 font-heading text-text-primary mb-2">
              {t('step_2_title')}
            </h3>
            <p className="text-text-secondary text-body">
              {t('step_2_desc')}
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex-1 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-surface-alt rounded-full flex items-center justify-center mb-4 relative shadow-subtle border border-border-subtle">
              <CheckCircle2 className="text-brand-primary w-8 h-8" />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-primary text-text-on-primary rounded-full flex items-center justify-center font-bold font-heading">
                3
              </div>
            </div>
            <h3 className="text-h3-mobile md:text-h3 font-heading text-text-primary mb-2">
              {t('step_3_title')}
            </h3>
            <p className="text-text-secondary text-body">
              {t('step_3_desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
