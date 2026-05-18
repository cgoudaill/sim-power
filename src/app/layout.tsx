import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Sim Power | L'excellence de la simulation automobile",
    template: "%s | The Sim Power",
  },
  description:
    "Coaching sur mesure, immersion totale et e-racing elite. Pilotez la voiture de vos reves sur nos simulateurs haut de gamme.",
  keywords: [
    "simulateur automobile",
    "sim racing",
    "coaching pilotage",
    "The Sim Power",
    "simulateur voiture",
    "Braine-l'Alleud",
    "Mons",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
