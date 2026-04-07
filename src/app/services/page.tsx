import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/content";

export const metadata: Metadata = {
    title: "Services | Brandroad Inc",
    description:
        "Explore Brandroad Inc services across UI/UX, branding, websites, and strategic creative support.",
};

export default function ServicesPage() {
    return (
        <section className="section-space">
            <div className="site-shell space-y-8">
                <header className="space-y-3">
                    <p className="eyebrow">Services</p>
                    <h1 className="max-w-5xl text-5xl leading-[0.93] sm:text-7xl">
                        Product Design Services Built for Teams That Need Results, Not Noise
                    </h1>
                    <p className="max-w-3xl text-sm leading-relaxed text-(--color-ink)/78 sm:text-base">
                        We combine strategic thinking, systems design, and execution speed to help ambitious companies ship
                        better products and stronger brand experiences.
                    </p>
                </header>

                <div className="grid gap-4 md:grid-cols-2">
                    {services.map((service) => (
                        <article key={service.slug} className="card p-6 sm:p-8">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">{service.shortTitle}</p>
                            <h2 className="mt-3 text-3xl leading-tight">{service.title}</h2>
                            <p className="mt-3 text-sm leading-relaxed text-(--color-ink)/80">{service.summary}</p>
                            <ul className="mt-5 space-y-2 text-sm text-(--color-ink)/75">
                                {service.deliverables.slice(0, 3).map((item) => (
                                    <li key={item}>- {item}</li>
                                ))}
                            </ul>
                            <Link
                                href={`/services/${service.slug}`}
                                className="mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple"
                            >
                                Explore Service
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
