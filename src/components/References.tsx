import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { title: 'Bad modernisiert', location: 'Schwabmünchen', image: '/images/bath-1.jpg' },
  { title: 'Küche Naturstein', location: 'Augsburg', image: '/images/kitchen.jpg' },
  { title: 'Fliesen im Wohnbereich', location: 'Königsbrunn', image: '/images/tile-1.jpg' },
  { title: 'Treppe & Geländer', location: 'Bobingen', image: '/images/tile-2.jpg' },
]

function ClipRevealCard({ project }: { project: typeof projects[0] }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const beforeRef = useRef<HTMLDivElement>(null)
  const afterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    const beforeEl = beforeRef.current
    const afterEl = afterRef.current
    if (!card || !beforeEl || !afterEl) return

    const ctx = gsap.context(() => {
      gsap.set(beforeEl, { clipPath: 'inset(0 50% 0 50%)' })
      gsap.set(afterEl, { clipPath: 'inset(0 50% 0 50%)' })

      gsap.to(beforeEl, {
        clipPath: 'inset(0 0% 0 0%)',
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=80',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.to(afterEl, {
        clipPath: 'inset(0 0% 0 0%)',
        duration: 1.2,
        delay: 0.3,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=80',
          toggleActions: 'play none none reverse',
        },
      })
    }, card)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={cardRef}
      className="relative aspect-[4/3] rounded-2xl bg-neutral-900 border border-white/10 overflow-hidden group"
      style={{ perspective: '1000px' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900" />

      <div
        ref={beforeRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      <div className="absolute bottom-0 inset-x-0 p-6 z-10">
        <h3 className="text-lg font-medium text-white mb-1">{project.title}</h3>
        <p className="text-sm text-white/60">{project.location}</p>
      </div>

      <div className="absolute top-4 right-4 bg-copper/20 backdrop-blur-sm border border-copper/30 rounded-full px-3 py-1 z-10">
        <span className="text-xs text-copper font-medium tracking-wider uppercase">Referenz</span>
      </div>
    </div>
  )
}

function References() {
  return (
    <section id="referenzen" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="text-xs font-medium tracking-widest uppercase text-copper mb-4">Referenzen</div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight max-w-4xl">
            Aus Alt mach Neu. Mit Stil.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ClipRevealCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default References
