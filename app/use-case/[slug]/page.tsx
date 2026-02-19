import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight, HelpCircle, AlertTriangle, Star, Layers } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { getUseCase, getAllUseCaseSlugs, UseCase } from "../_data/usecases";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllUseCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const usecase = getUseCase(slug);

  if (!usecase) return { title: "Page Not Found" };

  return {
    title: usecase.metaTitle,
    description: usecase.metaDescription,
    openGraph: {
      title: usecase.metaTitle,
      description: usecase.metaDescription,
    },
  };
}

function RatingStars({ rating }: { rating: string }) {
  const score = parseFloat(rating);
  const full = Math.floor(score);
  return (
    <span className="text-amber-400 text-sm">
      {"★".repeat(full)}{"☆".repeat(5 - full)}
      <span className="text-slate-500 ml-1">{rating}</span>
    </span>
  );
}

export default async function UseCasePage({ params }: Props) {
  const { slug } = await params;
  const usecase = getUseCase(slug);

  if (!usecase) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": usecase.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  // Build feature table column keys (skip "feature" key)
  const softwareColumns = usecase.featureTableHeaders.slice(1);

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-b from-brand-50 to-white pt-12 pb-8">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <nav className="mb-6 text-sm text-slate-500">
              <Link href="/" className="hover:text-brand-600">Home</Link>
              <span className="mx-2">/</span>
              <span>Use Cases</span>
              <span className="mx-2">/</span>
              <span className="text-slate-700 capitalize">{slug.replace(/-/g, " ")}</span>
            </nav>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700 mb-4">
              <Layers className="h-3 w-3" />
              {usecase.targetKeyword}
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {usecase.headline}
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              {usecase.subheadline}
            </p>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-10 bg-amber-50/60 border-y border-amber-100">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 shrink-0">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">The Problem</h2>
                <p className="text-slate-700 leading-relaxed mb-4">{usecase.problemStatement}</p>
                <ul className="space-y-2">
                  {usecase.problemPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-amber-500 font-bold mt-0.5 shrink-0">→</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Top Solutions */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Top 5 Software Solutions
            </h2>
            <p className="text-slate-500 text-sm mb-6">Ranked for {usecase.targetKeyword}</p>

            <div className="space-y-4">
              {usecase.solutions.map((solution, i) => (
                <div
                  key={solution.name}
                  className={`bg-white rounded-xl p-5 border shadow-sm flex flex-col sm:flex-row sm:items-center gap-4 ${
                    i === 0 ? "border-brand-300 ring-1 ring-brand-200" : "border-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-3 shrink-0">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                        i === 0 ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {i + 1}
                    </span>
                    {i === 0 && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-brand-100 px-2 py-0.5 text-xs font-medium text-brand-700">
                        <Star className="h-3 w-3" /> Top Pick
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                      <h3 className="text-base font-bold text-slate-900">{solution.name}</h3>
                      <RatingStars rating={solution.rating} />
                    </div>
                    <p className="text-sm text-slate-600 mb-1">{solution.tagline}</p>
                    <p className="text-xs text-slate-500">
                      <span className="font-medium">Best for:</span> {solution.bestFor}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-sm font-semibold text-slate-900">{solution.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Feature Comparison</h2>
            <p className="text-slate-500 text-sm mb-6">
              How top platforms compare on {usecase.targetKeyword} capabilities
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    {usecase.featureTableHeaders.map((header, i) => (
                      <th
                        key={header}
                        className={`py-3 px-4 text-sm font-medium ${
                          i === 0
                            ? "text-left text-slate-600 w-48"
                            : i === 1
                            ? "text-center text-brand-600"
                            : "text-center text-slate-600"
                        }`}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {usecase.featureRows.map((row) => (
                    <tr key={row.feature} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-3 px-4 text-sm font-medium text-slate-700">
                        {row.feature}
                      </td>
                      {softwareColumns.map((col, ci) => (
                        <td key={col} className="py-3 px-4 text-center">
                          <span
                            className={`text-sm ${
                              ci === 0 ? "font-medium text-brand-700" : "text-slate-600"
                            }`}
                          >
                            {row[col] as string}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Pricing Comparison</h2>
            <p className="text-slate-500 text-sm mb-6">
              Cost of {usecase.targetKeyword} capabilities across platforms
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">Software</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">Plan</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">Price</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {usecase.pricingRows.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-3 px-4 text-sm font-semibold text-slate-900">{row.software}</td>
                      <td className="py-3 px-4 text-sm text-slate-600">{row.plan}</td>
                      <td className="py-3 px-4 text-sm font-semibold text-brand-600">{row.price}</td>
                      <td className="py-3 px-4 text-sm text-slate-500">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              * Prices are per user/month billed annually. Contact vendors for current pricing.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-sm mb-6">
              Everything attorneys ask about {usecase.targetKeyword}
            </p>

            <div className="space-y-4">
              {usecase.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg p-6 shadow-sm border border-slate-200"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-brand-500 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Use Cases */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Explore Other Use Cases
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {getAllUseCaseSlugs()
                .filter((s) => s !== slug)
                .map((s) => {
                  const uc = getUseCase(s);
                  if (!uc) return null;
                  return (
                    <Link
                      key={s}
                      href={`/use-case/${s}`}
                      className="flex items-center justify-between bg-white rounded-lg p-4 border border-slate-200 hover:border-brand-300 hover:shadow-sm transition-all"
                    >
                      <span className="text-sm font-medium text-slate-800 capitalize">
                        {s.replace(/-/g, " ")}
                      </span>
                      <ArrowRight className="h-4 w-4 text-slate-400 shrink-0" />
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-600">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to find the right {slug.replace(/-/g, " ")} software?
            </h2>
            <p className="text-brand-100 mb-8 max-w-xl mx-auto">
              Compare all the top options side-by-side and make a confident decision for your firm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-medium text-brand-600 shadow-sm transition-all hover:bg-brand-50"
              >
                Compare All Platforms
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/vs/clio-vs-mycase"
                className="inline-flex items-center gap-2 rounded-lg border border-brand-400 px-6 py-3 text-base font-medium text-white transition-all hover:bg-brand-700"
              >
                See Head-to-Head Comparisons
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
