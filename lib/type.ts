export type Room = {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number | null;
  image: string | null;
  description?: string | null;
};

export type Settings = {
  minBookingLength: number;
  maxBookingLength: number;
  maxGuestsPerBooking: number;
  breakfastPrice: number;
};

export type Bookings = {
  id: number;
  endDate: string;
  extraPrice: number | null;
  guestId: number;
  hasBreakfast: boolean | null;
  isPaid: boolean | null;
  numGuests: number;
  numNights: number;
  observations: string | null;
  roomId: number;
  roomPrice: number;
  startDate: string;
  status: string | null;
  totalPrice: number;
};

export type countries = [
  {
    name: string;
    flag: string;
  },
];
