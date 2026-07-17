import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: '01',
    title: 'Beratung',
    description: 'Persönliches Gespräch vor Ort. Wir analysieren Ihre Räumlichkeiten, hören Ihre Wünsche und entwickeln erste Konzepte.',
    icon: '💬',
    image: '/images/bath-2.jpg',
  },
  {
    number: '02',
    title: 'Planung',
    description: 'Detaillierte 3D-Visualisierung und Materialauswahl. Sie sehen Ihr Projekt photorealistisch, bevor wir beginnen.',
    icon: '📐',
    image: '/images/tile-6.jpg',
  },
  {
    number: '03',
    title: 'Verlegung',
    description: 'Präzise Handarbeit mit modernster Technik. Termingerecht, sauber und mit dem Auge fürs Detail.',
    icon: '🔨',
    image: '/images/kitchen.jpg',
  },
]

function Process() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const stepsContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const container = stepsContainerRef.current
    if (!section || !container) return

    const stepElements = container.querySelectorAll('.process-step')

    gsap.set(stepElements, { opacity: 0, x: 100 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=3000',
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    })

    stepElements.forEach((step, index) => {
      tl.to(step, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
      }, index * 1)
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="prozess" className="relative bg-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-20">
          <div className="text-xs font-medium tracking-widest uppercase text-copper mb-4">Unser Weg</div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight max-w-4xl">
            Unser Weg zur Perfektion.
          </h2>
        </div>

        <div ref={stepsContainerRef} className="space-y-32">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="process-step grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className={`order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="text-8xl font-light text-copper/20 mb-4">{step.number}</div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">{step.title}</h3>
                <p className="text-lg text-white/60 leading-relaxed">{step.description}</p>
              </div>

              <div className={`order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="aspect-square rounded-3xl bg-neutral-900 border border-white/10 flex items-center justify-center overflow-hidden">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover opacity-80" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
