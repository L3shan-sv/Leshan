

import Pill from "./Pill.jsx";
import { IconDownload } from "./Icons.jsx";

const EXPERIENCE = [
  {
    title: "DevOps Engineer",
    date: "Aug 2025 – Present",
    org: "Annance Kenya Limited · Full-time",
    bullets: [
      <>Multi-AZ AWS infra (EKS, EC2, VPC, RDS, S3) via Terraform for 5+ clients — <Pill>99.92% uptime</Pill> across 25+ microservices</>,
      <>Jenkins & GitHub Actions CI/CD — deploy cycles cut by <Pill>85%</Pill> (3 days → 6 hrs), 20+ zero-downtime releases/week</>,
      <>ArgoCD GitOps across 8+ environments — manual intervention down <Pill>88%</Pill></>,
      <>Prometheus/Grafana + 25+ runbooks — MTTR dropped to <Pill>10 min</Pill> from 65 min</>,
      <>AWS cost optimisation <Pill>38% ($6.5K+/mo)</Pill> via right-sizing, spot, S3 lifecycle & cleanup</>,
      <>80% of ops automated via Python/Bash — saves <Pill>25+ hrs/week</Pill></>,
      <>24/7 on-call &lt;12 min P1/P2 SLA — incidents down <Pill>67% QoQ</Pill></>,
    ],
  },
  {
    title: "Backend Engineer",
    date: "Feb 2025 – Jul 2025",
    org: "Flex Trade Finance · Full-time",
    bullets: [
      "RESTful APIs with Python/Flask/Django — JWT auth, rate limiting, Swagger docs",
      <>CI/CD with pytest/unittest coverage — production bugs down <Pill>45%</Pill></>,
      "PostgreSQL & MongoDB optimised with Redis caching",
    ],
  },
];

const COMPETENCIES = [
  { label: "Cloud Architecture",      tags: ["Multi-AZ Design", "Cost Optimisation", "HA Systems"]     },
  { label: "Infrastructure as Code",  tags: ["Terraform", "Ansible", "CloudFormation"]                 },
  { label: "Container Orchestration", tags: ["Kubernetes", "Helm", "EKS", "Docker"]                    },
  { label: "SRE & Reliability",       tags: ["SLIs/SLOs", "Incident Mgmt", "Chaos Eng."]               },
  { label: "Automation",              tags: ["Python", "Bash", "GitOps"]                               },
];

// ─── Shared col-title with trailing line ────────────────────────────────────
const ColTitle = ({ children, style = {} }) => (
  <div style={{
    fontFamily: "'DM Mono',monospace", fontSize: ".65rem", fontWeight: 600,
    color: "var(--accent)", textTransform: "uppercase", letterSpacing: ".15em",
    marginBottom: "1.2rem", display: "flex", alignItems: "center", gap: ".7rem",
    ...style,
  }}>
    {children}
    <span style={{ flex: 1, height: 1, background: "var(--border)" }} />
  </div>
);

// ─── Resume component ────────────────────────────────────────────────────────
const Resume = () => (
  <section style={{ maxWidth: 1080, margin: "0 auto", padding: "5rem 2.5rem" }} id="resume">
    {/* Section header */}
    <div className="reveal" style={{ marginBottom: "2.5rem" }}>
      <div style={{ fontFamily: "'DM Mono',monospace", fontSize: ".65rem", color: "var(--accent)", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: ".3rem" }}>
        // Resume
      </div>
      <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "2rem", fontWeight: 700, letterSpacing: "-.02em", marginBottom: ".35rem", lineHeight: 1.2 }}>
        Experience &amp; Education
      </h2>
      <p style={{ color: "var(--muted)", fontSize: ".86rem" }}>Built on real production impact.</p>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: "3.5rem" }}>

      {/* ── Left: Experience ── */}
      <div className="reveal">
        <ColTitle>Experience</ColTitle>

        {EXPERIENCE.map((item) => (
          <div key={item.title} style={{ paddingBottom: "1.3rem", marginBottom: "1.3rem", borderBottom: "1px solid var(--border)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: ".5rem", marginBottom: ".18rem" }}>
              <div style={{ fontFamily: "'Fraunces',serif", fontSize: ".9rem", fontWeight: 600, lineHeight: 1.3 }}>{item.title}</div>
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: ".58rem", color: "var(--muted)", whiteSpace: "nowrap", flexShrink: 0, paddingTop: 2 }}>{item.date}</div>
            </div>
            <div style={{ fontSize: ".76rem", color: "var(--accent)", fontWeight: 500, marginBottom: ".38rem" }}>{item.org}</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".28rem", marginTop: ".38rem" }}>
              {item.bullets.map((b, i) => (
                <li key={i} style={{ fontSize: ".76rem", color: "var(--muted)", paddingLeft: "1rem", position: "relative", lineHeight: 1.6 }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--accent)", fontWeight: 700 }}>·</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Right: Education + Competencies ── */}
      <div className="reveal">
        <ColTitle>Education</ColTitle>

        <div style={{ paddingBottom: "1.3rem", marginBottom: "1.3rem", borderBottom: "1px solid var(--border)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: ".5rem", marginBottom: ".18rem" }}>
            <div style={{ fontFamily: "'Fraunces',serif", fontSize: ".9rem", fontWeight: 600, lineHeight: 1.3 }}>BSc Information Technology</div>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: ".58rem", color: "var(--muted)", whiteSpace: "nowrap", flexShrink: 0, paddingTop: 2 }}>Completed</div>
          </div>
          <div style={{ fontSize: ".76rem", color: "var(--accent)", fontWeight: 500, marginBottom: ".38rem" }}>Africa International University</div>
          <div style={{ fontSize: ".77rem", color: "var(--muted)", lineHeight: 1.7 }}>
            Data Structures & Algorithms · System Design · Network Security · Cloud Computing · Database Systems · OOP
          </div>
        </div>

        <ColTitle style={{ marginTop: "1.8rem" }}>Core Competencies</ColTitle>

        {COMPETENCIES.map(({ label, tags }) => (
          <div key={label} style={{ marginBottom: ".85rem" }}>
            <div style={{ fontSize: ".76rem", fontWeight: 500, marginBottom: ".22rem", color: "var(--text)" }}>{label}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".28rem" }}>
              {tags.map((t) => (
                <span key={t} style={{
                  fontFamily: "'DM Mono',monospace", fontSize: ".58rem",
                  padding: ".09rem .42rem", borderRadius: 4,
                  background: "var(--bg3)", border: "1px solid var(--border)",
                  color: "var(--muted)",
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Download CV */}
    <div className="reveal" style={{ marginTop: "2.5rem", display: "flex", justifyContent: "center" }}>
      <a href="#" onClick={(e) => { e.preventDefault(); alert("Replace # with your CV PDF URL"); }}
        className="btn-outline-style" style={{
          display: "inline-flex", alignItems: "center", gap: ".4rem",
          padding: ".54rem 1.25rem", borderRadius: 8,
          fontSize: ".82rem", fontWeight: 500,
          textDecoration: "none", fontFamily: "'DM Sans',sans-serif", cursor: "pointer",
        }}>
        <IconDownload /> Download CV
      </a>
    </div>
  </section>
);

export default Resume;