import { 
  HeroSection, 
  TrustBar, 
  ServicesSection,
  HowItWorks, 
  FacilitatorsSection,
  TestimonialCarousel, 
  FAQSection, 
  CTASection 
} from '@/components/home';
import { setRequestLocale } from 'next-intl/server';

export default async function HomePage({
  params,
}: {
  params: { lang: string }
}) {
  const { lang } = await params;
  setRequestLocale(lang);

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust Bar & Legal Accreditation */}
      <TrustBar />

      {/* 3. Main Services Bento Grid (5 Pillars) */}
      <ServicesSection />

      {/* 4. 3-Step Process & Crisis Hotline Banner */}
      <HowItWorks />

      {/* 5. Verified SIPP Psychologists & Facilitators */}
      <FacilitatorsSection />

      {/* 6. Testimonials */}
      <TestimonialCarousel />

      {/* 7. FAQ Accordion */}
      <FAQSection />

      {/* 8. Pre-Footer Callout Banner */}
      <CTASection />
    </div>
  );
}
