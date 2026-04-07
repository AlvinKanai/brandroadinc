import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
    return (
        <section className="section-space">
            <div className="site-shell text-center">
                <p className="eyebrow">404</p>
                <h1 className="mt-5 text-5xl sm:text-7xl">This page missed the design review.</h1>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">
                    The route you requested does not exist or was moved. Let us reroute you to live pages.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <LinkButton href="/" ariaLabel="Go to homepage">
                        Homepage
                    </LinkButton>
                    <LinkButton href="/projects" variant="outline" ariaLabel="Go to projects">
                        Our Work
                    </LinkButton>
                </div>
            </div>
        </section>
    );
}
