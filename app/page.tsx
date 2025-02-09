import Image from "next/image";
import bg from "@/public/bg.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-svh">
      <Image
        className="object-cover object-center brightness-[0.65]"
        src={bg}
        alt="Luxury resort view"
        placeholder="blur"
        priority
        fill
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <div className="space-y-8">
          <h1 className="font-serif text-7xl font-light tracking-wide text-white">
            Welcome to Paradise
          </h1>
          <div className="flex items-center justify-center gap-8">
            <Link
              href="/rooms"
              className="border-2 border-white bg-transparent px-8 py-4 text-lg font-light uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-slate-900"
            >
              Explore Rooms
            </Link>
            <Link
              href="/about"
              className="border-2 border-white bg-white px-8 py-4 text-lg font-light uppercase tracking-wider text-slate-900 transition-all duration-300 hover:bg-transparent hover:text-white"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
