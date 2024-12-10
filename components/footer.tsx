"use client";

import Link from "next/link";
import { PartyLogo } from "@/components/party-logo";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <PartyLogo />
              <span className="font-bold">BürgerFreundlichePartei</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Gemeinsam für ein bürgerfreundliches Deutschland
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold">Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/ueber-uns" className="text-muted-foreground hover:text-foreground">
                  Über Uns
                </Link>
              </li>
              <li>
                <Link href="/programm" className="text-muted-foreground hover:text-foreground">
                  Programm
                </Link>
              </li>
              <li>
                <Link href="/veranstaltungen" className="text-muted-foreground hover:text-foreground">
                  Veranstaltungen
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold">Rechtliches</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/impressum" className="text-muted-foreground hover:text-foreground">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-muted-foreground hover:text-foreground">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/transparenz" className="text-muted-foreground hover:text-foreground">
                  Transparenz
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold">Kontakt</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <span className="text-muted-foreground">
                  BürgerFreundlichePartei (BFREI)<br />
                  Seestraße 68<br />
                  71638 Ludwigsburg
                </span>
              </li>
              <li>
                <a href="tel:+491741763646" className="text-muted-foreground hover:text-foreground">
                  +49 174 176 36 46
                </a>
              </li>
              <li>
                <a href="mailto:info@bfrei.de" className="text-muted-foreground hover:text-foreground">
                  info@bfrei.de
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BürgerFreundlichePartei. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}