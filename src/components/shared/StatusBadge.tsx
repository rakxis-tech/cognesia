import { type BookingStatus } from '@/lib/types'
import { cn } from '@/lib/utils'

export function StatusBadge({ status }: { status: BookingStatus }) {
  const statusStyles: Record<BookingStatus, string> = {
    pending_payment: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200',
    pending_verification: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200',
    confirmed: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200',
    completed: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200',
    expired: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
    cancelled: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200',
  }

  const statusLabels: Record<BookingStatus, string> = {
    pending_payment: 'Menunggu Pembayaran',
    pending_verification: 'Menunggu Verifikasi',
    confirmed: 'Terkonfirmasi',
    completed: 'Selesai',
    expired: 'Kedaluwarsa',
    cancelled: 'Dibatalkan',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        statusStyles[status]
      )}
    >
      {statusLabels[status]}
    </span>
  )
}
