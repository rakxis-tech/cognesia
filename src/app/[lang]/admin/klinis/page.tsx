'use client'

export default function AdminKlinisPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Pengaturan Klinis & Triage</h1>
        <div className="flex items-center gap-3">
          <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800">DRAFT</span>
          <button className="rounded bg-brand-primary px-4 py-2 text-sm font-medium text-white hover:bg-brand-primary/90">
            Minta Validasi
          </button>
        </div>
      </div>
      
      <div className="rounded-md bg-amber-50 p-4 border border-amber-200">
        <div className="flex">
          <div className="ml-3">
            <h3 className="text-sm font-medium text-amber-800">Peringatan: Mode Draft</h3>
            <div className="mt-2 text-sm text-amber-700">
              <p>Perubahan pada pengaturan klinis belum aktif. Perlu divalidasi oleh Psikolog Utama sebelum diterapkan ke sistem.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
          <h2 className="text-lg font-semibold border-b pb-2 mb-4">Kategori Keluhan & Triage</h2>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="pb-2">Kategori</th>
                <th className="pb-2">Triage Result</th>
                <th className="pb-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3">Stres Akademik</td>
                <td><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Normal</span></td>
                <td><button className="text-brand-primary">Edit</button></td>
              </tr>
              <tr>
                <td className="py-3">Keinginan Mengakhiri Hidup</td>
                <td><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">High Risk</span></td>
                <td><button className="text-brand-primary">Edit</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
          <h2 className="text-lg font-semibold border-b pb-2 mb-4">Pesan High Risk / Krisis</h2>
          <textarea rows={4} className="w-full rounded border p-3 dark:bg-gray-800 dark:border-gray-700" defaultValue="Kami memahami bahwa Anda mungkin sedang mengalami masa yang sangat sulit..." />
        </div>
      </div>
    </div>
  )
}
