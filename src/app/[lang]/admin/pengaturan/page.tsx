'use client'

export default function AdminPengaturanPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Pengaturan Sistem</h1>
        <button className="rounded bg-brand-primary px-4 py-2 text-sm font-medium text-white hover:bg-brand-primary/90">
          Simpan Perubahan
        </button>
      </div>
      
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 dark:bg-gray-900 dark:border-gray-800 space-y-4">
          <h2 className="text-lg font-semibold border-b pb-2">Informasi Pembayaran</h2>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Bank Name</label>
            <input type="text" className="mt-1 w-full rounded border p-2 dark:bg-gray-800 dark:border-gray-700" defaultValue="BCA" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Account Number</label>
            <input type="text" className="mt-1 w-full rounded border p-2 dark:bg-gray-800 dark:border-gray-700" defaultValue="1234567890" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Account Name</label>
            <input type="text" className="mt-1 w-full rounded border p-2 dark:bg-gray-800 dark:border-gray-700" defaultValue="PT Cognesia" />
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 dark:bg-gray-900 dark:border-gray-800 space-y-4">
          <h2 className="text-lg font-semibold border-b pb-2">WhatsApp & Kontak</h2>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Default WhatsApp</label>
            <input type="text" className="mt-1 w-full rounded border p-2 dark:bg-gray-800 dark:border-gray-700" defaultValue="+628123456789" />
          </div>
        </div>
      </div>
    </div>
  )
}
