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
    <div className="grid grid-cols-5 items-center gap-x-24 gap-y-32 text-lg">
      <div className="col-span-3">
        <h1 className="mb-10 text-4xl font-medium text-accent-400">
          Welcome to The Elysian Tides
        </h1>

        <div className="space-y-8">
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
            and state-of-the-art amenities. Whether you’re unwinding in your
            private balcony hot tub or enjoying a sunset cocktail, every
            experience here is designed to inspire and delight.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={about1}
          alt="Family sitting around a fire pit in front of cabin"
          placeholder="blur"
        />
      </div>

      <div className="col-span-2">
        <Image
          src={about2}
          placeholder="blur"
          alt="Family that manages The Wild Oasis"
        />
      </div>

      <div className="col-span-3">
        <h1 className="mb-10 text-4xl font-medium text-accent-400">
          A Culinary Journey
        </h1>

        <div className="space-y-8">
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

          <div>
            <Link
              href="/rooms"
              className="mt-4 inline-block bg-accent-500 px-8 py-5 text-lg font-semibold text-primary-800 transition-all hover:bg-accent-600"
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
