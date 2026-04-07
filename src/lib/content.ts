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
    headings: ["Onboarding", "Conversion", "Trust Layers", "Retention"],
    theProblem:
      "Trial users were dropping before activation because the interface drowned key actions in clutter and every screen felt like a different product.",
    theSolution:
      "We rebuilt IA, stripped friction, and engineered a high-trust pattern system that made every next step obvious without dumbing down power-user workflows.",
    bodyContent: `<h2>What We Changed</h2><p>We started with a brutal journey audit. Every click had to defend itself. If a step did not increase confidence or move the user closer to activation, it got cut.</p><p>Then we restructured the onboarding flow into one clear narrative: setup, connect, verify, launch. No mystery tabs. No passive-aggressive empty states. Just progress that feels rewarding.</p><h3>Execution Highlights</h3><ul><li>Unified component language across dashboard and setup surfaces</li><li>Reduced noisy UI chrome and boosted action hierarchy</li><li>Designed trust moments around billing and permissions</li><li>Shipped responsive QA pass for low-end Android devices</li></ul><p>The result was not just prettier UI. It was operational calm. Product, support, and growth teams all got fewer "where do I click" complaints and more customers reaching first value faster.</p>`,
    testimonialQuote: "They turned our UX chaos into a repeatable growth system with swagger and discipline.",
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
    headings: ["Identity", "Guidelines", "Product Voice", "Scale"],
    theProblem:
      "The startup looked inconsistent across investor decks, app screens, and social channels, so trust was leaking before sales calls even started.",
    theSolution:
      "We built a hard-working visual system with reusable type, color, and narrative assets so every touchpoint looked like one serious company with personality.",
    bodyContent: `<h2>Brand at Scale</h2><p>We ran a brand stress test across pitch decks, product UI, social posts, and sales collateral. Every inconsistency was mapped to one of three causes: no rules, vague rules, or ignored rules.</p><p>Then we shipped a practical brand system built for speed, not for museum shelves: typography hierarchy, tokenized color usage, tone-of-voice guardrails, and reusable templates for real weekly output.</p><h3>What Changed Internally</h3><ul><li>Design and marketing stopped arguing about shades and spacing</li><li>Founders could brief freelancers in one document instead of twelve voice notes</li><li>Product UI and external brand stopped looking like cousins from different towns</li></ul><p>Kopa went from "promising startup" to "credible category contender" in under one quarter.</p>`,
    testimonialQuote: "Finally our brand looks like the company we are becoming, not the one we started with in a rush.",
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
    headings: ["Performance", "Checkout", "Merchandising", "Mobile Trust"],
    theProblem: "High traffic but low checkout completion, weak mobile trust cues, and product pages that answered almost none of the questions buyers had.",
    theSolution:
      "We shipped a conversion-first storefront with product storytelling bento modules, cleaner checkout UX, and trust-first messaging at each high-friction point.",
    bodyContent: `<h2>Conversion Engineering</h2><p>We treated each product page like a salesperson that never sleeps. That meant clearer value framing, stronger social proof, and obvious size, shipping, and returns information before users had to hunt for it.</p><p>Checkout got a full simplification pass with mobile-first spacing, clearer field labels, and payment reassurance where anxiety usually spikes.</p><h3>Impact Drivers</h3><ul><li>Performance budget enforced for product imagery and scripts</li><li>Copy architecture rebuilt around user objections</li><li>Cart and checkout surfaced confidence cues at exactly the right moments</li></ul><p>Traffic stayed the same. Revenue per session did not. That is the difference between a pretty storefront and a selling system.</p>`,
    testimonialQuote: "The new site prints confidence and conversions. Our growth team finally smiles on Monday mornings.",
    testimonialAuthor: "Asha Were",
    testimonialRole: "Growth Lead",
    createdAt: "2026-01-04T11:20:00.000Z",
  },
];

