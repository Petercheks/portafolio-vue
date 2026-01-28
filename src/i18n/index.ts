import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import es from './locales/es.json'

export const SUPPORTED_LOCALES = ['es', 'en'] as const
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number]

const STORAGE_KEY = 'locale'

function normalizeLocale(input: string | null | undefined): SupportedLocale {
  const l = (input ?? '').toLowerCase()
  if (l.startsWith('en')) return 'en'
  if (l.startsWith('es')) return 'es'
  return 'es'
}

export function getInitialLocale(): SupportedLocale {
  const saved = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null
  if (saved) return normalizeLocale(saved)

  const browser = typeof navigator !== 'undefined' ? navigator.language : ''
  return normalizeLocale(browser)
}

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getInitialLocale(),
  fallbackLocale: 'es',
  messages: {
    es,
    en,
  },
})

if (typeof document !== 'undefined') {
  document.documentElement.lang = normalizeLocale(i18n.global.locale.value)
}

export function setLocale(locale: SupportedLocale) {
  const normalized = normalizeLocale(locale)
  i18n.global.locale.value = normalized

  if (typeof document !== 'undefined') document.documentElement.lang = normalized
  if (typeof window !== 'undefined') window.localStorage.setItem(STORAGE_KEY, normalized)
}
