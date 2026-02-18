import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter"
});

// SEO-GEO Optimized Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://counselstack.com"),
  title: "CounselStack - Compare Legal Practice Management Software",
  description: "Independent, unbiased comparisons of legal practice management software. Find the best solution for your law firm: Clio, MyCase, PracticePanther, and more.",
  keywords: ["legal practice management software", "law firm software", "Clio", "MyCase", "PracticePanther", "legal billing software", "attorney software"],
  authors: [{ name: "CounselStack" }],
  creator: "CounselStack",
  publisher: "CounselStack",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://counselstack.com",
    siteName: "CounselStack",
    title: "CounselStack - Compare Legal Practice Management Software",
    description: "Independent, unbiased comparisons of legal practice management software. Find the best solution for your law firm.",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "CounselStack - Legal Software Comparisons"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "CounselStack - Compare Legal Practice Management Software",
    description: "Independent, unbiased comparisons of legal practice management software for law firms.",
    images: ["/og-image.png"]
  },
  alternates: {
    canonical: "https://counselstack.com"
  },
  category: "Software"
};

// JSON-LD Structured Data for AI Search (GEO)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization
    {
      "@type": "Organization",
      "@id": "https://counselstack.com/#organization",
      "name": "CounselStack",
      "url": "https://counselstack.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://counselstack.com/logo.png"
      },
      "description": "CounselStack provides independent, unbiased reviews and comparisons of legal practice management software to help law firms make informed decisions.",
      "sameAs": []
    },
    // WebSite with SearchAction
    {
      "@type": "WebSite",
      "@id": "https://counselstack.com/#website",
      "url": "https://counselstack.com",
      "name": "CounselStack",
      "publisher": { "@id": "https://counselstack.com/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://counselstack.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    // WebPage
    {
      "@type": "WebPage",
      "@id": "https://counselstack.com/#webpage",
      "url": "https://counselstack.com",
      "name": "CounselStack - Compare Legal Practice Management Software",
      "description": "Independent, unbiased comparisons of legal practice management software for law firms.",
      "isPartOf": { "@id": "https://counselstack.com/#website" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://counselstack.com/og-image.png"
      }
    },
    // FAQPage for AI Search visibility
    {
      "@type": "FAQPage",
      "@id": "https://counselstack.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best legal practice management software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best legal practice management software depends on your firm's needs. Clio is the most popular overall, MyCase excels for client communication, PracticePanther offers automation, and Smokeball provides automatic time tracking. Compare options at CounselStack."
          }
        },
        {
          "@type": "Question",
          "name": "How much does legal practice management software cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Legal practice management software typically costs $39-$89 per user/month for entry-level plans. Clio starts at $39/mo, MyCase at $39/mo, PracticePanther at $49/mo, and Smokeball at $89/mo. Enterprise plans can exceed $150/user/month."
          }
        },
        {
          "@type": "Question",
          "name": "Is Clio better than MyCase?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Clio offers more integrations (200+) and robust reporting, while MyCase excels at client communication with built-in texting and a superior client portal. Clio is better for firms needing extensive integrations; MyCase is better for client-focused practices."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* JSON-LD Structured Data for SEO + GEO (AI Search) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
