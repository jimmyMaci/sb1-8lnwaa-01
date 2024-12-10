"use client";

import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { EVENT_DATES } from "@/lib/constants/events";
import { useTranslations } from 'next-intl';

export function EventsCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const t = useTranslations('events');

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('calendar')}</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          modifiers={{
            event: EVENT_DATES,
          }}
          modifiersStyles={{
            event: {
              backgroundColor: "hsl(var(--primary))",
              color: "hsl(var(--primary-foreground))",
              borderRadius: "9999px",
            },
          }}
          className="rounded-md border"
        />
      </CardContent>
    </Card>
  );
}