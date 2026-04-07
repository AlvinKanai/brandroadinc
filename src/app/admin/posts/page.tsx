import Link from "next/link";
import { getPostsAdmin } from "@/lib/admin-data";

export default async function AdminPostsPage() {
    const posts = await getPostsAdmin();

    return (
        <div className="space-y-5">
            <header className="flex items-center justify-between gap-3">
                <div>
                    <p className="eyebrow">CRUD Interface</p>
                    <h1 className="mt-3 text-4xl">Blog Posts</h1>
                </div>
                <Link href="/admin/posts/new" className="rounded-full bg-brand-purple px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                    New Post
                </Link>
            </header>

            <div className="card overflow-x-auto p-3">
                <table className="w-full min-w-[640px] border-collapse text-sm">
                    <thead>
                        <tr className="border-b border-slate-200 text-left text-xs uppercase tracking-[0.15em] text-slate-500">
                            <th className="px-3 py-3">Title</th>
                            <th className="px-3 py-3">Author</th>
                            <th className="px-3 py-3">Published</th>
                            <th className="px-3 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.length === 0 ? (
                            <tr>
                                <td className="px-3 py-5 text-slate-600" colSpan={4}>
                                    No posts found. Create your first post.
                                </td>
                            </tr>
                        ) : (
                            posts.map((post) => (
                                <tr key={post.id} className="border-b border-slate-100">
                                    <td className="px-3 py-3">{post.title}</td>
                                    <td className="px-3 py-3">{post.authorName}</td>
                                    <td className="px-3 py-3">{new Date(post.publishedAt).toLocaleDateString()}</td>
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
