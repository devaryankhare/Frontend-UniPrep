import { createClient } from "@supabase/supabase-js";

export async function getFeaturedMocks(limit: number = 3) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! // use service key ONLY on server
  );

  const { data, error } = await supabase
    .from("tests")
    .select("*")
    .limit(limit);

  if (error) {
    console.error("Supabase error:", error.message);
    return [];
  }

  console.log("Fetched tests:", data);

  return data ?? [];
}