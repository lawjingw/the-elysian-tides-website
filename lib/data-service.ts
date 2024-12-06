import { eachDayOfInterval } from "date-fns";
import { createClient } from "./supabase/server";
import { notFound } from "next/navigation";
import { Guest } from "./type";

//for test
//await new Promise((resolve) => setTimeout(resolve, 5000));

/////////////
// Auth Services

export async function getCurrentUser() {
  const supabase = createClient();

  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.log(error);
    return null;
  }

  return data?.user;
}

/////////////
// Room Services

export async function getRoom(id: number) {
  const supabase = createClient();

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
  const supabase = createClient();

  const { data, error } = await supabase
    .from("rooms")
    .select("id, name, maxCapacity, regularPrice, discount, image")
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
  const supabase = createClient();

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

/////////////
// Settings Services

export async function getSettings() {
  const supabase = createClient();

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
  const supabase = createClient();

  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .single();

  // No error here! We handle the possibility of no guest in the sign in callback
  return data;
}

export async function createGuest(newGuest: Omit<Guest, "id">) {
  const supabase = createClient();

  const { data, error } = await supabase.from("guests").insert([newGuest]);

  if (error) {
    console.error(error);
    throw new Error("Guest could not be created");
  }

  return data;
}

// export async function getRoomPrice(id: number) {
//   const supabase = await createClient();

//   const { data, error } = await supabase
//     .from("rooms")
//     .select("regularPrice, discount")
//     .eq("id", id)
//     .single();

//   if (error) {
//     console.error(error);
//   }

//   return data;
// }

// Guests are uniquely identified by their email address

// export async function getBooking(id: number) {
//   const supabase = await createClient();

//   const { data, error, count } = await supabase
//     .from("bookings")
//     .select("*")
//     .eq("id", id)
//     .single();

//   if (error) {
//     console.error(error);
//     throw new Error("Booking could not get loaded");
//   }

//   return data;
// }

// export async function getBookings(guestId: number) {
//   const supabase = await createClient();

//   const { data, error, count } = await supabase
//     .from("bookings")
//     // We actually also need data on the rooms as well. But let's ONLY take the data that we actually need, in order to reduce downloaded data.
//     .select(
//       "id, created_at, startDate, endDate, numNights, numGuests, totalPrice, guestId, roomId, rooms(name, image)",
//     )
//     .eq("guestId", guestId)
//     .order("startDate");

//   if (error) {
//     console.error(error);
//     throw new Error("Bookings could not get loaded");
//   }

//   return data;
// }

/////////////
// CREATE

// export async function createBooking(newBooking: object) {
//   const supabase = await createClient();

//   const { data, error } = await supabase
//     .from("bookings")
//     .insert([newBooking])
//     // So that the newly created object gets returned!
//     .select()
//     .single();

//   if (error) {
//     console.error(error);
//     throw new Error("Booking could not be created");
//   }

//   return data;
// }

/////////////
// UPDATE

// The updatedFields is an object which should ONLY contain the updated data
// export async function updateGuest(id: number, updatedFields: object) {
//   const supabase = await createClient();

//   const { data, error } = await supabase
//     .from("guests")
//     .update(updatedFields)
//     .eq("id", id)
//     .select()
//     .single();

//   if (error) {
//     console.error(error);
//     throw new Error("Guest could not be updated");
//   }
//   return data;
// }

// export async function updateBooking(id: number, updatedFields: object) {
//   const supabase = await createClient();

//   const { data, error } = await supabase
//     .from("bookings")
//     .update(updatedFields)
//     .eq("id", id)
//     .select()
//     .single();

//   if (error) {
//     console.error(error);
//     throw new Error("Booking could not be updated");
//   }
//   return data;
// }

/////////////
// DELETE

// export async function deleteBooking(id: number) {
//   const supabase = await createClient();

//   const { data, error } = await supabase.from("bookings").delete().eq("id", id);

//   if (error) {
//     console.error(error);
//     throw new Error("Booking could not be deleted");
//   }
//   return data;
// }
