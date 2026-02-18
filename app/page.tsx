import Link from "next/link";
import { ArrowRight, Check, Star, Users, Zap, Shield } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";

// Software data types
interface SoftwareItem {
  name: string;
  slug: string;
  description: string;
  price: string;
  rating: number;
  reviews: number;
  bestFor: string;
  highlighted: boolean;
}

const software: SoftwareItem[] = [
  {
    name: "Clio",
    slug: "clio",
    description: "The most popular legal practice management platform with 200+ integrations.",
    price: "From $39/user/mo",
    rating: 4.7,
    reviews: 1500,
    bestFor: "Firms needing integrations",
    highlighted: true,
  },
  {
    name: "MyCase",
    slug: "mycase",
    description: "Excellent client communication tools with built-in texting and client portal.",
    price: "From $39/user/mo",
    rating: 4.6,
    reviews: 800,
    bestFor: "Client-focused practices",
    highlighted: false,
  },
  {
    name: "PracticePanther",
    slug: "practicepanther",
    description: "Strong automation features for workflow efficiency and case management.",
    price: "From $49/user/mo",
    rating: 4.5,
    reviews: 600,
    bestFor: "Automation-focused firms",
    highlighted: false,
  },
  {
    name: "Smokeball",
    slug: "smokeball",
    description: "Automatic time tracking captures every minute — perfect for maximizing billables.",
    price: "From $89/user/mo",
    rating: 4.8,
    reviews: 400,
    bestFor: "Maximizing billable hours",
    highlighted: false,
  },
  {
    name: "Filevine",
    slug: "filevine",
    description: "Powerful for personal injury and high-volume litigation firms.",
    price: "Custom pricing",
    rating: 4.5,
    reviews: 350,
    bestFor: "PI & litigation firms",
    highlighted: false,
  },
  {
    name: "Rocket Matter",
    slug: "rocket-matter",
    description: "Reliable billing and matter management with excellent support.",
    price: "From $65/user/mo",
    rating: 4.4,
    reviews: 300,
    bestFor: "Billing-focused practices",
    highlighted: false,
  },
];

function SoftwareCard({ software }: { software: SoftwareItem }) {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-sm border transition-all hover:shadow-md hover:-translate-y-1 ${software.highlighted ? 'border-brand-300 ring-1 ring-brand-100' : 'border-slate-200'}`}>
      {software.highlighted && (
        <span className="inline-block px-2 py-1 text-xs font-medium text-brand-700 bg-brand-50 rounded-full mb-3">
          Most Popular
        </span>
      )}
      <h3 className="text-lg font-semibold text-slate-900">{software.name}</h3>
      <div className="flex items-center gap-1 mt-1 mb-3">
        <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
        <span className="text-sm font-medium text-slate-700">{software.rating}</span>
        <span className="text-sm text-slate-500">({software.reviews} reviews)</span>
      </div>
      <p className="text-sm text-slate-600 mb-4">{software.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-900">{software.price}</span>
        <span className="text-xs text-slate-500">Best for: {software.bestFor}</span>
      </div>
      <Link
        href={`/vs/clio-vs-${software.slug === 'clio' ? 'mycase' : software.slug}`}
        className="mt-4 flex items-center justify-center gap-2 w-full rounded-lg border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700 hover:bg-brand-100 transition-colors"
      >
        Compare
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-50 to-white pt-28 pb-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Find the Best Legal Practice Management Software
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              Independent, unbiased comparisons to help you choose the right software for your law firm. 
              No sales pitches — just honest reviews and real data.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/vs/clio-vs-mycase"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-md"
              >
                Compare Top Platforms
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/how-to-choose"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                How to Choose
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-8 border-y border-slate-100 bg-white">
          <div className="mx-auto max-w-4xl px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Check className="h-6 w-6 text-brand-600 mb-2" />
                <span className="text-sm font-medium text-slate-900">Independent Reviews</span>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="h-6 w-6 text-brand-600 mb-2" />
                <span className="text-sm font-medium text-slate-900">No Bias Guarantee</span>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-6 w-6 text-brand-600 mb-2" />
                <span className="text-sm font-medium text-slate-900">Real User Data</span>
              </div>
              <div className="flex flex-col items-center">
                <Zap className="h-6 w-6 text-brand-600 mb-2" />
                <span className="text-sm font-medium text-slate-900">Updated Monthly</span>
              </div>
            </div>
          </div>
        </section>

        {/* Software Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Top Legal Practice Management Platforms</h2>
              <p className="mt-3 text-lg text-slate-600">Compare features, pricing, and reviews across the leading solutions</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {software.map((s) => (
                <SoftwareCard key={s.slug} software={s} />
              ))}
            </div>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">Quick Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm border border-slate-200">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-4 px-4 text-left text-sm font-medium text-slate-600">Platform</th>
                    <th className="py-4 px-4 text-left text-sm font-medium text-slate-600">Starting Price</th>
                    <th className="py-4 px-4 text-left text-sm font-medium text-slate-600">Best For</th>
                    <th className="py-4 px-4 text-center text-sm font-medium text-slate-600">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {software.map((s) => (
                    <tr key={s.slug} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-4">
                        <span className="font-medium text-slate-900">{s.name}</span>
                      </td>
                      <td className="py-4 px-4 text-sm text-slate-600">{s.price}</td>
                      <td className="py-4 px-4 text-sm text-slate-600">{s.bestFor}</td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                          <span className="text-sm font-medium text-slate-700">{s.rating}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Popular Comparisons */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">Popular Comparisons</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Link
                href="/vs/clio-vs-mycase"
                className="flex items-center justify-between bg-white rounded-lg p-4 border border-slate-200 hover:border-brand-300 hover:shadow-sm transition-all"
              >
                <span className="font-medium text-slate-900">Clio vs MyCase</span>
                <ArrowRight className="h-4 w-4 text-slate-400" />
              </Link>
              <Link
                href="/vs/clio-vs-practicepanther"
                className="flex items-center justify-between bg-white rounded-lg p-4 border border-slate-200 hover:border-brand-300 hover:shadow-sm transition-all"
              >
                <span className="font-medium text-slate-900">Clio vs PracticePanther</span>
                <ArrowRight className="h-4 w-4 text-slate-400" />
              </Link>
              <Link
                href="/vs/clio-vs-smokeball"
                className="flex items-center justify-between bg-white rounded-lg p-4 border border-slate-200 hover:border-brand-300 hover:shadow-sm transition-all"
              >
                <span className="font-medium text-slate-900">Clio vs Smokeball</span>
                <ArrowRight className="h-4 w-4 text-slate-400" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-brand-600">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to find your perfect software?
            </h2>
            <p className="text-brand-100 mb-8 max-w-xl mx-auto">
              Use our comparison tool to see detailed feature breakdowns, pricing, and honest reviews.
            </p>
            <Link
              href="/vs/clio-vs-mycase"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-medium text-brand-600 shadow-sm transition-all hover:bg-brand-50"
            >
              Start Comparing
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
