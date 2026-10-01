'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'
import type { Locale } from '@/i18n/config'

interface FacilitatorCardProps {
  id?: string
  name: string
  title: string
  sipp: string
  rating: number
  sessionCount: number
  bio: string
  tags: string[]
  availability: 'today' | 'tomorrow' | 'available'
  imageUrl: string
  locale: Locale
}

export function FacilitatorCard({
  id = 'f1',
  name,
  title,
  sipp,
  rating,
  sessionCount,
  bio,
  tags,
  availability,
  imageUrl,
  locale,
}: FacilitatorCardProps) {
  return (
    <div className="bg-surface-container-lowest dark:bg-gray-900 rounded-3xl p-6 shadow-ambient border border-outline-variant/30 dark:border-gray-800 flex flex-col justify-between hover:shadow-interactive transition-all duration-200">
      <div>
        {/* Header Card: Image & Availability Tag */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface-container mb-5">
          <Image
            src={imageUrl}
            alt={name}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
          {availability === 'today' ? (
            <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-emerald-500/90 text-white text-[11px] font-bold backdrop-blur-sm flex items-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Tersedia Hari Ini
            </span>
          ) : (
            <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-surface-container-high/90 dark:bg-gray-800 text-on-surface dark:text-white text-[11px] font-bold backdrop-blur-sm shadow-sm">
              Slot Besok
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-xs text-outline mb-1">
          <span className="font-semibold text-secondary dark:text-blue-400">
            {sipp}
          </span>
          <span className="flex items-center gap-0.5 text-amber-500 font-bold">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>{rating.toFixed(2)} ({sessionCount}+ sesi)</span>
          </span>
        </div>

        <h3 className="font-heading text-lg font-bold text-on-surface dark:text-white">
          {name}
        </h3>
        <p className="text-xs text-[#F58A31] font-semibold mb-3">
          {title}
        </p>
        <p className="text-xs text-outline mb-4 leading-relaxed">
          {bio}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-md bg-surface-container-low dark:bg-gray-800 text-[11px] text-on-surface-variant dark:text-gray-300 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <Link
        href={`/${locale}/konseling/booking`}
        className="w-full py-2.5 px-4 rounded-full bg-surface-container dark:bg-gray-800 hover:bg-[#14508A] hover:text-white text-on-surface dark:text-white font-semibold text-xs text-center transition-all duration-200"
      >
        Lihat Profil &amp; Jadwal
      </Link>
    </div>
  )
}
