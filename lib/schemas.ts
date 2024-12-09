import z from "zod";

export const updateProfileFormSchema = z.object({
  nationalID: z
    .string({ required_error: "Please enter your national ID" })
    .min(6, "National ID must be at least 6 characters")
    .max(12, "National ID must be at most 12 characters")
    .regex(/^[A-Za-z0-9]+$/, "National ID must be alphanumeric"),
  nationality: z.string({ required_error: "Please select your country" }),
  guestID: z.number(),
});
