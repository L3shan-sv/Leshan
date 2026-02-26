
const CERTS = [
  {
    ico: "🏅",
    name: "DevOps Engineering Certification",
    org: "Moringa School",
    skills: "AWS · Kubernetes · Terraform · CI/CD · SRE · Monitoring",
    yr: "Nov 2024",
  },
  {
    ico: "🏅",
    name: "Full-Stack Software Engineering",
    org: "Moringa School",
    skills: "Python · React · Node.js · APIs · Databases · Agile",
    yr: "Nov 2024",
  },
  
];

const Certifications = () => (
  <section style={{ maxWidth: 1080, margin: "0 auto", padding: "5rem 2.5rem" }} id="certs">
    {/* Header */}
    <div className="reveal" style={{ marginBottom: "2.8rem" }}>
      <div style={{ fontFamily: "'DM Mono',monospace", fontSize: ".65rem", color: "var(--accent)", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: ".3rem" }}>
        // Certifications
      </div>
      <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "2rem", fontWeight: 700, letterSpacing: "-.02em", marginBottom: ".35rem", lineHeight: 1.2 }}>
        Credentials
      </h2>
      <p style={{ color: "var(--muted)", fontSize: ".86rem" }}>
        Formal training backing hands-on production experience.
      </p>
    </div>

    {/* Grid */}
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1rem" }}>
      {CERTS.map((cert) => (
        <div key={cert.name} className="cert-card reveal" style={{
          background: "var(--card)", border: "1px solid var(--border)",
          borderRadius: 10, padding: "1.4rem 1.3rem",
          display: "flex", gap: "1rem", alignItems: "flex-start",
        }}>
          <span style={{ fontSize: "1.7rem", flexShrink: 0, lineHeight: 1 }}>{cert.ico}</span>
          <div>
            <div style={{ fontFamily: "'Fraunces',serif", fontSize: ".88rem", fontWeight: 600, lineHeight: 1.3, marginBottom: ".18rem" }}>
              {cert.name}
            </div>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: ".6rem", color: "var(--accent)", marginBottom: ".35rem" }}>
              {cert.org}
            </div>
            <div style={{ fontSize: ".74rem", color: "var(--muted)", lineHeight: 1.5 }}>
              {cert.skills}
            </div>
            <span style={{
              display: "inline-block", marginTop: ".38rem",
              fontFamily: "'DM Mono',monospace", fontSize: ".56rem",
              padding: ".08rem .42rem", borderRadius: 4,
              background: "rgba(168,98,0,.08)", border: "1px solid rgba(168,98,0,.15)",
              color: "var(--muted)",
            }}>
              {cert.yr}
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Certifications;