import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/lib/siteData";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return { title: "Post Not Found | Brandroad Inc" };
  }

  return {
    title: `${post.title} | Brandroad Inc`,
    description: post.excerpt,
  };
}

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="section-space">
      <article className="site-shell max-w-3xl space-y-6">
        <Link href="/blog" className="text-xs font-bold uppercase tracking-[0.16em] text-(--color-accent)">
          Back to blog
        </Link>
        <p className="eyebrow">{post.category}</p>
        <h1 className="text-4xl leading-tight sm:text-6xl">{post.title}</h1>
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-(--color-ink)/58">{post.date}</p>

        <div className="card space-y-5 p-6 sm:p-8">
          {post.content.map((paragraph, index) => (
            <p key={paragraph} className="text-sm leading-relaxed text-(--color-ink)/82 sm:text-base">
              {index === 0 ? <strong>{paragraph}</strong> : paragraph}
            </p>
          ))}
        </div>
      </article>
    </section>
  );
}