import type { Metadata } from "next";
import "react-day-picker/style.css";
import "@/styles/global.css";
import { Archivo, Cormorant_Garamond } from "next/font/google";
import Header from "../components/header";
import ReservationProvider from "@/contexts/reservation-context";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const dmSerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    template: "%s - Elysian Tides Resort",
    default: "The Elysian Tides Resort Website",
  },
  description: "A luxury hotel website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${dmSerif.variable} relative flex min-h-screen flex-col bg-white font-sans text-zinc-800 antialiased`}
      >
        <Header>
          <Navigation />
        </Header>
        <div className="relative flex flex-1 px-8 pb-12 pt-32">
          <main className="mx-auto w-full max-w-7xl">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
