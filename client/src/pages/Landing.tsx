import { Hero, QueryResults, SearchSection } from "@/components";
import { FeaturedArtists } from "@/components/";
import { ArtistSearchResponse, customFetch } from "@/utils";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import { useContext, createContext, useState } from "react";

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
  // Extract parameters from the request URL
  const params = new URLSearchParams(new URL(request.url).searchParams);

  // Construct the URL with query parameters
  const url = `/getDefaultArtists?${params.toString()}`;

  // Make a request to your backend with query parameters
  const response = await customFetch<ArtistSearchResponse>(url);

  // Return the response data
  return response.data;
};

const LandingContext = createContext();

const Landing = () => {
  const data = useLoaderData();

  return (
    <LandingContext.Provider value={{ data }}>
      <Hero />
      <SearchSection />
      <FeaturedArtists />
    </LandingContext.Provider>
  );
};
export default Landing;
export const useLandingContext = () => useContext(LandingContext);
