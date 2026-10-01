'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { AssessmentTest } from '@/lib/types';
import { Locale } from '@/i18n/config';
import { getBilingualText, formatCurrency } from '@/lib/utils';
import { Clock, Users, MapPin, Tag } from 'lucide-react';
import { AssessmentForm } from './AssessmentForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface TestCardProps {
  test: AssessmentTest;
  locale: Locale;
}

export function TestCard({ test, locale }: TestCardProps) {
  const t = useTranslations('assessment');
  const commonT = useTranslations('common');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const name = getBilingualText(test.name, locale);
  const description = getBilingualText(test.description, locale);
  const targetAudience = getBilingualText(test.target_audience, locale);
  const format = getBilingualText(test.format, locale);

  const displayPrice =
    test.price_individual !== null
      ? formatCurrency(test.price_individual)
      : commonT('price_contact');

  return (
    <>
      <div className="bg-surface dark:bg-[#1e1f20] rounded-2xl border border-outline-variant/30 dark:border-[#3c4043] p-5 sm:p-6 flex flex-col h-full hover:shadow-interactive transition-all">
        <h3 className="text-xl font-bold font-heading text-[#14508A] dark:text-[#8ab4f8] mb-2">
          {name}
        </h3>
        <p className="text-on-surface-variant text-sm mb-6 flex-grow leading-relaxed">{description}</p>

        <div className="space-y-3 mb-6 border-t border-outline-variant/20 dark:border-[#3c4043] pt-4">
          <div className="flex items-center text-xs sm:text-sm text-on-surface-variant">
            <Users className="w-4 h-4 mr-3 text-brand-primary flex-shrink-0" />
            <span>{targetAudience}</span>
          </div>
          <div className="flex items-center text-xs sm:text-sm text-on-surface-variant">
            <Clock className="w-4 h-4 mr-3 text-brand-primary flex-shrink-0" />
            <span>
              {test.duration_minutes} {commonT('minutes')}
            </span>
          </div>
          <div className="flex items-center text-xs sm:text-sm text-on-surface-variant">
            <MapPin className="w-4 h-4 mr-3 text-brand-primary flex-shrink-0" />
            <span>{format}</span>
          </div>
          <div className="flex items-center text-xs sm:text-sm font-bold text-brand-primary">
            <Tag className="w-4 h-4 mr-3 text-[#F58A31] flex-shrink-0" />
            <span>{displayPrice}</span>
          </div>
        </div>

        <button
          onClick={() => setIsFormOpen(true)}
          className="w-full bg-[#F58A31] hover:bg-[#e07722] text-[#14508A] py-3 px-4 rounded-full font-bold text-xs sm:text-sm shadow-orange-glow transition-all active:scale-95 text-center"
        >
          {t('order_via_wa')}
        </button>
      </div>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-xl max-h-[90vh] overflow-y-auto bg-surface dark:bg-[#1e1f20] border-outline-variant/30 dark:border-[#3c4043] text-on-surface">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-heading font-bold text-[#14508A] dark:text-[#8ab4f8]">
              {t('form_title')}
            </DialogTitle>
          </DialogHeader>
          <AssessmentForm test={test} locale={locale} />
        </DialogContent>
      </Dialog>
    </>
  );
}
