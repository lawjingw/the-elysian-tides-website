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
      <button className="inline-flex items-center gap-2 pb-0.5 text-sm uppercase tracking-wider hover:text-zinc-600">
        {isPending ? (
          <span className="mx-auto">
            <SpinnerMini />
          </span>
        ) : (
          <>
            <TrashIcon className="h-5 w-5" />
            <span className="mt-1 border-b border-zinc-900 md:hidden min-[950px]:block">
              Delete
            </span>
          </>
        )}
      </button>
    </Confirm>
  );
}

export default DeleteReservation;
