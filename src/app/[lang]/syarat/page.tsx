export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">Syarat & Ketentuan</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead">
          Dengan menggunakan layanan Cognesia, Anda menyetujui syarat dan ketentuan berikut.
        </p>

        <h2>1. Layanan</h2>
        <p>Cognesia menyediakan layanan psikologi termasuk asesmen, konseling, training, dan rekrutmen. Layanan ini bukan pengganti penanganan medis darurat.</p>

        <h2>2. Kebijakan Pembayaran</h2>
        <p>Pembayaran harus dilakukan penuh sebelum layanan diberikan. Batas waktu pembayaran adalah 24 jam setelah invoice diterbitkan. Jika tidak ada pembayaran, jadwal akan dibatalkan otomatis.</p>

        <h2>3. Kebijakan Reschedule</h2>
        <p>Perubahan jadwal (reschedule) dapat dilakukan maksimal 1 kali, selambat-lambatnya H-24 jam sebelum sesi dimulai. Perubahan di bawah H-24 tidak diperkenankan dan sesi akan dianggap hangus.</p>

        <h2>4. Kebijakan Pengembalian Dana (Refund)</h2>
        <p>Pengembalian dana hanya berlaku jika sesi dibatalkan oleh pihak Cognesia. Pembatalan oleh klien tidak memenuhi syarat untuk pengembalian dana.</p>

        <h2>5. Disclaimer</h2>
        <p>Layanan konselor sebaya tidak memberikan diagnosis atau terapi klinis. Untuk kondisi krisis atau gangguan klinis, harap hubungi layanan darurat medis atau psikiater profesional.</p>
      </div>
    </div>
  )
}
