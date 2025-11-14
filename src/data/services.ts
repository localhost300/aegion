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
    slug: "wealath-accumulation-strategies",
    title: "Wealth Accumulation Strategies",
    category: "Wealth",
    summary:
      "Integrated playbooks that balance high-yield cash, low-risk bond ETFs, and curated alternatives so capital compounds with confidence.",
    heroImage: "/authentic-small-youthful-marketing-agency.jpg",
    cardImage: "/life-style.jpg",
    stats: [
      { label: "Target APY", value: "4.50%" },
      { label: "ETF lineup", value: "12 core funds" },
      { label: "Automation cycles", value: "Weekly" },
    ],
    pillars: [
      {
        title: "Yield + Liquidity",
        description:
          "Blend insured cash programs with low-volatility ETFs to unlock dependable income without sacrificing access.",
      },
      {
        title: "Alternative Windows",
        description:
          "Rotational sleeves across technology, renewable energy, cannabis, and more to capture emerging opportunities.",
      },
      {
        title: "Hands-off Automation",
        description:
          "Our platform executes contributions, rebalancing, and tax-aware withdrawals so every dollar follows the plan.",
      },
    ],
    highlights: [
      "Holistic dashboard across banking, brokerage, and alternatives.",
      "Scenario planning to stress-test capital over multiple horizons.",
      "Education cadences tailored for executives and households.",
    ],
    ctaLabel: "Explore Wealth Strategies",
  },
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
    slug: "retirement-planning-solution",
    title: "Retirement Planning Solution",
    category: "Retirement",
    summary:
      "Automation, analytics, and advisory that help individuals and plan sponsors see every retirement asset—and act with clarity.",
    heroImage: "/retirement-joy.jpg",
    cardImage: "/lifestyle-people-office.jpg",
    stats: [
      { label: "Households supported", value: "12k+" },
      { label: "Automation rules", value: "200+" },
      { label: "Plan templates", value: "45" },
    ],
    pillars: [
      {
        title: "Holistic Dashboards",
        description:
          "Bring on- and off-platform assets into one view, tracking goals, tax lots, and withdrawal readiness.",
      },
      {
        title: "Smart Contributions",
        description:
          "Automated, tax-aware funding schedules for traditional, Roth, SEP, and SIMPLE IRA structures.",
      },
      {
        title: "Retirement Coaching",
        description:
          "Scenario planning and advisor check-ins that reinforce discipline until and through retirement.",
      },
    ],
    highlights: [
      "Pre-built education campaigns for employees or households.",
      "Plan document generation plus secure archival.",
      "Compliance-ready audit trails for every adjustment.",
    ],
    ctaLabel: "Plan My Retirement",
  },
  {
    slug: "401k-modernization",
    title: "401(k) Modernization",
    category: "Plan Design",
    summary:
      "Benchmarking, menu architecture, and automation that transform legacy 401(k) plans into resilient, high-performing benefits.",
    heroImage: "/strategy-discussion.jpg",
    cardImage: "/team-session.jpg",
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
    slug: "financial-planning-analysis",
    title: "Financial Planning & Analysis",
    category: "Advisory",
    summary:
      "Data-rich analysis that connects enterprise finance with personal financial planning to keep leaders ahead of every decision.",
    heroImage: "/macro-shot-financial-mortgage-concept.jpg",
    cardImage: "/hero.jpg",
    stats: [
      { label: "Dashboards deployed", value: "90+" },
      { label: "Reporting cadence", value: "Weekly" },
      { label: "Model refresh time", value: "<4 hrs" },
    ],
    pillars: [
      {
        title: "Strategic Forecasting",
        description:
          "Rolling forecasts that align capital plans, benefits spend, and treasury objectives.",
      },
      {
        title: "Personal FP&A",
        description:
          "Executive compensation, equity, and liquidity modeling to keep leaders on track personally and professionally.",
      },
      {
        title: "Actionable Insights",
        description:
          "BI-powered alerts that translate raw data into decisions for finance, HR, and boards.",
      },
    ],
    highlights: [
      "Connected datasets across payroll, treasury, and investments.",
      "Scenario toggles for inflation, hiring, and capital events.",
      "Coaching for finance leaders adopting new tooling.",
    ],
    ctaLabel: "Schedule FP&A Review",
  },
  {
    slug: "strategic-insight",
    title: "Strategic Insight Office",
    category: "Advisory",
    summary:
      "A standing advisory bench that supplies capital-market research, policy recommendations, and decision-ready analytics.",
    heroImage: "/hero.jpg",
    cardImage: "/strategy-discussion.jpg",
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
    slug: "risk-assessment-mitigation",
    title: "Risk Assessment & Mitigation",
    category: "Assurance",
    summary:
      "Operational resiliency, cybersecurity, and continuity programs that keep retirement operations audit-ready.",
    heroImage: "/tall-skyscraper-with-metal-construction.jpg",
    cardImage: "/city-structure.jpg",
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
  {
    slug: "participant-care-concierge",
    title: "Participant Care Concierge",
    category: "Experience",
    summary:
      "A hybrid service desk that keeps every participant confident, combining proactive education, live guidance, and data-backed escalations.",
    heroImage: "/workplace-team-cooperation-businesswoman-laptop-office.jpg",
    cardImage: "/team-session.jpg",
    stats: [
      { label: "Coverage", value: "24/5" },
      { label: "Languages", value: "8" },
      { label: "CSAT", value: "99%" },
    ],
    pillars: [
      {
        title: "Omni-channel Support",
        description:
          "Live chat, SMS, and scheduled video consults so every question is acknowledged within minutes.",
      },
      {
        title: "Participant Intelligence",
        description:
          "Engagement scoring and alerting that surface households who may need nudges before milestones.",
      },
      {
        title: "Escalation Playbooks",
        description:
          "Templates that route complex cases to compliance, plan sponsors, or advisors without friction.",
      },
    ],
    highlights: [
      "Event-based messaging for enrollments, rollovers, and retirement readiness.",
      "Integrated knowledge base with screen-shares and guided walkthroughs.",
      "Sentiment dashboards for HR and finance leadership.",
    ],
    ctaLabel: "Meet The Concierge Team",
  },
  {
    slug: "plan-health-audit",
    title: "Plan Health Audit",
    category: "Advisory",
    summary:
      "A rapid diagnostic that benchmarks plan design, fees, and fiduciary governance so leaders can prioritize what to modernize next.",
    heroImage: "/team-session.jpg",
    cardImage: "/brown-retro-electronic-phone-device.jpg",
    stats: [
      { label: "Audit duration", value: "30 days" },
      { label: "Benchmarks", value: "75+" },
      { label: "Findings deck", value: "25 slides" },
    ],
    pillars: [
      {
        title: "Data Intake",
        description:
          "Automated ingestion of plan documents, vendor agreements, and participant demographics.",
      },
      {
        title: "Comparative Analytics",
        description:
          "Fee, design, and outcome benchmarks stacked against peers, industries, and regulatory guidelines.",
      },
      {
        title: "Action Roadmap",
        description:
          "Prioritized backlog with business cases, owner assignments, and timing guidance.",
      },
    ],
    highlights: [
      "Clear view of fiduciary risks and quick wins.",
      "Consolidated summary for committees and boards.",
      "Optional workshop to align HR, finance, and advisors.",
    ],
    ctaLabel: "Schedule An Audit",
  },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);
