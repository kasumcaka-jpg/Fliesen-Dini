import { LegalLayout, Section } from './LegalLayout'
import { Link } from 'react-router-dom'

export default function AGB() {
  return (
    <LegalLayout title="AGB">
      <p className="text-white/50 text-sm">
        Allgemeine Geschäftsbedingungen für den Handwerksbetrieb Fliesen DINI (Haradin Caka).
      </p>

      <Section title="1. Geltungsbereich">
        <p>
          Diese Bedingungen gelten für das Verlegen von Fliesen, Platten und Mosaiken sowie Fugenarbeiten
          in Neu- und Altbauten in der Region Augsburg / Schwabmünchen.
        </p>
      </Section>

      <Section title="2. Vertragsschluss">
        <p>
          Ein Vertrag kommt durch unser Angebot und Ihre Auftragsbestätigung zustande. Mündliche
          Nebenabreden bedürfen der schriftlichen Bestätigung.
        </p>
      </Section>

      <Section title="3. Leistungsbeschreibung">
        <p>
          Gegenstand der Leistung ist die fachgerechte Ausführung der im Angebot aufgeführten
          Fliesen-, Platten- und Mosaikarbeiten sowie Fugenarbeiten nach anerkannten Regeln des Handwerks.
        </p>
      </Section>

      <Section title="4. Preise & Zahlungsbedingungen">
        <p>
          Es gelten die im Angebot vereinbarten Preise. Rechnungen sind innerhalb der angegebenen Frist
          ohne Abzug fällig.
        </p>
      </Section>

      <Section title="5. Gewährleistung / Mängelrecht">
        <p>
          Es gilt die gesetzliche Gewährleistung bzw. das VOB/Bauvertragsrecht, je nach Art des Auftrags.
          Mängel sind unverzüglich nach Entdeckung zu rügen.
        </p>
      </Section>

      <Section title="6. Haftung">
        <p>
          Wir haften im Rahmen der gesetzlichen Bestimmungen. Die Haftung ist auf typische,
          vorhersehbare Schäden begrenzt, soweit nicht Vorsatz oder grobe Fahrlässigkeit vorliegen.
        </p>
      </Section>

      <Section title="7. Kündigung / Rücktritt">
        <p>
          Ein Rücktritt ist nur nach den gesetzlichen Vorschriften zulässig. Bereits erbrachte
          Leistungen werden anteilig vergütet.
        </p>
      </Section>

      <Section title="8. Schlussbestimmungen">
        <p>
          Gerichtsstand ist Augsburg, soweit gesetzlich zulässig. Sollte eine Bestimmung unwirksam sein,
          bleibt die Wirksamkeit der übrigen unberührt (salvatorische Klausel).
        </p>
      </Section>

      <p className="text-white/50 text-sm pt-4">
        Fragen? <Link to="/datenschutz" className="text-copper hover:underline">Zum Datenschutz</Link> oder
        eine <Link to="/impressum" className="text-copper hover:underline">Impressum</Link>.
      </p>
    </LegalLayout>
  )
}
