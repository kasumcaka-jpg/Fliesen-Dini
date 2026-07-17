import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import ScrollButtons from './components/ScrollButtons'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import BentoGrid from './components/BentoGrid'
import References from './components/References'
import Process from './components/Process'
import { BookingCTA } from './components/BookingCTA'
import Impressum from './components/legal/Impressum'
import Datenschutz from './components/legal/Datenschutz'
import AGB from './components/legal/AGB'
import CookieEinstellungen from './components/legal/CookieEinstellungen'
import Danke from './components/Danke'

function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <Marquee />
      <BentoGrid />
      <References />
      <Process />
      <BookingCTA />
    </main>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/danke" element={<Danke />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="/cookie-einstellungen" element={<CookieEinstellungen />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
