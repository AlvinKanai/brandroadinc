import LoginForm from "@/components/admin/LoginForm";

export default function AdminLoginPage() {
    return (
        <section className="section-space">
            <div className="site-shell max-w-md">
                <div className="card p-6 sm:p-8">
                    <p className="eyebrow">Admin Access</p>
                    <h1 className="mt-4 text-4xl">Enter The Control Room</h1>
                    <p className="mt-3 text-sm text-slate-700">Sign in with your Supabase admin credentials.</p>
                    <div className="mt-6">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
