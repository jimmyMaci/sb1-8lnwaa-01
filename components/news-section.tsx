"use client";

import { NewsCard } from "@/components/ui/news-card";

export function NewsSection() {
  const news = [
    {
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&auto=format&fit=crop&q=60",
      date: "12. April 2024",
      title: "Neue Initiative für Klimaschutz",
      description: "Unsere Partei stellt neue Maßnahmen zum Klimaschutz vor.",
      href: "/news/klimaschutz-initiative"
    }
  ];

  return (
    <section className="border-t bg-secondary/5">
      <div className="container py-24">
        <h2 className="text-3xl font-bold tracking-tight">Aktuelle Nachrichten</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <NewsCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}