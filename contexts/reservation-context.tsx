"use client";

import { createContext, useState } from "react";
import { DateRange } from "react-day-picker";

type TReservationContext = {
  selectedRange: DateRange | undefined;
  handleSelect: (newSelected: DateRange | undefined) => void;
  resetRange: () => void;
};

export const ReservationContext = createContext<TReservationContext | null>(
  null,
);

function ReservationProvider({ children }: { children: React.ReactNode }) {
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();

  const handleSelect = (newSelected: DateRange | undefined) => {
    setSelectedRange(newSelected);
  };

  const resetRange = () => {
    setSelectedRange(undefined);
  };

  return (
    <ReservationContext.Provider
      value={{ selectedRange, handleSelect, resetRange }}
    >
      {children}
    </ReservationContext.Provider>
  );
}

export default ReservationProvider;
