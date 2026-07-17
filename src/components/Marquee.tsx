import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!marqueeRef.current) return

    const content = marqueeRef.current.querySelector('.marquee-content')
    if (!content) return

    const width = content.scrollWidth / 2

    gsap.set(content, { x: 0 })

    gsap.to(content, {
      x: -width,
      duration: 25,
      ease: 'none',
      repeat: -1,
    })
  }, [])

  const text = '✦ MEISTERBETRIEB ✦ GROSSFORMATFLIESEN ✦ ⭐⭐⭐⭐⭐ BEWERTUNGEN ✦ SCHWABMÜNCHEN & AUGSBURG ✦ 3D-PLANUNG ✦ FLIESEN DINI ⭐⭐⭐⭐⭐ ✦ '

  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 bg-neutral-900/50 py-5 z-10">
      <div ref={marqueeRef} className="flex whitespace-nowrap">
        <div className="marquee-content flex items-center">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-white/50 text-sm tracking-widest uppercase mx-4"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Marquee
