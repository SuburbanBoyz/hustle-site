"use client";

export default function ShopPage() {
  return (
    <div style={{ maxWidth: 980 }}>
      <h1 style={{ fontSize: 36, fontWeight: 900, marginTop: 0 }}>Shop</h1>
      <p className="muted" style={{ marginTop: 8 }}>
        Official drops. Clean and simple.
      </p>

      <div className="grid2" style={{ marginTop: 16 }}>
        <div className="card cardPad">
          <div style={{ fontWeight: 900, fontSize: 18 }}>Hustle Hoodie</div>
          <div className="muted" style={{ marginTop: 8 }}>
            Premium heavyweight hoodie. Everyday wear.
          </div>

          <div style={{ marginTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontWeight: 900 }}>$65.00</div>
            <button className="btn btnPrimary" onClick={() => alert("Checkout coming soon.")}>
              Buy Now
            </button>
          </div>

          <div className="tiny" style={{ marginTop: 10 }}>
            Next: real checkout + sizes + colors.
          </div>
        </div>

        <div className="card cardPad">
          <div style={{ fontWeight: 900, fontSize: 18 }}>Coming Next</div>
          <div className="muted" style={{ marginTop: 8 }}>
            Limited drops, bundles, and “members only” offers.
          </div>

          <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button className="btn" onClick={() => alert("We’ll add this next.")}>Email List</button>
            <button className="btn" onClick={() => alert("We’ll add this next.")}>Discount Codes</button>
          </div>
        </div>
      </div>
    </div>
  );
}