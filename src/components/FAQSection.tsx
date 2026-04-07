import { faqs } from "@/lib/siteData";

export default function FAQSection({
  title = "Questions? Let's Clear Things Up",
}: {
  title?: string;
}) {
  return (
    <section className="section-space" id="faq">
      <div className="site-shell space-y-7">
        <p className="eyebrow">FAQ</p>
        <h2 className="max-w-2xl text-3xl leading-tight sm:text-4xl">{title}</h2>
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="card group px-5 py-4 sm:px-6">
              <summary className="cursor-pointer list-none pr-8 text-base font-semibold leading-snug marker:content-none">
                {faq.question}
                <span className="float-right text-lg transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pt-4 text-sm leading-relaxed text-(--color-ink)/75">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}