import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface CardData {
  title: string
  description: string
  icon: string
  span?: string
  image?: string
}

const cards: CardData[] = [
  {
    title: 'Großformatfliesen',
    description: 'Fugenlose Optik für moderne Räume. Präzise Verlegung bis 320x160 cm.',
    icon: '▣',
    span: 'md:col-span-2',
    image: '/images/tile-3.jpg',
  },
  {
    title: 'Badsanierung',
    description: 'Komplettbäder aus einer Hand. Planung, Fliesen, Installation.',
    icon: '⬢',
    image: '/images/bath-1.jpg',
  },
  {
    title: 'Naturstein',
    description: 'Küchenarbeitsplatten, Treppen und Fassaden in Marmor & Granit.',
    icon: '◆',
    span: 'md:row-span-2',
    image: '/images/kitchen.jpg',
  },
  {
    title: 'Fugenspezialist',
    description: 'Unsichtbare Fugen, dauerhaft sauber. Epoxidharz & Silikon.',
    icon: '◇',
    image: '/images/tile-4.jpg',
  },
  {
    title: '3D-Planung',
    description: 'Sehen Sie Ihr Bad vor dem Bau in photorealistischer Qualität.',
    icon: '◎',
    span: 'md:col-span-2',
    image: '/images/3d-planung.jpg',
  },
]

function BentoCard({ card }: { card: CardData }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setMousePosition({ x, y })
    }

    const handleMouseEnter = () => {
      gsap.to(card, {
        rotateY: 5,
        rotateX: -5,
        duration: 0.5,
        ease: 'power3.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.5,
        ease: 'power3.out',
      })
      setMousePosition({ x: 0, y: 0 })
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    gsap.fromTo(
      card,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  return (
    <div
      ref={cardRef}
      className={`group relative bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-copper/30 ${card.span || ''}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      {card.image && (
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${card.image})` }} />
      )}
      <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors duration-500" />

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(248,166,53,0.15), transparent 40%)`,
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        <div>
          <div className="text-4xl mb-4 text-copper">{card.icon}</div>
          <h3 className="text-2xl font-medium tracking-tight mb-3">{card.title}</h3>
          <p className="text-white/60 text-sm leading-relaxed">{card.description}</p>
        </div>

        <div className="mt-8 flex items-center gap-2 text-copper text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Mehr erfahren</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transform group-hover:translate-x-1 transition-transform">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}

function BentoGrid() {
  return (
    <section id="leistungen" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20">
        <div className="text-xs font-medium tracking-widest uppercase text-copper mb-4">Expertise</div>
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight max-w-4xl">
          Meisterhaftes Handwerk trifft modernstes Design.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
        {cards.map((card) => (
          <BentoCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  )
}

export default BentoGrid
