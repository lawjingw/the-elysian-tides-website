import { createClient } from "./supabase/server";

export async function getCurrentUser() {
  const supabase = createClient();

  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return data?.user;
}