export const posts: PostRecord[] = [
  {
    id: "pst_1",
    slug: "startup-branding-agency-nairobi-playbook",
    title: "Startup Branding Agency Nairobi: The 2026 Execution Playbook (No Fluff Edition)",
    metaDescription:
      "How founders can scale trust with product UX, identity systems, and conversion-first web architecture without burning six months in design limbo.",
    bodyContent: `<h2>Reality Check: Design Is a Revenue System</h2><p>Most founders say they want great design. What they actually mean is: we want users to trust us faster, convert sooner, and complain less. That is not a mood board problem. That is a systems problem.</p><p>In Nairobi and beyond, startups are shipping faster than ever. The winners are not the loudest. They are the clearest. If your onboarding confuses people or your website reads like ten people wrote it in one weekend, you are taxing growth before ads even start working.</p><h2>The Three-Layer Trust Stack</h2><h3>1) Product Clarity</h3><p>Users should instantly understand what your product does, what they should do next, and what happens after they click. If this is not obvious in under ten seconds, your activation funnel is already bleeding.</p><h3>2) Brand Consistency</h3><p>Your app, deck, landing page, and social voice should feel like one company. Not cousins. Trust compounds when every touchpoint confirms the same quality standard.</p><h3>3) Conversion Architecture</h3><p>Every page needs one clear job. Every section needs one clear promise. Every CTA needs one clear next step. Ambiguity is expensive, and users bill you immediately by leaving.</p><h2>What We Tell Founders During Week One</h2><ul><li>Stop redesigning logos before fixing onboarding friction</li><li>Cut feature explanation walls and show outcomes first</li><li>Use proof aggressively: numbers, logos, testimonials, demos</li><li>Write copy like a calm expert, not an overexcited intern</li></ul><p>Good design is not about looking expensive. It is about behaving predictably under pressure. Build for trust, then scale traffic. In that order.</p>`,
    mainImageUrl: "/logo.png",
    authorName: "Lampson",
    publishedAt: "2026-03-15T08:00:00.000Z",
  },
  {
    id: "pst_2",
    slug: "why-clean-ui-beats-feature-bloat",
    title: "Why Clean UI Beats Feature Bloat Every Time",
    metaDescription:
      "A tactical framework for reducing UI noise and shipping interfaces that improve activation, retention, and support load.",
    bodyContent: `<h2>Feature Bloat Feels Smart Until It Kills Adoption</h2><p>Teams often mistake complexity for progress. New tabs, new toggles, new settings. Suddenly your dashboard looks like a cockpit and your users feel like they need a pilot license.</p><p>Clean UI does not mean "simple" in a childish way. It means deliberate. The right information in the right sequence, with the right visual weight, so users can make confident decisions fast.</p><h2>The Bloat Loop</h2><p>It usually starts innocently: one enterprise request, one sales promise, one workaround. Then nobody cleans up the interface debt. Three quarters later, power users are annoyed, new users are lost, and support has become your accidental onboarding team.</p><h2>The Clarity Loop</h2><ul><li>Audit every screen for one primary outcome</li><li>Demote secondary actions visually</li><li>Remove duplicate controls and hidden dead ends</li><li>Instrument key paths and watch real behavior, not opinions</li></ul><p>When you reduce cognitive load, everything improves: first-session success, team confidence, and roadmap velocity.</p><h2>Nairobi Tech-Bro Translation</h2><p>If users are opening WhatsApp to ask your support team "Nabofya wapi?", that screen failed. If they can finish the flow without calling anyone, that is design doing real work.</p>`,
    mainImageUrl: "/logo.png",
    authorName: "Brandroad Editorial",
    publishedAt: "2026-02-10T09:00:00.000Z",
  },
  {
    id: "pst_3",
    slug: "the-design-evangelist-approach-to-saas",
    title: "The Design Evangelist Approach to SaaS Architecture",
    metaDescription:
      "How to align design systems, product logic, and growth UX patterns so your SaaS scales without interface chaos.",
    bodyContent: `<h2>Architecture Is UX in Slow Motion</h2><p>Most SaaS teams separate architecture decisions from UX decisions. That is a mistake. Bad architecture eventually leaks into bad UX: inconsistent behavior, weird permissions, and feature rules users cannot predict.</p><p>Design Evangelists treat architecture and interface as one system. If a flow cannot be explained clearly, it usually means the underlying model is also messy.</p><h2>Our Operating Principles</h2><h3>Contract-First Components</h3><p>Buttons, inputs, and data tables are not just visuals. They are contracts. Consistent behavior builds trust at scale.</p><h3>State Discipline</h3><p>Every product state should have an intentional design response: loading, empty, partial success, failure, and recovery. If these states are random, user trust is random too.</p><h3>Progressive Complexity</h3><p>Begin with the default path for most users. Reveal advanced controls contextually. Do not dump enterprise complexity on day one.</p><h2>Implementation Pattern</h2><ul><li>Map domain objects and permissions before polishing UI</li><li>Prototype critical flows with realistic edge cases</li><li>Define copy tone and error language early</li><li>Ship with analytics hooks so design decisions are measurable</li></ul><p>The best SaaS experiences feel obvious, not because they are trivial, but because they are architected with ruthless intent.</p>`,
    mainImageUrl: "/logo.png",
    authorName: "Lampson",
    publishedAt: "2026-01-12T14:00:00.000Z",
  },
  {
    id: "pst_4",
    slug: "from-chaotic-brief-to-conversion-machine",
    title: "From Chaotic Brief to Conversion Machine: Inside a Brandroad Sprint",
    metaDescription:
      "A practical walkthrough of how we turn messy founder briefs into clear product narratives, stronger UX, and measurable conversion wins.",
    bodyContent: `<h2>Week 0: The Brief That Arrives in Voice Notes</h2><p>Every agency says they love "messy problems." We do too, but let us be honest: messy briefs are chaos with good intentions. One founder says "premium", another says "friendly", someone else says "like Apple but louder."</p><p>Our first job is translation. We turn opinions into constraints, and constraints into an execution map.</p><h2>Week 1: Problem Framing</h2><p>We run a rapid discovery sprint with three outputs: user friction map, conversion bottlenecks, and trust gaps. This is where bravado meets reality. If your page says "simple", but your sign-up has eleven fields, the data will snitch.</p><h2>Week 2: Narrative + Interface</h2><p>We draft the product story and interface architecture together. Copy and design are co-authors, not neighbors. Your H1 sets the promise. Your layout proves it. Your CTA closes it.</p><h2>Week 3: Production Polish</h2><ul><li>Performance budget for images and scripts</li><li>Accessibility pass for contrast, labels, and keyboard flow</li><li>Edge-state QA so users are never stranded</li><li>Analytics events wired for high-intent actions</li></ul><h2>Week 4: Launch With Teeth</h2><p>Launch is not the finish line. It is the first honest test. We monitor behavior, patch friction quickly, and optimize for outcomes, not applause.</p><p>By the end, teams stop asking, "Does this look good?" and start asking, "Does this move revenue and reduce confusion?" That is when design graduates from decoration to strategy.</p>`,
    mainImageUrl: "/logo.png",
    authorName: "Brandroad Editorial",
    publishedAt: "2025-12-05T10:30:00.000Z",
  },
];

export function getProjectBySlug(slug: string): ProjectRecord | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getPostBySlug(slug: string): PostRecord | undefined {
  return posts.find((post) => post.slug === slug);
}
