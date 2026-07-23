import { LegalLayout, Section } from './LegalLayout'

export default function Impressum() {
  return (
    <LegalLayout title="Impressum">
      <Section title="Angaben gemäß § 5 TMG">
        <p>
          Haradin Caka<br />
          Fliesen DINI<br />
          Heinrich-Heine-Str. 14<br />
          86830 Schwabmünchen
        </p>
        <p>
          Telefon: 08232 / 95 60 988<br />
          E-Mail: info@fliesen-dini.de
        </p>
      </Section>

      <Section title="Berufsbezeichnung">
        <p>
          Fliesen-, Platten- und Mosaikleger (Handwerksbetrieb)
        </p>
      </Section>

      <Section title="Zuständige Handwerkskammer">
        <p>
          Handwerkskammer für Schwaben
        </p>
      </Section>

      <Section title="Umsatzsteuer-ID">
        <p>
          [PLATZHALTER – BITTE PRÜFEN] Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG wird nach Eintragung mitgeteilt.
        </p>
      </Section>

      <Section title="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV">
        <p>
          Haradin Caka<br />
          Heinrich-Heine-Str. 14<br />
          86830 Schwabmünchen
        </p>
      </Section>
    </LegalLayout>
  )
}
