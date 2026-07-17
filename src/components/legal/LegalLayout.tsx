import { Link } from 'react-router-dom'

function LegalLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <main className="relative z-10 px-6 md:px-10 py-32 md:py-40">
        <div className="mx-auto max-w-[760px]">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-copper transition-colors duration-300 mb-10"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 4 6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Zurück zur Startseite
          </Link>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-12">{title}</h1>
          <div className="space-y-8 text-white/70 leading-relaxed text-[15px] md:text-base">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl md:text-2xl font-medium tracking-tight text-white mb-4">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  )
}

export { LegalLayout, Section }
