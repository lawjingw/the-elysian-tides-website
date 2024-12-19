"use client";

import { Room } from "@/lib/type";
import { User } from "@supabase/supabase-js";
import Avatar from "./avatar";
import { useReservationContext } from "@/hooks/use-reservation-context";
import { differenceInDays } from "date-fns";
import ReservationForm from "./reservation-form";
import { createReservation } from "@/lib/actions";

type ReservationFormProps = {
  room: Room;
  user: User | null;
};

function CreateReservationForm({ room, user }: ReservationFormProps) {
  const { id, maxCapacity, discount, regularPrice } = room;
  const { selectedRange, resetRange } = useReservationContext();
  const numNights = selectedRange
    ? differenceInDays(selectedRange.to!, selectedRange.from!)
    : 0;
  const roomPrice = numNights * (regularPrice - (discount || 0));

  const handleAction = async (formData: FormData) => {
    if (!selectedRange || !selectedRange.from || !selectedRange.to) return;

    await createReservation(
      {
        roomId: id,
        roomPrice,
        numNights,
        startDate: selectedRange.from.toISOString(),
        endDate: selectedRange.to.toISOString(),
        extraPrice: 0,
        hasBreakfast: false,
        isPaid: false,
        status: "pending",
        totalPrice: roomPrice,
      },
      formData,
    );

    resetRange();
  };

  return (
    <div className="flex w-full flex-col">
      <div className="flex items-center justify-between bg-primary-800 px-16 py-2 text-primary-300">
        <p>Logged in as</p>
        <Avatar user={user} />
      </div>

      <ReservationForm
        maxCapacity={maxCapacity}
        submitButtonPendingText="Reserving..."
        submitButtonText="Reserve now"
        handleAction={handleAction}
      />
    </div>
  );
}

export default CreateReservationForm;
