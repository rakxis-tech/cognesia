'use client'

import { useTranslations } from 'next-intl'
import { Users, FileText, CheckCircle, Clock } from 'lucide-react'
import { DataTable } from '@/components/shared'

export default function AdminDashboardPage() {
  const t = useTranslations('dashboard.admin')

  const stats = [
    { label: t('new_bookings'), value: '12', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    { label: t('pending_verification'), value: '5', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-100 dark:bg-amber-900/30' },
    { label: t('today_sessions'), value: '8', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900/30' },
    { label: t('total_bookings'), value: '1,240', icon: Users, color: 'text-purple-600', bg: 'bg-purple-100 dark:bg-purple-900/30' },
  ]

  const recentBookings = [
    { id: '1', invoice: 'INV-001', name: 'John Doe', service: 'Konseling', status: 'pending_verification' },
    { id: '2', invoice: 'INV-002', name: 'Jane Smith', service: 'Asesmen', status: 'confirmed' },
  ]

  const columns = [
    { header: 'Invoice', accessorKey: 'invoice' },
    { header: 'Nama', accessorKey: 'name' },
    { header: 'Layanan', accessorKey: 'service' },
    { header: 'Status', accessorKey: 'status' },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t('title')}</h1>
      
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <div key={i} className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
              <div className="flex items-center gap-4">
                <div className={`rounded-lg p-3 ${stat.bg} ${stat.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
        <h2 className="mb-4 text-lg font-semibold">Booking Terbaru</h2>
        <DataTable columns={columns} data={recentBookings} />
      </div>
    </div>
  )
}
