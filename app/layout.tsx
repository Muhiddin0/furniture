import type { Metadata } from "next";
import { Inter } from "next/font/google";

// styles css/scss
import "./globals.css";
import "../styles/custom.style.scss";
import "../styles/utils.scss";

// components
import * as components from "./components";
import { useEffect } from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <components.Header />
        {children}
        <components.Basket />
      </body>
    </html>
  );
}
