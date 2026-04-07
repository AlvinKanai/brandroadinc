"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectResult = { label: string; value: string };
type ProjectGalleryItem = { title: string; caption: string; imageUrl: string };

type CaseStudyTabsProps = {
    problem: string;
    solution: string;
    bodyContent: string;
    results: ProjectResult[];
    gallery: ProjectGalleryItem[];
};

export default function CaseStudyTabs({
    problem,
    solution,
    bodyContent,
    results,
    gallery,
}: CaseStudyTabsProps) {
    const [activeTab, setActiveTab] = useState<"overview" | "results" | "gallery">("overview");

    return (
        <section className="space-y-4">
            <div className="flex flex-wrap gap-2">
                {[
                    { key: "overview", label: "Case Overview" },
                    { key: "results", label: "Outcomes" },
                    { key: "gallery", label: "Visual Walkthrough" },
                ].map((tab) => (
                    <button
                        key={tab.key}
                        type="button"
                        onClick={() => setActiveTab(tab.key as "overview" | "results" | "gallery")}
                        className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${activeTab === tab.key
                                ? "border-brand-purple bg-brand-purple text-white"
                                : "border-(--color-border) text-(--color-ink)/80 hover:border-brand-purple"
                            }`}
                        aria-pressed={activeTab === tab.key}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {activeTab === "overview" ? (
                <div className="grid gap-4 lg:grid-cols-3">
                    <section className="card p-6">
                        <h2 className="text-2xl">The Problem</h2>
                        <p className="mt-3 text-sm leading-relaxed text-(--color-ink)/80">{problem}</p>
                    </section>
                    <section className="card p-6">
                        <h2 className="text-2xl">The Solution</h2>
                        <p className="mt-3 text-sm leading-relaxed text-(--color-ink)/80">{solution}</p>
                    </section>
                    <section className="card prose-brand p-6 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: bodyContent }} />
                </div>
            ) : null}

            {activeTab === "results" ? (
                <div className="grid gap-4 md:grid-cols-3">
                    {results.map((result) => (
                        <article key={result.label} className="card p-6">
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-orange">{result.label}</p>
                            <p className="mt-3 text-4xl font-extrabold leading-none text-brand-purple">{result.value}</p>
                        </article>
                    ))}
                </div>
            ) : null}

            {activeTab === "gallery" ? (
                <div className="grid gap-4 md:grid-cols-3">
                    {gallery.map((item) => (
                        <article key={item.title} className="card overflow-hidden">
                            <div className="relative h-48 w-full border-b border-(--color-border)">
                                <Image
                                    src={item.imageUrl}
                                    alt={`${item.title} placeholder`}
                                    fill
                                    className="object-contain p-6"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="space-y-2 p-5">
                                <h3 className="text-lg font-bold">{item.title}</h3>
                                <p className="text-sm leading-relaxed text-(--color-ink)/75">{item.caption}</p>
                            </div>
                        </article>
                    ))}
                </div>
            ) : null}
        </section>
    );
}
