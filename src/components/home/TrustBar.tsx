'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

interface TrustBarProps {
  sessionsCompleted?: number;
  clientsServed?: number;
  facilitatorsCount?: number;
}

export function TrustBar({ sessionsCompleted, clientsServed, facilitatorsCount }: TrustBarProps) {
  const t = useTranslations('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const hasData = (sessionsCompleted || 0) > 0 || (clientsServed || 0) > 0 || (facilitatorsCount || 0) > 0;

  if (!hasData) return null;

  return (
    <section className="w-full bg-surface py-12 px-4 md:px-8 border-y border-border-subtle">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-h2-mobile md:text-h2 font-heading text-text-primary">
            {t('trust_title')}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {sessionsCompleted !== undefined && sessionsCompleted > 0 && (
            <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-2">
                {sessionsCompleted}+
              </div>
              <div className="text-text-secondary">{t('trust_sessions')}</div>
            </div>
          )}
          {clientsServed !== undefined && clientsServed > 0 && (
            <div className={`transition-opacity duration-1000 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-2">
                {clientsServed}+
              </div>
              <div className="text-text-secondary">{t('trust_clients')}</div>
            </div>
          )}
          {facilitatorsCount !== undefined && facilitatorsCount > 0 && (
            <div className={`transition-opacity duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-2">
                {facilitatorsCount}
              </div>
              <div className="text-text-secondary">{t('trust_facilitators')}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
