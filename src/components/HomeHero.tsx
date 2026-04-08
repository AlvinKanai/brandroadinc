"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/Button";

export default function HomeHero() {
    return (
        <section className="section-space pb-10 pt-12 sm:pt-16">
            <div className="site-shell grid items-center gap-10">
                <div className="space-y-7">
                    <p className="eyebrow">PRODUCT DESIGN AGENCY</p>
                    <motion.h1
                        className="max-w-4xl text-5xl leading-[0.9] sm:text-7xl lg:text-8xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        Brandroad Inc.
                    </motion.h1>
                    <motion.p
                        className="max-w-2xl leading-relaxed text-(--color-ink)/80 sm:text-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
                    >
                        We are a startup branding agency in Nairobi building conversion-first product design, websites, and scalable digital systems.
                    </motion.p>
                    <motion.div
                        className="flex flex-wrap gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
                    >
                        <LinkButton href="/services" ariaLabel="View the menu services">
                            View The Menu
                        </LinkButton>
                        <LinkButton href="/gatekeeper" variant="outline" ariaLabel="Meet Lampson section">
                            Meet Lampson
                        </LinkButton>
                    </motion.div>
                </div>

                <motion.div
                    className="card relative mx-auto flex h-92.5 w-full max-w-105 items-center justify-center overflow-hidden p-8"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(61,30,45,0.18),transparent_58%),radial-gradient(circle_at_75%_80%,rgba(246,135,31,0.16),transparent_52%)]" />
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3.4, ease: "easeInOut" }}
                        className="relative"
                    >
                        <Image
                            src="/logo.png"
                            alt="Lampson retro purple desk lamp placeholder"
                            width={270}
                            height={270}
                            priority
                            className="h-auto w-55 sm:w-67.5"
                        />
                    </motion.div>
                    <span className="absolute bottom-6 rounded-full border border-brand-purple/20 bg-(--color-muted-surface)/95 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-purple">
                        Lampson Asset Placeholder
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
