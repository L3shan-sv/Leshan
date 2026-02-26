

import { useState } from "react";
import { PROJECTS } from "../data/data.jsx";
import { IconGithub } from "./Icons.jsx";

// ─── Lightbox ────────────────────────────────────────────────────────────────
const Lightbox = ({ images, startIndex, onClose }) => {
  const [idx, setIdx] = useState(startIndex);
  const img = images[idx];

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,.93)",
        zIndex: 400, display: "flex", alignItems: "center", justifyContent: "center",
      }}
    >
      <button onClick={onClose} style={{
        position: "absolute", top: "1.2rem", right: "1.4rem",
        background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.18)",
        color: "#fff", width: 34, height: 34, borderRadius: 8,
        cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: ".95rem",
      }}>✕</button>

      {images.length > 1 && (
        <>
          <button onClick={() => setIdx((idx - 1 + images.length) % images.length)} style={{
            position: "absolute", left: "1.4rem", top: "50%", transform: "translateY(-50%)",
            background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.18)",
            color: "#fff", width: 40, height: 40, borderRadius: 8,
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.2rem",
          }}>‹</button>
          <button onClick={() => setIdx((idx + 1) % images.length)} style={{
            position: "absolute", right: "1.4rem", top: "50%", transform: "translateY(-50%)",
            background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.18)",
            color: "#fff", width: 40, height: 40, borderRadius: 8,
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.2rem",
          }}>›</button>
          <div style={{
            position: "absolute", top: "1.4rem", left: "50%", transform: "translateX(-50%)",
            fontFamily: "'DM Mono',monospace", fontSize: ".65rem",
            color: "rgba(255,255,255,.35)",
          }}>
            {idx + 1} / {images.length}
          </div>
        </>
      )}

      <div style={{ position: "relative" }}>
        <img src={img.src} alt={img.caption || ""} style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain", borderRadius: 6, display: "block" }} />
        {img.caption && (
          <div style={{ position: "absolute", bottom: "-1.8rem", left: 0, right: 0, textAlign: "center", fontFamily: "'DM Mono',monospace", fontSize: ".65rem", color: "rgba(255,255,255,.45)" }}>
            {img.caption}
          </div>
        )}
      </div>
    </div>
  );
};

