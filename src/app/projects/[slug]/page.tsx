import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/content";
import { portfolioProjectSchema } from "@/lib/seo";

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const project = getProjectBySlug(params.slug);

    if (!project) {
        return {
            title: "Project Not Found | Brandroad Inc",
            description: "The requested project does not exist.",
        };
    }

    return {
        title: `${project.title} | Brandroad Inc Projects`,
        description: project.theProblem,
        openGraph: {
            title: project.title,
            description: project.theSolution,
            images: [{ url: project.coverImageUrl, width: 1200, height: 630 }],
            type: "article",
        },
    };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
    const project = getProjectBySlug(params.slug);

    if (!project) {
        notFound();
    }

    const schema = portfolioProjectSchema(project);

    return (
        <section className="section-space">
            <Script id={`project-jsonld-${project.id}`} type="application/ld+json" strategy="afterInteractive">
                {JSON.stringify(schema)}
            </Script>
            <article className="site-shell space-y-8">
                <Link href="/projects" className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
                    Back to Projects
                </Link>
                <header className="space-y-4">
                    <p className="eyebrow">{project.clientName}</p>
                    <h1 className="max-w-5xl text-5xl leading-[0.93] sm:text-7xl">{project.title}</h1>
                    <p className="text-sm text-(--color-ink)/70">{project.headings.join(" • ")}</p>
                </header>

                <div className="grid gap-4 lg:grid-cols-3">
                    <section className="card p-6">
                        <h2 className="text-2xl">The Problem</h2>
                        <p className="mt-3 text-sm leading-relaxed text-(--color-ink)/80">{project.theProblem}</p>
                    </section>
                    <section className="card p-6">
                        <h2 className="text-2xl">The Solution</h2>
                        <p className="mt-3 text-sm leading-relaxed text-(--color-ink)/80">{project.theSolution}</p>
                    </section>
                    <section className="card p-6">
                        <h2 className="text-2xl">Testimonial</h2>
                        <p className="mt-3 text-sm leading-relaxed text-(--color-ink)/80">&quot;{project.testimonialQuote}&quot;</p>
                        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-brand-purple">
                            {project.testimonialAuthor} • {project.testimonialRole}
                        </p>
                    </section>
                </div>

                <section className="card prose-brand p-6 sm:p-8" dangerouslySetInnerHTML={{ __html: project.bodyContent }} />
            </article>
        </section>
    );
}
