import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { NextUIGlobalProvider } from "../nextUI.global.provider";
import { PortafolioProvider } from "../../contexts/portafolio.context";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { DARK_THEME } from "@/configuration/theme";
import seo from "@/configuration/seo";

import "./layout.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = seo;

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();

  return (
    <html
      lang={locale}
      className={DARK_THEME}
      style={{
        colorScheme: DARK_THEME,
      }}
    >
      <body className={montserrat.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <NextUIGlobalProvider>
            <NextThemesProvider
              attribute="class"
              defaultTheme={DARK_THEME}
              enableSystem
            >
              <PortafolioProvider locale={locale}>
                {children}
              </PortafolioProvider>
            </NextThemesProvider>
          </NextUIGlobalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
