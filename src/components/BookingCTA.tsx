import { useState, useEffect } from 'react'
import { readPrefs } from './legal/cookiePrefs'

function BookingCTA() {
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const serviceLabel =
      {
        fliesenverlegung: 'Großformatfliesen',
        badsanierung: 'Badsanierung & Komplettbäder',
        naturstein: 'Naturstein (Küche, Treppen)',
        fugen: 'Fugenspezialist',
        beratung: 'Allgemeine Beratung',
      }[formData.service] || 'Nicht angegeben'

    const payload = new FormData()
    payload.append('name', formData.name)
    payload.append('phone', formData.phone)
    payload.append('email', formData.email)
    payload.append('service', serviceLabel)
    payload.append('message', formData.message)
    payload.append('_subject', 'Neue Website-Anfrage')

    try {
      // Formspree: E-Mails werden direkt an info@fliesen-dini.de geschickt
      const response = await fetch('https://formspree.io/f/mzdneqrg', {
        method: 'POST',
        body: payload,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ service: '', name: '', phone: '', email: '', message: '' })
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        const data = await response.json()
        setError(data?.errors?.[0]?.message || 'Senden fehlgeschlagen – bitte erneut versuchen.')
      }
    } catch (err) {
      setError('Verbindungsfehler – prüfen Sie Internetzugang.')
    }
  }

  return (
    <section id="kontakt" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-neutral-900/50 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="text-xs font-medium tracking-widest uppercase text-copper mb-4">Kontakt</div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">Projekt starten.</h2>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              Lassen Sie uns gemeinsam Ihr Traumbad oder Ihre Wunschküche verwirklichen. Kostenlose
              Beratung vor Ort in Schwabmünchen und Umgebung.
            </p>

            <div className="space-y-4 text-white/60">
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-copper">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+491729872148" className="hover:text-copper transition-colors">
                  0172 / 987 2148
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-copper">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a href="mailto:info@fliesen-dini.de" className="hover:text-copper transition-colors">
                  info@fliesen-dini.de
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-copper">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Heinrich-Heine-Str. 14, 86830 Schwabmünchen</span>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Service</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-copper transition-colors"
                  required
                >
                  <option value="">Wählen Sie einen Service</option>
                  <option value="fliesenverlegung">Großformatfliesen</option>
                  <option value="badsanierung">Badsanierung & Komplettbäder</option>
                  <option value="naturstein">Naturstein (Küche, Treppen)</option>
                  <option value="fugen">Fugenspezialist</option>
                  <option value="beratung">Allgemeine Beratung</option>
                </select>
              </div>

              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Max Mustermann"
                  className="w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-copper transition-colors"
                  required
                />
              </div>

              {/* Telefonnummer */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Telefonnummer</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+49 123 456 789"
                  className="w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-copper transition-colors"
                  required
                />
              </div>

              {/* E‑Mail */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">E‑Mail‑Adresse</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="max@example.com"
                  className="w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-copper transition-colors"
                  required
                />
              </div>

              {/* Nachricht */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 mb-1">Nachricht</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Beschreiben Sie Ihre Idee, Wünsche, Fragen oder besondere Anforderungen..."
                  rows={6}
                  className="w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-copper transition-colors"
                  required
                />
              </div>

              {/* Fehleranzeige */}
              {error && <p className="text-red-400 text-sm">{error}</p>}

              {/* Button */}
              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-copper hover:bg-copper-dark text-black font-medium py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitted ? '✅ Danke für Ihre Anfrage!' : 'Anfrage senden'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatsAppButton() {
  const [prefs, setPrefs] = useState<{ marketing: boolean }>(() => {
    const p = readPrefs()
    return { marketing: p.marketing }
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const current = readPrefs()
      setPrefs({ marketing: current.marketing })
    }, 500)
    return () => clearInterval(interval)
  }, [])

  if (!prefs.marketing) return null

  return (
    <a
      href="https://wa.me/491729872148"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[96px] right-4 md:bottom-8 md:right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="WhatsApp Nachricht"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>
  )
}

export { BookingCTA, WhatsAppButton }