import {
  createClient as createSupabaseClient,
  type SupabaseClient,
} from "@supabase/supabase-js";

export const MOCK_TESTS_PAGE_SIZE = 6;

export const MOCK_TEST_FILTERS = {
  Science: ["physics", "chemistry", "biology", "maths"],
  Humanities: ["history", "polity", "geography", "economics"],
  Commerce: ["accountancy", "business", "economics", "maths"],
  English: ["grammar", "comprehension"],
  GAT: ["reasoning", "current affairs", "quantitative aptitude"],
} as const;

export type MockFilterTree = Record<string, string[]>;

export type TestSummary = {
  id: string;
  title: string;
  duration_minutes: number | null;
  total_marks: number | null;
  year: number | null;
};

export type MockTestsQuery = {
  domain: string;
  subject: string;
  page: number;
  pageSize?: number;
};

export type MockTestsPageResponse = {
  tests: TestSummary[];
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
};

type MockTestRow = TestSummary;

function createPublicSupabaseClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}

function normalizeFilterTree(): MockFilterTree {
  return Object.fromEntries(
    Object.entries(MOCK_TEST_FILTERS).map(([domain, subjects]) => [
      domain,
      [...subjects],
    ]),
  );
}

function normalizeTest(row: MockTestRow): TestSummary {
  return {
    id: row.id,
    title: row.title,
    duration_minutes: row.duration_minutes,
    total_marks: row.total_marks,
    year: row.year,
  };
}

export function isValidMockFilter(domain: string, subject: string) {
  if (!domain || !subject) {
    return false;
  }

  const subjects =
    MOCK_TEST_FILTERS[domain as keyof typeof MOCK_TEST_FILTERS] ?? [];

  return (subjects as readonly string[]).includes(subject);
}

export async function getFeaturedMocks(limit: number = 3) {
  const supabase = createPublicSupabaseClient();

  const { data, error } = await supabase
    .from("tests")
    .select("id, title, duration_minutes, total_marks, year")
    .order("year", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Supabase error:", error.message);
    return [];
  }

  return (data ?? []).map((row) => normalizeTest(row as MockTestRow));
}

export async function getMockTestFilterTree() {
  return normalizeFilterTree();
}

export async function getMockTestsPage(
  query: MockTestsQuery,
  supabase: SupabaseClient = createPublicSupabaseClient(),
): Promise<MockTestsPageResponse> {
  const pageSize = query.pageSize ?? MOCK_TESTS_PAGE_SIZE;
  const page = Number.isFinite(query.page) && query.page > 0 ? query.page : 1;
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, count, error } = await supabase
    .from("tests")
    .select("id, title, duration_minutes, total_marks, year", { count: "exact" })
    .ilike("title", `%${query.subject}%`)
    .order("year", { ascending: false })
    .range(from, to);

  if (error) {
    throw new Error(error.message);
  }

  const totalCount = count ?? 0;
  const totalPages = totalCount > 0 ? Math.ceil(totalCount / pageSize) : 0;

  return {
    tests: (data ?? []).map((row) => normalizeTest(row as MockTestRow)),
    page,
    pageSize,
    totalCount,
    totalPages,
  };
}
