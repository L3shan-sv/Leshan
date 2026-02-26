

import { useState, useEffect, useRef } from "react";

// ─── Typewriter ──────────────────────────────────────────────────────────────
export function useTypewriter(words, speed = 80, deleteSpeed = 42, pause = 1900) {
  const [text, setText] = useState("");
  const state = useRef({ ri: 0, ci: 0, dl: false });

  useEffect(() => {
    let timer;

    function tick() {
      const { ri, ci, dl } = state.current;
      const word = words[ri];

      if (!dl) {
        const next = ci + 1;
        setText(word.slice(0, next));
        state.current.ci = next;
        if (next === word.length) {
          state.current.dl = true;
          timer = setTimeout(tick, pause);
          return;
        }
      } else {
        const next = ci - 1;
        setText(word.slice(0, next));
        state.current.ci = next;
        if (next === 0) {
          state.current.dl = false;
          state.current.ri = (ri + 1) % words.length;
        }
      }

      timer = setTimeout(tick, dl ? deleteSpeed : speed);
    }

    timer = setTimeout(tick, 700);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return text;
}

// ─── Scroll Reveal ───────────────────────────────────────────────────────────
// Attach returned ref to a wrapper element. Any .reveal child inside will
// animate in when it enters the viewport.
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("in"), i * 65);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    ref.current.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}