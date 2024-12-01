import Image from "next/image";
import bg from "@/public/bg.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-24">
      <Image
        className="object-cover object-top"
        src={bg}
        alt="background image"
        placeholder="blur"
        fill
      />

      <div className="relative z-10 text-center">
        <h1 className="mb-10 text-8xl font-normal tracking-tight text-primary-50">
          Welcome to paradise.
        </h1>
        <Link
          href="/rooms"
          className="bg-accent-500 px-8 py-6 text-lg font-semibold text-primary-800 transition-all hover:bg-accent-600"
        >
          Explore Deluxe Rooms
        </Link>
      </div>
    </main>
  );
}
