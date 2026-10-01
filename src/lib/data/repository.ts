import { 
  Service, 
  AssessmentTest, 
  Facilitator, 
  Speaker, 
  TimeSlot, 
  Booking, 
  CounselingFormData, 
  Testimonial, 
  FAQ, 
  SiteSettings, 
  ClinicalConfig, 
  ComplaintCategory, 
  TriageResult,
  CounselingType,
  AssessmentCategory
} from '../types';
import { generateInvoiceNumber } from '../utils';

import { services } from './mock/services';
import { tests } from './mock/tests';
import { facilitators } from './mock/facilitators';
import { speakers } from './mock/speakers';
import { availability } from './mock/availability';
import { testimonials } from './mock/testimonials';
import { faqs } from './mock/faqs';
import { settings } from './mock/settings';
import { clinical } from './mock/clinical';

// Simulated DB for bookings
const mockBookings: Booking[] = [];

// Services
export async function getServices(): Promise<Service[]> {
  return services.filter(s => s.is_active);
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  return services.find(s => s.slug === slug && s.is_active) || null;
}

// Assessment
export async function getAssessmentTests(category?: AssessmentCategory): Promise<AssessmentTest[]> {
  let filtered = tests.filter(t => t.is_active);
  if (category) {
    filtered = filtered.filter(t => t.category === category);
  }
  return filtered.sort((a, b) => a.sort_order - b.sort_order);
}

export async function getTestById(id: string): Promise<AssessmentTest | null> {
  return tests.find(t => t.id === id && t.is_active) || null;
}

// Facilitators
export async function getFacilitators(type?: CounselingType): Promise<Facilitator[]> {
  let filtered = facilitators.filter(f => f.is_active);
  if (type) {
    filtered = filtered.filter(f => f.type === type);
  }
  return filtered;
}

export async function getFacilitatorById(id: string): Promise<Facilitator | null> {
  return facilitators.find(f => f.id === id && f.is_active) || null;
}

export async function getFeaturedFacilitators(): Promise<Facilitator[]> {
  return facilitators.filter(f => f.is_active && f.is_featured);
}

// Speakers
export async function getSpeakers(): Promise<Speaker[]> {
  return speakers.filter(s => s.is_active);
}

export async function getSpeakerBySlug(slug: string): Promise<Speaker | null> {
  return speakers.find(s => s.slug === slug && s.is_active) || null;
}

// Availability
export async function getAvailableSlots(facilitatorId?: string, speakerId?: string, date?: string): Promise<TimeSlot[]> {
  let slots = availability.filter(s => s.is_available && !s.is_blocked);
  if (facilitatorId) {
    slots = slots.filter(s => s.facilitator_id === facilitatorId);
  }
  if (speakerId) {
    slots = slots.filter(s => s.speaker_id === speakerId);
  }
  if (date) {
    slots = slots.filter(s => s.date === date);
  }
  return slots;
}

// Bookings
export async function createBooking(data: CounselingFormData): Promise<Booking> {
  const slot = availability.find(s => s.id === data.time_slot_id);
  const facilitator = facilitators.find(f => f.id === data.facilitator_id);
  
  if (!slot) throw new Error('Time slot not found');
  if (!facilitator && !data.auto_assign) throw new Error('Facilitator not found');

  const invoiceNumber = generateInvoiceNumber();
  const amount = facilitator ? facilitator.price_per_session : 150000; // default for auto assign

  const now = new Date();
  const paymentDeadline = new Date(now.getTime() + settings.payment_deadline_hours * 60 * 60 * 1000).toISOString();

  const newBooking: Booking = {
    id: `bkg_${Date.now()}`,
    invoice_number: invoiceNumber,
    client_name: data.name,
    client_email: data.email,
    client_phone: data.phone,
    client_age: data.age || undefined,
    service_type: 'counseling',
    counseling_type: data.counseling_type || undefined,
    facilitator_id: data.facilitator_id || undefined,
    session_format: data.session_format || 'online_zoom',
    date: slot.date,
    start_time: slot.start_time,
    end_time: slot.end_time,
    complaint_category: data.complaint_category,
    complaint_description: data.complaint_description,
    status: 'pending_payment',
    amount: amount,
    payment_deadline: paymentDeadline,
    created_at: now.toISOString(),
    updated_at: now.toISOString()
  };

  mockBookings.push(newBooking);
  
  // Update slot availability
  slot.is_available = false;

  return newBooking;
}

export async function getBookingByInvoice(invoiceNumber: string): Promise<Booking | null> {
  return mockBookings.find(b => b.invoice_number === invoiceNumber) || null;
}

// Content
export async function getTestimonials(): Promise<Testimonial[]> {
  return testimonials.filter(t => t.is_active).sort((a, b) => a.sort_order - b.sort_order);
}

export async function getFAQs(category?: string): Promise<FAQ[]> {
  let filtered = faqs.filter(f => f.is_active);
  if (category) {
    filtered = filtered.filter(f => f.category === category);
  }
  return filtered.sort((a, b) => a.sort_order - b.sort_order);
}

// Settings
export async function getSettings(): Promise<SiteSettings> {
  return settings;
}

// Clinical
export async function getClinicalConfig(): Promise<ClinicalConfig> {
  return clinical;
}

export async function getComplaintCategories(): Promise<ComplaintCategory[]> {
  return clinical.complaint_categories.filter(c => c.is_active);
}

export async function getTriageResult(categoryId: string): Promise<TriageResult> {
  const category = clinical.complaint_categories.find(c => c.id === categoryId);
  if (!category) throw new Error('Category not found');
  return category.triage_result;
}
