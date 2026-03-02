type IGMediaItem = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url?: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp: string;
};

export async function fetchInstagramMedia(limit = 12): Promise<IGMediaItem[]> {
  const userId = process.env.IG_USER_ID;
  const accessToken = process.env.IG_ACCESS_TOKEN;

  if (!userId || !accessToken) return [];

  const fields =
    "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp";

  const url =
    `https://graph.facebook.com/v19.0/${userId}/media` +
    `?fields=${encodeURIComponent(fields)}` +
    `&limit=${limit}` +
    `&access_token=${encodeURIComponent(accessToken)}`;

  const res = await fetch(url, {
    // Cache + “auto refresh” every 5 minutes
    next: { revalidate: 300 },
  });

  if (!res.ok) return [];

  const json = (await res.json()) as { data?: IGMediaItem[] };
  return json.data ?? [];
}