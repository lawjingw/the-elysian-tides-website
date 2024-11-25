import type { Metadata } from "next";
import "./_styles/globals.css";
import Navigation from "@/app/_components/navigation";
import Logo from "@/app/_components/logo";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s - The Tidecott Hotel",
    default: "The Tidecott Hotel Website",
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
        className={`${josefin.className} flex min-h-screen flex-col bg-accent-100 text-accent-500 antialiased`}
      >
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="mx-auto max-w-7xl">{children}</main>
        </div>
      </body>
    </html>
  );
}
