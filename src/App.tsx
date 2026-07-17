import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import BentoGrid from './components/BentoGrid'
import References from './components/References'
import Process from './components/Process'
import { BookingCTA, WhatsAppButton } from './components/BookingCTA'
import { Footer, CookieBanner } from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <BentoGrid />
        <References />
        <Process />
        <BookingCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  )
}

export default App
