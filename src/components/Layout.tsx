import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { Footer, CookieBanner } from './Footer'
import { WhatsAppButton } from './BookingCTA'
import MobileBottomNav from './MobileBottomNav'

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-black text-white pb-24 md:pb-0">
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppButton />
      <MobileBottomNav />
      <CookieBanner />
    </div>
  )
}
