'use client'

import React from 'react'
import { BadgeCheck, ShieldAlert, Timer, Users } from 'lucide-react'

export function TrustBar() {
  const trustFeatures = [
    {
      title: 'Berizin Resmi HIMPSI',
      desc: 'SIPP Klinis & Industri',
      icon: BadgeCheck,
      color: 'text-[#14508A] dark:text-blue-400',
    },
    {
      title: 'Kerahasiaan Medis',
      desc: 'Kepatuhan Ketat UU PDP',
      icon: ShieldAlert,
      color: 'text-[#F58A31]',
    },
    {
      title: 'Slot Terkunci 15 Menit',
      desc: 'Kepastian Jadwal Konseling',
      icon: Timer,
      color: 'text-[#14508A] dark:text-blue-400',
    },
    {
      title: '45+ Lembaga Mitra',
      desc: 'Sekolah, BUMN & Swasta',
      icon: Users,
      color: 'text-[#F58A31]',
    },
  ]

  const partnerLogos = [
    'UNIVERSITAS NEGERI',
    'TELKOM INFRASTRUCTURE',
    'BANK MANDIRI SYARIAH',
    'YAYASAN AL-AZHAR',
    'INDOHR ALLIANCE',
  ]

  return (
    <section className="py-7 bg-surface dark:bg-[#1e1f20] border-y border-outline-variant/30 dark:border-[#3c4043]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 items-center">
          {trustFeatures.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="flex items-center gap-2.5 sm:gap-3 p-2 sm:p-3 rounded-xl bg-surface-container-low/60 dark:bg-[#282a2c]/60 border border-outline-variant/20 dark:border-[#3c4043]/60">
                <Icon className={`w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 ${item.color}`} />
                <div className="min-w-0">
                  <p className="text-xs font-bold text-on-surface truncate">
                    {item.title}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-outline truncate">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Monochrome Client Logos */}
        <div className="mt-6 pt-5 border-t border-outline-variant/20 dark:border-[#3c4043] flex flex-wrap items-center justify-between gap-3 sm:gap-6 opacity-70 dark:opacity-50">
          <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-outline uppercase">
            Mitra Kolaboratif:
          </span>
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            {partnerLogos.map((partner, idx) => (
              <span
                key={idx}
                className="font-heading text-xs sm:text-sm md:text-base font-bold tracking-tight text-on-surface-variant hover:text-on-surface transition-colors"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
