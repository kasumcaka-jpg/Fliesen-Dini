import { useState } from 'react'
import { LegalLayout } from './LegalLayout'
import {
  readPrefs,
  savePrefs,
  defaultPrefs,
  type CookieCategory,
  type CookiePrefs,
} from './cookiePrefs'

const categories: { key: CookieCategory; label: string; desc: string; locked?: boolean }[] = [
  { key: 'necessary', label: 'Notwendig', desc: 'Grundlegende Funktionen wie Seitennavigation, Sicherheit und Session-Verwaltung. Können nicht deaktiviert werden.', locked: true },
  { key: 'functional', label: 'Funktional', desc: 'Merken von Einstellungen (z. B. Cookie-Auswahl, Sprache) für ein verbessertes Nutzungserlebnis.' },
  { key: 'statistics', label: 'Statistik', desc: 'Anonyme Auswertung der Seitenaufrufe zur Verbesserung des Angebots (z. B. Besucherzahlen).' },
  { key: 'marketing', label: 'Marketing', desc: 'Wiederverwendung von Inhalten für Drittanbieter-Werbung (z. B. Meta/WhatsApp, Google).' },
]

function Toggle({ on, disabled, onChange }: { on: boolean; disabled?: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      disabled={disabled}
      onClick={onChange}
      className={`relative h-6 w-11 rounded-full transition-colors duration-300 ${
        on ? 'bg-copper' : 'bg-white/15'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform duration-300 ${
          on ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  )
}

export default function CookieEinstellungen() {
  const [prefs, setPrefs] = useState<CookiePrefs>(() => readPrefs())
  const [saved, setSaved] = useState(false)

  const update = (key: CookieCategory, value: boolean) => {
    setPrefs((prev) => ({ ...prev, [key]: value }))
    setSaved(false)
  }

  const acceptAll = () => {
    setPrefs({ necessary: true, functional: true, statistics: true, marketing: true })
    setSaved(false)
  }

  const declineAll = () => {
    setPrefs({ ...defaultPrefs })
    setSaved(false)
  }

  const save = () => {
    savePrefs(prefs)
    setSaved(true)
  }

  return (
    <LegalLayout title="Cookie-Einstellungen">
      <p>
        Hier verwalten Sie Ihre Einwilligung für Cookies und Tracking-Tools. Ihre Auswahl wird sofort
        wirksam und ist mit dem Cookie-Consent-Banner auf der Website synchronisiert.
      </p>

      <div className="space-y-4 pt-2">
        {categories.map((cat) => (
          <div
            key={cat.key}
            className="flex items-start justify-between gap-6 border border-white/10 rounded-2xl p-5 bg-neutral-900/40"
          >
            <div>
              <h3 className="text-base font-medium text-white mb-1">{cat.label}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{cat.desc}</p>
            </div>
            <div className="shrink-0 pt-1">
              <Toggle
                on={prefs[cat.key]}
                disabled={cat.locked}
                onChange={() => !cat.locked && update(cat.key, !prefs[cat.key])}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <button
          onClick={acceptAll}
          className="flex-1 bg-copper hover:bg-copper-dark text-black text-sm font-medium py-3 px-4 rounded-lg transition-colors"
        >
          Alle akzeptieren
        </button>
        <button
          onClick={declineAll}
          className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium py-3 px-4 rounded-lg transition-colors"
        >
          Alle ablehnen
        </button>
        <button
          onClick={save}
          className="flex-1 border border-copper/40 text-copper hover:bg-copper/10 text-sm font-medium py-3 px-4 rounded-lg transition-colors"
        >
          Auswahl speichern
        </button>
      </div>

      {saved && (
        <p className="text-copper text-sm pt-2">
          Ihre Einstellungen wurden gespeichert und sind sofort wirksam.
        </p>
      )}
    </LegalLayout>
  )
}
