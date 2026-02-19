import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight, Star, HelpCircle, Trophy, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { getAudience, getAllAudienceSlugs } from "../_data/audiences";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAudienceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const audience = getAudience(slug);

  if (!audience) return { title: "Page Not Found" };

  return {
    title: audience.metaTitle,
    description: audience.metaDescription,
    openGraph: {
      title: audience.metaTitle,
      description: audience.metaDescription,
    },
    alternates: {
      canonical: `https://counselstack.io/for/${slug}`,
    },
  };
}

const rankBadgeColor = (rank: number) => {
  if (rank === 1) return "bg-yellow-100 text-yellow-800 border-yellow-200";
  if (rank === 2) return "bg-slate-100 text-slate-700 border-slate-200";
  return "bg-orange-100 text-orange-700 border-orange-200";
};

const rankLabel = (rank: number) => {
  if (rank === 1) return "🥇 #1 Pick";
  if (rank === 2) return "🥈 #2 Pick";
  return "🥉 #3 Pick";
};

export default async function AudiencePage({ params }: Props) {
  const { slug } = await params;
  const audience = getAudience(slug);

  if (!audience) {
    notFound();
  }

  // JSON-LD FAQPage Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": audience.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

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
              <span>By Practice</span>
              <span className="mx-2">/</span>
              <span className="text-slate-700">{audience.title}</span>
            </nav>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 mb-4">
              <Trophy className="h-3.5 w-3.5" />
              {audience.subtitle}
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {audience.heroHeadline}
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              {audience.heroSubtext}
            </p>
          </div>
        </section>

        {/* Audience Context */}
        <section className="py-8 bg-brand-50/50">
          <div className="mx-auto max-w-4xl px-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-brand-100">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 shrink-0">
                  <Star className="h-4 w-4 text-brand-600" />
                </div>
                <div>
                  <h2 className="font-semibold text-slate-900 mb-2">What {audience.title} Need From Legal Software</h2>
                  <p className="text-slate-600">{audience.audienceDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Recommendations */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Top 3 Software Picks for {audience.title}
            </h2>

            <div className="space-y-8">
              {audience.topRecommendations.map((rec) => (
                <div
                  key={rec.rank}
                  className={`bg-white rounded-xl border shadow-sm overflow-hidden ${
                    rec.rank === 1 ? "border-brand-300 ring-1 ring-brand-200" : "border-slate-200"
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between p-6 pb-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <span
                          className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${rankBadgeColor(rec.rank)}`}
                        >
                          {rankLabel(rec.rank)}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{rec.name}</h3>
                        <p className="text-sm text-slate-500 mt-0.5">{rec.tagline}</p>
                      </div>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <span className="text-sm font-semibold text-brand-600">{rec.price}</span>
                    </div>
                  </div>

                  {/* Best For */}
                  <div className="px-6 pb-4">
                    <div className="inline-flex items-center gap-1.5 rounded-md bg-slate-50 px-3 py-1.5 text-sm text-slate-600 border border-slate-200">
                      <Check className="h-3.5 w-3.5 text-green-500 shrink-0" />
                      <span className="font-medium">Best for:</span> {rec.bestFor}
                    </div>
                  </div>

                  {/* Reasoning */}
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 text-sm leading-relaxed">{rec.reasoning}</p>
                  </div>

                  {/* Pros / Cons */}
                  <div className="border-t border-slate-100 grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                    <div className="p-6">
                      <h4 className="text-sm font-semibold text-slate-700 mb-3">Pros</h4>
                      <ul className="space-y-2">
                        {rec.pros.map((pro, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-6">
                      <h4 className="text-sm font-semibold text-slate-700 mb-3">Cons</h4>
                      <ul className="space-y-2">
                        {rec.cons.map((con, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <span className="h-4 w-4 text-slate-400 mt-0.5 shrink-0 inline-flex items-center justify-center text-xs font-bold">—</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="border-t border-slate-100 px-6 py-4 bg-slate-50">
                    <a
                      href={rec.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
                    >
                      Visit {rec.name}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Key Features for {audience.title}
            </h2>
            <p className="text-slate-600 mb-8">
              What to look for when evaluating legal software for your practice.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {audience.keyFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm"
                >
                  <div className="text-2xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison Table */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Pricing Comparison</h2>
            <p className="text-slate-600 mb-8">
              Estimated pricing for {audience.title.toLowerCase()} — most platforms offer discounts for annual billing.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-xl shadow-sm border border-slate-200">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="py-4 px-4 text-left text-sm font-medium text-slate-600">Software</th>
                    <th className="py-4 px-4 text-left text-sm font-medium text-slate-600">Entry Plan</th>
                    <th className="py-4 px-4 text-left text-sm font-medium text-slate-600">Mid Tier</th>
                    <th className="py-4 px-4 text-left text-sm font-medium text-slate-600">Top Tier</th>
                    <th className="py-4 px-4 text-center text-sm font-medium text-slate-600">Free Trial</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {audience.pricingTable.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-4 text-sm font-semibold text-slate-900">{row.software}</td>
                      <td className="py-4 px-4 text-sm text-slate-600">{row.starter}</td>
                      <td className="py-4 px-4 text-sm text-slate-600">{row.mid}</td>
                      <td className="py-4 px-4 text-sm text-slate-600">{row.enterprise}</td>
                      <td className="py-4 px-4 text-center">
                        {row.freeTrial ? (
                          <Check className="h-4 w-4 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-slate-400 text-sm">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              * Pricing based on publicly available rates. Custom-priced platforms require direct quotes. Annual billing typically saves 10-20%.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {audience.faqs.map((faq, i) => (
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

        {/* Other Audience Pages */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              More Practice Area Guides
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {getAllAudienceSlugs()
                .filter((s) => s !== slug)
                .slice(0, 6)
                .map((s) => {
                  const aud = getAudience(s);
                  if (!aud) return null;
                  return (
                    <Link
                      key={s}
                      href={`/for/${s}`}
                      className="flex items-center justify-between bg-white rounded-lg p-4 border border-slate-200 hover:border-brand-300 hover:shadow-sm transition-all"
                    >
                      <span className="font-medium text-slate-900 text-sm">{aud.title}</span>
                      <ArrowRight className="h-4 w-4 text-slate-400 shrink-0" />
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>

        {/* Also Compare */}
        <section className="py-8 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-slate-600 mb-4">
              Want to compare specific platforms head-to-head?
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/vs/clio-vs-mycase"
                className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-700 border border-slate-200 hover:border-brand-300 hover:text-brand-600 transition-all"
              >
                Clio vs MyCase
              </Link>
              <Link
                href="/vs/clio-vs-practicepanther"
                className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-700 border border-slate-200 hover:border-brand-300 hover:text-brand-600 transition-all"
              >
                Clio vs PracticePanther
              </Link>
              <Link
                href="/vs/clio-vs-smokeball"
                className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-700 border border-slate-200 hover:border-brand-300 hover:text-brand-600 transition-all"
              >
                Clio vs Smokeball
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-600">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Find the Right Software for Your {audience.title} Practice
            </h2>
            <p className="text-brand-100 mb-8">
              Start with a free trial of our top pick and see if it fits your workflow.
            </p>
            <a
              href={audience.topRecommendations[0]?.affiliateUrl || "https://www.clio.com"}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-medium text-brand-600 shadow-sm transition-all hover:bg-brand-50"
            >
              Try {audience.topRecommendations[0]?.name} Free
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
