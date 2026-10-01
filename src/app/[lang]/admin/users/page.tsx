'use client'

import { DataTable } from '@/components/shared'
import { Plus } from 'lucide-react'

export default function AdminUsersPage() {
  const mockUsers = [
    { name: 'Admin Utama', email: 'admin@cognesia.id', role: 'super_admin' },
    { name: 'Dr. Psikolog', email: 'psikolog@cognesia.id', role: 'facilitator' }
  ]

  const columns = [
    { header: 'Nama', accessorKey: 'name' },
    { header: 'Email', accessorKey: 'email' },
    { 
      header: 'Peran', 
      cell: (item: any) => (
        <span className="inline-flex rounded-full bg-blue-100 px-2 text-xs font-semibold leading-5 text-blue-800">
          {item.role}
        </span>
      )
    },
    { header: 'Aksi', cell: () => <button className="text-brand-primary text-sm">Kelola</button> }
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Kelola Pengguna</h1>
        <button className="flex items-center gap-2 rounded bg-brand-primary px-4 py-2 text-sm font-medium text-white hover:bg-brand-primary/90">
          <Plus className="h-4 w-4" /> Undang Pengguna
        </button>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
        <DataTable columns={columns} data={mockUsers} searchable searchPlaceholder="Cari email atau nama..." />
      </div>
    </div>
  )
}
