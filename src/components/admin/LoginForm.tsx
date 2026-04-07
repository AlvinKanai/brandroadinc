"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function LoginForm() {
    const router = useRouter();
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (formData: FormData) => {
        setLoading(true);
        setError("");

        try {
            const supabase = createSupabaseBrowserClient();
            const email = String(formData.get("email") ?? "");
            const password = String(formData.get("password") ?? "");

            const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });

            if (signInError) {
                setError(signInError.message);
                setLoading(false);
                return;
            }

            router.push("/admin/dashboard");
            router.refresh();
        } catch (err) {
            setError(err instanceof Error ? err.message : "Login failed.");
            setLoading(false);
        }
    };

    return (
        <form action={handleSubmit} className="space-y-4">
            <Input label="Email" name="email" type="email" required />
            <Input label="Password" name="password" type="password" required />
            <button
                type="submit"
                disabled={loading}
                className="h-11 rounded-full bg-brand-purple px-6 text-sm font-semibold uppercase tracking-[0.08em] text-white disabled:opacity-60"
            >
                {loading ? "Signing In..." : "Sign In"}
            </button>
            {error ? <p className="text-sm text-red-500">{error}</p> : null}
        </form>
    );
}
