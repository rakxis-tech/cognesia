'use client';

import { useTranslations } from 'next-intl';
import { Locale } from '@/i18n/config';
import { buildWhatsAppProposalMessage } from '@/lib/utils';
import { z } from 'zod';
import { useForm as useHookForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface ProposalFormProps {
  serviceType: 'team_training' | 'recruitment';
  locale: Locale;
}

export function ProposalForm({ serviceType, locale }: ProposalFormProps) {
  const namespace = serviceType === 'team_training' ? 'training' : 'recruitment';
  const t = useTranslations(namespace);
  const commonT = useTranslations('common');
  const valT = useTranslations('validation');

  const schema = z.object({
    companyName: z.string().min(1, valT('required')),
    picName: z.string().min(1, valT('required')),
    picEmail: z.string().email(valT('email_invalid')),
    picPhone: z.string().min(1, valT('required')),
    needs: z.string().min(1, valT('required')),
    count: z.number().min(1, valT('required')).optional(),
    targetDate: z.string().min(1, valT('required')),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useHookForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const serviceName = serviceType === 'team_training' ? 'Team Training' : 'Recruitment';
    const message = buildWhatsAppProposalMessage({
      companyName: data.companyName,
      picName: data.picName,
      needs: data.needs,
      serviceType: serviceName,
    });
    
    const phone = '+6281112345678';
    const cleanPhone = phone.replace(/[^0-9+]/g, '');
    const waPhone = cleanPhone.startsWith('+') ? cleanPhone.slice(1) : cleanPhone;
    const url = `https://wa.me/${waPhone}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-surface p-6 rounded-xl border shadow-sm">
      <h3 className="text-2xl font-bold font-montserrat text-primary mb-4">{t('form_title')}</h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="companyName">{t('form_company')}</Label>
          <Input id="companyName" {...register('companyName')} />
          {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>}
        </div>

        <div>
          <Label htmlFor="picName">{t('form_pic')}</Label>
          <Input id="picName" {...register('picName')} />
          {errors.picName && <p className="text-red-500 text-sm mt-1">{errors.picName.message}</p>}
        </div>

        <div>
          <Label htmlFor="picEmail">{t('form_pic_email')}</Label>
          <Input id="picEmail" type="email" {...register('picEmail')} />
          {errors.picEmail && <p className="text-red-500 text-sm mt-1">{errors.picEmail.message}</p>}
        </div>

        <div>
          <Label htmlFor="picPhone">{t('form_pic_phone')}</Label>
          <Input id="picPhone" type="tel" {...register('picPhone')} />
          {errors.picPhone && <p className="text-red-500 text-sm mt-1">{errors.picPhone.message}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="needs">{t('form_needs')}</Label>
        <Textarea id="needs" {...register('needs')} rows={4} />
        {errors.needs && <p className="text-red-500 text-sm mt-1">{errors.needs.message}</p>}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="count">
            {serviceType === 'team_training' ? t('form_participants') : t('form_positions')}
          </Label>
          <Input id="count" type="number" min="1" {...register('count', { valueAsNumber: true })} />
          {errors.count && <p className="text-red-500 text-sm mt-1">{errors.count.message}</p>}
        </div>

        <div>
          <Label htmlFor="targetDate">{t('form_target_date')}</Label>
          <Input id="targetDate" type="date" {...register('targetDate')} />
          {errors.targetDate && <p className="text-red-500 text-sm mt-1">{errors.targetDate.message}</p>}
        </div>
      </div>

      <Button type="submit" className="w-full bg-brand-primary text-white">
        {commonT('cta_submit')}
      </Button>
    </form>
  );
}
