"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const languages = {
  de: "Deutsch",
  en: "English",
  tr: "Türkçe"
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Select
      value={locale}
      onValueChange={(newLocale) => {
        router.replace(pathname, { locale: newLocale });
      }}
    >
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder={languages[locale as keyof typeof languages]} />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(languages).map(([code, name]) => (
          <SelectItem key={code} value={code}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}