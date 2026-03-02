import { fetchInstagramMedia } from "@/lib/instagram";

export default async function ClipsPage() {
  const items = await fetchInstagramMedia(12);

  return (
    <div style={{ maxWidth: "900px" }}>
      <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>Clips</h1>
      <p style={{ marginTop: "12px", opacity: 0.85 }}>
        Latest from Instagram.
      </p>

      {!items.length ? (
        <div style={{ marginTop: "18px", padding: "16px", border: "1px solid #222", borderRadius: "12px", background: "#121212" }}>
          <b>No Instagram data yet.</b>
          <div style={{ marginTop: "6px", opacity: 0.8 }}>
            Add IG_USER_ID and IG_ACCESS_TOKEN in Vercel Environment Variables.
          </div>
        </div>
      ) : (
        <div
          style={{
            marginTop: "18px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "14px",
          }}
        >
          {items.map((m) => {
            const img =
              m.media_type === "VIDEO"
                ? m.thumbnail_url
                : m.media_url;

            return (
              <a
                key={m.id}
                href={m.permalink}
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  color: "white",
                  border: "1px solid #222",
                  borderRadius: "14px",
                  overflow: "hidden",
                  background: "#121212",
                }}
              >
                <div style={{ aspectRatio: "1 / 1", background: "#0b0b0b" }}>
                  {img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={img}
                      alt="Instagram media"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : null}
                </div>
                <div style={{ padding: "12px" }}>
                  <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                    {m.media_type}
                  </div>
                  <div style={{ marginTop: "6px", opacity: 0.8, fontSize: "13px" }}>
                    {m.caption ? m.caption.slice(0, 90) : "Open on Instagram"}
                    {m.caption && m.caption.length > 90 ? "…" : ""}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}