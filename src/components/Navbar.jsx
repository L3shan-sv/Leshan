
const NAV_LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#tools",    label: "Tools"    },
  { href: "#resume",   label: "Resume"   },
  { href: "#certs",    label: "Certs"    },
];

const Navbar = () => (
  <nav style={{
    position: "fixed", top: 0, width: "100%", zIndex: 100,
    background: "rgba(233,224,206,.94)", backdropFilter: "blur(16px)",
    borderBottom: "1px solid var(--border)",
    height: 56, display: "flex", alignItems: "center",
    justifyContent: "space-between", padding: "0 2.5rem",
  }}>
    <div style={{ fontFamily: "'Fraunces',serif", fontSize: "1.1rem", color: "var(--accent)", letterSpacing: "-.01em" }}>
      Leshan Favor
    </div>
    <ul style={{ display: "flex", gap: ".15rem", listStyle: "none" }}>
      {NAV_LINKS.map(({ href, label }) => (
        <li key={href}>
          <a href={href} className="nav-link-style" style={{
            padding: ".32rem .82rem", borderRadius: 6,
            fontSize: ".8rem", color: "var(--muted)", textDecoration: "none",
          }}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;