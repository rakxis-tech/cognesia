'use client'

import { useTranslations } from 'next-intl'
import { DataTable, StatusBadge, EmptyState } from '@/components/shared'
import { Booking } from '@/lib/types'
import { Video, Calendar } from 'lucide-react'

export default function ClientDashboardPage() {
  const t = useTranslations('dashboard.client')
  
  // Mock data per requirements
  const mockBookings: Booking[] = [
    {
      id: 'bkg_1',
      invoice_number: 'INV-20261001-1234',
      client_name: 'John Doe',
      client_email: 'john@example.com',
      client_phone: '081234567890',
      service_type: 'counseling',
      session_format: 'online_zoom',
      date: '2026-10-05',
      start_time: '10:00',
      end_time: '10:50',
      status: 'confirmed',
      amount: 150000,
      payment_deadline: '2026-10-02T10:00:00Z',
      created_at: '2026-10-01T10:00:00Z',
      updated_at: '2026-10-01T10:00:00Z',
      zoom_link: 'https://zoom.us/j/123456789'
    },
    {
      id: 'bkg_2',
      invoice_number: 'INV-20260928-5678',
      client_name: 'John Doe',
      client_email: 'john@example.com',
      client_phone: '081234567890',
      service_type: 'counseling',
      session_format: 'offline',
      date: '2026-10-10',
      start_time: '13:00',
      end_time: '13:50',
      status: 'pending_payment',
      amount: 250000,
      payment_deadline: '2026-09-29T10:00:00Z',
      created_at: '2026-09-28T10:00:00Z',
      updated_at: '2026-09-28T10:00:00Z',
    },
    {
      id: 'bkg_3',
      invoice_number: 'INV-20260915-9012',
      client_name: 'John Doe',
      client_email: 'john@example.com',
      client_phone: '081234567890',
      service_type: 'assessment',
      session_format: 'online_zoom',
      date: '2026-09-20',
      start_time: '09:00',
      end_time: '11:00',
      status: 'completed',
      amount: 300000,
      payment_deadline: '2026-09-16T10:00:00Z',
      created_at: '2026-09-15T10:00:00Z',
      updated_at: '2026-09-20T11:00:00Z',
    }
  ]

  const columns = [
    { header: t('invoice'), accessorKey: 'invoice_number' as keyof Booking },
    { 
      header: 'Layanan & Tanggal', 
      cell: (b: Booking) => (
        <div>
          <p className="font-medium">{b.service_type === 'counseling' ? 'Konseling' : 'Asesmen'}</p>
          <p className="text-sm text-gray-500">{b.date} • {b.start_time}</p>
        </div>
      ) 
    },
    { 
      header: t('status'), 
      cell: (b: Booking) => <StatusBadge status={b.status} />
    },
    {
      header: 'Aksi',
      cell: (b: Booking) => (
        <div className="flex gap-2">
          {b.status === 'confirmed' && b.session_format === 'online_zoom' && b.zoom_link && (
            <a href={b.zoom_link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 hover:bg-blue-100">
              <Video className="h-3 w-3" /> Zoom
            </a>
          )}
          {(b.status === 'confirmed' || b.status === 'pending_payment') && (
            <button className="inline-flex items-center gap-1 rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200">
              <Calendar className="h-3 w-3" /> {t('reschedule')}
            </button>
          )}
        </div>
      )
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">{t('title')}</h1>
      
      <div className="mb-8 rounded-xl bg-white p-6 shadow-sm dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
        <h2 className="mb-4 text-lg font-semibold">{t('bookings')}</h2>
        
        {mockBookings.length > 0 ? (
          <DataTable columns={columns} data={mockBookings} />
        ) : (
          <EmptyState 
            title={t('no_bookings')}
            icon={<Calendar className="h-12 w-12" />}
          />
        )}
      </div>
    </div>
  )
}
