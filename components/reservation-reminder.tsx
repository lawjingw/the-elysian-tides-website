"use client";

import { useReservationContext } from "@/hooks/use-reservation-context";
import { format } from "date-fns";
import { X } from "lucide-react";

function ReservationReminder() {
  const { selectedRange, resetRange } = useReservationContext();

  if (!selectedRange || !selectedRange.from || !selectedRange.to) return null;

  return (
    <div className="fixed bottom-6 left-2 right-2 flex items-center justify-between gap-8 rounded-full bg-accent-500 px-6 py-2 text-sm font-semibold text-primary-800 shadow-slate-900 sm:left-1/2 sm:-translate-x-1/2 sm:px-8 sm:py-5 sm:shadow-xl">
      <p className="grow">
        <span>👋</span> Don&apos;t forget to reserve your dates from{" "}
        {format(new Date(selectedRange.from), "MMM dd yyyy")} to{" "}
        {format(new Date(selectedRange.to), "MMM dd yyyy")}
      </p>
      <button
        className="rounded-full p-1 transition-all hover:bg-accent-600"
        onClick={resetRange}
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}

export default ReservationReminder;
