import { Hero, SearchSection } from "@/components";
import { FeaturedArtists } from "@/components/";
import { ArtistSearchResponse, customFetch } from "@/utils";
import { LoaderFunction } from "react-router-dom";

// export const loader: LoaderFunction = async ({ request }) => {
//   const params = Object.fromEntries([
//     ...new URL(request.url).searchParams.entries(),
//   ]);
//   const response = await customFetch(url, { params });
//   return { ...response.data, params };
// };

export const loader: LoaderFunction = async ({
  request,
}): Promise<ArtistSearchResponse> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await customFetch<ArtistSearchResponse>(
    "/getDefaultArtists"
  );
  return { ...response.data };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <SearchSection />
      <FeaturedArtists />
    </>
  );
};
export default Landing;
