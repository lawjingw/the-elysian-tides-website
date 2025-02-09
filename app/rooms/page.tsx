import { Metadata } from "next";
import RoomList from "@/components/room-list";
import { Suspense } from "react";
import Spinner from "@/components/spinner";
import Filter from "@/components/filter";
import ReservationReminder from "@/components/reservation-reminder";

export const metadata: Metadata = {
  title: "Rooms",
};

type PageProps = {
  searchParams: { capacity: string };
};

function Page({ searchParams }: PageProps) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div className="container mx-auto max-w-[970px] px-4">
      <h1 className="mb-5 text-4xl font-medium text-accent-400">
        Our Luxury Rooms
      </h1>
      <p className="mb-10 text-lg">
        Stylishly refurbished, Verdura Resort&apos;s newly decorated rooms and
        suites.
      </p>
      <div className="mb-8 flex justify-center">
        <Filter />
      </div>
      <Suspense fallback={<Spinner />}>
        <RoomList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}

export default Page;
