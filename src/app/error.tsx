"use client";

import { useEffect } from "react";
import { LinkButton } from "@/components/ui/Button";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="site-shell section-space text-center">
            <p className="eyebrow">System Error</p>
            <h1 className="mt-6 text-4xl sm:text-6xl">The design engine tripped.</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-(--color-ink)/80 sm:text-base">
                We are already debugging this, but you can reload the route and continue where you left off.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button
                    type="button"
                    onClick={reset}
                    className="h-11 rounded-full bg-brand-purple px-6 text-sm font-semibold uppercase tracking-[0.08em] text-white"
                >
                    Retry
                </button>
                <LinkButton href="/" variant="outline" ariaLabel="Return home">
                    Back Home
                </LinkButton>
            </div>
        </div>
    );
}
