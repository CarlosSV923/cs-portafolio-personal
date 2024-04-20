import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { NextUIGlobalProvider } from "./nextUI.global.provider";
import { PortafolioProvider } from "../contexts/portafolio.context";
import { IconsDefault } from "../configuration/images.icons.default";
import "./globals.css";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NextUIGlobalProvider>
          <PortafolioProvider>{children}</PortafolioProvider>
        </NextUIGlobalProvider>
      </body>
    </html>
  );
}
