'use client';

import { useTranslations } from 'next-intl';
import { AssessmentTest } from '@/lib/types';
import { Locale } from '@/i18n/config';
import { getBilingualText, buildWhatsAppAssessmentMessage } from '@/lib/utils';
import { z } from 'zod';
import { useForm as useHookForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface AssessmentFormProps {
  test: AssessmentTest;
  locale: Locale;
}

export function AssessmentForm({ test, locale }: AssessmentFormProps) {
  const t = useTranslations('assessment');
  const commonT = useTranslations('common');
  const valT = useTranslations('validation');
  
  const testName = getBilingualText(test.name, locale);

  const schema = z.object({
    name: z.string().min(1, valT('required')),
    email: z.string().email(valT('email_invalid')),
    phone: z.string().min(1, valT('required')),
    bookerType: z.enum(['individual', 'institution']),
    institutionName: z.string().optional(),
    participants: z.number().min(1, valT('required')),
    preferredDate: z.string().min(1, valT('required')),
    notes: z.string().optional(),
  }).refine((data) => {
    if (data.bookerType === 'institution' && !data.institutionName) {
      return false;
    }
    return true;
  }, {
    message: valT('required'),
    path: ['institutionName'],
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
      bookerType: 'individual',
      participants: 1,
    },
  });

  const bookerType = watch('bookerType');

  const onSubmit = (data: FormData) => {
    const message = buildWhatsAppAssessmentMessage({
      name: data.name,
      testName: testName,
      category: test.category,
      participantCount: data.participants,
      preferredDate: data.preferredDate,
    });
    
    // Default WA number from settings (ideally fetched, but we use hardcoded or from env)
    const phone = '+6281112345678'; // Example, should come from settings
    const cleanPhone = phone.replace(/[^0-9+]/g, '');
    const waPhone = cleanPhone.startsWith('+') ? cleanPhone.slice(1) : cleanPhone;
    const url = `https://wa.me/${waPhone}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h4 className="font-semibold text-primary">{t('summary_title')}</h4>
        <p className="text-sm text-gray-700">{testName}</p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="name">{t('form_name')}</Label>
          <Input id="name" {...register('name')} />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <Label htmlFor="email">{t('form_email')}</Label>
          <Input id="email" type="email" {...register('email')} />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <Label htmlFor="phone">{t('form_phone')}</Label>
          <Input id="phone" type="tel" {...register('phone')} />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <Label>{t('form_booker_type')}</Label>
          <RadioGroup
            defaultValue="individual"
            onValueChange={(value) => setValue('bookerType', value as 'individual' | 'institution')}
            className="flex gap-4 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="individual" id="individual" />
              <Label htmlFor="individual" className="font-normal">{t('form_individual')}</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="institution" id="institution" />
              <Label htmlFor="institution" className="font-normal">{t('form_institution')}</Label>
            </div>
          </RadioGroup>
        </div>

        {bookerType === 'institution' && (
          <div>
            <Label htmlFor="institutionName">{t('form_institution_name')}</Label>
            <Input id="institutionName" {...register('institutionName')} />
            {errors.institutionName && <p className="text-red-500 text-sm mt-1">{errors.institutionName.message}</p>}
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="participants">{t('form_participants')}</Label>
            <Input id="participants" type="number" min="1" {...register('participants', { valueAsNumber: true })} />
            {errors.participants && <p className="text-red-500 text-sm mt-1">{errors.participants.message}</p>}
          </div>

          <div>
            <Label htmlFor="preferredDate">{t('form_preferred_date')}</Label>
            <Input id="preferredDate" type="date" {...register('preferredDate')} />
            {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate.message}</p>}
          </div>
        </div>

        <div>
          <Label htmlFor="notes">{t('form_notes')} ({commonT('optional')})</Label>
          <Textarea id="notes" {...register('notes')} />
        </div>
      </div>

      <Button type="submit" className="w-full bg-brand-accent hover:bg-opacity-90">
        {t('order_via_wa')}
      </Button>
    </form>
  );
}
