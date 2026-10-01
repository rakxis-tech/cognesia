'use client'

import React from 'react'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { MessageSquare, ShieldCheck } from 'lucide-react'
import { LogoMark } from './LogoMark'
import type { Locale } from '@/i18n/config'

export function Footer() {
  const locale = useLocale() as Locale
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#121c2a] dark:bg-inverse-surface border-t border-outline/20 text-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 flex flex-col gap-12">
        {/* Top Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & Legal Disclaimer Column (Col 1-2) */}
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} className="flex items-center gap-3.5 mb-4">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                <LogoMark className="w-9 h-9" />
              </div>
              <div>
                <div className="flex items-baseline tracking-tight">
                  <span className="font-heading text-xl font-bold text-white tracking-tighter">
                    COG
                  </span>
                  <span className="font-heading text-xl font-bold text-[#F58A31] tracking-tight">
                    NESIA
                  </span>
                </div>
                <p className="text-[9px] tracking-[0.2em] font-semibold text-gray-400 uppercase">
                  Psychology &amp; Talent Solution
                </p>
              </div>
            </Link>

            <p className="text-sm text-gray-300 max-w-sm mb-4 leading-relaxed">
              Lembaga layanan konsultasi psikologi, asesmen talenta, dan intervensi organisasi berbasis bukti ilmiah dengan izin HIMPSI resmi.
            </p>

            <div className="text-xs text-gray-400 space-y-1">
              <p>
                <strong>Hub Utama:</strong> Gedung Graha Talentia Lt. 3, Jakarta Selatan &amp; Mitra Klinik Regional Surabaya.
              </p>
              <p>
                <strong>Hotline Darurat Krisis:</strong> 119 (Sistem Medis Nasional)
              </p>
            </div>
          </div>

          {/* Links Col 1: Layanan Utama */}
          <div>
            <p className="font-heading text-sm font-bold text-white mb-4 uppercase tracking-wider">
              Layanan Utama
            </p>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <Link className="hover:text-amber-300 transition-colors" href={`/${locale}/asesmen`}>
                  Asesmen Psikologi
                </Link>
              </li>
              <li>
                <Link className="hover:text-amber-300 transition-colors" href={`/${locale}/konseling`}>
                  Konseling Klinis &amp; Sebaya
                </Link>
              </li>
              <li>
                <Link className="hover:text-amber-300 transition-colors" href={`/${locale}/team-training`}>
                  Team Training &amp; Workshop
                </Link>
              </li>
              <li>
                <Link className="hover:text-amber-300 transition-colors" href={`/${locale}/recruitment`}>
                  Talent Recruitment
                </Link>
              </li>
              <li>
                <Link className="hover:text-amber-300 transition-colors" href={`/${locale}/seminar`}>
                  Seminar &amp; Keynote
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Col 2: Bantuan & Regulasi */}
          <div>
            <p className="font-heading text-sm font-bold text-white mb-4 uppercase tracking-wider">
              Bantuan &amp; Regulasi
            </p>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <Link className="hover:text-amber-300 transition-colors" href={`/${locale}#faq`}>
                  Pertanyaan Umum (FAQ)
                </Link>
              </li>
              <li>
                <Link className="hover:text-amber-300 transition-colors" href={`/${locale}/privasi`}>
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link className="hover:text-amber-300 transition-colors" href={`/${locale}/syarat`}>
                  Syarat &amp; Ketentuan
                </Link>
              </li>
              <li>
                <a className="hover:text-amber-300 transition-colors" href="tel:119">
                  Hotline Darurat Krisis (119)
                </a>
              </li>
              <li>
                <span className="text-gray-400">
                  Kode Etik HIMPSI
                </span>
              </li>
            </ul>
          </div>

          {/* Links Col 3: Customer Support */}
          <div>
            <p className="font-heading text-sm font-bold text-white mb-4 uppercase tracking-wider">
              Customer Support
            </p>
            <div className="space-y-3 text-xs text-gray-300">
              <p>Konsultasi admin &amp; konfirmasi transfer dibuka Senin - Sabtu (08.00 - 20.00 WIB):</p>
              <a
                className="inline-flex items-center gap-2 bg-[#F58A31] text-[#14508A] font-bold px-4 py-2 rounded-full text-xs hover:bg-[#e07722] transition-colors"
                href="https://wa.me/628888295582"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: 08888295582</span>
              </a>
              <p className="text-[11px] text-gray-400">Email: halo@cognesia.id</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {currentYear} Cognesia Psychology &amp; Talent Solution. All rights reserved. Terdaftar &amp; Berizin HIMPSI.</p>
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Server Status: Aman &amp; Terenkripsi</span>
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>SIPP Active Verified</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
