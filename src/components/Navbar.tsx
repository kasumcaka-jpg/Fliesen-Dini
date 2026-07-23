import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [legalOpen, setLegalOpen] = useState(false)
  const ticking = useRef(false)
  const legalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 80)
        ticking.current = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (legalRef.current && !legalRef.current.contains(e.target as Node)) {
        setLegalOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const menuLinks = document.querySelectorAll('.mobile-menu-link')
    if (!menuLinks.length) return

    if (isOpen) {
      gsap.set(menuLinks, { opacity: 0, y: 20 })
      gsap.to(menuLinks, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      })
    } else {
      gsap.set(menuLinks, { opacity: 0, y: 20 })
    }
  }, [isOpen])

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-50 px-6 md:px-10">
        <a
          href="#"
          className={`absolute z-40 flex items-center gap-2 px-5 py-3 glass-panel transition-all duration-500 ease-in-out ${
            scrolled
              ? 'left-6 md:left-10 top-0 scale-100'
              : 'left-1/2 top-[44%] -translate-x-1/2 scale-[1.3] md:scale-[2.4]'
          }`}
          style={{ transformOrigin: 'center' }}
        >
          <img src="/logo.png" alt="Fliesen DINI Logo" className="h-7 w-auto object-contain" />
          <span className="text-sm font-semibold tracking-widest uppercase whitespace-nowrap">Fliesen DINI</span>
        </a>

        <div className="flex justify-end items-center gap-3 relative z-[60]">
          <div className="hidden md:flex glass-panel items-center gap-8 px-2 py-2">
            {['Leistungen', 'Prozess', 'Referenzen', 'Kontakt'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-medium tracking-widest uppercase text-white/70 hover:text-copper transition-colors duration-300 px-3 py-2"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:block relative" ref={legalRef}>
            <button
              onClick={() => setLegalOpen((v) => !v)}
              className="glass-panel text-xs font-medium tracking-widest uppercase text-white/70 hover:text-copper transition-colors duration-300 px-3 py-2 flex items-center gap-1"
              aria-expanded={legalOpen}
              aria-haspopup="true"
            >
              Rechtliches
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-300 ${legalOpen ? 'rotate-180' : ''}`}>
                <path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {legalOpen && (
              <div className="absolute right-0 top-full mt-2 w-52 bg-neutral-900/95 backdrop-blur-lg border border-white/10 rounded-2xl p-2 shadow-xl">
                {[
                  { label: 'Impressum', to: '/impressum' },
                  { label: 'Datenschutz', to: '/datenschutz' },
                  { label: 'AGB', to: '/agb' },
                  { label: 'Cookie-Einstellungen', to: '/cookie-einstellungen' },
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setLegalOpen(false)}
                    className="block px-4 py-2.5 text-sm text-white/70 hover:text-copper hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden glass-panel p-3"
            aria-label="Menu öffnen"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white">
              <line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-6 md:right-10 text-white/70 hover:text-white transition-colors"
            aria-label="Menu schließen"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <line x1="8" y1="8" x2="24" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="24" y1="8" x2="8" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          <nav className="flex flex-col items-center gap-8">
            {['Leistungen', 'Prozess', 'Referenzen', 'Kontakt'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="mobile-menu-link text-3xl md:text-5xl font-medium tracking-tight text-white hover:text-copper transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            <div className="flex flex-col items-center gap-4 mt-6 pt-6 border-t border-white/10">
              {[
                { label: 'Impressum', to: '/impressum' },
                { label: 'Datenschutz', to: '/datenschutz' },
                { label: 'AGB', to: '/agb' },
                { label: 'Cookie-Einstellungen', to: '/cookie-einstellungen' },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium tracking-wide text-white/60 hover:text-copper transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  )
}

export default Navbar
