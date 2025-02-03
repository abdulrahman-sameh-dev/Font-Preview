import './globals.css';
import { Noto_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/components/LanguageProvider';
import { LayoutWrapper } from '@/components/LayoutWrapper';
import { cn } from '@/lib/utils';
import { eaalimFont } from './fonts/font';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans',
});

export const metadata = {
  title: 'Eaalim Font',
  description: 'A beautiful Arabic font for modern web',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning className={cn(eaalimFont.variable, notoSans.variable)}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={cn(
        "bg-background text-foreground antialiased"
      )}>
        <ThemeProvider defaultTheme="system" storageKey="ui-theme">
          <LanguageProvider defaultLanguage="ar" storageKey="ui-language">
            <LayoutWrapper>
              {children}
            </LayoutWrapper>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}