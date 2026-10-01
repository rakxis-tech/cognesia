export const features = {
  payment: { mode: 'manual' as const },
  assessment: { online: false },
  calendar: { sync: false },
  zoom: { auto: false },
  whatsapp: { mode: 'deeplink' as const },
  auth: { google: false, magicLink: true },
  blog: { enabled: false },
  rating: { enabled: false },
}
