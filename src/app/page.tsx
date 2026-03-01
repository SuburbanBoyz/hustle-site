export default function Home() {
  return (
    <div style={{ maxWidth: "900px" }}>
      <div
        style={{
          padding: "40px",
          border: "1px solid #222",
          borderRadius: "16px",
          background: "#141414",
        }}
      >
        <div style={{ marginBottom: "10px", opacity: 0.8 }}>
          Merch • Livestream • Clips • Services
        </div>

        <h1 style={{ fontSize: "52px", margin: 0, lineHeight: 1.05 }}>
          Your brand hub.
          <br />
          <span style={{ opacity: 0.7 }}>One link for everything.</span>
        </h1>

        <p style={{ marginTop: "18px", fontSize: "18px", opacity: 0.8 }}>
          This site is where people buy your hoodies, watch you live, and catch your best clips.
          Simple, fast, and built by you.
        </p>

        <div style={{ marginTop: "22px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a href="/shop" style={{ textDecoration: "none" }}>
            <button
              style={{
                padding: "12px 18px",
                borderRadius: "12px",
                border: "none",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Shop Hoodies
            </button>
          </a>

          <a href="/livestream" style={{ textDecoration: "none" }}>
            <button
              style={{
                padding: "12px 18px",
                borderRadius: "12px",
                border: "1px solid #333",
                background: "transparent",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Watch Live
            </button>
          </a>

          <a href="/clips" style={{ textDecoration: "none" }}>
            <button
              style={{
                padding: "12px 18px",
                borderRadius: "12px",
                border: "1px solid #333",
                background: "transparent",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              View Clips
            </button>
          </a>
        </div>
      </div>

      <div style={{ marginTop: "24px", display: "grid", gap: "14px" }}>
        {[
          { title: "Merch Store", text: "Sell hoodies and drops. Keep it simple and clean." },
          { title: "Livestream Hub", text: "Send people to one place for every live." },
          { title: "Clips", text: "Show your best moments without scrolling." },
        ].map((x) => (
          <div
            key={x.title}
            style={{
              padding: "18px",
              border: "1px solid #222",
              borderRadius: "14px",
              background: "#121212",
            }}
          >
            <div style={{ fontWeight: "bold", fontSize: "18px" }}>{x.title}</div>
            <div style={{ marginTop: "6px", opacity: 0.8 }}>{x.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}