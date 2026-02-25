import { Send, CheckCircle2 } from "lucide-react";

export default function MyUpdatesPage() {
    return (<div style={{ padding: "var(--space-6)", maxWidth: 700, margin: "0 auto" }}>
        <div style={{ marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, marginBottom: 4 }}>Post Your Update</h1>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "14px" }}>Share what you've been working on with the rest of the team.</p>
        </div>

        <div className="card" style={{ padding: "var(--space-6)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
                <div>
                    <label style={{ display: "block", fontSize: "14px", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "var(--space-2)" }}>What did you do yesterday?</label>
                    <p style={{ fontSize: "13px", color: "var(--color-text-tertiary)", marginBottom: "var(--space-2)" }}>Briefly summarize your accomplishments.</p>
                    <textarea placeholder="e.g. Scaffelded new apps, fixed auth bug..." style={{ width: "100%", minHeight: 100, padding: "12px", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)", background: "var(--color-bg-secondary)", color: "var(--color-text-primary)", fontFamily: "inherit", fontSize: "15px", resize: "vertical" }}></textarea>
                </div>

                <div>
                    <label style={{ display: "block", fontSize: "14px", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "var(--space-2)" }}>What will you do today?</label>
                    <p style={{ fontSize: "13px", color: "var(--color-text-tertiary)", marginBottom: "var(--space-2)" }}>Outline your goals for the current workday.</p>
                    <textarea placeholder="e.g. Will implement the retro board UI..." style={{ width: "100%", minHeight: 100, padding: "12px", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)", background: "var(--color-bg-secondary)", color: "var(--color-text-primary)", fontFamily: "inherit", fontSize: "15px", resize: "vertical" }}></textarea>
                </div>

                <div>
                    <label style={{ display: "block", fontSize: "14px", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "var(--space-2)" }}>Any blockers?</label>
                    <p style={{ fontSize: "13px", color: "var(--color-text-tertiary)", marginBottom: "var(--space-2)" }}>Is anything preventing you from getting your work done?</p>
                    <textarea placeholder="e.g. Waiting on design assets..." style={{ width: "100%", minHeight: 80, padding: "12px", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)", background: "var(--color-bg-secondary)", color: "var(--color-text-primary)", fontFamily: "inherit", fontSize: "15px", resize: "vertical" }}></textarea>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "var(--space-4)", borderTop: "1px solid var(--color-border)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--color-success)", fontSize: "13px", fontWeight: 600 }}>
                        <CheckCircle2 size={16} /> Saved as draft
                    </div>
                    <button className="btn btn-primary" style={{ padding: "10px 24px" }}><Send size={16} /> Publish Update</button>
                </div>
            </div>
        </div>
    </div>);
}
