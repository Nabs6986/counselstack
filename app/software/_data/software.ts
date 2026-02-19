import { getAffiliateUrl } from "@/lib/affiliateConfig";

export interface PricingTier {
  tier: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface SoftwareReview {
  slug: string;
  name: string;
  tagline: string;
  logoInitials: string;
  logoColor: string;
  rating: number;
  ratingCount: number;
  founded: string;
  website: string;
  affiliateUrl: string;
  quickVerdict: string;
  priceRange: string;
  bestFor: string;
  notIdealFor: string;
  pricingTiers: PricingTier[];
  pricingNote: string;
  features: {
    category: string;
    items: { name: string; included: boolean | string; note?: string }[];
  }[];
  pros: string[];
  cons: string[];
  bestForList: string[];
  notIdealForList: string[];
  comparisonSlugs: string[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const softwareReviews: Record<string, SoftwareReview> = {
  clio: {
    slug: "clio",
    name: "Clio",
    tagline: "The World's Leading Legal Practice Management Software",
    logoInitials: "CL",
    logoColor: "#4F46E5",
    rating: 4.6,
    ratingCount: 1580,
    founded: "2008",
    website: "https://www.clio.com",
    affiliateUrl: getAffiliateUrl("Clio", "software-review"),
    quickVerdict:
      "Clio is the industry's gold standard for legal practice management, trusted by 150,000+ legal professionals worldwide. With 200+ integrations, robust reporting, and a mature feature set covering everything from time tracking to client intake, it's the best all-around choice for small to mid-size firms — though its higher tiers can get pricey.",
    priceRange: "$49–$139/user/mo",
    bestFor: "Small to mid-size firms needing extensive integrations",
    notIdealFor: "Solo attorneys on tight budgets or firms needing automatic time capture",
    pricingTiers: [
      {
        tier: "EasyStart",
        price: "$49/user/mo",
        description: "Billed annually. Essential tools for new or growing firms.",
        features: [
          "Matter & contact management",
          "Time & expense tracking",
          "Basic billing & invoicing",
          "Document management",
          "Mobile app (iOS & Android)",
          "Online payments (Clio Payments)",
          "Basic reports",
          "Email & calendar sync",
        ],
      },
      {
        tier: "Essentials",
        price: "$79/user/mo",
        description: "Billed annually. For firms ready to streamline client communication.",
        features: [
          "Everything in EasyStart",
          "Secure client portal",
          "Two-way client texting",
          "Document templates & auto-fill",
          "Court calendar rules & deadline tracking",
          "200+ app integrations",
          "Trust accounting (IOLTA)",
          "Custom fields",
        ],
        highlighted: true,
      },
      {
        tier: "Advanced",
        price: "$109/user/mo",
        description: "Billed annually. Automation and intelligence for growing firms.",
        features: [
          "Everything in Essentials",
          "Workflow automation",
          "Advanced reporting & analytics",
          "Custom user permissions",
          "Priority support",
          "Firm timeline & activity feeds",
          "Revenue & performance dashboards",
        ],
      },
      {
        tier: "Complete",
        price: "$139/user/mo",
        description: "Billed annually. Full suite including Clio Grow CRM.",
        features: [
          "Everything in Advanced",
          "Clio Grow (CRM & intake)",
          "Client intake forms",
          "Lead tracking & pipeline",
          "AI-powered document drafting",
          "Dedicated account manager",
          "Onboarding assistance",
        ],
      },
    ],
    pricingNote:
      "All prices shown are billed annually. Monthly billing is approximately 20% higher. Clio Grow (CRM) is also sold separately starting at $49/user/mo. A 7-day free trial is available on all plans.",
    features: [
      {
        category: "Case & Matter Management",
        items: [
          { name: "Matter dashboard & overview", included: true },
          { name: "Custom matter types & fields", included: true },
          { name: "Conflict of interest check", included: true },
          { name: "Statute of limitations tracking", included: true },
          { name: "Task management & assignments", included: true },
        ],
      },
      {
        category: "Time & Billing",
        items: [
          { name: "Time tracking (manual)", included: true },
          { name: "Automatic time capture", included: false },
          { name: "Expense tracking", included: true },
          { name: "Online invoicing & payments", included: true },
          { name: "Trust accounting (IOLTA)", included: "Essentials+" },
          { name: "Batch billing", included: true },
          { name: "LEDES billing", included: true },
          { name: "Contingency fee billing", included: true },
        ],
      },
      {
        category: "Client Communication",
        items: [
          { name: "Secure client portal", included: "Essentials+" },
          { name: "Two-way client texting", included: "Essentials+" },
          { name: "Email integration", included: true },
          { name: "Client intake forms", included: "Complete" },
          { name: "eSignature", included: "Add-on" },
        ],
      },
      {
        category: "Document Management",
        items: [
          { name: "Document storage & management", included: true },
          { name: "Document templates", included: "Essentials+" },
          { name: "Document automation", included: "Limited" },
          { name: "eSignature integration", included: "Add-on" },
          { name: "Version control", included: true },
        ],
      },
      {
        category: "Integrations & Reporting",
        items: [
          { name: "200+ third-party integrations", included: "Essentials+" },
          { name: "QuickBooks integration", included: true },
          { name: "Custom reports", included: "Advanced+" },
          { name: "Mobile app", included: true },
          { name: "Open API", included: true },
        ],
      },
    ],
    pros: [
      "Industry-leading 200+ integrations with virtually every legal tool",
      "Mature, reliable platform trusted by 150,000+ legal professionals since 2008",
      "Clio Grow CRM provides best-in-class client intake and lead management",
      "Excellent mobile app for tracking time and managing matters on the go",
      "World-class customer support with dedicated legal software specialists",
      "Robust reporting and business intelligence at the Advanced tier",
      "Two-way client texting now included in the Essentials plan",
    ],
    cons: [
      "Automatic time capture not available — all tracking is manual",
      "eSignature requires a paid add-on (not built in)",
      "Pricing jumps significantly between tiers ($49 → $79 → $109 → $139)",
      "Document automation is limited compared to Smokeball",
      "Clio Grow CRM only included at the Complete tier ($139/mo)",
    ],
    bestForList: [
      "Firms that rely heavily on third-party app integrations",
      "Growing firms that need scalable, enterprise-grade features",
      "Practices wanting a proven, stable platform with strong support",
      "Firms that need robust reporting and performance analytics",
      "Law firms with client intake workflows (Complete plan)",
    ],
    notIdealForList: [
      "Firms that want automatic time capture (Smokeball is better)",
      "Budget-conscious solos who don't need 200+ integrations",
      "Practices needing built-in eSignature without add-on costs",
      "High-volume document automation practices (consider Smokeball)",
    ],
    comparisonSlugs: ["clio-vs-mycase", "clio-vs-practicepanther", "clio-vs-smokeball"],
    faqs: [
      {
        question: "How much does Clio cost in 2026?",
        answer:
          "Clio's pricing in 2026 ranges from $49 to $139 per user per month (billed annually). The four plans are EasyStart ($49), Essentials ($79), Advanced ($109), and Complete ($139). Monthly billing is roughly 20% higher. A 7-day free trial is available. Clio Grow (the CRM/intake add-on) is included in the Complete plan or available separately.",
      },
      {
        question: "Is Clio good for solo attorneys?",
        answer:
          "Yes, many solo attorneys use Clio's EasyStart plan ($49/mo) for basic matter management and billing. However, solos who need client portals or integrations will need the Essentials plan ($79/mo). Clio is feature-rich, which means some solos pay for capabilities they don't use — MyCase or PracticePanther may be more cost-effective for very small practices.",
      },
      {
        question: "Does Clio have automatic time tracking?",
        answer:
          "No, Clio does not offer automatic time tracking. All time entry is manual. If automatic time capture is important to your firm (tracking every minute spent in email, documents, etc.), Smokeball is the better choice — its Activity Intelligence feature automatically tracks time in the background.",
      },
      {
        question: "What is Clio Grow and do I need it?",
        answer:
          "Clio Grow is Clio's CRM and client intake module. It handles lead tracking, intake forms, e-signatures for intake documents, and conversion analytics. It's included in the Complete plan ($139/mo) or available separately starting at $49/mo per user. If your firm actively markets for new clients and needs a structured intake process, Clio Grow is extremely valuable.",
      },
      {
        question: "How does Clio compare to its competitors in 2026?",
        answer:
          "Clio leads the market in integrations (200+ vs. 50-100 for competitors), has the largest user community, and offers the most mature feature set. It's typically priced in the middle of the market. Smokeball beats Clio on automatic time tracking and document automation; MyCase excels at client communication; PracticePanther offers better automation at lower price points.",
      },
    ],
    metaTitle: "Clio Review 2026: Pricing, Features, Pros & Cons | CounselStack",
    metaDescription:
      "In-depth Clio review for 2026. Complete pricing breakdown ($49–$139/user/mo), full feature list, pros & cons, and who it's best for. Updated February 2026.",
  },

  mycase: {
    slug: "mycase",
    name: "MyCase",
    tagline: "Legal Practice Management Built Around Client Communication",
    logoInitials: "MC",
    logoColor: "#0EA5E9",
    rating: 4.5,
    ratingCount: 940,
    founded: "2010",
    website: "https://www.mycase.com",
    affiliateUrl: getAffiliateUrl("MyCase", "software-review"),
    quickVerdict:
      "MyCase is the best legal practice management software for firms that put client communication first. Its built-in two-way texting, superior client portal, and all-in-one pricing make it a compelling alternative to Clio — especially for small and mid-size firms that want seamless client engagement without a patchwork of integrations.",
    priceRange: "$39–$109/user/mo",
    bestFor: "Client-focused practices prioritizing communication and simplicity",
    notIdealFor: "Large firms needing enterprise-grade reporting or 200+ integrations",
    pricingTiers: [
      {
        tier: "Basic",
        price: "$39/user/mo",
        description: "Billed annually. Core tools for solo and small firm management.",
        features: [
          "Matter & contact management",
          "Time & expense tracking",
          "Billing & invoicing",
          "Document management & storage",
          "Secure client portal",
          "Mobile app (iOS & Android)",
          "Calendar & task management",
          "Basic reporting",
        ],
      },
      {
        tier: "Pro",
        price: "$89/user/mo",
        description: "Billed annually. Enhanced communication and payment tools.",
        features: [
          "Everything in Basic",
          "Two-way text messaging with clients",
          "Built-in eSignature (unlimited)",
          "QuickBooks integration",
          "Trust accounting (IOLTA)",
          "Online payment processing",
          "Court rules & deadline tracking",
          "Custom fields",
        ],
        highlighted: true,
      },
      {
        tier: "Advanced",
        price: "$109/user/mo",
        description: "Billed annually. Full-featured with intake and analytics.",
        features: [
          "Everything in Pro",
          "Lead management & intake",
          "Custom intake forms",
          "Advanced reporting & analytics",
          "Multiple trust accounts",
          "Split billing",
          "Priority support",
          "Workflow automation",
        ],
      },
    ],
    pricingNote:
      "All prices are billed annually. Monthly billing adds approximately $10/user/month. MyCase includes a free client portal at all tiers. A 10-day free trial is available with no credit card required.",
    features: [
      {
        category: "Case & Matter Management",
        items: [
          { name: "Matter dashboard & overview", included: true },
          { name: "Custom matter types & fields", included: "Pro+" },
          { name: "Conflict of interest check", included: true },
          { name: "Statute of limitations tracking", included: true },
          { name: "Task & event management", included: true },
        ],
      },
      {
        category: "Time & Billing",
        items: [
          { name: "Time tracking (manual)", included: true },
          { name: "Automatic time capture", included: false },
          { name: "Expense tracking", included: true },
          { name: "Online invoicing & payments", included: true },
          { name: "Trust accounting (IOLTA)", included: "Pro+" },
          { name: "Batch billing", included: "Pro+" },
          { name: "LEDES billing", included: "Advanced" },
          { name: "Flat fee & contingency billing", included: true },
        ],
      },
      {
        category: "Client Communication",
        items: [
          { name: "Secure client portal (all plans)", included: true },
          { name: "Two-way text messaging", included: "Pro+" },
          { name: "Email integration", included: true },
          { name: "Client intake forms", included: "Advanced" },
          { name: "Built-in eSignature", included: "Pro+" },
        ],
      },
      {
        category: "Document Management",
        items: [
          { name: "Document storage & management", included: true },
          { name: "Document templates", included: true },
          { name: "eSignature built-in", included: "Pro+" },
          { name: "Version control", included: true },
          { name: "Shared documents with clients", included: true },
        ],
      },
      {
        category: "Integrations & Reporting",
        items: [
          { name: "QuickBooks integration", included: "Pro+" },
          { name: "Third-party integrations (70+)", included: true },
          { name: "Custom reports", included: "Advanced" },
          { name: "Mobile app", included: true },
          { name: "Open API", included: true },
        ],
      },
    ],
    pros: [
      "Client portal included on ALL plans — even the $39/mo Basic tier",
      "Built-in two-way text messaging with clients (no third-party integration needed)",
      "eSignature is built-in at the Pro tier, not a paid add-on",
      "Intuitive, user-friendly interface with minimal learning curve",
      "10-day free trial with no credit card required",
      "Competitive pricing, especially the $39/mo Basic plan",
      "Strong mobile app for attorneys working remotely",
    ],
    cons: [
      "Fewer integrations than Clio (70+ vs. 200+)",
      "Advanced reporting only available at the $109/mo tier",
      "Lead management and intake forms require the Advanced plan",
      "Less mature automation capabilities compared to PracticePanther",
      "No automatic time capture",
    ],
    bestForList: [
      "Firms that prioritize client communication and engagement",
      "Solo and small firm attorneys wanting an all-in-one solution",
      "Practices that want eSignature included without extra cost",
      "Attorneys who communicate with clients via text messaging",
      "Firms looking for competitive pricing with a strong feature set",
    ],
    notIdealForList: [
      "Large firms needing 200+ integrations or enterprise reporting",
      "Firms that require sophisticated workflow automation",
      "Practices with heavy document automation needs",
      "Firms needing automatic time capture",
    ],
    comparisonSlugs: ["clio-vs-mycase"],
    faqs: [
      {
        question: "How much does MyCase cost in 2026?",
        answer:
          "MyCase offers three pricing tiers in 2026: Basic at $39/user/month, Pro at $89/user/month, and Advanced at $109/user/month (all billed annually). Monthly billing is slightly higher. The Basic plan includes a client portal, which is unique at this price point. A 10-day free trial is available with no credit card required.",
      },
      {
        question: "Does MyCase include eSignature?",
        answer:
          "Yes, MyCase includes built-in eSignature at the Pro tier ($89/user/month) and above. Unlike Clio, which requires a paid add-on for eSignature, MyCase bundles it into the subscription price. Unlimited eSignature sends are included with no per-signature fees.",
      },
      {
        question: "Does MyCase have a client portal?",
        answer:
          "Yes — and uniquely, MyCase includes its client portal on all plans, including the entry-level Basic plan ($39/mo). Clients can view case updates, share documents, pay invoices, and communicate through the portal. Most competitors either charge extra or reserve the portal for higher tiers.",
      },
      {
        question: "Can clients text their attorney through MyCase?",
        answer:
          "Yes. MyCase Pro and Advanced plans include two-way text messaging, allowing attorneys and staff to text clients directly through the MyCase platform. Messages are logged to the matter for compliance purposes. This is one of MyCase's standout features compared to most competitors.",
      },
      {
        question: "How does MyCase compare to Clio?",
        answer:
          "MyCase and Clio both start at similar price points, but differ in strengths. MyCase wins on client communication (built-in texting, included portal, built-in eSignature), while Clio wins on integrations (200+ vs. 70+) and reporting depth. MyCase is typically preferred by client-focused small firms; Clio is preferred by firms needing extensive third-party connectivity.",
      },
    ],
    metaTitle: "MyCase Review 2026: Pricing, Features, Pros & Cons | CounselStack",
    metaDescription:
      "Complete MyCase review for 2026. Full pricing breakdown ($39–$109/user/mo), feature analysis, pros & cons, and who it's best for. Updated February 2026.",
  },

  practicepanther: {
    slug: "practicepanther",
    name: "PracticePanther",
    tagline: "The Most Automated Legal Practice Management Software",
    logoInitials: "PP",
    logoColor: "#F59E0B",
    rating: 4.5,
    ratingCount: 670,
    founded: "2012",
    website: "https://www.practicepanther.com",
    affiliateUrl: getAffiliateUrl("PracticePanther", "software-review"),
    quickVerdict:
      "PracticePanther is the automation champion of legal practice management software. With task & event workflows available on all plans, native two-way texting, built-in eSignature, and a modern interface, it's an excellent choice for efficiency-focused firms that want powerful features without paying premium prices.",
    priceRange: "$49–$89/user/mo",
    bestFor: "Automation-focused firms and solo practitioners",
    notIdealFor: "Large firms needing enterprise reporting or 200+ integrations",
    pricingTiers: [
      {
        tier: "Solo",
        price: "$49/user/mo",
        description: "Billed annually ($59/mo monthly). Core features for solo attorneys.",
        features: [
          "Contact & matter management",
          "Time & expense tracking",
          "Document templates & auto-fill",
          "Task & event workflows (automation)",
          "Native ePayments (PantherPayments)",
          "Trust accounting",
          "Secure client portal",
          "Daily agenda emails",
          "Mobile app (iOS & Android)",
          "QuickBooks Online integration",
          "Email & calendar sync",
          "1 live training session",
        ],
      },
      {
        tier: "Essential",
        price: "$69/user/mo",
        description: "Billed annually ($79/mo monthly). For growing firms.",
        features: [
          "Everything in Solo",
          "Custom fields",
          "Custom security roles",
          "Invoice read alerts",
          "Multiple bank accounts",
          "Dropbox, Box.com & MailChimp sync",
          "Automated payment reminders",
          "Recurring payment plans",
          "3 live training sessions",
        ],
        highlighted: true,
      },
      {
        tier: "Business",
        price: "$89/user/mo",
        description: "Billed annually ($99/mo monthly). Full-featured with VIP support.",
        features: [
          "Everything in Essential",
          "Native 2-way business texting",
          "Client intake forms",
          "Native eSignature (unlimited sends)",
          "Attorney revenue report",
          "LEDES / UTBMS billing codes",
          "Calendar rules & court deadlines",
          "Check printing",
          "Batch time entries & billing",
          "Free data migration",
          "Unlimited live trainings",
          "VIP support",
        ],
      },
    ],
    pricingNote:
      "All prices shown are billed annually. Monthly billing is ~$10/user/month higher per tier. PracticePanther offers a free 7-day trial with no credit card required. Free data migration is included with the Business plan.",
    features: [
      {
        category: "Case & Matter Management",
        items: [
          { name: "Matter & contact management", included: true },
          { name: "Custom fields", included: "Essential+" },
          { name: "Conflict of interest check", included: true },
          { name: "Task & event management", included: true },
          { name: "Calendar rules / court deadlines", included: "Business" },
        ],
      },
      {
        category: "Time & Billing",
        items: [
          { name: "Time & expense tracking", included: true },
          { name: "Automatic time capture", included: false },
          { name: "Trust accounting (IOLTA)", included: true },
          { name: "Native ePayments (PantherPayments)", included: true },
          { name: "Batch billing", included: "Business" },
          { name: "LEDES / UTBMS billing", included: "Business" },
          { name: "Recurring payment plans", included: "Essential+" },
          { name: "Check printing", included: "Business" },
        ],
      },
      {
        category: "Automation & Communication",
        items: [
          { name: "Task & event workflow automation", included: true, note: "All plans" },
          { name: "Document templates & auto-fill", included: true },
          { name: "Native 2-way business texting", included: "Business" },
          { name: "Native eSignature (unlimited)", included: "Business" },
          { name: "Client intake forms", included: "Business" },
          { name: "Automated payment reminders", included: "Essential+" },
          { name: "Invoice read alerts", included: "Essential+" },
        ],
      },
      {
        category: "Client & Document Management",
        items: [
          { name: "Secure client portal", included: true },
          { name: "Document templates", included: true },
          { name: "Unlimited data storage", included: true },
          { name: "Email & calendar sync", included: true },
          { name: "Daily agenda email", included: true },
        ],
      },
      {
        category: "Integrations & Reporting",
        items: [
          { name: "QuickBooks Online", included: true },
          { name: "Dropbox, Box.com, MailChimp", included: "Essential+" },
          { name: "Zapier & API access", included: true },
          { name: "100+ integrations", included: true },
          { name: "Attorney revenue report", included: "Business" },
          { name: "Custom security roles", included: "Essential+" },
        ],
      },
    ],
    pros: [
      "Workflow automation (task & event) included on ALL plans, not just premium tiers",
      "Native two-way business texting built in (no integration needed) at Business tier",
      "Native eSignature with unlimited sends at Business tier",
      "Highly intuitive, modern interface with minimal onboarding time",
      "Competitive pricing — Business plan ($89/mo) rivals Clio Essential ($79/mo) on features",
      "Free data migration included with Business plan",
      "Daily agenda emails help attorneys stay organized without opening the app",
    ],
    cons: [
      "Fewer integrations than Clio (100+ vs. 200+)",
      "Two-way texting and eSignature require the Business plan ($89/mo)",
      "No automatic time capture",
      "Intake forms only available at Business tier",
      "Calendar rules / court deadline tracking requires Business plan",
    ],
    bestForList: [
      "Firms where workflow efficiency and automation are top priorities",
      "Solo attorneys who want automation features at the lowest price point ($49/mo)",
      "Small to mid-size firms wanting built-in texting and eSignature",
      "Practices switching from manual processes to automated workflows",
      "Firms that bill hourly and need strong invoicing and payment tools",
    ],
    notIdealForList: [
      "Firms that need 200+ integrations (Clio is stronger here)",
      "Practices requiring enterprise-grade analytics and reporting",
      "Large law firms with complex permission hierarchies",
      "Firms needing automatic time capture (Smokeball is better)",
    ],
    comparisonSlugs: ["clio-vs-practicepanther"],
    faqs: [
      {
        question: "How much does PracticePanther cost in 2026?",
        answer:
          "PracticePanther has three pricing tiers in 2026: Solo at $49/user/month, Essential at $69/user/month, and Business at $89/user/month — all billed annually. Monthly billing is approximately $10/month higher per tier. The Business plan includes free data migration, unlimited live training, and VIP support. A 7-day free trial is available.",
      },
      {
        question: "Does PracticePanther have workflow automation?",
        answer:
          "Yes — and uniquely, PracticePanther includes task and event workflow automation on ALL plans, including the entry-level Solo plan ($49/mo). You can create automated task sequences, event triggers, and document generation workflows. This is a major differentiator: Clio requires the $109 Advanced tier for comparable automation.",
      },
      {
        question: "Does PracticePanther have built-in eSignature?",
        answer:
          "Yes. PracticePanther's Business plan ($89/user/month) includes native eSignature with unlimited sends. Unlike some competitors that charge per signature or require third-party integrations, PantherSign is fully integrated into the platform with no additional fees.",
      },
      {
        question: "Is PracticePanther good for solo attorneys?",
        answer:
          "Absolutely. The Solo plan at $49/user/month is one of the best-value options for solo attorneys in 2026. It includes workflow automation, document templates, trust accounting, a client portal, and native payment processing — more than most competitors offer at this price point.",
      },
      {
        question: "How does PracticePanther compare to Clio?",
        answer:
          "PracticePanther and Clio are closely matched, but differ in key areas. PracticePanther offers workflow automation on all plans and built-in eSignature at a lower price point. Clio offers more integrations (200+ vs. 100+) and has a longer track record. PracticePanther is typically preferred for automation-focused firms; Clio for firms needing extensive integrations.",
      },
    ],
    metaTitle: "PracticePanther Review 2026: Pricing, Features, Pros & Cons | CounselStack",
    metaDescription:
      "Detailed PracticePanther review for 2026. Pricing ($49–$89/user/mo), automation features, pros & cons, and who it's best for. Updated February 2026.",
  },

  smokeball: {
    slug: "smokeball",
    name: "Smokeball",
    tagline: "Legal Software That Automatically Captures Every Billable Minute",
    logoInitials: "SB",
    logoColor: "#10B981",
    rating: 4.6,
    ratingCount: 520,
    founded: "2012",
    website: "https://www.smokeball.com",
    affiliateUrl: getAffiliateUrl("Smokeball", "software-review"),
    quickVerdict:
      "Smokeball's automatic time tracking (Activity Intelligence) is unmatched — it captures every minute you spend on emails, documents, and phone calls without a single timer. Firms report recovering 20–30% more billable time after switching. Combine that with 8,000+ automated legal forms and deep Microsoft 365 integration, and Smokeball is the clear choice for firms obsessed with maximizing billable hours.",
    priceRange: "$49–$179+/user/mo",
    bestFor: "Hourly-billing firms focused on maximizing captured billable time",
    notIdealFor: "Contingency or flat-fee firms that don't need time tracking",
    pricingTiers: [
      {
        tier: "Bill",
        price: "$49/user/mo",
        description: "Billed annually. Core billing and time tracking.",
        features: [
          "Automatic time tracking (Activity Intelligence)",
          "Matter & contact management",
          "Billing & invoicing",
          "Trust accounting (IOLTA)",
          "LawPay & credit card processing",
          "Mobile app",
          "Basic document management",
          "Productivity reports",
        ],
      },
      {
        tier: "Boost",
        price: "$89/user/mo",
        description: "Billed annually. Full practice management with document automation.",
        features: [
          "Everything in Bill",
          "8,000+ automated legal forms & templates",
          "Document automation & assembly",
          "Court deadline rules",
          "Client portal",
          "Email & calendar sync (Outlook/Gmail)",
          "Task management",
          "AI Communicate (email/message summaries)",
          "LawPay integration",
        ],
        highlighted: true,
      },
      {
        tier: "Grow",
        price: "Custom pricing",
        description: "Contact for quote. For firms focused on growth.",
        features: [
          "Everything in Boost",
          "Lead management & intake (LeadPro)",
          "Automated intake forms (MatterFlow)",
          "Smokeball AI Archie (generative AI assistant)",
          "Advanced analytics & reporting",
          "E-signature (VineSign)",
          "Priority support",
        ],
      },
      {
        tier: "Prosper+",
        price: "Custom pricing",
        description: "Contact for quote. Enterprise-grade with full AI suite.",
        features: [
          "Everything in Grow",
          "Full Smokeball AI platform",
          "Dedicated account manager",
          "Custom integrations",
          "Advanced firm analytics",
          "Multi-location support",
          "Enterprise security & compliance",
        ],
      },
    ],
    pricingNote:
      "Bill ($49/mo) and Boost ($89/mo) are published rates billed annually. Grow and Prosper+ pricing requires contacting Smokeball for a custom quote. Smokeball is desktop-first (Windows app) with web and mobile access. A free demo is available.",
    features: [
      {
        category: "Time Tracking (Smokeball's Superpower)",
        items: [
          { name: "Automatic time capture (Activity Intelligence)", included: true, note: "All plans" },
          { name: "Background tracking (no timers needed)", included: true },
          { name: "Email time tracking", included: true },
          { name: "Document time tracking", included: true },
          { name: "Productivity & profitability analysis", included: true },
          { name: "Flat fee profitability tracking", included: true },
        ],
      },
      {
        category: "Document Automation",
        items: [
          { name: "8,000+ pre-built legal forms", included: "Boost+", note: "250+ matter types" },
          { name: "Document assembly & automation", included: "Boost+" },
          { name: "Custom document templates", included: "Boost+" },
          { name: "Auto-attach documents to workflows", included: "Boost+" },
          { name: "Microsoft Word integration (deep)", included: true },
        ],
      },
      {
        category: "Case & Matter Management",
        items: [
          { name: "Matter & contact management", included: true },
          { name: "Conflict of interest check", included: true },
          { name: "Court deadline rules", included: "Boost+" },
          { name: "Task management", included: "Boost+" },
          { name: "Client portal", included: "Boost+" },
        ],
      },
      {
        category: "Billing & Accounting",
        items: [
          { name: "Billing & invoicing", included: true },
          { name: "Trust accounting (IOLTA)", included: true },
          { name: "LawPay integration", included: true },
          { name: "Online payments", included: true },
          { name: "Batch billing", included: true },
        ],
      },
      {
        category: "AI & Integrations",
        items: [
          { name: "AI Communicate (message summaries)", included: "Boost+" },
          { name: "AI Archie (generative AI assistant)", included: "Grow+" },
          { name: "Lead management (LeadPro)", included: "Grow+" },
          { name: "Microsoft 365 deep integration", included: true },
          { name: "Third-party integrations (50+)", included: true },
        ],
      },
    ],
    pros: [
      "Automatic time tracking captures every billable minute — firms report 20–30% more revenue",
      "8,000+ pre-built legal forms covering 250+ matter types across multiple jurisdictions",
      "Deepest Microsoft Word and Outlook integration of any legal software",
      "Document automation links directly to workflow tasks for fully automated drafting",
      "Smokeball AI (Archie) provides a generative AI legal assistant at higher tiers",
      "Productivity and profitability analysis helps even flat-fee and contingency firms",
    ],
    cons: [
      "Desktop app (Windows) required for full functionality — not fully cloud-based",
      "Grow and Prosper+ pricing is not published — requires sales demo for quote",
      "Fewer integrations than Clio (50+ vs. 200+)",
      "Higher starting price than competitors at upper tiers",
      "Client portal and full matter management require Boost tier ($89/mo)",
    ],
    bestForList: [
      "Firms billing hourly who want to capture the maximum amount of billable time",
      "Practices with high document volume that want automated form generation",
      "Windows-based firms deeply embedded in the Microsoft 365 ecosystem",
      "Law firms that want AI-powered assistance built into their workflow",
      "Small to mid-size firms willing to invest more to recover more billable time",
    ],
    notIdealForList: [
      "Contingency-only firms that don't track billable hours",
      "Firms that work primarily on Mac or need a fully cloud-based solution",
      "Practices needing 200+ integrations (Clio is better)",
      "Firms on tight budgets where the Boost tier ($89/mo) is too expensive",
    ],
    comparisonSlugs: ["clio-vs-smokeball"],
    faqs: [
      {
        question: "How does Smokeball's automatic time tracking work?",
        answer:
          "Smokeball's Activity Intelligence runs silently in the background on your Windows computer. It automatically tracks the time you spend working in Microsoft Word, Outlook, and Smokeball itself, tagging activity to the relevant matter. You don't start or stop timers — it captures everything. Before billing, you review the captured time and can adjust as needed. Firms typically recover 20–30% more billable time compared to manual entry.",
      },
      {
        question: "How much does Smokeball cost in 2026?",
        answer:
          "Smokeball publishes pricing for its two entry tiers: Bill at $49/user/month and Boost at $89/user/month (billed annually). The Grow and Prosper+ tiers require contacting Smokeball for custom pricing based on firm size and needs. All plans include the automatic time tracking feature.",
      },
      {
        question: "Is Smokeball only for Windows?",
        answer:
          "Smokeball's core desktop application runs on Windows, which enables its deep Microsoft Word and Outlook integration and automatic time tracking. However, Smokeball also offers a web-based interface and mobile apps (iOS and Android) for basic access. For full functionality — especially automatic time capture — a Windows computer is required.",
      },
      {
        question: "What kinds of forms does Smokeball include?",
        answer:
          "Smokeball includes a library of 8,000+ pre-built legal forms covering 250+ matter types across multiple jurisdictions in the US. These include court forms, letters, contracts, and practice-area-specific documents. The library is updated regularly. Firms can also create custom templates and attach them to automated workflow tasks.",
      },
      {
        question: "Is Smokeball worth the higher cost compared to Clio?",
        answer:
          "For hourly-billing firms, Smokeball typically pays for itself quickly. If automatic time tracking recovers even 30 additional minutes per day per attorney, that can add up to tens of thousands of dollars in recovered revenue annually. The ROI calculation is straightforward for firms that bill by the hour. For flat-fee or contingency firms, the calculus is different — other software may offer better value.",
      },
    ],
    metaTitle: "Smokeball Review 2026: Pricing, Features, Pros & Cons | CounselStack",
    metaDescription:
      "In-depth Smokeball review for 2026. Automatic time tracking, pricing ($49–custom/user/mo), document automation, pros & cons. Updated February 2026.",
  },

  filevine: {
    slug: "filevine",
    name: "Filevine",
    tagline: "The Most Customizable Legal Case Management Platform",
    logoInitials: "FV",
    logoColor: "#8B5CF6",
    rating: 4.3,
    ratingCount: 380,
    founded: "2015",
    website: "https://www.filevine.com",
    affiliateUrl: getAffiliateUrl("Filevine", "software-review"),
    quickVerdict:
      "Filevine is the most customizable legal case management platform on the market, purpose-built for personal injury, mass tort, and high-volume litigation firms. Its AI-powered document analysis, granular workflow automation, and deep customizability make it a powerhouse for large practices — though the complexity and custom pricing model make it better suited for established firms than new or small ones.",
    priceRange: "Custom pricing (typically $50–$125/user/mo)",
    bestFor: "High-volume litigation and personal injury firms with complex workflows",
    notIdealFor: "Solo attorneys or small firms needing simple, out-of-the-box software",
    pricingTiers: [
      {
        tier: "Core",
        price: "Custom pricing",
        description: "Contact for quote. Essential case management.",
        features: [
          "Matter & contact management",
          "Time & expense tracking",
          "Document management",
          "Task management",
          "Calendar & scheduling",
          "Mobile app",
          "Basic reporting",
          "Zapier integration",
        ],
      },
      {
        tier: "Standard",
        price: "Custom pricing",
        description: "Contact for quote. Full practice management.",
        features: [
          "Everything in Core",
          "Custom workflow automation",
          "Advanced document management",
          "Client communication tools",
          "QuickBooks integration",
          "Custom fields & sections",
          "Advanced reporting",
          "API access",
        ],
        highlighted: true,
      },
      {
        tier: "Advanced",
        price: "Custom pricing",
        description: "Contact for quote. AI-powered enterprise features.",
        features: [
          "Everything in Standard",
          "AI document analysis & review",
          "AI-powered contract review",
          "VineSign (eSignature)",
          "Medical record review AI",
          "Settlement negotiation tools",
          "Multi-entity management",
          "Dedicated success manager",
        ],
      },
    ],
    pricingNote:
      "Filevine does not publicly publish pricing. Rates are custom-quoted based on firm size, practice areas, and features needed. Industry estimates place pricing at $50–$125/user/month. Annual contracts are required. Contact Filevine for a demo and custom quote.",
    features: [
      {
        category: "Case & Matter Management",
        items: [
          { name: "Matter & contact management", included: true },
          { name: "Custom matter sections & fields", included: true },
          { name: "Practice area-specific workflows", included: true },
          { name: "Conflict of interest check", included: true },
          { name: "Multi-entity management", included: "Advanced" },
        ],
      },
      {
        category: "AI & Document Tools",
        items: [
          { name: "AI document analysis", included: "Advanced" },
          { name: "AI contract review", included: "Advanced" },
          { name: "Medical record review AI", included: "Advanced" },
          { name: "Document management & storage", included: true },
          { name: "VineSign (eSignature)", included: "Advanced" },
          { name: "Document generation", included: "Standard+" },
        ],
      },
      {
        category: "Workflow Automation",
        items: [
          { name: "Custom workflow automation", included: "Standard+" },
          { name: "Automated task sequences", included: "Standard+" },
          { name: "Status-based triggers", included: "Standard+" },
          { name: "Intake workflow automation", included: "Standard+" },
          { name: "Settlement workflow tools", included: "Advanced" },
        ],
      },
      {
        category: "Time & Billing",
        items: [
          { name: "Time & expense tracking", included: true },
          { name: "Billing & invoicing", included: true },
          { name: "Trust accounting", included: "Standard+" },
          { name: "Contingency fee management", included: true },
          { name: "Online payments", included: "Standard+" },
        ],
      },
      {
        category: "Reporting & Integrations",
        items: [
          { name: "Advanced reporting & analytics", included: "Standard+" },
          { name: "QuickBooks integration", included: "Standard+" },
          { name: "Zapier & API access", included: true },
          { name: "Slack integration", included: true },
          { name: "Google Drive & OneDrive", included: true },
        ],
      },
    ],
    pros: [
      "Unmatched customizability — configure virtually every aspect of the platform",
      "AI-powered document and medical record analysis saves hours of review time",
      "Best-in-class for personal injury, mass tort, and high-volume litigation",
      "Granular workflow automation handles complex, multi-stage case processes",
      "Strong integrations with Slack, Google Drive, Dropbox, and Zapier",
      "Scales well from mid-size firms to large multi-office practices",
    ],
    cons: [
      "No publicly published pricing — requires sales demo and custom quote",
      "Steep learning curve due to high complexity and customizability",
      "No built-in client portal (unique limitation for a premium product)",
      "Annual contracts required — no monthly flexibility",
      "Not ideal for simple practice management needs",
    ],
    bestForList: [
      "Personal injury and mass tort firms handling hundreds of active cases",
      "High-volume litigation practices with complex, multi-stage workflows",
      "Mid-size to large firms willing to invest in significant customization",
      "Practices that need AI-powered document and medical record analysis",
      "Firms with dedicated IT resources to configure and maintain the platform",
    ],
    notIdealForList: [
      "Solo attorneys or firms with fewer than 5 users",
      "Practices needing quick, out-of-the-box setup",
      "Firms requiring a built-in client portal",
      "Budget-conscious firms — Filevine is a premium product at a premium price",
    ],
    comparisonSlugs: [],
    faqs: [
      {
        question: "How much does Filevine cost in 2026?",
        answer:
          "Filevine does not publicly publish its pricing. Costs are custom-quoted based on firm size, practice areas, and required features. Industry estimates place pricing at $50–$125/user/month with annual contracts required. To get exact pricing, you'll need to schedule a demo with their sales team.",
      },
      {
        question: "Is Filevine good for personal injury firms?",
        answer:
          "Yes — Filevine is widely considered the best legal case management software for personal injury and mass tort firms. Its customizable matter sections, AI-powered medical record review, settlement tracking tools, and high-volume case management capabilities are specifically designed for PI workflows. Many of the largest PI firms in the US use Filevine.",
      },
      {
        question: "Does Filevine have a client portal?",
        answer:
          "No. Filevine notably lacks a built-in client portal, which is a significant limitation compared to competitors like MyCase, Clio, and PracticePanther. Client communication happens through other channels. If a client portal is a must-have for your firm, Filevine is not the right choice.",
      },
      {
        question: "How long does it take to implement Filevine?",
        answer:
          "Filevine implementation typically takes 4–12 weeks depending on firm size and complexity. Due to its high customizability, firms often work with Filevine's implementation team to configure matter sections, workflows, and integrations. Proper setup is critical to realizing the platform's full value.",
      },
      {
        question: "What AI features does Filevine offer?",
        answer:
          "Filevine offers several AI-powered features at its advanced tiers, including AI document analysis, AI contract review, and medical record review AI. These tools can process and summarize large volumes of documents, flagging key information. The AI features are particularly valuable for PI firms dealing with extensive medical records. VineSign (eSignature) is also included at the advanced tier.",
      },
    ],
    metaTitle: "Filevine Review 2026: Pricing, Features, Pros & Cons | CounselStack",
    metaDescription:
      "In-depth Filevine review for 2026. Custom pricing, AI features, workflow automation, pros & cons, and who it's best for. Ideal for PI and litigation firms.",
  },

  "rocket-matter": {
    slug: "rocket-matter",
    name: "Rocket Matter",
    tagline: "Legal Practice Management Built for Productivity",
    logoInitials: "RM",
    logoColor: "#EF4444",
    rating: 4.4,
    ratingCount: 310,
    founded: "2008",
    website: "https://www.rocketmatter.com",
    affiliateUrl: getAffiliateUrl("Rocket Matter", "software-review"),
    quickVerdict:
      "Rocket Matter is a solid, productivity-focused legal practice management software that punches above its weight class. Known for exceptional customer support (Stevie Award winner since 2015), built-in project management, and strong billing capabilities, it's a reliable choice for small to mid-size firms looking for dependable software without the complexity of enterprise-grade platforms.",
    priceRange: "$49–$129/user/mo",
    bestFor: "Small to mid-size firms that prioritize billing and productivity",
    notIdealFor: "Large firms or practices needing advanced document automation",
    pricingTiers: [
      {
        tier: "Essentials",
        price: "$49/user/mo",
        description: "Billed annually. Core practice management.",
        features: [
          "Matter & contact management",
          "Time & expense tracking",
          "Billing & invoicing",
          "Trust accounting (IOLTA)",
          "Client portal",
          "Document storage (25GB)",
          "Mobile app (iOS & Android)",
          "Conflict check",
          "Rocket Matter Pay (payments)",
          "Custom fields",
        ],
      },
      {
        tier: "Pro",
        price: "$69/user/mo",
        description: "Billed annually. Advanced billing and management.",
        features: [
          "Everything in Essentials",
          "Unlimited document storage",
          "Email forwarding & tagging",
          "LEDES codes & e-billing",
          "Split billing",
          "Fee allocation",
          "Unlimited dashboards",
          "Advanced data views",
          "Document assembly",
          "Phone messages",
          "Matter templates",
          "Matter workflows with status automation",
        ],
        highlighted: true,
      },
      {
        tier: "Premier",
        price: "$99/user/mo",
        description: "Billed annually. For larger firms with complex billing.",
        features: [
          "Everything in Pro",
          "Advanced user permissions",
          "Advanced billing permissions",
          "Matter budget tracking",
          "Business accounting module",
          "Custom chart of accounts",
          "Accounts payable",
          "Bank reconciliation",
        ],
      },
      {
        tier: "Elite",
        price: "$129/user/mo",
        description: "Billed annually. Full enterprise suite.",
        features: [
          "Everything in Premier",
          "Full matter budget management",
          "Advanced cost tracking",
          "Custom workflow automation",
          "Dedicated account support",
          "Priority onboarding",
        ],
      },
    ],
    pricingNote:
      "All prices are billed annually. Rocket Matter includes unlimited support, free data migration, and free onboarding on all plans. A free trial is available. As part of the ProfitSolv family, Rocket Matter is regularly updated.",
    features: [
      {
        category: "Case & Matter Management",
        items: [
          { name: "Matter & contact management", included: true },
          { name: "Custom fields", included: true },
          { name: "Conflict of interest check", included: true },
          { name: "Matter templates", included: "Pro+" },
          { name: "Matter workflows & status automation", included: "Pro+" },
          { name: "Matter budget tracking", included: "Premier+" },
        ],
      },
      {
        category: "Time & Billing",
        items: [
          { name: "Time & expense tracking", included: true },
          { name: "Automatic time capture", included: false },
          { name: "Trust accounting (IOLTA)", included: true },
          { name: "Rocket Matter Pay (payments)", included: true },
          { name: "Batch billing", included: true },
          { name: "LEDES / e-billing codes", included: "Pro+" },
          { name: "Split billing", included: "Pro+" },
          { name: "Fee allocation", included: "Pro+" },
          { name: "Evergreen retainers", included: true },
        ],
      },
      {
        category: "Productivity & Project Management",
        items: [
          { name: "Built-in project management", included: true },
          { name: "Task management", included: true },
          { name: "Dependent task & event logic", included: "Pro+" },
          { name: "Matter status board", included: "Pro+" },
          { name: "Flexible data views", included: true },
          { name: "System dashboards", included: true },
          { name: "Custom dashboards", included: "Pro+" },
        ],
      },
      {
        category: "Document & Communication",
        items: [
          { name: "Document storage (25GB)", included: true, note: "Unlimited on Pro+" },
          { name: "Document assembly", included: "Pro+" },
          { name: "Client portal", included: true },
          { name: "Email forwarding & tagging", included: "Pro+" },
          { name: "Phone messages", included: "Pro+" },
        ],
      },
      {
        category: "Accounting & Integrations",
        items: [
          { name: "Law office business accounting", included: "Premier+" },
          { name: "QuickBooks Online integration", included: true },
          { name: "Google Calendar & Outlook sync", included: true },
          { name: "Box & Dropbox integration", included: true },
          { name: "Open API", included: true },
          { name: "LawToolBox (court rules)", included: true },
        ],
      },
    ],
    pros: [
      "Award-winning customer support (Stevie Award winner every year since 2015)",
      "Free unlimited support, free data migration, and free onboarding on all plans",
      "Built-in project management features beyond basic task management",
      "Strong billing capabilities with split billing, fee allocation, and LEDES at Pro tier",
      "Full law office accounting module at Premier tier (no separate accounting software needed)",
      "Part of ProfitSolv family ensures ongoing development and regular feature updates",
    ],
    cons: [
      "No automatic time capture — manual tracking only",
      "Document management is relatively basic compared to Smokeball",
      "Limited client intake capabilities — better options exist for intake-focused firms",
      "Smaller integration ecosystem than Clio",
      "Template and document assembly functionality is less advanced than competitors",
    ],
    bestForList: [
      "Small to mid-size firms that value exceptional customer support",
      "Practices with complex billing needs (split billing, fee allocation, LEDES)",
      "Firms that want free data migration and unlimited support included",
      "Law firms that need built-in project management alongside case management",
      "Firms looking for a full law office accounting module at the Premier tier",
    ],
    notIdealForList: [
      "Firms that need automatic time capture (Smokeball is better)",
      "Practices with complex client intake workflows (Clio Grow or MyCase are better)",
      "Large firms needing enterprise-grade analytics and reporting",
      "Practices needing advanced document automation",
    ],
    comparisonSlugs: [],
    faqs: [
      {
        question: "How much does Rocket Matter cost in 2026?",
        answer:
          "Rocket Matter has four pricing tiers in 2026: Essentials at $49/user/month, Pro at $69/user/month, Premier at $99/user/month, and Elite at $129/user/month — all billed annually. All plans include unlimited support, free data migration, and free onboarding. A free trial is available.",
      },
      {
        question: "What makes Rocket Matter different from other legal software?",
        answer:
          "Rocket Matter stands out for its award-winning customer support (Stevie Award winner since 2015), built-in project management features, and comprehensive billing capabilities including split billing and fee allocation. It's also part of the ProfitSolv family, which ensures regular development and updates. The Premier tier includes a full law office accounting module — eliminating the need for separate accounting software.",
      },
      {
        question: "Does Rocket Matter have a client portal?",
        answer:
          "Yes, Rocket Matter includes a client portal on all pricing tiers, including the Essentials plan ($49/mo). Clients can log in to view case updates, share documents, and pay invoices. The client portal is fully mobile-responsive.",
      },
      {
        question: "Is Rocket Matter good for billing?",
        answer:
          "Yes, billing is one of Rocket Matter's strongest areas. It supports flat fee, hourly, contingency, and hybrid billing models. The Pro tier adds LEDES codes, split billing, fee allocation, and e-billing. The Premier tier adds a full law office accounting module with accounts payable and bank reconciliation. For billing-focused firms, Rocket Matter is an excellent choice.",
      },
      {
        question: "How does Rocket Matter compare to Clio?",
        answer:
          "Rocket Matter and Clio have similar starting prices ($49/mo) and both serve small to mid-size firms. Clio has more integrations (200+ vs. Rocket Matter's ecosystem) and a more extensive feature set overall. Rocket Matter excels at billing complexity and customer support. Clio's Grow CRM is more robust for client intake. Rocket Matter may be preferred by firms that want simpler software with exceptional support.",
      },
    ],
    metaTitle: "Rocket Matter Review 2026: Pricing, Features, Pros & Cons | CounselStack",
    metaDescription:
      "Complete Rocket Matter review for 2026. Full pricing ($49–$129/user/mo), features, award-winning support, pros & cons. Updated February 2026.",
  },
};

export function getSoftware(slug: string): SoftwareReview | undefined {
  return softwareReviews[slug];
}

export function getAllSoftwareSlugs(): string[] {
  return Object.keys(softwareReviews);
}
