"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  createBooking,
  createGuest,
  deleteBooking,
  getCurrentUser,
  getGuest,
  updateBooking,
  updateGuest,
} from "./data-service";
import {
  bookingSchema,
  reservationFormSchema,
  updateProfileFormSchema,
} from "./schemas";
import { Booking } from "./type";

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
  redirect("/account");
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
        guestId: 0,
      },
    },
  };

  const { error } = await supabase.auth.signUp(data);
  if (error) {
    throw error;
  }

  let guestId;
  try {
    const existingGuest = await getGuest(email);
    if (!existingGuest) {
      const guest = await createGuest({ email, fullName });
      guestId = guest.id;
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
  }

  const { error: updateUserError } = await supabase.auth.updateUser({
    data: {
      guestId,
    },
  });
  if (updateUserError) {
    throw new Error(updateUserError.message);
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

  const updatedFields = {
    nationalID: data.nationalID,
    nationality: nationality,
    countryFlag: countryFlag,
  };

  try {
    await updateGuest(data.guestID, updatedFields);
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
  }

  revalidatePath("/account/profile", "layout");
}

export async function deleteReservation(bookingId: number) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    throw new Error("You need to be signed in to delete a reservation");
  }

  // Delete the reservation
  try {
    await deleteBooking(bookingId, currentUser.user_metadata.guestId);
  } catch (error) {
    throw error;
  }

  revalidatePath("/account/reservations");
}

export async function createReservation(
  bookingData: Omit<
    Booking,
    "id" | "guestId" | "created_at" | "observations" | "numGuests"
  >,
  formData: FormData,
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    throw new Error("You need to be signed in to create a reservation");
  }

  const data = Object.fromEntries(formData);
  const newBookingData = bookingSchema.parse({
    ...bookingData,
    ...data,
    guestId: currentUser.user_metadata.guestId,
    numGuests: Number(data.numGuests),
  });

  try {
    await createBooking(newBookingData);
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
  }

  revalidatePath("/account/rooms/[id]", "page");
  redirect("/rooms/thankyou");
}

export async function updateReservation(bookingId: number, formData: FormData) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    throw new Error("You need to be signed in to update a reservation");
  }

  const data = reservationFormSchema.parse(Object.fromEntries(formData));
  const updatedFields = {
    numGuests: Number(data.numGuests),
    observations: data.observations,
  };

  try {
    await updateBooking(
      bookingId,
      currentUser.user_metadata.guestId,
      updatedFields,
    );
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
  }

  revalidatePath("/account/reservations/edit/[id]", "page");
  redirect("/account/reservations");
}
