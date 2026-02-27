import Link from "next/link";
import { getFeaturedMocks } from "@/lib/mock-tests";

export default async function Courses() {
  const featuredMocks = await getFeaturedMocks(3);

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Practice with Real Mock Tests
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Full-length exam simulations designed to mirror the real CUET
              experience. Track performance, analyze results, and improve with
              structured practice.
            </p>
          </div>

          <Link
            href="/mock-tests"
            className="px-8 py-4 text-lg bg-linear-to-br from-blue-400 to-blue-600 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition"
          >
            View Mocks
          </Link>
        </div>

        {/* Mock Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredMocks.map((mock) => (
            <Link
              key={mock.id}
              href={`/mock-tests/${mock.id}`}
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-sm px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                  CUET {mock.year}
                </span>
                <span className="text-sm font-medium text-gray-500">
                  {mock.total_marks} Marks
                </span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-black transition">
                {mock.title}
              </h3>

              <div className="flex justify-between text-sm text-gray-500 mt-6">
                <span>⏱ {mock.duration_minutes} mins</span>
                <span>📊 Full-Length Mock</span>
              </div>

              <div className="mt-8 text-sm font-medium text-black group-hover:underline">
                Start Practice →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
