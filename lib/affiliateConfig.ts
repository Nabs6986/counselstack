// ============================================================
// CounselStack Affiliate Configuration
// ============================================================
// Replace PLACEHOLDER values with your actual affiliate IDs.
// Only edit the `url` field for each program — everything else
// wires up automatically across the site.
//
// STATUS KEY:
//   pending  → Applied or about to apply; placeholder ID in URL
//   active   → Live tracking ID in place
//   none     → No affiliate program; using direct link
// ============================================================

export const affiliateConfig = {
  // ----------------------------------------------------------
  // Direct / Channel Partner Programs
  // ----------------------------------------------------------
  clio: {
    url: "https://www.clio.com/?ref=CLIO_PARTNER_ID",
    placeholder: "CLIO_PARTNER_ID",
    status: "pending" as const,
    notes: "Apply at clio.com/partnerships/channel-partners/become-a-partner/",
  },
  cosmolex: {
    url: "https://www.cosmolex.com/?ref=COSMOLEX_ID",
    placeholder: "COSMOLEX_ID",
    status: "pending" as const,
    notes: "Refer-a-Friend: cosmolex.com/referrals/ ($150/referral) OR Channel Partner: partners.cosmolex.com/",
  },
  lawmatics: {
    url: "https://www.lawmatics.com/?ref=LAWMATICS_ID",
    placeholder: "LAWMATICS_ID",
    status: "pending" as const,
    notes: "Apply at lawmatics.com/partners/affiliate — 10% of ACV at 90-day mark",
  },
  timesolv: {
    url: "https://www.timesolv.com/?ref=TIMESOLV_ID",
    placeholder: "TIMESOLV_ID",
    status: "pending" as const,
    notes: "Apply at timesolv.com/affiliate/ — $50 per qualified lead",
  },
  bill4time: {
    url: "https://www.bill4time.com/?ref=BILL4TIME_ID",
    placeholder: "BILL4TIME_ID",
    status: "pending" as const,
    notes: "Apply at bill4time.com/affiliates/publishers/",
  },
  rocketmatter: {
    url: "https://www.rocketmatter.com/?ref=RM_PARTNER_ID",
    placeholder: "RM_PARTNER_ID",
    status: "pending" as const,
    notes: "Apply at rocketmatter.com/partners/ — revenue share, rate negotiated on approval",
  },
  netdocuments: {
    url: "https://www.netdocuments.com/?ref=NETDOC_ID",
    placeholder: "NETDOC_ID",
    status: "pending" as const,
    notes: "Apply at netdocuments.com/partners/partner-program/ — quarterly payouts",
  },

  // ----------------------------------------------------------
  // PartnerStack Programs
  // ----------------------------------------------------------
  mycase: {
    url: "https://app.mycase.com/signup?ref=MYCASE_PARTNER_ID",
    placeholder: "MYCASE_PARTNER_ID",
    status: "pending" as const,
    notes: "Apply at market.partnerstack.com/page/mycase — 10% of ACV, 90-day cookie",
  },
  practicepanther: {
    url: "https://www.practicepanther.com/?fpr=PP_PARTNER_ID",
    placeholder: "PP_PARTNER_ID",
    status: "pending" as const,
    notes: "Apply at practicepanther.com/referral/partner-program/ via PartnerStack — 10% annual / 5% monthly",
  },

  // ----------------------------------------------------------
  // Referral Programs (form-based, no tracking link)
  // ----------------------------------------------------------
  smokeball: {
    url: "https://www.smokeball.com/referral-program",
    placeholder: null,
    status: "pending" as const,
    notes: "Submit referrals at smokeball.com/referral-program — $300 eGift card per signup",
  },

  // ----------------------------------------------------------
  // No Affiliate Program — Direct Links
  // ----------------------------------------------------------
  filevine: {
    url: "https://www.filevine.com/",
    placeholder: null,
    status: "none" as const,
    notes: "No publisher affiliate program. Existing-customer advocate program only. Reach out: filevine.com/partners",
  },
  actionstep: {
    url: "https://www.actionstep.com/",
    placeholder: null,
    status: "none" as const,
    notes: "No public affiliate program. Contact directly for partnership opportunities.",
  },
  smartadvocate: {
    url: "https://www.smartadvocate.com/",
    placeholder: null,
    status: "none" as const,
    notes: "Enterprise product; no public affiliate program.",
  },
  docketwise: {
    url: "https://www.docketwise.com/",
    placeholder: null,
    status: "none" as const,
    notes: "Consultant/accountant partner program — not publisher affiliate.",
  },
  inszoom: {
    url: "https://www.inszoom.com/",
    placeholder: null,
    status: "none" as const,
    notes: "Enterprise product; no public affiliate program.",
  },
  wealthcounsel: {
    url: "https://www.wealthcounsel.com/",
    placeholder: null,
    status: "none" as const,
    notes: "Subscription membership model; no affiliate program found.",
  },
  imanage: {
    url: "https://imanage.com/",
    placeholder: null,
    status: "none" as const,
    notes: "Enterprise DMS; reseller/VAR model only.",
  },
  compulaw: {
    url: "https://www.compulaw.com/",
    placeholder: null,
    status: "none" as const,
    notes: "Aderant enterprise product; no affiliate program.",
  },
} as const;

