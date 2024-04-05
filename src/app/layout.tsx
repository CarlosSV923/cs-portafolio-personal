import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { NextUIGlobalProvider } from "./nextUI.global.provider";
import { PortafolioProvider } from "../contexts/portafolio.context";

import "./globals.css";

const roboto = Montserrat({ subsets: ["latin"], style: ['normal', 'italic'], });

export const metadata: Metadata = {
  title: "Portafolio Personal",
  description: "Portafolio personal de desarrollo web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NextUIGlobalProvider>
          <PortafolioProvider>{children}</PortafolioProvider>
        </NextUIGlobalProvider>
      </body>
    </html>
  );
}
