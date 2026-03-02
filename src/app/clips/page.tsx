export default function ClipsPage() {
  return (
    <div style={{ maxWidth: 980 }}>
      <h1 style={{ fontSize: 36, fontWeight: 900, marginTop: 0 }}>Clips</h1>
      <p className="muted" style={{ marginTop: 8 }}>
        Next upgrade: auto-sync your Instagram here.
      </p>

      <div className="grid3" style={{ marginTop: 16 }}>
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div key={n} className="card" style={{ overflow: "hidden" }}>
            <div style={{ background: "rgba(255,255,255,0.06)", aspectRatio: "1 / 1" }} />
            <div className="cardPad">
              <div style={{ fontWeight: 900 }}>Clip #{n}</div>
              <div className="tiny" style={{ marginTop: 6 }}>
                Placeholder — your IG posts will show here automatically.
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}