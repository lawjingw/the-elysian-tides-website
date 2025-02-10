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

export const loginFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  remember: z.boolean().optional(),
});

export const signupFormSchema = z
  .object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character",
      ),
    passwordConfirm: z.string(),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
  });

export type TUpdateProfileForm = z.infer<typeof updateProfileFormSchema>;
export type TReservationForm = z.infer<typeof reservationFormSchema>;
export type TLoginForm = z.infer<typeof loginFormSchema>;
export type TSignupForm = z.infer<typeof signupFormSchema>;
