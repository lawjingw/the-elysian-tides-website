import ReservationCard from "@/components/reservation-card";
import { getBookings, getCurrentUser } from "@/lib/data-service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservations",
};

async function Page() {
  const currentUser = await getCurrentUser();

  const bookings = await getBookings(currentUser!.user_metadata.guestId);

  return (
    <div>
      <h2 className="mb-7 text-2xl font-semibold text-accent-400">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <a className="text-accent-500 underline" href="/rooms">
            deluxe rooms &rarr;
          </a>
        </p>
      ) : (
        <ul className="space-y-6">
          {bookings.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Page;
