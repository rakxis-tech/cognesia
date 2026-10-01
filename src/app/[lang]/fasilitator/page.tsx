'use client'

import { useTranslations } from 'next-intl'
import { Calendar, User, FileText } from 'lucide-react'
import { EmptyState } from '@/components/shared'

export default function FacilitatorDashboardPage() {
  const t = useTranslations('dashboard.facilitator')
  
  // Mock data per requirements
  const mockSessions = [
    { id: '1', date: '2026-10-05', time: '10:00', clientName: 'Jane Smith', category: 'Kecemasan', desc: 'Sering merasa cemas saat presentasi' },
    { id: '2', date: '2026-10-06', time: '14:00', clientName: 'Budi Santoso', category: 'Karir', desc: 'Kebingungan memilih jalur karir' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t('title')}</h1>
        <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
          {t('edit_profile')}
        </button>
      </div>

      <div className="mb-4 rounded bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">
        Note: {t('pending_approval')}
      </div>
      
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-xl bg-white p-6 shadow-sm dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
          <h2 className="mb-4 text-lg font-semibold flex items-center gap-2">
            <Calendar className="h-5 w-5 text-brand-primary" />
            {t('upcoming')}
          </h2>
          
          <div className="space-y-4">
            {mockSessions.length > 0 ? mockSessions.map(s => (
              <div key={s.id} className="flex flex-col sm:flex-row gap-4 rounded-lg border border-gray-100 p-4 dark:border-gray-800">
                <div className="sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-100 pb-4 sm:pb-0 sm:pr-4 dark:border-gray-800">
                  <p className="font-semibold">{s.date}</p>
                  <p className="text-sm text-gray-500">{s.time} WIB</p>
                </div>
                <div className="sm:w-2/3">
                  <p className="font-medium text-gray-900 dark:text-white">{s.clientName}</p>
                  <p className="text-sm text-brand-primary mt-1">{s.category}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{s.desc}</p>
                </div>
              </div>
            )) : (
              <EmptyState title="Tidak ada sesi mendatang" />
            )}
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
          <h2 className="mb-4 text-lg font-semibold flex items-center gap-2">
            <FileText className="h-5 w-5 text-brand-primary" />
            Catatan Sesi
          </h2>
          <p className="text-sm text-gray-500 mb-4">Pilih sesi untuk melihat dan mengisi catatan (Fitur akan datang)</p>
          <div className="rounded-lg bg-gray-50 p-4 text-center text-sm text-gray-500 dark:bg-gray-800/50">
            Pilih sesi di sebelah kiri
          </div>
        </div>
      </div>
    </div>
  )
}
