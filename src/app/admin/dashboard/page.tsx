import { getDashboardMetrics } from "@/lib/admin-data";

export default async function AdminDashboardPage() {
    const metrics = await getDashboardMetrics();

    return (
        <div className="space-y-5">
            <header className="space-y-2">
                <p className="eyebrow">Overview Dashboard</p>
                <h1 className="text-4xl sm:text-5xl">Analytics Pulse</h1>
            </header>

            <div className="grid gap-4 md:grid-cols-3">
                <article className="card p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-purple">Total Website Visitors</p>
                    <p className="mt-3 text-4xl font-extrabold">{metrics.totalVisitors}</p>
                </article>
                <article className="card p-5 md:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-purple">Most Viewed Projects</p>
                    <ul className="mt-3 space-y-2 text-sm">
                        {metrics.mostViewedProjects.length === 0 ? (
                            <li className="text-slate-600">No project analytics yet.</li>
                        ) : (
                            metrics.mostViewedProjects.map((entry) => <li key={entry.title}>{entry.title} • {entry.views}</li>)
                        )}
                    </ul>
                </article>
                <article className="card p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-purple">Post Interactions</p>
                    <p className="mt-3 text-4xl font-extrabold">{metrics.postInteractions}</p>
                </article>
            </div>
        </div>
    );
}
