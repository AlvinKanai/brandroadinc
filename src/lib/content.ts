export type ProjectRecord = {
  id: string;
  slug: string;
  title: string;
  clientName: string;
  coverImageUrl: string;
  headings: string[];
  theProblem: string;
  theSolution: string;
  bodyContent: string;
  testimonialQuote: string;
  testimonialAuthor: string;
  testimonialRole: string;
  createdAt: string;
};

export type PostRecord = {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  bodyContent: string;
  mainImageUrl: string;
  authorName: string;
  publishedAt: string;
};

export const projects: ProjectRecord[] = [
  {
    id: "prj_1",
    slug: "paywave-saas-redesign",
    title: "Paywave SaaS Redesign",
    clientName: "Paywave",
    coverImageUrl: "/logo.png",
    headings: ["Onboarding", "Conversion", "Trust Layers"],
    theProblem:
      "Trial users were dropping before activation because the interface drowned key actions in clutter.",
    theSolution:
      "We rebuilt IA, stripped friction, and engineered a high-trust UI pattern system that drove action clarity.",
    bodyContent:
      "<h2>What We Changed</h2><p>Brandroad introduced a ruthless clarity pass: friction mapping, interaction re-ordering, and stronger action hierarchy. The result was cleaner onboarding and stronger paid conversion.</p>",
    testimonialQuote: "They turned our UX chaos into a repeatable growth system.",
    testimonialAuthor: "Nia Otieno",
    testimonialRole: "Head of Product",
    createdAt: "2026-03-12T10:00:00.000Z",
  },
  {
    id: "prj_2",
    slug: "kopa-brand-system",
    title: "Kopa Brand System",
    clientName: "Kopa Labs",
    coverImageUrl: "/logo.png",
    headings: ["Identity", "Guidelines", "Scale"],
    theProblem:
      "The startup looked inconsistent across investor decks, app screens, and social channels.",
    theSolution:
      "We built a hard-working visual system with reusable type, color, and narrative assets ready for speed.",
    bodyContent:
      "<h2>Brand at Scale</h2><p>We created a complete toolkit for marketing and product teams, including voice rules, visual constraints, and execution templates.</p>",
    testimonialQuote: "Finally our brand looks like the company we are becoming.",
    testimonialAuthor: "Liam Mwangi",
    testimonialRole: "Founder",
    createdAt: "2026-02-20T13:00:00.000Z",
  },
  {
    id: "prj_3",
    slug: "tuma-commerce-site",
    title: "Tuma Commerce Site",
    clientName: "Tuma",
    coverImageUrl: "/logo.png",
    headings: ["Performance", "Checkout", "Merchandising"],
    theProblem: "High traffic but low checkout completion and weak mobile trust cues.",
    theSolution:
      "We shipped a conversion-first storefront with product storytelling bento modules and cleaner checkout UX.",
    bodyContent:
      "<h2>Conversion Engineering</h2><p>Performance budget enforcement, trust badges, and checkout simplification lifted revenue per session significantly.</p>",
    testimonialQuote: "The new site prints confidence and conversions.",
    testimonialAuthor: "Asha Were",
    testimonialRole: "Growth Lead",
    createdAt: "2026-01-04T11:20:00.000Z",
  },
];

export const posts: PostRecord[] = [
  {
    id: "pst_1",
    slug: "startup-branding-agency-nairobi-playbook",
    title: "Startup Branding Agency Nairobi: The 2026 Execution Playbook",
    metaDescription:
      "How startups can scale trust with product UX, identity systems, and conversion-first web architecture.",
    bodyContent:
      "<h2>Authority Meets Relatability</h2><p>Great design is not vibes. It is sequencing decisions so users trust your product fast and convert without confusion.</p>",
    mainImageUrl: "/logo.png",
    authorName: "Lampson",
    publishedAt: "2026-03-15T08:00:00.000Z",
  },
  {
    id: "pst_2",
    slug: "why-clean-ui-beats-feature-bloat",
    title: "Why Clean UI Beats Feature Bloat Every Time",
    metaDescription:
      "A tactical framework for reducing noise and shipping interfaces that increase activation and retention.",
    bodyContent:
      "<h2>Clarity is a Growth Lever</h2><p>When users understand the next step immediately, your funnel leaks less and your support burden drops.</p>",
    mainImageUrl: "/logo.png",
    authorName: "Brandroad Editorial",
    publishedAt: "2026-02-10T09:00:00.000Z",
  },
  {
    id: "pst_3",
    slug: "the-design-evangelist-approach-to-saas",
    title: "The Design Evangelist Approach to SaaS Architecture",
    metaDescription:
      "Design systems, product logic, and growth UX patterns built for scale from day one.",
    bodyContent:
      "<h2>System Thinking</h2><p>Strong products are modular. We define interaction contracts early so new features do not break user trust later.</p>",
    mainImageUrl: "/logo.png",
    authorName: "Lampson",
    publishedAt: "2026-01-12T14:00:00.000Z",
  },
];

export function getProjectBySlug(slug: string): ProjectRecord | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getPostBySlug(slug: string): PostRecord | undefined {
  return posts.find((post) => post.slug === slug);
}
