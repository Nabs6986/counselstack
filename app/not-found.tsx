import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-slate-700 mb-4">Page Not Found</h2>
          <p className="text-slate-600 mb-8 max-w-md mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or deleted.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-brand-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
