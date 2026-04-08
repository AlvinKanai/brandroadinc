import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brandroad Inc | Design Evangelists",
  description:
    "Brandroad Inc is a product design agency that helps startups and enterprises build user-centric digital products. We specialize in UX architecture, brand identity systems, and design execution for SaaS companies.",
  metadataBase: new URL("https://brandroadinc.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">
        <Header />
        <Analytics />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
