export const UPCOMING_EVENTS = [
  {
    id: 1,
    title: "Bürgerdialog zur Digitalisierung",
    date: "15. April 2024",
    time: "19:00 Uhr",
    location: "Stadtbibliothek Ludwigsburg",
    description: "Diskussion über die digitale Zukunft unserer Stadt mit Experten aus Politik und Wirtschaft.",
    link: "/veranstaltungen/buergerdialog-digitalisierung"
  },
  {
    id: 2,
    title: "Klimaschutz-Workshop",
    date: "20. April 2024",
    time: "15:00 Uhr",
    location: "Bürgerhaus Stuttgart-West",
    description: "Praktische Workshops und Vorträge zu nachhaltigen Klimaschutzmaßnahmen im Alltag.",
    link: "/veranstaltungen/klimaschutz-workshop"
  },
  {
    id: 3,
    title: "Zukunftsforum Bildung",
    date: "5. Mai 2024",
    time: "18:30 Uhr",
    location: "Bildungszentrum Ludwigsburg",
    description: "Podiumsdiskussion zur Zukunft des deutschen Bildungssystems.",
    link: "/veranstaltungen/zukunftsforum-bildung"
  }
] as const;

export const EVENT_DATES = [
  new Date(2024, 3, 15),
  new Date(2024, 3, 20),
  new Date(2024, 4, 5),
] as const;