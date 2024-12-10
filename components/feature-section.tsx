"use client";

import { Users, Heart, Mail } from "lucide-react";
import { FeatureCard } from "@/components/ui/feature-card";

export function FeatureSection() {
  const features = [
    {
      icon: Users,
      title: "Mitmachen",
      description: "Werden Sie Teil unserer Bewegung und gestalten Sie aktiv die Zukunft mit.",
      href: "/mitmachen",
      linkText: "Mehr erfahren"
    },
    {
      icon: Heart,
      title: "Spenden",
      description: "Unterstützen Sie unsere Arbeit mit einer Spende für eine bessere Zukunft.",
      href: "/spenden",
      linkText: "Jetzt spenden"
    },
    {
      icon: Mail,
      title: "Kontakt",
      description: "Haben Sie Fragen? Kontaktieren Sie uns - wir sind für Sie da.",
      href: "/kontakt",
      linkText: "Kontakt aufnehmen"
    }
  ];

  return (
    <section className="container py-24">
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}