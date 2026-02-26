import { useState, useEffect } from "react";

import GlobalStyles    from "./components/Globalstyles.jsx";
import Navbar          from "./components/Navbar.jsx";
import Hero            from "./components/Hero.jsx";
import Projects        from "./components/Projects.jsx";
import Tools           from "./components/Tools.jsx";
import Resume          from "./components/Resume.jsx";
import Certifications  from "./components/Certifications.jsx";
import Footer          from "./components/Footer.jsx";
import ProjectModal    from "./components/ProjectModal.jsx";
import { useReveal }   from "./hooks/useAnimations.js";

const Divider = () => (
  <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 2.5rem" }} />
);

export default function App() {
  const [activeModal, setActiveModal] = useState(null);
  const rootRef = useReveal();

  // Close modal on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setActiveModal(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeModal ? "hidden" : "";
  }, [activeModal]);

  return (
    <>
      <GlobalStyles />

      <div ref={rootRef} style={{
        background: "var(--bg)",
        color: "var(--text)",
        fontFamily: "'DM Sans', sans-serif",
        minHeight: "100vh",
      }}>
        <Navbar />
        <Hero />
        <Divider />
        <Projects onOpenModal={setActiveModal} />
        <Divider />
        <Tools />
        <Divider />
        <Resume />
        <Divider />
        <Certifications />
        <Footer />
      </div>

      <ProjectModal projectId={activeModal} onClose={() => setActiveModal(null)} />
    </>
  );
}
