import Image from "next/image";
import bg from "@/public/bg.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-24">
      <Image
        className="object-cover object-top brightness-50"
        src={bg}
        alt="background image"
        placeholder="blur"
        fill
      />

      <div className="relative z-10 text-center">
        <h1 className="mb-10 text-8xl font-normal tracking-tight text-white">
          Welcome to paradise.
        </h1>
        <Link
          href="/rooms"
          className="border-4 border-accent-400 bg-accent-400 px-8 py-6 text-lg font-bold text-slate-800 transition-all duration-300 hover:bg-transparent hover:text-accent-400"
        >
          Explore Deluxe Rooms
        </Link>
      </div>
    </main>
  );
}
