const Pill = ({ children }) => (
  <span style={{
    display: "inline-block",
    background: "rgba(168,98,0,.1)",
    border: "1px solid rgba(168,98,0,.2)",
    borderRadius: 4,
    padding: ".08rem .42rem",
    fontFamily: "'DM Mono',monospace",
    fontSize: ".6rem",
    color: "var(--accent)",
    marginLeft: ".18rem",
  }}>
    {children}
  </span>
);

export default Pill;
