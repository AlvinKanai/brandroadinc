"use client";

import { useState } from "react";
import { createProjectAction } from "@/app/admin/actions";
import RichTextEditor from "@/components/admin/RichTextEditor";
import { Input } from "@/components/ui/Input";

export default function ProjectEditorForm() {
    const [message, setMessage] = useState<string>("");

    return (
        <form
            action={async (formData) => {
                const result = await createProjectAction(formData);
                setMessage(result.ok ? "Project published." : result.message ?? "Failed to save project.");
            }}
            className="space-y-5"
        >
            <div className="grid gap-4 md:grid-cols-2">
                <Input label="Title" name="title" required />
                <Input label="Slug" name="slug" required hint="Example: paywave-saas-redesign" />
                <Input label="Client Name" name="clientName" required />
                <Input label="Cover Image URL" name="coverImageUrl" required />
            </div>

            <Input label="Headings" name="headings" required hint="Comma separated values" />

            <label className="flex flex-col gap-2 text-sm font-medium">
                <span>The Problem</span>
                <textarea name="theProblem" required rows={4} className="rounded-xl border border-slate-300 px-4 py-3" />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium">
                <span>The Solution</span>
                <textarea name="theSolution" required rows={4} className="rounded-xl border border-slate-300 px-4 py-3" />
            </label>

            <div className="grid gap-4 md:grid-cols-3">
                <Input label="Testimonial Quote" name="testimonialQuote" required />
                <Input label="Testimonial Author" name="testimonialAuthor" required />
                <Input label="Testimonial Role" name="testimonialRole" required />
            </div>

            <div>
                <p className="mb-2 text-sm font-medium">Body Content</p>
                <RichTextEditor name="bodyContent" />
            </div>

            <button type="submit" className="h-11 rounded-full bg-brand-purple px-6 text-sm font-semibold uppercase tracking-[0.08em] text-white">
                Save Project
            </button>
            {message ? <p className="text-sm text-slate-600">{message}</p> : null}
        </form>
    );
}
