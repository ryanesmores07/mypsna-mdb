const key = "DfDBmgofFwSMdzLNjRAL";
const secret = "KXFRPyshHlGOKidtXcpeJPVpmcebZTUz";
export const getDefaultArtists = async (req, res) => {
  const query = req.query.search ? req.query.search : "";

  try {
    const url = `https://api.discogs.com/database/search?q=${query}&type=artist&page=&per_page=10`;
    // const discogsUrl = `${url}&key=${key}&secret=${secret}&page=&per_page=10`;

    const response = await fetch(url, {
      headers: {
        "User-Agent": "MyDiscogsApp/1.0 eesmores@fab.pasona.tech",
        Accept: "application/json",
        Authorization: `Discogs key=${key}, secret=${secret}`,
      },
    });

    // Access the rate limit headers
    const rateLimit = response.headers.get("X-Discogs-Ratelimit");
    const rateLimitUsed = response.headers.get("X-Discogs-Ratelimit-Used");
    const rateLimitRemaining = response.headers.get(
      "X-Discogs-Ratelimit-Remaining"
    );

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
