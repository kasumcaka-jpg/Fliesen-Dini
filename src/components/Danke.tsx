function Danke() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-copper text-6xl mb-8">✓</div>
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
          Danke für Ihre Anfrage!
        </h1>
        <p className="text-lg text-white/60 mb-8 leading-relaxed">
          Wir haben Ihre Nachricht erhalten und freuen uns, Ihr Projekt in Schwabmünchen umzusetzen zu dürfen.
        </p>
        <p className="text-white/60 mb-8">
          Eine Bestätigung haben wir auch an Ihre E-Mail-Adresse gesendet. Wir melden uns innerhalb von 24 Stunden mit einem Terminvorschlag zurück – oft auch schon am selben Tag.
        </p>
        <div className="bg-neutral-900/50 rounded-2xl p-6 mb-8">
          <p className="text-white/80 mb-2">
            <strong>Noch Fragen?</strong> Rufen Sie uns direkt an:
          </p>
          <a href="tel:+491729872148" className="text-copper text-xl font-medium hover:underline">
            0172 / 987 2148
          </a>
        </div>
        <a
          href="/"
          className="inline-block bg-copper hover:bg-copper-dark text-black font-medium py-3 px-8 rounded-xl transition-all duration-300"
        >
          Zur Startseite zurückkehren
        </a>
      </div>
    </section>
  )
}

export default Danke