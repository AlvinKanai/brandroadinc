import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/content";

export const metadata: Metadata = {
    title: "Playbooks | Brandroad Insights",
    description: "Tactical frameworks for product design, UX systems, and conversion-led execution.",
};

export default function InsightsPlaybooksPage() {
    const playbookPosts = posts.filter((post) =>
        post.slug.includes("playbook") || post.slug.includes("saas") || post.slug.includes("conversion"),
    );

    return (
        <section className="section-space">
            <div className="site-shell space-y-8">
                <header className="space-y-3">
                    <p className="eyebrow">Insights / Playbooks</p>
                    <h1 className="text-5xl sm:text-7xl">Execution Playbooks for Product Teams</h1>
                </header>

                <div className="grid gap-4 md:grid-cols-2">
                    {playbookPosts.map((post) => (
                        <article key={post.id} className="card p-6 sm:p-8">
                            <h2 className="text-3xl leading-tight">{post.title}</h2>
                            <p className="mt-3 text-sm leading-relaxed text-(--color-ink)/80">{post.metaDescription}</p>
                            <Link
                                href={`/insights/${post.slug}`}
                                className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple"
                            >
                                Read Playbook
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
