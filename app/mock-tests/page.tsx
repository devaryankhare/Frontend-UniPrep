import Navbar from "../components/ui/Navbar";
import Footer from "../components/Footer";
import MockTestsClient from "./MockTestsClient";
import { getMockTestFilterTree } from "@/lib/mock-tests";

export default async function MockTestsPage({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    domain?: string;
    subject?: string;
  }>;
}) {
  const [resolvedSearchParams, filterTree] = await Promise.all([
    searchParams,
    getMockTestFilterTree(),
  ]);

  return (
    <main className="flex flex-col items-center justify-center">
      <div>
        <Navbar />
      </div>

      <div className="p-8 max-w-6xl mx-auto w-full">
        <MockTestsClient
          filterTree={filterTree}
          initialParams={resolvedSearchParams}
        />
      </div>

      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
}
