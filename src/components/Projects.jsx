

import { PROJECTS } from "../data/data.jsx";

// ─── Section label + heading helper ─────────────────────────────────────────
const SectionHeader = ({ label, title, sub }) => (
  <div className="reveal" style={{ marginBottom: "2.8rem" }}>
    <div style={{ fontFamily: "'DM Mono',monospace", fontSize: ".65rem", color: "var(--accent)", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: ".3rem" }}>
      {label}
    </div>
    <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "2rem", fontWeight: 700, letterSpacing: "-.02em", marginBottom: ".35rem", lineHeight: 1.2 }}>
      {title}
    </h2>
    <p style={{ color: "var(--muted)", fontSize: ".86rem" }}>{sub}</p>
  </div>
);

// ─── Single project card ─────────────────────────────────────────────────────
const ProjectCard = ({ id, project, onOpen }) => (
  <div className="proj-card reveal" onClick={() => onOpen(id)}
    style={{
      background: "var(--card)", border: "1px solid var(--border)",
      borderRadius: 10, padding: "1.4rem",
      cursor: "pointer", position: "relative", overflow: "hidden",
    }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: ".9rem" }}>
      <span style={{ fontSize: "1.6rem", lineHeight: 1 }}>{project.icon}</span>
      <span style={{
        fontFamily: "'DM Mono',monospace", fontSize: ".58rem",
        padding: ".15rem .52rem", borderRadius: 999,
        background: "rgba(168,98,0,.12)", border: "1px solid rgba(168,98,0,.22)",
        color: "var(--accent)",
      }}>
        {project.cat}
      </span>
    </div>
    <div style={{ fontFamily: "'Fraunces',serif", fontSize: ".95rem", fontWeight: 600, marginBottom: ".4rem", lineHeight: 1.35 }}>
      {project.title}
    </div>
    <div style={{ fontSize: ".78rem", color: "var(--muted)", lineHeight: 1.68, marginBottom: ".9rem" }}>
      {project.desc.slice(0, 120)}…
    </div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: ".3rem" }}>
      {project.tags.map((tag) => (
        <span key={tag} style={{
          fontFamily: "'DM Mono',monospace", fontSize: ".57rem",
          padding: ".1rem .48rem", borderRadius: 4,
          background: "var(--bg3)", border: "1px solid var(--border)",
          color: "var(--muted)",
        }}>
          {tag}
        </span>
      ))}
    </div>
  </div>
);

// ─── Projects section ────────────────────────────────────────────────────────
const Projects = ({ onOpenModal }) => (
  <section style={{ maxWidth: 1080, margin: "0 auto", padding: "5rem 2.5rem" }} id="projects">
    <SectionHeader
      label="// Projects"
      title="Featured Work"
      sub="Click any card to explore the project — description, stack, and images."
    />
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.1rem" }}>
      {Object.entries(PROJECTS).map(([id, project]) => (
        <ProjectCard key={id} id={id} project={project} onOpen={onOpenModal} />
      ))}
    </div>
  </section>
);

export default Projects;