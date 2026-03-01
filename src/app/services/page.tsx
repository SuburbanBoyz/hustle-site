export default function ServicesPage() {
  return (
    <div style={{ maxWidth: "900px" }}>
      <h1 style={{ fontSize: "42px", marginTop: 0 }}>Services</h1>
      <p style={{ opacity: 0.85, fontSize: "18px" }}>
        Book us for promos, content, and appearances.
      </p>

      <div style={{ display: "grid", gap: "14px", marginTop: "18px" }}>
        <div style={cardStyle}>
          <div style={titleStyle}>Brand Promo</div>
          <div style={textStyle}>
            Shoutouts, product placement, and promo posts.
          </div>
        </div>

        <div style={cardStyle}>
          <div style={titleStyle}>Content Package</div>
          <div style={textStyle}>
            Short-form clips (Reels/Shorts/TikTok style) filmed + edited.
          </div>
        </div>

        <div style={cardStyle}>
          <div style={titleStyle}>Event Appearance</div>
          <div style={textStyle}>
            Pop-out, film, post, and bring energy to your event.
          </div>
        </div>
      </div>

      <div style={{ marginTop: "22px", padding: "18px", border: "1px solid #222", borderRadius: "14px", background: "#121212" }}>
        <div style={{ fontWeight: "bold" }}>Ready to book?</div>
        <p style={{ opacity: 0.85, marginTop: "8px" }}>
          Go to the Contact page and send the details (date, location, budget, what you need).
        </p>
        <a href="/contact" style={{ textDecoration: "none" }}>
          <button
            style={{
              padding: "12px 18px",
              borderRadius: "12px",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "8px",
            }}
          >
            Contact
          </button>
        </a>
      </div>
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  padding: "18px",
  border: "1px solid #222",
  borderRadius: "14px",
  background: "#121212",
};

const titleStyle: React.CSSProperties = {
  fontWeight: "bold",
  fontSize: "18px",
};

const textStyle: React.CSSProperties = {
  marginTop: "6px",
  opacity: 0.85,
};