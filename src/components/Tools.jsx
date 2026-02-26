
import { TOOL_GROUPS } from "../data/data.jsx";

const Tools = () => (
  <section style={{ maxWidth: 1080, margin: "0 auto", padding: "5rem 2.5rem" }} id="tools">
    {/* Header */}
    <div className="reveal" style={{ marginBottom: "2.4rem" }}>
      <div style={{ fontFamily: "'DM Mono',monospace", fontSize: ".65rem", color: "var(--accent)", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: ".3rem" }}>
        // Tools
      </div>
      <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "2rem", fontWeight: 700, letterSpacing: "-.02em", marginBottom: ".35rem", lineHeight: 1.2 }}>
        Tech Stack
      </h2>
      <p style={{ color: "var(--muted)", fontSize: ".86rem" }}>
        Technologies I work with daily. Hover to explore.
      </p>
    </div>

    {/* Tool groups */}
    {TOOL_GROUPS.map((group) => (
      <div key={group.label} className="reveal" style={{ marginBottom: "2.2rem" }}>
        {/* Group label with divider line */}
        <div style={{
          fontFamily: "'DM Mono',monospace", fontSize: ".63rem", color: "var(--muted)",
          textTransform: "uppercase", letterSpacing: ".16em",
          marginBottom: ".9rem", display: "flex", alignItems: "center", gap: ".8rem",
        }}>
          {group.label}
          <span style={{ flex: 1, height: 1, background: "var(--border)" }} />
        </div>

        {/* Chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
          {group.chips.map((chip) => (
            <div key={chip.label} className="chip-item" style={{
              display: "flex", alignItems: "center", gap: ".52rem",
              padding: ".4rem .82rem", borderRadius: 8,
              border: "1px solid var(--border)", background: "var(--bg2)",
              fontSize: ".74rem", color: "var(--muted)",
            }}>
              {chip.svg}
              {chip.label}
            </div>
          ))}
        </div>
      </div>
    ))}
  </section>
);

export default Tools;