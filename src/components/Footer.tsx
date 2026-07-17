import { useState, useEffect } from 'react'

function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <img src="/logo.jpg" alt="Fliesen DINI Logo" className="h-8 w-auto object-contain" />
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
            <a href="#" className="text-sm text-white/60 hover:text-copper transition-colors">Impressum</a>
            <a href="#" className="text-sm text-white/60 hover:text-copper transition-colors">Datenschutz</a>
            <a href="#" className="text-sm text-white/60 hover:text-copper transition-colors">AGB</a>
            <a href="#" className="text-sm text-white/60 hover:text-copper transition-colors">Cookie-Einstellungen</a>
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
