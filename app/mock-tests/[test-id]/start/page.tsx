import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import TestEngine from "./TestEngine";

export default async function StartTestPage({
  params,
  searchParams,
}: {
  params: Promise<{ "test-id": string }>;
  searchParams: Promise<{ attemptId?: string }>;
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const testId = resolvedParams["test-id"];
  const attemptId = resolvedSearchParams?.attemptId;

  if (!attemptId) redirect("/mock-tests");

  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll() {},
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/auth");

  // Validate attempt
  const { data: attempt } = await supabase
    .from("test_attempts")
    .select("*")
    .eq("id", attemptId)
    .eq("user_id", user.id)
    .single();

  if (!attempt) redirect("/mock-tests");

  // Fetch test details (for duration)
  const { data: test } = await supabase
    .from("tests")
    .select("duration_minutes")
    .eq("id", testId)
    .single();

  if (!test) redirect("/mock-tests");

  // Fetch questions
  const { data: questions } = await supabase
    .from("questions")
    .select(
      `
      id,
      question_text,
      question_order,
      marks,
      negative_marks,
      options (
        id,
        option_text
      )
    `
    )
    .eq("test_id", testId)
    .order("question_order", { ascending: true });

  if (!questions) redirect("/mock-tests");

  return (
    <TestEngine
      questions={questions}
      attemptId={attemptId}
      durationMinutes={test.duration_minutes}
    />
  );
}
