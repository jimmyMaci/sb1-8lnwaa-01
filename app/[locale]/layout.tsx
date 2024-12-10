import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { CookieConsent } from '@/components/cookie-consent';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BürgerFreundlichePartei',
  description: 'Gemeinsam für ein bürgerfreundliches Deutschland',
};

export function generateStaticParams() {
  return [
    { locale: 'de' }, 
    { locale: 'en' }, 
    { locale: 'tr' }
  ].flatMap(params => [
    { ...params },
    { ...params, slug: 'mitmachen' },
    { ...params, slug: 'veranstaltungen' },
    { ...params, slug: 'programm' },
    { ...params, slug: 'presse' },
    { ...params, slug: 'kontakt' },
    { ...params, slug: 'ueber-uns' },
    { ...params, slug: 'login' }
  ]);
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Navigation />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <Toaster />
            <CookieConsent />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}