"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const FIRM_SIZES = [
  "Solo practitioner",
  "2–5 attorneys",
  "6–15 attorneys",
  "16–50 attorneys",
  "50+ attorneys",
];

const CURRENT_TOOLS = [
  "Clio",
  "MyCase",
  "PracticePanther",
  "Filevine",
  "Smokeball",
  "CosmoLex",
  "Spreadsheets / no software",
  "Other",
];

const PAIN_POINT_OPTIONS = [
  "Too expensive",
  "Too complex / overwhelming",
  "Missing features I actually need",
  "Poor customer support",
  "Clunky mobile experience",
  "Hard to onboard staff",
  "Bad billing / invoicing",
  "No good client portal",
];

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [firmSize, setFirmSize] = useState("");
  const [currentTool, setCurrentTool] = useState("");
  const [selectedPainPoints, setSelectedPainPoints] = useState<string[]>([]);
  const [openPainPoint, setOpenPainPoint] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePainPoint = (point: string) => {
    setSelectedPainPoints((prev) =>
      prev.includes(point) ? prev.filter((p) => p !== point) : [...prev, point]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: Wire to Beehiiv API or form endpoint
      // https://api.beehiiv.com/v2/publications/{BEEHIIV_PUB_ID}/subscriptions
      console.log({
        email,
        firmSize,
        currentTool,
        painPoints: selectedPainPoints,
        openPainPoint,
        niche: "legal",
        source: "counselstack-waitlist",
        timestamp: new Date().toISOString(),
      });

      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl p-12 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-slate-900 mb-3">You&apos;re on the list!</h3>
        <p className="text-slate-600 max-w-sm mx-auto">
          Thanks for sharing your perspective. We&apos;ll be in touch when we&apos;re ready for
          beta testers.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 space-y-6"
    >
      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
          Email address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@lawfirm.com"
          required
          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
        />
      </div>

      {/* Firm Size */}
      <div>
        <label htmlFor="firmSize" className="block text-sm font-medium text-slate-700 mb-2">
          Firm size
        </label>
        <select
          id="firmSize"
          value={firmSize}
          onChange={(e) => setFirmSize(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white"
        >
          <option value="">Select firm size...</option>
          {FIRM_SIZES.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      {/* Current Tool */}
      <div>
        <label htmlFor="currentTool" className="block text-sm font-medium text-slate-700 mb-2">
          What software are you using now?
        </label>
        <select
          id="currentTool"
          value={currentTool}
          onChange={(e) => setCurrentTool(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white"
        >
          <option value="">Select current tool...</option>
          {CURRENT_TOOLS.map((tool) => (
            <option key={tool} value={tool}>
              {tool}
            </option>
          ))}
        </select>
      </div>

      {/* Pain Points */}
      <div>
        <p className="block text-sm font-medium text-slate-700 mb-3">
          What frustrates you most? (select all that apply)
        </p>
        <div className="grid grid-cols-2 gap-2">
          {PAIN_POINT_OPTIONS.map((point) => (
            <button
              key={point}
              type="button"
              onClick={() => togglePainPoint(point)}
              className={`text-left px-3 py-2 rounded-lg text-sm border transition-colors ${
                selectedPainPoints.includes(point)
                  ? "bg-brand-50 border-brand-400 text-brand-700 font-medium"
                  : "bg-white border-slate-200 text-slate-600 hover:border-brand-300"
              }`}
            >
              {point}
            </button>
          ))}
        </div>
      </div>

      {/* Open Pain Point */}
      <div>
        <label htmlFor="openPainPoint" className="block text-sm font-medium text-slate-700 mb-2">
          Anything else? What&apos;s the one thing missing from every tool you&apos;ve tried?
        </label>
        <textarea
          id="openPainPoint"
          value={openPainPoint}
          onChange={(e) => setOpenPainPoint(e.target.value)}
          placeholder="e.g. I need something that works offline at courthouses..."
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading || !email}
        className="w-full px-6 py-4 bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 text-base"
      >
        {loading ? "Joining..." : "Join the Waitlist"}
        <ArrowRight className="h-5 w-5" />
      </button>

      <p className="text-center text-slate-400 text-xs">
        No spam. No sales calls. Just product updates when we have something real to show.
      </p>
    </form>
  );
}
