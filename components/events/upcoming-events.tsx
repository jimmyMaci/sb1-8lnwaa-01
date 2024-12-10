"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar as CalendarIcon } from "lucide-react";
import Link from "next/link";
import { UPCOMING_EVENTS } from "@/lib/constants/events";
import { useTranslations } from 'next-intl';

export function UpcomingEvents() {
  const t = useTranslations('events');

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">{t('upcoming')}</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {UPCOMING_EVENTS.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle className="text-xl">{event.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{event.date}, {event.time}</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
                <p className="text-muted-foreground">{event.description}</p>
                <Button className="w-full" asChild>
                  <Link href={event.link}>{t('learnMore')}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}