import ProjectEditorForm from "@/components/admin/ProjectEditorForm";

export default function NewProjectPage() {
    return (
        <div className="space-y-4">
            <p className="eyebrow">Editor Interface</p>
            <h1 className="text-4xl">Create Project</h1>
            <div className="card p-6">
                <ProjectEditorForm />
            </div>
        </div>
    );
}
