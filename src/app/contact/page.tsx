import type { Metadata } from "next";
import BottomCTA from "@/components/BottomCTA";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata: Metadata = {
  title: "Contact | Brandroad Inc",
  description: "Get in touch with Brandroad Inc to start your next digital project.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section-space pb-8">
        <div className="site-shell grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-5">
            <p className="eyebrow">Contact</p>
            <h1 className="text-4xl leading-tight sm:text-6xl">Experience Better UX Design</h1>
            <p className="max-w-xl text-sm leading-relaxed text-(--color-ink)/78 sm:text-base">
              Website redesign? Product UX strategy? Brand interface system? We can help. Share your goals and we will follow up with a practical plan.
            </p>
            <div className="card grid gap-5 p-5 sm:p-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-(--color-ink)/60">Business</p>
                <p className="mt-2 text-sm">hello@brandroadinc.com</p>
                <p className="text-sm">+1 262 672 722</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-(--color-ink)/60">Office</p>
                <p className="mt-2 text-sm">251 Mercer St, New York, NY 10012, USA</p>
              </div>
            </div>
          </div>

          <form className="card grid gap-4 p-5 sm:p-6" action="#">
            <label className="grid gap-1 text-sm">
              Name
              <input className="rounded-xl border border-(--color-border) bg-(--color-paper) px-3 py-2 outline-none focus:border-(--color-accent)" type="text" name="name" />
            </label>
            <label className="grid gap-1 text-sm">
              Email
              <input className="rounded-xl border border-(--color-border) bg-(--color-paper) px-3 py-2 outline-none focus:border-(--color-accent)" type="email" name="email" />
            </label>
            <label className="grid gap-1 text-sm">
              Where do you know us from?
              <input className="rounded-xl border border-(--color-border) bg-(--color-paper) px-3 py-2 outline-none focus:border-(--color-accent)" type="text" name="source" />
            </label>
            <label className="grid gap-1 text-sm">
              Message
              <textarea className="min-h-36 rounded-xl border border-(--color-border) bg-(--color-paper) px-3 py-2 outline-none focus:border-(--color-accent)" name="message" />
            </label>
            <button className="accent-button w-fit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>

      <TestimonialsSection />
      <FAQSection />
      <BottomCTA
        title="See Why Clients Love Working With Us"
        description="Explore our case studies and discover how strategic UX and conversion-first design helped teams grow faster."
        actionLabel="See all projects"
        actionHref="/projects"
      />
    </>
  );
}