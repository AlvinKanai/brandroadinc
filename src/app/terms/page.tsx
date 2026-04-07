import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Brandroad Inc",
  description: "Terms and conditions for Brandroad Inc website.",
};

export default function TermsPage() {
  return (
    <section className="section-space">
      <article className="site-shell max-w-3xl space-y-5">
        <p className="eyebrow">Terms & Conditions</p>
        <h1 className="text-4xl sm:text-6xl">Terms & Conditions</h1>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-(--color-ink)/60">Last Updated: 04.07.2026</p>

        <div className="card space-y-4 p-6 sm:p-8 text-sm leading-relaxed text-(--color-ink)/82">
          <p>
            By using this website, you agree to these terms and conditions. If you do not agree, please discontinue use of this site.
          </p>
          <p>
            All website content is provided for informational purposes. While Brandroad Inc strives for accuracy, we do not guarantee that all information is complete, current, or free from errors.
          </p>
          <p>
            Any project engagement, quotation, and deliverable terms are governed separately by signed service agreements.
          </p>
          <p>
            Unauthorized reproduction of this website's original content, branding, or assets is prohibited without prior written consent.
          </p>
          <p>
            We may update these terms at any time. Continued use of the website after updates implies acceptance of revised terms.
          </p>
        </div>
      </article>
    </section>
  );
}