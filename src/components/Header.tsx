"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LinkButton } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Our Work", href: "/#our-work" },
  { label: "The Menu", href: "/#the-menu" },
  { label: "The Gatekeeper", href: "/#the-gatekeeper" },
  { label: "Insights", href: "/insights" },
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

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${pathname === link.href
                  ? "text-brand-purple"
                  : "text-(--color-ink)/85 hover:text-brand-purple"
                  }`}
              >
                {link.label}
              </Link>
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
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="text-3xl font-semibold uppercase tracking-[0.14em] transition-transform duration-300 hover:translate-x-2 sm:text-4xl"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <LinkButton href="/contact" className="mt-4 w-fit" onClick={closeMenu} ariaLabel="Start a project">
            Start a Project
          </LinkButton>
        </nav>
      </div>
    </>
  );
}
