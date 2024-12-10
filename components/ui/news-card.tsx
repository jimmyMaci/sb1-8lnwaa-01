"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface NewsCardProps {
  image: string;
  date: string;
  title: string;
  description: string;
  href: string;
}

export function NewsCard({ image, date, title, description, href }: NewsCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-colors hover:border-secondary">
      <div className="aspect-video relative bg-muted">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 p-6">
        <time className="text-sm text-muted-foreground">{date}</time>
        <h3 className="mt-2 text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
      <div className="p-6 pt-0">
        <Button variant="link" className="px-0 text-secondary hover:text-secondary/80" asChild>
          <Link href={href}>
            Weiterlesen
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}