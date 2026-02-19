import { Metadata } from "next";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { CheckCircle, Users, Zap, DollarSign } from "lucide-react";
import { WaitlistForm } from "./WaitlistForm";

export const metadata: Metadata = {
  title: "Early Access Waitlist | CounselStack",
  description:
    "Join the waitlist for simpler, more affordable legal practice management software. Built for solo attorneys and small firms.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Get Early Access | CounselStack",
    description:
      "We're building lightweight legal software for solo attorneys and small firms. No bloat, fair pricing.",
  },
};

const benefits = [
  {
    icon: DollarSign,
    title: "Fair Pricing",
    desc: "No per-user fees that punish growth. Flat rate plans for small firms.",
  },
  {
    icon: Zap,
    title: "No Feature Bloat",
    desc: "The 20% of features used 80% of the time, done really well.",
  },
  {
    icon: Users,
    title: "Built With You",
    desc: "Early access members shape the roadmap. Your pain points drive our priorities.",
  },
];

export default function WaitlistPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🚀 Early Access — Limited Spots
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Legal software that doesn&apos;t
              <br />
              <span className="text-brand-400">cost a fortune</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-4">
              We&apos;re building lightweight practice management software for solo attorneys
              and small firms who are tired of enterprise tools with enterprise prices.
            </p>
            <p className="text-slate-400 mb-12">
              Join the waitlist. Help us build the right thing.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 mb-4">
                    <Icon className="h-6 w-6 text-brand-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Waitlist Form */}
        <section className="py-16">
          <div className="mx-auto max-w-2xl px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Join the Waitlist</h2>
              <p className="text-slate-600">
                Tell us what you need. The more detail you share, the better we can build for you.
              </p>
            </div>

            <WaitlistForm />
          </div>
        </section>

        {/* Social Proof Placeholder */}
        <section className="py-16 bg-brand-50 border-y border-brand-100">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <CheckCircle className="h-6 w-6 text-brand-500" />
              <span className="text-lg font-semibold text-slate-900">
                Join attorneys already on the list
              </span>
            </div>
            <p className="text-slate-600 text-sm">
              We&apos;ll email you when we&apos;re ready for beta. No spam, unsubscribe anytime.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
