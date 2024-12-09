"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createGuest, getGuest, updateGuest } from "./data-service";
import { updateProfileFormSchema } from "./schemas";
import { TUpdateProfileForm } from "./type";

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
  if (!formData) {
    throw new Error("Form data is required");
  }

  const guestID = formData.get("guestID");
  const nationalID = formData.get("nationalID");
  // const [nationality, countryFlag] = formData
  //   .get("nationality")
  //   ?.toString()
  //   .split("%");

  const profileFormData = updateProfileFormSchema.parse(formData);

  // const [nationality, countryFlag] = profileFormData
  //   .get("nationality")
  //   .split("%");
  // const updateData = {
  //   nationalID: formData.get("nationalID") as string,
  //   nationality,
  //   countryFlag,
  // };

  // try {
  //   await updateGuest(formData.get("guestID"), updateData);
  // } catch (error) {
  //   if (error instanceof Error) {
  //     throw error;
  //   }
  // }

  // revalidatePath("/account/profile", "layout");
}
