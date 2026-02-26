
import { IconEmail, IconPhone, IconGithub } from "./Icons.jsx";
import { useTypewriter } from "../hooks/useAnimations.js";

const ROLES = [
  "DevOps & Cloud Engineer",
  "Kubernetes Architect",
  "IaC Specialist",
  "SRE Practitioner",
  "AWS Architect",
];

const CONTACTS = [
  { href: "mailto:Leshanalan10@gmail.com", icon: <IconEmail />, text: "Leshanalan10@gmail.com" },
  { href: "tel:+254717897100",             icon: <IconPhone />, text: "+254 717 897 100"       },
  { href: "https://github.com/l3shan-sv",  icon: <IconGithub />, text: "github.com/l3shan-sv" },
];

const Hero = () => {
  const twText = useTypewriter(ROLES);

  return (
    <div id="hero" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "7rem 2.5rem 4rem", maxWidth: 1080, margin: "0 auto", gap: "5rem",
    }}>
      {/* ── Left col ── */}
      <div style={{ flex: 1 }}>
        {/* Available badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: ".5rem",
          border: "1px solid var(--border)", background: "var(--bg2)",
          padding: ".26rem .82rem", borderRadius: 999,
          fontFamily: "'DM Mono',monospace", fontSize: ".68rem",
          color: "var(--muted)", marginBottom: "1.4rem", letterSpacing: ".04em",
        }}>
          <span className="dot-pulse" style={{
            width: 7, height: 7, borderRadius: "50%",
            background: "var(--green)", boxShadow: "0 0 6px var(--green)",
          }} />
          Open to opportunities
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: "'Fraunces',serif",
          fontSize: "clamp(3rem,6.5vw,5rem)",
          fontWeight: 700, lineHeight: 1.05,
          letterSpacing: "-.03em", marginBottom: ".5rem",
        }}>
          Hi, I'm<br />
          <em style={{ color: "var(--accent)" }}>Leshan</em>
        </h1>

        {/* Typewriter role */}
        <div style={{
          fontFamily: "'DM Mono',monospace", fontSize: ".9rem",
          color: "var(--muted)", marginBottom: "1.3rem", minHeight: "1.4rem",
        }}>
          {twText}
          <span className="cursor-blink" style={{
            display: "inline-block", width: 2, height: ".95em",
            background: "var(--accent)", marginLeft: 2, verticalAlign: "middle",
          }} />
        </div>

        {/* Bio */}
        <p style={{ color: "var(--muted)", fontSize: ".94rem", maxWidth: 460, marginBottom: "1.6rem", lineHeight: 1.8 }}>
          DevOps Engineer with hands-on experience building scalable AWS/Kubernetes
          infrastructure and automating CI/CD pipelines for enterprise platforms.
          Focused on reliability, automation, and measurable performance.
        </p>

        {/* Contact links */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".55rem", marginBottom: "1.8rem" }}>
          {CONTACTS.map(({ href, icon, text }) => (
            <a key={href} href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="contact-link-style"
              style={{
                display: "inline-flex", alignItems: "center", gap: ".35rem",
                fontFamily: "'DM Mono',monospace", fontSize: ".66rem",
                color: "var(--muted)", textDecoration: "none", letterSpacing: ".03em",
              }}>
              {icon}{text}
            </a>
          ))}
        </div>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: ".7rem", flexWrap: "wrap" }}>
          <a href="#projects" className="btn-solid" style={{
            display: "inline-flex", alignItems: "center", gap: ".4rem",
            padding: ".54rem 1.25rem", borderRadius: 8,
            fontSize: ".82rem", fontWeight: 500,
            textDecoration: "none", border: "1px solid transparent",
            fontFamily: "'DM Sans',sans-serif", cursor: "pointer",
          }}>
            View my work
          </a>
          <a href="https://github.com/l3shan-sv" target="_blank" rel="noreferrer"
            className="btn-outline-style" style={{
              display: "inline-flex", alignItems: "center", gap: ".4rem",
              padding: ".54rem 1.25rem", borderRadius: 8,
              fontSize: ".82rem", fontWeight: 500,
              textDecoration: "none",
              fontFamily: "'DM Sans',sans-serif", cursor: "pointer",
            }}>
            <IconGithub size={14} /> GitHub
          </a>
        </div>
      </div>

      {/* ── Photo placeholder ── */}
      <div style={{
        width: 230, height: 270, flexShrink: 0,
        borderRadius: 14, border: "1px solid var(--border)",
        background: "var(--bg2)",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
        boxShadow: "0 1px 8px rgba(0,0,0,.08),0 4px 24px rgba(0,0,0,.06)",
      }}>
        <div style={{ textAlign: "center", color: "var(--muted)", opacity: .5 }}>
          <svg width="55" height="55" viewBox="0 0 80 80" fill="none" opacity="0.3">
            <circle cx="40" cy="28" r="16" stroke="#5C5240" strokeWidth="1.5" />
            <path d="M8 72c0-17.7 14.3-32 32-32s32 14.3 32 32" stroke="#5C5240" strokeWidth="1.5" />
          </svg>
          <p style={{ fontFamily: "'DM Mono',monospace", fontSize: ".58rem", marginTop: ".5rem", letterSpacing: ".1em" }}>
            Your photo here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;