'use client'

import { DataTable } from '@/components/shared'
import { Plus } from 'lucide-react'

export default function AdminFasilitatorPage() {
  const mockData = [
    { name: 'Dr. Jane Doe', type: 'Psikolog', active: true },
    { name: 'Budi Santoso', type: 'Konselor Sebaya', active: true }
  ]

  const columns = [
    { header: 'Nama', accessorKey: 'name' },
    { header: 'Tipe', accessorKey: 'type' },
    { 
      header: 'Status', 
      cell: (item: any) => (
        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
          Aktif
        </span>
      )
    },
    { 
      header: 'Aksi', 
      cell: () => <button className="text-brand-primary text-sm hover:underline">Edit</button> 
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Kelola Fasilitator & Speaker</h1>
        <button className="flex items-center gap-2 rounded bg-brand-primary px-4 py-2 text-sm font-medium text-white hover:bg-brand-primary/90">
          <Plus className="h-4 w-4" /> Tambah Baru
        </button>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
        <DataTable columns={columns} data={mockData} searchable searchPlaceholder="Cari fasilitator..." />
      </div>
    </div>
  )
}
