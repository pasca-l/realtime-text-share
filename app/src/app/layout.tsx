import type { Metadata } from "next";

import "./globals.css";
import { TextsyncProvider } from "@/features/textsync/contexts/TextsyncContext";

export const metadata: Metadata = {
  title: "Realtime Text Share",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-mono">
        <TextsyncProvider>{children}</TextsyncProvider>
      </body>
    </html>
  );
}
