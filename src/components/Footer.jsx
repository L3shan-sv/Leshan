

const FOOTER_LINKS = [
  { href: "mailto:Leshanalan10@gmail.com", label: "Email"           },
  { href: "https://github.com/l3shan-sv",  label: "GitHub"          },
  { href: "tel:+254717897100",             label: "+254 717 897 100" },
];

const Footer = () => (
  <footer style={{
    borderTop: "1px solid var(--border)",
    padding: "2rem 2.5rem",
    display: "flex", justifyContent: "space-between", alignItems: "center",
    maxWidth: 1080, margin: "0 auto",
    color: "var(--muted)", fontSize: ".76rem",
  }}>
    <div style={{ fontFamily: "'Fraunces',serif", color: "var(--accent)", fontSize: ".95rem" }}>
      Leshan Favor
    </div>
    <div style={{ display: "flex", gap: "1.2rem" }}>
      {FOOTER_LINKS.map(({ href, label }) => (
        <a key={href} href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          className="ft-link-style"
          style={{ color: "var(--muted)", textDecoration: "none", fontSize: ".76rem" }}>
          {label}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;