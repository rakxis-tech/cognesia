'use client'

import { DataTable } from '@/components/shared'
import { Plus } from 'lucide-react'

export default function AdminKontenPage() {
  const faqData = [
    { question: 'Bagaimana cara booking?', category: 'Umum' },
    { question: 'Apakah bisa reschedule?', category: 'Layanan' }
  ]

  const columns = [
    { header: 'Pertanyaan', accessorKey: 'question' },
    { header: 'Kategori', accessorKey: 'category' },
    { header: 'Aksi', cell: () => <button className="text-brand-primary text-sm">Edit</button> }
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Kelola Konten</h1>
      
      <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">FAQ</h2>
          <button className="flex items-center gap-2 rounded bg-brand-primary px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-primary/90">
            <Plus className="h-4 w-4" /> Tambah FAQ
          </button>
        </div>
        
        <DataTable columns={columns} data={faqData} />
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
        <h2 className="text-lg font-semibold mb-4">Testimoni</h2>
        <p className="text-sm text-gray-500">Gunakan form ini untuk mengelola testimoni yang tampil di halaman depan.</p>
        {/* Placeholder for testimonials */}
      </div>
    </div>
  )
}
