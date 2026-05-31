
export default function BookButton() {
  return (
    <button
      style={{
        background:
          "linear-gradient(123deg,#1a0e00 7%,#8B6914 37%,#C9A84C 72%,#6b3a00 100%)",
        boxShadow:
          "0px 4px 4px rgba(180,140,20,0.3), inset 4px 4px 12px rgba(212,168,71,0.4)",
        outline: "2px solid rgba(212,168,71,0.6)",
        outlineOffset: "-3px",
        borderRadius: "9999px",
        border: "none",
        cursor: "pointer",
        color: "#fff",
        fontWeight: 500,
        textTransform: "uppercase",
        letterSpacing: "0.15em",
        padding: "14px 40px",
      }}
    >
      Book a Table
    </button>
  );
}
