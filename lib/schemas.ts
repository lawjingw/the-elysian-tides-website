import { gu, is } from "date-fns/locale";
import z from "zod";
import { zfd } from "zod-form-data";

export const updateProfileFormSchema = zfd.formData({
  nationalID: zfd.text(
    z
      .string({ required_error: "Please enter your national ID" })
      .min(6, "National ID must be at least 6 characters")
      .max(12, "National ID must be at most 12 characters")
      .regex(/^[A-Za-z0-9]+$/, "National ID must be alphanumeric"),
  ),
  nationality: zfd.text(
    z.string({ required_error: "Please select your country" }),
  ),
  guestID: zfd.numeric(z.number()),
});

export const reservationFormSchema = zfd.formData({
  numGuests: zfd.text(z.string({ required_error: "Please select a number" })),
  observations: zfd.text(
    z
      .string()
      .max(100, "Observations must be at most 100 characters")
      .optional(),
  ),
});

export const bookingSchema = z.object({
  guestId: z.number(),
  roomId: z.number(),
  roomPrice: z.number(),
  numNights: z.number(),
  numGuests: z.number(),
  startDate: z.string(),
  endDate: z.string(),
  extraPrice: z.number().optional(),
  hasBreakfast: z.boolean().optional(),
  isPaid: z.boolean().optional(),
  observations: z
    .string()
    .max(100, "Observations must be at most 100 characters")
    .optional(),
  status: z.string().optional(),
  totalPrice: z.number(),
});
