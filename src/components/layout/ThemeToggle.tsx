'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun, Monitor } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle bg-canvas text-text-secondary"
        aria-label="Toggle theme"
      >
        <Sun className="h-[18px] w-[18px]" />
      </button>
    )
  }

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark')
    else if (theme === 'dark') setTheme('system')
    else setTheme('light')
  }

  const icon =
    theme === 'dark' ? (
      <Moon className="h-[18px] w-[18px]" />
    ) : theme === 'light' ? (
      <Sun className="h-[18px] w-[18px]" />
    ) : (
      <Monitor className="h-[18px] w-[18px]" />
    )

  const label =
    theme === 'dark'
      ? 'Dark mode'
      : theme === 'light'
        ? 'Light mode'
        : 'System theme'

  return (
    <button
      onClick={cycleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle bg-canvas text-text-secondary transition-colors hover:bg-surface hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
      aria-label={label}
      title={label}
    >
      {icon}
    </button>
  )
}
