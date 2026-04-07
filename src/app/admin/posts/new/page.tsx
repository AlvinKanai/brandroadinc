import PostEditorForm from "@/components/admin/PostEditorForm";

export default function NewPostPage() {
    return (
        <div className="space-y-4">
            <p className="eyebrow">Editor Interface</p>
            <h1 className="text-4xl">Create Post</h1>
            <div className="card p-6">
                <PostEditorForm />
            </div>
        </div>
    );
}
