"use client";

import { deleteReservation } from "@/lib/actions";
import { TrashIcon } from "lucide-react";

type DeleteReservationProps = {
  bookingId: number;
  email: string;
};

function DeleteReservation({ bookingId, email }: DeleteReservationProps) {
  return (
    <button
      onClick={() => deleteReservation(bookingId, email)}
      className="group flex flex-grow items-center gap-2 px-3 text-xs font-bold uppercase text-primary-300 transition-colors hover:bg-accent-600 hover:text-primary-900"
    >
      <TrashIcon className="h-5 w-5 text-primary-600 transition-colors group-hover:text-primary-800" />
      <span className="mt-1">Delete</span>
    </button>
  );
}

export default DeleteReservation;