export type AffiliateKey = keyof typeof affiliateConfig;

// ============================================================
// Name → Key Normalizer
// Maps display names and slugs to config keys
// ============================================================
const nameToKey: Record<string, AffiliateKey> = {
  // Clio
  clio: "clio",
  // MyCase
  mycase: "mycase",
  "my case": "mycase",
  // PracticePanther
  practicepanther: "practicepanther",
  "practice panther": "practicepanther",
  // Smokeball
  smokeball: "smokeball",
  // Filevine
  filevine: "filevine",
  // Rocket Matter
  "rocket matter": "rocketmatter",
  rocketmatter: "rocketmatter",
  "rocket-matter": "rocketmatter",
  // CosmoLex
  cosmolex: "cosmolex",
  // Lawmatics
  lawmatics: "lawmatics",
  // TimeSolv
  timesolv: "timesolv",
  // Bill4Time
  bill4time: "bill4time",
  // NetDocuments
  netdocuments: "netdocuments",
  // Others
  actionstep: "actionstep",
  smartadvocate: "smartadvocate",
  "smart advocate": "smartadvocate",
  docketwise: "docketwise",
  inszoom: "inszoom",
  wealthcounsel: "wealthcounsel",
  "wealth counsel": "wealthcounsel",
  imanage: "imanage",
  compulaw: "compulaw",
};

// ============================================================
// UTM Parameter Builder
// ============================================================
function appendUtm(url: string, page: string): string {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}utm_source=counselstack&utm_medium=affiliate&utm_campaign=${encodeURIComponent(page)}`;
}

// ============================================================
// Main Helper: getAffiliateUrl
//
// Usage:
//   getAffiliateUrl("Clio", "software-review")
//   → "https://www.clio.com/?ref=CLIO_PARTNER_ID&utm_source=counselstack..."
//
// Parameters:
//   software  — display name or slug (case-insensitive)
//   page      — UTM campaign name (e.g. "software-review", "vs-comparison", "for-audience")
// ============================================================
export function getAffiliateUrl(software: string, page: string = "general"): string {
  const normalizedKey = software.toLowerCase().replace(/\s+/g, "").replace(/-/g, "") as AffiliateKey;
  const nameKey = nameToKey[software.toLowerCase()];
  const key = nameKey || (affiliateConfig[normalizedKey as AffiliateKey] ? normalizedKey as AffiliateKey : null);

  if (key && affiliateConfig[key]) {
    return appendUtm(affiliateConfig[key].url, page);
  }

  // Fallback: Google search for the software
  return `https://www.google.com/search?q=${encodeURIComponent(software + " legal software")}`;
}

// ============================================================
// Convenience: get base URL without UTM (for data files)
// ============================================================
export function getAffiliateBaseUrl(software: string): string {
  const normalizedKey = software.toLowerCase().replace(/\s+/g, "").replace(/-/g, "") as AffiliateKey;
  const nameKey = nameToKey[software.toLowerCase()];
  const key = nameKey || (affiliateConfig[normalizedKey as AffiliateKey] ? normalizedKey as AffiliateKey : null);

  if (key && affiliateConfig[key]) {
    return affiliateConfig[key].url;
  }

  return `https://www.google.com/search?q=${encodeURIComponent(software + " legal software")}`;
}
