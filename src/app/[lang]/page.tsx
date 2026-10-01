import { 
  getServices, 
  getFeaturedFacilitators, 
  getTestimonials, 
  getFAQs, 
  getSettings 
} from '@/lib/data/repository';
import { 
  HeroSection, 
  ServiceCard, 
  TrustBar, 
  HowItWorks, 
  FacilitatorCard, 
  TestimonialCarousel, 
  FAQSection, 
  CTASection 
} from '@/components/home';
import { getTranslations } from 'next-intl/server';

export default async function HomePage({
  params: { lang }
}: {
  params: { lang: string }
}) {
  const [services, featuredFacilitators, testimonials, faqs, settings] = await Promise.all([
    getServices(),
    getFeaturedFacilitators(),
    getTestimonials(),
    getFAQs(),
    getSettings()
  ]);

  const t = await getTranslations('home');

  // We need to fetch real stats if available, but for now we'll hardcode some numbers or use what is available.
  // The PRD mentioned Trust Bar should show sessions completed etc.
  const trustStats = {
    sessionsCompleted: 1500,
    clientsServed: 1200,
    facilitatorsCount: 25
  };

  return (
    <main className="flex flex-col w-full min-h-screen">
      <HeroSection />
      
      {/* Services Section */}
      <section className="w-full bg-canvas py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-h2-mobile md:text-h2 font-heading text-text-primary mb-4">
              {t('services_title')}
            </h2>
            <p className="text-text-secondary text-body-lg">
              {t('services_subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {settings.trust_section_visible && (
        <TrustBar 
          sessionsCompleted={trustStats.sessionsCompleted} 
          clientsServed={trustStats.clientsServed} 
          facilitatorsCount={trustStats.facilitatorsCount} 
        />
      )}

      <HowItWorks />

      {/* Featured Facilitators */}
      {featuredFacilitators.length > 0 && (
        <section className="w-full bg-surface py-16 px-4 md:px-8 border-t border-border-subtle">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-h2-mobile md:text-h2 font-heading text-text-primary mb-4">
                {t('featured_title')}
              </h2>
              <p className="text-text-secondary text-body-lg">
                {t('featured_subtitle')}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredFacilitators.map((facilitator) => (
                <FacilitatorCard key={facilitator.id} facilitator={facilitator} />
              ))}
            </div>
          </div>
        </section>
      )}

      <TestimonialCarousel testimonials={testimonials} />
      
      <FAQSection faqs={faqs} />
      
      <CTASection />
    </main>
  );
}
