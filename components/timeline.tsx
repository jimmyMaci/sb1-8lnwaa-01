"use client";

import { Card, CardContent } from "@/components/ui/card";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2" />
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <div key={index} className={`relative flex items-center ${
            index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
          }`}>
            <div className={`flex w-full items-center md:w-1/2 ${
              index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
            }`}>
              <Card className="w-full">
                <CardContent className="p-6">
                  <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary md:left-auto md:right-auto md:-translate-x-1/2 md:left-1/2">
                    <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {item.year}
                  </span>
                  <h3 className="mt-2 font-semibold">{item.title}</h3>
                  <p className="mt-1 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}