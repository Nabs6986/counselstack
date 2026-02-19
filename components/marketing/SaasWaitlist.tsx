"use client";

import { useState } from "react";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";

interface SaasWaitlistProps {
  niche: string; // e.g., "legal", "salon", "moving"
  headline?: string;
  subheadline?: string;
  beehiivFormId?: string;
}

export function SaasWaitlist({
  niche,
  headline = "None of these quite fit your needs?",
  subheadline = "We're building something new. Get early access.",
  beehiivFormId = "BEEHIIV_FORM_ID",
}: SaasWaitlistProps) {
  const [email, setEmail] = useState("");
  const [painPoint, setPainPoint] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Beehiiv form submission
    // Replace with actual Beehiiv embed or API call
    try {
      // For now, log to console - Arnab will wire to Beehiiv
      console.log({ email, painPoint, niche, timestamp: new Date().toISOString() });

      // Beehiiv embed form submission would go here
      // Or use their API: https://api.beehiiv.com/v2/publications/{pub_id}/subscriptions

      setSubmitted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl p-8 text-center">
        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-slate-900 mb-2">You&apos;re on the list!</h3>
        <p className="text-slate-600">We&apos;ll reach out when we have something to show you.</p>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Mail className="h-4 w-4" />
          Early Access
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{headline}</h2>

        <p className="text-slate-300 mb-8">{subheadline}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? "..." : "Get Early Access"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <textarea
            value={painPoint}
            onChange={(e) => setPainPoint(e.target.value)}
            placeholder="What's missing from existing tools? (optional but helps us build the right thing)"
            rows={3}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
          />
        </form>

        <p className="text-slate-400 text-sm mt-6">
          Join 0 others waiting for something better. No spam, ever.
        </p>

        {/* Hidden field for Beehiiv wiring - remove console.log and replace with actual submission */}
        <input type="hidden" name="beehiiv_form_id" value={beehiivFormId} />
      </div>
    </section>
  );
}
