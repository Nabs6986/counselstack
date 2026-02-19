// Central config for waitlist across all GEO sites
// Arnab: Replace placeholder IDs with your actual values from Beehiiv

export const waitlistConfig = {
  // Beehiiv publication ID (from your Neural X account)
  publicationId: "BEEHIIV_PUB_ID",

  // Per-niche form configurations
  niches: {
    legal: {
      formId: "LEGAL_FORM_ID",
      headline: "Need something simpler for your practice?",
      subheadline:
        "We're building lightweight legal software for solo attorneys and small firms. No bloat, fair pricing.",
      tags: ["legal", "counselstack"],
    },
    salon: {
      formId: "SALON_FORM_ID",
      headline: "Looking for something different?",
      subheadline:
        "We're building modern salon software that doesn't nickel-and-dime you. Join the waitlist.",
      tags: ["salon", "glossystack"],
    },
    moving: {
      formId: "MOVING_FORM_ID",
      headline: "Need moving software that actually works?",
      subheadline:
        "We're building simple, affordable software for moving companies. Early access coming soon.",
      tags: ["moving", "movingsoftware"],
    },
  },
} as const;

export type WaitlistNiche = keyof typeof waitlistConfig.niches;
