import * as dotenv from "dotenv";
dotenv.config();
const key = process.env.DISCOGS_KEY;
const secret = process.env.DISCOGS_SECRET;

export const getDefaultArtists = async (req, res) => {
  const params = {
    q: req.query.search || "",
    page: req.query.page || "1",  // Default to page 1 if not specified
    type: req.query.type || "",
    title: req.query.title || "",
    release_title: req.query.release_title || "",
    credit: req.query.credit || "",
    artist: req.query.artist || "",
    anv: req.query.anv || "",
    label: req.query.label || "",
    genre: req.query.genre || "",
    style: req.query.style || "",
    country: req.query.country || "",
  };

  // Filter out empty parameters
  const filteredParams = Object.fromEntries(Object.entries(params).filter(([_, value]) => value));

  try {
    const url = `https://api.discogs.com/database/search?${new URLSearchParams(filteredParams).toString()}&per_page=10`;

    const response = await fetch(url, {
      headers: {
        "User-Agent": "myPSNA.db/1.0 (eesmores@fab.pasona.tech)",
        Accept: "application/json",
        Authorization: `Discogs key=${key}, secret=${secret}`,
      },
    });

    const rateLimit = response.headers.get("X-Discogs-Ratelimit");
    const rateLimitUsed = response.headers.get("X-Discogs-Ratelimit-Used");
    const rateLimitRemaining = response.headers.get("X-Discogs-Ratelimit-Remaining");

    console.log("X-Discogs-Ratelimit:", rateLimit);
    console.log("X-Discogs-Ratelimit-Used:", rateLimitUsed);
    console.log("X-Discogs-Ratelimit-Remaining:", rateLimitRemaining);

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
};
