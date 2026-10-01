import { Facilitator } from '@/lib/types';
import { useLocale, useTranslations } from 'next-intl';
import { getBilingualText, formatCurrency } from '@/lib/utils';
import Image from 'next/image';
import { User, CheckCircle2 } from 'lucide-react';

interface FacilitatorCardProps {
  facilitator: Facilitator;
}

export function FacilitatorCard({ facilitator }: FacilitatorCardProps) {
  const locale = useLocale() as 'id' | 'en';
  const t = useTranslations('counseling');

  const typeName = facilitator.type === 'psychologist' 
    ? t('psychologist') 
    : t('peer_counselor');

  return (
    <div className="bg-canvas border border-border-subtle rounded-lg overflow-hidden shadow-subtle hover:shadow-card transition-shadow duration-300 flex flex-col">
      <div className="relative w-full h-48 bg-surface-alt">
        {facilitator.photo_url ? (
          <Image 
            src={facilitator.photo_url} 
            alt={facilitator.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-text-secondary">
            <User size={64} />
          </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block px-2 py-1 bg-surface text-text-secondary text-xs rounded font-medium">
            {typeName}
          </span>
          {facilitator.type === 'psychologist' && facilitator.himpsi_member && (
            <span title="HIMPSI Member" className="text-brand-primary">
              <CheckCircle2 size={16} />
            </span>
          )}
        </div>
        
        <h3 className="text-h3-mobile md:text-h3 font-heading text-text-primary mb-1">
          {facilitator.name}
        </h3>
        
        <div className="mt-4 mb-4 flex-grow">
          <div className="flex flex-wrap gap-1">
            {facilitator.specializations.map((spec, i) => (
              <span key={i} className="inline-block px-2 py-1 bg-surface-alt text-text-secondary text-xs rounded">
                {getBilingualText(spec, locale)}
              </span>
            )).slice(0, 3)}
            {facilitator.specializations.length > 3 && (
              <span className="inline-block px-2 py-1 bg-surface-alt text-text-secondary text-xs rounded">
                +{facilitator.specializations.length - 3}
              </span>
            )}
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-border-subtle flex justify-between items-center">
          <span className="font-bold text-text-primary">
            {formatCurrency(facilitator.price_per_session)}
          </span>
          <span className="text-text-secondary text-xs">
            / sesi
          </span>
        </div>
      </div>
    </div>
  );
}
