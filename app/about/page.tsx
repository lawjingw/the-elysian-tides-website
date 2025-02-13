import { Metadata } from "next";
import Image from "next/image";
import about1 from "@/public/about-1.jpg";
import about2 from "@/public/about-2.jpg";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About us",
};

function Page() {
  return (
    <div className="grid grid-cols-1 gap-8 px-4 text-lg sm:px-0 md:grid-cols-5 md:items-center md:gap-x-24 md:gap-y-32">
      <div className="col-span-1 md:col-span-3">
        <h1 className="mb-6 text-3xl font-medium text-accent-400 sm:mb-10 sm:text-4xl">
          Welcome to The Elysian Tides
        </h1>

        <div className="space-y-6 sm:space-y-8">
          <p>
            Where luxury meets the serene beauty of the sea. Nestled along an
            unspoiled stretch of coastline, our resort and spa offer a sanctuary
            for those seeking unparalleled relaxation, indulgence, and
            rejuvenation.
          </p>
          <p>
            Our accommodation options are designed to cater to your every need,
            offering three distinct room types to suit your desires.
          </p>
          <p>
            At The Elysian Tides, we believe that true luxury is found in the
            details. Our exquisitely appointed rooms and suites offer panoramic
            views of the sea, complete with plush bedding, bespoke furnishings,
            and state-of-the-art amenities. Whether you&apos;re unwinding in
            your private balcony hot tub or enjoying a sunset cocktail, every
            experience here is designed to inspire and delight.
          </p>
        </div>
      </div>

      <div className="col-span-1 md:col-span-2">
        <Image
          src={about1}
          alt="Family sitting around a fire pit in front of cabin"
          placeholder="blur"
          className="w-full"
        />
      </div>

      <div className="col-span-1 md:col-span-2">
        <Image
          src={about2}
          placeholder="blur"
          alt="Family that manages The Wild Oasis"
          className="w-full"
        />
      </div>

      <div className="col-span-1 md:col-span-3">
        <h1 className="mb-6 text-3xl font-medium text-accent-400 sm:mb-10 sm:text-4xl">
          A Culinary Journey
        </h1>

        <div className="space-y-6 sm:space-y-8">
          <p>
            Our world-class dining venues promise a culinary experience as
            unforgettable as the view. From fresh, locally sourced seafood to
            gourmet international cuisine, our talented chefs craft each dish
            with passion and precision. Pair your meal with a fine wine or
            handcrafted cocktail, and dine al fresco as the ocean breeze
            enhances every flavor.
          </p>
          <p>
            Indulge in the ultimate relaxation at our luxury spa. With
            treatments inspired by the rhythms of the sea, our experienced
            therapists use natural, marine-based ingredients to rejuvenate your
            body and soul. From soothing massages to invigorating body scrubs,
            let the ocean&apos;s energy restore your balance and vitality.
          </p>

          <div className="pt-4">
            <Link
              href="/rooms"
              className="inline-block w-full border-2 border-zinc-950 bg-zinc-950 px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-zinc-950 sm:w-auto sm:px-8 sm:text-lg"
            >
              Explore our luxury rooms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
