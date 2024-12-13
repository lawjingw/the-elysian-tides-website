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
