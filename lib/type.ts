import z from "zod";
import { reservationFormSchema, updateProfileFormSchema } from "./schemas";

export type Room = {
  id: number;
  name: string;
  maxCapacity: number;
  bedTypes: string | null;
  roomSize: number | null;
  privatePool: boolean | null;
  regularPrice: number;
  discount: number | null;
  images: string[] | null;
  description?: string | null;
};

export type Settings = {
  minBookingLength: number;
  maxBookingLength: number;
  maxGuestsPerBooking: number;
  breakfastPrice: number;
};

export type Booking = {
  id: number;
  created_at: string;
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

export type Guest = {
  id: number;
  email: string;
  fullName: string;
  countryFlag?: string | null;
  nationalID?: string | null;
  nationality?: string | null;
};

export type country = {
  name: string;
  flag: string;
};

export type TUpdateProfileForm = z.infer<typeof updateProfileFormSchema>;

export type TReservationForm = z.infer<typeof reservationFormSchema>;
