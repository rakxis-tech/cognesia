'use client'

import { Invoice } from '@/lib/types'
import { formatCurrency, formatDate, getBilingualText, buildWhatsAppBookingMessage } from '@/lib/utils'
import { StatusBadge } from './StatusBadge'
import { Copy, Phone } from 'lucide-react'
import { useLocale } from 'next-intl'
import type { Locale } from '@/i18n/config'

export function InvoiceCard({ invoice, settings }: { invoice: Invoice, settings: any }) {
  const locale = useLocale() as Locale

  const handleCopy = () => {
    navigator.clipboard.writeText(invoice.bank_account_number)
  }

  const handleWhatsApp = () => {
    const message = buildWhatsAppBookingMessage({
      invoiceNumber: invoice.invoice_number,
      name: invoice.client_name,
      service: getBilingualText(invoice.service_description, locale),
      facilitator: invoice.facilitator_name,
      date: formatDate(invoice.date, locale),
      time: invoice.time,
      format: invoice.session_format,
      amount: invoice.amount
    })
    window.open(`https://wa.me/${settings.whatsapp_default}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-start justify-between border-b border-gray-100 pb-4 dark:border-gray-800">
        <div>
          <p className="text-sm text-gray-500">Tagihan untuk</p>
          <h3 className="font-semibold text-gray-900 dark:text-white">{invoice.client_name}</h3>
          <p className="mt-1 text-xs text-gray-500">{invoice.invoice_number}</p>
        </div>
        <StatusBadge status={invoice.status} />
      </div>

      <div className="py-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Layanan</span>
          <span className="font-medium">{getBilingualText(invoice.service_description, locale)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Fasilitator</span>
          <span className="font-medium">{invoice.facilitator_name}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Jadwal</span>
          <span className="font-medium">{formatDate(invoice.date, locale)}, {invoice.time}</span>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-4 dark:border-gray-800">
        <div className="flex justify-between items-center mb-4">
          <span className="text-base font-semibold text-gray-900 dark:text-white">Total</span>
          <span className="text-lg font-bold text-brand-primary">{formatCurrency(invoice.amount)}</span>
        </div>

        {invoice.status === 'pending_payment' && (
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800/50 mb-4">
            <p className="text-xs text-gray-500 mb-2">Transfer ke:</p>
            <p className="font-medium text-gray-900 dark:text-white">{invoice.bank_name}</p>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-lg font-semibold tracking-wider text-gray-900 dark:text-white">{invoice.bank_account_number}</p>
              <button onClick={handleCopy} className="text-gray-400 hover:text-gray-600" title="Salin">
                <Copy className="h-4 w-4" />
              </button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">a.n. {invoice.bank_account_name}</p>
          </div>
        )}

        <button
          onClick={handleWhatsApp}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-600"
        >
          <Phone className="h-4 w-4" />
          Kirim Bukti via WhatsApp
        </button>
      </div>
    </div>
  )
}
