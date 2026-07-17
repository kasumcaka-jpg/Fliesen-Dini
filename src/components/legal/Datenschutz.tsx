import { LegalLayout, Section } from './LegalLayout'

export default function Datenschutz() {
  return (
    <LegalLayout title="Datenschutz">
      <Section title="Verantwortliche Stelle">
        <p>
          Haradin Caka<br />
          Heinrich-Heine-Str. 14<br />
          86830 Schwabmünchen
        </p>
        <p>
          Telefon: 08232 / 95 60 988<br />
          E-Mail: info@fliesen-dini.de
        </p>
      </Section>

      <Section title="Art der erhobenen Daten">
        <p>
          Wir erheben personenbezogene Daten, die Sie uns aktiv mitteilen – insbesondere über
          unser Kontaktformular und die Terminvereinbarung (Name, Kontaktdaten, Nachricht) – sowie
          automatisch durch Server-Logs (IP-Adresse, Datum und Uhrzeit des Abrufs, abgerufene Seite,
          Browsertyp).
        </p>
      </Section>

      <Section title="Zweck der Verarbeitung">
        <p>
          Die Verarbeitung dient der Beantwortung Ihrer Anfragen, der Terminkoordination sowie dem
          Betrieb und der Sicherheit dieser Website.
        </p>
      </Section>

      <Section title="Rechtsgrundlage">
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) sowie Art. 6 Abs. 1 lit. b DSGVO
          ( Vertragsanbahnung) und lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb).
        </p>
      </Section>

      <Section title="Speicherdauer">
        <p>
          Daten werden nur so lange gespeichert, wie es für die genannten Zwecke erforderlich ist oder
          gesetzliche Aufbewahrungsfristen dies vorschreiben.
        </p>
      </Section>

      <Section title="Rechte der betroffenen Person">
        <p>
          Sie haben das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17),
          Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie Widerspruch
          (Art. 21 DSGVO). Zudem steht Ihnen ein Beschwerderecht bei einer Aufsichtsbehörde zu.
        </p>
      </Section>

      <Section title="Eingesetzte Drittanbieter / Tools">
        <ul className="list-disc pl-5 space-y-2">
          <li>Google Fonts (Schriftarten, geladen von Google LLC)</li>
          <li>WhatsApp-Button / -Widget (Meta Platforms Ireland Ltd.)</li>
          <li>Google Maps zur Standortanzeige (Google LLC)</li>
          <li>[PLATZHALTER – BITTE PRÜFEN] Analyse-Tools, sofern eingesetzt</li>
        </ul>
      </Section>

      <Section title="Kontakt für Datenschutzanfragen">
        <p>
          E-Mail: info@fliesen-dini.de
        </p>
      </Section>
    </LegalLayout>
  )
}
