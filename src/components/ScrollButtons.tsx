import { useState, useEffect } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

export default function ScrollButtons() {
  const [showButtons, setShowButtons] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = document.body.scrollHeight - window.innerHeight
      setShowButtons(scrollY > 300 && scrollY < maxScroll - 100)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }

  if (!showButtons) return null

  return (
    <div className="fixed right-6 bottom-24 md:bottom-28 z-50 flex flex-col gap-3">
      <button
        onClick={scrollToTop}
        aria-label="Nach oben scrollen"
        className="bg-copper hover:bg-copper-dark text-black p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
      >
        <ChevronUp size={24} />
      </button>
      <button
        onClick={scrollToBottom}
        aria-label="Nach unten scrollen"
        className="bg-copper hover:bg-copper-dark text-black p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
      >
        <ChevronDown size={24} />
      </button>
    </div>
  )
}