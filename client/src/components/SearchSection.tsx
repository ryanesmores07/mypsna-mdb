import { SearchBar, DisplayData } from ".";
import { useState } from "react";

const key = "DfDBmgofFwSMdzLNjRAL";
const secret = "KXFRPyshHlGOKidtXcpeJPVpmcebZTUz";

const SearchSection = () => {
  const [apiData, setApiData] = useState<any>(null);

  const handleSearch = async (query: string) => {
    try {
      const url = `https://api.discogs.com/database/search?q=${query}`;
      const discogsUrl = `${url}&key=${key}&secret=${secret}`;

      const response = await fetch(discogsUrl, {
        headers: {
          "User-Agent": "MyDiscogsApp/1.0",
          Accept: "application/json",
          Authorization: `Discogs key=${key}, secret=${secret}`,
        },
      });
      const data = await response.json();
      console.log("Full Data:", data);
      setApiData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {apiData && <DisplayData data={apiData} />}
    </>
  );
};
export default SearchSection;
