export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const linkStyle: React.CSSProperties = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  };

  return (
    <html>
      <body
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#0f0f0f",
          color: "white",
          margin: 0,
        }}
      >
        {/* Top Navigation */}
        <nav
          style={{
            padding: "20px",
            borderBottom: "1px solid #222",
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a href="/" style={linkStyle}>Home</a>
          <a href="/shop" style={linkStyle}>Shop</a>
          <a href="/livestream" style={linkStyle}>Livestream</a>
          <a href="/clips" style={linkStyle}>Clips</a>
          <a href="/services" style={linkStyle}>Services</a>
          <a href="/contact" style={linkStyle}>Contact</a>
        </nav>

        {/* Page Content */}
        <div style={{ padding: "40px" }}>{children}</div>
      </body>
    </html>
  );
}