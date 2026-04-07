import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "The Gatekeeper | Brandroad Inc",
    description:
        "Meet Lampson, the creative director behind Brandroad Inc's quality standards and product-first design culture.",
};

export default function GatekeeperPage() {
    return (
        <section className="section-space">
            <div className="site-shell grid gap-6 lg:grid-cols-[1fr_1.1fr]">
                <article className="card p-6 sm:p-8">
                    <p className="eyebrow">The Gatekeeper</p>
                    <h1 className="mt-4 text-5xl leading-[0.93] sm:text-7xl">
                        The Person Who Protects Your Product From Bad Design Decisions
                    </h1>
                </article>

                <article className="card p-6 sm:p-8">
                    <p className="text-sm leading-relaxed text-(--color-ink)/80 sm:text-base">
                        Lampson leads creative direction at Brandroad Inc with one non-negotiable principle: design must perform.
                        Every interface, narrative, and visual decision is reviewed against clarity, usability, and conversion
                        impact. If it adds confusion, it does not ship.
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-(--color-ink)/80 sm:text-base">
                        Our process combines strategic product thinking with the speed of a startup studio. The tone may be
                        playful, but the standards are serious. Kama design yako inatesa users, anaigonga reject on the spot.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link href="/services" className="accent-button">
                            See Services
                        </Link>
                        <Link
                            href="/projects"
                            className="inline-flex items-center rounded-full border border-brand-purple/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-purple"
                        >
                            View Case Studies
                        </Link>
                    </div>
                </article>
            </div>
        </section>
    );
}
