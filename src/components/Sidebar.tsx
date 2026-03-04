import { Link, useLocation } from "react-router-dom";
import { Users, UserCircle, BarChart2, Coffee } from "lucide-react";
import { Avatar } from "@geenius-ui/react-css";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
    const loc = useLocation();
    const links = [
        { to: "/", icon: Users, label: "Team Timeline" },
        { to: "/my-updates", icon: UserCircle, label: "My Updates" },
        { to: "/analytics", icon: BarChart2, label: "Analytics" }
    ];
    return (<aside style={{ width: "var(--sidebar-width)", background: "var(--color-bg-card)", borderRight: "1px solid var(--color-border)", height: "100vh", position: "fixed", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "var(--space-5)", display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
            <div style={{ background: "var(--color-accent-primary)", color: "var(--color-text-inverse)", padding: 8, borderRadius: "var(--radius-md)" }}><Coffee size={20} /></div>
            <div>
                <strong style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.5px" }}>StandupBot</strong>
                <div style={{ fontSize: "11px", color: "var(--color-text-secondary)", fontWeight: 500 }}>Async Syncings</div>
            </div>
        </div>

        <nav style={{ padding: "var(--space-4)", flex: 1, display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            {links.map(l => <Link key={l.to} to={l.to} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "10px 14px", borderRadius: "999px", color: loc.pathname === l.to ? "var(--color-text-primary)" : "var(--color-text-secondary)", background: loc.pathname === l.to ? "var(--color-bg-secondary)" : "transparent", fontWeight: loc.pathname === l.to ? 700 : 500, fontSize: "15px", transition: "all var(--transition-fast)" }}><l.icon size={18} style={{ color: loc.pathname === l.to ? "var(--color-accent-primary)" : "inherit" }} />{l.label}</Link>)}
        </nav>
        <div style={{ padding: "var(--space-4)", borderTop: "1px solid var(--color-border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                <Avatar fallback="MN" size="sm" />
                <div style={{ fontWeight: 600, fontSize: "14px" }}>Mehdi</div>
            </div>
            <ThemeToggle />
        </div>
    </aside>);
}
