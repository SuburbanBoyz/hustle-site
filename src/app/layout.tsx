export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const linkStyle: React.CSSProperties = {
    color: "rgba(255,255,255,0.88)",
    textDecoration: "none",
    fontWeight: 850,
    letterSpacing: 0.2,
  };

  return (
    <html>
      <body
        style={{
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial',
          margin: 0,
          minHeight: "100vh",
          color: "white",
          background:
            "radial-gradient(900px 520px at 15% 0%, rgba(0,102,255,0.22), transparent 60%), radial-gradient(850px 520px at 85% 0%, rgba(255,36,66,0.22), transparent 58%), linear-gradient(180deg, rgba(255,255,255,0.04), transparent 22%), #050814",
        }}
      >
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          {/* HEADER */}
          <div
            style={{
              padding: "16px 18px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "sticky",
              top: 0,
              zIndex: 50,
              backdropFilter: "blur(12px)",
              backgroundColor: "rgba(5,8,20,0.70)",
              borderBottom: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            {/* Brand */}
            <a
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                color: "white",
              }}
            >
              {/* SB Placeholder Badge */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.14)",
                  background:
                    "linear-gradient(135deg, rgba(0,102,255,0.35), rgba(255,36,66,0.35))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 950,
                  fontSize: 16,
                  letterSpacing: 1,
                  boxShadow:
                    "0 10px 30px rgba(0,0,0,0.45)",
                }}
              >
                SB
              </div>

              <div style={{ lineHeight: 1 }}>
                <div style={{ fontWeight: 950, letterSpacing: 0.6 }}>
                  Suburban<span style={{ color: "#ff2442" }}>Boyz</span>
                </div>
                <div style={{ fontSize: 12, opacity: 0.78 }}>
                  Red • White • Blue • Built Different
                </div>
              </div>
            </a>

            {/* Nav */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="/" style={linkStyle}>Home</a>
              <a href="/shop" style={linkStyle}>Shop</a>
              <a href="/clips" style={linkStyle}>Clips</a>
              <a href="/services" style={linkStyle}>Services</a>
              <a href="/contact" style={linkStyle}>Contact</a>
            </div>

            {/* CTA */}
            <a href="/shop" style={{ textDecoration: "none" }}>
              <button className="btn btnPrimary">Shop</button>
            </a>
          </div>

          {/* PAGE CONTENT */}
          <div style={{ padding: "26px 18px 44px 18px" }}>
            {children}
          </div>

          {/* FOOTER */}
          <div
            style={{
              padding: "24px 18px",
              borderTop: "1px solid rgba(255,255,255,0.10)",
              color: "rgba(255,255,255,0.68)",
              fontSize: 13,
              display: "flex",
              justifyContent: "space-between",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <div>© {new Date().getFullYear()} SuburbanBoyz</div>
            <div style={{ opacity: 0.8 }}>
              Built by you • Deployed on Vercel
            </div>
          </div>
        </div>

        {/* GLOBAL STYLES */}
        <style>{`
          .card {
            border-radius: 18px;
            border: 1px solid rgba(255,255,255,0.12);
            background: rgba(0,0,0,0.30);
            box-shadow: 0 12px 34px rgba(0,0,0,0.45);
          }
          .cardPad { padding: 18px; }

          .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 12px 16px;
            border-radius: 12px;
            font-weight: 950;
            cursor: pointer;
            border: 1px solid rgba(255,255,255,0.18);
            background: transparent;
            color: white;
            transition: transform .15s ease, border-color .15s ease, opacity .15s ease;
          }
          .btn:hover { transform: translateY(-1px); border-color: rgba(255,255,255,0.32); }
          .btn:active { transform: translateY(0px); opacity: .92; }

          .btnPrimary {
            border: none;
            color: white;
            background: linear-gradient(90deg, #0066ff 0%, #ffffff 50%, #ff2442 100%);
          }
          .btnPrimary:hover { opacity: 0.94; }

          .grid2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
          .grid3 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }

          @media (max-width: 860px) { 
            .grid2, .grid3 { grid-template-columns: 1fr; } 
          }

          .muted { opacity: .82; }
          .tiny { font-size: 13px; opacity: .75; }

          .lift { transition: transform .18s ease, border-color .18s ease; }
          .lift:hover { transform: translateY(-2px); border-color: rgba(255,255,255,0.20); }
        `}</style>
      </body>
    </html>
  );
}