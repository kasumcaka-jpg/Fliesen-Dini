import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      const words = textRefs.current.filter(Boolean)

      words.forEach((wordEl, index) => {
        if (!wordEl) return

        const text = wordEl.textContent || ''
        wordEl.innerHTML = ''

        const chars = text.split('').map((char) => {
          const span = document.createElement('span')
          span.style.display = 'inline-block'
          span.textContent = char === ' ' ? '\u00A0' : char
          wordEl.appendChild(span)
          return span
        })

        gsap.set(chars, {
          y: 120,
          opacity: 0,
          rotateX: -40,
        })

        gsap.to(chars, {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.03,
          ease: 'power4.out',
          delay: 0.5 + index * 0.2,
        })

        gsap.fromTo(
          wordEl,
          { fontSize: 'clamp(3rem, 22vw, 18rem)' },
          {
            fontSize: 'clamp(2.5rem, 16vw, 14rem)',
            duration: 1.8,
            ease: 'power3.out',
            delay: 0.3 + index * 0.2,
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden z-10"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Hero Typography */}
      <div className="relative z-10 w-full h-full">
        <div
          ref={(el) => { textRefs.current[0] = el }}
          className="absolute text-[12vw] font-medium leading-none tracking-tight uppercase text-white/90"
          style={{ top: '25%', left: '5%' }}
        >
          Meisterhaft
        </div>

        <div
          ref={(el) => { textRefs.current[1] = el }}
          className="absolute text-[12vw] font-medium leading-none tracking-tight uppercase text-copper"
          style={{ top: '45%', right: '5%' }}
        >
          Fliesen
        </div>

        <div
          ref={(el) => { textRefs.current[2] = el }}
          className="absolute text-[12vw] font-medium leading-none tracking-tight uppercase text-white/90"
          style={{ top: '65%', left: '20%' }}
        >
          Gestalten
        </div>
      </div>

      {/* Floating Stat Blocks */}
      <div className="absolute top-32 right-10 md:right-20 z-20 glass-card p-5 hidden md:block">
        <div className="text-3xl font-semibold text-copper">+15</div>
        <div className="text-xs text-white/60 tracking-widest uppercase mt-1">Jahre Erfahrung</div>
      </div>

      <div className="absolute bottom-32 left-10 md:left-20 z-20 glass-card p-5 hidden md:flex items-center gap-3">
        <div className="text-2xl">⭐</div>
        <div>
          <div className="text-sm font-semibold text-white">5.0 Bewertungen</div>
          <div className="text-xs text-white/60">Google & Facebook</div>
        </div>
      </div>

      <div className="absolute bottom-32 right-10 md:right-20 z-20 glass-card p-5 hidden md:block">
        <div className="text-xs text-white/60 tracking-widest uppercase mb-1">Einsatzgebiet</div>
        <div className="text-sm font-medium text-white">Schwabmünchen & Augsburg</div>
      </div>
    </section>
  )
}

export default Hero
