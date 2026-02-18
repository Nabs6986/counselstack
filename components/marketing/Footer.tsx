import Link from "next/link";
import { Scale } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600">
                <Scale className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-slate-900">CounselStack</span>
            </Link>
            <p className="text-sm text-slate-600">
              Independent, unbiased comparisons of legal practice management software.
            </p>
          </div>

          {/* Comparisons */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Comparisons</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/vs/clio-vs-mycase" className="text-slate-600 hover:text-brand-600">Clio vs MyCase</Link></li>
              <li><Link href="/vs/clio-vs-practicepanther" className="text-slate-600 hover:text-brand-600">Clio vs PracticePanther</Link></li>
              <li><Link href="/vs/clio-vs-smokeball" className="text-slate-600 hover:text-brand-600">Clio vs Smokeball</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features" className="text-slate-600 hover:text-brand-600">Features Guide</Link></li>
              <li><Link href="/pricing" className="text-slate-600 hover:text-brand-600">Pricing Comparison</Link></li>
              <li><Link href="/how-to-choose" className="text-slate-600 hover:text-brand-600">How to Choose</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-slate-600 hover:text-brand-600">About</Link></li>
              <li><Link href="/contact" className="text-slate-600 hover:text-brand-600">Contact</Link></li>
              <li><Link href="/blog" className="text-slate-600 hover:text-brand-600">Blog</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} CounselStack. All rights reserved.</p>
          <p className="mt-2">
            Affiliate Disclosure: Some links may earn us a commission at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
