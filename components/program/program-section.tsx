"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Subsection {
  title: string;
  content: string;
}

interface ProgramSectionProps {
  id: string;
  title: string;
  content?: string;
  subsections?: Subsection[];
}

export function ProgramSection({ id, title, content, subsections }: ProgramSectionProps) {
  return (
    <section id={id} className="scroll-mt-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {content && <p className="text-muted-foreground leading-relaxed">{content}</p>}
          {subsections && (
            <div className="space-y-8">
              {subsections.map((subsection) => (
                <div key={subsection.title}>
                  <h3 className="font-semibold mb-2">{subsection.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{subsection.content}</p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}