"use client";

export function ProgramHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="gradient-bg absolute inset-0 opacity-10" />
      <div className="container relative py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Parteiprogramm der BFREI
          </h1>
          <p className="text-xl text-muted-foreground">
            Unser Programm für eine transparente, inklusive und partizipative Demokratie.
            Entdecken Sie unsere Vision für ein bürgerfreundliches Deutschland.
          </p>
        </div>
      </div>
    </section>
  );
}