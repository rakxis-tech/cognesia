import React from 'react'

export function LogoMark({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Cognesia Logo Mark"
    >
      {/* Left Brain Hemisphere (Navy) */}
      <path
        d="M58 20C46 20 38 27 34 32C28 32 22 37 20 44C17 50 18 57 21 62C18 68 18 76 23 82C27 88 34 90 38 90C41 95 47 99 58 100V20Z"
        fill="#14508A"
        opacity="0.95"
      />
      <path
        d="M38 42C33 46 32 55 37 60"
        stroke="#FFFFFF"
        strokeLinecap="round"
        strokeWidth="2.5"
      />
      <path
        d="M42 66C38 72 40 80 47 84"
        stroke="#FFFFFF"
        strokeLinecap="round"
        strokeWidth="2.5"
      />
      <path
        d="M50 32C46 36 46 44 52 48"
        stroke="#FFFFFF"
        strokeLinecap="round"
        strokeWidth="2.5"
      />

      {/* Right Gear & Growth Cog (Orange) */}
      <path
        d="M62 20C73 20 81 27 85 32C91 32 97 37 99 44C102 50 101 57 98 62C101 68 101 76 96 82C92 88 85 90 81 90C78 95 72 99 61 100V20H62Z"
        fill="#F58A31"
      />

      {/* Integrated Academic Mortarboard & Silhouette */}
      <path d="M54 46L66 40L78 46L66 52L54 46Z" fill="#FFFFFF" />
      <path
        d="M74 50V58C74 61.5 70.4 64 66 64C61.6 64 58 61.5 58 58V50"
        stroke="#FFFFFF"
        strokeLinecap="round"
        strokeWidth="2"
      />

      {/* Cog Teeth on edge */}
      <rect fill="#F58A31" height="6" rx="2" width="8" x="94" y="48" />
      <rect
        fill="#F58A31"
        height="6"
        rx="2"
        transform="rotate(15 91 66)"
        width="8"
        x="91"
        y="66"
      />
      <rect
        fill="#F58A31"
        height="6"
        rx="2"
        transform="rotate(45 80 82)"
        width="8"
        x="80"
        y="82"
      />
    </svg>
  )
}
