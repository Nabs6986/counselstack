import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, X, Star, HelpCircle, ArrowRight, ExternalLink, Shield, Zap, DollarSign } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { getSoftware, getAllSoftwareSlugs, SoftwareReview } from "../_data/software";
import { getComparison, getAllComparisonSlugs } from "@/app/vs/_data/comparisons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSoftwareSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const software = getSoftware(slug);

  if (!software) return { title: "Software Not Found" };

  return {
    title: software.metaTitle,
    description: software.metaDescription,
    openGraph: {
      title: software.metaTitle,
      description: software.metaDescription,
    },
  };
}

function StarRating({ rating, count }: { rating: number; count: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < fullStars
                ? "fill-yellow-400 text-yellow-400"
                : i === fullStars && hasHalf
                ? "fill-yellow-200 text-yellow-400"
                : "text-slate-300"
            }`}
          />
        ))}
      </div>
      <span className="font-semibold text-slate-900">{rating}</span>
      <span className="text-sm text-slate-500">({count.toLocaleString()} reviews)</span>
    </div>
  );
}

function FeatureIcon({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="h-5 w-5 text-green-500 shrink-0" />;
  }
  if (value === false) {
    return <X className="h-5 w-5 text-red-400 shrink-0" />;
  }
  return (
    <span className="inline-flex items-center rounded-full bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700">
      {value}
    </span>
  );
}

export default async function SoftwarePage({ params }: Props) {
  const { slug } = await params;
  const software = getSoftware(slug);

  if (!software) {
    notFound();
  }

  // JSON-LD schemas
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": software.name,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "description": software.quickVerdict,
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": software.pricingTiers[0]?.price.replace(/[^0-9]/g, "") || "49",
      "offerCount": software.pricingTiers.length,
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": software.rating,
      "reviewCount": software.ratingCount,
      "bestRating": "5",
      "worstRating": "1",
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": software.rating,
        "bestRating": "5",
      },
      "author": {
        "@type": "Organization",
        "name": "CounselStack",
      },
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": software.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  const relatedComparisons = software.comparisonSlugs
    .map((s) => getComparison(s))
    .filter(Boolean);

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-b from-brand-50 to-white pt-12 pb-10">
          <div className="mx-auto max-w-5xl px-6">
            <nav className="mb-6 text-sm text-slate-500">
              <Link href="/" className="hover:text-brand-600">Home</Link>
              <span className="mx-2">/</span>
              <span>Software Reviews</span>
              <span className="mx-2">/</span>
              <span className="text-slate-700">{software.name}</span>
            </nav>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Logo */}
              <div
                className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl text-2xl font-bold text-white shadow-lg"
                style={{ backgroundColor: software.logoColor }}
              >
                {software.logoInitials}
              </div>

              {/* Info */}
              <div className="flex-1">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-2">
                  {software.name} Review 2026
                </h1>
                <p className="text-lg text-slate-600 mb-4">{software.tagline}</p>
                <StarRating rating={software.rating} count={software.ratingCount} />

                <div className="mt-4 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <DollarSign className="h-4 w-4 text-brand-500" />
                    <span><strong>Price:</strong> {software.priceRange}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Zap className="h-4 w-4 text-brand-500" />
                    <span><strong>Best for:</strong> {software.bestFor}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Shield className="h-4 w-4 text-brand-500" />
                    <span><strong>Founded:</strong> {software.founded}</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="shrink-0">
                <a
                  href={software.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
                >
                  Visit {software.name}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Verdict */}
        <section className="py-8 bg-brand-50/60 border-y border-brand-100">
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 shrink-0">
                <Star className="h-5 w-5 text-brand-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900 mb-2">Quick Verdict</h2>
                <p className="text-slate-700 leading-relaxed">{software.quickVerdict}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-14">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">{software.name} Pricing (2026)</h2>
            <p className="text-slate-500 mb-8 text-sm">{software.pricingNote}</p>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {software.pricingTiers.map((tier) => (
                <div
                  key={tier.tier}
                  className={`relative rounded-xl border p-5 ${
                    tier.highlighted
                      ? "border-brand-400 bg-brand-50 shadow-md"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-slate-900">{tier.tier}</h3>
                    <p className="text-2xl font-bold text-brand-600 mt-1">{tier.price}</p>
                    <p className="text-xs text-slate-500 mt-1">{tier.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Matrix */}
        <section className="py-14 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Complete Feature Breakdown</h2>

            <div className="space-y-8">
              {software.features.map((category) => (
                <div key={category.category} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                  <div className="bg-slate-800 px-5 py-3">
                    <h3 className="text-sm font-semibold text-white">{category.category}</h3>
                  </div>
                  <table className="w-full">
                    <tbody className="divide-y divide-slate-100">
                      {category.items.map((item) => (
                        <tr key={item.name}>
                          <td className="py-3 px-5 text-sm text-slate-700">
                            {item.name}
                            {item.note && (
                              <span className="ml-2 text-xs text-slate-400">({item.note})</span>
                            )}
                          </td>
                          <td className="py-3 px-5 text-right">
                            <span className="inline-flex justify-end">
                              <FeatureIcon value={item.included} />
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="py-14">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Pros & Cons</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Pros */}
              <div className="rounded-xl border border-green-200 bg-green-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-5 flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  Pros
                </h3>
                <ul className="space-y-3">
                  {software.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="rounded-xl border border-red-200 bg-red-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-5 flex items-center gap-2">
                  <X className="h-5 w-5 text-red-400" />
                  Cons
                </h3>
                <ul className="space-y-3">
                  {software.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                      <X className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Best For / Not Ideal For */}
        <section className="py-14 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Who Is {software.name} Best For?</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Best For */}
              <div className="rounded-xl bg-brand-50 border border-brand-200 p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-5">
                  ✅ {software.name} is a great fit if...
                </h3>
                <ul className="space-y-3">
                  {software.bestForList.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                      <Check className="h-4 w-4 text-brand-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Ideal For */}
              <div className="rounded-xl bg-slate-100 border border-slate-200 p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-5">
                  ⚠️ You may want to look elsewhere if...
                </h3>
                <ul className="space-y-3">
                  {software.notIdealForList.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                      <ArrowRight className="h-4 w-4 text-slate-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Links */}
        {relatedComparisons.length > 0 && (
          <section className="py-14">
            <div className="mx-auto max-w-5xl px-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                See How {software.name} Compares
              </h2>
              <p className="text-slate-500 mb-6 text-sm">
                Read our side-by-side comparisons featuring {software.name}.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedComparisons.map((comp) => {
                  if (!comp) return null;
                  return (
                    <Link
                      key={comp.slug}
                      href={`/vs/${comp.slug}`}
                      className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:border-brand-300 hover:shadow-md transition-all"
                    >
                      <span className="font-medium text-slate-900">
                        {comp.platformA.name} vs {comp.platformB.name}
                      </span>
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className={`py-14 ${relatedComparisons.length > 0 ? "bg-slate-50" : ""}`}>
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Frequently Asked Questions About {software.name}
            </h2>

            <div className="space-y-4">
              {software.faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
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

        {/* Other Software Reviews */}
        <section className="py-14 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Other Software Reviews</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {getAllSoftwareSlugs()
                .filter((s) => s !== slug)
                .map((s) => {
                  const sw = getSoftware(s);
                  if (!sw) return null;
                  return (
                    <Link
                      key={s}
                      href={`/software/${s}`}
                      className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:border-brand-300 hover:shadow-md transition-all"
                    >
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white"
                        style={{ backgroundColor: sw.logoColor }}
                      >
                        {sw.logoInitials}
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{sw.name}</p>
                        <p className="text-xs text-slate-500">{sw.priceRange}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-slate-400 ml-auto" />
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
              Ready to try {software.name}?
            </h2>
            <p className="text-brand-100 mb-8 max-w-xl mx-auto">
              Start your free trial and see if {software.name} is the right fit for your law firm.
            </p>
            <a
              href={software.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-600 shadow-sm transition-all hover:bg-brand-50"
            >
              Visit {software.name}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
