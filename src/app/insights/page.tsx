import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/content";

export const metadata: Metadata = {
    title: "Insights | Brandroad Inc",
    description: "Product design, branding, and growth UX articles from Brandroad Inc.",
};

export default function InsightsPage() {
    return (
        <section className="section-space">
            <div className="site-shell space-y-8">
                <header className="space-y-3">
                    <p className="eyebrow">Insights</p>
                    <h1 className="text-5xl sm:text-7xl">Sharp Notes For Product Teams</h1>
                    <div className="flex flex-wrap gap-2 pt-2">
                        <Link href="/insights/playbooks" className="rounded-full border border-(--color-border) px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-purple">
                            Playbooks
                        </Link>
                        <Link href="/insights/opinion" className="rounded-full border border-(--color-border) px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-purple">
                            Opinion
                        </Link>
                    </div>
                </header>

                <div className="grid gap-4 md:grid-cols-2">
                    {posts.map((post) => (
                        <article key={post.id} className="card p-6 sm:p-8">
                            <h2 className="text-3xl leading-tight">{post.title}</h2>
                            <p className="mt-3 text-sm leading-relaxed text-(--color-ink)/80">{post.metaDescription}</p>
                            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
                                {new Date(post.publishedAt).toLocaleDateString("en-KE", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                })}
                            </p>
                            <Link
                                href={`/insights/${post.slug}`}
                                className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple"
                            >
                                Read Article
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
