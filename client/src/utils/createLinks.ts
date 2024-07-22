export const createLinks = (text) => {
  // Replace [a=...] patterns
  const artistRegex = /\[a=([^\]]+)\]/g;
  text = text.replace(artistRegex, (match, p1) => {
    const href = `https://www.example.com/artist/${p1.replace(/\s/g, "_")}`; // Replace with your actual URL pattern
    return `<a href="${href}" target="_blank" class="text-blue-600 hover:underline">${p1}</a>`;
  });

  // Replace [l=...] patterns
  const labelRegex = /\[l=([^\]]+)\]/g;
  text = text.replace(labelRegex, (match, p1) => {
    const href = `https://www.example.com/label/${p1.replace(/\s/g, "_")}`; // Replace with your actual URL pattern
    return `<a href="${href}" target="_blank" class="text-blue-600 hover:underline">${p1}</a>`;
  });

  // Replace [i]...[/i] patterns
  const italicRegex = /\[i\](.*?)\[\/i\]/g;
  text = text.replace(italicRegex, (match, p1) => {
    return `<i>${p1}</i>`;
  });

  // Replace specific artist patterns like [a2540427]
  const specificArtistRegex = /\[a(\d+)\]/g;
  text = text.replace(specificArtistRegex, (match, p1) => {
    const artists = {
      "94380": "Russell Simmons",
      "18844": "Henry Rollins",
      "18845": "Slayer",
      "28209": "Public Enemy",
      "135946": "Johnny Cash",
      "96218": "The Mars Volta",
      "2816118": "Malcolm Gladwell",
    };
    const href = `https://www.discogs.com/artist/${p1}`;
    const artistName = artists[p1] || `Artist ${p1}`;
    return `<a href="${href}" target="_blank" class="text-blue-600 hover:underline">${artistName}</a>`;
  });

  // Replace specific label patterns like [l4241]
  const specificLabelRegex = /\[l(\d+)\]/g;
  text = text.replace(specificLabelRegex, (match, p1) => {
    const labels = {
      "4241": "Def Jam Recordings",
      "19048": "Def American Recordings",
      "2569": "American Recordings",
      "32918": "Infinite Zero",
    };
    const href = `https://www.discogs.com/label/${p1}`;
    const labelName = labels[p1] || `Label ${p1}`;
    return `<a href="${href}" target="_blank">${labelName}</a>`;
  });

  return text;
};
