'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Eye, EyeOff, Mail } from 'lucide-react'

export default function LoginPage() {
  const t = useTranslations('auth')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-[85vh] bg-background flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md rounded-2xl bg-surface dark:bg-[#1e1f20] p-6 sm:p-8 border border-outline/10 dark:border-[#3c4043] shadow-md">
        <div className="mb-8 text-center">
          <span className="px-3.5 py-1 rounded-full bg-[#14508A]/10 text-[#14508A] dark:text-[#8ab4f8] text-xs font-bold uppercase tracking-wider inline-block mb-3">
            Portal Klien &amp; Fasilitator
          </span>
          <h1 className="mb-2 text-2xl font-bold font-montserrat text-on-surface dark:text-white">{t('login_title')}</h1>
          <p className="text-xs sm:text-sm text-outline">{t('login_subtitle')}</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-outline uppercase tracking-wider">{t('email_label')}</label>
            <input 
              type="email" 
              className="flex h-11 w-full rounded-xl border border-outline/20 dark:border-[#3c4043] bg-canvas dark:bg-[#282a2c] px-3.5 py-2 text-base sm:text-sm text-text-primary dark:text-[#e3e3e3] focus:outline-none focus:ring-2 focus:ring-[#14508A] dark:focus:ring-[#8ab4f8] transition-colors" 
              placeholder="nama@email.com"
              required 
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-semibold text-outline uppercase tracking-wider">{t('password_label')}</label>
              <a href="#" className="text-xs text-[#14508A] dark:text-[#8ab4f8] hover:underline">{t('forgot_password')}</a>
            </div>
            <div className="relative">
              <input 
                type={showPassword ? 'text' : 'password'} 
                className="flex h-11 w-full rounded-xl border border-outline/20 dark:border-[#3c4043] bg-canvas dark:bg-[#282a2c] px-3.5 py-2 pr-11 text-base sm:text-sm text-text-primary dark:text-[#e3e3e3] focus:outline-none focus:ring-2 focus:ring-[#14508A] dark:focus:ring-[#8ab4f8] transition-colors" 
                placeholder="••••••••"
                required 
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface dark:hover:text-white"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <button type="submit" className="w-full rounded-xl bg-[#14508A] hover:bg-[#14508A]/90 dark:bg-[#8ab4f8] dark:text-[#121c2a] dark:hover:bg-[#8ab4f8]/90 px-4 py-3 font-semibold text-white text-sm sm:text-base transition-all shadow-sm">
            {t('login_button')}
          </button>
        </form>

        <div className="mt-4">
          <button type="button" className="w-full flex items-center justify-center gap-2 rounded-xl border border-outline/20 dark:border-[#3c4043] bg-canvas dark:bg-[#282a2c] px-4 py-2.5 font-semibold text-xs sm:text-sm text-on-surface dark:text-[#e3e3e3] hover:bg-surface-alt transition-colors">
            <Mail className="h-4 w-4" />
            {t('magic_link')}
          </button>
        </div>

        <div className="my-6 flex items-center text-xs text-outline before:flex-1 before:border-t before:border-outline/15 before:mr-3 after:flex-1 after:border-t after:border-outline/15 after:ml-3">
          {t('or_login_with')}
        </div>

        <button type="button" disabled className="w-full flex items-center justify-center gap-2 rounded-xl border border-outline/20 dark:border-[#3c4043] bg-canvas dark:bg-[#282a2c] px-4 py-2.5 font-semibold text-xs sm:text-sm text-outline opacity-50 cursor-not-allowed">
          <svg className="h-4 w-4" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          {t('google')}
        </button>

        <p className="mt-6 text-center text-xs text-outline">
          {t('no_account')}
        </p>
      </div>
    </div>
  )
}
