"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="gradient-bg absolute inset-0 opacity-10" />
      <div className="container relative py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Gemeinsam für ein bürgerfreundliches Deutschland
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Die BürgerFreundlichePartei setzt sich für eine transparente, gerechte und 
            innovative Zukunft ein. Gestalten Sie mit uns gemeinsam die Zukunft Deutschlands.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/mitmachen">Mitglied werden</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
              <Link href="/programm">
                Unser Programm
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}