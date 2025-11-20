"use client";

import { HeroUIProvider } from "@heroui/react";
import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HeroUIProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </HeroUIProvider>
  );
}
