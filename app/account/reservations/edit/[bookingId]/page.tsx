import UpdateReservationForm from "@/components/update-reservation-form";
import { getBooking } from "@/lib/data-service";

type EditReservationPageProps = {
  params: {
    bookingId: string;
  };
};

export async function generateMetadata({ params }: EditReservationPageProps) {
  return {
    title: `Edit Reservation #${params.bookingId}`,
  };
}

async function Page({ params }: EditReservationPageProps) {
  const bookingId = Number(params.bookingId);
  const booking = await getBooking(bookingId);

  return (
    <div>
      <h2 className="mb-7 text-2xl font-semibold text-accent-400">
        Edit Reservation #{bookingId}
      </h2>
      <UpdateReservationForm booking={booking} />
    </div>
  );
}

export default Page;
