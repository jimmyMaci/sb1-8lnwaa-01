import { ProgramHero } from "@/components/program/program-hero";
import { ProgramSection } from "@/components/program/program-section";
import { ProgramDownload } from "@/components/program/program-download";

export default function ProgramPage() {
  return (
    <div className="min-h-screen">
      <ProgramHero />
      <div className="container py-12 space-y-20">
        <ProgramSection
          id="preamble"
          title="Präambel"
          content="Die BürgerFreundlichePartei, im Weiteren BFREI genannt, setzt sich dafür ein, dass alle Bürgerinnen und Bürger die Möglichkeit haben, aktiv an politischen Entscheidungsprozessen auf allen Ebenen teilzunehmen. Wir glauben an eine demokratische Gesellschaft, in der jede Stimme zählt und jeder Mensch die Chance hat, seine Meinung und Wünsche in die Politik einzubringen. Unser Ziel ist es, eine transparente, inklusive und partizipative Demokratie zu fördern und sicherzustellen, dass alle Entscheidungen bürgerfreundlich sind."
        />
        
        <ProgramSection
          id="grundsaetze"
          title="1. Grundsätze der BFREI"
          subsections={[
            {
              title: "1.1 Direkte Demokratie",
              content: "Die BFREI fordert die Einführung direkter Demokratie auf allen Ebenen: kommunal, regional, national und europäisch. Bürger sollen durch Volksentscheide und Bürgerbegehren aktiv in politische Entscheidungen eingebunden werden."
            },
            {
              title: "1.2 Bürgerfreundlichkeit",
              content: "Alle politischen Entscheidungen müssen im besten Interesse der Bürger getroffen werden, ihre Lebensqualität verbessern und ihre Rechte und Freiheiten respektieren. Bürgerfreundlichkeit ist das zentrale Leitprinzip unserer Partei."
            },
            {
              title: "1.3 Transparenz und Rechenschaftspflicht",
              content: "Alle Entscheidungen und Abstimmungen innerhalb der Partei und der von ihr getragenen politischen Vertretungen müssen transparent und nachvollziehbar sein. Bürger können jederzeit die Aktivitäten ihrer Stellvertreter überprüfen."
            }
          ]}
        />

        <ProgramSection
          id="ziele"
          title="2. Politische Ziele"
          subsections={[
            {
              title: "2.1 Steuerpolitik",
              content: "Wir setzen uns für die Senkung von Steuern und die Abschaffung veralteter und unnötiger Steuerarten ein, um die finanzielle Belastung der Bürger zu reduzieren und ein gerechteres Steuersystem zu schaffen."
            },
            {
              title: "2.2 Bildung und Innovation",
              content: "Die BFREI fordert eine signifikante Erhöhung der Mittel für das Bildungssystem und die Modernisierung des Schulsystems. Wir setzen uns für die Förderung von Innovation und Technologie ein, um die Wettbewerbsfähigkeit Deutschlands zu steigern."
            },
            {
              title: "2.3 Soziale Gerechtigkeit",
              content: "Wir setzen uns für die Förderung der sozialen Gerechtigkeit ein, um die Chancengleichheit zu verbessern und soziale Ungleichheiten abzubauen."
            },
            {
              title: "2.4 Umwelt- und Klimaschutz",
              content: "Die BFREI unterstützt nachhaltige Umwelt- und Klimaschutzmaßnahmen, um die natürlichen Ressourcen zu schützen und eine lebenswerte Umwelt für zukünftige Generationen zu sichern."
            },
            {
              title: "2.5 Gesundheitssystem",
              content: "Wir streben eine umfassende Verbesserung des Gesundheitssystems an, um eine hochwertige und für alle zugängliche medizinische Versorgung sicherzustellen."
            },
            {
              title: "2.6 Digitalisierung",
              content: "Die BFREI fördert den flächendeckenden Ausbau der digitalen Infrastruktur, um die digitale Teilhabe aller Bürger zu gewährleisten und die Grundlage für eine moderne Wirtschaft zu schaffen."
            },
            {
              title: "2.7 Sicherheit",
              content: "Die BFREI arbeitet an der Stärkung der inneren Sicherheit durch effektive Maßnahmen zur Kriminalitätsbekämpfung und den Ausbau der Polizeipräsenz."
            }
          ]}
        />

        <ProgramSection
          id="struktur"
          title="3. Organisatorische Struktur"
          subsections={[
            {
              title: "3.1 Mitgliedschaft",
              content: "Mitglied der BFREI kann jede natürliche Person werden, die das 16. Lebensjahr vollendet hat und die Ziele der Partei unterstützt. Die Aufnahme erfolgt auf schriftlichen Antrag."
            },
            {
              title: "3.2 Organe der Partei",
              content: "Die Organe der Partei sind der Parteitag, der Vorstand und die Stellvertreterversammlung. Der Parteitag ist das höchste Organ und findet mindestens einmal jährlich statt."
            },
            {
              title: "3.3 Stellvertreterprinzip",
              content: "Bürger, die nicht persönlich an allen Entscheidungen teilnehmen möchten, haben die Möglichkeit, ihre Stimme an einen oder mehrere Stellvertreter zu delegieren."
            }
          ]}
        />

        <ProgramSection
          id="schlusswort"
          title="4. Schlusswort"
          content="Die BFREI steht für eine neue Art der politischen Teilhabe, in der jede Stimme zählt und jeder Bürger die Möglichkeit hat, seine Zukunft mitzugestalten. Gemeinsam schaffen wir eine transparente, gerechte und nachhaltige Gesellschaft für alle. Ihre Stimme zählt!"
        />

        <ProgramDownload />
      </div>
    </div>
  );
}