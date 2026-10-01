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
      <div className="bg-surface rounded-xl border p-6 flex flex-col h-full hover:shadow-md transition-shadow">
        <h3 className="text-xl font-bold font-montserrat text-primary mb-2">
          {name}
        </h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-gray-700">
            <Users className="w-4 h-4 mr-3 text-brand-primary" />
            <span>{targetAudience}</span>
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <Clock className="w-4 h-4 mr-3 text-brand-primary" />
            <span>
              {test.duration_minutes} {commonT('minutes')}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <MapPin className="w-4 h-4 mr-3 text-brand-primary" />
            <span>{format}</span>
          </div>
          <div className="flex items-center text-sm font-semibold text-primary">
            <Tag className="w-4 h-4 mr-3 text-brand-accent" />
            <span>{displayPrice}</span>
          </div>
        </div>

        <button
          onClick={() => setIsFormOpen(true)}
          className="w-full bg-brand-primary text-white py-3 rounded-lg font-medium hover:bg-opacity-90 transition-opacity"
        >
          {t('order_via_wa')}
        </button>
      </div>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-montserrat font-bold text-primary">
              {t('form_title')}
            </DialogTitle>
          </DialogHeader>
          <AssessmentForm test={test} locale={locale} />
        </DialogContent>
      </Dialog>
    </>
  );
}
