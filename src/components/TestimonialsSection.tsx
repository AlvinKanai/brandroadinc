import { testimonials } from "@/lib/siteData";

export default function TestimonialsSection() {
  return (
    <section className="section-space" id="testimonials">
      <div className="site-shell space-y-8">
        <p className="eyebrow">The Wall of Love</p>
        <h2 className="max-w-3xl text-3xl leading-tight sm:text-4xl">What teams say after launching with Brandroad Inc</h2>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <article key={`${item.name}-${item.company}`} className="card p-5 sm:p-6">
              <p className="text-sm leading-relaxed text-(--color-ink)/85">"{item.quote}"</p>
              <div className="mt-5 border-t border-(--color-border) pt-4">
                <p className="text-sm font-bold uppercase tracking-[0.11em]">{item.name}</p>
                <p className="text-xs text-(--color-ink)/70">{item.company}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}