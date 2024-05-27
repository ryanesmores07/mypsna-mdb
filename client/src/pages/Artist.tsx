import { type ArtistResponse } from "@/utils";
import { type LoaderFunction, useLoaderData } from "react-router-dom";
import axios from "axios";
import { ArtistInfo } from "@/components";

const key = "DfDBmgofFwSMdzLNjRAL";
const secret = "KXFRPyshHlGOKidtXcpeJPVpmcebZTUz";

export const loader: LoaderFunction = async ({ params }) => {
  const url = `https://api.discogs.com/artists/${params.artist}`;

  const response = await axios(url, {
    headers: {
      Accept: "application/json",
      Authorization: `Discogs key=${key}, secret=${secret}`,
    },
  });
  return response;
};

const Artist = () => {
  const { data } = useLoaderData() as ArtistResponse;

  return <ArtistInfo data={data} />;
};
export default Artist;
