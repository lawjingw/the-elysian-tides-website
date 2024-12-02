import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.SUPERBASE_URL as string,
  process.env.SUPERBASE_KEY as string,
);
