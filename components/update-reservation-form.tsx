"use client";

import { updateReservation } from "@/lib/actions";
import ReservationForm from "./reservation-form";
import { Room } from "@/lib/type";

type ReservationFormProps = {
  booking: {
    id: number;
    numGuests: number;
    observations: string | null;
    rooms: Pick<Room, "maxCapacity"> | null;
  };
};

function UpdateReservationForm({ booking }: ReservationFormProps) {
  const { id: bookingId, rooms } = booking;
  const maxCapacity = rooms?.maxCapacity || 1;

  const handleAction = async (formData: FormData) => {
    await updateReservation(bookingId, formData);
  };

  return (
    <ReservationForm
      booking={booking}
      maxCapacity={maxCapacity}
      submitButtonPendingText="Updating..."
      submitButtonText="Update reservation"
      handleAction={handleAction}
    />
  );
}

export default UpdateReservationForm;
