import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
    title: "Our Work | Brandroad Inc",
    description: "Case studies from startup and SaaS design projects engineered for conversion and product clarity.",
};

export default function ProjectsPage() {
    return (
        <section className="section-space">
            <div className="site-shell space-y-8">
                <header className="space-y-3">
                    <p className="eyebrow">Our Work</p>
                    <h1 className="text-5xl sm:text-7xl">Case Studies That Actually Move Metrics</h1>
                </header>

                <div className="grid gap-4 md:grid-cols-2">
                    {projects.map((project) => (
                        <article key={project.id} className="card overflow-hidden">
                            <div className="relative h-56 w-full border-b border-(--color-border) bg-(--color-muted-surface)">
                                <Image
                                    src={project.coverImageUrl}
                                    alt={`${project.title} preview placeholder`}
                                    fill
                                    className="object-contain p-7"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div className="p-6 sm:p-8">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">{project.clientName}</p>
                                <h2 className="mt-4 text-3xl leading-tight">{project.title}</h2>
                                <p className="mt-3 text-sm leading-relaxed text-(--color-ink)/80">{project.summary ?? project.theProblem}</p>
                            </div>
                            <Link
                                href={`/projects/${project.slug}`}
                                className="mx-6 mb-8 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple sm:mx-8"
                            >
                                Open Full Case Study
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
