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
    <div className="mx-auto max-w-[1000px]">
      <div className="mb-16 text-center">
        <h2 className="mb-4 font-serif text-[2.5rem] tracking-[-0.02em]">
          YOUR STAYS
        </h2>
        <p className="text-lg text-zinc-600">
          View and manage your reservations at The Elysian Tides
        </p>
      </div>

      {bookings.length === 0 ? (
        <div className="text-center">
          <p className="mb-8 text-lg text-zinc-600">
            You have no reservations yet.
          </p>
          <Link
            href="/rooms"
            className="inline-block border-b border-zinc-900 pb-0.5 text-lg font-light hover:text-zinc-600"
          >
            Explore our luxury rooms
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {bookings.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Page;
