const key = "DfDBmgofFwSMdzLNjRAL";
const secret = "KXFRPyshHlGOKidtXcpeJPVpmcebZTUz";

export const getDefaultArtists = async (req, res) => {
  try {
    const url = "https://api.discogs.com/database/search?q=my-chemical-romance";
    const discogsUrl = `${url}&key=${key}&secret=${secret}`;

    const response = await fetch(discogsUrl, {
      headers: {
        "User-Agent": "MyDiscogsApp/1.0",
        Accept: "application/json",
        Authorization: `Discogs key=${key}, secret=${secret}`,
      },
    });
    const data = await response.json();
    res.status(200).json({ data });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
};
