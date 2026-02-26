

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

    :root {
      --bg:    #E9E0CE;
      --bg2:   #DFD4BE;
      --bg3:   #D2C5A8;
      --card:  #E4D9C6;
      --border:  #C8BA9E;
      --border2: #B0A080;
      --text:  #1A1712;
      --muted: #5C5240;
      --faint: #8A7A60;
      --accent:  #A86200;
      --accent2: #D4820A;
      --green: #2A6B2E;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { background: var(--bg); color: var(--text); font-family: 'DM Sans', sans-serif; }

    ::-webkit-scrollbar { width: 5px; }
    ::-webkit-scrollbar-track { background: var(--bg); }
    ::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 3px; }

    @keyframes pulse    { 0%,100%{opacity:1} 50%{opacity:.3} }
    @keyframes blink    { 0%,100%{opacity:1} 50%{opacity:0} }
    @keyframes revealUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }

    .dot-pulse    { animation: pulse 2s infinite; }
    .cursor-blink { animation: blink 1s infinite; }

    .reveal    { opacity:0; transform:translateY(20px); transition:opacity .55s ease,transform .55s ease; }
    .reveal.in { opacity:1; transform:translateY(0); }

    /* Project cards */
    .proj-card { transition: border-color .22s, transform .22s, box-shadow .22s; }
    .proj-card:hover {
      border-color: var(--accent) !important;
      transform: translateY(-4px);
      box-shadow: 0 4px 20px rgba(0,0,0,.12), 0 12px 48px rgba(0,0,0,.10);
    }
    .proj-card::before {
      content: '';
      position: absolute; top:0; left:0; right:0; height:2px;
      background: linear-gradient(to right, transparent, var(--accent), transparent);
      opacity: 0; transition: opacity .25s;
    }
    .proj-card:hover::before { opacity: 1; }

    /* Tool chips */
    .chip-item { transition: all .18s; cursor: default; user-select: none; }
    .chip-item:hover {
      border-color: var(--accent) !important;
      color: var(--text) !important;
      background: var(--card) !important;
      transform: translateY(-2px);
      box-shadow: 0 3px 14px rgba(168,98,0,.13);
    }
    .chip-item:hover svg { filter: drop-shadow(0 0 3px rgba(168,98,0,.55)); }

    /* Cert cards */
    .cert-card { transition: all .22s; }
    .cert-card:hover {
      border-color: var(--accent) !important;
      transform: translateY(-2px);
      box-shadow: 0 4px 20px rgba(0,0,0,.12), 0 12px 48px rgba(0,0,0,.10);
    }

    /* Buttons */
    .btn-solid { background: var(--accent); color: #fff; transition: all .18s; }
    .btn-solid:hover { background: var(--accent2); transform: translateY(-1px); box-shadow: 0 4px 18px rgba(168,98,0,.3); }

    .btn-outline-style { border: 1px solid var(--border2); color: var(--text); background: var(--bg2); transition: all .18s; }
    .btn-outline-style:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-1px); }

    /* Links / nav */
    .contact-link-style { transition: color .15s; }
    .contact-link-style:hover { color: var(--accent) !important; }

    .nav-link-style { transition: background .15s, color .15s; }
    .nav-link-style:hover { background: var(--bg3); color: var(--text) !important; }

    /* Modal internals */
    .gh-btn-style { transition: all .18s; }
    .gh-btn-style:hover { border-color: var(--accent) !important; color: var(--accent) !important; }

    .close-btn-style { transition: all .15s; }
    .close-btn-style:hover { background: var(--bg3); color: var(--text) !important; }

    .tab-btn-style { transition: color .15s, border-color .15s; }
    .tab-btn-style.active { color: var(--accent) !important; border-bottom-color: var(--accent) !important; }
    .tab-btn-style:not(.active):hover { color: var(--text) !important; }

    .img-cell-style { transition: border-color .18s, transform .18s; cursor: zoom-in; }
    .img-cell-style:hover { border-color: var(--accent) !important; transform: scale(1.02); }

    /* Footer */
    .ft-link-style { transition: color .15s; }
    .ft-link-style:hover { color: var(--accent) !important; }
  `}</style>
);

export default GlobalStyles;