"use client";

export default function ShopPage() {
  return (
    <div>
      <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>Shop</h1>
      <p style={{ marginTop: "10px" }}>Hustle Hoodie</p>
      <p style={{ marginTop: "10px" }}><b>$65.00</b></p>

      <button
        style={{ marginTop: "20px", padding: "10px 20px" }}
        onClick={() => alert("Checkout coming next.")}
      >
        Buy Now
      </button>
    </div>
  );
}