"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/Button";

export default function HomeHero() {
    return (
        <section className="section-space pb-10 pt-12 sm:pt-16">
            <div className="site-shell grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="space-y-7">
                    <p className="eyebrow">Design Evangelists</p>
                    <motion.h1
                        className="max-w-4xl text-5xl leading-[0.9] sm:text-7xl lg:text-8xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        STOP TRAUMATIZING YOUR USERS.
                    </motion.h1>
                    <motion.h2
                        className="max-w-2xl text-base leading-relaxed text-(--color-ink)/80 sm:text-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
                    >
                        Leta hizo chaotic apps na vibarua tufanyie deliverance. We engineer world-class SaaS architecture, build
                        heavy-hitting brand identities, and execute the design tasks you have been putting off.
                    </motion.h2>
                    <motion.div
                        className="flex flex-wrap gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
                    >
                        <LinkButton href="/#the-menu" ariaLabel="View the menu services">
                            View The Menu
                        </LinkButton>
                        <LinkButton href="/#the-gatekeeper" variant="outline" ariaLabel="Meet Lampson section">
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
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(107,33,168,0.16),transparent_58%),radial-gradient(circle_at_75%_80%,rgba(249,115,22,0.14),transparent_52%)]" />
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
