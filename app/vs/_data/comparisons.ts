export interface SoftwareComparison {
  slug: string;
  platformA: {
    name: string;
    price: string;
    bestFor: string;
  };
  platformB: {
    name: string;
    price: string;
    bestFor: string;
  };
  quickAnswer: string;
  features: {
    name: string;
    platformA: boolean | string;
    platformB: boolean | string;
  }[];
  pricingDetails: {
    platformA: { tier: string; price: string; features: string[] }[];
    platformB: { tier: string; price: string; features: string[] }[];
  };
  whenChooseA: string[];
  whenChooseB: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  verdict: string;
  metaTitle: string;
  metaDescription: string;
}

export const comparisons: Record<string, SoftwareComparison> = {
  "clio-vs-mycase": {
    slug: "clio-vs-mycase",
    platformA: {
      name: "Clio",
      price: "$39-$129/user/mo",
      bestFor: "Firms needing extensive integrations",
    },
    platformB: {
      name: "MyCase",
      price: "$39-$79/user/mo",
      bestFor: "Client-focused practices",
    },
    quickAnswer: "Clio is the better choice for firms that need 200+ integrations and robust reporting. MyCase wins for practices prioritizing client communication with its built-in texting and superior client portal. Both start at $39/user/month.",
    features: [
      { name: "Time Tracking", platformA: true, platformB: true },
      { name: "Billing & Invoicing", platformA: true, platformB: true },
      { name: "Client Portal", platformA: true, platformB: true },
      { name: "Built-in Client Texting", platformA: false, platformB: true },
      { name: "Trust Accounting (IOLTA)", platformA: true, platformB: true },
      { name: "Document Management", platformA: true, platformB: true },
      { name: "Calendar & Deadlines", platformA: true, platformB: true },
      { name: "Integrations", platformA: "200+", platformB: "70+" },
      { name: "Mobile App", platformA: true, platformB: true },
      { name: "eSignature Built-in", platformA: "Add-on", platformB: true },
      { name: "Custom Reports", platformA: true, platformB: "Basic" },
      { name: "Lead Management", platformA: "Clio Grow", platformB: true },
    ],
    pricingDetails: {
      platformA: [
        { tier: "EasyStart", price: "$39/user/mo", features: ["Basic matter management", "Time tracking", "Basic billing"] },
        { tier: "Essentials", price: "$79/user/mo", features: ["Everything in EasyStart", "Client portal", "Trust accounting", "Custom fields"] },
        { tier: "Advanced", price: "$109/user/mo", features: ["Everything in Essentials", "Advanced reporting", "Custom permissions", "Workflow automation"] },
        { tier: "Complete", price: "$129/user/mo", features: ["Everything in Advanced", "Clio Grow CRM", "Client intake", "AI features"] },
      ],
      platformB: [
        { tier: "Basic", price: "$39/user/mo", features: ["Matter management", "Time tracking", "Client portal", "Document management"] },
        { tier: "Pro", price: "$69/user/mo", features: ["Everything in Basic", "Text messaging", "eSignature", "QuickBooks integration"] },
        { tier: "Advanced", price: "$79/user/mo", features: ["Everything in Pro", "Lead management", "Intake forms", "Advanced reporting"] },
      ],
    },
    whenChooseA: [
      "You need extensive third-party integrations (200+)",
      "Robust reporting and analytics are critical",
      "You want a mature, established platform (15+ years)",
      "You prefer separate CRM (Clio Grow) for intake",
      "You need advanced workflow automation",
    ],
    whenChooseB: [
      "Client communication is your top priority",
      "You want built-in text messaging with clients",
      "You prefer simpler pricing tiers",
      "eSignature included without add-ons matters",
      "You're a smaller firm wanting easy setup",
    ],
    faqs: [
      {
        question: "Is Clio better than MyCase?",
        answer: "Neither is universally better. Clio excels in integrations (200+ vs 70+) and reporting capabilities. MyCase wins on client communication with built-in texting and a more intuitive client portal. Choose Clio for complex workflows and integrations; choose MyCase for client-focused practices.",
      },
      {
        question: "How much does Clio cost compared to MyCase?",
        answer: "Both start at $39/user/month. Clio's plans range from $39-$129/user/month, while MyCase ranges from $39-$79/user/month. MyCase is often cheaper at higher tiers, but Clio includes more advanced features in premium plans.",
      },
      {
        question: "Which has better client communication features?",
        answer: "MyCase has better built-in client communication. It includes text messaging with clients at the Pro tier ($69/mo), while Clio requires third-party integrations for texting. MyCase's client portal is also considered more user-friendly.",
      },
      {
        question: "Can I migrate from MyCase to Clio (or vice versa)?",
        answer: "Yes, both platforms offer migration assistance. Clio has dedicated migration specialists for larger firms. Expect 1-2 weeks for a full migration including matters, contacts, and documents.",
      },
      {
        question: "Which is better for solo attorneys?",
        answer: "MyCase is often preferred by solo attorneys for its simplicity and all-in-one approach. Clio works well too but may have features solos don't need. Both offer $39/mo entry plans suitable for solo practices.",
      },
    ],
    verdict: "For most firms, we recommend **Clio** if you need extensive integrations and advanced reporting, or **MyCase** if client communication is your priority. Both are excellent choices — the right pick depends on your firm's specific workflow needs.",
    metaTitle: "Clio vs MyCase (2026): Detailed Comparison for Law Firms",
    metaDescription: "Compare Clio vs MyCase for legal practice management. See pricing, features, pros/cons, and which is best for your law firm. Updated for 2026.",
  },

  "clio-vs-practicepanther": {
    slug: "clio-vs-practicepanther",
    platformA: {
      name: "Clio",
      price: "$39-$129/user/mo",
      bestFor: "Firms needing integrations & reporting",
    },
    platformB: {
      name: "PracticePanther",
      price: "$49-$89/user/mo",
      bestFor: "Automation-focused firms",
    },
    quickAnswer: "Clio offers more integrations (200+) and is the industry standard with a longer track record. PracticePanther excels at workflow automation and has a more modern interface. Choose Clio for integrations; choose PracticePanther for automation.",
    features: [
      { name: "Time Tracking", platformA: true, platformB: true },
      { name: "Billing & Invoicing", platformA: true, platformB: true },
      { name: "Client Portal", platformA: true, platformB: true },
      { name: "Trust Accounting (IOLTA)", platformA: true, platformB: true },
      { name: "Document Management", platformA: true, platformB: true },
      { name: "Workflow Automation", platformA: "Advanced tier", platformB: true },
      { name: "Integrations", platformA: "200+", platformB: "100+" },
      { name: "Mobile App", platformA: true, platformB: true },
      { name: "eSignature Built-in", platformA: "Add-on", platformB: true },
      { name: "Two-Way Texting", platformA: "Integration", platformB: true },
      { name: "Payment Processing", platformA: "Clio Payments", platformB: true },
      { name: "Custom Workflows", platformA: "Advanced tier", platformB: "All plans" },
    ],
    pricingDetails: {
      platformA: [
        { tier: "EasyStart", price: "$39/user/mo", features: ["Basic features", "Limited automations"] },
        { tier: "Essentials", price: "$79/user/mo", features: ["Trust accounting", "Client portal"] },
        { tier: "Advanced", price: "$109/user/mo", features: ["Workflow automation", "Custom reports"] },
        { tier: "Complete", price: "$129/user/mo", features: ["Clio Grow CRM", "Full suite"] },
      ],
      platformB: [
        { tier: "Solo", price: "$49/user/mo", features: ["Core features", "Basic automation", "Client portal"] },
        { tier: "Essential", price: "$69/user/mo", features: ["Everything in Solo", "Two-way texting", "eSignature"] },
        { tier: "Business", price: "$89/user/mo", features: ["Everything in Essential", "Advanced automation", "Custom reports"] },
      ],
    },
    whenChooseA: [
      "You need 200+ integrations with other tools",
      "Your firm values an established, mature platform",
      "Robust reporting and analytics are critical",
      "You want a separate CRM (Clio Grow) option",
      "You're already in the Clio ecosystem",
    ],
    whenChooseB: [
      "Workflow automation is a top priority",
      "You want built-in texting and eSignature",
      "You prefer a more modern, intuitive interface",
      "You want automation on all plans, not just premium",
      "You're a smaller firm focused on efficiency",
    ],
    faqs: [
      {
        question: "Is Clio or PracticePanther better?",
        answer: "Clio is better for firms needing extensive integrations (200+) and established reliability. PracticePanther is better for automation-focused firms wanting built-in texting, eSignature, and workflow automation on all plans.",
      },
      {
        question: "How does pricing compare?",
        answer: "Clio starts at $39/user/month but automation requires the $109 Advanced tier. PracticePanther starts at $49/user/month with automation included. For automation-heavy firms, PracticePanther may be more cost-effective.",
      },
      {
        question: "Which has better automation features?",
        answer: "PracticePanther has stronger built-in automation available on all plans. Clio requires the Advanced ($109) tier for comparable workflow automation. PracticePanther's automation is also considered more user-friendly.",
      },
      {
        question: "Which is better for small firms?",
        answer: "PracticePanther is often preferred by small firms for its all-in-one approach and included automation. Clio works well for small firms too, especially if they need specific integrations.",
      },
      {
        question: "Can I switch from Clio to PracticePanther?",
        answer: "Yes, PracticePanther offers migration assistance. You can export data from Clio and import into PracticePanther. Expect 1-2 weeks for full migration with support.",
      },
    ],
    verdict: "Choose **Clio** if integrations and established reliability matter most. Choose **PracticePanther** if you want strong automation features without paying for a premium tier. Both are solid choices for modern law firms.",
    metaTitle: "Clio vs PracticePanther (2026): Which Legal Software Wins?",
    metaDescription: "Clio vs PracticePanther comparison for law firms. Compare pricing, automation, integrations, and features. Find which is best for your practice.",
  },

  "clio-vs-smokeball": {
    slug: "clio-vs-smokeball",
    platformA: {
      name: "Clio",
      price: "$39-$129/user/mo",
      bestFor: "Firms needing integrations & flexibility",
    },
    platformB: {
      name: "Smokeball",
      price: "$89-$179/user/mo",
      bestFor: "Maximizing billable hours",
    },
    quickAnswer: "Smokeball's automatic time tracking captures every billable minute without manual entry — firms report 20-30% more captured time. Clio offers more integrations and lower starting price. Choose Smokeball to maximize billables; choose Clio for flexibility and cost.",
    features: [
      { name: "Time Tracking", platformA: "Manual", platformB: "Automatic" },
      { name: "Auto Time Capture", platformA: false, platformB: true },
      { name: "Billing & Invoicing", platformA: true, platformB: true },
      { name: "Client Portal", platformA: true, platformB: true },
      { name: "Trust Accounting (IOLTA)", platformA: true, platformB: true },
      { name: "Document Management", platformA: true, platformB: true },
      { name: "Document Automation", platformA: "Limited", platformB: true },
      { name: "Integrations", platformA: "200+", platformB: "50+" },
      { name: "Mobile App", platformA: true, platformB: true },
      { name: "Built-in Forms Library", platformA: false, platformB: "8,000+ forms" },
      { name: "Microsoft 365 Integration", platformA: true, platformB: "Deep" },
      { name: "Productivity Insights", platformA: "Reports", platformB: "Real-time" },
    ],
    pricingDetails: {
      platformA: [
        { tier: "EasyStart", price: "$39/user/mo", features: ["Manual time tracking", "Basic billing"] },
        { tier: "Essentials", price: "$79/user/mo", features: ["Trust accounting", "Client portal"] },
        { tier: "Advanced", price: "$109/user/mo", features: ["Workflow automation", "Custom reports"] },
        { tier: "Complete", price: "$129/user/mo", features: ["Full suite with CRM"] },
      ],
      platformB: [
        { tier: "Bill", price: "$89/user/mo", features: ["Automatic time tracking", "Billing", "Trust accounting"] },
        { tier: "Boost", price: "$119/user/mo", features: ["Everything in Bill", "Document automation", "Forms library"] },
        { tier: "Grow", price: "$179/user/mo", features: ["Everything in Boost", "Intake", "Lead management", "Advanced reporting"] },
      ],
    },
    whenChooseA: [
      "Budget is a primary concern (starts $39 vs $89)",
      "You need extensive third-party integrations (200+)",
      "You're comfortable with manual time tracking",
      "You want a flexible, established platform",
      "You need Clio Grow for client intake",
    ],
    whenChooseB: [
      "Maximizing billable hours is your #1 goal",
      "You hate manual time tracking",
      "You want 8,000+ built-in legal forms",
      "Deep Microsoft 365 integration matters",
      "You're focused on document automation",
    ],
    faqs: [
      {
        question: "Is Smokeball worth the higher price?",
        answer: "For many firms, yes. Smokeball's automatic time tracking typically captures 20-30% more billable time than manual methods. At $89/user/month, firms often see ROI within the first month from recovered billables. If your firm bills hourly, Smokeball frequently pays for itself.",
      },
      {
        question: "How does Smokeball's automatic time tracking work?",
        answer: "Smokeball runs in the background and automatically tracks time spent on emails, documents, calls, and other activities linked to matters. No timers to start or stop — it captures everything and lets you review before billing.",
      },
      {
        question: "Which has better document automation?",
        answer: "Smokeball wins on document automation with 8,000+ built-in legal forms and advanced document assembly. Clio's document management is solid but doesn't include the same depth of automation and forms.",
      },
      {
        question: "Which is better for small firms?",
        answer: "Clio is more budget-friendly for small firms at $39/mo starting price. However, small firms that bill hourly often find Smokeball's automatic time tracking worth the $89/mo investment due to increased captured time.",
      },
      {
        question: "Can I migrate from Clio to Smokeball?",
        answer: "Yes, Smokeball offers migration assistance for firms switching from Clio. They'll help transfer matters, contacts, and documents. The transition typically takes 1-3 weeks depending on firm size.",
      },
    ],
    verdict: "Choose **Smokeball** if maximizing billable hours is your priority — the automatic time tracking typically pays for itself. Choose **Clio** if you need more integrations, lower starting cost, or prefer manual control over time tracking.",
    metaTitle: "Clio vs Smokeball (2026): Best Legal Software for Billable Hours",
    metaDescription: "Clio vs Smokeball comparison. Smokeball's automatic time tracking vs Clio's integrations. See pricing, features, and which maximizes your billables.",
  },
};

export function getComparison(slug: string): SoftwareComparison | undefined {
  return comparisons[slug];
}

export function getAllComparisonSlugs(): string[] {
  return Object.keys(comparisons);
}
