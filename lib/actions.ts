"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  createGuest,
  deleteBooking,
  getCurrentUser,
  getGuest,
  updateGuest,
} from "./data-service";
import { updateProfileFormSchema } from "./schemas";

export async function login(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    throw error;
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const fullName = formData.get("fullName") as string;

  const supabase = createClient();

  const data = {
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    throw new Error(error.message);
  }

  try {
    const existingGuest = await getGuest(email);
    if (!existingGuest) {
      await createGuest({ email, fullName });
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signOut() {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);

  revalidatePath("/", "layout");
  redirect("/");
}

export async function updateProfile(formData: FormData) {
  const data = updateProfileFormSchema.parse(Object.fromEntries(formData));
  const [nationality, countryFlag] = data.nationality.split("%");

  const updateData = {
    nationalID: data.nationalID,
    nationality: nationality,
    countryFlag: countryFlag,
  };

  try {
    await updateGuest(data.guestID, updateData);
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
  }

  revalidatePath("/account/profile", "layout");
}

export async function deleteReservation(bookingId: number, email: string) {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.email !== email) {
    throw new Error("You need to be signed in to delete a reservation");
  }

  // Delete the reservation
  try {
    await deleteBooking(bookingId);
  } catch (error) {
    throw error;
  }

  revalidatePath("/account/reservations");
}
