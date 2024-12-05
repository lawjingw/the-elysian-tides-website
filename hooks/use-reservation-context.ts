import { ReservationContext } from "@/contexts/reservation-context";
import { useContext } from "react";

export function useReservationContext() {
  const context = useContext(ReservationContext);

  if (!context) {
    throw new Error(
      "useReservationContext must be used within a ReservationProvider",
    );
  }

  return context;
}
