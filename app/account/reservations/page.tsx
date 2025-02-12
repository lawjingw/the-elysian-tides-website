import ReservationCard from "@/components/reservation-card";
import { getBookings, getCurrentUser } from "@/lib/data-service";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reservations",
};

async function Page() {
  const currentUser = await getCurrentUser();
  const bookings = await getBookings(currentUser!.user_metadata.guestId);

  return (
    <div className="mx-auto w-full max-w-[1000px] px-4 sm:px-6 lg:px-8">
      <div className="mb-8 text-center sm:mb-12 lg:mb-16">
        <h2 className="mb-3 font-serif text-2xl tracking-[-0.02em] sm:mb-4 sm:text-3xl lg:text-[2.5rem]">
          YOUR STAYS
        </h2>
        <p className="text-base text-zinc-600 sm:text-lg">
          View and manage your reservations at The Elysian Tides
        </p>
      </div>

      {bookings.length === 0 ? (
        <div className="text-center">
          <p className="mb-6 text-base text-zinc-600 sm:mb-8 sm:text-lg">
            You have no reservations yet.
          </p>
          <Link
            href="/rooms"
            className="inline-block border-b border-zinc-900 pb-0.5 text-base font-light transition-colors hover:text-zinc-600 sm:text-lg"
          >
            Explore our luxury rooms
          </Link>
        </div>
      ) : (
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {bookings.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Page;
