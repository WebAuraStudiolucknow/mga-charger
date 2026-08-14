import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | MGA Electronics",
    default: "MGA Electronics | Industrial Battery Chargers & Power Solutions",
  },
  description: "Advanced battery chargers and power solutions engineered for automotive, industrial and energy applications. Reliable manufacturing since 2002.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans bg-background text-primary-text antialiased selection:bg-accent selection:text-white pb-[60px] lg:pb-0">
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
