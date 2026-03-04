import { CheckCircle2, AlertTriangle, Coffee, ChevronDown } from "lucide-react";
import { Button, Card, Badge, Avatar } from "@geenius-ui/react-css";

export default function TeamTimelinePage() {
    const updates = [
        {
            user: { name: "Mehdi Nabhani", role: "Frontend Lead", avatar: "MN" },
            time: "9:45 AM",
            yesterday: "Finished the Retro Board UI and wired it up with Convex schema.",
            today: "Starting work on Standup Bot. Goal is to get the CSS and all 3 pages done before lunch.",
            blockers: "None.",
            hasBlocker: false
        },
        {
            user: { name: "Sarah Jenkins", role: "Backend Dev", avatar: "SJ" },
            time: "9:12 AM",
            yesterday: "Wrote tests for the new billing webhook endpoints. All passing.",
            today: "Connecting stripe to production environment. Will do a pair programming session with Alex.",
            blockers: "Waiting on the production Stripe API keys from DevOps.",
            hasBlocker: true
        },
        {
            user: { name: "Alex Lin", role: "Fullstack", avatar: "AL" },
            time: "8:55 AM",
            yesterday: "Investigated memory leak in the worker service.",
            today: "Deploying the fix and monitoring. Pair programming with Sarah on Stripe.",
            blockers: "None.",
            hasBlocker: false
        },
        {
            user: { name: "David Kim", role: "Product", avatar: "DK" },
            time: "8:30 AM",
            yesterday: "Drafted Phase 7 spec docs.",
            today: "Reviewing Phase 6 release candidate with stakeholders.",
            blockers: "None.",
            hasBlocker: false
        }
    ];

    return (<div style={{ padding: "var(--space-6)", maxWidth: 800, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <div>
                <h1 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, marginBottom: 4 }}>Team Timeline</h1>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "14px" }}>Wednesday, October 28, 2026</p>
            </div>
            <Button variant="ghost"><Coffee size={18} /> 4/6 Syncs</Button>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
            {updates.map((u, i) => (
                <div key={i} className="timeline-item">
                    <div className="timeline-dot" style={{ background: u.hasBlocker ? "var(--color-warning)" : "var(--color-accent-primary)", borderColor: "var(--color-bg-primary)" }}></div>

                    <Card padding="lg" className={u.hasBlocker ? "timeline-card-blocked" : ""}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-4)" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                                <Avatar fallback={u.user.avatar} size="md" />
                                <div>
                                    <div style={{ fontWeight: 700, fontSize: "15px", display: "flex", alignItems: "center", gap: 6 }}>{u.user.name} <Badge variant="secondary" size="sm">{u.user.role}</Badge></div>
                                    <div style={{ fontSize: "12px", color: "var(--color-text-tertiary)", fontWeight: 500, marginTop: 2 }}>{u.time}</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                            <div>
                                <h4 style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}><CheckCircle2 size={14} /> Yesterday</h4>
                                <p style={{ color: "var(--color-text-primary)", fontSize: "15px", lineHeight: 1.5 }}>{u.yesterday}</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}><CheckCircle2 size={14} style={{ color: "var(--color-accent-primary)" }} /> Today</h4>
                                <p style={{ color: "var(--color-text-primary)", fontSize: "15px", lineHeight: 1.5 }}>{u.today}</p>
                            </div>
                            {u.hasBlocker && (
                                <div style={{ background: "rgba(245,158,11,0.1)", padding: "var(--space-3)", borderRadius: "var(--radius-sm)", border: "1px solid rgba(245,158,11,0.2)" }}>
                                    <h4 style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-warning)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4, display: "flex", alignItems: "center", gap: 6 }}><AlertTriangle size={14} /> Blockers</h4>
                                    <p style={{ color: "var(--color-warning)", fontSize: "14px", fontWeight: 500 }}>{u.blockers}</p>
                                </div>
                            )}
                        </div>
                    </Card>
                </div>
            ))}

            <div className="timeline-item" style={{ display: "flex", justifyContent: "center", paddingTop: "var(--space-4)", paddingBottom: 0 }}>
                <Button variant="ghost" style={{ color: "var(--color-text-tertiary)" }}>End of updates</Button>
            </div>
        </div>
    </div>);
}
