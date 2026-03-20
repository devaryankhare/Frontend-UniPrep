"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { ChevronLeft, ChevronRight, Loader2, RotateCcw } from "lucide-react";
import type { MockFilterTree, MockTestsPageResponse } from "@/lib/mock-tests";

type MockTestsClientProps = {
  filterTree: MockFilterTree;
  initialParams: {
    domain?: string;
    subject?: string;
    page?: string;
  };
};

type FilterState = {
  domain: string;
  subject: string;
  page: number;
};

type HistoryMode = "push" | "replace";

function toDisplayLabel(value: string) {
  return value
    .replace(/[_-]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((word) =>
      word === word.toUpperCase()
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join(" ");
}

function parsePage(value?: string) {
  const page = Number(value ?? "1");
  return Number.isInteger(page) && page > 0 ? page : 1;
}

function sanitizeFilterState(state: FilterState, filterTree: MockFilterTree): FilterState {
  const domain = state.domain && filterTree[state.domain] ? state.domain : "";
  const subject =
    domain && state.subject && filterTree[domain]?.includes(state.subject)
      ? state.subject
      : "";

  return {
    domain,
    subject,
    page: subject ? parsePage(String(state.page)) : 1,
  };
}

function stateFromParams(params: MockTestsClientProps["initialParams"]): FilterState {
  return {
    domain: params.domain?.trim() ?? "",
    subject: params.subject?.trim() ?? "",
    page: parsePage(params.page),
  };
}

function stateFromLocation(): FilterState {
  const searchParams = new URLSearchParams(window.location.search);

  return {
    domain: searchParams.get("domain")?.trim() ?? "",
    subject: searchParams.get("subject")?.trim() ?? "",
    page: parsePage(searchParams.get("page") ?? "1"),
  };
}

function serializeState(state: FilterState) {
  return `${state.domain}|${state.subject}|${state.page}`;
}

function buildUrl(pathname: string, state: FilterState) {
  const params = new URLSearchParams();

  if (state.domain) {
    params.set("domain", state.domain);
  }

  if (state.subject) {
    params.set("subject", state.subject);
  }

  if (state.subject && state.page > 1) {
    params.set("page", String(state.page));
  }

  const query = params.toString();
  return query ? `${pathname}?${query}` : pathname;
}

async function fetchMockTests([
  ,
  domain,
  subject,
  page,
]: readonly [string, string, string, number]) {
  const params = new URLSearchParams({
    domain,
    subject,
    page: String(page),
  });

  const response = await fetch(`/api/mock-tests?${params.toString()}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    const payload = (await response.json().catch(() => null)) as
      | { error?: string }
      | null;

    throw new Error(payload?.error || "Unable to load mock tests");
  }

  return (await response.json()) as MockTestsPageResponse;
}

function FilterTab({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-medium transition ${
        active
          ? "bg-linear-to-br from-blue-500 to-blue-600 text-white shadow-md"
          : "bg-neutral-200 text-black hover:bg-neutral-300"
      }`}
    >
      {children}
    </button>
  );
}

export default function MockTestsClient({
  filterTree,
  initialParams,
}: MockTestsClientProps) {
  const pathname = "/mock-tests";
  const [filters, setFilters] = useState(() =>
    sanitizeFilterState(stateFromParams(initialParams), filterTree),
  );

  useEffect(() => {
    const nextUrl = buildUrl(pathname, filters);
    const currentUrl = `${window.location.pathname}${window.location.search}`;

    if (currentUrl !== nextUrl) {
      window.history.replaceState(null, "", nextUrl);
    }
  }, [filters, pathname]);

  useEffect(() => {
    const handlePopState = () => {
      const nextState = sanitizeFilterState(stateFromLocation(), filterTree);
      setFilters((current) =>
        serializeState(current) === serializeState(nextState) ? current : nextState,
      );
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [filterTree]);

  const applyState = (nextState: FilterState, mode: HistoryMode = "push") => {
    const sanitized = sanitizeFilterState(nextState, filterTree);
    setFilters(sanitized);
    window.history[mode === "replace" ? "replaceState" : "pushState"](
      null,
      "",
      buildUrl(pathname, sanitized),
    );
  };

  const domains = Object.keys(filterTree);
  const subjects = filters.domain ? filterTree[filters.domain] ?? [] : [];
  const isReadyToFetch = Boolean(filters.domain && filters.subject);
  const swrKey = isReadyToFetch
    ? (["mock-tests", filters.domain, filters.subject, filters.page] as const)
    : null;

  const { data, error, isLoading, isValidating } = useSWR(swrKey, fetchMockTests, {
    keepPreviousData: true,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });

  const isInitialLoading = isReadyToFetch && !data && (isLoading || isValidating);
  const isRefreshing = Boolean(data) && isValidating;

  return (
    <>
      <section className="mb-8 rounded-3xl border border-neutral-100 bg-white p-4 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {domains.map((domain) => (
                <FilterTab
                  key={domain}
                  active={filters.domain === domain}
                  onClick={() =>
                    applyState({
                      domain,
                      subject: "",
                      page: 1,
                    })
                  }
                >
                  {toDisplayLabel(domain)}
                </FilterTab>
              ))}
            </div>

            <button
              type="button"
              onClick={() => applyState({ domain: "", subject: "", page: 1 })}
              disabled={!filters.domain && !filters.subject}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </button>
          </div>

          {filters.domain ? (
            <div className="flex flex-wrap gap-3">
              {subjects.map((subject) => (
                <FilterTab
                  key={subject}
                  active={filters.subject === subject}
                  onClick={() =>
                    applyState({
                      domain: filters.domain,
                      subject,
                      page: 1,
                    })
                  }
                >
                  {toDisplayLabel(subject)}
                </FilterTab>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {isInitialLoading ? (
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <Loader2 className="h-4 w-4 animate-spin" />
            Loading mock tests for {toDisplayLabel(filters.subject)}...
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-52 animate-pulse rounded-2xl border border-slate-200 bg-slate-100"
              />
            ))}
          </div>
        </div>
      ) : null}

      {error ? (
        <div className="rounded-3xl border border-rose-200 bg-rose-50 px-6 py-10 text-center text-rose-700">
          <p className="text-lg font-semibold">We could not load these mocks.</p>
          <p className="mt-2 text-sm">
            {error.message || "Please try a different filter combination."}
          </p>
        </div>
      ) : null}

      {!isInitialLoading && !error && data ? (
        <>
          {isRefreshing ? (
            <div className="mb-4 flex justify-end">
              <span className="inline-flex items-center gap-2 text-sm text-slate-600">
                <Loader2 className="h-4 w-4 animate-spin" />
                Refreshing
              </span>
            </div>
          ) : null}

          {data.tests.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {data.tests.map((test) => (
                <div
                  key={test.id}
                  className="relative rounded-2xl p-4 shadow-sm hover:shadow-md transition overflow-hidden"
                >
                  <Image
                    src="/assets/nta.jpeg"
                    alt="NTA"
                    width={64}
                    height={64}
                    className="absolute top-3 right-3 h-16 w-16 opacity-50 pointer-events-none select-none"
                  />
                  <h2 className="text-xl font-semibold">{test.title}</h2>
                  <div className="flex justify-between my-8">
                    <p className="text-sm text-black">{test.duration_minutes} mins</p>
                    <p className="text-sm text-black">Total Marks: {test.total_marks}</p>
                  </div>

                  <Link
                    href={`/mock-tests/${test.id}`}
                    className="inline-block px-4 py-2 bg-emerald-300 border border-black text-black rounded-xl"
                  >
                    Start Test
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center text-slate-600">
              No mock tests are available for this subject yet.
            </div>
          )}

          {data.totalPages > 1 ? (
            <div className="mt-10 flex justify-center">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-3 shadow-sm">
                <button
                  type="button"
                  onClick={() =>
                    applyState({ ...filters, page: Math.max(filters.page - 1, 1) })
                  }
                  disabled={filters.page === 1}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                {Array.from({ length: data.totalPages }, (_, index) => index + 1).map(
                  (pageNumber) => (
                    <button
                      key={pageNumber}
                      type="button"
                      onClick={() => applyState({ ...filters, page: pageNumber })}
                      className={`h-10 min-w-10 rounded-full px-3 text-sm font-semibold transition ${
                        filters.page === pageNumber
                          ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                          : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  ),
                )}

                <button
                  type="button"
                  onClick={() =>
                    applyState({
                      ...filters,
                      page: Math.min(filters.page + 1, data.totalPages),
                    })
                  }
                  disabled={filters.page === data.totalPages}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ) : null}
        </>
      ) : null}
    </>
  );
}
