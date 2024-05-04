import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { NextUIGlobalProvider } from "../nextUI.global.provider";
import { PortafolioProvider } from "../../contexts/portafolio.context";
import { IconsDefault } from "../../configuration/images.icons.default";
import "./layout.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Portafolio Personal",
  description: "Portafolio personal de desarrollo web",
  icons: {
    icon: IconsDefault.SOFTWARE_ENGINEER,
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <NextUIGlobalProvider>
            <PortafolioProvider locale={locale}>{children}</PortafolioProvider>
          </NextUIGlobalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
