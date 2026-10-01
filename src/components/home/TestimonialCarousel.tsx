'use client';

import { Testimonial } from '@/lib/types';
import { useLocale, useTranslations } from 'next-intl';
import { getBilingualText } from '@/lib/utils';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const locale = useLocale() as 'id' | 'en';
  const t = useTranslations('home');
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // On desktop we might want to show 3, tablet 2, mobile 1. For simplicity in a custom carousel, 
  // we'll just slide one at a time and show a subset. Or simply show 1 active at a time for all viewports.
  // We'll show 1 active for simplicity here.

  const active = testimonials[currentIndex];

  return (
    <section className="w-full bg-surface py-16 px-4 md:px-8 border-y border-border-subtle overflow-hidden">
      <div className="container mx-auto max-w-4xl relative">
        <div className="text-center mb-10">
          <h2 className="text-h2-mobile md:text-h2 font-heading text-text-primary mb-2">
            {t('testimonials_title')}
          </h2>
          <p className="text-text-secondary text-body-lg">
            {t('testimonials_subtitle')}
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <button 
            onClick={handlePrev}
            className="absolute left-0 z-10 w-10 h-10 bg-canvas rounded-full shadow flex items-center justify-center text-text-primary hover:text-brand-primary transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="w-full max-w-2xl px-12">
            <div className="bg-canvas p-8 rounded-lg shadow-subtle border border-border-subtle relative flex flex-col items-center text-center">
              <Quote className="absolute top-4 left-4 text-surface-alt w-12 h-12" />
              <p className="text-body-lg italic text-text-primary mb-6 relative z-10 mt-4">
                "{getBilingualText(active.content, locale)}"
              </p>
              <div className="flex flex-col items-center mt-auto">
                {active.photo_url && (
                  <div className="w-16 h-16 relative rounded-full overflow-hidden mb-3">
                    <Image src={active.photo_url} alt={active.name} fill className="object-cover" />
                  </div>
                )}
                <h4 className="font-heading font-bold text-text-primary">{active.name}</h4>
                <p className="text-text-secondary text-caption">{getBilingualText(active.role, locale)}</p>
              </div>
            </div>
          </div>

          <button 
            onClick={handleNext}
            className="absolute right-0 z-10 w-10 h-10 bg-canvas rounded-full shadow flex items-center justify-center text-text-primary hover:text-brand-primary transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
