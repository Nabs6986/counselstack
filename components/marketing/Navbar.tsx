import Link from "next/link";
import { Scale } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-slate-200/50 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600">
            <Scale className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-semibold text-slate-900">CounselStack</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/vs/clio-vs-mycase" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Comparisons</Link>
          <Link href="/features" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Features Guide</Link>
          <Link href="/pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Pricing</Link>
          <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">About</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/vs/clio-vs-mycase"
            className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-md hover:-translate-y-0.5"
          >
            Compare Software
          </Link>
        </div>
      </div>
    </header>
  );
}
