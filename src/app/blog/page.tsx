import type { Metadata } from "next";
import Link from "next/link";
import BottomCTA from "@/components/BottomCTA";
import { posts } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Blog | Brandroad Inc",
  description: "Practical UX and digital design insights from Brandroad Inc.",
};

export default function BlogPage() {
  return (
    <>
      <section className="section-space pb-8">
        <div className="site-shell space-y-5">
          <p className="eyebrow">The Blog</p>
          <h1 className="max-w-4xl text-4xl leading-tight sm:text-6xl">
            Practical ideas from real projects, for teams that want better digital outcomes.
          </h1>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-shell grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="card p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-(--color-ink)/56">{post.category}</p>
              <h2 className="mt-3 text-2xl leading-tight">{post.title}</h2>
              <p className="mt-2 text-xs uppercase tracking-[0.13em] text-(--color-ink)/58">{post.date}</p>
              <p className="mt-3 text-sm leading-relaxed text-(--color-ink)/78">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex text-sm font-bold uppercase tracking-[0.12em] text-(--color-accent)">
                Read article
              </Link>
            </article>
          ))}
        </div>
      </section>

      <BottomCTA
        title="Let's Build Something Great Together"
        description="Need a partner for your next product redesign? Tell us what you are building and we will map the right UX strategy."
      />
    </>
  );
}