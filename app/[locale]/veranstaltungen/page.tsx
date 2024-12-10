import { EventsHero } from "@/components/events/events-hero";
import { EventsCalendar } from "@/components/events/events-calendar";
import { UpcomingEvents } from "@/components/events/upcoming-events";

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <EventsHero />
      <div className="container py-12 space-y-12">
        <EventsCalendar />
        <UpcomingEvents />
      </div>
    </div>
  );
}