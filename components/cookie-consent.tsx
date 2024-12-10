"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setShowConsent(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <Card>
        <CardHeader>
          <CardTitle>Cookie-Einstellungen</CardTitle>
          <CardDescription>
            Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Einige Cookies sind für die Grundfunktionen der Website erforderlich, während andere uns helfen, 
            die Nutzung der Website zu analysieren und Ihr Erlebnis zu verbessern.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end space-x-4">
          <Button variant="outline" onClick={acceptEssential}>
            Nur Essenzielle
          </Button>
          <Button onClick={acceptAll}>
            Alle akzeptieren
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}