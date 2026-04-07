import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/content";

export function generateStaticParams() {
    return services.map((service) => ({ slug: service.slug }));
}

type ServiceRouteParams = { slug: string };

export async function generateMetadata({ params }: { params: ServiceRouteParams | Promise<ServiceRouteParams> }): Promise<Metadata> {
    const { slug } = await Promise.resolve(params);
    const service = getServiceBySlug(slug);

    if (!service) {
        return {
            title: "Service Not Found | Brandroad Inc",
            description: "The requested service page is not available.",
        };
    }

    return {
        title: `${service.title} | Brandroad Inc`,
        description: service.summary,
    };
}

export default async function ServiceDetailPage({ params }: { params: ServiceRouteParams | Promise<ServiceRouteParams> }) {
    const { slug } = await Promise.resolve(params);
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    return (
        <section className="section-space">
            <article className="site-shell space-y-8">
                <Link href="/services" className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
                    Back to Services
                </Link>

                <header className="space-y-4">
                    <p className="eyebrow">{service.shortTitle}</p>
                    <h1 className="max-w-5xl text-5xl leading-[0.93] sm:text-7xl">{service.title}</h1>
                    <p className="max-w-3xl text-sm leading-relaxed text-(--color-ink)/80 sm:text-base">{service.positioning}</p>
                </header>

                <div className="grid gap-4 lg:grid-cols-3">
                    <section className="card p-6">
                        <h2 className="text-2xl">Service Summary</h2>
                        <p className="mt-3 text-sm leading-relaxed text-(--color-ink)/80">{service.summary}</p>
                    </section>
                    <section className="card p-6">
                        <h2 className="text-2xl">Typical Deliverables</h2>
                        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-(--color-ink)/80">
                            {service.deliverables.map((item) => (
                                <li key={item}>- {item}</li>
                            ))}
                        </ul>
                    </section>
                    <section className="card p-6">
                        <h2 className="text-2xl">Expected Outcomes</h2>
                        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-(--color-ink)/80">
                            {service.outcomes.map((item) => (
                                <li key={item}>- {item}</li>
                            ))}
                        </ul>
                    </section>
                </div>

                <section className="card p-6 sm:p-8">
                    <h2 className="text-3xl">Delivery Process</h2>
                    <ol className="mt-4 grid gap-3 sm:grid-cols-2">
                        {service.process.map((step, index) => (
                            <li key={step} className="rounded-xl border border-(--color-border) bg-(--color-muted-surface) p-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-orange">Step {index + 1}</p>
                                <p className="mt-2 text-sm leading-relaxed text-(--color-ink)/80">{step}</p>
                            </li>
                        ))}
                    </ol>
                    <Link href="/contact" className="accent-button mt-6">
                        Start a Project
                    </Link>
                </section>
            </article>
        </section>
    );
}
