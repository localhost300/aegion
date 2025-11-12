export type Service = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  heroImage: string;
  cardImage: string;
  stats: { label: string; value: string }[];
  pillars: { title: string; description: string }[];
  highlights: string[];
  ctaLabel: string;
};

export const services: Service[] = [
  {
    slug: "ira-stewardship",
    title: "IRA Stewardship",
    category: "Retirement",
    summary:
      "Dedicated rollover strategists, compliant onboarding, and proactive participant education to safeguard every IRA transition.",
    heroImage: "/wealth-planning.jpg",
    cardImage: "/family-finance.jpg",
    stats: [
      { label: "Average rollover time", value: "13 days" },
      { label: "Service teams", value: "7 regional pods" },
      { label: "Participant CSAT", value: "98%" },
    ],
    pillars: [
      {
        title: "Guided Rollover Journeys",
        description:
          "Sequenced touchpoints, status dashboards, and concierge support that remove friction for each participant.",
      },
      {
        title: "Regulatory Confidence",
        description:
          "Documented suitability reviews and auditable approval steps aligned to every fiduciary requirement.",
      },
      {
        title: "Personalized Engagement",
        description:
          "Education tracks tailored by persona, geographic region, and retirement timeline.",
      },
    ],
    highlights: [
      "White-glove assistance for executive and broad-based populations.",
      "Consolidated reporting for committees and sponsoring employers.",
      "Secure integrations with custodians and recordkeepers.",
    ],
    ctaLabel: "Discuss IRA Programs",
  },
  {
    slug: "401k-modernization",
    title: "401(k) Modernization",
    category: "Plan Design",
    summary:
      "Benchmarking, menu architecture, and automation that transform legacy 401(k) plans into resilient, high-performing benefits.",
    heroImage: "/city-structure.jpg",
    cardImage: "/strategy-discussion.jpg",
    stats: [
      { label: "Plans optimized", value: "175+" },
      { label: "Fee reductions", value: "22% avg" },
      { label: "Participant growth", value: "31% avg" },
    ],
    pillars: [
      {
        title: "Plan Diagnostics",
        description:
          "Line-by-line review of plan documents, participation trends, and vendor obligations.",
      },
      {
        title: "Investment Architecture",
        description:
          "Open-architecture menus and default strategies anchored in capital market insights.",
      },
      {
        title: "Sponsor Enablement",
        description:
          "Board-ready dashboards, calendarized governance, and live fiduciary coaching.",
      },
    ],
    highlights: [
      "Auto-features tuned to employee behavior.",
      "Custom glidepaths for target-date strategies.",
      "Transparent vendor scorecards and RFP support.",
    ],
    ctaLabel: "Modernize Our 401(k)",
  },
  {
    slug: "strategic-insight",
    title: "Strategic Insight Office",
    category: "Advisory",
    summary:
      "A standing advisory bench that supplies capital-market research, policy recommendations, and decision-ready analytics.",
    heroImage: "/strategy-discussion.jpg",
    cardImage: "/team-session.jpg",
    stats: [
      { label: "Briefings delivered", value: "320/yr" },
      { label: "Countries covered", value: "18" },
      { label: "Analyst bench", value: "25 pros" },
    ],
    pillars: [
      {
        title: "Macro & Market Radar",
        description:
          "Weekly viewpoint decks spanning inflation, liquidity, and retirement legislation.",
      },
      {
        title: "Policy Modeling",
        description:
          "What-if analysis on employer match strategies, vesting, and incentive alignment.",
      },
      {
        title: "Executive Workshops",
        description:
          "Facilitated sessions that connect board priorities to tangible plan adjustments.",
      },
    ],
    highlights: [
      "Always-on Slack and portal support.",
      "Scenario planning for strategic initiatives.",
      "Coaching for benefits, finance, and HR leaders.",
    ],
    ctaLabel: "Request Insight Support",
  },
  {
    slug: "risk-mitigation",
    title: "Risk Awareness & Mitigation",
    category: "Assurance",
    summary:
      "Operational resiliency, cybersecurity, and continuity programs that keep retirement operations audit-ready.",
    heroImage: "/city-structure.jpg",
    cardImage: "/wealth-planning.jpg",
    stats: [
      { label: "Incidents contained", value: "60+" },
      { label: "Average audit prep time", value: "-40%" },
      { label: "Coverage zones", value: "Global" },
    ],
    pillars: [
      {
        title: "Continuity Frameworks",
        description:
          "Crisis runbooks, communication trees, and drills across every plan function.",
      },
      {
        title: "Vendor Oversight",
        description:
          "Risk scoring, remediation sprints, and right-to-audit enforcement with third parties.",
      },
      {
        title: "Regulatory Intelligence",
        description:
          "Real-time tracking of DOL, IRS, and SEC directives with implications translated into action.",
      },
    ],
    highlights: [
      "Cyber tabletop and incident response partners.",
      "Fiduciary insurance collaboration.",
      "Centralized documentation repositories.",
    ],
    ctaLabel: "Strengthen Risk Posture",
  },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);
