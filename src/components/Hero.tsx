import Link from "next/link";

const Hero = () => {
  return (
    <section className="section-space pb-8" id="hero">
      <div className="site-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-6">
          <p className="eyebrow">Product Design Agency</p>
          <h1 className="max-w-3xl text-4xl leading-[1.02] sm:text-6xl lg:text-7xl">
            Brandroad Inc builds digital journeys that convert and scale.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-(--color-ink)/78 sm:text-lg">
            From research to launch-ready design systems, we create websites and product experiences that solve real business problems.
          </p>
          <Link href="/contact" className="accent-button">
            Start your project
          </Link>
        </div>

        <div className="card relative overflow-hidden p-6 sm:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,#f6871f40,transparent_60%)]" />
          <div className="relative space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--color-ink)/60">Trusted by 20+ brands worldwide</p>
            <div className="grid grid-cols-2 gap-3 text-center text-sm font-semibold">
              <div className="rounded-xl border border-(--color-border) bg-white/85 p-4">SaaS</div>
              <div className="rounded-xl border border-(--color-border) bg-white/85 p-4">E-commerce</div>
              <div className="rounded-xl border border-(--color-border) bg-white/85 p-4">Hospitality</div>
              <div className="rounded-xl border border-(--color-border) bg-white/85 p-4">B2B</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;