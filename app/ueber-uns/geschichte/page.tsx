import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Timeline } from "@/components/timeline";

export default function Geschichte() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Geschichte der Deutschen Zukunftspartei</h1>
      
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Unsere Vision seit Gründung</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground">
            Die Deutsche Zukunftspartei wurde mit dem Ziel gegründet, eine nachhaltige und 
            gerechte Zukunft für alle Bürgerinnen und Bürger zu gestalten. Unsere Geschichte 
            ist geprägt von wichtigen Meilensteinen und dem kontinuierlichen Einsatz für 
            unsere Werte.
          </p>
        </CardContent>
      </Card>

      <Timeline items={[
        {
          year: "2020",
          title: "Gründung der Partei",
          description: "Zusammenschluss engagierter Bürgerinnen und Bürger zur Gründung der Deutschen Zukunftspartei."
        },
        {
          year: "2021",
          title: "Erste Wahlteilnahme",
          description: "Erfolgreiche Teilnahme an den ersten Kommunalwahlen in mehreren Bundesländern."
        },
        {
          year: "2022",
          title: "Programmentwicklung",
          description: "Verabschiedung des umfassenden Parteiprogramms mit Fokus auf Nachhaltigkeit und soziale Gerechtigkeit."
        },
        {
          year: "2023",
          title: "Bundesweite Expansion",
          description: "Aufbau von Landesverbänden in allen Bundesländern und stetig wachsende Mitgliederzahlen."
        }
      ]} />
    </div>
  );
}