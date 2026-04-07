import type { PostRecord, ProjectRecord } from "@/lib/content";

/**
 * Builds homepage organization schema for improved brand authority in search.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Brandroad Inc",
    url: "https://brandroadinc.com",
    description: "Startup branding agency Nairobi with deep product design and UX engineering capabilities.",
    areaServed: "Global",
    sameAs: [],
    knowsAbout: ["startup branding agency Nairobi", "SaaS UX design", "product design systems"],
  };
}

/**
 * Builds project schema for rich search understanding of portfolio entries.
 */
export function portfolioProjectSchema(project: ProjectRecord) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.title,
    image: project.coverImageUrl,
    dateCreated: project.createdAt,
    author: {
      "@type": "Organization",
      name: "Brandroad Inc",
    },
    about: project.headings,
    review: {
      "@type": "Review",
      reviewBody: project.testimonialQuote,
      author: {
        "@type": "Person",
        name: project.testimonialAuthor,
      },
    },
  };
}

/**
 * Builds blog article schema to boost semantic indexing for insight pages.
 */
export function articleSchema(post: PostRecord) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: post.mainImageUrl,
    author: {
      "@type": "Person",
      name: post.authorName,
    },
    datePublished: post.publishedAt,
    publisher: {
      "@type": "Organization",
      name: "Brandroad Inc",
    },
  };
}
