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
    <section className="py-8 bg-surface-container-lowest dark:bg-gray-900 border-y border-outline-variant/20 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center divide-y lg:divide-y-0 lg:divide-x divide-outline-variant/20 dark:divide-gray-800">
          {trustFeatures.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="flex items-center gap-3 pt-3 lg:pt-0 px-2">
                <Icon className={`w-7 h-7 flex-shrink-0 ${item.color}`} />
                <div>
                  <p className="text-xs font-bold text-on-surface dark:text-white">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-outline">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Monochrome Client Logos */}
        <div className="mt-8 pt-6 border-t border-outline-variant/10 dark:border-gray-800 flex flex-wrap items-center justify-between gap-6 opacity-60 dark:opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
          <span className="text-xs font-semibold tracking-wider text-outline uppercase">
            Mitra Kolaboratif:
          </span>
          {partnerLogos.map((partner, idx) => (
            <span
              key={idx}
              className="font-heading text-sm md:text-base font-bold tracking-tight text-on-surface dark:text-gray-200"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
