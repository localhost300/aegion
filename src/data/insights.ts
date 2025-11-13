export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  image: string;
  date: string;
  readingTime: string;
};

export const insights: Insight[] = [
  {
    slug: "ira-journeys-2025",
    title: "What Retirees Expect From Modern IRA Journeys",
    excerpt:
      "Voice-of-customer findings from thousands of participants as they roll balances and seek new advisory relationships.",
    tag: "Research",
    image: "/insight-01.jpg",
    date: "March 12, 2025",
    readingTime: "6 min read",
  },
  {
    slug: "automation-with-heart",
    title: "401(k) Automation Without Losing the Human Touch",
    excerpt:
      "Playbooks for combining auto-features with storytelling that keeps employees confident through market swings.",
    tag: "Playbook",
    image: "/insight-02.jpg",
    date: "February 28, 2025",
    readingTime: "8 min read",
  },
  {
    slug: "board-dashboards",
    title: "Board Dashboards That Inspire Action",
    excerpt:
      "How Aegion Mountain packages fiduciary reporting so directors can spot wins, risks, and next best moves at a glance.",
    tag: "Perspective",
    image: "/insight-03.jpg",
    date: "January 30, 2025",
    readingTime: "7 min read",
  },
  {
    slug: "global-plan-trends",
    title: "Global Plan Trends Worth Watching This Year",
    excerpt:
      "A quick brief on regulatory shifts, demographic forces, and tech adoption that will shape retirement programs.",
    tag: "Outlook",
    image: "/city-structure.jpg",
    date: "January 8, 2025",
    readingTime: "5 min read",
  },
  {
    slug: "participant-storytelling",
    title: "Storytelling Techniques That Drive Participation",
    excerpt:
      "Simple language frameworks you can use in town halls, microsites, and push notifications to boost engagement.",
    tag: "Guide",
    image: "/strategy-discussion.jpg",
    date: "December 18, 2024",
    readingTime: "9 min read",
  },
];
