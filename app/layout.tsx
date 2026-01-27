import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JKKN College of Education",
  description: "JKKN College of Education Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
