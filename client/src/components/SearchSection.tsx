import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { SearchInput } from ".";
import { Button } from "./ui/button";
import { useLandingContext } from "@/pages/Landing";
import axios from "axios";
import { useState } from "react";
import { CloudFog } from "lucide-react";

const key = "DfDBmgofFwSMdzLNjRAL";
const secret = "KXFRPyshHlGOKidtXcpeJPVpmcebZTUz";

const SearchSection = () => {
  const [artist, setArtist] = useState();
  // const navigate = useNavigate();

  const { params } = useLandingContext();
  const handleSearch = async (e) => {
    // e.preventDefault();
    try {
      const url = `https://api.discogs.com/database/search?q=${params}`;
      const discogsUrl = `${url}&key=${key}&secret=${secret}`;

      const response = await axios(discogsUrl);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Form
        onSubmit={handleSearch}
        className="border rounded-md px-8 py-4 grid gap-4 grid-cols-[auto_auto] place-content-center place-items-center"
      >
        <SearchInput
          type="search"
          label="Enter Artist"
          name="search"
          defaultValue=""
        />
        <Button className="self-end mb-2">Search</Button>
      </Form>
      <Link to={`/artist/${artist}`}>
        <h5>{artist}</h5>
      </Link>
    </>
  );
};
export default SearchSection;

// const handleSearch = async (query: string) => {
//   try {
//     const url = `https://api.discogs.com/database/search?q=${query}`;
//     const discogsUrl = `${url}&key=${key}&secret=${secret}`;
//     const response = await fetch(discogsUrl, {
//       headers: {
//         "User-Agent": "MyDiscogsApp/1.0",
//         Accept: "application/json",
//         Authorization: `Discogs key=${key}, secret=${secret}`,
//       },
//     });
//     const data = await response.json();
//     console.log("Full Data:", data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };
