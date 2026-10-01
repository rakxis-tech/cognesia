import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        // Semantic Tokens (Dynamic between Light & Gemini Dark mode)
        canvas: 'var(--bg-canvas)',
        background: 'var(--bg-canvas)',
        surface: 'var(--bg-surface)',
        'surface-container-lowest': 'var(--bg-surface)',
        'surface-container-low': 'var(--bg-surface-alt)',
        'surface-container': 'var(--bg-surface-alt)',
        'surface-container-high': 'var(--bg-surface-hover)',
        'surface-container-highest': 'var(--bg-surface-elevated)',
        'surface-alt': 'var(--bg-surface-alt)',

        'on-surface': 'var(--text-primary)',
        'on-surface-variant': 'var(--text-secondary)',
        'on-background': 'var(--text-primary)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'outline': 'var(--text-muted)',
        'outline-variant': 'var(--border-subtle)',
        'border-subtle': 'var(--border-subtle)',
        'border-strong': 'var(--border-strong)',

        brand: {
          primary: 'var(--brand-primary)',
          'primary-hover': 'var(--brand-primary-hover)',
          accent: 'var(--brand-accent)',
          'accent-hover': 'var(--brand-accent-hover)',
        },

        'text-on-accent': 'var(--text-on-accent)',
        'text-on-primary': 'var(--text-on-primary)',

        // Status
        'status-success': 'var(--status-success)',
        'status-success-bg': 'var(--status-success-bg)',
        'status-warning': 'var(--status-warning)',
        'status-warning-bg': 'var(--status-warning-bg)',
        'status-error': 'var(--status-error)',
        'status-error-bg': 'var(--status-error-bg)',

        // Material Palette Tokens
        primary: {
          DEFAULT: 'var(--brand-primary)',
          container: '#F58A31',
          fixed: '#ffdcc6',
          'fixed-dim': '#ffb784',
        },
        secondary: {
          DEFAULT: '#2b609b',
          container: '#8ebeff',
          fixed: '#d3e3ff',
          'fixed-dim': '#a3c9ff',
        },
        error: {
          DEFAULT: 'var(--status-error)',
          container: 'var(--status-error-bg)',
        },
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'Montserrat', 'sans-serif'],
        body: ['var(--font-plus-jakarta)', 'Inter', 'sans-serif'],
        'display-lg': ['var(--font-space-grotesk)', 'sans-serif'],
        'headline-xl': ['var(--font-space-grotesk)', 'sans-serif'],
        'headline-xl-mobile': ['var(--font-space-grotesk)', 'sans-serif'],
        'headline-lg': ['var(--font-space-grotesk)', 'sans-serif'],
        'headline-md': ['var(--font-space-grotesk)', 'sans-serif'],
        'headline-sm': ['var(--font-space-grotesk)', 'sans-serif'],
        'body-lg': ['var(--font-plus-jakarta)', 'sans-serif'],
        'body-md': ['var(--font-plus-jakarta)', 'sans-serif'],
        'body-sm': ['var(--font-plus-jakarta)', 'sans-serif'],
        'label-lg': ['var(--font-plus-jakarta)', 'sans-serif'],
        'label-md': ['var(--font-plus-jakarta)', 'sans-serif'],
        'label-sm': ['var(--font-plus-jakarta)', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['56px', { lineHeight: '64px', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-lg-mobile': ['32px', { lineHeight: '40px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-xl': ['40px', { lineHeight: '48px', letterSpacing: '-0.02em', fontWeight: '600' }],
        'headline-xl-mobile': ['26px', { lineHeight: '34px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'headline-lg': ['32px', { lineHeight: '40px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '500' }],
        'headline-sm': ['20px', { lineHeight: '28px', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'label-lg': ['14px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '600' }],
        'label-md': ['12px', { lineHeight: '16px', letterSpacing: '0.02em', fontWeight: '600' }],
        'label-sm': ['11px', { lineHeight: '14px', letterSpacing: '0.04em', fontWeight: '700' }],
      },
      boxShadow: {
        ambient: 'var(--shadow-ambient)',
        interactive: 'var(--shadow-interactive)',
        'orange-glow': 'var(--shadow-orange-glow)',
      },
      borderRadius: {
        DEFAULT: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        full: '9999px',
      },
      screens: {
        xs: '420px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
