export type Project = {
  slug: string;
  year: string;
  title: string;
  tags: string[];
  summary: string;
  challenge: string;
  solution: string;
  impact: string;
};

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
};

export const faqs = [
  {
    question: "How long does a design project take?",
    answer:
      "Most projects run 4-8 weeks depending on scope. Small website refreshes can launch in 2-3 weeks, while full product redesigns need more discovery and iteration.",
  },
  {
    question: "Do you design apps or only websites?",
    answer:
      "Brandroad Inc designs web platforms, marketing websites, and mobile app experiences with one unified design system.",
  },
  {
    question: "What is included in your UX service?",
    answer:
      "You get discovery workshops, journey mapping, wireframes, visual design, interactive prototypes, and developer-ready design handoff.",
  },
  {
    question: "Can you work with an existing brand?",
    answer:
      "Yes. We can modernize your current brand language or evolve it while keeping customer recognition intact.",
  },
  {
    question: "Will we receive all final files?",
    answer:
      "Absolutely. You receive complete design files, assets, and usage guidelines for your in-house team.",
  },
];

export const testimonials = [
  {
    quote:
      "Brandroad Inc redesigned our onboarding journey and our trial-to-paid conversion jumped by 38%.",
    name: "Laila Faris",
    company: "TechStart",
  },
  {
    quote:
      "Their mobile-first redesign gave our customers a smoother ordering flow and raised repeat purchases fast.",
    name: "James Paile",
    company: "Local Cafe Group",
  },
  {
    quote:
      "From messaging clarity to interface polish, they made our brand feel premium and trustworthy.",
    name: "David Curl",
    company: "Left Marketing",
  },
  {
    quote:
      "Support tickets dropped significantly after launch because users could finally find what they needed.",
    name: "Tom Sivers",
    company: "CloudForge",
  },
  {
    quote:
      "Working with Brandroad Inc felt like adding a strategic design partner to our leadership team.",
    name: "Alex Kumar",
    company: "JourneyPilot",
  },
  {
    quote:
      "The landing page optimization work improved sign-ups by 81% in the first six weeks.",
    name: "Anna Liza",
    company: "FinacTech Apps",
  },
];

export const projects: Project[] = [
  {
    slug: "gretta-interior",
    year: "2026",
    title: "Gretta Interior",
    tags: ["Web Design"],
    summary:
      "A conversion-focused redesign for an interior studio that needed stronger storytelling and cleaner project discovery.",
    challenge:
      "Visitors loved the portfolio but could not quickly understand service packages or booking options.",
    solution:
      "We rebuilt the information architecture around room types, added guided package selection, and introduced high-contrast calls to action.",
    impact:
      "Consultation requests increased by 44% and average session duration doubled after launch.",
  },
  {
    slug: "chema-premium",
    year: "2026",
    title: "Chema Premium",
    tags: ["Web Design", "Brand Design"],
    summary:
      "A digital refresh for a chemical manufacturer that needed credibility with international buyers.",
    challenge:
      "The old site lacked technical clarity and failed to communicate compliance standards.",
    solution:
      "We introduced a modular product system, documentation hubs, and a stronger visual language to highlight reliability.",
    impact:
      "Qualified inbound leads rose by 31% within one quarter.",
  },
  {
    slug: "dianadia-portfolio",
    year: "2025",
    title: "Dianadia Portfolio",
    tags: ["Web Design", "Brand Design"],
    summary:
      "A personal portfolio transformation into a business-ready lead engine.",
    challenge:
      "The previous portfolio looked great but lacked a clear funnel for project inquiries.",
    solution:
      "We built narrative-led case studies, reusable proof blocks, and direct inquiry touchpoints throughout the journey.",
    impact:
      "Inbound project inquiries increased by 2.3x.",
  },
  {
    slug: "all-reno",
    year: "2025",
    title: "All Reno",
    tags: ["Web Design"],
    summary:
      "A modern website for a renovation company focused on trust, before-after storytelling, and local SEO clarity.",
    challenge:
      "Customers struggled to compare service categories and understand timeline expectations.",
    solution:
      "We designed a guided quote experience with transparent milestones and project galleries by room type.",
    impact:
      "Quote form completion improved by 52%.",
  },
];

export const posts: BlogPost[] = [
  {
    slug: "why-great-designers-are-storytellers",
    category: "Design",
    title: "Why Great Designers Are Storytellers",
    date: "Mar 6, 2026",
    excerpt:
      "Interfaces that convert are not just pretty. They guide people through a clear emotional and logical narrative.",
    content: [
      "Great product design is structured storytelling. Each screen should answer one key question and motivate the next action.",
      "When a page tries to explain everything at once, users bounce. When a page leads with context, evidence, and a focused choice, users commit.",
      "Story-first design improves conversion because it mirrors how people decide in real life: understand, compare, then trust.",
    ],
  },
  {
    slug: "new-designer-survival-guide",
    category: "Guide",
    title: "New Designer Survival Guide (Avoid These Mistakes)",
    date: "Feb 19, 2026",
    excerpt:
      "Early-career designers can accelerate quickly by mastering communication, not just visual craft.",
    content: [
      "The fastest growth move is to ask better product questions. Understand constraints before opening your design tool.",
      "Share rough ideas early. Waiting for polished screens slows feedback loops and creates rework.",
      "Document your decisions so developers and stakeholders can move confidently without guesswork.",
    ],
  },
  {
    slug: "tools-pro-designers-use",
    category: "Tools",
    title: "Speed Up Your Design Process (Tools Pro Designers Use)",
    date: "Jan 23, 2026",
    excerpt:
      "A practical stack for shipping better UX faster, from discovery to handoff.",
    content: [
      "Templates for research synthesis can save days in every sprint. Build one repeatable framework and keep evolving it.",
      "Prototyping is strongest when tied to real copy and realistic edge cases, not placeholder flows.",
      "Use a handoff checklist for spacing tokens, interaction states, and accessibility behavior before engineering kickoff.",
    ],
  },
  {
    slug: "why-beautiful-design-fails-to-convert",
    category: "Design",
    title: "Why Beautiful Design Is Not Converting",
    date: "Jan 5, 2026",
    excerpt:
      "A polished UI can still underperform when hierarchy and user intent are misaligned.",
    content: [
      "Most conversion issues come from unclear value framing rather than button colors or animation style.",
      "Audit your top pages for friction: confusing labels, hidden trust signals, or too many competing actions.",
      "Small hierarchy changes often outperform full redesigns when they target the right decision points.",
    ],
  },
];

export const homeHighlights = [
  {
    title: "User Focus",
    text: "Every engagement starts with research into real user behavior, pain points, and decision triggers.",
  },
  {
    title: "Collaborative",
    text: "We partner closely with founders and teams, balancing speed with strategic design decisions.",
  },
  {
    title: "Clear Communication",
    text: "No design jargon overload. You get transparent updates, measurable milestones, and practical next steps.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}