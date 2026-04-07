import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Brandroad Inc",
  description: "Privacy policy for Brandroad Inc website.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section-space">
      <article className="site-shell max-w-3xl space-y-5">
        <p className="eyebrow">Privacy Policy</p>
        <h1 className="text-4xl sm:text-6xl">Privacy Policy</h1>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-(--color-ink)/60">Last Updated: 04.07.2026</p>

        <div className="card space-y-4 p-6 sm:p-8 text-sm leading-relaxed text-(--color-ink)/82">
          <p>
            Brandroad Inc ("we", "our", or "us") respects your privacy and is committed to protecting personal information collected through this website.
          </p>
          <p>
            We may collect data you submit voluntarily, including your name, email address, business details, and project inquiries. We also collect limited usage data such as browser type, pages visited, and session timing to improve site performance.
          </p>
          <p>
            We use this information to respond to inquiries, improve user experience, communicate project updates, and comply with legal obligations.
          </p>
          <p>
            We do not sell your personal information. We may share limited data with trusted providers that support hosting, analytics, and communication tools.
          </p>
          <p>
            You may request access, correction, or deletion of your data by contacting hello@brandroadinc.com. We update this policy when needed and recommend reviewing it periodically.
          </p>
        </div>
      </article>
    </section>
  );
}