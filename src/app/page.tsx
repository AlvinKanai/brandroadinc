import Link from "next/link";
import Script from "next/script";
import HomeHero from "@/components/HomeHero";
import { posts, projects } from "@/lib/content";
import { organizationSchema } from "@/lib/seo";

const serviceCards = [
    {
        title: "UI/UX",
        subtitle: "Bad UI is a liability.",
        text: "We build sleek, scalable mobile apps and complex SaaS platforms that users actually want to navigate.",
        className: "md:col-span-2 md:row-span-2",
    },
    {
        title: "Branding",
        subtitle: "Ditch the templates.",
        text: "Your startup needs an identity that commands respect from Day 1. We build visual identities that make you look like an industry heavyweight.",
        className: "md:col-span-1",
    },
    {
        title: "Websites",
        subtitle: "Bounce Rate is a Sin.",
        text: "Stop sending traffic to a landing page from 2010. We design lightning-fast digital storefronts and landing pages engineered to make visitors click Buy Now.",
        className: "md:col-span-1",
    },
    {
        title: "Vibarua / Odd Jobs",
        subtitle: "Everything else.",
        text: "Investor pitch decks that secure the bag, killer merch, event posters, and corporate presentations. Send the brief. We handle the daily grind so you can focus on scaling.",
        className: "md:col-span-2",
    },
];

export default function Home() {
    const schema = organizationSchema();

    return (
        <>
            <Script id="org-jsonld" type="application/ld+json" strategy="afterInteractive">
                {JSON.stringify(schema)}
            </Script>
            <HomeHero />

            <section className="section-space" id="the-menu">
                <div className="site-shell space-y-8">
                    <header className="space-y-3">
                        <p className="eyebrow">The Menu</p>
                        <h2 className="text-4xl sm:text-6xl">The Gospel of Good Design.</h2>
                    </header>
                    <div className="grid gap-4 md:grid-cols-3">
                        {serviceCards.map((service) => (
                            <article key={service.title} className={`card p-6 sm:p-8 ${service.className}`}>
                                <h3 className="text-2xl sm:text-3xl">{service.title}</h3>
                                <p className="mt-4 text-base font-semibold text-brand-purple">{service.subtitle}</p>
                                <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">{service.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-space" id="the-gatekeeper">
                <div className="site-shell grid gap-6 lg:grid-cols-2">
                    <article className="card p-6 sm:p-8">
                        <p className="eyebrow">The Gatekeeper</p>
                        <h2 className="mt-5 text-4xl leading-[0.95] sm:text-6xl">
                            MEET THE GUY WHO REJECTS YOUR BAD UI BEFORE YOUR USERS DO.
                        </h2>
                    </article>
                    <article className="card p-6 sm:p-8">
                        <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                            Clean, functional design is our religion, and Lampson runs the pulpit. Absolutely nothing leaves
                            Brandroad Inc. without his stamp of approval. Kama design yako inatesa users or your logo inakaa template
                            ya make it pop, anaigonga reject on the spot. We fix the chaos so your users do not have to suffer.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section-space" id="our-work">
                <div className="site-shell space-y-7">
                    <header className="flex items-end justify-between gap-3">
                        <div>
                            <p className="eyebrow">Project Showcase</p>
                            <h2 className="mt-4 text-4xl sm:text-6xl">Recent Case Studies</h2>
                        </div>
                        <Link href="/projects" className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
                            View All
                        </Link>
                    </header>
                    <div className="grid gap-4 md:grid-cols-3">
                        {projects.map((project, index) => (
                            <article key={project.id} className={`card p-6 ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">{project.clientName}</p>
                                <h3 className="mt-3 text-2xl leading-tight">{project.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-700">{project.theProblem}</p>
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple"
                                >
                                    Open Case Study
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-space" id="insights">
                <div className="site-shell space-y-7">
                    <header className="flex items-end justify-between gap-3">
                        <div>
                            <p className="eyebrow">Insights</p>
                            <h2 className="mt-4 text-4xl sm:text-6xl">Field Notes For Builders</h2>
                        </div>
                        <Link href="/insights" className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
                            View All
                        </Link>
                    </header>
                    <div className="grid gap-4 md:grid-cols-3">
                        {posts.map((post) => (
                            <article key={post.id} className="card p-6">
                                <h3 className="text-2xl leading-tight">{post.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-700">{post.metaDescription}</p>
                                <Link
                                    href={`/insights/${post.slug}`}
                                    className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple"
                                >
                                    Read Insight
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
