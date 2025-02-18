import { eachDayOfInterval } from "date-fns";
import { createClient } from "./supabase/server";
import { notFound } from "next/navigation";
import { TablesInsert, TablesUpdate } from "./supabase/database-types";
import { country } from "./type";

//for test
//await new Promise((resolve) => setTimeout(resolve, 5000));

/////////////
// Country Services

export async function getCountries() {
  try {
    const res = await fetch(
      "https://restcountries.com/v2/all?fields=name,flag",
    );
    const countries: country[] = await res.json();
    return countries;
  } catch {
    throw new Error("Could not fetch countries");
  }
}

/////////////
// Auth Services

export async function getCurrentUser() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error) {
    //console.log(error);
    return null;
  }

  return data?.user;
}

/////////////
// Room Services

export async function getRoom(id: number) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("rooms")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    notFound();
  }

  return data;
}

export async function getRooms() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("rooms")
    .select(
      "id, name, maxCapacity, bedTypes, roomSize, privatePool, regularPrice, discount, images",
    )
    .order("regularPrice");

  if (error) {
    throw new Error("Rooms could not be loaded");
  }

  return data;
}

/////////////
// Booking Services

export async function getBookedDatesByRoomId(roomId: number) {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  const todayStr = today.toISOString();

  // Getting all bookings
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("roomId", roomId)
    .or(`startDate.gte.${todayStr},status.eq.checked-in`);

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  // Converting to actual dates to be displayed in the date picker
  const bookedDates = data
    .map((booking) => {
      return eachDayOfInterval({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      });
    })
    .flat();

  return bookedDates;
}

export async function getBookings(guestId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("bookings")
    // We actually also need data on the rooms as well. But let's ONLY take the data that we actually need, in order to reduce downloaded data.
    .select("*, rooms(name, images)")
    .eq("guestId", guestId)
    .order("startDate");
  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

export async function getBooking(id: number) {
  const supabase = await createClient();

  const { data, error, count } = await supabase
    .from("bookings")
    .select("*, rooms(maxCapacity)")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not get loaded");
  }

  return data;
}

export async function createBooking(newBooking: TablesInsert<"bookings">) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("bookings")
    .insert([newBooking])
    // So that the newly created object gets returned!
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be created");
  }

  return data;
}

export async function updateBooking(
  bookingId: number,
  guestId: number,
  updatedFields: TablesUpdate<"bookings">,
) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("bookings")
    .update(updatedFields)
    .eq("id", bookingId)
    .eq("guestId", guestId)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  return data;
}

export async function deleteBooking(bookingId: number, guestId: number) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId)
    .eq("guestId", guestId);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }
}

/////////////
// Settings Services

export async function getSettings() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }

  return data;
}

/////////////
// Guest Services

export async function getGuest(email: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .single();

  // No error here! We handle the possibility of no guest in the sign in callback
  return data;
}

export async function createGuest(newGuest: TablesInsert<"guests">) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("guests")
    .insert([newGuest])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Guest could not be created");
  }

  return data[0];
}

export async function updateGuest(
  id: number,
  updatedFields: TablesUpdate<"guests">,
) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("guests")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Guest could not be updated");
  }
  return data;
}
