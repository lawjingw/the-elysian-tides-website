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
        <h1 className="text-primary-50 mb-10 text-8xl font-normal tracking-tight">
          Welcome to paradise.
        </h1>
        <Link
          href="/cottages"
          className="text-primary-800 hover:bg-accent-600 bg-accent-500 px-8 py-6 text-lg font-semibold transition-all"
        >
          Explore luxury villas
        </Link>
      </div>
    </main>
  );
}
