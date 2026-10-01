'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  Settings, 
  FileText, 
  HeartHandshake, 
  Menu,
  X,
  ClipboardList,
  ShieldAlert,
  UsersRound
} from 'lucide-react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const t = useTranslations('dashboard.admin')
  const locale = useLocale()
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navItems = [
    { href: `/${locale}/admin`, icon: LayoutDashboard, label: 'Dashboard' },
    { href: `/${locale}/admin/booking`, icon: ClipboardList, label: t('booking_management') },
    { href: `/${locale}/admin/jadwal`, icon: Calendar, label: t('schedule_management') },
    { href: `/${locale}/admin/fasilitator`, icon: Users, label: t('facilitator_management') },
    { href: `/${locale}/admin/layanan`, icon: HeartHandshake, label: t('service_management') },
    { href: `/${locale}/admin/konten`, icon: FileText, label: t('content_management') },
    { href: `/${locale}/admin/klinis`, icon: ShieldAlert, label: t('clinical_management') },
    { href: `/${locale}/admin/pengaturan`, icon: Settings, label: t('settings') },
    { href: `/${locale}/admin/users`, icon: UsersRound, label: t('users') },
  ]

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-950">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 transform bg-white border-r border-gray-200 transition-transform duration-200 ease-in-out dark:bg-gray-900 dark:border-gray-800 lg:static lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200 dark:border-gray-800">
          <span className="text-xl font-bold text-brand-primary">Admin Panel</span>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="p-4 space-y-1 h-[calc(100vh-4rem)] overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || (item.href !== `/${locale}/admin` && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-brand-primary/10 text-brand-primary dark:bg-brand-primary/20" 
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                )}
                onClick={() => setSidebarOpen(false)}
              >
                <Icon className={cn("h-5 w-5", isActive ? "text-brand-primary" : "text-gray-400")} />
                {item.label}
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top header */}
        <header className="h-16 flex items-center gap-4 px-4 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800 shrink-0">
          <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-6 w-6 text-gray-500" />
          </button>
          <div className="text-sm text-gray-500">
            {/* Breadcrumbs can go here */}
            Admin / {navItems.find(i => pathname === i.href || (i.href !== `/${locale}/admin` && pathname.startsWith(i.href)))?.label || 'Dashboard'}
          </div>
        </header>

        {/* Page content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </div>
      </main>
    </div>
  )
}
