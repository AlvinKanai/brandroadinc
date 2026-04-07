import Link from "next/link";

/**
 * Admin layout shell for dashboard and editors.
 */
export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="section-space">
            <div className="site-shell grid gap-6 lg:grid-cols-[220px_1fr]">
                <aside className="card h-fit p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-purple">Admin</p>
                    <nav className="mt-4 flex flex-col gap-2 text-sm">
                        <Link href="/admin/dashboard" className="rounded-lg px-3 py-2 hover:bg-brand-purple/10">
                            Dashboard
                        </Link>
                        <Link href="/admin/projects" className="rounded-lg px-3 py-2 hover:bg-brand-purple/10">
                            Projects
                        </Link>
                        <Link href="/admin/posts" className="rounded-lg px-3 py-2 hover:bg-brand-purple/10">
                            Posts
                        </Link>
                    </nav>
                </aside>
                <div>{children}</div>
            </div>
        </section>
    );
}
