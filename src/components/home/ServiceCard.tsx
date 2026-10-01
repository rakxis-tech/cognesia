import { Service } from '@/lib/types';
import { useLocale } from 'next-intl';
import { getBilingualText } from '@/lib/utils';
import Link from 'next/link';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const locale = useLocale() as 'id' | 'en';
  const name = getBilingualText(service.name, locale);
  const description = getBilingualText(service.description, locale);

  const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;

  return (
    <Link href={`/${service.slug}`} className="block h-full">
      <div className="h-full bg-canvas border border-border-subtle rounded-lg p-6 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col items-start">
        <div className="w-12 h-12 bg-surface flex items-center justify-center rounded-lg mb-4 text-brand-primary">
          <IconComponent size={24} />
        </div>
        <h3 className="text-h3-mobile md:text-h3 font-heading text-text-primary mb-2">
          {name}
        </h3>
        <p className="text-text-secondary text-body flex-grow">
          {description}
        </p>
      </div>
    </Link>
  );
}
