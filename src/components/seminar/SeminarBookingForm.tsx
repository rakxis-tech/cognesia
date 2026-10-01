'use client';

import { useTranslations } from 'next-intl';
import { Speaker } from '@/lib/types';
import { Locale } from '@/i18n/config';
import { buildWhatsAppSeminarMessage } from '@/lib/utils';
import { z } from 'zod';
import { useForm as useHookForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';

interface SeminarBookingFormProps {
  speaker: Speaker;
  locale: Locale;
}

export function SeminarBookingForm({ speaker, locale }: SeminarBookingFormProps) {
  const t = useTranslations('seminar');
  const commonT = useTranslations('common');
  const valT = useTranslations('validation');

  const schema = z.object({
    eventName: z.string().min(1, valT('required')),
    institution: z.string().min(1, valT('required')),
    locationType: z.enum(['online', 'offline']),
    locationDetail: z.string().optional(),
    participants: z.number().min(1, valT('required')),
    date: z.string().min(1, valT('required')),
  }).refine((data) => {
    if (data.locationType === 'offline' && !data.locationDetail) {
      return false;
    }
    return true;
  }, {
    message: valT('required'),
    path: ['locationDetail'],
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useHookForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      locationType: 'online',
    },
  });

  const locationType = watch('locationType');

  const onSubmit = (data: FormData) => {
    const message = buildWhatsAppSeminarMessage({
      eventName: data.eventName,
      speaker: speaker.name,
      institution: data.institution,
      date: data.date,
      participants: data.participants,
    });
    
    const phone = '+628888295582';
    const cleanPhone = phone.replace(/[^0-9+]/g, '');
    const waPhone = cleanPhone.startsWith('+') ? cleanPhone.slice(1) : cleanPhone;
    const url = `https://wa.me/${waPhone}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="eventName" className="text-on-surface dark:text-[#e3e3e3]">{t('form_event_name')}</Label>
          <Input id="eventName" {...register('eventName')} className="mt-1" />
          {errors.eventName && <p className="text-red-500 text-xs mt-1">{errors.eventName.message}</p>}
        </div>

        <div>
          <Label htmlFor="institution" className="text-on-surface dark:text-[#e3e3e3]">{t('form_institution')}</Label>
          <Input id="institution" {...register('institution')} className="mt-1" />
          {errors.institution && <p className="text-red-500 text-xs mt-1">{errors.institution.message}</p>}
        </div>
      </div>

      <div>
        <Label className="text-on-surface dark:text-[#e3e3e3]">{t('form_location_type')}</Label>
        <RadioGroup
          defaultValue="online"
          onValueChange={(value) => setValue('locationType', value as 'online' | 'offline')}
          className="flex gap-4 mt-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="online" id="online" />
            <Label htmlFor="online" className="font-normal text-on-surface dark:text-[#e3e3e3] cursor-pointer">{t('form_location_online')}</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="offline" id="offline" />
            <Label htmlFor="offline" className="font-normal text-on-surface dark:text-[#e3e3e3] cursor-pointer">{t('form_location_offline')}</Label>
          </div>
        </RadioGroup>
      </div>

      {locationType === 'offline' && (
        <div>
          <Label htmlFor="locationDetail" className="text-on-surface dark:text-[#e3e3e3]">{t('form_location_detail')}</Label>
          <Input id="locationDetail" {...register('locationDetail')} className="mt-1" />
          {errors.locationDetail && <p className="text-red-500 text-xs mt-1">{errors.locationDetail.message}</p>}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="participants" className="text-on-surface dark:text-[#e3e3e3]">{t('form_participants')}</Label>
          <Input id="participants" type="number" min="1" {...register('participants', { valueAsNumber: true })} className="mt-1" />
          {errors.participants && <p className="text-red-500 text-xs mt-1">{errors.participants.message}</p>}
        </div>

        <div>
          <Label htmlFor="date" className="text-on-surface dark:text-[#e3e3e3]">{t('form_date')}</Label>
          <Input id="date" type="date" {...register('date')} className="mt-1" />
          {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
        </div>
      </div>

      <p className="text-xs text-outline italic leading-relaxed">{t('note')}</p>

      <Button type="submit" className="w-full bg-[#14508A] hover:bg-[#14508A]/90 dark:bg-[#8ab4f8] dark:text-[#121c2a] dark:hover:bg-[#8ab4f8]/90 font-semibold py-3 text-sm sm:text-base rounded-xl transition-all shadow-sm">
        {commonT('cta_submit')}
      </Button>
    </form>
  );
}
