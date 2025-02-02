
import './globals.css';
import { Noto_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/components/LanguageProvider';
import { LayoutWrapper } from '@/components/LayoutWrapper';
import { cn } from '@/lib/utils';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={cn(
        notoSans.className,
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