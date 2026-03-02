export default function Home() {
  return (
    <div style={{ maxWidth: 1040 }}>
      {/* HERO */}
      <div
        className="card"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: 28,
          borderRadius: 18,
        }}
      >
        {/* Flag-ish glow (animated) */}
        <div className="flagGlow flagGlowBlue" />
        <div className="flagGlow flagGlowRed" />
        <div className="flagStripe stripe1" />
        <div className="flagStripe stripe2" />
        <div className="flagStripe stripe3" />

        <div style={{ position: "relative" }}>
          <div
            style={{
              display: "inline-flex",
              gap: 10,
              alignItems: "center",
              padding: "8px 12px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.14)",
              backgroundColor: "rgba(0,0,0,0.25)",
              fontSize: 13,
              color: "rgba(255,255,255,0.88)",
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: 999, background: "#ffffff" }} />
            SuburbanBoyz • Merch • Clips • Booking
          </div>

          <h1 style={{ fontSize: 54, lineHeight: 1.05, margin: "14px 0 0 0", fontWeight: 950 }}>
            Built Different.
            <br />
            <span style={{ opacity: 0.78 }}>Red • White • Blue.</span>
          </h1>

          <p style={{ marginTop: 12, fontSize: 18 }} className="muted">
            Your official hub — drops, clips, and bookings in one place. Clean, fast, and owned by you.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
            <a href="/shop" style={{ textDecoration: "none" }}>
              <button className="btn btnPrimary">Shop Drops</button>
            </a>
            <a href="/clips" style={{ textDecoration: "none" }}>
              <button className="btn">Watch Clips</button>
            </a>
            <a href="/services" style={{ textDecoration: "none" }}>
              <button className="btn">Book Us</button>
            </a>
          </div>

          <div className="grid3" style={{ marginTop: 18 }}>
            {[
              { k: "Fast", v: "Loads quick" },
              { k: "Clean", v: "Looks premium" },
              { k: "Simple", v: "Easy updates" },
            ].map((x) => (
              <div key={x.k} className="card cardPad lift">
                <div style={{ fontWeight: 950 }}>{x.k}</div>
                <div className="tiny" style={{ marginTop: 6 }}>
                  {x.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CSS for the glow/stripes */}
        <style>{`
          .flagGlow{
            position:absolute;
            width:520px;
            height:520px;
            border-radius:999px;
            filter: blur(70px);
            opacity:0.35;
            animation: wave 6.5s ease-in-out infinite;
          }
          .flagGlowBlue{ background:#0066ff; top:-220px; left:-220px; }
          .flagGlowRed{ background:#ff2442; top:-240px; right:-220px; animation-delay:1.2s; }

          .flagStripe{
            position:absolute;
            left:-20%;
            width:140%;
            height:70px;
            opacity:0.08;
            filter: blur(0px);
            transform: rotate(-6deg);
            animation: stripeWave 5.8s ease-in-out infinite;
          }
          .stripe1{ top:25%; background: linear-gradient(90deg, transparent, #ffffff, transparent); }
          .stripe2{ top:45%; background: linear-gradient(90deg, transparent, #ff2442, transparent); animation-delay: 0.8s; }
          .stripe3{ top:65%; background: linear-gradient(90deg, transparent, #0066ff, transparent); animation-delay: 1.6s; }

          @keyframes wave{
            0%,100%{ transform: translateY(0px) translateX(0px); }
            50%{ transform: translateY(22px) translateX(10px); }
          }
          @keyframes stripeWave{
            0%,100%{ transform: translateX(0px) rotate(-6deg); }
            50%{ transform: translateX(18px) rotate(-6deg); }
          }
        `}</style>
      </div>

      {/* Below hero */}
      <div className="grid2" style={{ marginTop: 16 }}>
        <div className="card cardPad lift">
          <div style={{ fontWeight: 950, fontSize: 18 }}>Featured Drop</div>
          <div className="muted" style={{ marginTop: 8 }}>
            Hustle Hoodie — premium heavyweight. (Checkout coming soon.)
          </div>
          <div style={{ marginTop: 12 }}>
            <a href="/shop" style={{ textDecoration: "none" }}>
              <button className="btn btnPrimary">Go to Shop</button>
            </a>
          </div>
        </div>

        <div className="card cardPad lift">
          <div style={{ fontWeight: 950, fontSize: 18 }}>Instagram Sync</div>
          <div className="muted" style={{ marginTop: 8 }}>
            Next: auto-pull your newest IG posts into /clips.
          </div>
          <div style={{ marginTop: 12 }}>
            <a href="/clips" style={{ textDecoration: "none" }}>
              <button className="btn">View Clips</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}