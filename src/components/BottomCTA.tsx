import Link from "next/link";

export default function BottomCTA({
  title,
  description,
  actionLabel = "Start your project",
  actionHref = "/contact",
}: {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}) {
  return (
    <section className="section-space pt-0">
      <div className="site-shell">
        <div className="card relative overflow-hidden px-6 py-10 sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-brand-purple/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-brand-orange/20 blur-2xl" />

          <div className="relative max-w-2xl space-y-4">
            <h2 className="text-3xl leading-tight sm:text-4xl">{title}</h2>
            <p className="text-sm leading-relaxed text-(--color-ink)/78 sm:text-base">{description}</p>
            <Link href={actionHref} className="accent-button mt-2">
              {actionLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}