import Link from "next/link";
import { getProjectsAdmin } from "@/lib/admin-data";

export default async function AdminProjectsPage() {
    const projects = await getProjectsAdmin();

    return (
        <div className="space-y-5">
            <header className="flex items-center justify-between gap-3">
                <div>
                    <p className="eyebrow">CRUD Interface</p>
                    <h1 className="mt-3 text-4xl">Projects</h1>
                </div>
                <Link href="/admin/projects/new" className="rounded-full bg-brand-purple px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                    New Project
                </Link>
            </header>

            <div className="card overflow-x-auto p-3">
                <table className="w-full min-w-[640px] border-collapse text-sm">
                    <thead>
                        <tr className="border-b border-slate-200 text-left text-xs uppercase tracking-[0.15em] text-slate-500">
                            <th className="px-3 py-3">Title</th>
                            <th className="px-3 py-3">Client</th>
                            <th className="px-3 py-3">Created</th>
                            <th className="px-3 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.length === 0 ? (
                            <tr>
                                <td className="px-3 py-5 text-slate-600" colSpan={4}>
                                    No projects found. Create your first project.
                                </td>
                            </tr>
                        ) : (
                            projects.map((project) => (
                                <tr key={project.id} className="border-b border-slate-100">
                                    <td className="px-3 py-3">{project.title}</td>
                                    <td className="px-3 py-3">{project.clientName}</td>
                                    <td className="px-3 py-3">{new Date(project.createdAt).toLocaleDateString()}</td>
                                    <td className="px-3 py-3">
                                        <div className="flex gap-2">
                                            <button type="button" className="rounded-lg border border-slate-300 px-3 py-1 text-xs">Edit</button>
                                            <button type="button" className="rounded-lg border border-red-300 px-3 py-1 text-xs text-red-600">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
