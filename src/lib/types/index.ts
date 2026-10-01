// Locale
export type Locale = 'id' | 'en'

// Bilingual content helper
export interface BilingualText {
  id: string
  en: string
}

// User & Auth
export type UserRole = 'client' | 'facilitator' | 'admin' | 'super_admin'
export interface User {
  id: string
  email: string
  phone: string
  name: string
  role: UserRole
  avatar_url?: string
  created_at: string
}

// Services
export type ServiceType = 'assessment' | 'counseling' | 'team_training' | 'recruitment' | 'seminar'
export interface Service {
  id: string
  type: ServiceType
  name: BilingualText
  description: BilingualText
  icon: string
  slug: string
  is_active: boolean
}

// Assessment
export type AssessmentCategory = 'education' | 'industry'
export interface AssessmentTest {
  id: string
  category: AssessmentCategory
  name: BilingualText
  description: BilingualText
  target_audience: BilingualText
  duration_minutes: number
  format: BilingualText
  price_individual: number | null // null = contact for pricing
  price_institution: number | null
  is_active: boolean
  sort_order: number
}

// Counseling
export type CounselingType = 'psychologist' | 'peer_counselor'
export type SessionFormat = 'online_zoom' | 'offline'

// Facilitator (counselors)
export interface Facilitator {
  id: string
  name: string
  type: CounselingType
  photo_url: string
  background: BilingualText
  specializations: BilingualText[]
  languages: string[]
  price_per_session: number
  sipp_number?: string  // Only for psychologists
  himpsi_member?: boolean
  is_featured: boolean
  is_active: boolean
  disclaimer?: BilingualText  // Required for peer counselors
}

// Speaker (for seminars)
export interface Speaker {
  id: string
  name: string
  slug: string
  photo_url: string
  bio: BilingualText
  topics: BilingualText[]
  experience: BilingualText
  languages: string[]
  is_active: boolean
}

// Availability / Scheduling
export interface TimeSlot {
  id: string
  facilitator_id?: string
  speaker_id?: string
  date: string  // YYYY-MM-DD
  start_time: string  // HH:mm
  end_time: string    // HH:mm
  is_available: boolean
  is_blocked: boolean
}

// Booking
export type BookingStatus = 'pending_payment' | 'pending_verification' | 'confirmed' | 'completed' | 'expired' | 'cancelled'
export interface Booking {
  id: string
  invoice_number: string
  client_name: string
  client_email: string
  client_phone: string
  client_age?: number
  service_type: ServiceType
  counseling_type?: CounselingType
  facilitator_id?: string
  speaker_id?: string
  session_format: SessionFormat
  date: string
  start_time: string
  end_time: string
  complaint_category?: string
  complaint_description?: string
  status: BookingStatus
  amount: number
  zoom_link?: string
  location?: string
  payment_deadline: string
  notes?: string
  created_at: string
  updated_at: string
}

// Invoice
export interface Invoice {
  id: string
  booking_id: string
  invoice_number: string
  publisher_name: string  // 'Cognesia' by default, configurable
  client_name: string
  service_description: BilingualText
  facilitator_name: string
  date: string
  time: string
  session_format: SessionFormat
  amount: number
  bank_name: string
  bank_account_number: string
  bank_account_name: string
  payment_deadline: string
  status: BookingStatus
  created_at: string
}

// Testimonial
export interface Testimonial {
  id: string
  name: string
  role: BilingualText
  content: BilingualText
  photo_url?: string
  is_active: boolean
  sort_order: number
}

// FAQ
export interface FAQ {
  id: string
  question: BilingualText
  answer: BilingualText
  category?: string
  sort_order: number
  is_active: boolean
}

// Clinical Config (Triage)
export type TriageResult = 'normal' | 'sensitive' | 'high_risk'
export interface ComplaintCategory {
  id: string
  name: BilingualText
  triage_result: TriageResult
  is_active: boolean
}

export interface ClinicalConfig {
  id: string
  complaint_categories: ComplaintCategory[]
  peer_counselor_disclaimer: BilingualText
  high_risk_message: BilingualText
  crisis_numbers: { name: string; number: string }[]
  validation_status: 'draft' | 'approved'
  validated_by?: string
  validated_at?: string
}

// Settings
export interface SiteSettings {
  whatsapp_numbers: Record<string, string>  // service type -> number
  whatsapp_default: string
  bank_name: string
  bank_account_number: string
  bank_account_name: string
  invoice_publisher_name: string
  payment_deadline_hours: number
  reschedule_deadline_hours: number
  max_reschedule_count: number
  refund_policy: BilingualText
  reschedule_policy: BilingualText
  payment_policy: BilingualText
  trust_section_visible: boolean
  company_name?: string
  practice_license?: string
  offline_location?: BilingualText
  slot_hold_minutes: number
}

// Audit Log
export interface AuditLog {
  id: string
  user_id: string
  action: string
  entity_type: string
  entity_id: string
  details: string
  created_at: string
}

// Booking form data (multi-step)
export interface CounselingFormData {
  // Step 1
  name: string
  email: string
  phone: string
  age: number | null
  complaint_category: string
  complaint_description: string
  consent_privacy: boolean
  consent_informed: boolean
  // Step 2
  counseling_type: CounselingType | null
  triage_result: TriageResult | null
  // Step 3
  facilitator_id: string | null
  auto_assign: boolean
  // Step 4
  date: string | null
  time_slot_id: string | null
  session_format: SessionFormat | null
  // Step 5 (generated)
  invoice_number?: string
}

// Assessment form data
export interface AssessmentFormData {
  name: string
  email: string
  phone: string
  booker_type: 'individual' | 'institution'
  institution_name?: string
  participant_count: number
  preferred_date: string
  notes?: string
  test_id: string
  category: AssessmentCategory
}

// Seminar form data
export interface SeminarFormData {
  event_name: string
  institution: string
  location_type: 'online' | 'offline'
  location_detail?: string
  estimated_participants: number
  speaker_id: string
  date: string
  time_slot_id: string
}

// Training/Recruitment form data
export interface ProposalFormData {
  company_name: string
  pic_name: string
  pic_email: string
  pic_phone: string
  needs: string
  participant_count?: number
  position_count?: number
  target_date: string
  service_type: 'team_training' | 'recruitment'
}
