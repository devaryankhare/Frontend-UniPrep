import { redirect } from "next/navigation";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

interface Props {
  params: Promise<{ attemptId: string }>;
}

export default async function ResultPage({ params }: Props) {
  const resolvedParams = await params;
  const attemptId = resolvedParams.attemptId;

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

  // Fetch attempt
  const { data: attempt } = await supabase
    .from("test_attempts")
    .select("*")
    .eq("id", attemptId)
    .eq("user_id", user.id)
    .single();

  if (!attempt) redirect("/mock-tests");

  // Fetch answer stats
  const { data: answers } = await supabase
    .from("user_answers")
    .select("is_correct")
    .eq("attempt_id", attemptId);

  const totalQuestions = answers?.length || 0;
  const correct = answers?.filter(a => a.is_correct).length || 0;
  const wrong = totalQuestions - correct;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-10 rounded-xl shadow-md w-[500px]">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Test Result
        </h1>

        <div className="space-y-4 text-lg">
          <p><strong>Score:</strong> {attempt.score}</p>
          <p><strong>Correct:</strong> {correct}</p>
          <p><strong>Wrong:</strong> {wrong}</p>
          <p><strong>Total Attempted:</strong> {totalQuestions}</p>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/mock-tests"
            className="px-6 py-2 bg-black text-white rounded-lg"
          >
            Back to Tests
          </a>
        </div>
      </div>
    </div>
  );
}