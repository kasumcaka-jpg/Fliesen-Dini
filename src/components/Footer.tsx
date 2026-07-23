import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { readPrefs, type CookiePrefs } from './legal/cookiePrefs'

function Footer() {
  const [prefs, setPrefs] = useState<CookiePrefs>(() => readPrefs())
  const [showMap, setShowMap] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const current = readPrefs()
      setPrefs(current)
      const canLoad = current.functional || current.marketing
      setShowMap((prev) => (prev ? canLoad : canLoad))
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="bg-neutral-900 border-t border-white/10 pt-16 px-6">
      <div className="max-w-7xl mx-auto mb-16">
        <h4 className="text-sm font-medium tracking-widest uppercase text-white/80 mb-6">Standort</h4>
        <div className="w-full overflow-hidden rounded-2xl border border-white/10 aspect-[16/9] md:aspect-[21/9]">
          {showMap ? (
            <iframe
              title="Fliesen DINI Standort"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1118.326586701563!2d10.76293723369998!3d48.19035967596016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479c1e5f2d2476d9%3A0x3b5662f1215a50cd!2sFliesen%20Dini!5e0!3m2!1sde!2sde!4v1784314227110!5m2!1sde!2sde"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-neutral-800/50 text-white/40 text-sm">
              Kartenansicht wird nach Cookie-Zustimmung geladen.
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <img src="/logo.png" alt="Fliesen DINI Logo" className="h-8 w-auto object-contain" />
            <span className="text-lg font-semibold tracking-widest uppercase">Fliesen DINI</span>
          </div>
          <p className="text-white/60 max-w-md leading-relaxed mb-6">
            Ihr Meisterbetrieb für hochwertige Fliesen- und Natursteinarbeiten in Schwabmünchen und Augsburg. Qualität, die bleibt.
          </p>
          <p className="text-sm text-white/40">
            Heinrich-Heine-Str. 14, 86830 Schwabmünchen
          </p>
        </div>

        <div>
          <h4 className="text-sm font-medium tracking-widest uppercase text-white/80 mb-6">Navigation</h4>
          <nav className="flex flex-col gap-3">
            {['Leistungen', 'Prozess', 'Referenzen', 'Kontakt'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-white/60 hover:text-copper transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="text-sm font-medium tracking-widest uppercase text-white/80 mb-6">Rechtliches</h4>
          <nav className="flex flex-col gap-3">
            <Link to="/impressum" className="text-sm text-white/60 hover:text-copper transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="text-sm text-white/60 hover:text-copper transition-colors">Datenschutz</Link>
            <Link to="/agb" className="text-sm text-white/60 hover:text-copper transition-colors">AGB</Link>
            <Link to="/cookie-einstellungen" className="text-sm text-white/60 hover:text-copper transition-colors">Cookie-Einstellungen</Link>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Fliesen DINI. Alle Rechte vorbehalten.
        </p>
        <p className="text-xs text-white/40">
          Design by Avan Web Agency.
        </p>
      </div>
    </footer>
  )
}

function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 z-[100] bg-neutral-900/90 backdrop-blur-lg border border-white/10 rounded-2xl p-5 max-w-md">
      <h3 className="text-sm font-medium text-white mb-2">Cookie-Einstellungen</h3>
      <p className="text-xs text-white/60 mb-4 leading-relaxed">
        Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
      </p>
      <div className="flex gap-3">
        <button
          onClick={handleAccept}
          className="flex-1 bg-copper hover:bg-copper-dark text-black text-sm font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Akzeptieren
        </button>
        <button
          onClick={handleDecline}
          className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Ablehnen
        </button>
      </div>
    </div>
  )
}

export { Footer, CookieBanner }
