'use client'

export default function AdminLayananPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Kelola Layanan</h1>
      
      <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
        <p className="text-gray-500 mb-4">Edit detail layanan, harga, dan deskripsi.</p>
        
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex space-x-8">
            <button className="border-brand-primary text-brand-primary whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">Asesmen</button>
            <button className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">Konseling</button>
            <button className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">Lainnya</button>
          </nav>
        </div>

        <div className="py-6">
          <div className="p-4 border rounded-lg dark:border-gray-700 mb-4 flex justify-between items-center">
            <div>
              <h3 className="font-medium">Tes Kesiapan Sekolah</h3>
              <p className="text-sm text-gray-500">Kategori: Pendidikan</p>
            </div>
            <button className="text-brand-primary text-sm font-medium">Edit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
