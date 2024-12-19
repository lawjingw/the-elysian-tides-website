"use client";

import { deleteReservation } from "@/lib/actions";
import { TrashIcon } from "lucide-react";
import Confirm from "./ui/confirm";
import { useTransition } from "react";
import SpinnerMini from "./spinner-mini";

type DeleteReservationProps = {
  bookingId: number;
};

function DeleteReservation({ bookingId }: DeleteReservationProps) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(() => {
      deleteReservation(bookingId);
    });
  };

  return (
    <Confirm
      action={handleDelete}
      description="This action cannot be undone. This will permanently delete your reservation."
    >
      <button className="group flex flex-grow items-center gap-2 px-3 text-xs font-bold uppercase text-primary-300 transition-colors hover:bg-accent-600 hover:text-primary-900">
        {isPending ? (
          <span className="mx-auto">
            <SpinnerMini />
          </span>
        ) : (
          <>
            <TrashIcon className="h-5 w-5 text-primary-600 transition-colors group-hover:text-primary-800" />
            <span className="mt-1">Delete</span>
          </>
        )}
      </button>
    </Confirm>
  );
}

export default DeleteReservation;
