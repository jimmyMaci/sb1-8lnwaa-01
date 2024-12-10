"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";

export function ProgramDownload() {
  return (
    <Card className="bg-primary/5 border-primary/20">
      <CardHeader>
        <CardTitle className="text-2xl">Programm herunterladen</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-6">
          Laden Sie unser vollständiges Parteiprogramm als PDF herunter und erfahren Sie mehr über unsere Vision für Deutschland.
        </p>
        <Button className="gap-2">
          <Download className="h-4 w-4" />
          Programm als PDF
        </Button>
      </CardContent>
    </Card>
  );
}