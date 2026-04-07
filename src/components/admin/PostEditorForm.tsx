"use client";

import { useState } from "react";
import { createPostAction } from "@/app/admin/actions";
import RichTextEditor from "@/components/admin/RichTextEditor";
import { Input } from "@/components/ui/Input";

export default function PostEditorForm() {
    const [message, setMessage] = useState<string>("");

    return (
        <form
            action={async (formData) => {
                const result = await createPostAction(formData);
                setMessage(result.ok ? "Post published." : result.message ?? "Failed to save post.");
            }}
            className="space-y-5"
        >
            <div className="grid gap-4 md:grid-cols-2">
                <Input label="Title" name="title" required />
                <Input label="Slug" name="slug" required hint="Example: why-clean-ui-beats-feature-bloat" />
                <Input label="Author Name" name="authorName" required />
                <Input label="Main Image URL" name="mainImageUrl" required />
            </div>

            <label className="flex flex-col gap-2 text-sm font-medium">
                <span>SEO Description</span>
                <textarea name="metaDescription" required rows={3} className="rounded-xl border border-slate-300 px-4 py-3" />
            </label>

            <div>
                <p className="mb-2 text-sm font-medium">Body Content</p>
                <RichTextEditor name="bodyContent" />
            </div>

            <button type="submit" className="h-11 rounded-full bg-brand-purple px-6 text-sm font-semibold uppercase tracking-[0.08em] text-white">
                Save Post
            </button>
            {message ? <p className="text-sm text-slate-600">{message}</p> : null}
        </form>
    );
}
