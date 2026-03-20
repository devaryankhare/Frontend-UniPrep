import { NextResponse } from "next/server";
import {
  getMockTestsPage,
  isValidMockFilter,
  MOCK_TESTS_PAGE_SIZE,
} from "@/lib/mock-tests";
import { createClient } from "@/lib/supabase/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const domain = searchParams.get("domain")?.trim() ?? "";
    const subject = searchParams.get("subject")?.trim() ?? "";
    const page = Number(searchParams.get("page") ?? "1");

    if (!domain || !subject || !Number.isInteger(page) || page < 1) {
      return NextResponse.json(
        { error: "domain, subject, and a valid page are required" },
        { status: 400 },
      );
    }

    if (!isValidMockFilter(domain, subject)) {
      return NextResponse.json(
        { error: "Invalid filter selection" },
        { status: 400 },
      );
    }

    const supabase = await createClient();
    const result = await getMockTestsPage(
      {
        domain,
        subject,
        page,
        pageSize: MOCK_TESTS_PAGE_SIZE,
      },
      supabase,
    );

    return NextResponse.json(result);
  } catch (error) {
    console.error("Mock tests route error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Unable to fetch mock tests",
      },
      { status: 500 },
    );
  }
}
