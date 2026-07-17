export type CookieCategory = 'necessary' | 'functional' | 'statistics' | 'marketing'

export const COOKIE_CONSENT_KEY = 'cookie-consent'
export const COOKIE_PREFS_KEY = 'cookie-prefs'

export type CookiePrefs = Record<CookieCategory, boolean>

export const defaultPrefs: CookiePrefs = {
  necessary: true,
  functional: false,
  statistics: false,
  marketing: false,
}

export function readPrefs(): CookiePrefs {
  try {
    const raw = localStorage.getItem(COOKIE_PREFS_KEY)
    if (raw) return { ...defaultPrefs, ...JSON.parse(raw) }
  } catch {
    /* ignore */
  }
  const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
  if (consent === 'accepted') return { necessary: true, functional: true, statistics: true, marketing: true }
  return { ...defaultPrefs }
}

export function savePrefs(prefs: CookiePrefs) {
  localStorage.setItem(COOKIE_PREFS_KEY, JSON.stringify(prefs))
  const allAccepted = prefs.functional && prefs.statistics && prefs.marketing
  const allDeclined = !prefs.functional && !prefs.statistics && !prefs.marketing
  localStorage.setItem(COOKIE_CONSENT_KEY, allAccepted ? 'accepted' : allDeclined ? 'declined' : 'custom')
}
