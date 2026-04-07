import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import CaseStudyTabs from "@/components/CaseStudyTabs";
import { getProjectBySlug, projects } from "@/lib/content";
import { portfolioProjectSchema } from "@/lib/seo";

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

type ProjectRouteParams = { slug: string };

export async function generateMetadata({ params }: { params: ProjectRouteParams | Promise<ProjectRouteParams> }): Promise<Metadata> {
    const { slug } = await Promise.resolve(params);
    const project = getProjectBySlug(slug);

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

export default async function ProjectDetailPage({ params }: { params: ProjectRouteParams | Promise<ProjectRouteParams> }) {
    const { slug } = await Promise.resolve(params);
    const project = getProjectBySlug(slug);

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
                    {project.summary ? (
                        <p className="max-w-3xl text-sm leading-relaxed text-(--color-ink)/80 sm:text-base">{project.summary}</p>
                    ) : null}
                </header>

                <div className="card overflow-hidden">
                    <div className="relative h-72 w-full border-b border-(--color-border) bg-(--color-muted-surface)">
                        <Image
                            src={project.coverImageUrl}
                            alt={`${project.title} cover placeholder`}
                            fill
                            priority
                            className="object-contain p-8"
                            sizes="(max-width: 1200px) 100vw, 1200px"
                        />
                    </div>
                    <div className="grid gap-4 p-6 md:grid-cols-3">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-orange">Timeline</p>
                            <p className="mt-2 text-sm text-(--color-ink)/80">{project.timeline ?? "8-12 weeks"}</p>
                        </div>
                        <div className="md:col-span-2">
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-orange">Scope</p>
                            <p className="mt-2 text-sm text-(--color-ink)/80">
                                {(project.scope ?? project.headings).join(" • ")}
                            </p>
                        </div>
                    </div>
                </div>

                <CaseStudyTabs
                    problem={project.theProblem}
                    solution={project.theSolution}
                    bodyContent={project.bodyContent}
                    results={
                        project.results ?? [
                            { label: "Activation", value: "+20%" },
                            { label: "Time on Task", value: "-18%" },
                            { label: "Conversion", value: "+14%" },
                        ]
                    }
                    gallery={
                        project.gallery ?? [
                            { title: "Interface Concept", caption: "Placeholder image for the final solution direction.", imageUrl: "/logo.png" },
                            { title: "User Journey", caption: "Placeholder image for user flow visualization.", imageUrl: "/logo.png" },
                            { title: "Implementation Preview", caption: "Placeholder image for handoff-ready screens.", imageUrl: "/logo.png" },
                        ]
                    }
                />

                <section className="card p-6 sm:p-8">
                    <h2 className="text-2xl">Client Perspective</h2>
                    <p className="mt-3 text-sm leading-relaxed text-(--color-ink)/80">&quot;{project.testimonialQuote}&quot;</p>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-brand-purple">
                        {project.testimonialAuthor} • {project.testimonialRole}
                    </p>
                </section>
            </article>
        </section>
    );
}
