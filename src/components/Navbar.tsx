import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

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

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-50 px-6 md:px-10 flex justify-between items-center">
        <a href="#" className="glass-panel flex items-center gap-2 px-5 py-3">
          <img src="/logo.jpg" alt="Fliesen DINI Logo" className="h-7 w-auto object-contain" />
          <span className="text-sm font-semibold tracking-widest uppercase">Fliesen DINI</span>
        </a>

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
            {['Leistungen', 'Prozess', 'Referenzen', 'Kontakt'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-3xl md:text-5xl font-medium tracking-tight text-white hover:text-copper transition-colors duration-300"
                style={{ opacity: 0, transform: 'translateY(20px)' }}
                ref={(el) => {
                  if (el) {
                    gsap.to(el, {
                      opacity: 1,
                      y: 0,
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: 'power3.out',
                    })
                  }
                }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}

export default Navbar
