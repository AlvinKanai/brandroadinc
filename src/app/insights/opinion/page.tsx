import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/content";

export const metadata: Metadata = {
    title: "Opinion | Brandroad Insights",
    description: "Expert perspectives on design strategy, product architecture, and growth UX.",
};

export default function InsightsOpinionPage() {
    const opinionPosts = posts.filter((post) =>
        !post.slug.includes("playbook") && !post.slug.includes("conversion"),
    );

    return (
        <section className="section-space">
            <div className="site-shell space-y-8">
                <header className="space-y-3">
                    <p className="eyebrow">Insights / Opinion</p>
                    <h1 className="text-5xl sm:text-7xl">Editorial Perspectives With Product Depth</h1>
                </header>

                <div className="grid gap-4 md:grid-cols-2">
                    {opinionPosts.map((post) => (
                        <article key={post.id} className="card p-6 sm:p-8">
                            <h2 className="text-3xl leading-tight">{post.title}</h2>
                            <p className="mt-3 text-sm leading-relaxed text-(--color-ink)/80">{post.metaDescription}</p>
                            <Link
                                href={`/insights/${post.slug}`}
                                className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple"
                            >
                                Read Opinion
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
