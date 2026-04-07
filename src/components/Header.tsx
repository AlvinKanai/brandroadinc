"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LinkButton } from "@/components/ui/Button";
import { ChevronDown, Menu, X } from "lucide-react";

const navGroups = [
  {
    label: "Our Work",
    href: "/projects",
    items: [
      { label: "All Case Studies", href: "/projects" },
      { label: "Paywave SaaS Redesign", href: "/projects/paywave-saas-redesign" },
      { label: "Kopa Brand System", href: "/projects/kopa-brand-system" },
      { label: "Tuma Commerce Site", href: "/projects/tuma-commerce-site" },
    ],
  },
  {
    label: "The Menu",
    href: "/services",
    items: [
      { label: "All Services", href: "/services" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "Brand Identity", href: "/services/brand-identity" },
      { label: "Web Design and Development", href: "/services/web-design-development" },
      { label: "Creative Vibarua", href: "/services/creative-vibarua" },
    ],
  },
  {
    label: "The Gatekeeper",
    href: "/gatekeeper",
    items: [{ label: "About Lampson", href: "/gatekeeper" }],
  },
  {
    label: "Insights",
    href: "/insights",
    items: [
      { label: "All Insights", href: "/insights" },
      { label: "Playbooks", href: "/insights/playbooks" },
      { label: "Opinion", href: "/insights/opinion" },
    ],
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-(--color-border) bg-background/95 backdrop-blur-xl">
        <div className="site-shell flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
            <Image
              src="/logo.png"
              alt="Brandroad Inc logo"
              width={40}
              height={40}
              priority
            />
            <span className="text-sm font-semibold uppercase tracking-[0.22em] sm:text-base">
              Brandroad Inc
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navGroups.map((group) => (
              <div key={group.label} className="group relative">
                <Link
                  href={group.href}
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${isActive(group.href)
                    ? "text-brand-purple"
                    : "text-(--color-ink)/85 hover:text-brand-purple"
                    }`}
                >
                  {group.label}
                  <ChevronDown size={14} className="opacity-65" />
                </Link>

                <div className="invisible absolute left-0 top-8 z-50 w-64 translate-y-1 rounded-2xl border border-(--color-border) bg-(--color-muted-surface) p-3 opacity-0 shadow-[0_20px_45px_rgba(107,33,168,0.16)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">{group.label}</p>
                  <ul className="mt-1 space-y-1">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block rounded-xl px-2 py-2 text-sm text-(--color-ink)/80 transition hover:bg-brand-purple/8 hover:text-brand-purple"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <LinkButton href="/contact" size="sm" ariaLabel="Start a project">
              Start a Project
            </LinkButton>
          </nav>

          <button
            type="button"
            className="relative flex h-12 w-12 items-center justify-center text-foreground transition-colors hover:text-(--color-ink)/70 lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="sr-only">Toggle navigation menu</span>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 flex flex-col bg-background px-4 text-foreground transition-all duration-300 ease-in-out lg:hidden ${isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
          }`}
        aria-hidden={!isOpen}
      >
        <div className="flex h-20 items-center justify-between border-b border-(--color-border) sm:px-2">
          <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
            <Image
              src="/logo.png"
              alt="Brandroad Inc logo"
              width={40}
              height={40}
            />
            <span className="text-lg font-semibold uppercase tracking-[0.18em] sm:text-xl">
              Brandroad Inc
            </span>
          </Link>

          <button
            type="button"
            className="relative flex h-12 w-12 items-center justify-center"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <span className="absolute h-0.5 w-6 origin-center rounded-full bg-current rotate-45" />
            <span className="absolute h-0.5 w-6 origin-center rounded-full bg-current -rotate-45" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-8 px-2">
          {navGroups.map((group, index) => (
            <div key={group.label} className="space-y-2" style={{ transitionDelay: `${index * 60}ms` }}>
              <Link
                href={group.href}
                onClick={closeMenu}
                className="text-3xl font-semibold uppercase tracking-[0.14em] transition-transform duration-300 hover:translate-x-2 sm:text-4xl"
              >
                {group.label}
              </Link>
              <div className="grid gap-1 pl-1">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="text-sm uppercase tracking-widest text-(--color-ink)/70"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <LinkButton href="/contact" className="mt-4 w-fit" onClick={closeMenu} ariaLabel="Start a project">
            Start a Project
          </LinkButton>
        </nav>
      </div>
    </>
  );
}
