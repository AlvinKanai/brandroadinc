"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { ImagePlus } from "lucide-react";

type RichTextEditorProps = {
    name: string;
    initialContent?: string;
};

/**
 * Headless TipTap editor that persists HTML into a hidden form field.
 * Image uploads are streamed to Supabase storage via the API route and inserted back as public URLs.
 */
export default function RichTextEditor({ name, initialContent = "" }: RichTextEditorProps) {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: { levels: [1, 2] },
            }),
            Link.configure({ openOnClick: false }),
            Image,
            Placeholder.configure({
                placeholder: "Write hard-hitting content here...",
            }),
        ],
        content: initialContent,
    });

    const handleImageUpload = async (file: File) => {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("/api/upload", {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            return;
        }

        const payload = (await response.json()) as { publicUrl: string };
        editor?.chain().focus().setImage({ src: payload.publicUrl, alt: "Editor image" }).run();
    };

    if (!editor) {
        return null;
    }

    return (
        <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
                <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className="rounded-lg border border-slate-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em]">
                    H1
                </button>
                <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className="rounded-lg border border-slate-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em]">
                    H2
                </button>
                <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className="rounded-lg border border-slate-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em]">
                    Bold
                </button>
                <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className="rounded-lg border border-slate-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em]">
                    List
                </button>
                <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-slate-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em]">
                    <ImagePlus size={14} />
                    Image
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(event) => {
                            const file = event.target.files?.[0];
                            if (file) {
                                void handleImageUpload(file);
                            }
                        }}
                    />
                </label>
            </div>

            <EditorContent editor={editor} className="min-h-55 rounded-xl border border-slate-300 bg-white p-4" />
            <input type="hidden" name={name} value={editor.getHTML()} readOnly />
        </div>
    );
}
