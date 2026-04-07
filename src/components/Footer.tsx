import Link from "next/link";
import { LinkButton } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const pages = [
  { label: "Our Work", href: "/projects" },
  { label: "The Menu", href: "/services" },
  { label: "The Gatekeeper", href: "/gatekeeper" },
  { label: "Insights", href: "/insights" },
];

const utilityPages = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-(--color-border) bg-background">
      <div className="site-shell py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            <p className="eyebrow">REACH OUT TO US</p>
            <h2 className="max-w-4xl text-5xl leading-[0.95] sm:text-7xl">LET&apos;S GET TO WORK.</h2>
            <p className="max-w-xl text-base leading-relaxed text-(--color-ink)/80 sm:text-lg">
              Stop procrastinating. Drop your brief, let&apos;s fix that design mess, and launch your product. &quot;Iko Fiti&quot; ndio Amen yetu. 🚀
            </p>
            <form className="mt-6 flex max-w-xl flex-col gap-3 sm:flex-row" aria-label="Email capture form">
              <Input
                label="Email"
                hideLabel
                name="email"
                type="email"
                placeholder="you@startup.com"
                className="sm:h-12"
              />
              <button
                type="submit"
                className="h-11 rounded-full bg-brand-orange px-6 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-[0_10px_25px_rgba(249,115,22,0.25)] hover:bg-[#EA580C] sm:mt-8 sm:h-12"
                aria-label="Submit email"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em]">Explore</p>
              <ul className="space-y-2 text-sm">
                {pages.map((item) => (
                  <li key={item.href}>
                    <Link className="hover:text-brand-purple" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em]">Utility</p>
              <ul className="space-y-2 text-sm">
                {utilityPages.map((item) => (
                  <li key={item.href}>
                    <Link className="hover:text-brand-purple" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-(--color-border)">
        <div className="site-shell flex flex-col gap-3 py-4 text-xs text-(--color-ink)/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Brandroad Inc. All rights reserved.</p>
          <p>Design Evangelists. Nairobi grit. Silicon precision.</p>
        </div>
      </div>
    </footer>
  );
}