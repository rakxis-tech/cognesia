'use client'

import React from 'react'
import { MessageSquare, Check } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#14508A] to-[#0b3259] text-white relative overflow-hidden" id="institusi">
      {/* Decorative Graphic Background */}
      <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#F58A31]/20 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <div className="max-w-2xl text-left">
            <span className="px-3.5 py-1 rounded-full bg-[#F58A31] text-[#14508A] text-xs font-bold uppercase tracking-wider inline-block mb-4">
              Konsultasi Terbuka
            </span>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">
              Siap Mengambil Langkah Pertama Bersama Cognesia?
            </h2>
            <p className="text-white/80 font-body text-sm md:text-base leading-relaxed">
              Baik Anda mencari ruang aman untuk kesehatan mental diri, penjurusan studi anak, atau merancang transformasi talenta korporat berskala ratusan karyawan. Tim ahli kami siap mendampingi.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-white/70">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#F58A31]" /> Respon CS WhatsApp Cepat
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#F58A31]" /> Format Pesan Terstruktur
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto flex-shrink-0">
            <a
              href="https://wa.me/628888295582?text=Halo%20Admin%20Cognesia,%20saya%20ingin%20jadwalkan%20konsultasi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F58A31] hover:bg-[#e07722] text-[#14508A] font-bold text-sm px-8 py-4 rounded-full shadow-orange-glow transition-all duration-200 active:scale-95 text-center"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Chat WhatsApp: 08888295582</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
