import { Metadata } from "next";
import RoomList from "@/components/room-list";
import { Suspense } from "react";
import Spinner from "@/components/spinner";

export const metadata: Metadata = {
  title: "Rooms",
};

function Page() {
  return (
    <div>
      <h1 className="mb-5 text-4xl font-medium text-accent-400">
        Our Luxury Rooms
      </h1>
      <p className="mb-10 text-lg text-primary-200">
        Stylishly refurbished, Verdura Resort&apos;s newly decorated rooms and
        suites.
      </p>

      <Suspense fallback={<Spinner />}>
        <RoomList />
      </Suspense>
    </div>
  );
}

export default Page;
