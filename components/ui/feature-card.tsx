"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  linkText: string;
}

export function FeatureCard({ icon: Icon, title, description, href, linkText }: FeatureCardProps) {
  return (
    <Card className="p-6 border-2 border-primary/20 transition-colors hover:border-primary/40">
      <Icon className="h-12 w-12 text-primary" />
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
      <Button variant="link" className="mt-4 px-0 text-primary hover:text-primary/80" asChild>
        <Link href={href}>{linkText}</Link>
      </Button>
    </Card>
  );
}