"use client";
import type { ReactNode } from "react";
import { Poppins, Paprika, Inria_Serif } from "@next/font/google";
import clsx from "classnames";

import Header from "@/components/Header";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const paprika = Paprika({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-paprika",
});

const inria_serif = Inria_Serif({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-inria-serif",
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={clsx(
        "scroll-smooth",
        poppins.variable,
        paprika.variable,
        inria_serif.variable
      )}
    >
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
