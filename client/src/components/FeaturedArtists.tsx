import { useLoaderData } from "react-router-dom";
import { type ArtistSearchResponse } from "@/utils";

const FeaturedArtists = () => {
  const { data } = useLoaderData() as ArtistSearchResponse;
  console.log(data);
  const { pagination, results } = data;

  return (
    <div>
      {results.map((result, index) => {
        return <h4 key={index}>{result.title}</h4>;
      })}
    </div>
  );
};
export default FeaturedArtists;
