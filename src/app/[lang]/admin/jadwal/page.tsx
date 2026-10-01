'use client'

import { EmptyState } from '@/components/shared'
import { Calendar as CalendarIcon } from 'lucide-react'

export default function AdminJadwalPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Kelola Jadwal</h1>
      
      <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
        <div className="mb-4 flex gap-4">
          <select className="rounded border p-2 text-sm">
            <option>Semua Fasilitator</option>
          </select>
          <button className="rounded bg-brand-primary px-4 py-2 text-sm font-medium text-white hover:bg-brand-primary/90">
            Tambah Slot Jadwal
          </button>
        </div>
        
        <div className="h-[500px] border rounded bg-gray-50 dark:bg-gray-900/50 flex items-center justify-center">
          <EmptyState title="Tampilan Kalender Placeholder" icon={<CalendarIcon className="h-12 w-12" />} />
        </div>
      </div>
    </div>
  )
}