// ─── Modal ───────────────────────────────────────────────────────────────────
const ProjectModal = ({ projectId, onClose }) => {
  const [activeTab, setActiveTab] = useState("desc");
  const [lbIndex, setLbIndex]   = useState(null);

  if (!projectId) return null;
  const p = PROJECTS[projectId];

  return (
    <>
      {/* Overlay */}
      <div
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        style={{
          position: "fixed", inset: 0,
          background: "rgba(18,14,8,.6)", backdropFilter: "blur(5px)",
          zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center",
          padding: "1.5rem",
        }}
      >
        {/* Modal panel */}
        <div style={{
          background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 14,
          maxWidth: 680, width: "100%", maxHeight: "90vh",
          overflow: "hidden", display: "flex", flexDirection: "column",
          boxShadow: "0 4px 20px rgba(0,0,0,.12),0 12px 48px rgba(0,0,0,.10)",
          transform: "translateY(0)",
        }}>

          {/* Head */}
          <div style={{ padding: "1.5rem 1.6rem 1.1rem", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexShrink: 0 }}>
            <div style={{ display: "flex", gap: ".9rem", alignItems: "flex-start", flex: 1 }}>
              <span style={{ fontSize: "2rem" }}>{p.icon}</span>
              <div>
                <div style={{ fontFamily: "'Fraunces',serif", fontSize: "1.1rem", fontWeight: 600, lineHeight: 1.25, marginBottom: ".22rem" }}>{p.title}</div>
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: ".62rem", color: "var(--accent)" }}>{p.cat}</div>
              </div>
            </div>
            <button onClick={onClose} className="close-btn-style" style={{
              background: "var(--bg2)", border: "1px solid var(--border)",
              color: "var(--muted)", width: 30, height: 30, borderRadius: 6,
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: ".9rem", flexShrink: 0,
            }}>✕</button>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", borderBottom: "1px solid var(--border)", padding: "0 1.6rem", flexShrink: 0 }}>
            {[
              { key: "desc", label: "Description" },
              { key: "imgs", label: <>Images {p.images.length > 0 && <span style={{ background: "var(--accent)", color: "#fff", fontFamily: "'DM Mono',monospace", fontSize: ".52rem", padding: ".08rem .38rem", borderRadius: 999 }}>{p.images.length}</span>}</> },
            ].map(({ key, label }) => (
              <button key={key} onClick={() => setActiveTab(key)}
                className={`tab-btn-style ${activeTab === key ? "active" : ""}`}
                style={{
                  padding: ".65rem 1.2rem", fontSize: ".8rem", fontWeight: 500,
                  color: "var(--muted)", background: "none", border: "none",
                  borderBottom: "2px solid transparent",
                  cursor: "pointer", marginBottom: -1,
                  fontFamily: "'DM Sans',sans-serif",
                  display: "flex", alignItems: "center", gap: ".4rem",
                }}>
                {label}
              </button>
            ))}
          </div>

          {/* Scrollable body */}
          <div style={{ overflowY: "auto", flex: 1 }}>

            {/* Description tab */}
            {activeTab === "desc" && (
              <div style={{ padding: "1.4rem 1.6rem" }}>
                {[["Purpose", p.purpose], ["Overview", p.desc]].map(([h, txt]) => (
                  <div key={h} style={{ marginBottom: "1.3rem" }}>
                    <h4 style={{ fontFamily: "'DM Mono',monospace", fontSize: ".65rem", color: "var(--accent)", textTransform: "uppercase", letterSpacing: ".13em", marginBottom: ".55rem" }}>{h}</h4>
                    <p style={{ fontSize: ".84rem", color: "var(--muted)", lineHeight: 1.78 }}>{txt}</p>
                  </div>
                ))}
                <div style={{ marginBottom: "1.3rem" }}>
                  <h4 style={{ fontFamily: "'DM Mono',monospace", fontSize: ".65rem", color: "var(--accent)", textTransform: "uppercase", letterSpacing: ".13em", marginBottom: ".55rem" }}>What was built</h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".38rem" }}>
                    {p.features.map((f, i) => (
                      <li key={i} style={{ fontSize: ".82rem", color: "var(--muted)", paddingLeft: "1.1rem", position: "relative", lineHeight: 1.6 }}>
                        <span style={{ position: "absolute", left: 0, color: "var(--accent)", fontSize: ".7rem" }}>▸</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 style={{ fontFamily: "'DM Mono',monospace", fontSize: ".65rem", color: "var(--accent)", textTransform: "uppercase", letterSpacing: ".13em", marginBottom: ".55rem" }}>Stack</h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
                    {p.stack.map((s) => (
                      <span key={s} style={{ fontFamily: "'DM Mono',monospace", fontSize: ".6rem", padding: ".2rem .6rem", borderRadius: 5, background: "var(--bg2)", border: "1px solid var(--border)", color: "var(--muted)" }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Images tab */}
            {activeTab === "imgs" && (
              <div style={{ padding: "1.4rem 1.6rem" }}>
                {p.images.length === 0 ? (
                  <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                    <span style={{ fontSize: "2rem", display: "block", marginBottom: ".6rem", opacity: .3 }}>🖼️</span>
                    <p style={{ fontSize: ".82rem", color: "var(--muted)" }}>No images added yet.<br />Screenshots and architecture diagrams coming soon.</p>
                  </div>
                ) : (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: ".75rem" }}>
                    {p.images.map((img, i) => (
                      <div key={i}>
                        <div className="img-cell-style" onClick={() => setLbIndex(i)}
                          style={{ borderRadius: 8, overflow: "hidden", border: "1px solid var(--border)", aspectRatio: "16/9", background: "var(--bg2)" }}>
                          <img src={img.src} alt={img.caption || ""} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                        </div>
                        {img.caption && <div style={{ fontFamily: "'DM Mono',monospace", fontSize: ".6rem", color: "var(--muted)", textAlign: "center", marginTop: ".35rem" }}>{img.caption}</div>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div style={{ padding: ".9rem 1.6rem", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "flex-end", flexShrink: 0 }}>
            <a href={p.github} target="_blank" rel="noreferrer" className="gh-btn-style" style={{
              display: "inline-flex", alignItems: "center", gap: ".45rem",
              padding: ".5rem 1.2rem", borderRadius: 8,
              border: "1px solid var(--border2)", background: "var(--bg2)",
              color: "var(--text)", fontSize: ".78rem", fontWeight: 500,
              textDecoration: "none",
            }}>
              <IconGithub size={14} /> View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lbIndex !== null && p.images.length > 0 && (
        <Lightbox images={p.images} startIndex={lbIndex} onClose={() => setLbIndex(null)} />
      )}
    </>
  );
};

export default ProjectModal;