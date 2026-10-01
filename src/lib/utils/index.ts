import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { Locale } from '@/i18n/config'

/**
 * Merge Tailwind CSS classes with clsx
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format number as Indonesian Rupiah
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Format date string to localized format
 */
export function formatDate(date: string, locale: Locale = 'id'): string {
  const d = new Date(date)
  return new Intl.DateTimeFormat(locale === 'id' ? 'id-ID' : 'en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d)
}

/**
 * Format short date (DD MMM YYYY)
 */
export function formatDateShort(date: string, locale: Locale = 'id'): string {
  const d = new Date(date)
  return new Intl.DateTimeFormat(locale === 'id' ? 'id-ID' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(d)
}

/**
 * Format time string (HH:mm)
 */
export function formatTime(time: string): string {
  return time.replace(/^(\d{2}):(\d{2}).*$/, '$1:$2')
}

/**
 * Generate invoice number (INV-YYYYMMDD-XXXX)
 */
export function generateInvoiceNumber(): string {
  const now = new Date()
  const dateStr = now.toISOString().slice(0, 10).replace(/-/g, '')
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
  return `INV-${dateStr}-${random}`
}

/**
 * Build WhatsApp deeplink URL
 */
export function buildWhatsAppUrl(phone: string, message: string): string {
  const cleanPhone = phone.replace(/[^0-9+]/g, '')
  // Remove leading + for wa.me format
  const waPhone = cleanPhone.startsWith('+') ? cleanPhone.slice(1) : cleanPhone
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${waPhone}?text=${encodedMessage}`
}

/**
 * Build pre-filled WhatsApp message for counseling booking
 */
export function buildWhatsAppBookingMessage(data: {
  invoiceNumber: string
  name: string
  service: string
  facilitator: string
  date: string
  time: string
  format: string
  amount: number
}): string {
  return [
    `Halo Cognesia,`,
    ``,
    `Saya ingin mengirim bukti transfer untuk booking:`,
    `No. Invoice: ${data.invoiceNumber}`,
    `Nama: ${data.name}`,
    `Layanan: ${data.service}`,
    `Fasilitator: ${data.facilitator}`,
    `Jadwal: ${data.date}, ${data.time}`,
    `Format: ${data.format}`,
    `Nominal: ${formatCurrency(data.amount)}`,
    ``,
    `Terima kasih.`,
  ].join('\n')
}

/**
 * Build pre-filled WhatsApp message for assessment order
 */
export function buildWhatsAppAssessmentMessage(data: {
  name: string
  testName: string
  category: string
  participantCount: number
  preferredDate: string
}): string {
  return [
    `Halo Cognesia,`,
    ``,
    `Saya ingin memesan asesmen:`,
    `Nama: ${data.name}`,
    `Tes: ${data.testName}`,
    `Kategori: ${data.category}`,
    `Jumlah Peserta: ${data.participantCount}`,
    `Tanggal Preferensi: ${data.preferredDate}`,
    ``,
    `Mohon informasi lebih lanjut. Terima kasih.`,
  ].join('\n')
}

/**
 * Build pre-filled WhatsApp message for seminar booking
 */
export function buildWhatsAppSeminarMessage(data: {
  eventName: string
  speaker: string
  institution: string
  date: string
  participants: number
}): string {
  return [
    `Halo Cognesia,`,
    ``,
    `Saya ingin mengundang speaker untuk acara:`,
    `Nama Acara: ${data.eventName}`,
    `Speaker: ${data.speaker}`,
    `Institusi: ${data.institution}`,
    `Tanggal: ${data.date}`,
    `Estimasi Peserta: ${data.participants}`,
    ``,
    `Mohon informasi lebih lanjut. Terima kasih.`,
  ].join('\n')
}

/**
 * Build pre-filled WhatsApp message for training/recruitment proposal
 */
export function buildWhatsAppProposalMessage(data: {
  companyName: string
  picName: string
  needs: string
  serviceType: string
}): string {
  return [
    `Halo Cognesia,`,
    ``,
    `Saya ingin mengajukan proposal ${data.serviceType}:`,
    `Perusahaan: ${data.companyName}`,
    `PIC: ${data.picName}`,
    `Kebutuhan: ${data.needs}`,
    ``,
    `Mohon informasi lebih lanjut. Terima kasih.`,
  ].join('\n')
}

/**
 * Get initials from a name
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

/**
 * Create URL-friendly slug
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Get bilingual text based on current locale
 */
export function getBilingualText(
  text: { id: string; en: string },
  locale: Locale
): string {
  return text[locale] || text.id
}

/**
 * Copy text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

/**
 * Format phone number for display
 */
export function formatPhoneDisplay(phone: string): string {
  // Format +628888295582 -> 0888-829-5582
  const clean = phone.replace(/\D/g, '')
  if (clean.startsWith('62')) {
    const local = '0' + clean.slice(2)
    return local.replace(/(\d{4})(\d{3})(\d{4})/, '$1-$2-$3')
  }
  return phone
}
