'use client'

import { DataTable, StatusBadge } from '@/components/shared'
import { Booking } from '@/lib/types'
import { Download } from 'lucide-react'

export default function AdminBookingPage() {
  const mockData: Partial<Booking>[] = [
    { invoice_number: 'INV-123', client_name: 'Budi', service_type: 'counseling', status: 'pending_verification', date: '2026-10-01' },
    { invoice_number: 'INV-124', client_name: 'Siti', service_type: 'assessment', status: 'confirmed', date: '2026-10-02' }
  ]

  const columns = [
    { header: 'Invoice', accessorKey: 'invoice_number' },
    { header: 'Nama Klien', accessorKey: 'client_name' },
    { header: 'Layanan', accessorKey: 'service_type' },
    { header: 'Tanggal', accessorKey: 'date' },
    { 
      header: 'Status', 
      cell: (item: any) => <StatusBadge status={item.status} /> 
    },
    { 
      header: 'Aksi', 
      cell: () => <button className="text-brand-primary text-sm hover:underline">Detail</button> 
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Kelola Booking</h1>
        <button className="flex items-center gap-2 rounded bg-white px-4 py-2 text-sm font-medium border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <Download className="h-4 w-4" /> Export CSV
        </button>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
        <DataTable columns={columns} data={mockData} searchable filterable searchPlaceholder="Cari nama, email, invoice..." />
      </div>
    </div>
  )
}
