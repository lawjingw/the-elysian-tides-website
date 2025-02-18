import Image from "next/image";
import bg from "@/public/bg.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="absolute left-0 right-0 top-0 min-h-lvh">
      <Image
        className="object-cover object-center brightness-[0.65]"
        src={bg}
        alt="Luxury resort view"
        placeholder="blur"
        sizes="100vw"
        priority
        fill
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <div className="space-y-12">
          <h1 className="font-serif text-4xl font-light tracking-wide text-white sm:text-5xl md:text-7xl">
            DISCOVER
            <br />
            ELYSIAN TIDES
          </h1>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:flex sm:items-center sm:justify-center sm:gap-8">
            <Link
              href="/rooms"
              className="border-2 border-white bg-transparent px-6 py-3 text-base font-light uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-slate-900 sm:px-8 sm:py-4 sm:text-lg"
            >
              Our Rooms
            </Link>
            <Link
              href="/about"
              className="border-2 border-white bg-white px-6 py-3 text-base font-light uppercase tracking-wider text-slate-900 transition-all duration-300 hover:bg-transparent hover:text-white sm:px-8 sm:py-4 sm:text-lg"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
