import { Flame, Target, AlertTriangle, TrendingUp } from "lucide-react";

export default function AnalyticsPage() {
    const stats = [
        { label: "Current Streak", value: "14 days", icon: Flame, color: "var(--color-warning)" },
        { label: "Participation Rate", value: "92%", icon: Target, color: "var(--color-success)" },
        { label: "Blocker Frequency", value: "18%", icon: AlertTriangle, color: "var(--color-danger)" },
        { label: "Updates this Month", value: "124", icon: TrendingUp, color: "var(--color-info)" }
    ];

    return (<div style={{ padding: "var(--space-6)", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, marginBottom: 4 }}>Team Analytics</h1>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "14px" }}>Insights into your team's sync habits and blockers.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-4)", marginBottom: "var(--space-6)" }}>
            {stats.map((s, i) => (
                <div key={i} className="card" style={{ padding: "var(--space-5)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-4)" }}>
                        <h3 style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-secondary)" }}>{s.label}</h3>
                        <s.icon size={18} style={{ color: s.color }} />
                    </div>
                    <div style={{ fontSize: "24px", fontWeight: 700 }}>{s.value}</div>
                </div>
            ))}
        </div>

        <div className="card" style={{ padding: "var(--space-6)", minHeight: 300, display: "flex", alignItems: "center", justifyContent: "center", borderStyle: "dashed", background: "var(--color-bg-secondary)" }}>
            <div style={{ textAlign: "center", color: "var(--color-text-tertiary)" }}>
                <BarChart2 size={48} style={{ margin: "0 auto var(--space-3)", opacity: 0.5 }} />
                <h3 style={{ fontSize: "16px", fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 4 }}>Charts Coming Soon</h3>
                <p style={{ fontSize: "14px" }}>Integration with Recharts is planned for the next release to visualize blocker trends.</p>
            </div>
        </div>
    </div>);
}

// Ensure BarChart2 is available for the mock state
const BarChart2 = require("lucide-react").BarChart2;
