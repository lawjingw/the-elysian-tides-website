import type { Metadata } from "next";
import "react-day-picker/style.css";
import "@/styles/global.css";
import { Josefin_Sans, DM_Serif_Display } from "next/font/google";
import Header from "../components/header";
import ReservationProvider from "@/contexts/reservation-context";
import Navigation from "@/components/navigation";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif-display",
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
        className={`${josefin.variable} ${dmSerif.variable} relative flex min-h-screen flex-col bg-white font-sans text-zinc-800 antialiased`}
      >
        <Header>
          <Navigation />
        </Header>
        <div className="flex flex-1 px-8 py-12">
          <main className="mx-auto w-full max-w-7xl">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
