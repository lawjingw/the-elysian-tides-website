"use client";

import { useReservationContext } from "@/hooks/use-reservation-context";
import { format } from "date-fns";
import { X } from "lucide-react";

function ReservationReminder() {
  const { selectedRange, resetRange } = useReservationContext();

  if (!selectedRange || !selectedRange.from || !selectedRange.to) return null;

  return (
    <div className="text fixed bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-8 rounded-full bg-accent-500 px-8 py-5 font-semibold text-primary-800 shadow-xl shadow-slate-900">
      <p>
        <span>👋</span> Don&apos;t forget to reserve your dates <br /> from{" "}
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
