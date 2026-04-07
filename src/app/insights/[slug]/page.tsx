import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articleSchema } from "@/lib/seo";
import { getPostBySlug, posts } from "@/lib/content";

export function generateStaticParams() {
    return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const post = getPostBySlug(params.slug);

    if (!post) {
        return {
            title: "Insight Not Found | Brandroad Inc",
            description: "The requested insight does not exist.",
        };
    }

    return {
        title: `${post.title} | Brandroad Insights`,
        description: post.metaDescription,
        openGraph: {
            title: post.title,
            description: post.metaDescription,
            images: [{ url: post.mainImageUrl, width: 1200, height: 630 }],
            type: "article",
        },
    };
}

export default function InsightDetailPage({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    const schema = articleSchema(post);

    return (
        <section className="section-space">
            <Script id={`article-jsonld-${post.id}`} type="application/ld+json" strategy="afterInteractive">
                {JSON.stringify(schema)}
            </Script>
            <article className="site-shell max-w-4xl space-y-8">
                <Link href="/insights" className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
                    Back to Insights
                </Link>
                <header className="space-y-3">
                    <h1 className="text-5xl leading-[0.93] sm:text-7xl">{post.title}</h1>
                    <p className="text-sm text-slate-600">By {post.authorName}</p>
                </header>

                <section className="card prose-brand p-6 sm:p-8" dangerouslySetInnerHTML={{ __html: post.bodyContent }} />
            </article>
        </section>
    );
}
