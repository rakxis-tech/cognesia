'use client';

import { FAQ } from '@/lib/types';
import { useLocale, useTranslations } from 'next-intl';
import { getBilingualText } from '@/lib/utils';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import React from 'react';

interface FAQSectionProps {
  faqs: FAQ[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  const locale = useLocale() as 'id' | 'en';
  const t = useTranslations('home');

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="w-full bg-canvas py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-h2-mobile md:text-h2 font-heading text-text-primary mb-2">
            {t('faq_title')}
          </h2>
          <p className="text-text-secondary text-body-lg">
            {t('faq_subtitle')}
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq) => (
            <Accordion.Item 
              key={faq.id} 
              value={faq.id}
              className="border border-border-subtle rounded-lg overflow-hidden bg-surface"
            >
              <Accordion.Header className="flex">
                <Accordion.Trigger className="flex flex-1 items-center justify-between p-4 text-left font-heading font-medium text-text-primary hover:bg-surface-alt transition-colors group">
                  {getBilingualText(faq.question, locale)}
                  <ChevronDown className="w-5 h-5 text-text-secondary transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden text-text-secondary text-body data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <div className="p-4 pt-0">
                  {getBilingualText(faq.answer, locale)}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
