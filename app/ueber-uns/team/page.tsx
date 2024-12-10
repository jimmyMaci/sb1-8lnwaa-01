import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Dr. Anna Schmidt",
    role: "Parteivorsitzende",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=60",
    description: "Expertin für Umweltpolitik und nachhaltige Entwicklung"
  },
  {
    name: "Michael Weber",
    role: "Stellvertretender Vorsitzender",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop&q=60",
    description: "Spezialist für Wirtschafts- und Finanzpolitik"
  },
  {
    name: "Sarah Becker",
    role: "Generalsekretärin",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop&q=60",
    description: "Erfahrene Politikerin mit Schwerpunkt Soziales und Bildung"
  }
];

export default function Team() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Unser Team</h1>
      
      <p className="text-lg text-muted-foreground mb-12">
        Die Deutsche Zukunftspartei wird von einem engagierten Team erfahrener 
        Persönlichkeiten geführt. Gemeinsam arbeiten wir an der Umsetzung unserer 
        Vision für Deutschland.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <Card key={member.name}>
            <CardHeader>
              <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardTitle>{member.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-primary mb-2">{member.role}</p>
              <p className="text-muted-foreground">{member.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}