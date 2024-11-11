import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ScMedium = localFont({
  src: "./fonts/CoreSansD45Medium.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const ScItalic = localFont({
  src: "./fonts/CoreSansD45Medium-Italic.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Single Core",
  description: "Single Core",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${ScMedium.variable} ${ScItalic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
