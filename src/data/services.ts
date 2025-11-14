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
    slug: "wealth-accumulation-strategies",
    title: "Wealth Accumulation Strategies",
    category: "Wealth",
    summary:
      "Personalized wealth programs that combine high-yield cash, disciplined core portfolios, and curated thematic sleeves so capital compounds with confidence.",
    heroImage: "/life-style.jpg",
    cardImage: "/authentic-small-youthful-marketing-agency.jpg",
    stats: [
      { label: "Portfolio mix", value: "Multi-asset" },
      { label: "Automation cadence", value: "Daily" },
      { label: "Client retention", value: "98%" },
    ],
    pillars: [
      {
        title: "Personalized Roadmaps",
        description:
          "Every household receives a bespoke glidepath, education strategy, and liquidity plan anchored to their goals.",
      },
      {
        title: "Opportunity Access",
        description:
          "Blend core ETFs with targeted exposures across technology, renewables, cannabis, and private-market windows.",
      },
      {
        title: "Legacy Stewardship",
        description:
          "Co-create gifting, philanthropy, and succession strategies so multi-generational wealth stays intentional.",
      },
    ],
    highlights: [
      "Holistic dashboards unite banking, brokerage, and alternative data.",
      "Automations rebalance, harvest losses, and stage withdrawals.",
      "Dedicated Aegion Mountain team for coaching and accountability.",
    ],
    ctaLabel: "Start Building Wealth",
  },
  {
    slug: "risk-assessment-and-mitigation",
    title: "Risk Assessment & Mitigation",
    category: "Assurance",
    summary:
      "Comprehensive diagnostics, continuity playbooks, and market-monitoring so sponsors can absorb shocks and keep fiduciary files exam-ready.",
    heroImage: "/city-structure.jpg",
    cardImage: "/tall-skyscraper-with-metal-construction.jpg",
    stats: [
      { label: "Continuity drills", value: "Biannual" },
      { label: "Vendor reviews", value: "45+ /yr" },
      { label: "Coverage zones", value: "Global" },
    ],
    pillars: [
      {
        title: "Holistic Diagnostics",
        description:
          "Deep dives into plan governance, market exposures, and operational controls to surface vulnerabilities early.",
      },
      {
        title: "Continuity & Vendor Oversight",
        description:
          "Crisis runbooks, communication trees, and right-to-audit enforcement with every critical partner.",
      },
      {
        title: "Decision Dashboards",
        description:
          "Executive-ready reporting that translates risk signals into prioritized mitigation sprints.",
      },
    ],
    highlights: [
      "Regulatory horizon scans across DOL, IRS, SEC, and state mandates.",
      "Incident war-room support plus tabletop facilitation.",
      "Integration with Aegion Mountain governance calendars.",
    ],
    ctaLabel: "Strengthen Risk Posture",
  },
  {
    slug: "retirement-planning-solutions",
    title: "Retirement Planning Solutions",
    category: "Retirement",
    summary:
      "Advisor-led strategies, specialized income portfolios, and guided decision support so retirees can lock in predictable cash flow.",
    heroImage: "/retirement-joy.jpg",
    cardImage:
      "/happy-cheerful-grandmother-waiting-family-wearing-cardigan-blouse-get-warm-presctiprtion-glasses-cross-arms-chest-casual-pose-smiling-joyfully-taking-care-grandkids.jpg",
    stats: [
      { label: "Income simulations", value: "50+ scenarios" },
      { label: "On-platform assets", value: "$3.2B" },
      { label: "Advisor touchpoints", value: "Quarterly" },
    ],
    pillars: [
      {
        title: "Income Architecture",
        description:
          "Segment assets into essential, lifestyle, and legacy needs with inflation-aware drawdown rules.",
      },
      {
        title: "Specialized Investments",
        description:
          "Curated ladders, dividend ETFs, and principal-protected notes tailored to each timeline.",
      },
      {
        title: "Behavioral Guardrails",
        description:
          "Coaching, alerts, and nudges that keep retirees aligned with the plan during volatile cycles.",
      },
    ],
    highlights: [
      "One portal for both on- and off-platform accounts.",
      "Automation keeps contributions, withdrawals, and rebalancing on schedule.",
      "Scenario planning for long-term care, healthcare inflation, and bequests.",
    ],
    ctaLabel: "Plan My Retirement",
  },
  {
    slug: "financial-planning-analysis",
    title: "Financial Planning & Analysis",
    category: "Advisory",
    summary:
      "Strategic FP&A support that pairs executive decision decks with granular modeling so leaders can move with clarity.",
    heroImage: "/macro-shot-financial-mortgage-concept.jpg",
    cardImage: "/team-session.jpg",
    stats: [
      { label: "Reporting cadence", value: "Weekly" },
      { label: "Model refresh time", value: "< 4 hrs" },
      { label: "Dashboards deployed", value: "90+" },
    ],
    pillars: [
      {
        title: "Forward-Looking Models",
        description:
          "Rolling forecasts integrate treasury, benefits spend, and workforce planning into one decision fabric.",
      },
      {
        title: "Executive Decision Packs",
        description:
          "Board-ready narratives that link financial levers to mission metrics and stakeholder outcomes.",
      },
      {
        title: "Actionable Monitoring",
        description:
          "BI-driven alerts translate raw data into next steps for finance, HR, and investment committees.",
      },
    ],
    highlights: [
      "Mission and vision anchored to long-term client relationships.",
      "Option to embed Aegion Mountain analysts alongside internal teams.",
      "Direct line to support@aegionmountain.com for rapid iterations.",
    ],
    ctaLabel: "Schedule FP&A Session",
  },
  {
    slug: "retirement-iras",
    title: "Retirement IRAs",
    category: "Retirement",
    summary:
      "Automated IRA programs that surface every asset, deploy tax-intelligent trades, and unlock alternative exposure without the friction of legacy custodians.",
    heroImage: "/family-finance.jpg",
    cardImage: "/lifestyle-people-office.jpg",
    stats: [
      { label: "Automation engine", value: "Always-on" },
      { label: "Strategy tiles", value: "100+ options" },
      { label: "Rebalance window", value: "Daily" },
    ],
    pillars: [
      {
        title: "Unified Visibility",
        description:
          "Cresthanx-powered views show on- and off-platform holdings so investors stay oriented.",
      },
      {
        title: "Smart Automation",
        description:
          "Trade execution, contributions, and rebalancing follow programmable guardrails to save time.",
      },
      {
        title: "Tax + Plan Guidance",
        description:
          "Advisors help determine when to leverage Traditional, Roth, SEP, or SIMPLE structures and how to optimize withdrawals.",
      },
    ],
    highlights: [
      "Access to technology, renewable, and cannabis themes within compliant wrappers.",
      "Guided rollovers for business owners and self-employed leaders.",
      "Client notifications when markets, rules, or timelines shift.",
    ],
    ctaLabel: "Optimize My IRA",
  },
  {
    slug: "college-529s",
    title: "College 529s",
    category: "Education",
    summary:
      "Tax-advantaged college savings plans with glidepath automation, in-app monitoring, and transparent fees so families can fund any campus with confidence.",
    heroImage: "/workplace-team-cooperation-businesswoman-laptop-office.jpg",
    cardImage: "/strategy-discussion.jpg",
    stats: [
      { label: "Management fee", value: "0.25% annually" },
      { label: "All-in expense goal", value: "0.40–0.46%" },
      { label: "Cash APY", value: "5.00% via partners" },
    ],
    pillars: [
      {
        title: "Automated Glidepaths",
        description:
          "Deposits shift from growth to capital preservation as the beneficiary approaches enrollment.",
      },
      {
        title: "In-App Clarity",
        description:
          "Track superfunding, recurring contributions, and projected balances from any device.",
      },
      {
        title: "Cash + Tax Advantages",
        description:
          "Emergency cash earns leading APY while qualified distributions remain federal tax-free.",
      },
    ],
    highlights: [
      "Eligible for K–12 tuition, college costs, and approved apprenticeships.",
      "Unlimited withdrawals from partner banks with up to $8M FDIC coverage.",
      "Hands-off investing powered by Aegion Mountain’s automated portfolios and tax-loss harvesting.",
    ],
    ctaLabel: "Launch A 529 Plan",
  },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);
